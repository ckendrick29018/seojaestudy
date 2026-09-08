import type { CSSProperties } from "react";

export type CatMood = "asleep" | "content" | "happy" | "reading" | "scholar";

/** Completed-book count → the shelf cat's mood. */
export function catMoodFor(count: number): CatMood {
  if (count <= 0) return "asleep";
  if (count < 3) return "content";
  if (count < 6) return "happy";
  if (count < 10) return "reading";
  return "scholar";
}

const TAIL_ORIGIN: CSSProperties = { transformBox: "fill-box", transformOrigin: "left bottom" };

/**
 * The bookshelf mascot — a small terracotta cat that perks up as the
 * reader's shelf fills. One SVG with a few parts toggled by `mood`:
 * eyes open past a couple of books, a book in its paws from six, and
 * reading glasses once the shelf hits ten. Asleep, it drifts a few z's;
 * otherwise its tail sways (both `motion-safe` only).
 */
export function ReadingCat({ mood, className }: { mood: CatMood; className?: string }) {
  const eyesOpen = mood !== "asleep" && mood !== "content";
  const hasBook = mood === "reading" || mood === "scholar";
  const hasGlasses = mood === "scholar";

  return (
    <svg viewBox="0 0 120 124" className={className} role="img" aria-hidden="true" fill="none">
      <path
        d="M92 98 C 110 94 110 68 95 64 C 105 74 99 88 85 90"
        fill="#D4A373"
        stroke="#C57B57"
        strokeWidth="2"
        strokeLinejoin="round"
        style={TAIL_ORIGIN}
        className={mood === "asleep" ? undefined : "motion-safe:animate-tail-sway"}
      />

      <path
        d="M30 102 C 24 68 40 52 60 52 C 80 52 96 68 90 102 Z"
        fill="#E7C9A9"
        stroke="#C57B57"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <ellipse cx="48" cy="101" rx="8" ry="5" fill="#EFD9C9" stroke="#C57B57" strokeWidth="2" />
      <ellipse cx="72" cy="101" rx="8" ry="5" fill="#EFD9C9" stroke="#C57B57" strokeWidth="2" />

      <path d="M40 42 L33 20 L55 33 Z" fill="#E7C9A9" stroke="#C57B57" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M80 42 L87 20 L65 33 Z" fill="#E7C9A9" stroke="#C57B57" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M41 36 L38 25 L49 32 Z" fill="#C57B57" />
      <path d="M79 36 L82 25 L71 32 Z" fill="#C57B57" />
      <circle cx="60" cy="47" r="22" fill="#E7C9A9" stroke="#C57B57" strokeWidth="2.4" />

      {eyesOpen ? (
        <>
          <circle cx="52" cy="45" r="2.7" fill="#2C2C2C" />
          <circle cx="68" cy="45" r="2.7" fill="#2C2C2C" />
        </>
      ) : (
        <>
          <path d="M48 45 q 4 4 8 0" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" />
          <path d="M64 45 q 4 4 8 0" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {hasGlasses && (
        <g stroke="#2C2C2C" strokeWidth="1.8" fill="none">
          <circle cx="52" cy="45" r="6" />
          <circle cx="68" cy="45" r="6" />
          <path d="M58 45 h4" />
        </g>
      )}

      <path d="M57.5 51 L62.5 51 L60 54.5 Z" fill="#C57B57" />
      <path d="M60 54.5 v3 M60 57.5 q -4 3 -7 1 M60 57.5 q 4 3 7 1" stroke="#C57B57" strokeWidth="1.6" strokeLinecap="round" />

      <g stroke="#C57B57" strokeWidth="1.4" strokeLinecap="round" opacity="0.65">
        <path d="M38 48 h-12 M39 53 l -11 4" />
        <path d="M82 48 h12 M81 53 l 11 4" />
      </g>

      {hasBook && (
        <g>
          <path
            d="M39 94 L60 88 L81 94 L81 107 L60 101 L39 107 Z"
            fill="#FDFBF7"
            stroke="#C57B57"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M60 88 V101" stroke="#C57B57" strokeWidth="2" />
          <path d="M45 97 l 11 -3 M64 94 l 11 3" stroke="#D4A373" strokeWidth="1.4" />
        </g>
      )}

      {mood === "asleep" && (
        <g fill="#B7C296" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700">
          <text x="86" y="36" fontSize="12" className="motion-safe:animate-zzz">z</text>
          <text x="95" y="25" fontSize="15" className="motion-safe:animate-zzz" style={{ animationDelay: "0.7s" }}>z</text>
          <text x="106" y="13" fontSize="18" className="motion-safe:animate-zzz" style={{ animationDelay: "1.4s" }}>z</text>
        </g>
      )}
    </svg>
  );
}
