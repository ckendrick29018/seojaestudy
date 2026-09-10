-- Book clubs: a private reading group of up to 10 members plus an owner.
--
-- While the owner has an active subscription, any chapter the owner shares
-- into the club is readable for free by its members, even a premium one.
-- That exception is the SECURITY DEFINER function public.user_has_club_unlock
-- at the bottom of this file; it is the ONLY place the paywall is widened,
-- and src/app/lesson/[slug]/page.tsx calls it alongside the existing
-- subscription check.
--
-- Every write to these tables goes through the server actions in
-- src/app/club/actions.ts (the service-role client, after an auth check),
-- mirroring how the Paddle webhook path already works. The RLS policies
-- below only guard *direct* reads as defense in depth — there are
-- deliberately no INSERT/UPDATE/DELETE policies, so an ordinary
-- authenticated client cannot write here at all.

create table if not exists public.book_clubs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null unique references auth.users (id) on delete cascade,
  name text not null default 'My Book Club',
  -- Opaque token embedded in the invite link. Separate from `id` so it can
  -- be rotated later without changing the club's identity.
  join_code uuid not null unique default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create table if not exists public.book_club_members (
  club_id uuid not null references public.book_clubs (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'member')),
  joined_at timestamptz not null default now(),
  primary key (club_id, user_id)
);

create index if not exists book_club_members_user_idx
  on public.book_club_members (user_id);

create table if not exists public.shared_chapters (
  club_id uuid not null references public.book_clubs (id) on delete cascade,
  -- The lesson slug from src/lib/data/lessons.ts (e.g. "jane-eyre").
  lesson_slug text not null,
  shared_by uuid references auth.users (id) on delete set null,
  shared_at timestamptz not null default now(),
  primary key (club_id, lesson_slug)
);

-- Membership / ownership predicates as SECURITY DEFINER functions so the RLS
-- policies below don't have to query each other's tables (which Postgres
-- rejects as "infinite recursion detected in policy"). Running as the
-- definer skips RLS on the tables they touch, breaking the cycle.
create or replace function public.is_club_member(p_club_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.book_club_members
    where club_id = p_club_id and user_id = auth.uid()
  );
$$;

create or replace function public.is_club_owner(p_club_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.book_clubs
    where id = p_club_id and owner_id = auth.uid()
  );
$$;

revoke all on function public.is_club_member(uuid) from public;
revoke all on function public.is_club_owner(uuid) from public;
grant execute on function public.is_club_member(uuid) to authenticated;
grant execute on function public.is_club_owner(uuid) to authenticated;

alter table public.book_clubs enable row level security;
alter table public.book_club_members enable row level security;
alter table public.shared_chapters enable row level security;

create policy "Members can view their club"
  on public.book_clubs for select
  using (owner_id = auth.uid() or public.is_club_member(id));

create policy "Members see their row; owners see the roster"
  on public.book_club_members for select
  using (user_id = auth.uid() or public.is_club_owner(club_id));

create policy "Members can view chapters shared with their club"
  on public.shared_chapters for select
  using (public.is_club_member(club_id));

-- Hard cap: 10 rows with role = 'member' per club (the owner's row is
-- role = 'owner' and doesn't count). Enforced here as well as in the
-- server action so a race can't overfill a club.
create or replace function public.enforce_club_member_cap()
returns trigger
language plpgsql
as $$
begin
  if new.role = 'member' and (
    select count(*) from public.book_club_members
    where club_id = new.club_id and role = 'member'
  ) >= 10 then
    raise exception 'This book club is full (10 members maximum).'
      using errcode = 'check_violation';
  end if;
  return new;
end;
$$;

drop trigger if exists book_club_member_cap on public.book_club_members;
create trigger book_club_member_cap
  before insert on public.book_club_members
  for each row execute function public.enforce_club_member_cap();

-- The paywall exception. True when the caller is a member of some club whose
-- owner currently has an active subscription and that has this chapter
-- shared into it. SECURITY DEFINER so a member can transitively depend on
-- the owner's subscription flag without a broad read grant on profiles.
create or replace function public.user_has_club_unlock(p_lesson_slug text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.book_club_members m
    join public.book_clubs c on c.id = m.club_id
    join public.profiles p on p.id = c.owner_id
    join public.shared_chapters s
      on s.club_id = c.id and s.lesson_slug = p_lesson_slug
    where m.user_id = auth.uid()
      and p.is_subscribed = true
      and (
        p.subscription_current_period_end is null
        or p.subscription_current_period_end > now()
      )
  );
$$;

revoke all on function public.user_has_club_unlock(text) from public;
grant execute on function public.user_has_club_unlock(text) to authenticated;
