-- Tayyor v6: cheaper polling (one light call instead of rev + inbox) and order rate limits per device / phone.
create table if not exists public.tayyor_rate(
  id bigserial primary key,
  slug text not null,
  k text not null,
  at timestamptz not null default now());
create index if not exists tayyor_rate_idx on public.tayyor_rate(slug,k,at);
alter table public.tayyor_rate enable row level security;
revoke all on public.tayyor_rate from anon, authenticated;
revoke all on sequence public.tayyor_rate_id_seq from anon, authenticated;

create or replace function public.tayyor_poll(p_slug text, p_token uuid) returns jsonb
language sql security definer set search_path='' stable as $$
  select case when public.tayyor_origin_ok() and public.tayyor_auth(p_slug,p_token)
    then jsonb_build_object('rev',coalesce((select rev from public.tayyor_state where slug=p_slug),-3),
                            'inbox',(select count(*) from public.tayyor_inbox where slug=p_slug))
    else jsonb_build_object('rev',-3,'inbox',0) end $$;
revoke execute on function public.tayyor_poll(text,uuid) from public;
grant execute on function public.tayyor_poll(text,uuid) to anon, authenticated;

create or replace function public.tayyor_client_order(p_slug text, p_payload jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare dev text; ph text;
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug and not disabled) then return jsonb_build_object('ok',false,'err','none'); end if;
  if length(p_payload::text)>6000 or coalesce(p_payload->>'id','') !~ '^[a-z0-9]{6,24}$' or jsonb_typeof(p_payload->'items')<>'array' then
    return jsonb_build_object('ok',false,'err','bad'); end if;
  if jsonb_array_length(p_payload->'items')>40 then return jsonb_build_object('ok',false,'err','bad'); end if;
  delete from public.tayyor_inbox where slug=p_slug and created_at < now()-interval '3 days';
  delete from public.tayyor_rate where at < now()-interval '2 days';
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  if exists(select 1 from public.tayyor_inbox where slug=p_slug and kind='order' and payload->>'id'=p_payload->>'id') then return jsonb_build_object('ok',true); end if;
  dev := left(regexp_replace(coalesce(p_payload->>'dev',''),'[^a-z0-9]','','g'),24);
  ph := left(regexp_replace(coalesce(p_payload->>'phone',''),'\D','','g'),15);
  if dev<>'' and (select count(*) from public.tayyor_rate where slug=p_slug and k='d:'||dev and at>now()-interval '10 minutes')>=4 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  if ph<>'' and (select count(*) from public.tayyor_rate where slug=p_slug and k='p:'||ph and at>now()-interval '1 day')>=10 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'order',p_payload);
  if dev<>'' then insert into public.tayyor_rate(slug,k) values(p_slug,'d:'||dev); end if;
  if ph<>'' then insert into public.tayyor_rate(slug,k) values(p_slug,'p:'||ph); end if;
  return jsonb_build_object('ok',true);
end $$;
