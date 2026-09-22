import type { Metadata } from "next";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { collectionPageJsonLd, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { BiographiesClient } from "@/app/biographies/BiographiesClient";

/** Same source list as the English page — see src/app/biographies/page.tsx. */
const BIOGRAPHIES = lessons.filter((lesson) => lesson.collection === "biography");

const NAME = "위인전을 영어 원서로 읽기 — 대역 리더";
const DESCRIPTION =
  "헬렌 켈러, 벤저민 프랭클린 등 위인들의 자서전과 회고록을 CEFR A1~B2 단계로 쉽게 다시 쓴 영어 원서예요. " +
  "문장별 한국어 번역과 음성 낭독, 어휘 학습까지 — 가입 없이 무료로 시작하세요.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "위인전 영어로 읽기",
    "영어 자서전 원서",
    "쉬운 영어 위인전",
    "영어 한국어 대역 위인전",
    "무료 영어 원서 위인전",
  ],
  alternates: { canonical: "/ko/biographies", ...localeAlternates("/biographies", true) },
  openGraph: {
    type: "website",
    url: "/ko/biographies",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    locale: "ko_KR",
  },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function KoBiographiesPage() {
  const jsonLd = collectionPageJsonLd({
    path: "/ko/biographies",
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
