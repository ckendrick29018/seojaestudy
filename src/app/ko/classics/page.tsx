import type { Metadata } from "next";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { collectionPageJsonLd, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { groupBookChapters } from "@/lib/books";
import { ClassicsClient } from "@/app/classics/ClassicsClient";

/** Same source list as the English page — see src/app/classics/page.tsx. */
const CLASSICS = groupBookChapters(lessons.filter((lesson) => lesson.collection === "classics"));

const NAME = "고전 명작을 영어 원서로 읽기 — 대역 리더";
const DESCRIPTION =
  "제인 오스틴, 브론테 자매, 루이자 메이 올컷, 오 헨리, 체호프 등 고전 명작을 CEFR A1~B2 단계로 쉽게 다시 쓴 영어 원서예요. " +
  "문장별 한국어 번역, 음성 낭독, 어휘 학습까지 — 가입 없이 무료로 시작하세요.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "고전 영어 소설",
    "영어 고전 원서",
    "쉬운 영어 고전문학",
    "영어 한국어 대역 소설",
    "CEFR 고전 영어 리더",
    "무료 영어 원서",
  ],
  alternates: { canonical: "/ko/classics", ...localeAlternates("/classics", true) },
  openGraph: { type: "website", url: "/ko/classics", title: SOCIAL_TITLE, description: DESCRIPTION, locale: "ko_KR" },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function KoClassicsPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/ko/classics",
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
