import type { CEFRLevel, Lesson } from "./types";
import { targetLanguageFor, type LearnDirection } from "./onboarding";
import { dayKey } from "./study";

/**
 * The daily-habit layer: a reading streak and the "lesson of the day".
 *
 * Everything here is pure and serialisable, in the same spirit as study.ts.
 * The streak is *derived* from the raw set of days a lesson was completed, so
 * there is no counter to keep consistent — see DailyProvider for storage.
 * The lesson of the day is a deterministic function of the date plus the
 * learner's onboarding answers, so it needs no storage and is identical on
 * every device.
 */

export interface DailyProgress {
  /** Distinct local calendar days a lesson was completed, "YYYY-MM-DD", ascending. */
  days: string[];
}

export const EMPTY_DAILY: DailyProgress = { days: [] };

/** Parse a "YYYY-MM-DD" day-key into a local-time Date at midnight. */
function parseDayKey(key: string): Date {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

/** The calendar day immediately before `key`. Uses calendar math, so DST-safe. */
export function prevDayKey(key: string): string {
  const d = parseDayKey(key);
  d.setDate(d.getDate() - 1);
  return dayKey(d);
}

/** The calendar day immediately after `key`. */
export function nextDayKey(key: string): string {
  const d = parseDayKey(key);
  d.setDate(d.getDate() + 1);
  return dayKey(d);
}

/** Fold a completion on `day` into the day set. Idempotent within a day. */
export function addReadDay(p: DailyProgress, day: string = dayKey()): DailyProgress {
  if (p.days.includes(day)) return p;
  return { days: [...p.days, day].sort() };
}

/** Union two day sets into one sorted, de-duplicated list (used on sign-in merge). */
export function mergeDays(a: string[], b: string[]): string[] {
  return [...new Set([...a, ...b])].sort();
}

/** Has a lesson already been completed today? */
export function hasReadToday(p: DailyProgress, today: string = dayKey()): boolean {
  return p.days.includes(today);
}

/**
 * Consecutive days ending today — or yesterday, if today is still pending
 * (so the streak doesn't visibly drop to 0 until a day is actually missed).
 */
export function currentStreak(p: DailyProgress, today: string = dayKey()): number {
  const set = new Set(p.days);
  if (set.size === 0) return 0;

  let anchor = today;
  if (!set.has(anchor)) {
    anchor = prevDayKey(today);
    if (!set.has(anchor)) return 0; // last read was more than a day ago — broken
  }

  let count = 0;
  for (let cur = anchor; set.has(cur); cur = prevDayKey(cur)) count++;
  return count;
}

/** The longest run of consecutive days the learner has ever reached. */
export function longestStreak(p: DailyProgress): number {
  const sorted = [...new Set(p.days)].sort();
  if (sorted.length === 0) return 0;

  let best = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    run = sorted[i] === nextDayKey(sorted[i - 1]) ? run + 1 : 1;
    if (run > best) best = run;
  }
  return best;
}

/** Total number of distinct days a lesson was completed. */
export function totalReadDays(p: DailyProgress): number {
  return new Set(p.days).size;
}

// --- Lesson of the day ---------------------------------------------------------

/** CEFR ordering, so "near my level" is a distance. */
const LEVEL_RANK: Record<CEFRLevel, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/**
 * Rough keyword hints per onboarding interest id, matched against a lesson's
 * free-text `topic`. Deliberately simple substring matching — no external
 * service, and easy to extend as the library grows.
 */
const INTEREST_KEYWORDS: Record<string, string[]> = {
  folktales: ["folk", "fable", "tale", "myth", "legend"],
  romance: ["romance", "love"],
  daily: ["daily", "everyday", "life", "slice"],
  travel: ["travel", "journey", "trip"],
  food: ["food", "cook", "recipe", "meal", "kitchen"],
  culture: ["culture", "history", "historical", "tradition", "heritage"],
  work: ["work", "business", "office", "career", "job"],
  news: ["news", "current", "event", "politic"],
  pop: ["film", "movie", "music", "pop", "drama", "song"],
};

function topicMatchesInterest(topic: string, interestId: string): boolean {
  const keywords = INTEREST_KEYWORDS[interestId];
  if (!keywords) return false;
  const t = topic.toLowerCase();
  return keywords.some((k) => t.includes(k));
}

/** Small deterministic string hash (FNV-1a), used to rotate the daily pick. */
function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface DailyPickInput {
  lessons: Lesson[];
  level: CEFRLevel | null;
  interests: string[];
  direction: LearnDirection | null;
  /** Defaults to today's day-key. Pass a fixed value for tests. */
  day?: string;
}

/**
 * The "lesson of the day": one deterministic pick per calendar day.
 *
 * Pure — the same inputs always yield the same lesson, so it needs no storage
 * and is identical on every device. It leans on the learner's onboarding
 * answers (reading direction, CEFR level, interests) and, among equally-good
 * lessons, rotates with a date-seeded hash so a large library keeps surfacing
 * something fresh. Completed lessons are intentionally *not* filtered out, so
 * today's pick stays stable even after the learner finishes it.
 */
export function pickLessonOfDay({
  lessons,
  level,
  interests,
  direction,
  day = dayKey(),
}: DailyPickInput): Lesson | null {
  if (lessons.length === 0) return null;

  const readingLang = direction ? targetLanguageFor(direction) : null;
  const pool = readingLang ? lessons.filter((l) => l.targetLanguage === readingLang) : lessons;
  const candidates = pool.length > 0 ? pool : lessons;

  const scored = candidates.map((lesson) => {
    const levelPenalty = level ? Math.abs(LEVEL_RANK[lesson.level] - LEVEL_RANK[level]) : 0;
    const interestHit = interests.some((id) => topicMatchesInterest(lesson.topic, id));
    // Higher is better: level proximity dominates, an interest match nudges,
    // and the per-day hash is a stable tie-breaker that rotates the pick.
    const score = -levelPenalty * 10 + (interestHit ? 3 : 0);
    return { lesson, score, rotator: hashStr(`${day}:${lesson.slug}`) };
  });

  scored.sort((a, b) => b.score - a.score || a.rotator - b.rotator);
  return scored[0]?.lesson ?? null;
}
