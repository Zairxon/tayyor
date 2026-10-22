-- Tayyor v7: hardening after the audit.
-- 1) internal helpers were still callable by anon (Supabase default privileges grant EXECUTE to anon directly, "revoke from public" is not enough)
revoke execute on function public.tayyor_auth(text,uuid), public.tayyor_admin_auth(uuid), public.tayyor_prune(jsonb,int), public.tayyor_origin_ok()
  from public, anon, authenticated;

-- 2) per-canteen flood limits for customer calls (a fake device id / phone cannot dodge these); the inbox can no longer be filled by cancel spam
create or replace function public.tayyor_client_order(p_slug text, p_payload jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
declare dev text; ph text; it jsonb;
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug and not disabled) then return jsonb_build_object('ok',false,'err','none'); end if;
  if length(p_payload::text)>6000 or coalesce(p_payload->>'id','') !~ '^[a-z0-9]{6,24}$' or jsonb_typeof(p_payload->'items')<>'array' then
    return jsonb_build_object('ok',false,'err','bad'); end if;
  if jsonb_array_length(p_payload->'items')>40 then return jsonb_build_object('ok',false,'err','bad'); end if;
  for it in select * from jsonb_array_elements(p_payload->'items') loop
    if jsonb_typeof(it)<>'array' or jsonb_array_length(it)<>2 or jsonb_typeof(it->0)<>'string' or jsonb_typeof(it->1)<>'number' or length(it->>0)>40 then
      return jsonb_build_object('ok',false,'err','bad'); end if;
  end loop;
  delete from public.tayyor_inbox where slug=p_slug and created_at < now()-interval '3 days';
  delete from public.tayyor_rate where at < now()-interval '2 days';
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  if exists(select 1 from public.tayyor_inbox where slug=p_slug and kind='order' and payload->>'id'=p_payload->>'id') then return jsonb_build_object('ok',true); end if;
  dev := left(regexp_replace(coalesce(p_payload->>'dev',''),'[^a-z0-9]','','g'),24);
  ph := left(regexp_replace(coalesce(p_payload->>'phone',''),'\D','','g'),15);
  if (select count(*) from public.tayyor_rate where slug=p_slug and k='g:o' and at>now()-interval '10 minutes')>=60 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  if dev<>'' and (select count(*) from public.tayyor_rate where slug=p_slug and k='d:'||dev and at>now()-interval '10 minutes')>=4 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  if ph<>'' and (select count(*) from public.tayyor_rate where slug=p_slug and k='p:'||ph and at>now()-interval '1 day')>=10 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'order',p_payload);
  insert into public.tayyor_rate(slug,k) values(p_slug,'g:o');
  if dev<>'' then insert into public.tayyor_rate(slug,k) values(p_slug,'d:'||dev); end if;
  if ph<>'' then insert into public.tayyor_rate(slug,k) values(p_slug,'p:'||ph); end if;
  return jsonb_build_object('ok',true);
end $$;

create or replace function public.tayyor_client_cancel(p_slug text, p_id text) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() then return jsonb_build_object('ok',false,'err','origin'); end if;
  if coalesce(p_id,'') !~ '^[a-z0-9]{6,24}$' or not exists(select 1 from public.tayyor_tenants where slug=p_slug and not disabled) then return jsonb_build_object('ok',false); end if;
  if (select count(*) from public.tayyor_inbox where slug=p_slug)>=300 then return jsonb_build_object('ok',false,'err','busy'); end if;
  if exists(select 1 from public.tayyor_inbox where slug=p_slug and kind='cancel' and payload->>'id'=p_id) then return jsonb_build_object('ok',true); end if;
  if (select count(*) from public.tayyor_rate where slug=p_slug and k='g:c' and at>now()-interval '10 minutes')>=60 then
    return jsonb_build_object('ok',false,'err','rate'); end if;
  insert into public.tayyor_inbox(slug,kind,payload) values(p_slug,'cancel',jsonb_build_object('id',p_id));
  insert into public.tayyor_rate(slug,k) values(p_slug,'g:c');
  return jsonb_build_object('ok',true);
end $$;

-- 3) canteen passwords: at least 6 characters (a 4-digit password falls to the 8-tries-per-10-minutes lockout in about 9 days)
create or replace function public.tayyor_set_password(p_slug text, p_token uuid, p_old text, p_new text) returns boolean
language plpgsql security definer set search_path='' as $$
declare h text;
begin
  if not public.tayyor_origin_ok() or not public.tayyor_auth(p_slug,p_token) or length(coalesce(p_new,'')) not between 6 and 64 then return false; end if;
  select pass_hash into h from public.tayyor_tenants where slug=p_slug;
  if h is null or h <> extensions.crypt(coalesce(p_old,''),h) then return false; end if;
  update public.tayyor_tenants set pass_hash=extensions.crypt(p_new,extensions.gen_salt('bf')) where slug=p_slug;
  delete from public.tayyor_sessions where slug=p_slug and token<>p_token;
  return true;
end $$;

create or replace function public.tayyor_admin_create(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_state jsonb, p_pub jsonb, p_fee bigint, p_paid_until date) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if p_slug !~ '^[a-z0-9-]{3,40}$' then return jsonb_build_object('ok',false,'err','slug'); end if;
  if length(trim(coalesce(p_name,''))) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if length(coalesce(p_pass,'')) not between 6 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
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

create or replace function public.tayyor_admin_update(p_token uuid, p_slug text, p_name text, p_pass text, p_days int, p_disabled boolean,
                                           p_fee bigint, p_paid_until date, p_notify int) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if not public.tayyor_origin_ok() or not public.tayyor_admin_auth(p_token) then return jsonb_build_object('ok',false,'err','auth'); end if;
  if not exists(select 1 from public.tayyor_tenants where slug=p_slug) then return jsonb_build_object('ok',false,'err','none'); end if;
  if p_name is not null and length(trim(p_name)) not between 1 and 80 then return jsonb_build_object('ok',false,'err','name'); end if;
  if p_pass is not null and length(p_pass) not between 6 and 64 then return jsonb_build_object('ok',false,'err','pass'); end if;
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
    update public.tayyor_state set rev=rev+1 where slug=p_slug;
  end if;
  return jsonb_build_object('ok',true);
end $$;
