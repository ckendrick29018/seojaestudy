"use client";

import { useEffect } from "react";

/**
 * Last-resort fallback for an error thrown by RootLayout itself (a font, a
 * provider, anything above the normal error.tsx boundary) — the one case
 * error.tsx can't catch, because RootLayout is above it. Next.js renders
 * this INSTEAD of layout.tsx when that happens, so it must supply its own
 * <html>/<body> and can't assume globals.css, Tailwind classes, the brand
 * fonts, or any context provider (LanguageProvider included) ever mounted —
 * hence plain inline styles and hardcoded bilingual copy instead of the
 * usual token classes / useT().
 */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Unhandled root layout error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem 1.5rem",
          textAlign: "center",
          backgroundColor: "#FDFBF7",
          color: "#2C2C2C",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        <div
          aria-hidden
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EFD9C9",
            color: "#C57B57",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          !
        </div>
        <h1 style={{ fontSize: "1.4rem", fontWeight: 600, margin: 0 }}>
          Something went wrong · 문제가 발생했어요
        </h1>
        <p style={{ maxWidth: 360, fontSize: "0.9rem", color: "rgba(44,44,44,0.6)", margin: 0 }}>
          Please try again, or come back in a moment.
          <br />
          다시 시도하거나 잠시 후 다시 방문해 주세요.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "0.5rem",
            borderRadius: 999,
            padding: "0.6rem 1.4rem",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "#FDFBF7",
            backgroundColor: "#C57B57",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again · 다시 시도
        </button>
      </body>
    </html>
  );
}
