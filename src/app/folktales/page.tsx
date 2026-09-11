import type { Metadata } from "next";
import { lessons } from "@/lib/data/lessons";
import { collectionPageJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { FolktalesClient } from "./FolktalesClient";

/** Every lesson curated into the "folktales" collection, in library order. */
const FOLKTALES = lessons.filter((lesson) => lesson.collection === "folktales");

const NAME = "Korean Folktales as Bilingual Graded Readers";
const DESCRIPTION =
  "Read traditional Korean folktales, retold at CEFR A1–B2 with a " +
  "sentence-by-sentence translation, audio narration, and vocabulary. " +
  "Free to start, no account needed.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "Korean folktales for language learners",
    "traditional Korean stories in English",
    "bilingual Korean folklore",
    "graded readers Korean culture",
    "learn Korean through folktales",
    "learn English through Korean stories",
  ],
  alternates: { canonical: "/folktales" },
  openGraph: { type: "website", url: "/folktales", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function FolktalesPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/folktales",
    name: NAME,
    description: DESCRIPTION,
    lessons: FOLKTALES,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FolktalesClient />
    </>
  );
}
