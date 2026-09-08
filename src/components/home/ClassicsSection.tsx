"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

const hasClassics = lessons.some((lesson) => lesson.collection === "classics");

/**
 * Home-page shelf for public-domain literary adaptations. Shows a compact,
 * swipeable carousel with a "See all" link through to the full grid at
 * `/classics`; renders nothing until at least one lesson opts in with
 * `collection: "classics"` (so it can ship ahead of the backlog).
 */
export function ClassicsSection() {
  const t = useT();

  if (!hasClassics) return null;

  return (
    <section className="mt-10">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">{t("classics")}</p>
        <Link
          href="/classics"
          className="shrink-0 text-xs font-medium text-rose underline-offset-4 hover:underline"
        >
          {t("classicsSeeAll")} →
        </Link>
      </div>
      <p className="mb-4 text-sm text-charcoal/60">{t("classicsSubtitle")}</p>
      <ClassicsCarousel />
    </section>
  );
}
