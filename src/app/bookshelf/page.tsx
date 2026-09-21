"use client";

import Link from "next/link";
import type { UiLang } from "@/lib/i18n";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { ReadingCat } from "@/components/home/ReadingCat";
import { CAT_STAGES, catStageFor, catStageProgress, nextCatStage } from "@/components/home/cat-stages";
import { Shelf, useCompletedBooks } from "@/components/home/Bookshelf";
import { CheckIcon, LockIcon } from "@/components/ui/icons";

const PER_SHELF = 8;

function countLine(count: number, lang: UiLang): string {
  if (lang === "ko") return `책장에 ${count}권이 꽂혀 있어요`;
  return `${count} ${count === 1 ? "book" : "books"} on your shelf`;
}

function booksLabel(n: number, lang: UiLang): string {
  if (lang === "ko") return `${n}권`;
  return `${n} ${n === 1 ? "book" : "books"}`;
}

function nextLine(left: number, nextName: string, lang: UiLang): string {
  if (lang === "ko") return `${booksLabel(left, lang)} 더 완독하면 “${nextName}” 단계가 열려요`;
  return `${booksLabel(left, lang)} more to reach ${nextName}`;
}

function requirement(min: number, lang: UiLang): string {
  if (min === 0) return lang === "ko" ? "처음부터" : "From the start";
  return lang === "ko" ? `${min}권 완독` : `Read ${min}`;
}

export default function BookshelfPage() {
  const t = useT();
  const { lang } = useLanguage();
  const books = useCompletedBooks();
  const count = books.length;

  const stage = catStageFor(count);
  const next = nextCatStage(count);
  const stageNumber = CAT_STAGES.findIndex((s) => s.id === stage.id) + 1;
  const pct = Math.round(catStageProgress(count) * 100);

  const shelves: (typeof books)[] = [];
  for (let i = 0; i < books.length; i += PER_SHELF) shelves.push(books.slice(i, i + PER_SHELF));

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-3xl lg:px-8 lg:py-12">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal lg:text-4xl">{t("bookshelf")}</h1>
      <p className="mb-6 text-sm text-charcoal/50 lg:text-base">{t("bookshelfSubtitle")}</p>

      {/* The cat as it is right now, and how far it is from growing again. */}
      <section
        aria-label={stage.name[lang]}
        className="mb-7 overflow-hidden rounded-[2rem] border border-rose-light/60 bg-gradient-to-b from-rose-light/50 to-cream-dark px-5 pb-6 pt-7 text-center lg:flex lg:items-center lg:gap-10 lg:px-10 lg:py-8 lg:text-left"
      >
        <div className="relative mx-auto h-44 w-44 shrink-0 lg:mx-0 lg:h-52 lg:w-52">
          <div aria-hidden className="absolute inset-2 rounded-full bg-white/70 ring-1 ring-rose-light/70" />
          <ReadingCat stage={stage.id} className="relative h-full w-full" />
        </div>

        <div className="mt-3 min-w-0 flex-1 lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/60">
            {lang === "ko" ? `${stageNumber}단계 / ${CAT_STAGES.length}` : `Stage ${stageNumber} of ${CAT_STAGES.length}`}
          </p>
          <h2 className="mt-1 font-serif text-2xl font-semibold text-charcoal lg:text-3xl">{stage.name[lang]}</h2>
          <p className="mx-auto mt-2 max-w-[36ch] text-sm leading-relaxed text-charcoal/70 lg:mx-0 lg:text-base">
            {stage.blurb[lang]}
          </p>

          {next ? (
            <div className="mx-auto mt-5 max-w-xs lg:mx-0">
              <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
                aria-label={next.name[lang]}
                className="h-2.5 overflow-hidden rounded-full bg-white/80 ring-1 ring-rose-light/70"
              >
                <div className="h-full rounded-full bg-rose transition-[width] duration-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-2 text-xs text-charcoal/70 lg:text-sm">{nextLine(next.min - count, next.name[lang], lang)}</p>
            </div>
          ) : (
            <p className="mt-5 text-sm font-medium text-charcoal/70">
              {lang === "ko" ? "고양이가 완전히 자랐어요. 끝없는 서재의 주인이에요." : "Fully grown: keeper of the endless library."}
            </p>
          )}
        </div>
      </section>

      {count === 0 ? (
        <p className="rounded-xl2 border border-rose-light/50 bg-white/50 px-4 py-6 text-center text-sm text-charcoal/55 lg:text-base">
          {t("bookshelfEmpty")}
        </p>
      ) : (
        <>
          <p className="mb-4 text-center text-sm font-medium text-charcoal/70 lg:text-base">{countLine(count, lang)}</p>
          <div className="space-y-5 lg:space-y-6">
            {shelves.map((shelfBooks, i) => (
              <Shelf key={i} books={shelfBooks} startIndex={i * PER_SHELF} />
            ))}
          </div>
        </>
      )}

      {/* The whole ladder, so a reader can see what is still ahead. */}
      <section className="mt-10 lg:mt-12">
        <h2 className="font-serif text-xl font-semibold text-charcoal lg:text-2xl">{t("bookshelfJourney")}</h2>
        <p className="mb-4 mt-1 text-sm text-charcoal/60 lg:text-base">{t("bookshelfJourneySubtitle")}</p>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {CAT_STAGES.map((s) => {
            const unlocked = count >= s.min;
            const current = s.id === stage.id;
            return (
              <li
                key={s.id}
                aria-current={current ? "step" : undefined}
                className={`relative flex flex-col items-center rounded-xl2 border px-2 pb-3 pt-4 text-center ${
                  current
                    ? "border-rose bg-white shadow-soft ring-1 ring-rose/40"
                    : unlocked
                      ? "border-rose-light/60 bg-white"
                      : "border-rose-light/40 bg-white/40"
                }`}
              >
                {current && (
                  <span className="absolute right-2 top-2 rounded-full bg-rose-light px-2 py-0.5 text-[10px] font-semibold text-charcoal">
                    {t("catNow")}
                  </span>
                )}
                <div className={unlocked ? undefined : "opacity-40 grayscale"}>
                  <ReadingCat stage={s.id} still className="h-24 w-24 lg:h-20 lg:w-20" />
                </div>
                <p className="mt-2 text-sm font-semibold leading-tight text-charcoal">{s.name[lang]}</p>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs text-charcoal/70">
                  {unlocked ? (
                    <CheckIcon className="h-3.5 w-3.5 text-rose" aria-hidden />
                  ) : (
                    <LockIcon className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {requirement(s.min, lang)}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <Link href="/library" className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
