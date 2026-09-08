/**
 * cyrb53 — a tiny, fast, non-cryptographic 53-bit string hash.
 *
 * This file is the single source of truth for how a piece of narration text
 * maps to a clip id. It is intentionally dependency-free and pure so that the
 * exact same logic can be inlined in the browser (`src/lib/audio.ts`). If you
 * change anything here, change it there too or every pre-generated clip will
 * stop resolving.
 */

export function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

/** Collapse whitespace + NFC-normalise so trivial text differences share a clip. */
export function normaliseForKey(text) {
  return String(text).trim().replace(/\s+/g, " ").normalize("NFC");
}

/** Stable clip id for a piece of narration, e.g. `en_1a2b3c`. */
export function clipKey(text, lang) {
  return `${lang}_${cyrb53(normaliseForKey(text)).toString(36)}`;
}
