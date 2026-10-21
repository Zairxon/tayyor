-- Tayyor schema v2 (multi-tenant). Each canteen ("tenant") has its own name, password and private data.
-- All access goes through SECURITY DEFINER functions; the tables themselves are closed to anon/authenticated (RLS on, no policies).
--   tayyor_tenants  : slug, name, bcrypt password hash, login lockout
--   tayyor_state    : private full state (staff only, needs a session token)
--   tayyor_pub      : public snapshot (menu, availability, order statuses without personal data)
--   tayyor_sessions : staff session tokens (30 days)
--   tayyor_inbox    : orders / cancellations sent by customers, processed by the staff apps

drop function if exists public.tayyor_get(text), public.tayyor_init(text,text,jsonb), public.tayyor_put(text,jsonb,bigint),
  public.tayyor_check_pin(text,text), public.tayyor_set_pin(text,text,text);
do $$ begin alter publication supabase_realtime drop table public.tayyor_state; exception when others then null; end $$;
drop table if exists public.tayyor_pins, public.tayyor_inbox, public.tayyor_sessions, public.tayyor_pub, public.tayyor_state, public.tayyor_tenants cascade;

create table public.tayyor_tenants(
  slug text primary key check (slug ~ '^[a-z0-9-]{3,40}$'),
  name text not null check (length(name) between 1 and 80),
  pass_hash text not null,
  fails int not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now());
create table public.tayyor_state(
  slug text primary key references public.tayyor_tenants(slug) on delete cascade,
  data jsonb not null, rev bigint not null default 0, updated_at timestamptz not null default now());
create table public.tayyor_pub(
  slug text primary key references public.tayyor_tenants(slug) on delete cascade,
  data jsonb not null, rev bigint not null default 0);
create table public.tayyor_sessions(
  token uuid primary key default gen_random_uuid(),
  slug text not null references public.tayyor_tenants(slug) on delete cascade,
  expires_at timestamptz not null);
create table public.tayyor_inbox(
  id bigserial primary key,
  slug text not null references public.tayyor_tenants(slug) on delete cascade,
  kind text not null check (kind in ('order','cancel')),
  payload jsonb not null,
  created_at timestamptz not null default now());
create index on public.tayyor_inbox(slug,id);
create index on public.tayyor_sessions(slug);

alter table public.tayyor_tenants enable row level security;
alter table public.tayyor_state enable row level security;
alter table public.tayyor_pub enable row level security;
alter table public.tayyor_sessions enable row level security;
alter table public.tayyor_inbox enable row level security;
revoke all on public.tayyor_tenants, public.tayyor_state, public.tayyor_pub, public.tayyor_sessions, public.tayyor_inbox from anon, authenticated;
revoke all on sequence public.tayyor_inbox_id_seq from anon, authenticated;

-- internal: is this a valid staff token for the tenant?
create function public.tayyor_auth(p_slug text, p_token uuid) returns boolean
language sql security definer set search_path='' stable as $$
  select exists(select 1 from public.tayyor_sessions where slug=p_slug and token=p_token and expires_at>now()) $$;

create function public.tayyor_slug_free(p_slug text) returns boolean
language sql security definer set search_path='' stable as $$
  select p_slug ~ '^[a-z0-9-]{3,40}$' and not exists(select 1 from public.tayyor_tenants where slug=p_slug) $$;

create function public.tayyor_register(p_slug text, p_name text, p_pass text, p_state jsonb, p_pub jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare tok uuid;
begin
  if p_slug !~ '^[a-z0-9-]{3,40}$' then return jsonb_build_object('ok',false,'err','slug'); end if;
  if length(coalesce(p_name,'')) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if length(coalesce(p_pass,'')) not between 4 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
  if length(p_state::text)>300000 or length(p_pub::text)>100000 then return jsonb_build_object('ok',false,'err','big'); end if;
  if (select count(*) from public.tayyor_tenants)>=5000 then return jsonb_build_object('ok',false,'err','full'); end if;
  if exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','taken'); end if;
  insert into public.tayyor_tenants(slug,name,pass_hash) values(p_slug,trim(p_name),extensions.crypt(p_pass,extensions.gen_salt('bf')));
  insert into public.tayyor_state(slug,data) values(p_slug,p_state);
  insert into public.tayyor_pub(slug,data) values(p_slug,p_pub);
  insert into public.tayyor_sessions(slug,expires_at) values(p_slug,now()+interval '30 days') returning token into tok;
  return jsonb_build_object('ok',true,'token',tok,'name',trim(p_name));
end $$;

create function public.tayyor_login(p_slug text, p_pass text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare t public.tayyor_tenants; tok uuid;
begin
  select * into t from public.tayyor_tenants where slug=p_slug;
  if not found then return jsonb_build_object('ok',false,'err','bad'); end if;
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

create function public.tayyor_logout(p_slug text, p_token uuid) returns void
language sql security definer set search_path='' as $$
  delete from public.tayyor_sessions where slug=p_slug and token=p_token $$;

create function public.tayyor_rev(p_slug text, p_token uuid) returns bigint
language sql security definer set search_path='' stable as $$
  select case when public.tayyor_auth(p_slug,p_token) then coalesce((select rev from public.tayyor_state where slug=p_slug),-3) else -3 end $$;

create function public.tayyor_state_get(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select jsonb_build_object('data',data,'rev',rev) from public.tayyor_state
   where slug=p_slug and public.tayyor_auth(p_slug,p_token) $$;

create function public.tayyor_state_put(p_slug text, p_token uuid, p_data jsonb, p_pub jsonb, p_rev bigint) returns bigint
language plpgsql security definer set search_path='' as $$
declare r bigint;
begin
  if not public.tayyor_auth(p_slug,p_token) then return -3; end if;
  if length(p_data::text)>300000 or length(p_pub::text)>100000 then return -2; end if;
  update public.tayyor_state set data=p_data, rev=rev+1, updated_at=now() where slug=p_slug and rev=p_rev returning rev into r;
  if r is null then return -1; end if;
  update public.tayyor_pub set data=p_pub, rev=r where slug=p_slug;
  return r;
end $$;

-- public read for customers: menu + availability + only the requested order ids (random ids, no personal data inside)
create function public.tayyor_pub_get(p_slug text, p_since bigint, p_ids text[]) returns jsonb
language plpgsql security definer set search_path='' stable as $$
declare t text; p public.tayyor_pub;
begin
  select name into t from public.tayyor_tenants where slug=p_slug;
  if t is null then return jsonb_build_object('none',true); end if;
  select * into p from public.tayyor_pub where slug=p_slug;
  if p.slug is null then return jsonb_build_object('none',true); end if;
  if p.rev=p_since then return jsonb_build_object('same',true,'rev',p.rev); end if;
  return jsonb_build_object('rev',p.rev,'name',t,'data',p.data-'orders',
    'orders',coalesce((select jsonb_object_agg(k,v) from jsonb_each(coalesce(p.data->'orders','{}'::jsonb)) as e(k,v) where k = any(coalesce(p_ids,'{}'::text[]))),'{}'::jsonb));
end $$;

create function public.tayyor_client_order(p_slug text, p_payload jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','none'); end if;
  if length(p_payload::text)>6000 or coalesce(p_payload->>'id','') !~ '^[a-z0-9]{6,24}$' or jsonb_typeof(p_payload->'items')<>'array' then
    return jsonb_build_object('ok',false,'err','bad'); end if;
  if jsonb_array_length(p_payload->'items')>40 then return jsonb_build_object('ok',false,'err','bad'); end if;
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  if exists(select 1 from public.tayyor_inbox where slug=p_slug and kind='order' and payload->>'id'=p_payload->>'id') then return jsonb_build_object('ok',true); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'order',p_payload);
  return jsonb_build_object('ok',true);
end $$;

create function public.tayyor_client_cancel(p_slug text, p_id text) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if coalesce(p_id,'') !~ '^[a-z0-9]{6,24}$' or not exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false); end if;
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'cancel',jsonb_build_object('id',p_id));
  return jsonb_build_object('ok',true);
end $$;

create function public.tayyor_inbox_get(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select coalesce(jsonb_agg(jsonb_build_object('id',id,'kind',kind,'payload',payload) order by id),'[]'::jsonb)
    from (select * from public.tayyor_inbox where slug=p_slug and public.tayyor_auth(p_slug,p_token) order by id limit 50) x $$;

create function public.tayyor_inbox_ack(p_slug text, p_token uuid, p_ids bigint[]) returns void
language sql security definer set search_path='' as $$
  delete from public.tayyor_inbox where slug=p_slug and id = any(p_ids) and public.tayyor_auth(p_slug,p_token) $$;

create function public.tayyor_set_password(p_slug text, p_token uuid, p_old text, p_new text) returns boolean
language plpgsql security definer set search_path='' as $$
declare h text;
begin
  if not public.tayyor_auth(p_slug,p_token) or length(coalesce(p_new,'')) not between 4 and 64 then return false; end if;
  select pass_hash into h from public.tayyor_tenants where slug=p_slug;
  if h is null or h <> extensions.crypt(coalesce(p_old,''),h) then return false; end if;
  update public.tayyor_tenants set pass_hash=extensions.crypt(p_new,extensions.gen_salt('bf')) where slug=p_slug;
  delete from public.tayyor_sessions where slug=p_slug and token<>p_token;
  return true;
end $$;

create function public.tayyor_rename(p_slug text, p_token uuid, p_name text) returns boolean
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_auth(p_slug,p_token) or length(trim(coalesce(p_name,''))) not between 1 and 80 then return false; end if;
  update public.tayyor_tenants set name=trim(p_name) where slug=p_slug;
  return true;
end $$;

revoke execute on function public.tayyor_auth(text,uuid), public.tayyor_slug_free(text), public.tayyor_register(text,text,text,jsonb,jsonb), public.tayyor_login(text,text),
  public.tayyor_logout(text,uuid), public.tayyor_rev(text,uuid), public.tayyor_state_get(text,uuid), public.tayyor_state_put(text,uuid,jsonb,jsonb,bigint),
  public.tayyor_pub_get(text,bigint,text[]), public.tayyor_client_order(text,jsonb), public.tayyor_client_cancel(text,text),
  public.tayyor_inbox_get(text,uuid), public.tayyor_inbox_ack(text,uuid,bigint[]), public.tayyor_set_password(text,uuid,text,text),
  public.tayyor_rename(text,uuid,text) from public;
grant execute on function public.tayyor_slug_free(text), public.tayyor_register(text,text,text,jsonb,jsonb), public.tayyor_login(text,text),
  public.tayyor_logout(text,uuid), public.tayyor_rev(text,uuid), public.tayyor_state_get(text,uuid), public.tayyor_state_put(text,uuid,jsonb,jsonb,bigint),
  public.tayyor_pub_get(text,bigint,text[]), public.tayyor_client_order(text,jsonb), public.tayyor_client_cancel(text,text),
  public.tayyor_inbox_get(text,uuid), public.tayyor_inbox_ack(text,uuid,bigint[]), public.tayyor_set_password(text,uuid,text,text),
  public.tayyor_rename(text,uuid,text) to anon, authenticated;
