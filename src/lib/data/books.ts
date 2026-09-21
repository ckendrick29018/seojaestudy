/**
 * Multi-chapter books.
 *
 * A lesson is still one self-contained graded story (`lessons.ts`); a *book*
 * just strings several of them together in reading order, so the app can show
 * "Part 2 of 6", offer a "next part" link, roll progress up across parts, and
 * put a "Continue reading" row on the dashboard. Lessons that aren't listed
 * here are standalone stories and behave exactly as before.
 *
 * Adding a chapter to a novel:
 *  1. Write the lesson in `lessons.ts` (title convention: "Book title: Chapter
 *     subtitle", e.g. "Jane Eyre: Lowood" — the part after the colon is what
 *     the chapter list shows).
 *  2. Append its slug to that book's `chapters` below, in reading order.
 *  3. `npm run lessons:index` — it also validates this file (unknown slugs, a
 *     lesson in two books, a one-chapter "book").
 *
 * This file holds only slugs and titles, never story text, so client
 * components can import it without pulling in the 1.4MB lessons module.
 */
export interface Book {
  /** URL slug for `/book/[id]`. Lowercase letters, digits and hyphens. */
  id: string;
  /** Title of the whole work, in the lesson's target language. */
  title: string;
  /** The same title in the learner's support language. */
  titleTranslation: string;
  /** Lesson slugs in reading order. At least two. */
  chapters: string[];
}

export const BOOKS: Book[] = [
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    titleTranslation: "오만과 편견",
    chapters: [
      "pride-and-prejudice",
      "pride-and-prejudice-proposal",
      "pride-and-prejudice-letter",
      "pride-and-prejudice-pemberley",
    ],
  },
  {
    id: "jane-eyre",
    title: "Jane Eyre",
    titleTranslation: "제인 에어",
    chapters: ["jane-eyre", "jane-eyre-lowood", "jane-eyre-rochester", "jane-eyre-orchard"],
  },
  {
    id: "little-women",
    title: "Little Women",
    titleTranslation: "작은 아씨들",
    chapters: ["little-women", "little-women-jo-and-amy", "little-women-jos-hair"],
  },
  {
    id: "anne-of-green-gables",
    title: "Anne of Green Gables",
    titleTranslation: "빨간 머리 앤",
    chapters: ["anne-of-green-gables", "anne-of-green-gables-with-an-e", "anne-of-green-gables-carrots"],
  },
  {
    id: "a-little-princess",
    title: "A Little Princess",
    titleTranslation: "소공녀",
    chapters: ["a-little-princess", "a-little-princess-the-attic"],
  },
  {
    id: "the-secret-garden",
    title: "The Secret Garden",
    titleTranslation: "비밀의 화원",
    chapters: ["the-secret-garden", "the-secret-garden-martha"],
  },
  {
    id: "sense-and-sensibility",
    title: "Sense and Sensibility",
    titleTranslation: "이성과 감성",
    chapters: ["sense-and-sensibility", "sense-and-sensibility-willoughby", "sense-and-sensibility-london"],
  },
  {
    id: "dracula",
    title: "Dracula",
    titleTranslation: "드라큘라",
    chapters: ["dracula", "dracula-the-castle", "dracula-the-three-women"],
  },
];

/** Book that a lesson belongs to, with its 0-based position. Cheap: no lesson data. */
const POSITION_BY_SLUG = new Map<string, { book: Book; index: number }>();
for (const book of BOOKS) {
  book.chapters.forEach((slug, index) => POSITION_BY_SLUG.set(slug, { book, index }));
}

export function findBookForLesson(slug: string): { book: Book; index: number } | undefined {
  return POSITION_BY_SLUG.get(slug);
}

/**
 * Which part to offer next: the first unfinished part after the last one the
 * reader completed, else the first unfinished part anywhere, else undefined
 * (every part is done). Pure, so it works for a book page and the dashboard.
 */
export function nextUnfinishedIndex(slugs: string[], isComplete: (slug: string) => boolean): number | undefined {
  let lastDone = -1;
  slugs.forEach((slug, i) => {
    if (isComplete(slug)) lastDone = i;
  });
  for (let i = lastDone + 1; i < slugs.length; i++) {
    if (!isComplete(slugs[i])) return i;
  }
  const anywhere = slugs.findIndex((slug) => !isComplete(slug));
  return anywhere === -1 ? undefined : anywhere;
}

export function findBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}
