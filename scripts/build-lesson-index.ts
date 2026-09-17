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
import { estimateReadingTime } from "../src/lib/utils";
import type { LessonMeta } from "../src/lib/types";

const HEAVY_FIELDS = ["paragraphs", "vocab", "questions", "summaryPrompt"] as const;

const lessonIndex: LessonMeta[] = lessons.map((lesson) => {
  const meta = { ...lesson, readingMinutes: estimateReadingTime(lesson) } as LessonMeta & Record<string, unknown>;
  for (const field of HEAVY_FIELDS) delete meta[field];
  return meta;
});

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
