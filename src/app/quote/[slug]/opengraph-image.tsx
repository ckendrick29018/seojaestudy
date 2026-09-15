import { ImageResponse } from "next/og";
import { QUOTES } from "@/lib/quotes";
import { SITE_NAME } from "@/lib/site";
import { PLAYFAIR_DISPLAY_600_BASE64 } from "@/assets/fonts/playfair-display-600";

// See the note in src/app/opengraph-image.tsx: `next/og` is only reliable on the
// edge runtime, which is also what Vercel runs these routes on.
export const runtime = "edge";

export const alt = `${SITE_NAME} — a famous quote in English & Korean`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const playfair = Uint8Array.from(atob(PLAYFAIR_DISPLAY_600_BASE64), (c) => c.charCodeAt(0));

const CREAM = "#FDFBF7";
const CREAM_DARK = "#F6F1E7";
const ROSE = "#C57B57";
const ROSE_SOFT = "#D4A373";
const CHARCOAL = "#2C2C2C";
const SAGE_DARK = "#B7C296";

/** "Jane Austen (1775–1817)" -> "Jane Austen" */
function stripDates(author: string): string {
  return author.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

function quoteSize(len: number): number {
  if (len > 140) return 34;
  if (len > 100) return 40;
  if (len > 60) return 48;
  return 58;
}

export default function QuoteOgImage({ params }: { params: { slug: string } }) {
  const quote = QUOTES.find((q) => q.slug === params.slug);
  const quoteEn = quote?.quoteEn ?? SITE_NAME;
  const workTitle = quote?.workTitle ?? null;
  const author = quote?.author ? stripDates(quote.author) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 110px",
          textAlign: "center",
          backgroundImage: `linear-gradient(180deg, ${CREAM} 0%, ${CREAM_DARK} 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: `2px solid ${ROSE}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 52,
            left: 52,
            right: 52,
            bottom: 52,
            border: `1px solid ${ROSE_SOFT}`,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: ROSE,
            textTransform: "uppercase",
          }}
        >
          A Famous Line, with Korean Translation
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontSize: quoteSize(quoteEn.length),
              fontWeight: 600,
              lineHeight: 1.25,
              color: CHARCOAL,
              maxWidth: 900,
            }}
          >
            {quoteEn}
          </div>

          <div
            style={{ marginTop: 26, width: 140, height: 1, backgroundColor: ROSE, display: "flex" }}
          />

          {workTitle ? (
            <div style={{ display: "flex", marginTop: 22, fontSize: 28, color: ROSE, fontWeight: 600 }}>
              {workTitle}
            </div>
          ) : null}
          {author ? (
            <div style={{ marginTop: 6, fontSize: 22, color: CHARCOAL, opacity: 0.55 }}>
              {`by ${author}`}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 1,
            color: SAGE_DARK,
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair Display", data: playfair, weight: 600, style: "normal" }],
    },
  );
}
