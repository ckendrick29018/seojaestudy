import type { LangCode } from "@/lib/types";

/**
 * Lazy access to the offline "tap any word" dictionary.
 *
 * The EN↔KO tables in ./index are ~140 kB and are only ever read inside a
 * word-tap / selection handler — never during render. Importing them
 * statically put the whole dictionary in every lesson page's first-load JS.
 * This module keeps it in a separate async chunk: <StoryReader> warms it on
 * idle after mount, and until it lands `lookupWordSync` returns null — the
 * same result as a word the dictionary simply doesn't carry.
 */

type LookupFn = (raw: string, lang: LangCode) => string | null;

let loaded: LookupFn | null = null;
let inflight: Promise<LookupFn> | null = null;

/** Import the dictionary chunk once; later calls resolve immediately. */
export function loadDictionary(): Promise<LookupFn> {
  if (loaded) return Promise.resolve(loaded);
  if (!inflight) {
    inflight = import("./index").then(({ lookupWord }) => {
      loaded = lookupWord;
      return lookupWord;
    });
  }
  return inflight;
}

/** True once the dictionary chunk has finished loading. */
export function dictionaryReady(): boolean {
  return loaded !== null;
}

/**
 * Look a word up if the dictionary is already in memory; otherwise return null
 * and kick off the load so the caller's own `loadDictionary()` follow-up can
 * resolve it.
 */
export function lookupWordSync(raw: string, lang: LangCode): string | null {
  if (loaded) return loaded(raw, lang);
  void loadDictionary();
  return null;
}
