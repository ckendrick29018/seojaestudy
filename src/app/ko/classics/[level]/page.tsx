import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import type { CEFRLevel } from "@/lib/types";
import { collectionPageJsonLd, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { ClassicsLevelClient } from "@/app/classics/[level]/ClassicsLevelClient";

const CLASSICS = lessons.filter((lesson) => lesson.collection === "classics");

/** URL slug -> CEFR level. Same mapping as the English route. */
const LEVEL_BY_SLUG: Record<string, CEFRLevel> = { a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export function generateStaticParams() {
  return Object.keys(LEVEL_BY_SLUG).map((level) => ({ level }));
}

function resolve(slug: string): CEFRLevel | null {
  return LEVEL_BY_SLUG[slug?.toLowerCase()] ?? null;
}

/** A few representative Korean titles for the meta description. */
function sampleTitlesKo(level: CEFRLevel): string {
  return CLASSICS.filter((l) => l.level === level)
    .slice(0, 3)
    .map((l) => l.titleTranslation)
    .join(", ");
}

export function generateMetadata({ params }: { params: { level: string } }): Metadata {
  const level = resolve(params.level);
  if (!level) return { title: { absolute: `찾을 수 없어요 · ${SITE_NAME}` } };

  const count = CLASSICS.filter((l) => l.level === level).length;
  const path = `/classics/${level.toLowerCase()}`;
  const name = `CEFR ${level} 영어 원서 — 쉬운 고전 영어 소설`;
  const samples = sampleTitlesKo(level);
  const description =
    `CEFR ${level} 단계로 다시 쓴 고전 명작 ${count}편${samples ? ` (${samples} 등)` : ""}을 읽어보세요. ` +
    `문장별 한국어 번역, 음성 낭독, 어휘 플래시카드, 이해도 확인 문제까지 무료로 제공돼요.`;
  const socialTitle = `${name} · ${SITE_NAME}`;

  return {
    title: name,
    description,
    keywords: [
      `CEFR ${level} 영어 원서`,
      `${level} 영어 리딩`,
      `${level} 쉬운 영어 소설`,
      `${level} 영어 한국어 대역`,
      `영어 원서 ${level} 추천`,
    ],
    alternates: { canonical: `/ko${path}`, ...localeAlternates(path, true) },
    openGraph: { type: "website", url: `/ko${path}`, title: socialTitle, description, locale: "ko_KR" },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default function KoClassicsLevelPage({ params }: { params: { level: string } }) {
  const level = resolve(params.level);
  if (!level) notFound();

  const path = `/ko/classics/${level.toLowerCase()}`;
  const jsonLd = collectionPageJsonLd({
    path,
    name: `CEFR ${level} 영어 원서 — 쉬운 고전 영어 소설`,
    description: `고전 명작을 CEFR ${level} 단계로 다시 쓴, 영어와 한국어 학습자를 위한 대역 리더예요.`,
    lessons: CLASSICS.filter((l) => l.level === level),
    parent: { name: "고전", path: "/ko/classics" },
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
