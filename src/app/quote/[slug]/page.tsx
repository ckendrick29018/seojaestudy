import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QUOTES, getQuote } from "@/lib/quotes";
import { quoteDescription, quoteJsonLd, quoteMetaTitle } from "@/lib/seo";
import { QuoteTapText } from "@/components/quotes/QuoteTapText";
import { BookOpenIcon } from "@/components/ui/icons";
import { SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return QUOTES.map((q) => ({ slug: q.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const quote = getQuote(params.slug);
  if (!quote) return { title: { absolute: `Quote not found · ${SITE_NAME}` } };

  const path = `/quote/${quote.slug}`;
  const title = quoteMetaTitle(quote);
  const description = quoteDescription(quote);
  const socialTitle = `${quote.workTitle} Quote · ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: socialTitle, description },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default function QuotePage({ params }: { params: { slug: string } }) {
  const quote = getQuote(params.slug);
  if (!quote) notFound();

  const author = quote.author.replace(/\s*\([^)]*\)\s*$/, "");
  const others = QUOTES.filter((q) => q.slug !== quote.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quoteJsonLd(quote)) }}
      />

      <article className="px-6 py-10 lg:mx-auto lg:max-w-3xl lg:px-8 lg:py-16">
        <nav className="mb-4 text-xs text-charcoal/45">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/quotes" className="hover:text-charcoal">Quotes</Link>
          <span className="mx-1.5">/</span>
          <span className="text-charcoal/60">{quote.workTitle}</span>
        </nav>

        <div className="rounded-xl2 border border-rose-light/50 bg-white/60 p-6 text-center shadow-soft lg:p-10">
          <p className="mb-3 font-serif text-3xl text-rose-soft/70">&ldquo;</p>
          <div className="font-serif text-xl italic leading-snug text-charcoal lg:text-2xl">
            <QuoteTapText text={quote.quoteEn} />
          </div>
          <p className="mt-6 text-base leading-relaxed text-charcoal/60">{quote.quoteKo}</p>
        </div>

        <p className="mt-2 text-center text-xs text-charcoal/40">
          Tap a word above to translate it.
        </p>

        <div className="mt-6 text-center">
          <p className="font-serif text-lg font-semibold text-charcoal">{quote.workTitle}</p>
          <p className="text-sm text-charcoal/50">
            {author}
            {quote.speaker ? ` · spoken by ${quote.speaker}` : ""}
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-[55ch] text-center text-sm leading-relaxed text-charcoal/70">
          {quote.context}
        </p>

        <div className="mt-10 rounded-xl2 border border-rose-light/50 bg-sage/20 p-5 text-center lg:p-8">
          <p className="text-sm text-charcoal/70">
            This line is from <em>{quote.workTitle}</em>. Read a free graded excerpt of the story on
            SeoJae Story.
          </p>
          <div className="mt-3 flex justify-center">
            <Link
              href={`/lesson/${quote.lessonSlug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
            >
              <BookOpenIcon className="h-4 w-4" />
              Read {quote.workTitle}
            </Link>
          </div>
        </div>

        {others.length > 0 && (
          <nav className="mt-10 border-t border-rose-light/40 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/45">
              More famous quotes
            </p>
            <ul className="mt-3 space-y-2">
              {others.map((q) => (
                <li key={q.slug}>
                  <Link
                    href={`/quote/${q.slug}`}
                    className="text-sm font-medium text-rose underline-offset-4 hover:underline"
                  >
                    &ldquo;{q.quoteEn.length > 50 ? `${q.quoteEn.slice(0, 47)}...` : q.quoteEn}&rdquo; — {q.workTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </>
  );
}
