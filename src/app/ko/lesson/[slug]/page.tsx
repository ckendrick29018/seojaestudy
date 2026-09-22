import type { Metadata } from "next";
import { lessons } from "@/lib/data/lessons";
import { lessonDescriptionKo, lessonKeywordsKo, lessonMetaTitleKo, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { renderLessonPage } from "@/app/lesson/[slug]/renderLessonPage";

// Ships the full 210-lesson set, same as the English route — see the plan
// note in src/lib/seo.ts / the Korean-locale SEO plan for why a partial set
// isn't viable (ClassicCard and the homepage's folktales carousel link into
// every lesson with no awareness of which ones have a /ko counterpart).
export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return { title: { absolute: `이야기를 찾을 수 없어요 · ${SITE_NAME}` } };

  const path = `/lesson/${lesson.slug}`;
  const description = lessonDescriptionKo(lesson);
  const title = lessonMetaTitleKo(lesson);
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: lessonKeywordsKo(lesson),
    alternates: { canonical: `/ko${path}`, ...localeAlternates(path, true) },
    openGraph: {
      type: "article",
      url: `/ko${path}`,
      title: socialTitle,
      description,
      locale: "ko_KR",
    },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default async function KoLessonPage({ params }: { params: { slug: string } }) {
  return renderLessonPage(params.slug);
}
