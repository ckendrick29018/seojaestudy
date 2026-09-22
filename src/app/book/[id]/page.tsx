import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BOOK_VIEWS, getBookLessons, getBookView } from "@/lib/books";
import { bookDescription, bookMetaTitle, collectionPageJsonLd, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { BookClient } from "./BookClient";

export function generateStaticParams() {
  return BOOK_VIEWS.map((book) => ({ id: book.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const book = getBookView(params.id);
  if (!book) return { title: { absolute: `Book not found · ${SITE_NAME}` } };

  const parts = getBookLessons(book.id);
  const path = `/book/${book.id}`;
  const title = bookMetaTitle(book.title, parts);
  const description = bookDescription(book.title, parts);
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [
      book.title,
      `${book.title} chapters`,
      `${book.title} bilingual text`,
      `${book.title} graded reader`,
      `${book.title} Korean translation`,
      ...(book.author ? [`${book.author.replace(/\s*\([^)]*\)\s*$/, "")} graded reader`] : []),
    ],
    alternates: { canonical: path, ...localeAlternates(path, true) },
    openGraph: { type: "website", url: path, title: socialTitle, description },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default function BookPage({ params }: { params: { id: string } }) {
  const book = getBookView(params.id);
  if (!book) notFound();

  const parts = getBookLessons(book.id);
  const jsonLd = collectionPageJsonLd({
    path: `/book/${book.id}`,
    name: `${book.title} — ${parts.length} chapters`,
    description: bookDescription(book.title, parts),
    lessons: parts,
    parent: { name: "Classics", path: "/classics" },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BookClient book={book} />
    </>
  );
}
