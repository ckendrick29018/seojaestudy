import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BOOK_VIEWS, getBookLessons, getBookView } from "@/lib/books";
import { bookDescriptionKo, bookMetaTitleKo, collectionPageJsonLd, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { BookClient } from "@/app/book/[id]/BookClient";

// Ships all 12 books, same as the English route.
export function generateStaticParams() {
  return BOOK_VIEWS.map((book) => ({ id: book.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const book = getBookView(params.id);
  if (!book) return { title: { absolute: `책을 찾을 수 없어요 · ${SITE_NAME}` } };

  const parts = getBookLessons(book.id);
  const path = `/book/${book.id}`;
  const title = bookMetaTitleKo(book.title, book.titleTranslation, parts);
  const description = bookDescriptionKo(book.title, book.titleTranslation, parts);
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [
      book.titleTranslation,
      `${book.titleTranslation} 영어 원서`,
      `${book.titleTranslation} 대역`,
      `${book.title} 챕터별 읽기`,
      `${book.title} 한국어 번역`,
    ],
    alternates: { canonical: `/ko${path}`, ...localeAlternates(path, true) },
    openGraph: { type: "website", url: `/ko${path}`, title: socialTitle, description, locale: "ko_KR" },
    twitter: { card: "summary_large_image", title: socialTitle, description },
  };
}

export default function KoBookPage({ params }: { params: { id: string } }) {
  const book = getBookView(params.id);
  if (!book) notFound();

  const parts = getBookLessons(book.id);
  const jsonLd = collectionPageJsonLd({
    path: `/ko/book/${book.id}`,
    name: `${book.titleTranslation}(${book.title}) — ${parts.length}개 챕터`,
    description: bookDescriptionKo(book.title, book.titleTranslation, parts),
    lessons: parts,
    parent: { name: "고전", path: "/ko/classics" },
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BookClient book={book} />
    </>
  );
}
