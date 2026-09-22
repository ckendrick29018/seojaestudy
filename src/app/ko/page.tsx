import type { Metadata } from "next";
import { landingJsonLd, localeAlternates } from "@/lib/seo";
import { LandingClient } from "@/app/LandingClient";

const TITLE = "영어를 이야기로 배우기 — 쉬운 영어 원서 무료로 읽기";
const DESCRIPTION =
  "SeoJae Story는 고전 명작과 위인전을 CEFR A1~B2 단계로 쉽게 다시 쓴 영어 원서예요. 단어를 탭하면 바로 번역되고, " +
  "문장별 한국어 번역과 원어민 음성 낭독, 복습용 어휘 플래시카드까지 — 계정 없이 무료로 시작하세요.";
const SOCIAL_TITLE = `${TITLE} · SeoJae Story`;

// The landing copy lives in LandingClient (shared with the English "/"); this
// wrapper only pins Korean metadata, the reciprocal hreflang back to "/", and
// the locale-branched JSON-LD (see src/app/page.tsx for its English sibling).
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "영어 원서 읽기",
    "쉬운 영어 소설",
    "영어 단편소설 무료",
    "영어 리딩 연습",
    "CEFR 영어 리더",
    "영어 원서 추천",
    "온라인 영어 학습",
  ],
  alternates: { canonical: "/ko", ...localeAlternates("/", true) },
  openGraph: { type: "website", url: "/ko", title: SOCIAL_TITLE, description: DESCRIPTION, locale: "ko_KR" },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function KoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingJsonLd("ko")) }}
      />
      <LandingClient />
    </>
  );
}
