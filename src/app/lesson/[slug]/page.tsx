import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { lessons } from "@/lib/data/lessons";
import { LessonView } from "@/components/lesson/LessonView";
import { LessonPaywall } from "@/components/lesson/LessonPaywall";
import { createClient } from "@/lib/supabase/server";
import { isActiveSubscription } from "@/lib/subscription";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lesson = lessons.find((l) => l.slug === params.slug);
  return {
    title: lesson ? `${lesson.title} · LuminaRead` : "LuminaRead",
    description: lesson?.summaryPrompt,
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

  if (!lesson.isFree && !(await hasActiveSubscription())) {
    return <LessonPaywall lesson={lesson} />;
  }

  return <LessonView lesson={lesson} />;
}
