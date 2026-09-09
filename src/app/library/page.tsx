import type { Metadata } from "next";
import { lessons } from "@/lib/data/lessons";
import { collectionPageJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { LibraryClient } from "./LibraryClient";

const NAME = "Graded Readers — Short Stories by Level (A1–B2)";
const DESCRIPTION =
  "Browse every SeoJae Story lesson: short stories and classic literature graded " +
  "to CEFR A1–B2, each with instant translations, audio narration, vocabulary " +
  "flashcards, and a comprehension check. Learn English or Korean by reading.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "graded readers",
    "short stories for language learners",
    "leveled reading practice",
    "CEFR A1 A2 B1 B2 reading",
    "ESL reading practice",
    "Korean reading practice",
    "read short stories online free",
    "bilingual short stories",
  ],
  alternates: { canonical: "/library" },
  openGraph: { type: "website", url: "/library", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function LibraryPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/library",
    name: NAME,
    description: DESCRIPTION,
    lessons,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LibraryClient />
    </>
  );
}
