import type { Lesson, LangCode, VocabTerm } from "./types";

/**
 * Spaced-repetition model for the study plan.
 *
 * Cards live in localStorage today (see StudyPlanProvider). The shape here is
 * deliberately flat and serialisable so that, like ProgressProvider's saved
 * words, it can later be mirrored to a `study_items` table with no change to
 * the calling components.
 */

export type StudyGrade = "again" | "good" | "easy";
export type StudyItemType = "vocab" | "phrase";

export interface StudyItem {
  /** For vocab cards this is the VocabTerm id; for phrases, a stable hash of lesson + text. */
  id: string;
  type: StudyItemType;
  /** Prompt side — the word/phrase in the lesson's target language. */
  front: string;
  /** Answer side — its translation. */
  back: string;
  reading?: string;
  example?: string;
  exampleTranslation?: string;
  lessonSlug: string;
  /** Language of `front`, so review can pronounce it with the right voice. */
  targetLanguage: LangCode;
  /** Leitner box, 0..MAX_BOX. Higher = longer gap until the next review. */
  box: number;
  addedAt: number;
  dueAt: number;
  lastReviewedAt?: number;
  reviewCount: number;
}

export const MAX_BOX = 5;

const DAY = 86_400_000;

/** Index = Leitner box. Box 0 is due immediately (same-session re-review). */
export const BOX_INTERVALS_MS = [0, DAY, 3 * DAY, 7 * DAY, 16 * DAY, 35 * DAY];

export function nextBox(box: number, grade: StudyGrade): number {
  if (grade === "again") return 0;
  if (grade === "easy") return Math.min(box + 2, MAX_BOX);
  return Math.min(box + 1, MAX_BOX);
}

/** Returns a new item with its box and due date advanced for the given grade. */
export function schedule(item: StudyItem, grade: StudyGrade, now: number = Date.now()): StudyItem {
  const box = nextBox(item.box, grade);
  return {
    ...item,
    box,
    dueAt: now + BOX_INTERVALS_MS[box],
    lastReviewedAt: now,
    reviewCount: item.reviewCount + 1,
  };
}

export function isDue(item: StudyItem, now: number = Date.now()): boolean {
  return item.dueAt <= now;
}

/** Stable id for a free-text phrase card, so re-adding the same selection is idempotent. */
export function phraseId(lessonSlug: string, text: string): string {
  const key = text.trim().toLowerCase().replace(/\s+/g, "-");
  return `phrase:${lessonSlug}:${key.slice(0, 80)}`;
}

export function studyItemFromVocab(term: VocabTerm, lesson: Lesson, now: number = Date.now()): StudyItem {
  return {
    id: term.id,
    type: "vocab",
    front: term.term,
    back: term.translation,
    reading: term.reading,
    example: term.example,
    exampleTranslation: term.exampleTranslation,
    lessonSlug: lesson.slug,
    targetLanguage: lesson.targetLanguage,
    box: 0,
    addedAt: now,
    dueAt: now,
    reviewCount: 0,
  };
}

export function studyItemFromPhrase(
  text: string,
  back: string,
  lesson: Lesson,
  now: number = Date.now(),
): StudyItem {
  return {
    id: phraseId(lesson.slug, text),
    type: "phrase",
    front: text.trim(),
    back,
    lessonSlug: lesson.slug,
    targetLanguage: lesson.targetLanguage,
    box: 0,
    addedAt: now,
    dueAt: now,
    reviewCount: 0,
  };
}

/** Local-time YYYY-MM-DD key, used for the day-streak counter. */
export function dayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function isYesterday(key: string, ref: Date = new Date()): boolean {
  const y = new Date(ref);
  y.setDate(y.getDate() - 1);
  return key === dayKey(y);
}

export function sameDay(ts: number, ref: Date = new Date()): boolean {
  return dayKey(new Date(ts)) === dayKey(ref);
}
