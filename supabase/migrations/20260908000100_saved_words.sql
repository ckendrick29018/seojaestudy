-- saved_words: a logged-in learner's vocabulary deck, synced across devices.
-- Mirrors the shape of src/lib/types.ts VocabTerm plus which user/lesson it
-- came from. `vocab_id` is the id from src/lib/data/lessons.ts (e.g. "fg-v3").

create table if not exists public.saved_words (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null,
  vocab_id text not null,
  term text not null,
  reading text,
  part_of_speech text not null,
  translation text not null,
  example text not null,
  example_translation text not null,
  saved_at timestamptz not null default now(),
  unique (user_id, vocab_id)
);

alter table public.saved_words enable row level security;

create policy "Users can view their own saved words"
  on public.saved_words for select
  using (auth.uid() = user_id);

create policy "Users can save their own words"
  on public.saved_words for insert
  with check (auth.uid() = user_id);

-- upsert() issues ON CONFLICT DO UPDATE, which needs an UPDATE policy even
-- though a conflict here is just "save the same word twice" (nothing about
-- an existing row actually changes).
create policy "Users can update their own saved words"
  on public.saved_words for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can remove their own saved words"
  on public.saved_words for delete
  using (auth.uid() = user_id);

create index if not exists saved_words_user_id_idx on public.saved_words (user_id);
