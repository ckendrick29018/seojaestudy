"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

const hasFolktales = lessons.some((lesson) => lesson.collection === "folktales");
const FOLKTALES = lessons.filter((lesson) => lesson.collection === "folktales");

/**
 * Home-page shelf for Korean-origin folklore, kept separate from the
 * (Western-literature-in-Korean) Classics shelf since the sourcing direction
 * runs the other way. Same swipeable carousel component as Classics; renders
 * nothing until at least one lesson opts in with `collection: "folktales"`.
 */
export function FolktalesSection() {
  const t = useT();

  if (!hasFolktales) return null;

  return (
    <section className="mt-10">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">
          {t("folktalesTitle")}
        </p>
        <Link
          href="/folktales"
          className="shrink-0 text-xs font-medium text-rose underline-offset-4 hover:underline"
        >
          {t("folktalesSeeAll")} →
        </Link>
      </div>
      <p className="mb-4 text-sm text-charcoal/60">{t("folktalesSubtitle")}</p>
      <ClassicsCarousel lessons={FOLKTALES} />
    </section>
  );
}
