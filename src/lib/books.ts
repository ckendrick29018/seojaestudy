import { lessonIndex } from "./data/lessons-index.generated";
import { BOOKS, findBook, findBookForLesson, type Book } from "./data/books";
import type { LessonMeta } from "./types";

/**
 * A book with its chapters resolved to display metadata. Small and plain-JSON
 * on purpose: the lesson page (a server component) builds one and hands it to
 * client components as a prop, so the lesson page never ships the whole lesson
 * index to the browser. Client code that only needs the type can import it
 * with `import type` and pays nothing.
 */
export interface BookView {
  id: string;
  title: string;
  titleTranslation: string;
  author?: string;
  coverImage?: string;
  coverEmoji: string;
  chapters: BookChapterView[];
}

export interface BookChapterView {
  slug: string;
  /** Chapter subtitle ("Lowood"), or the lesson's whole title when it has none. */
  title: string;
  titleTranslation: string;
  level: LessonMeta["level"];
  isFree: boolean;
  readingMinutes: number;
}

/** A lesson's place in its book, as passed to the lesson page's client components. */
export interface BookContext {
  book: BookView;
  /** 0-based index of the current lesson within `book.chapters`. */
  index: number;
}

const LESSON_BY_SLUG = new Map(lessonIndex.map((l) => [l.slug, l]));

/** "Jane Eyre: Lowood" -> "Lowood"; a title without the book prefix is returned whole. */
function subtitle(full: string, bookTitle: string): string {
  const prefix = `${bookTitle}: `;
  return full.startsWith(prefix) ? full.slice(prefix.length) : full;
}

function resolve(book: Book): BookView {
  const lessons = book.chapters.map((slug) => LESSON_BY_SLUG.get(slug)).filter((l): l is LessonMeta => Boolean(l));
  const first = lessons[0];
  return {
    id: book.id,
    title: book.title,
    titleTranslation: book.titleTranslation,
    author: first?.author,
    coverImage: first?.coverImage,
    coverEmoji: first?.coverEmoji ?? "📖",
    chapters: lessons.map((l) => ({
      slug: l.slug,
      title: subtitle(l.title, book.title),
      titleTranslation: subtitle(l.titleTranslation, book.titleTranslation),
      level: l.level,
      isFree: l.isFree,
      readingMinutes: l.readingMinutes,
    })),
  };
}

export const BOOK_VIEWS: BookView[] = BOOKS.map(resolve);
const VIEW_BY_ID = new Map(BOOK_VIEWS.map((b) => [b.id, b]));

export function getBookView(id: string): BookView | undefined {
  return VIEW_BY_ID.get(id);
}

/** The book a lesson belongs to plus its position, or undefined for a standalone story. */
export function getBookContext(lessonSlug: string): BookContext | undefined {
  const hit = findBookForLesson(lessonSlug);
  const book = hit && VIEW_BY_ID.get(hit.book.id);
  return hit && book ? { book, index: hit.index } : undefined;
}

/** Full lesson metadata for a book's chapters, in order (for JSON-LD and cards). */
export function getBookLessons(id: string): LessonMeta[] {
  const book = findBook(id);
  if (!book) return [];
  return book.chapters.map((slug) => LESSON_BY_SLUG.get(slug)).filter((l): l is LessonMeta => Boolean(l));
}

export function getLessonMeta(slug: string): LessonMeta | undefined {
  return LESSON_BY_SLUG.get(slug);
}
