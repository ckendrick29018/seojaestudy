import type { Metadata } from "next";
import { lessons } from "@/lib/data/lessons";
import { lessonDescription, lessonKeywords, lessonMetaTitle, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { renderLessonPage } from "./renderLessonPage";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return { title: { absolute: `Story not found · ${SITE_NAME}` } };

  const path = `/lesson/${lesson.slug}`;
  const description = lessonDescription(lesson);
  const title = lessonMetaTitle(lesson);
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: lessonKeywords(lesson),
    alternates: { canonical: path, ...localeAlternates(path, true) },
    // og:image / twitter:image come from the sibling opengraph-image.tsx +
    // twitter-image.tsx route (a per-lesson card).
    openGraph: {
      type: "article",
      url: path,
      title: socialTitle,
      description,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default async function LessonPage({ params }: { params: { slug: string } }) {
  return renderLessonPage(params.slug);
}
