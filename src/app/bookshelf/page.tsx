"use client";

import Link from "next/link";
import type { UiLang } from "@/lib/i18n";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { ReadingCat, catMoodFor } from "@/components/home/ReadingCat";
import { Shelf, useCompletedBooks } from "@/components/home/Bookshelf";

const PER_SHELF = 8;
const MILESTONES = [1, 3, 6, 10];

function countLine(count: number, lang: UiLang): string {
  if (lang === "ko") return `책장에 ${count}권이 꽂혀 있어요`;
  return `${count} ${count === 1 ? "book" : "books"} on your shelf`;
}

function milestoneHint(count: number, lang: UiLang): string {
  const next = MILESTONES.find((n) => n > count);
  if (!next) {
    return lang === "ko"
      ? "고양이가 진정한 책벌레가 됐어요."
      : "Your cat is a true bookworm now.";
  }
  const left = next - count;
  const stories = left === 1 ? "story" : "stories";
  if (lang === "ko") {
    const n = left;
    if (next === 1) return "이야기를 하나 완독하면 잠든 고양이가 깨어나요.";
    if (next === 3) return `${n}권 더 완독하면 고양이가 고개를 들어요.`;
    if (next === 6) return `${n}권 더 완독하면 고양이가 책을 펼쳐요.`;
    return `${n}권 더 완독하면 고양이가 학자가 돼요.`;
  }
  if (next === 1) return "Finish one story to wake your sleeping cat.";
  if (next === 3) return `${left} more ${stories} and your cat looks up from its nap.`;
  if (next === 6) return `${left} more ${stories} and your cat picks up a book.`;
  return `${left} more ${stories} and your cat becomes a scholar.`;
}

export default function BookshelfPage() {
  const t = useT();
  const { lang } = useLanguage();
  const books = useCompletedBooks();
  const count = books.length;

  const shelves: (typeof books)[] = [];
  for (let i = 0; i < books.length; i += PER_SHELF) shelves.push(books.slice(i, i + PER_SHELF));

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("bookshelf")}</h1>
      <p className="mb-6 text-sm text-charcoal/50">{t("bookshelfSubtitle")}</p>

      <div className="mb-5 flex justify-center">
        <ReadingCat mood={catMoodFor(count)} className="h-32 w-32" />
      </div>

      {count === 0 ? (
        <p className="rounded-xl2 border border-rose-light/50 bg-white/50 px-4 py-6 text-center text-sm text-charcoal/55">
          {t("bookshelfEmpty")}
        </p>
      ) : (
        <>
          <p className="mb-4 text-center text-sm font-medium text-charcoal/70">
            {countLine(count, lang)}
          </p>
          <div className="space-y-5">
            {shelves.map((shelfBooks, i) => (
              <Shelf key={i} books={shelfBooks} startIndex={i * PER_SHELF} />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-charcoal/45">{milestoneHint(count, lang)}</p>
        </>
      )}

      <Link
        href="/"
        className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline"
      >
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
