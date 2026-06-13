create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username, email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.email
  )
  on conflict (id) do update
  set
    username = excluded.username,
    email = excluded.email,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create table if not exists public.dua_categories (
  id text primary key,
  title text not null,
  subtitle text,
  icon_key text not null default 'quran',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.duas (
  id text primary key,
  category_id text not null references public.dua_categories(id) on delete cascade,
  title text not null,
  reference text,
  arabic text not null,
  transliteration text,
  bangla text not null,
  info text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists duas_category_id_sort_order_idx
on public.duas (category_id, sort_order);

alter table public.dua_categories enable row level security;
alter table public.duas enable row level security;

drop policy if exists "Anyone can read active dua categories" on public.dua_categories;
create policy "Anyone can read active dua categories"
on public.dua_categories
for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Anyone can read active duas" on public.duas;
create policy "Anyone can read active duas"
on public.duas
for select
to anon, authenticated
using (is_active = true);
