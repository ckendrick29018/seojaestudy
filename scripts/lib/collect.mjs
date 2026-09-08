import { clipKey } from "./hash.mjs";

/**
 * Every string the app can ever send to the narrator, paired with the
 * language it should be spoken in.
 *
 * Today the "Listen" button reads the story sentence-by-sentence and the
 * flashcards speak a single vocab term, so those are the only things worth
 * pre-generating. User-authored study-plan phrases can't be known ahead of
 * time and fall back to the browser voice.
 */
export function collectClips(lessons, { lesson: onlySlug } = {}) {
  const out = [];
  const seen = new Set();

  const add = (lang, text) => {
    const value = String(text ?? "").trim();
    if (!value) return;
    const key = clipKey(value, lang);
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ key, lang, text: value });
  };

  for (const lesson of lessons) {
    if (onlySlug && lesson.slug !== onlySlug) continue;
    const target = lesson.targetLanguage;
    const native = lesson.nativeLanguage;

    for (const paragraph of lesson.paragraphs) {
      for (const sentence of paragraph) {
        add(target, sentence.text);
        add(native, sentence.translation);
      }
    }
    for (const term of lesson.vocab) {
      add(target, term.term);
    }
  }

  return out;
}
