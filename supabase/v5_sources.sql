-- Tayyor v5: data retention also covers the per-day "order sources" statistics (key "src", like "sold").
create or replace function public.tayyor_prune(p_data jsonb, p_days int) returns jsonb
language plpgsql security definer set search_path='' as $$
declare cut_ms bigint := ((extract(epoch from now()) - p_days*86400)*1000)::bigint; cutd text := to_char(current_date - p_days,'YYYY-MM-DD'); d jsonb := p_data;
begin
  if jsonb_typeof(d->'sold')='object' then
    d := jsonb_set(d,'{sold}',coalesce((select jsonb_object_agg(k,v) from jsonb_each(d->'sold') e(k,v) where k>=cutd),'{}'::jsonb)); end if;
  if jsonb_typeof(d->'src')='object' then
    d := jsonb_set(d,'{src}',coalesce((select jsonb_object_agg(k,v) from jsonb_each(d->'src') e(k,v) where k>=cutd),'{}'::jsonb)); end if;
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
