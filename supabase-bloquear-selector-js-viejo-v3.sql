-- Bloquea escrituras de selector.html hechas por JS anterior a la version actual.
-- Ejecutar una vez en Supabase SQL Editor.
-- Cierra dos huecos:
-- 1) INSERT/UPDATE con code_version < 3.
-- 2) DELETE directo desde JS viejo. La version nueva borra con tombstones via UPDATE v3.

create or replace function public.bloquear_selector_js_viejo_v3()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'DELETE' then
    return null;
  end if;

  if coalesce(new.code_version, 0) < 3 then
    return null;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_bloquear_selector_js_viejo_v3_write on public.selecciones;
drop trigger if exists trg_bloquear_selector_js_viejo_v3_delete on public.selecciones;
drop trigger if exists trg_bloquear_selector_js_viejo_v3 on public.selecciones;

create trigger trg_bloquear_selector_js_viejo_v3_write
before insert or update on public.selecciones
for each row
execute function public.bloquear_selector_js_viejo_v3();

create trigger trg_bloquear_selector_js_viejo_v3_delete
before delete on public.selecciones
for each row
execute function public.bloquear_selector_js_viejo_v3();
