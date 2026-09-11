import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, articleJsonLd, getArticle } from "@/lib/articles";
import { InlineText } from "@/components/prose/InlineText";
import { SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: { absolute: `Guide not found · ${SITE_NAME}` } };

  const path = `/learn/${article.slug}`;
  const socialTitle = `${article.title} · ${SITE_NAME}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: socialTitle,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description: article.description },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />

      <article className="px-6 py-10">
        <nav className="mb-4 text-xs text-charcoal/45">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/learn" className="hover:text-charcoal">Learn</Link>
          <span className="mx-1.5">/</span>
          <span className="text-charcoal/60">{article.title}</span>
        </nav>

        <h1 className="font-serif text-[1.9rem] font-semibold leading-tight text-charcoal">
          {article.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{article.lede}</p>
        <p className="mt-2 text-xs font-medium text-rose/70">{article.readingMinutes} min read</p>

        <div className="mt-8 space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl font-semibold text-charcoal">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-[0.95rem] leading-7 text-charcoal/75">
                  <InlineText text={p} />
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2 pl-5 text-[0.95rem] leading-7 text-charcoal/75">
                  {section.list.map((item, i) => (
                    <li key={i} className="list-disc marker:text-rose/50">
                      <InlineText text={item} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-xl2 border border-rose-light/50 bg-sage/20 p-5 text-center">
          <p className="text-sm text-charcoal/70">Put it into practice</p>
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

        {others.length > 0 && (
          <nav className="mt-10 border-t border-rose-light/40 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/45">
              More guides
            </p>
            <ul className="mt-3 space-y-2">
              {others.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/learn/${a.slug}`}
                    className="text-sm font-medium text-rose underline-offset-4 hover:underline"
                  >
                    {a.title}
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
