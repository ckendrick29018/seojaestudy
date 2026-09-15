-- saved_lessons: lessons a learner has bookmarked to read later ("Add to
-- library"), distinct from completed_lessons which only tracks lessons
-- actually finished.

create table if not exists public.saved_lessons (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null,
  saved_at timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);

alter table public.saved_lessons enable row level security;

create policy "Users can view their own saved lessons"
  on public.saved_lessons for select
  using (auth.uid() = user_id);

create policy "Users can save their own lessons"
  on public.saved_lessons for insert
  with check (auth.uid() = user_id);

-- upsert() issues ON CONFLICT DO UPDATE, which needs an UPDATE policy even
-- though a conflict here is just "save the same lesson twice".
create policy "Users can update their own saved lessons"
  on public.saved_lessons for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can remove their own saved lessons"
  on public.saved_lessons for delete
  using (auth.uid() = user_id);
