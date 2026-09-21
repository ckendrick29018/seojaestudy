import type { Lesson } from "./types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Fill `{name}` placeholders in a translated string: fill(t("bookPartOf"), { n: 2, total: 6 }). */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) => (key in vars ? String(vars[key]) : whole));
}

/**
 * Rough reading-time estimate tuned for language learners rather than
 * fluent native readers (slower words-per-minute than typical estimates).
 */
export function estimateReadingTime(lesson: Lesson): number {
  const wordsPerMinute = lesson.targetLanguage === "ko" ? 90 : 120;
  const totalWords = lesson.paragraphs
    .flat()
    .reduce((sum, sentence) => sum + sentence.text.trim().split(/\s+/).filter(Boolean).length, 0);
  return Math.max(1, Math.round(totalWords / wordsPerMinute));
}
