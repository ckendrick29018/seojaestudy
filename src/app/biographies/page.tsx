import type { Metadata } from "next";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { collectionPageJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { BiographiesClient } from "./BiographiesClient";

/** Every lesson curated into the "biography" collection, in library order. */
const BIOGRAPHIES = lessons.filter((lesson) => lesson.collection === "biography");

const NAME = "Biographies as Bilingual Graded Readers";
const DESCRIPTION =
  "Read public-domain memoirs and autobiographies — Helen Keller, Benjamin Franklin " +
  "and more — retold at CEFR A1–B2 with a sentence-by-sentence translation, audio " +
  "narration, and vocabulary. Free to start, no account needed.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "biographies for language learners",
    "bilingual biography graded readers",
    "read memoirs in simple English",
    "English Korean bilingual biography",
    "public domain autobiography graded readers",
    "learn English through true stories",
  ],
  alternates: { canonical: "/biographies" },
  openGraph: { type: "website", url: "/biographies", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function BiographiesPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/biographies",
    name: NAME,
    description: DESCRIPTION,
    lessons: BIOGRAPHIES,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BiographiesClient />
    </>
  );
}
