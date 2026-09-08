import type { LangCode } from "./types";

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
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
