import Link from "next/link";
import { QUOTES } from "@/lib/quotes";

/**
 * Bottom-of-lesson nudge to the matching /quote page, when this work has one.
 * Cheap two-way link between the lesson and quote surfaces — most readers
 * will only ever land on one of the two from search.
 */
export function FamousQuoteCallout({ lessonSlug }: { lessonSlug: string }) {
  const quote = QUOTES.find((q) => q.lessonSlug === lessonSlug);
  if (!quote) return null;

  return (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">
        Famous line from this story
      </p>
      <Link
        href={`/quote/${quote.slug}`}
        className="mt-3 block rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft transition hover:bg-white"
      >
        <p className="font-serif italic leading-snug text-charcoal">&ldquo;{quote.quoteEn}&rdquo;</p>
        <p className="mt-2 text-sm text-charcoal/50">See the Korean translation →</p>
      </Link>
    </section>
  );
}
