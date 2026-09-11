import type { LangCode } from "./types";
import manifest from "./audio-manifest.json";

/* -------------------------------------------------------------------------- *
 * Pre-generated narration clips.
 *
 * `scripts/generate-audio.mjs` renders every lesson sentence and vocab term
 * to a static audio file with a neural TTS voice and writes the key -> url map
 * imported below. At runtime we look a clip up by hashing the exact text; if
 * there's a hit we play the file, otherwise the caller falls back to the
 * browser's Web Speech voice (see `narrate` in ./speech).
 *
 * The hash MUST stay identical to scripts/lib/hash.mjs.
 * -------------------------------------------------------------------------- */

const CLIPS = manifest as Record<string, string>;

function cyrb53(str: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch: number; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

function normaliseForKey(text: string): string {
  return text.trim().replace(/\s+/g, " ").normalize("NFC");
}

export function clipKey(text: string, lang: LangCode): string {
  return `${lang}_${cyrb53(normaliseForKey(text)).toString(36)}`;
}

export function clipUrl(text: string, lang: LangCode): string | null {
  return CLIPS[clipKey(text, lang)] ?? null;
}

/** True only if a pre-generated clip exists for every segment. */
export function hasClips(segments: string[], lang: LangCode): boolean {
  return segments.length > 0 && segments.every((s) => clipUrl(s, lang) !== null);
}

export interface ClipHandlers {
  onEnd?: () => void;
  onError?: () => void;
}

/** Playback controls for an in-progress `playClips` run. */
export interface ClipHandle {
  stop: () => void;
  /** Pause the current clip in place (the `<audio>` element keeps its `currentTime`). */
  pause: () => void;
  /** Resume a clip paused with `pause()`, continuing from where it left off. */
  resume: () => void;
}

/**
 * Play `segments` as pre-generated clips, one after another.
 *
 * Returns a playback handle, or `null` if any segment has no clip (the caller
 * should then fall back to speech synthesis rather than play a partial mix).
 */
export function playClips(
  segments: string[],
  lang: LangCode,
  handlers: ClipHandlers = {},
): ClipHandle | null {
  const urls = segments.map((s) => clipUrl(s, lang));
  if (urls.some((u) => u === null)) return null;
  if (typeof Audio === "undefined") return null;

  const audio = new Audio();
  audio.preload = "auto";
  let index = 0;
  let stopped = false;

  const fail = () => {
    if (stopped) return;
    stopped = true;
    audio.removeEventListener("ended", next);
    handlers.onError?.();
  };

  const next = () => {
    if (stopped) return;
    if (index >= urls.length) {
      handlers.onEnd?.();
      return;
    }
    audio.src = urls[index++] as string;
    void audio.play().catch(fail);
  };

  audio.addEventListener("ended", next);
  audio.addEventListener("error", fail);
  next();

  return {
    stop: () => {
      stopped = true;
      audio.removeEventListener("ended", next);
      audio.pause();
      audio.src = "";
    },
    // The `<audio>` element keeps its `currentTime` across pause/play, so
    // resuming continues the same clip rather than restarting it.
    pause: () => {
      if (!stopped) audio.pause();
    },
    resume: () => {
      if (!stopped) void audio.play().catch(fail);
    },
  };
}
