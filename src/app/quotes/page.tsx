import type { Metadata } from "next";
import Link from "next/link";
import { QUOTES } from "@/lib/quotes";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const NAME = "Famous Quotes in English & Korean";
const DESCRIPTION =
  "Famous lines from classic novels — Pride and Prejudice, The Great Gatsby, Jane Eyre, and more — " +
  "in the original English with a fresh Korean translation, context, and a tap-to-translate reading.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "famous English quotes Korean translation",
    "classic literature quotes bilingual",
    "English book quotes with Korean meaning",
    "famous lines from classic novels",
  ],
  alternates: { canonical: "/quotes" },
  openGraph: { type: "website", url: "/quotes", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/quotes#page`,
      url: `${SITE_URL}/quotes`,
      name: NAME,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: QUOTES.length,
        itemListElement: QUOTES.map((q, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/quote/${q.slug}`,
          name: `"${q.quoteEn}" — ${q.workTitle}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Quotes", item: `${SITE_URL}/quotes` },
      ],
    },
  ],
};

export default function QuotesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-6 py-10 lg:mx-auto lg:max-w-6xl lg:px-8 lg:py-16">
        <nav className="mb-4 text-xs text-charcoal/45">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-charcoal/60">Quotes</span>
        </nav>

        <h1 className="font-serif text-[1.9rem] font-semibold leading-tight text-charcoal lg:text-4xl">
          Famous quotes, in English and Korean
        </h1>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-charcoal/60 lg:max-w-[60ch] lg:text-base">
          The most memorable lines from classic novels, exactly as written — with a fresh Korean
          translation, the story behind the line, and a tap-to-translate English reading.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {QUOTES.map((q) => (
            <li key={q.slug}>
              <Link
                href={`/quote/${q.slug}`}
                className="block h-full rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft transition hover:bg-white lg:p-6"
              >
                <p className="font-serif text-base italic leading-snug text-charcoal lg:text-lg">
                  &ldquo;{q.quoteEn}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-rose/80">{q.workTitle}</p>
                <p className="text-xs text-charcoal/50">{q.author.replace(/\s*\([^)]*\)\s*$/, "")}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl2 border border-rose-light/50 bg-sage/20 p-5 text-center lg:mx-auto lg:max-w-2xl lg:p-8">
          <p className="text-sm text-charcoal/70">Want the whole story?</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link
              href="/classics"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
            >
              Read a classic
            </Link>
            <Link
              href="/library"
              className="inline-flex items-center justify-center rounded-full border border-rose-soft/50 px-5 py-2.5 text-sm font-semibold text-rose transition hover:bg-rose-light/30"
            >
              Browse the library
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
