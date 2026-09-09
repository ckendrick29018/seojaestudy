import { ImageResponse } from "next/og";
import { lessons } from "@/lib/data/lessons";
import { SITE_NAME } from "@/lib/site";
import { PLAYFAIR_DISPLAY_600_BASE64 } from "@/assets/fonts/playfair-display-600";

// See the note in src/app/opengraph-image.tsx: `next/og` is only reliable on the
// edge runtime, which is also what Vercel runs these routes on.
export const runtime = "edge";

export const alt = `${SITE_NAME} — a bilingual graded reader`;
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

function titleSize(len: number): number {
  if (len > 44) return 52;
  if (len > 30) return 62;
  if (len > 20) return 78;
  return 100;
}

export default function LessonOgImage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  const title = lesson?.title ?? SITE_NAME;
  const author = lesson?.author ? stripDates(lesson.author) : null;
  const level = lesson?.level ?? null;
  const language = lesson?.targetLanguage === "ko" ? "Korean" : "English";
  const native = lesson?.targetLanguage === "ko" ? "English" : "Korean";

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
          padding: "96px 110px",
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
            fontSize: 24,
            letterSpacing: 8,
            color: ROSE,
            textTransform: "uppercase",
          }}
        >
          {level ? `${language}–${native} Graded Reader · CEFR ${level}` : "Bilingual Graded Reader"}
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
              fontSize: titleSize(title.length),
              fontWeight: 600,
              lineHeight: 1.12,
              color: CHARCOAL,
              letterSpacing: 1,
            }}
          >
            {title}
          </div>

          {author ? (
            <div style={{ marginTop: 28, fontSize: 34, color: CHARCOAL, opacity: 0.6 }}>
              {`by ${author}`}
            </div>
          ) : null}

          <div
            style={{ marginTop: 30, width: 140, height: 1, backgroundColor: ROSE, display: "flex" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            fontSize: 30,
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
