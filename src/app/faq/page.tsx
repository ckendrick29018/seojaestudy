import type { Metadata } from "next";
import Link from "next/link";
import { FAQ, faqPageJsonLd } from "@/lib/faq";
import { InlineText } from "@/components/prose/InlineText";
import { SITE_NAME } from "@/lib/site";

const NAME = "Frequently Asked Questions";
const DESCRIPTION =
  "Answers about SeoJae Story: is it free, do you need an account, how tap-to-translate " +
  "and audio work, where the stories come from, offline use, and more.";
const SOCIAL_TITLE = `${NAME} · ${SITE_NAME}`;

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  keywords: [
    "SeoJae Story FAQ",
    "is SeoJae Story free",
    "graded readers FAQ",
    "learn English Korean by reading questions",
    "bilingual short stories app",
  ],
  alternates: { canonical: "/faq" },
  openGraph: { type: "website", url: "/faq", title: SOCIAL_TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: SOCIAL_TITLE, description: DESCRIPTION },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }}
      />

      <div className="px-6 py-10">
        <nav className="mb-4 text-xs text-charcoal/45">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-charcoal/60">FAQ</span>
        </nav>

        <h1 className="font-serif text-[1.9rem] font-semibold leading-tight text-charcoal">
          Frequently asked questions
        </h1>
        <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-charcoal/60">
          Everything people usually ask before they start reading.
        </p>

        <dl className="mt-8 divide-y divide-rose-light/40">
          {FAQ.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-serif text-lg font-semibold leading-snug text-charcoal">
                {item.question}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-7 text-charcoal/75">
                <InlineText text={item.answer} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-xl2 border border-rose-light/50 bg-sage/20 p-5 text-center">
          <p className="text-sm text-charcoal/70">Still curious?</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center rounded-full border border-rose-soft/50 px-5 py-2.5 text-sm font-semibold text-rose transition hover:bg-rose-light/30"
            >
              Read the guides
            </Link>
            <Link
              href="/library"
              className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
            >
              Start reading
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
