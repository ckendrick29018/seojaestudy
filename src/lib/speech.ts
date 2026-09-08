import { useEffect, useState } from "react";
import type { LangCode } from "./types";
import { playClips } from "./audio";

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * Speech-support flag safe for render: `false` on the server and on the first
 * client render (so it never causes a hydration mismatch), then the real
 * value once mounted.
 */
export function useSpeechSupported(): boolean {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    setSupported(isSpeechSupported());
  }, []);
  return supported;
}

/* ------------------------------------------------------------------------- *
 * Voice selection
 *
 * The Web Speech API is free and needs no API key, but left to itself it
 * often falls back to the oldest, most robotic voice installed (Windows
 * SAPI "David"/"Zira", eSpeak). Every modern browser also ships a much
 * better neural / cloud voice for common languages — we just have to ask
 * for it by name. This picks the best available voice per language; where
 * none of the good ones exist (a bare Linux box, say) it simply leaves the
 * choice to the browser, exactly as before.
 * ------------------------------------------------------------------------- */

/** Known good neural / natural voices, best first, matched by exact name. */
const PREFERRED: Record<LangCode, string[]> = {
  en: [
    "Google US English",
    "Google UK English Female",
    "Microsoft Ava Online (Natural) - English (United States)",
    "Microsoft Aria Online (Natural) - English (United States)",
    "Microsoft Emma Online (Natural) - English (United States)",
    "Microsoft Jenny Online (Natural) - English (United States)",
    "Samantha",
    "Ava",
    "Allison",
    "Serena",
    "Karen",
    "Moira",
  ],
  ko: [
    "Google 한국의",
    "Microsoft SunHi Online (Natural) - Korean (Korea)",
    "Microsoft InJoon Online (Natural) - Korean (Korea)",
    "Yuna",
    "Sora",
  ],
};

/** Generic "this name sounds modern" hint, used when no exact match is found. */
const QUALITY_HINT = /natural|neural|online|premium|enhanced|wavenet|google|siri/i;

function scoreVoice(voice: SpeechSynthesisVoice, lang: LangCode): number {
  const wanted = lang === "ko" ? "ko" : "en";
  if (!voice.lang?.toLowerCase().startsWith(wanted)) return -1;

  let score = 0;
  const idx = PREFERRED[lang].indexOf(voice.name);
  if (idx !== -1) score += 1000 - idx; // exact known-good name wins outright
  if (QUALITY_HINT.test(voice.name)) score += 40;
  if (!voice.localService) score += 15; // cloud voices are usually richer
  if (voice.lang.toLowerCase() === (lang === "ko" ? "ko-kr" : "en-us")) score += 8;
  if (voice.default) score += 2;
  return score;
}

let cachedVoices: SpeechSynthesisVoice[] = [];

function refreshVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSupported()) return [];
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) cachedVoices = voices;
  return cachedVoices;
}

// The voice list loads asynchronously in Chrome; warm it now and again
// whenever the browser says it changed.
if (isSpeechSupported()) {
  refreshVoices();
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshVoices);
}

function pickVoice(lang: LangCode): SpeechSynthesisVoice | null {
  let best: SpeechSynthesisVoice | null = null;
  let bestScore = 0;
  for (const voice of refreshVoices()) {
    const s = scoreVoice(voice, lang);
    if (s > bestScore) {
      bestScore = s;
      best = voice;
    }
  }
  return best;
}

/** Split narration into sentence-sized pieces (see `speak` for why). */
function splitForSpeech(text: string): string[] {
  const pieces = text.match(/[^.!?。！？]+[.!?。！？]*["'"'»)]*\s*/g);
  const trimmed = (pieces ?? [text]).map((p) => p.trim()).filter(Boolean);
  return trimmed.length ? trimmed : [text];
}

export interface SpeakHandlers {
  onEnd?: () => void;
  onError?: () => void;
}

/**
 * Narrate `text` with the best voice available for `lang`, a touch slower
 * than default so it reads warmer and is easier to follow along with.
 *
 * The text is spoken as a queue of short utterances rather than one long
 * one: Chrome silently stops a single utterance after ~15 seconds, and its
 * `onend` event is unreliable on long input — chunking sidesteps both, so
 * the end-of-playback callback fires dependably on the final piece.
 */
export function speak(text: string, lang: LangCode, handlers: SpeakHandlers = {}): void {
  if (!isSpeechSupported()) {
    handlers.onEnd?.();
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();

  const voice = pickVoice(lang);
  const langTag = lang === "ko" ? "ko-KR" : "en-US";
  const chunks = splitForSpeech(text);

  chunks.forEach((chunk, i) => {
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = langTag;
    if (voice) utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    if (i === chunks.length - 1) {
      utterance.onend = () => handlers.onEnd?.();
    }
    utterance.onerror = (event) => {
      // Restarting or stopping cancels the queue — that isn't a failure.
      if (event.error === "canceled" || event.error === "interrupted") return;
      handlers.onError?.();
    };
    synth.speak(utterance);
  });
}

/* ------------------------------------------------------------------------- *
 * Narration entry point
 *
 * `narrate` is what the UI should call. It plays pre-generated neural-voice
 * clips when every segment has one (crisp, identical on every device) and
 * quietly falls back to the browser's Web Speech voice otherwise. Callers
 * still stop playback with `stopSpeaking`, whichever path was taken.
 * ------------------------------------------------------------------------- */

let activeClipStop: (() => void) | null = null;

export function narrate(segments: string[], lang: LangCode, handlers: SpeakHandlers = {}): void {
  stopSpeaking();

  const wrapped: SpeakHandlers = {
    onEnd: () => {
      activeClipStop = null;
      handlers.onEnd?.();
    },
    onError: () => {
      activeClipStop = null;
      handlers.onError?.();
    },
  };

  const stop = playClips(segments, lang, wrapped);
  if (stop) {
    activeClipStop = stop;
    return;
  }

  // Nothing pre-generated for this text — use the live browser voice.
  speak(segments.join(" "), lang, wrapped);
}

export function stopSpeaking(): void {
  if (activeClipStop) {
    const stop = activeClipStop;
    activeClipStop = null;
    stop();
  }
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
}
