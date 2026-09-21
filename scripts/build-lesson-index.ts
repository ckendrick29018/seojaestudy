/**
 * Generates `src/lib/data/lessons-index.generated.ts` — a lightweight,
 * metadata-only view of every lesson (no story text, vocab, or comprehension
 * questions), for pages that render a card/listing UI and never needed the
 * full lesson in the first place.
 *
 * Why this exists: `src/lib/data/lessons.ts` is a ~1.4MB module (full story
 * text + translations for every lesson). Importing it into a client
 * component ships the whole thing to the browser, even for a component that
 * only reads `title`/`coverImage`/`level` to render a card. This script
 * produces a plain literal array with no `import` of `lessons.ts`, so nothing
 * that imports the generated file pulls the heavy data in transitively.
 *
 * Run after adding or editing a lesson (alongside `npm run audio` and
 * `npm run dict:check` — see CONTENT_BACKLOG.md) and commit the result:
 *
 *   npm run lessons:index
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { lessons } from "../src/lib/data/lessons";
import { BOOKS } from "../src/lib/data/books";
import { estimateReadingTime } from "../src/lib/utils";
import type { LessonMeta } from "../src/lib/types";

const HEAVY_FIELDS = ["paragraphs", "vocab", "questions", "summaryPrompt"] as const;

const lessonIndex: LessonMeta[] = lessons.map((lesson) => {
  const meta = { ...lesson, readingMinutes: estimateReadingTime(lesson) } as LessonMeta & Record<string, unknown>;
  for (const field of HEAVY_FIELDS) delete meta[field];
  return meta;
});

// Books (src/lib/data/books.ts) reference lessons by slug, so a typo there would
// silently drop a chapter from the UI. Fail the run instead.
function validateBooks(): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const titleBySlug = new Map(lessons.map((l) => [l.slug, l.title]));
  const bookOfSlug = new Map<string, string>();
  const ids = new Set<string>();

  for (const book of BOOKS) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(book.id)) errors.push(`book "${book.id}": id must be lowercase-hyphenated`);
    if (ids.has(book.id)) errors.push(`book "${book.id}": duplicate id`);
    ids.add(book.id);
    if (book.chapters.length < 2) errors.push(`book "${book.id}": needs at least two chapters (a single story is just a lesson)`);

    for (const slug of book.chapters) {
      const title = titleBySlug.get(slug);
      if (title === undefined) {
        errors.push(`book "${book.id}": no lesson with slug "${slug}"`);
        continue;
      }
      const other = bookOfSlug.get(slug);
      if (other) errors.push(`lesson "${slug}" is in both "${other}" and "${book.id}"`);
      bookOfSlug.set(slug, book.id);
      if (title !== book.title && !title.startsWith(`${book.title}: `)) {
        warnings.push(`book "${book.id}": lesson "${slug}" is titled "${title}"; the chapter list will show that whole title instead of a short subtitle`);
      }
    }
  }
  return { errors, warnings };
}

const bookCheck = validateBooks();
bookCheck.warnings.forEach((w) => console.warn(`warning: ${w}`));
if (bookCheck.errors.length > 0) {
  bookCheck.errors.forEach((e) => console.error(`error: ${e}`));
  process.exit(1);
}

const outPath = join(__dirname, "..", "src", "lib", "data", "lessons-index.generated.ts");

const header = `/**
 * GENERATED FILE — do not hand-edit.
 * Run \`npm run lessons:index\` (see scripts/build-lesson-index.ts) to regenerate
 * after changing src/lib/data/lessons.ts.
 */
import type { LessonMeta } from "../types";

export const lessonIndex: LessonMeta[] = `;

writeFileSync(outPath, `${header}${JSON.stringify(lessonIndex, null, 2)};\n`, "utf8");

console.log(`Wrote ${lessonIndex.length} lessons to ${outPath}`);
