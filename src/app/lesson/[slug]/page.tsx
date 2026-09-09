import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lessons } from "@/lib/data/lessons";
import { LessonView } from "@/components/lesson/LessonView";
import { LessonPaywall } from "@/components/lesson/LessonPaywall";
import { createClient } from "@/lib/supabase/server";
import { isActiveSubscription } from "@/lib/subscription";
import { lessonDescription, lessonJsonLd, lessonKeywords, lessonMetaTitle } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

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
    alternates: { canonical: path },
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

async function hasActiveSubscription(): Promise<boolean> {
  const authConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  if (!authConfigured) return false;

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_subscribed, subscription_current_period_end")
    .eq("id", user.id)
    .maybeSingle();

  return isActiveSubscription(profile);
}

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) notFound();

  const locked = !lesson.isFree && !(await hasActiveSubscription());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonJsonLd(lesson)) }}
      />
      {locked ? <LessonPaywall lesson={lesson} /> : <LessonView lesson={lesson} />}
    </>
  );
}
