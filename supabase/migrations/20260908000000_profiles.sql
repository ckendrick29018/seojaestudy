-- profiles: one row per auth user, holds Paddle subscription/paywall state.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  is_subscribed boolean not null default false,
  subscription_current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  paddle_customer_id text,
  paddle_subscription_id text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Subscription columns are intentionally NOT user-writable: only server
-- code that has verified a real Paddle event (webhook / post-checkout
-- sync — see src/lib/paddle-provisioning.ts) may flip is_subscribed, via
-- the service-role client, which bypasses RLS entirely. Regular users get
-- no UPDATE policy on this table at all.

-- Auto-create a profile row the moment someone signs up, so the rest of
-- the app can assume a profiles row always exists for a logged-in user.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
