"use client";

import Link from "next/link";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { ChevronRightIcon } from "@/components/ui/icons";
import { ReadingCat, catMoodFor } from "./ReadingCat";
import { BookSpine, useCompletedBooks } from "./Bookshelf";

const PREVIEW_MAX = 7;

/**
 * Dashboard entry point for the bookshelf: the cat plus the most recent few
 * spines, linking through to the full `/bookshelf` page. Hidden entirely
 * until the reader has finished their first story.
 */
export function BookshelfPreview() {
  const t = useT();
  const { lang } = useLanguage();
  const books = useCompletedBooks();
  if (books.length === 0) return null;

  const shown = books.slice(-PREVIEW_MAX);
  const more = books.length - shown.length;
  const countLabel = lang === "ko" ? `${books.length}권` : String(books.length);

  return (
    <Link
      href="/bookshelf"
      className="mt-4 flex items-stretch gap-2.5 rounded-xl2 border border-rose-light/50 bg-white/50 p-3 transition hover:border-rose-soft/50 hover:bg-white/70"
    >
      <ReadingCat mood={catMoodFor(books.length)} className="h-12 w-12 shrink-0 self-center" />
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-rose/70">
            {t("bookshelf")}
          </p>
          <span className="flex shrink-0 items-center gap-0.5 whitespace-nowrap text-xs font-medium text-charcoal/45">
            {countLabel} <ChevronRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="flex items-end gap-[3px] overflow-hidden border-b-2 border-[#b98c63]/50 pb-px">
          {shown.map((book, i) => (
            <BookSpine key={book.slug} lesson={book} index={i} interactive={false} compact />
          ))}
          {more > 0 && (
            <span className="ml-1 self-center text-[11px] font-medium text-charcoal/40">+{more}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
