import { useEffect, useState } from "react";
import type { LangCode } from "./types";

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

/**
 * Plays audio narration using the browser's built-in Web Speech API.
 * This needs no API key and works offline in most browsers and modern
 * WebView wrappers, though available voices vary by device/OS.
 */
export function speak(text: string, lang: LangCode): void {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === "ko" ? "ko-KR" : "en-US";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
}
