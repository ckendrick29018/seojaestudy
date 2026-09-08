"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { VocabTerm } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "./AuthProvider";

export interface SavedWord extends VocabTerm {
  lessonSlug: string;
  savedAt: number;
}

interface ProgressContextValue {
  savedWords: SavedWord[];
  completedLessons: string[];
  saveWord: (word: VocabTerm, lessonSlug: string) => void;
  removeWord: (id: string) => void;
  isWordSaved: (id: string) => boolean;
  markLessonComplete: (slug: string) => void;
  isLessonComplete: (slug: string) => boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);
const WORDS_KEY = "luminaread:saved-words";
const LESSONS_KEY = "luminaread:completed-lessons";

function readLocal(): { words: SavedWord[]; lessons: string[] } {
  try {
    const w = window.localStorage.getItem(WORDS_KEY);
    const l = window.localStorage.getItem(LESSONS_KEY);
    return { words: w ? JSON.parse(w) : [], lessons: l ? JSON.parse(l) : [] };
  } catch {
    return { words: [], lessons: [] };
  }
}

function writeLocal(words: SavedWord[], lessons: string[]) {
  try {
    window.localStorage.setItem(WORDS_KEY, JSON.stringify(words));
    window.localStorage.setItem(LESSONS_KEY, JSON.stringify(lessons));
  } catch {
    // best-effort persistence only
  }
}

/**
 * Progress (saved vocabulary + completed lessons) works two ways:
 *
 *  - Signed out (or Supabase not configured yet): everything lives in
 *    localStorage only, exactly like the original guest-only version of
 *    this app. Nothing leaves the device.
 *  - Signed in: Supabase is the source of truth, so progress follows the
 *    learner across devices. The moment a guest signs in, any local-only
 *    words/lessons are pushed up once (so nothing from a guest session is
 *    lost), then every read/write goes through Supabase from then on.
 *
 * Writes are optimistic: local state updates immediately, and the Supabase
 * call happens in the background (fire-and-forget, logged on failure) so
 * the UI never blocks on network round-trips.
 */
export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading, authAvailable } = useAuth();
  const [savedWords, setSavedWords] = useState<SavedWord[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const hydratedForGuest = useRef(false);
  const mergedForUserId = useRef<string | null>(null);

  // Guest path: hydrate from localStorage once auth state is known and
  // there's no logged-in user, and keep local changes persisted.
  useEffect(() => {
    if (authLoading || user) return;
    if (hydratedForGuest.current) return;
    hydratedForGuest.current = true;
    const { words, lessons } = readLocal();
    setSavedWords(words);
    setCompletedLessons(lessons);
  }, [authLoading, user]);

  useEffect(() => {
    if (authLoading || user) return;
    if (!hydratedForGuest.current) return;
    writeLocal(savedWords, completedLessons);
  }, [savedWords, completedLessons, authLoading, user]);

  // Signed-in path: on sign-in, merge any local guest progress into
  // Supabase once, then treat Supabase as the source of truth.
  useEffect(() => {
    if (!authAvailable || !user) return;
    if (mergedForUserId.current === user.id) return;
    mergedForUserId.current = user.id;

    (async () => {
      const supabase = createClient();
      const { words: localWords, lessons: localLessons } = readLocal();

      const [{ data: remoteWordRows }, { data: remoteLessonRows }] = await Promise.all([
        supabase.from("saved_words").select("*").eq("user_id", user.id),
        supabase.from("completed_lessons").select("lesson_slug").eq("user_id", user.id),
      ]);

      const remoteWords: SavedWord[] = (remoteWordRows ?? []).map((row) => ({
        id: row.vocab_id,
        term: row.term,
        reading: row.reading ?? undefined,
        partOfSpeech: row.part_of_speech,
        translation: row.translation,
        example: row.example,
        exampleTranslation: row.example_translation,
        lessonSlug: row.lesson_slug,
        savedAt: new Date(row.saved_at).getTime(),
      }));
      const remoteLessonSlugs = (remoteLessonRows ?? []).map((row) => row.lesson_slug);

      const remoteWordIds = new Set(remoteWords.map((w) => w.id));
      const wordsToPush = localWords.filter((w) => !remoteWordIds.has(w.id));
      const remoteLessonSet = new Set(remoteLessonSlugs);
      const lessonsToPush = localLessons.filter((slug) => !remoteLessonSet.has(slug));

      if (wordsToPush.length > 0) {
        const { error } = await supabase.from("saved_words").upsert(
          wordsToPush.map((w) => ({
            user_id: user.id,
            lesson_slug: w.lessonSlug,
            vocab_id: w.id,
            term: w.term,
            reading: w.reading ?? null,
            part_of_speech: w.partOfSpeech,
            translation: w.translation,
            example: w.example,
            example_translation: w.exampleTranslation,
          })),
          { onConflict: "user_id,vocab_id" }
        );
        if (error) console.error("progress: failed to merge local saved words into Supabase", error);
      }
      if (lessonsToPush.length > 0) {
        const { error } = await supabase
          .from("completed_lessons")
          .upsert(
            lessonsToPush.map((slug) => ({ user_id: user.id, lesson_slug: slug })),
            { onConflict: "user_id,lesson_slug" }
          );
        if (error) console.error("progress: failed to merge local completed lessons into Supabase", error);
      }

      setSavedWords([...remoteWords, ...wordsToPush]);
      setCompletedLessons([...remoteLessonSlugs, ...lessonsToPush]);
    })().catch((err) => {
      console.error("progress: failed to load Supabase progress", err);
    });
  }, [user, authAvailable]);

  const saveWord = useCallback(
    (word: VocabTerm, lessonSlug: string) => {
      setSavedWords((prev) => {
        if (prev.some((w) => w.id === word.id)) return prev;
        return [...prev, { ...word, lessonSlug, savedAt: Date.now() }];
      });
      if (user) {
        createClient()
          .from("saved_words")
          .upsert(
            {
              user_id: user.id,
              lesson_slug: lessonSlug,
              vocab_id: word.id,
              term: word.term,
              reading: word.reading ?? null,
              part_of_speech: word.partOfSpeech,
              translation: word.translation,
              example: word.example,
              example_translation: word.exampleTranslation,
            },
            { onConflict: "user_id,vocab_id" }
          )
          .then(({ error }) => {
            if (error) console.error("progress: failed to save word", error);
          });
      }
    },
    [user]
  );

  const removeWord = useCallback(
    (id: string) => {
      setSavedWords((prev) => prev.filter((w) => w.id !== id));
      if (user) {
        createClient()
          .from("saved_words")
          .delete()
          .eq("user_id", user.id)
          .eq("vocab_id", id)
          .then(({ error }) => {
            if (error) console.error("progress: failed to remove word", error);
          });
      }
    },
    [user]
  );

  const isWordSaved = useCallback((id: string) => savedWords.some((w) => w.id === id), [savedWords]);

  const markLessonComplete = useCallback(
    (slug: string) => {
      setCompletedLessons((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
      if (user) {
        createClient()
          .from("completed_lessons")
          .upsert({ user_id: user.id, lesson_slug: slug }, { onConflict: "user_id,lesson_slug" })
          .then(({ error }) => {
            if (error) console.error("progress: failed to mark lesson complete", error);
          });
      }
    },
    [user]
  );

  const isLessonComplete = useCallback((slug: string) => completedLessons.includes(slug), [completedLessons]);

  const value: ProgressContextValue = {
    savedWords,
    completedLessons,
    saveWord,
    removeWord,
    isWordSaved,
    markLessonComplete,
    isLessonComplete,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
  return ctx;
}
