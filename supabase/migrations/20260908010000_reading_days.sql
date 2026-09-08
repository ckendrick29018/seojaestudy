-- reading_days: one row per local calendar day a signed-in learner finished a
-- lesson. The reading streak on the home screen is *derived* from this set
-- (see src/lib/daily.ts) — there is no separate counter to keep in sync.

create table if not exists public.reading_days (
  user_id uuid not null references auth.users (id) on delete cascade,
  -- The learner's *local* calendar day, "YYYY-MM-DD", sent by the client so
  -- the streak matches the day they actually saw, in any timezone.
  day date not null,
  created_at timestamptz not null default now(),
  primary key (user_id, day)
);

alter table public.reading_days enable row level security;

create policy "Users can view their own reading days"
  on public.reading_days for select
  using (auth.uid() = user_id);

create policy "Users can record their own reading days"
  on public.reading_days for insert
  with check (auth.uid() = user_id);

-- upsert() issues ON CONFLICT DO UPDATE, which needs an UPDATE policy even
-- though a conflict here just means "already read today" (nothing changes).
create policy "Users can update their own reading days"
  on public.reading_days for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
