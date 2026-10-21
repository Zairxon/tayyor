-- Tayyor v4: monthly billing per canteen (fee, paid-until date, reminder days, payment log).
-- Applied on top of v3 as migration "tayyor_v4_billing".
alter table public.tayyor_tenants
  add column if not exists fee bigint not null default 0 check (fee>=0),
  add column if not exists paid_until date,
  add column if not exists notify_days int not null default 5 check (notify_days between 0 and 60);

create table if not exists public.tayyor_payments(
  id bigserial primary key,
  slug text not null references public.tayyor_tenants(slug) on delete cascade,
  amount bigint not null check (amount>=0),
  paid_at timestamptz not null default now(),
  until date not null);
create index if not exists tayyor_payments_slug_idx on public.tayyor_payments(slug,id);
alter table public.tayyor_payments enable row level security;
revoke all on public.tayyor_payments from anon, authenticated;
revoke all on sequence public.tayyor_payments_id_seq from anon, authenticated;

drop function if exists public.tayyor_admin_create(uuid,text,text,text,int,jsonb,jsonb), public.tayyor_admin_update(uuid,text,text,text,int,boolean);

-- the canteen sees only its own due date, fee and reminder window
create or replace function public.tayyor_state_get(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select jsonb_build_object('data',s.data,'rev',s.rev,'retain',t.retain_days,'name',t.name,
           'bill',jsonb_build_object('until',t.paid_until,'fee',t.fee,'notify',t.notify_days))
    from public.tayyor_state s join public.tayyor_tenants t on t.slug=s.slug
   where s.slug=p_slug and public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token) $$;

create or replace function public.tayyor_admin_list(p_token uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare res jsonb;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false); end if;
  update public.tayyor_state s set data=public.tayyor_prune(s.data,t.retain_days)
    from public.tayyor_tenants t where t.slug=s.slug and s.updated_at < now()-interval '12 hours';
  select coalesce(jsonb_agg(jsonb_build_object('slug',t.slug,'name',t.name,'created',t.created_at,'days',t.retain_days,'disabled',t.disabled,
           'fee',t.fee,'until',t.paid_until,'notify',t.notify_days,
           'pays',coalesce((select jsonb_agg(jsonb_build_object('t',q.paid_at,'a',q.amount,'u',q.until) order by q.id desc)
                              from (select * from public.tayyor_payments p where p.slug=t.slug order by p.id desc limit 3) q),'[]'::jsonb),
           'updated',s.updated_at,'size',pg_column_size(s.data),'inbox',(select count(*) from public.tayyor_inbox i where i.slug=t.slug)) order by t.created_at),'[]'::jsonb)
    into res from public.tayyor_tenants t left join public.tayyor_state s on s.slug=t.slug;
  return jsonb_build_object('ok',true,'list',res,'origins',coalesce((select value from public.tayyor_settings where key='allowed_origins'),'[]'::jsonb));
end $$;

create function public.tayyor_admin_create(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_state jsonb, p_pub jsonb, p_fee bigint, p_paid_until date) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if p_slug !~ '^[a-z0-9-]{3,40}$' then return jsonb_build_object('ok',false,'err','slug'); end if;
  if length(trim(coalesce(p_name,''))) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if length(coalesce(p_pass,'')) not between 4 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
  if coalesce(p_days,10) not between 1 and 365 then return jsonb_build_object('ok',false,'err','days'); end if;
  if coalesce(p_fee,0) < 0 then return jsonb_build_object('ok',false,'err','fee'); end if;
  if length(p_state::text)>1000000 or length(p_pub::text)>100000 then return jsonb_build_object('ok',false,'err','big'); end if;
  if exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','taken'); end if;
  insert into public.tayyor_tenants(slug,name,pass_hash,retain_days,fee,paid_until)
    values(p_slug,trim(p_name),extensions.crypt(p_pass,extensions.gen_salt('bf')),coalesce(p_days,10),coalesce(p_fee,0),p_paid_until);
  insert into public.tayyor_state(slug,data) values(p_slug,p_state);
  insert into public.tayyor_pub(slug,data) values(p_slug,p_pub);
  return jsonb_build_object('ok',true);
end $$;

-- every argument except the token and slug is optional: null = leave unchanged
create function public.tayyor_admin_update(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_disabled boolean,
                                           p_fee bigint, p_paid_until date, p_notify int) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','none'); end if;
  if p_name is not null and length(trim(p_name)) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if p_pass is not null and length(p_pass) not between 4 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
  if p_days is not null and p_days not between 1 and 365 then return jsonb_build_object('ok',false,'err','days'); end if;
  if p_fee is not null and p_fee < 0 then return jsonb_build_object('ok',false,'err','fee'); end if;
  if p_notify is not null and p_notify not between 0 and 60 then return jsonb_build_object('ok',false,'err','notify'); end if;
  update public.tayyor_tenants set
    name=coalesce(trim(p_name),name),
    pass_hash=case when p_pass is null then pass_hash else extensions.crypt(p_pass,extensions.gen_salt('bf')) end,
    retain_days=coalesce(p_days,retain_days),
    disabled=coalesce(p_disabled,disabled),
    fee=coalesce(p_fee,fee),
    paid_until=coalesce(p_paid_until,paid_until),
    notify_days=coalesce(p_notify,notify_days),
    fails=case when p_pass is null then fails else 0 end,
    locked_until=case when p_pass is null then locked_until else null end
   where slug=p_slug;
  if p_pass is not null or coalesce(p_disabled,false) then delete from public.tayyor_sessions where slug=p_slug; end if;
  if p_days is not null then update public.tayyor_state s set data=public.tayyor_prune(s.data,p_days) where s.slug=p_slug; end if;
  if p_name is not null or p_fee is not null or p_paid_until is not null or p_notify is not null then
    update public.tayyor_state set rev=rev+1 where slug=p_slug;   -- staff devices re-read the new billing info
  end if;
  return jsonb_build_object('ok',true);
end $$;

-- payment received: extends the paid-until date by one month (from the current due date if it is still ahead) and logs it
create function public.tayyor_admin_pay(p_token uuid, p_slug text, p_amount bigint) returns jsonb
language plpgsql security definer set search_path='' as $$
declare t public.tayyor_tenants; base date; nu date;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  select * into t from public.tayyor_tenants where slug=p_slug;
  if not found then return jsonb_build_object('ok',false,'err','none'); end if;
  base := case when t.paid_until is null or t.paid_until < current_date then current_date else t.paid_until end;
  nu := (base + interval '1 month')::date;
  update public.tayyor_tenants set paid_until=nu where slug=p_slug;
  insert into public.tayyor_payments(slug,amount,until) values(p_slug,coalesce(p_amount,t.fee),nu);
  update public.tayyor_state set rev=rev+1 where slug=p_slug;
  return jsonb_build_object('ok',true,'until',nu,'amount',coalesce(p_amount,t.fee));
end $$;

revoke execute on function public.tayyor_admin_create(uuid,text,text,text,int,jsonb,jsonb,bigint,date),
  public.tayyor_admin_update(uuid,text,text,text,int,boolean,bigint,date,int), public.tayyor_admin_pay(uuid,text,bigint) from public;
grant execute on function public.tayyor_admin_create(uuid,text,text,text,int,jsonb,jsonb,bigint,date),
  public.tayyor_admin_update(uuid,text,text,text,int,boolean,bigint,date,int), public.tayyor_admin_pay(uuid,text,bigint) to anon, authenticated;
