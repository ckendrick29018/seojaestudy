import type { Metadata } from "next";
import { lessons } from "@/lib/data/lessons";
import { collectionPageJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { ClassicsClient } from "./ClassicsClient";

/** Every lesson curated into the "Classics" collection, in library order. */
const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");

const NAME = "Classic Stories as Bilingual Graded Readers";
const DESCRIPTION =
  "Read classic literature — Austen, the Brontës, Alcott, O. Henry, Chekhov, " +
  "Montgomery and more — retold at CEFR A1–B2 with a sentence-by-sentence " +
  "translation, audio narration, and vocabulary. Free to start, no account needed.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "classic short stories for language learners",
    "bilingual classic literature",
    "graded readers classics",
    "read classic novels in simple English",
    "English Korean bilingual stories",
    "public domain graded readers",
    "learn English through classic stories",
    "learn Korean through stories",
  ],
  alternates: { canonical: "/classics" },
  openGraph: { type: "website", url: "/classics", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function ClassicsPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/classics",
    name: NAME,
    description: DESCRIPTION,
    lessons: CLASSICS,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClassicsClient />
    </>
  );
}
