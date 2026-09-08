"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Highlight, Lesson, VocabTerm } from "@/lib/types";
import { lessons } from "@/lib/data/lessons";
import {
  type StudyGrade,
  type StudyItem,
  dayKey,
  isDue,
  isYesterday,
  phraseId,
  sameDay,
  schedule,
  studyItemFromPhrase,
  studyItemFromVocab,
} from "@/lib/study";

/**
 * The study plan (spaced-repetition flashcards) and story highlights.
 *
 * Both are guest-style local state: everything lives in localStorage on the
 * device, exactly like the original saved-words feature did before sync.
 * It's kept separate from ProgressProvider (which now also talks to Supabase)
 * so this can gain its own `study_items` / `highlights` sync later without
 * disturbing that path.
 */

interface StreakState {
  current: number;
  lastReviewDay: string | null;
}

interface HighlightEntry {
  lessonSlug: string;
  sentenceId: string;
  text: string;
}

interface StudyPlanContextValue {
  hydrated: boolean;

  items: StudyItem[];
  dueItems: StudyItem[];
  streak: number;
  reviewedToday: number;
  hasItem: (id: string) => boolean;
  hasPhrase: (lessonSlug: string, text: string) => boolean;
  addVocab: (term: VocabTerm, lesson: Lesson) => void;
  addPhrase: (text: string, back: string, lesson: Lesson) => void;
  removeItem: (id: string) => void;
  gradeItem: (id: string, grade: StudyGrade) => void;

  highlights: Highlight[];
  isSentenceHighlighted: (lessonSlug: string, sentenceId: string) => boolean;
  toggleHighlight: (lessonSlug: string, sentenceId: string, text: string) => void;
  addHighlights: (entries: HighlightEntry[]) => void;
  removeHighlight: (id: string) => void;
  highlightsForLesson: (lessonSlug: string) => Highlight[];
}

const StudyPlanContext = createContext<StudyPlanContextValue | null>(null);

const ITEMS_KEY = "luminaread:study-plan";
const STREAK_KEY = "luminaread:study-streak";
const HIGHLIGHTS_KEY = "luminaread:highlights";
const LEGACY_SAVED_WORDS_KEY = "luminaread:saved-words";

const highlightId = (lessonSlug: string, sentenceId: string) => `${lessonSlug}::${sentenceId}`;

/** One-time seed so words kept via the old bookmark still show up in the plan. */
function seedFromLegacySavedWords(now: number): StudyItem[] {
  try {
    const raw = window.localStorage.getItem(LEGACY_SAVED_WORDS_KEY);
    if (!raw) return [];
    const rows = JSON.parse(raw) as Array<Record<string, unknown>>;
    return rows
      .map((w): StudyItem | null => {
        const front = typeof w.term === "string" ? w.term : "";
        if (!front) return null;
        const slug = typeof w.lessonSlug === "string" ? w.lessonSlug : "";
        const targetLanguage = lessons.find((l) => l.slug === slug)?.targetLanguage ?? "en";
        return {
          id: typeof w.id === "string" ? w.id : `${slug}:${front}`,
          type: "vocab",
          front,
          back: typeof w.translation === "string" ? w.translation : "",
          reading: typeof w.reading === "string" ? w.reading : undefined,
          example: typeof w.example === "string" ? w.example : undefined,
          exampleTranslation: typeof w.exampleTranslation === "string" ? w.exampleTranslation : undefined,
          lessonSlug: slug,
          targetLanguage,
          box: 0,
          addedAt: typeof w.savedAt === "number" ? w.savedAt : now,
          dueAt: now,
          reviewCount: 0,
        };
      })
      .filter((it): it is StudyItem => it !== null);
  } catch {
    return [];
  }
}

export function StudyPlanProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<StudyItem[]>([]);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [streakState, setStreakState] = useState<StreakState>({ current: 0, lastReviewDay: null });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const rawItems = window.localStorage.getItem(ITEMS_KEY);
      if (rawItems) {
        setItems(JSON.parse(rawItems));
      } else {
        const seeded = seedFromLegacySavedWords(Date.now());
        if (seeded.length) setItems(seeded);
      }

      const rawHighlights = window.localStorage.getItem(HIGHLIGHTS_KEY);
      if (rawHighlights) setHighlights(JSON.parse(rawHighlights));

      const rawStreak = window.localStorage.getItem(STREAK_KEY);
      if (rawStreak) setStreakState(JSON.parse(rawStreak));
    } catch {
      // localStorage unavailable or corrupt — start from an empty plan.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
    } catch {
      // best-effort persistence only
    }
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
    } catch {
      // best-effort persistence only
    }
  }, [highlights, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STREAK_KEY, JSON.stringify(streakState));
    } catch {
      // best-effort persistence only
    }
  }, [streakState, hydrated]);

  const hasItem = useCallback((id: string) => items.some((it) => it.id === id), [items]);

  const hasPhrase = useCallback(
    (lessonSlug: string, text: string) => {
      const id = phraseId(lessonSlug, text);
      return items.some((it) => it.id === id);
    },
    [items],
  );

  const addVocab = useCallback((term: VocabTerm, lesson: Lesson) => {
    setItems((prev) => (prev.some((it) => it.id === term.id) ? prev : [...prev, studyItemFromVocab(term, lesson)]));
  }, []);

  const addPhrase = useCallback((text: string, back: string, lesson: Lesson) => {
    const item = studyItemFromPhrase(text, back, lesson);
    setItems((prev) => (prev.some((it) => it.id === item.id) ? prev : [...prev, item]));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  const gradeItem = useCallback((id: string, grade: StudyGrade) => {
    const now = Date.now();
    setItems((prev) => prev.map((it) => (it.id === id ? schedule(it, grade, now) : it)));
    setStreakState((prev) => {
      const today = dayKey();
      if (prev.lastReviewDay === today) return prev;
      const continues = prev.lastReviewDay != null && isYesterday(prev.lastReviewDay);
      return { current: continues ? prev.current + 1 : 1, lastReviewDay: today };
    });
  }, []);

  const isSentenceHighlighted = useCallback(
    (lessonSlug: string, sentenceId: string) =>
      highlights.some((h) => h.lessonSlug === lessonSlug && h.sentenceId === sentenceId),
    [highlights],
  );

  const toggleHighlight = useCallback((lessonSlug: string, sentenceId: string, text: string) => {
    const id = highlightId(lessonSlug, sentenceId);
    setHighlights((prev) =>
      prev.some((h) => h.id === id)
        ? prev.filter((h) => h.id !== id)
        : [...prev, { id, lessonSlug, sentenceId, text, createdAt: Date.now() }],
    );
  }, []);

  const addHighlights = useCallback((entries: HighlightEntry[]) => {
    setHighlights((prev) => {
      const next = [...prev];
      for (const e of entries) {
        const id = highlightId(e.lessonSlug, e.sentenceId);
        if (!next.some((h) => h.id === id)) {
          next.push({ id, lessonSlug: e.lessonSlug, sentenceId: e.sentenceId, text: e.text, createdAt: Date.now() });
        }
      }
      return next.length === prev.length ? prev : next;
    });
  }, []);

  const removeHighlight = useCallback((id: string) => {
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  }, []);

  const highlightsForLesson = useCallback(
    (lessonSlug: string) => highlights.filter((h) => h.lessonSlug === lessonSlug),
    [highlights],
  );

  const dueItems = useMemo(() => {
    const now = Date.now();
    return items.filter((it) => isDue(it, now)).sort((a, b) => a.dueAt - b.dueAt);
  }, [items]);

  const reviewedToday = useMemo(
    () => items.filter((it) => it.lastReviewedAt != null && sameDay(it.lastReviewedAt)).length,
    [items],
  );

  const streak = useMemo(() => {
    const { current, lastReviewDay } = streakState;
    if (!lastReviewDay) return 0;
    if (lastReviewDay === dayKey() || isYesterday(lastReviewDay)) return current;
    return 0; // a day was missed — streak is broken
  }, [streakState]);

  const value: StudyPlanContextValue = {
    hydrated,
    items,
    dueItems,
    streak,
    reviewedToday,
    hasItem,
    hasPhrase,
    addVocab,
    addPhrase,
    removeItem,
    gradeItem,
    highlights,
    isSentenceHighlighted,
    toggleHighlight,
    addHighlights,
    removeHighlight,
    highlightsForLesson,
  };

  return <StudyPlanContext.Provider value={value}>{children}</StudyPlanContext.Provider>;
}

export function useStudyPlan(): StudyPlanContextValue {
  const ctx = useContext(StudyPlanContext);
  if (!ctx) throw new Error("useStudyPlan must be used within a StudyPlanProvider");
  return ctx;
}
