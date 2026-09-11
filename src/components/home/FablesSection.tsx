"use client";

import { lessons } from "@/lib/data/lessons";
import { useT } from "@/components/providers/LanguageProvider";
import { ClassicsCarousel } from "./ClassicsCarousel";

const LEVEL_RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3 };

/**
 * Every uncollected lesson — short beginner fables and one-off folktales that
 * aren't part of the Classics or (Korean-origin) Folktales shelves. There are
 * only a handful, so they all fit in the carousel; simplest level first so a
 * beginner meets the gentlest story at the front.
 */
const FABLES = lessons
  .filter((lesson) => lesson.collection === undefined)
  .sort((a, b) => (LEVEL_RANK[a.level] ?? 0) - (LEVEL_RANK[b.level] ?? 0));

/**
 * Home-page strip for the beginner fables & folktales, in the same swipeable,
 * gently auto-rotating style as the Classics shelf. Renders nothing if no
 * non-classics lessons exist. No "See all" — the whole set fits in the strip.
 */
export function FablesSection() {
  const t = useT();

  if (FABLES.length === 0) return null;

  return (
    <section className="mt-10">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">
        {t("fablesTitle")}
      </p>
      <p className="mb-4 text-sm text-charcoal/60">{t("fablesSubtitle")}</p>
      <ClassicsCarousel lessons={FABLES} />
    </section>
  );
}
