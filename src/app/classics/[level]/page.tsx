import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lessons } from "@/lib/data/lessons";
import type { CEFRLevel } from "@/lib/types";
import { collectionPageJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { ClassicsLevelClient } from "./ClassicsLevelClient";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");

/** URL slug -> CEFR level. */
const LEVEL_BY_SLUG: Record<string, CEFRLevel> = { a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export function generateStaticParams() {
  return Object.keys(LEVEL_BY_SLUG).map((level) => ({ level }));
}

function resolve(slug: string): CEFRLevel | null {
  return LEVEL_BY_SLUG[slug?.toLowerCase()] ?? null;
}

/** A few representative titles for the meta description. */
function sampleTitles(level: CEFRLevel): string {
  return CLASSICS.filter((l) => l.level === level)
    .slice(0, 3)
    .map((l) => l.title)
    .join(", ");
}

export function generateMetadata({ params }: { params: { level: string } }): Metadata {
  const level = resolve(params.level);
  if (!level) return { title: { absolute: `Not found · ${SITE_NAME}` } };

  const count = CLASSICS.filter((l) => l.level === level).length;
  const path = `/classics/${level.toLowerCase()}`;
  const name = `${level} Graded Readers — Classic Stories in Simple English`;
  const description =
    `Read ${count} classic works retold at CEFR ${level}` +
    (sampleTitles(level) ? ` (${sampleTitles(level)}, and more)` : "") +
    `. Each has a sentence-by-sentence Korean translation, audio narration, ` +
    `vocabulary flashcards, and a comprehension check. Free to start.`;
  const socialTitle = `${name} · ${SITE_NAME}`;

  return {
    title: name,
    description,
    keywords: [
      `${level} graded readers`,
      `${level} English reading practice`,
      `classic short stories ${level}`,
      `easy classic books for ${level} learners`,
      `${level} bilingual reader English Korean`,
      `learn English with classic stories ${level}`,
    ],
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: socialTitle, description },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default function ClassicsLevelPage({ params }: { params: { level: string } }) {
  const level = resolve(params.level);
  if (!level) notFound();

  const path = `/classics/${level.toLowerCase()}`;
  const jsonLd = collectionPageJsonLd({
    path,
    name: `${level} Graded Readers — Classic Stories in Simple English`,
    description: `Classic literature retold at CEFR ${level} for English and Korean learners.`,
    lessons: CLASSICS.filter((l) => l.level === level),
    parent: { name: "Classics", path: "/classics" },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClassicsLevelClient level={level} />
    </>
  );
}
