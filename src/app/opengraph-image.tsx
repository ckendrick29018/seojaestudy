import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";
import { PLAYFAIR_DISPLAY_600_BASE64 } from "@/assets/fonts/playfair-display-600";

// The `next/og` Node runtime mis-resolves its bundled assets on some build
// hosts (Windows in particular); the edge runtime is the supported target for
// image generation and is what Vercel runs these routes on anyway.
export const runtime = "edge";

const playfair = Uint8Array.from(atob(PLAYFAIR_DISPLAY_600_BASE64), (c) => c.charCodeAt(0));

/**
 * The default social share image (Open Graph + Twitter), generated once at
 * build time. Every route that doesn't define its own `opengraph-image`
 * inherits this one, so it's the card shown for `/`, `/library`, `/classics`
 * and every lesson page.
 *
 * The look echoes the book covers under /public/covers: a cream gradient,
 * a double rose frame, and the wordmark set in Playfair Display.
 */

export const alt = `${SITE_NAME} — short stories for language learners`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#FDFBF7";
const CREAM_DARK = "#F6F1E7";
const ROSE = "#C57B57";
const ROSE_SOFT = "#D4A373";
const CHARCOAL = "#2C2C2C";
const SAGE_DARK = "#B7C296";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(180deg, ${CREAM} 0%, ${CREAM_DARK} 100%)`,
        }}
      >
        {/* double frame, matching the cover motif */}
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
            fontSize: 24,
            letterSpacing: 8,
            color: ROSE,
            textTransform: "uppercase",
          }}
        >
          Learn English · Learn Korean
        </div>

        <div
          style={{
            fontFamily: "Playfair Display",
            marginTop: 24,
            fontSize: 104,
            fontWeight: 600,
            color: CHARCOAL,
            letterSpacing: 1,
          }}
        >
          {SITE_NAME}
        </div>

        <div
          style={{
            marginTop: 20,
            width: 140,
            height: 1,
            backgroundColor: ROSE,
          }}
        />

        <div
          style={{
            fontFamily: "Playfair Display",
            marginTop: 28,
            fontSize: 42,
            color: CHARCOAL,
            opacity: 0.7,
          }}
        >
          Short stories for language learners
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 25,
            color: CHARCOAL,
            opacity: 0.55,
          }}
        >
          Instant translations · narration · vocabulary · graded A1–B2
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 78,
            fontFamily: "sans-serif",
            fontSize: 22,
            letterSpacing: 4,
            color: SAGE_DARK,
            textTransform: "uppercase",
          }}
        >
          seojaestory.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
