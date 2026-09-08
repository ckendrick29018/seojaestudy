-- completed_lessons: which lessons a logged-in learner has marked complete.

create table if not exists public.completed_lessons (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);

alter table public.completed_lessons enable row level security;

create policy "Users can view their own completed lessons"
  on public.completed_lessons for select
  using (auth.uid() = user_id);

create policy "Users can mark their own lessons complete"
  on public.completed_lessons for insert
  with check (auth.uid() = user_id);

-- upsert() issues ON CONFLICT DO UPDATE, which needs an UPDATE policy even
-- though a conflict here is just "mark the same lesson complete twice".
create policy "Users can update their own completed lessons"
  on public.completed_lessons for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
