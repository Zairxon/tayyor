-- Tayyor schema (applied as migration "tayyor_init"). Clients reach data only via the RPC functions below.
create table public.tayyor_state(
  slug text primary key check (slug ~ '^[a-z0-9-]{2,40}$'),
  data jsonb not null, rev bigint not null default 0, updated_at timestamptz not null default now());
create table public.tayyor_pins(slug text primary key references public.tayyor_state(slug) on delete cascade, pin text not null);
alter table public.tayyor_state enable row level security;
alter table public.tayyor_pins enable row level security;
create policy tayyor_state_read on public.tayyor_state for select to anon, authenticated using (true);
revoke all on public.tayyor_state from anon, authenticated;
grant select on public.tayyor_state to anon, authenticated;
revoke all on public.tayyor_pins from anon, authenticated;

create function public.tayyor_get(p_slug text) returns jsonb language sql security definer set search_path='' as $$
  select jsonb_build_object('data',data,'rev',rev) from public.tayyor_state where slug=p_slug $$;
create function public.tayyor_init(p_slug text, p_pin text, p_data jsonb) returns boolean language plpgsql security definer set search_path='' as $$
begin
  if p_slug !~ '^[a-z0-9-]{2,40}$' or length(p_data::text)>300000 or length(p_pin)>20 then return false; end if;
  insert into public.tayyor_state(slug,data) values(p_slug,p_data) on conflict do nothing;
  if found then insert into public.tayyor_pins(slug,pin) values(p_slug,p_pin); return true; end if;
  return false;
end $$;
create function public.tayyor_put(p_slug text, p_data jsonb, p_rev bigint) returns bigint language plpgsql security definer set search_path='' as $$
declare r bigint;
begin
  if length(p_data::text)>300000 then return -2; end if;
  update public.tayyor_state set data=p_data, rev=rev+1, updated_at=now() where slug=p_slug and rev=p_rev returning rev into r;
  return coalesce(r,-1);
end $$;
create function public.tayyor_check_pin(p_slug text, p_pin text) returns boolean language sql security definer set search_path='' as $$
  select exists(select 1 from public.tayyor_pins where slug=p_slug and pin=p_pin) $$;
create function public.tayyor_set_pin(p_slug text, p_old text, p_new text) returns boolean language plpgsql security definer set search_path='' as $$
begin
  if length(p_new) not between 3 and 20 then return false; end if;
  update public.tayyor_pins set pin=p_new where slug=p_slug and pin=p_old;
  return found;
end $$;
revoke execute on function public.tayyor_get(text), public.tayyor_init(text,text,jsonb), public.tayyor_put(text,jsonb,bigint), public.tayyor_check_pin(text,text), public.tayyor_set_pin(text,text,text) from public;
grant execute on function public.tayyor_get(text), public.tayyor_init(text,text,jsonb), public.tayyor_put(text,jsonb,bigint), public.tayyor_check_pin(text,text), public.tayyor_set_pin(text,text,text) to anon, authenticated;
alter publication supabase_realtime add table public.tayyor_state;
