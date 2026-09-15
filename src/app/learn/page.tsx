import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const NAME = "Learn — Guides to Reading in English & Korean";
const DESCRIPTION =
  "Free guides on learning a language by reading: how to use graded readers, " +
  "what CEFR levels mean, and the best classic short stories to start with.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "learn a language by reading",
    "graded reader guide",
    "CEFR levels explained",
    "best short stories for language learners",
    "how to learn English by reading",
    "how to learn Korean by reading",
  ],
  alternates: { canonical: "/learn" },
  openGraph: { type: "website", url: "/learn", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/learn#page`,
      url: `${SITE_URL}/learn`,
      name: NAME,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: ARTICLES.length,
        itemListElement: ARTICLES.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/learn/${a.slug}`,
          name: a.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
      ],
    },
  ],
};

export default function LearnHubPage() {
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
          <span className="text-charcoal/60">Learn</span>
        </nav>

        <h1 className="font-serif text-[1.9rem] font-semibold leading-tight text-charcoal lg:text-4xl">
          Learn by reading
        </h1>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-charcoal/60 lg:max-w-[60ch] lg:text-base">
          Short, practical guides to learning English or Korean the quiet way — one story at a time.
        </p>
        <p className="mt-4 inline-block rounded-full bg-sage/25 px-3.5 py-1.5 text-xs font-medium text-charcoal/70">
          SeoJae Story lessons are short, daily reads — a few minutes each, never a full novel to translate.
        </p>

        <ul className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-5">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/learn/${a.slug}`}
                className="block h-full rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft transition hover:bg-white lg:p-6"
              >
                <p className="font-serif text-lg font-semibold leading-snug text-charcoal lg:text-xl">
                  {a.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{a.description}</p>
                <p className="mt-2 text-xs font-medium text-rose/70">{a.readingMinutes} min read</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl2 border border-rose-light/50 bg-sage/20 p-5 text-center lg:mx-auto lg:max-w-2xl lg:p-8">
          <p className="text-sm text-charcoal/70">Ready to start?</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link
              href="/library"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
            >
              Browse the library
            </Link>
            <Link
              href="/classics"
              className="inline-flex items-center justify-center rounded-full border border-rose-soft/50 px-5 py-2.5 text-sm font-semibold text-rose transition hover:bg-rose-light/30"
            >
              Read a classic
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
