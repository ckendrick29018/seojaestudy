"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

const hasBiographies = lessons.some((lesson) => lesson.collection === "biography");
const BIOGRAPHIES = lessons.filter((lesson) => lesson.collection === "biography");

/**
 * Home-page shelf for public-domain memoir/autobiography — kept separate
 * from the (fiction) Classics shelf since it's non-fiction, even though both
 * are Western public-domain works translated into Korean. Same swipeable
 * carousel component as Classics/Folktales; renders nothing until at least
 * one lesson opts in with `collection: "biography"`.
 */
export function BiographiesSection() {
  const t = useT();

  if (!hasBiographies) return null;

  return (
    <section className="mt-10 lg:mt-12">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose/70 lg:text-sm">
          {t("biographiesTitle")}
        </p>
        <Link
          href="/biographies"
          className="shrink-0 text-xs font-medium text-rose underline-offset-4 hover:underline lg:text-sm"
        >
          {t("biographiesSeeAll")} →
        </Link>
      </div>
      <p className="mb-4 text-sm text-charcoal/60 lg:mb-5 lg:text-base">{t("biographiesSubtitle")}</p>
      <ClassicsCarousel lessons={BIOGRAPHIES} />
    </section>
  );
}
