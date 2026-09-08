"use client";

import { useMemo, useRef, useState } from "react";
import type { Lesson, StorySentence, VocabTerm } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { speak, stopSpeaking, useSpeechSupported } from "@/lib/speech";
import { CheckIcon, GlobeIcon, HighlighterIcon, PlusIcon, SpeakerIcon, StopIcon } from "@/components/ui/icons";
import { SelectionToolbar, type StorySelection } from "./SelectionToolbar";
import { Toast } from "@/components/ui/Toast";

/** Strips leading/trailing punctuation so a tapped chunk can match the glossary. */
function normalizeWord(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z가-힣0-9']/gi, "");
}

interface SheetState {
  title: string;
  translation: string | null;
  sentence: StorySentence | null;
  term: VocabTerm | null;
  isPhrase: boolean;
}

export function StoryReader({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const {
    addVocab,
    addPhrase,
    hasItem,
    hasPhrase,
    isSentenceHighlighted,
    toggleHighlight,
    addHighlights,
  } = useStudyPlan();

  const [speaking, setSpeaking] = useState(false);
  const [openSentenceId, setOpenSentenceId] = useState<string | null>(null);
  const [sheet, setSheet] = useState<SheetState | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const speechAvailable = useSpeechSupported();

  const sentenceMap = useMemo(() => {
    const m = new Map<string, StorySentence>();
    lesson.paragraphs.flat().forEach((s) => m.set(s.id, s));
    return m;
  }, [lesson]);

  const glossary = useMemo(() => {
    const m = new Map<string, VocabTerm>();
    lesson.vocab.forEach((term) => m.set(normalizeWord(term.term), term));
    return m;
  }, [lesson]);

  const fullText = useMemo(() => lesson.paragraphs.flat().map((s) => s.text).join(" "), [lesson]);

  function handleListen() {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    speak(fullText, lesson.targetLanguage);
    setSpeaking(true);
    // The Web Speech API's onend event isn't reliable enough across browsers
    // to depend on here, so we clear the "speaking" state after a rough
    // estimate based on text length. Tapping the button again always stops
    // playback immediately regardless of this timer.
    const approxDurationMs = Math.min(20000, fullText.length * 60);
    window.setTimeout(() => setSpeaking(false), approxDurationMs);
  }

  /** Resolve the best available translation for a free selection. */
  function resolvePhrase(text: string, sentenceIds: string[]): { translation: string | null; term: VocabTerm | null } {
    const term = glossary.get(normalizeWord(text)) ?? null;
    if (term) return { translation: term.translation, term };
    const joined = sentenceIds
      .map((id) => sentenceMap.get(id)?.translation)
      .filter(Boolean)
      .join(" ");
    return { translation: joined || null, term: null };
  }

  function handleWordTap(rawWord: string, sentence: StorySentence) {
    // A drag-select that ends on a word still fires a click — ignore it.
    if ((window.getSelection()?.toString() ?? "").trim().length > 0) return;
    const key = normalizeWord(rawWord);
    if (!key) return;
    const term = glossary.get(key) ?? null;
    setSheet({
      title: rawWord.replace(/[^a-z가-힣0-9']/gi, ""),
      translation: term?.translation ?? null,
      sentence,
      term,
      isPhrase: false,
    });
  }

  function toggleSentence(sentence: StorySentence) {
    setOpenSentenceId((current) => (current === sentence.id ? null : sentence.id));
  }

  // --- selection toolbar actions ---
  function onTranslate(sel: StorySelection) {
    const { translation, term } = resolvePhrase(sel.text, sel.sentenceIds);
    const single = sel.sentenceIds.length === 1 ? sentenceMap.get(sel.sentenceIds[0]) ?? null : null;
    setSheet({ title: sel.text, translation, sentence: single, term, isPhrase: true });
  }

  function onHighlightSelection(sel: StorySelection) {
    const allOn = sel.sentenceIds.every((id) => isSentenceHighlighted(lesson.slug, id));
    if (allOn) {
      sel.sentenceIds.forEach((id) => {
        const s = sentenceMap.get(id);
        if (s) toggleHighlight(lesson.slug, id, s.text);
      });
    } else {
      addHighlights(
        sel.sentenceIds.map((id) => ({
          lessonSlug: lesson.slug,
          sentenceId: id,
          text: sentenceMap.get(id)?.text ?? "",
        })),
      );
    }
  }

  function onStudySelection(sel: StorySelection) {
    const { translation } = resolvePhrase(sel.text, sel.sentenceIds);
    addPhrase(sel.text, translation ?? "", lesson);
    setToast(t("addedToStudyPlan"));
  }

  // --- bottom sheet actions ---
  const sheetInPlan = sheet
    ? sheet.term
      ? hasItem(sheet.term.id)
      : hasPhrase(lesson.slug, sheet.title)
    : false;

  function addSheetToPlan() {
    if (!sheet) return;
    if (sheet.term) addVocab(sheet.term, lesson);
    else addPhrase(sheet.title, sheet.translation ?? sheet.sentence?.translation ?? "", lesson);
    setToast(t("addedToStudyPlan"));
    setSheet(null);
  }

  function toggleSheetHighlight() {
    if (!sheet?.sentence) return;
    toggleHighlight(lesson.slug, sheet.sentence.id, sheet.sentence.text);
    setSheet(null);
  }

  return (
    <section className="px-5 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-charcoal">{t("story")}</h2>
        {speechAvailable && (
          <button
            onClick={handleListen}
            className="inline-flex items-center gap-1.5 rounded-full border border-rose-soft/40 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-rose transition hover:bg-rose-light/30"
          >
            {speaking ? <StopIcon className="h-3.5 w-3.5" /> : <SpeakerIcon className="h-3.5 w-3.5" />}
            {speaking ? t("stop") : t("listen")}
          </button>
        )}
      </div>

      <p className="mb-5 text-xs italic text-charcoal/40">{t("readerHint")}</p>

      <div ref={storyRef} className="space-y-4 font-serif text-[1.05rem] leading-8 text-charcoal">
        {lesson.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph.map((sentence) => {
              const highlighted = isSentenceHighlighted(lesson.slug, sentence.id);
              return (
                <span key={sentence.id} data-sentence-id={sentence.id} className="mr-1">
                  {sentence.text.split(/(\s+)/).map((chunk, i) =>
                    chunk.trim() === "" ? (
                      <span key={i}>{chunk}</span>
                    ) : (
                      <span
                        key={i}
                        onClick={() => handleWordTap(chunk, sentence)}
                        className={`cursor-pointer rounded px-0.5 transition ${
                          highlighted ? "bg-gold/25 hover:bg-gold/40" : "hover:bg-sage/50 active:bg-sage/70"
                        }`}
                      >
                        {chunk}
                      </span>
                    ),
                  )}
                  <button
                    onClick={() => toggleSentence(sentence)}
                    aria-label={t("translationOf")}
                    className="ml-1 inline-flex h-5 w-5 -translate-y-0.5 items-center justify-center rounded-full align-middle text-rose-soft/70 transition hover:bg-rose-light/40 hover:text-rose"
                  >
                    <GlobeIcon className="h-3.5 w-3.5" />
                  </button>
                  {openSentenceId === sentence.id && (
                    <span className="mt-1 block rounded-xl2 bg-sage/30 px-3 py-2 font-sans text-sm not-italic leading-6 text-charcoal/80">
                      {sentence.translation}
                    </span>
                  )}
                </span>
              );
            })}
          </p>
        ))}
      </div>

      <SelectionToolbar
        containerRef={storyRef}
        onTranslate={onTranslate}
        onHighlight={onHighlightSelection}
        onStudy={onStudySelection}
        allHighlighted={(ids) => ids.length > 0 && ids.every((id) => isSentenceHighlighted(lesson.slug, id))}
        labels={{
          translate: t("translate"),
          highlight: t("highlight"),
          removeHighlight: t("removeHighlight"),
          study: t("addToStudyPlan"),
        }}
      />

      {sheet && (
        <>
          <div className="fixed inset-0 z-30 bg-charcoal/10" onClick={() => setSheet(null)} />
          <div
            role="dialog"
            className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-app animate-fade-in rounded-t-xl2 border border-rose-light/60 bg-white p-5 shadow-soft"
          >
            <div className="mb-1 flex items-start justify-between gap-3">
              <span className="font-serif text-lg font-semibold text-charcoal">{sheet.title}</span>
              <button
                onClick={() => setSheet(null)}
                className="shrink-0 text-sm text-charcoal/40 hover:text-charcoal"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <p className="text-charcoal/70">
              {sheet.translation ?? sheet.sentence?.translation ?? t("translationOf")}
            </p>
            {sheet.term?.example && (
              <p className="mt-2 text-sm italic text-charcoal/55">
                {sheet.term.example}
                <span className="not-italic text-charcoal/40"> — {sheet.term.exampleTranslation}</span>
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={addSheetToPlan}
                disabled={sheetInPlan}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  sheetInPlan
                    ? "border-sage-dark/50 bg-sage/40 text-charcoal/60"
                    : "border-rose-soft/50 text-rose hover:bg-rose-light/30"
                }`}
              >
                {sheetInPlan ? <CheckIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                {sheetInPlan ? t("inStudyPlan") : t("addToStudyPlan")}
              </button>

              {sheet.sentence && (
                <button
                  onClick={toggleSheetHighlight}
                  className="inline-flex items-center gap-1.5 rounded-full border border-rose-light/60 px-3.5 py-1.5 text-xs font-medium text-charcoal/60 transition hover:bg-sage/30"
                >
                  <HighlighterIcon className="h-3.5 w-3.5" />
                  {isSentenceHighlighted(lesson.slug, sheet.sentence.id) ? t("removeHighlight") : t("highlightLine")}
                </button>
              )}
            </div>
          </div>
        </>
      )}

      <Toast message={toast} onDone={() => setToast(null)} />
    </section>
  );
}
