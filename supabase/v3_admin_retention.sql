-- Tayyor v3: canteens are created only by the owner (admin app); per-canteen data retention; origin allow-list.
-- Applied on top of schema.sql (v2) as migration "tayyor_v3_admin_retention".

-- 1) public self-registration is gone
drop function if exists public.tayyor_register(text,text,text,jsonb,jsonb), public.tayyor_slug_free(text), public.tayyor_rename(text,uuid,text);

-- 2) new columns / tables
alter table public.tayyor_tenants
  add column if not exists retain_days int not null default 10 check (retain_days between 1 and 365),
  add column if not exists disabled boolean not null default false;
create table if not exists public.tayyor_settings(key text primary key, value jsonb not null);
create table if not exists public.tayyor_admin(
  id int primary key default 1 check (id=1), pass_hash text not null, fails int not null default 0, locked_until timestamptz);
create table if not exists public.tayyor_admin_sessions(
  token uuid primary key default gen_random_uuid(), expires_at timestamptz not null);
alter table public.tayyor_settings enable row level security;
alter table public.tayyor_admin enable row level security;
alter table public.tayyor_admin_sessions enable row level security;
revoke all on public.tayyor_settings, public.tayyor_admin, public.tayyor_admin_sessions from anon, authenticated;
insert into public.tayyor_settings(key,value) values('allowed_origins','["https://zairxon.github.io"]'::jsonb) on conflict do nothing;

-- 3) a program copied to another site cannot talk to the database: browsers always send Origin, it must be on the list
create or replace function public.tayyor_origin_ok() returns boolean
language plpgsql security definer set search_path='' stable as $$
declare h text; o text; allowed jsonb;
begin
  begin h := current_setting('request.headers', true); exception when others then h := null; end;
  if h is null or h = '' then return true; end if;
  o := (h::jsonb)->>'origin';
  if o is null then return true; end if;
  select value into allowed from public.tayyor_settings where key='allowed_origins';
  return allowed is null or allowed ? o;
end $$;

create or replace function public.tayyor_auth(p_slug text, p_token uuid) returns boolean
language sql security definer set search_path='' stable as $$
  select exists(select 1 from public.tayyor_sessions s join public.tayyor_tenants t on t.slug=s.slug
                 where s.slug=p_slug and s.token=p_token and s.expires_at>now() and not t.disabled) $$;

create or replace function public.tayyor_admin_auth(p_token uuid) returns boolean
language sql security definer set search_path='' stable as $$
  select exists(select 1 from public.tayyor_admin_sessions where token=p_token and expires_at>now()) $$;

-- 4) data retention: closed orders, sales per day, receipts and the event feed older than N days are removed
create or replace function public.tayyor_prune(p_data jsonb, p_days int) returns jsonb
language plpgsql security definer set search_path='' as $$
declare cut_ms bigint := ((extract(epoch from now()) - p_days*86400)*1000)::bigint; cutd text := to_char(current_date - p_days,'YYYY-MM-DD'); d jsonb := p_data;
begin
  if jsonb_typeof(d->'sold')='object' then
    d := jsonb_set(d,'{sold}',coalesce((select jsonb_object_agg(k,v) from jsonb_each(d->'sold') e(k,v) where k>=cutd),'{}'::jsonb)); end if;
  if jsonb_typeof(d->'orders')='array' then
    d := jsonb_set(d,'{orders}',coalesce((select jsonb_agg(e.o order by e.i) from jsonb_array_elements(d->'orders') with ordinality e(o,i)
          where e.o->>'status'='open' or coalesce((e.o->>'created')::bigint,0)>=cut_ms),'[]'::jsonb)); end if;
  if jsonb_typeof(d->'inLog')='array' then
    d := jsonb_set(d,'{inLog}',coalesce((select jsonb_agg(e.o order by e.i) from jsonb_array_elements(d->'inLog') with ordinality e(o,i)
          where coalesce((e.o->>'t')::bigint,0)>=cut_ms),'[]'::jsonb)); end if;
  if jsonb_typeof(d->'feed')='array' then
    d := jsonb_set(d,'{feed}',coalesce((select jsonb_agg(e.o order by e.i) from jsonb_array_elements(d->'feed') with ordinality e(o,i)
          where coalesce((e.o->>'t')::bigint,0)>=cut_ms),'[]'::jsonb)); end if;
  return d;
end $$;

-- 5) public / staff functions: origin + disabled checks
create or replace function public.tayyor_login(p_slug text, p_pass text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare t public.tayyor_tenants; tok uuid;
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  select * into t from public.tayyor_tenants where slug=p_slug;
  if not found then return jsonb_build_object('ok',false,'err','bad'); end if;
  if t.disabled then return jsonb_build_object('ok',false,'err','disabled'); end if;
  if t.locked_until is not null and t.locked_until>now() then return jsonb_build_object('ok',false,'err','locked'); end if;
  if t.pass_hash = extensions.crypt(coalesce(p_pass,''),t.pass_hash) then
    update public.tayyor_tenants set fails=0, locked_until=null where slug=p_slug;
    delete from public.tayyor_sessions where expires_at<now();
    insert into public.tayyor_sessions(slug,expires_at) values(p_slug,now()+interval '30 days') returning token into tok;
    return jsonb_build_object('ok',true,'token',tok,'name',t.name);
  end if;
  update public.tayyor_tenants set
    locked_until=case when fails+1>=8 then now()+interval '10 minutes' else null end,
    fails=case when fails+1>=8 then 0 else fails+1 end
   where slug=p_slug;
  return jsonb_build_object('ok',false,'err','bad');
end $$;

create or replace function public.tayyor_rev(p_slug text, p_token uuid) returns bigint
language sql security definer set search_path='' stable as $$
  select case when public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token) then coalesce((select rev from public.tayyor_state where slug=p_slug),-3) else -3 end $$;

create or replace function public.tayyor_state_get(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select jsonb_build_object('data',s.data,'rev',s.rev,'retain',t.retain_days,'name',t.name)
    from public.tayyor_state s join public.tayyor_tenants t on t.slug=s.slug
   where s.slug=p_slug and public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token) $$;

create or replace function public.tayyor_state_put(p_slug text, p_token uuid, p_data jsonb, p_pub jsonb, p_rev bigint) returns bigint
language plpgsql security definer set search_path='' as $$
declare r bigint; days int;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_auth(p_slug,p_token) then return -3; end if;
  if length(p_data::text)>1000000 or length(p_pub::text)>100000 then return -2; end if;
  select retain_days into days from public.tayyor_tenants where slug=p_slug;
  update public.tayyor_state set data=public.tayyor_prune(p_data,coalesce(days,10)), rev=rev+1, updated_at=now() where slug=p_slug and rev=p_rev returning rev into r;
  if r is null then return -1; end if;
  update public.tayyor_pub set data=p_pub, rev=r where slug=p_slug;
  return r;
end $$;

create or replace function public.tayyor_pub_get(p_slug text, p_since bigint, p_ids text[]) returns jsonb
language plpgsql security definer set search_path='' stable as $$
declare t public.tayyor_tenants; p public.tayyor_pub;
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('none',true,'err','origin'); end if;
  select * into t from public.tayyor_tenants where slug=p_slug;
  if t.slug is null or t.disabled then return jsonb_build_object('none',true); end if;
  select * into p from public.tayyor_pub where slug=p_slug;
  if p.slug is null then return jsonb_build_object('none',true); end if;
  if p.rev=p_since then return jsonb_build_object('same',true,'rev',p.rev); end if;
  return jsonb_build_object('rev',p.rev,'name',t.name,'data',p.data-'orders',
    'orders',coalesce((select jsonb_object_agg(k,v) from jsonb_each(coalesce(p.data->'orders','{}'::jsonb)) as e(k,v) where k = any(coalesce(p_ids,'{}'::text[]))),'{}'::jsonb));
end $$;

create or replace function public.tayyor_client_order(p_slug text, p_payload jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug and not disabled) then return jsonb_build_object('ok',false,'err','none'); end if;
  if length(p_payload::text)>6000 or coalesce(p_payload->>'id','') !~ '^[a-z0-9]{6,24}$' or jsonb_typeof(p_payload->'items')<>'array' then
    return jsonb_build_object('ok',false,'err','bad'); end if;
  if jsonb_array_length(p_payload->'items')>40 then return jsonb_build_object('ok',false,'err','bad'); end if;
  delete from public.tayyor_inbox where slug=p_slug and created_at < now()-interval '3 days';
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  if exists(select 1 from public.tayyor_inbox where slug=p_slug and kind='order' and payload->>'id'=p_payload->>'id') then return jsonb_build_object('ok',true); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'order',p_payload);
  return jsonb_build_object('ok',true);
end $$;

create or replace function public.tayyor_client_cancel(p_slug text, p_id text) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  if coalesce(p_id,'') !~ '^[a-z0-9]{6,24}$' or not exists(select 1 from public.tayyor_tenants where slug=p_slug and not disabled) then return jsonb_build_object('ok',false); end if;
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'cancel',jsonb_build_object('id',p_id));
  return jsonb_build_object('ok',true);
end $$;

create or replace function public.tayyor_inbox_get(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select coalesce(jsonb_agg(jsonb_build_object('id',id,'kind',kind,'payload',payload) order by id),'[]'::jsonb)
    from (select * from public.tayyor_inbox where slug=p_slug and public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token) order by id limit 50) x $$;

create or replace function public.tayyor_inbox_ack(p_slug text, p_token uuid, p_ids bigint[]) returns void
language sql security definer set search_path='' as $$
  delete from public.tayyor_inbox where slug=p_slug and id = any(p_ids) and public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token) $$;

create or replace function public.tayyor_set_password(p_slug text, p_token uuid, p_old text, p_new text) returns boolean
language plpgsql security definer set search_path='' as $$
declare h text;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_auth(p_slug,p_token) or length(coalesce(p_new,'')) not between 4 and 64 then return false; end if;
  select pass_hash into h from public.tayyor_tenants where slug=p_slug;
  if h is null or h <> extensions.crypt(coalesce(p_old,''),h) then return false; end if;
  update public.tayyor_tenants set pass_hash=extensions.crypt(p_new,extensions.gen_salt('bf')) where slug=p_slug;
  delete from public.tayyor_sessions where slug=p_slug and token<>p_token;
  return true;
end $$;

-- 6) admin ("regulator") functions
create function public.tayyor_admin_login(p_pass text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare a public.tayyor_admin; tok uuid;
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  select * into a from public.tayyor_admin where id=1;
  if not found then return jsonb_build_object('ok',false,'err','bad'); end if;
  if a.locked_until is not null and a.locked_until>now() then return jsonb_build_object('ok',false,'err','locked'); end if;
  if a.pass_hash = extensions.crypt(coalesce(p_pass,''),a.pass_hash) then
    update public.tayyor_admin set fails=0, locked_until=null where id=1;
    delete from public.tayyor_admin_sessions where expires_at<now();
    insert into public.tayyor_admin_sessions(expires_at) values(now()+interval '12 hours') returning token into tok;
    return jsonb_build_object('ok',true,'token',tok);
  end if;
  update public.tayyor_admin set
    locked_until=case when fails+1>=5 then now()+interval '15 minutes' else null end,
    fails=case when fails+1>=5 then 0 else fails+1 end where id=1;
  return jsonb_build_object('ok',false,'err','bad');
end $$;

create function public.tayyor_admin_logout(p_token uuid) returns void
language sql security definer set search_path='' as $$
  delete from public.tayyor_admin_sessions where token=p_token $$;

create function public.tayyor_admin_list(p_token uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare res jsonb;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false); end if;
  update public.tayyor_state s set data=public.tayyor_prune(s.data,t.retain_days)
    from public.tayyor_tenants t where t.slug=s.slug and s.updated_at < now()-interval '12 hours';
  select coalesce(jsonb_agg(jsonb_build_object('slug',t.slug,'name',t.name,'created',t.created_at,'days',t.retain_days,'disabled',t.disabled,
           'updated',s.updated_at,'size',pg_column_size(s.data),'inbox',(select count(*) from public.tayyor_inbox i where i.slug=t.slug)) order by t.created_at),'[]'::jsonb)
    into res from public.tayyor_tenants t left join public.tayyor_state s on s.slug=t.slug;
  return jsonb_build_object('ok',true,'list',res,'origins',coalesce((select value from public.tayyor_settings where key='allowed_origins'),'[]'::jsonb));
end $$;

create function public.tayyor_admin_create(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_state jsonb, p_pub jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if p_slug !~ '^[a-z0-9-]{3,40}$' then return jsonb_build_object('ok',false,'err','slug'); end if;
  if length(trim(coalesce(p_name,''))) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if length(coalesce(p_pass,'')) not between 4 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
  if coalesce(p_days,10) not between 1 and 365 then return jsonb_build_object('ok',false,'err','days'); end if;
  if length(p_state::text)>1000000 or length(p_pub::text)>100000 then return jsonb_build_object('ok',false,'err','big'); end if;
  if exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','taken'); end if;
  insert into public.tayyor_tenants(slug,name,pass_hash,retain_days) values(p_slug,trim(p_name),extensions.crypt(p_pass,extensions.gen_salt('bf')),coalesce(p_days,10));
  insert into public.tayyor_state(slug,data) values(p_slug,p_state);
  insert into public.tayyor_pub(slug,data) values(p_slug,p_pub);
  return jsonb_build_object('ok',true);
end $$;

-- every argument except the token is optional: null = leave unchanged
create function public.tayyor_admin_update(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_disabled boolean) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','none'); end if;
  if p_name is not null and length(trim(p_name)) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if p_pass is not null and length(p_pass) not between 4 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
  if p_days is not null and p_days not between 1 and 365 then return jsonb_build_object('ok',false,'err','days'); end if;
  update public.tayyor_tenants set
    name=coalesce(trim(p_name),name),
    pass_hash=case when p_pass is null then pass_hash else extensions.crypt(p_pass,extensions.gen_salt('bf')) end,
    retain_days=coalesce(p_days,retain_days),
    disabled=coalesce(p_disabled,disabled),
    fails=case when p_pass is null then fails else 0 end,
    locked_until=case when p_pass is null then locked_until else null end
   where slug=p_slug;
  if p_pass is not null or coalesce(p_disabled,false) then delete from public.tayyor_sessions where slug=p_slug; end if;
  if p_days is not null then update public.tayyor_state s set data=public.tayyor_prune(s.data,p_days) where s.slug=p_slug; end if;
  return jsonb_build_object('ok',true);
end $$;

create function public.tayyor_admin_delete(p_token uuid, p_slug text) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  delete from public.tayyor_tenants where slug=p_slug;
  return jsonb_build_object('ok',true);
end $$;

create function public.tayyor_admin_set_password(p_token uuid, p_old text, p_new text) returns boolean
language plpgsql security definer set search_path='' as $$
declare h text;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) or length(coalesce(p_new,'')) not between 8 and 64 then return false; end if;
  select pass_hash into h from public.tayyor_admin where id=1;
  if h is null or h <> extensions.crypt(coalesce(p_old,''),h) then return false; end if;
  update public.tayyor_admin set pass_hash=extensions.crypt(p_new,extensions.gen_salt('bf')) where id=1;
  delete from public.tayyor_admin_sessions where token<>p_token;
  return true;
end $$;

create function public.tayyor_admin_set_origins(p_token uuid, p_origins jsonb) returns boolean
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) or jsonb_typeof(p_origins)<>'array' or jsonb_array_length(p_origins)=0 then return false; end if;
  update public.tayyor_settings set value=p_origins where key='allowed_origins';
  return true;
end $$;

revoke execute on function public.tayyor_origin_ok(), public.tayyor_admin_auth(uuid), public.tayyor_prune(jsonb,int),
  public.tayyor_admin_login(text), public.tayyor_admin_logout(uuid), public.tayyor_admin_list(uuid),
  public.tayyor_admin_create(uuid,text,text,text,int,jsonb,jsonb), public.tayyor_admin_update(uuid,text,text,text,int,boolean),
  public.tayyor_admin_delete(uuid,text), public.tayyor_admin_set_password(uuid,text,text), public.tayyor_admin_set_origins(uuid,jsonb) from public;
grant execute on function public.tayyor_admin_login(text), public.tayyor_admin_logout(uuid), public.tayyor_admin_list(uuid),
  public.tayyor_admin_create(uuid,text,text,text,int,jsonb,jsonb), public.tayyor_admin_update(uuid,text,text,text,int,boolean),
  public.tayyor_admin_delete(uuid,text), public.tayyor_admin_set_password(uuid,text,text), public.tayyor_admin_set_origins(uuid,jsonb) to anon, authenticated;
