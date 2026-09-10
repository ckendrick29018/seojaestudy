import { EN_KO } from "./en-ko";
import { KO_EN } from "./ko-en";
import { koStemCandidates } from "./ko-stem";

/**
 * Offline word lookup for the story reader's "tap any word" feature.
 *
 * EN→KO (`en-ko.ts`) is used when the story body is shown in English; KO→EN
 * (`ko-en.ts` + the light stemmer in `ko-stem.ts`) when it's shown in Korean.
 * Both are hand-built, offline, and grown per lesson.
 */

/** Lowercase, drop surrounding punctuation/quotes, keep internal ' and -. */
function normalize(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/^[^0-9a-z가-힣]+/i, "")
    .replace(/[^0-9a-z가-힣'-]+$/i, "")
    .replace(/^-+|-+$/g, "");
}

/** Candidate base forms for an inflected English surface form. */
function stemCandidates(w: string): string[] {
  const out: string[] = [];
  const add = (s: string) => {
    if (s && s.length > 1 && !out.includes(s)) out.push(s);
  };

  if (w.endsWith("'s") || w.endsWith("s'")) add(w.slice(0, -2));
  if (w.endsWith("n't")) add(w.slice(0, -3));

  if (w.endsWith("ies")) add(w.slice(0, -3) + "y");
  if (w.endsWith("es")) add(w.slice(0, -2));
  if (w.endsWith("s")) add(w.slice(0, -1));

  if (w.endsWith("ied")) add(w.slice(0, -3) + "y");
  if (w.endsWith("ed")) {
    add(w.slice(0, -2));
    add(w.slice(0, -1));
    if (w.length > 4 && w[w.length - 3] === w[w.length - 4]) add(w.slice(0, -3)); // stopped → stop
  }
  if (w.endsWith("ing")) {
    add(w.slice(0, -3));
    add(w.slice(0, -3) + "e"); // making → make
    if (w.length > 5 && w[w.length - 4] === w[w.length - 5]) add(w.slice(0, -4)); // running → run
  }
  if (w.endsWith("er")) add(w.slice(0, -2));
  if (w.endsWith("est")) add(w.slice(0, -3));
  if (w.endsWith("ly")) add(w.slice(0, -2));

  return out;
}

/**
 * Look up a single word. Returns a short gloss, or null if the pocket
 * dictionary does not have it. `lang` is the language of the tapped word.
 */
export function lookupEnKo(raw: string): string | null {
  const w = normalize(raw);
  if (!w) return null;

  const direct = EN_KO[w];
  if (direct) return direct;

  for (const cand of stemCandidates(w)) {
    if (EN_KO[cand]) return EN_KO[cand];
  }

  // Hyphenated compound not listed as a whole: gloss the parts we know.
  if (w.includes("-")) {
    const parts = w.split("-").filter(Boolean);
    const glossed = parts.map((p) => EN_KO[p] ?? stemCandidates(p).map((c) => EN_KO[c]).find(Boolean));
    if (parts.length > 1 && glossed.every(Boolean)) return glossed.join(" · ");
  }

  return null;
}

/**
 * Look up a Korean word. Tries the surface form, then a few base forms with
 * particles stripped / verb endings folded to `-다` (see `ko-stem.ts`).
 */
export function lookupKoEn(raw: string): string | null {
  const w = normalize(raw);
  if (!w || !/[가-힣]/.test(w)) return null;

  const direct = KO_EN[w];
  if (direct) return direct;

  for (const cand of koStemCandidates(w)) {
    if (KO_EN[cand]) return KO_EN[cand];
  }

  return null;
}

/** Public entry point — picks the table for the reading language. */
export function lookupWord(raw: string, lang: "en" | "ko"): string | null {
  return lang === "ko" ? lookupKoEn(raw) : lookupEnKo(raw);
}
