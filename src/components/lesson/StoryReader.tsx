"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Lesson, LangCode, StorySentence, VocabTerm } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { useNowPlaying, type PlaybackState } from "@/components/providers/NowPlayingProvider";
import { narrate, pauseSpeaking, resumeSpeaking, stopSpeaking, useSpeechSupported } from "@/lib/speech";
import { dictionaryReady, loadDictionary, lookupWordSync } from "@/lib/dictionary/lazy";
import { CheckIcon, GlobeIcon, HighlighterIcon, PlusIcon, SpeakerIcon } from "@/components/ui/icons";
import { SelectionToolbar, type StorySelection } from "./SelectionToolbar";
import { Toast } from "@/components/ui/Toast";

/** Strips leading/trailing punctuation so a tapped chunk can match the glossary. */
function normalizeWord(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z가-힣0-9']/gi, "");
}

/** Short label for the reading-language toggle. */
const LANG_LABEL: Record<LangCode, string> = { en: "EN", ko: "한국어" };

interface SheetState {
  title: string;
  translation: string | null;
  sentence: StorySentence | null;
  term: VocabTerm | null;
  /** Gloss from the offline pocket dictionary, when the word isn't lesson vocab. */
  dictGloss: string | null;
  isPhrase: boolean;
  /** Which granularity the sheet is currently showing (word taps can toggle). */
  view: "word" | "sentence";
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

  const { setNowPlaying } = useNowPlaying();
  const [playback, setPlayback] = useState<PlaybackState>("idle");
  const [openSentenceId, setOpenSentenceId] = useState<string | null>(null);
  const [sheet, setSheet] = useState<SheetState | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const speakTimer = useRef<number | null>(null);

  const speechAvailable = useSpeechSupported();

  const [readingLang, setReadingLang] = useState<LangCode>(lesson.targetLanguage);

  // Which language the story *body* is shown in — independent of the app-chrome
  // language toggle, and remembered across lessons.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("luminaread:reading-lang");
      if (stored === "en" || stored === "ko") setReadingLang(stored);
    } catch {
      // localStorage unavailable — fall back to the lesson's target language.
    }
  }, []);

  function chooseReadingLang(lang: LangCode) {
    // Switching language mid-narration would leave stale audio playing.
    if (playback !== "idle") {
      clearSpeakTimer();
      stopSpeaking();
      setPlayback("idle");
    }
    setReadingLang(lang);
    try {
      window.localStorage.setItem("luminaread:reading-lang", lang);
    } catch {
      // best-effort persistence only
    }
  }

  // Never leave narration playing after the reader unmounts.
  useEffect(
    () => () => {
      stopSpeaking();
      if (speakTimer.current !== null) window.clearTimeout(speakTimer.current);
      setNowPlaying(null);
    },
    [setNowPlaying],
  );

  // The offline "tap any word" dictionary is ~140 kB and only needed once the
  // reader taps or selects a word — pull its chunk in off the critical path,
  // on idle, so it's usually ready by the first tap without weighing down the
  // lesson's first paint.
  useEffect(() => {
    const win = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (win.requestIdleCallback) {
      win.requestIdleCallback(() => void loadDictionary());
      return;
    }
    const id = window.setTimeout(() => void loadDictionary(), 1200);
    return () => window.clearTimeout(id);
  }, []);

  const readingIsTarget = readingLang === lesson.targetLanguage;
  /** The story body in the chosen reading language. */
  const bodyText = (s: StorySentence) => (readingIsTarget ? s.text : s.translation);
  /** The other language, shown on tap and via the globe button. */
  const revealText = (s: StorySentence) => (readingIsTarget ? s.translation : s.text);

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

  // The story as an ordered list of sentences in the chosen reading language.
  // `narrate` plays a pre-generated clip per sentence when it can, and falls
  // back to reading the joined text with the browser voice otherwise.
  const narrationSegments = useMemo(
    () => lesson.paragraphs.flat().map((s) => (readingIsTarget ? s.text : s.translation)),
    [lesson, readingIsTarget],
  );

  function clearSpeakTimer() {
    if (speakTimer.current !== null) {
      window.clearTimeout(speakTimer.current);
      speakTimer.current = null;
    }
  }

  // Belt-and-braces: some WebView wrappers never fire `onend`, so also clear
  // playback state after a length-based estimate. Re-armed on resume too, so
  // a pause partway through doesn't shorten the remaining allowance by much;
  // if playback has genuinely finished (or is paused) by then, this is a
  // harmless no-op.
  function armSpeakTimer() {
    const chars = narrationSegments.reduce((n, s) => n + s.length, 0);
    const approxDurationMs = Math.min(180_000, Math.max(5_000, chars * 55));
    speakTimer.current = window.setTimeout(() => setPlayback("idle"), approxDurationMs);
  }

  function handlePlay() {
    clearSpeakTimer();
    setPlayback("playing");
    narrate(narrationSegments, readingLang, {
      onEnd: () => {
        clearSpeakTimer();
        setPlayback("idle");
      },
      onError: () => {
        clearSpeakTimer();
        setPlayback("idle");
      },
    });
    armSpeakTimer();
  }

  function handlePauseResume() {
    if (playback === "playing") {
      clearSpeakTimer();
      pauseSpeaking();
      setPlayback("paused");
    } else if (playback === "paused") {
      resumeSpeaking();
      setPlayback("playing");
      armSpeakTimer();
    }
  }

  function handleStop() {
    clearSpeakTimer();
    stopSpeaking();
    setPlayback("idle");
  }

  // Publish playback state (and the handlers to control it) to the site
  // header, which renders the actual pause/resume/stop UI — see
  // NowPlayingProvider. Keyed only on `playback` itself: handlePauseResume /
  // handleStop are plain functions redefined every render, but they're only
  // read here right as `playback` changes, so the closures they hold are
  // already current for that transition.
  useEffect(() => {
    if (playback === "idle") {
      setNowPlaying(null);
      return;
    }
    setNowPlaying({ playback, onPauseResume: handlePauseResume, onStop: handleStop });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playback, setNowPlaying]);

  /** Resolve the best available translation for a free selection. */
  function resolvePhrase(text: string, sentenceIds: string[]): { translation: string | null; term: VocabTerm | null } {
    const term = readingIsTarget ? glossary.get(normalizeWord(text)) ?? null : null;
    if (term) return { translation: term.translation, term };
    // A single-word selection can still be resolved by the pocket dictionary.
    const trimmed = text.trim();
    if (!/\s/.test(trimmed)) {
      const gloss = lookupWordSync(trimmed, readingLang);
      if (gloss) return { translation: gloss, term: null };
    }
    const joined = sentenceIds
      .map((id) => {
        const s = sentenceMap.get(id);
        return s ? revealText(s) : undefined;
      })
      .filter(Boolean)
      .join(" ");
    return { translation: joined || null, term: null };
  }

  function handleWordTap(rawWord: string, sentence: StorySentence) {
    // A drag-select that ends on a word still fires a click — ignore it.
    if ((window.getSelection()?.toString() ?? "").trim().length > 0) return;
    const key = normalizeWord(rawWord);
    if (!key) return;
    const term = readingIsTarget ? glossary.get(key) ?? null : null;
    const dictGloss = term ? null : lookupWordSync(rawWord, readingLang);
    setSheet({
      title: rawWord.replace(/^[^0-9a-z가-힣'’-]+/i, "").replace(/[^0-9a-z가-힣'’-]+$/i, "") || rawWord,
      translation: term?.translation ?? dictGloss ?? null,
      sentence,
      term,
      dictGloss,
      isPhrase: false,
      view: "word",
    });

    // Dictionary chunk not in yet — resolve the gloss once it lands and patch
    // it into the sheet, as long as the user is still on this same word.
    if (!term && dictGloss === null && !dictionaryReady()) {
      const langAtTap = readingLang;
      void loadDictionary().then((lookup) => {
        const gloss = lookup(rawWord, langAtTap);
        if (!gloss) return;
        setSheet((s) =>
          s &&
          !s.isPhrase &&
          !s.term &&
          s.view === "word" &&
          s.dictGloss === null &&
          s.sentence?.id === sentence.id
            ? { ...s, translation: s.translation ?? gloss, dictGloss: gloss }
            : s,
        );
      });
    }
  }

  function toggleSentence(sentence: StorySentence) {
    setOpenSentenceId((current) => (current === sentence.id ? null : sentence.id));
  }

  // --- selection toolbar actions ---
  function onTranslate(sel: StorySelection) {
    const { translation, term } = resolvePhrase(sel.text, sel.sentenceIds);
    const single = sel.sentenceIds.length === 1 ? sentenceMap.get(sel.sentenceIds[0]) ?? null : null;
    setSheet({ title: sel.text, translation, sentence: single, term, dictGloss: null, isPhrase: true, view: "word" });
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
  // A plain word tap can flip between the word and its whole sentence.
  const canToggleView = !!sheet && !sheet.isPhrase && !!sheet.sentence;
  const sentenceView = !!sheet && sheet.view === "sentence" && !!sheet.sentence;

  const sheetInPlan = sheet
    ? sentenceView && sheet.sentence
      ? hasPhrase(lesson.slug, sheet.sentence.text)
      : sheet.term
        ? hasItem(sheet.term.id)
        : hasPhrase(lesson.slug, sheet.title)
    : false;

  // A plain word can be saved once we have a gloss for it (lesson vocab, the
  // pocket dictionary, or a phrase selection); a bare word with nothing cannot.
  const canAddToPlan =
    !!sheet && (sentenceView || !!sheet.term || sheet.isPhrase || !!sheet.dictGloss);

  function addSheetToPlan() {
    if (!sheet) return;
    if (sentenceView && sheet.sentence) {
      addPhrase(sheet.sentence.text, sheet.sentence.translation, lesson);
    } else if (sheet.term) {
      addVocab(sheet.term, lesson);
    } else {
      addPhrase(sheet.title, sheet.translation ?? sheet.sentence?.translation ?? "", lesson);
    }
    setToast(t("addedToStudyPlan"));
    setSheet(null);
  }

  function setSheetView(view: "word" | "sentence") {
    setSheet((s) => (s ? { ...s, view } : s));
  }

  function toggleSheetHighlight() {
    if (!sheet?.sentence) return;
    toggleHighlight(lesson.slug, sheet.sentence.id, sheet.sentence.text);
    setSheet(null);
  }

  return (
    <section className="px-5 py-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-serif text-2xl font-semibold text-charcoal">{t("story")}</h2>
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={t("readingLanguage")}
            className="inline-flex rounded-full border border-rose-soft/40 bg-white/70 p-0.5 text-xs font-medium"
          >
            {([lesson.targetLanguage, lesson.nativeLanguage] as LangCode[]).map((lc) => (
              <button
                key={lc}
                onClick={() => chooseReadingLang(lc)}
                aria-pressed={readingLang === lc}
                className={`rounded-full px-2.5 py-1 transition ${
                  readingLang === lc ? "bg-rose text-cream" : "text-charcoal/50 hover:text-charcoal/80"
                }`}
              >
                {LANG_LABEL[lc]}
              </button>
            ))}
          </div>
          {speechAvailable && playback === "idle" && (
            <button
              onClick={handlePlay}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-soft/40 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-rose transition hover:bg-rose-light/30"
            >
              <SpeakerIcon className="h-3.5 w-3.5" />
              {t("listen")}
            </button>
          )}
          {/* Once playback starts, its controls move to the site header (see
              NowPlayingProvider) so they stay reachable no matter how far the
              reader has scrolled, without any extra UI here in the story. */}
        </div>
      </div>

      <p className="mb-5 text-xs italic text-charcoal/40">{t("readerHint")}</p>

      <div ref={storyRef} className="space-y-4 font-serif text-[1.05rem] leading-8 text-charcoal">
        {lesson.paragraphs.map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph.map((sentence) => {
              const highlighted = isSentenceHighlighted(lesson.slug, sentence.id);
              return (
                <span key={sentence.id} data-sentence-id={sentence.id} className="mr-1">
                  {bodyText(sentence).split(/(\s+)/).map((chunk, i) =>
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
                      {revealText(sentence)}
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
              <span className="font-serif text-lg font-semibold text-charcoal">
                {sentenceView && sheet.sentence ? bodyText(sheet.sentence) : sheet.title}
              </span>
              <button
                onClick={() => setSheet(null)}
                className="shrink-0 text-sm text-charcoal/40 hover:text-charcoal"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {canToggleView && (
              <div className="mb-2 inline-flex rounded-full border border-rose-light/60 p-0.5 text-xs font-medium">
                <button
                  onClick={() => setSheetView("word")}
                  className={`rounded-full px-3 py-1 transition ${
                    sheet.view === "word" ? "bg-rose text-cream" : "text-charcoal/50 hover:text-charcoal/80"
                  }`}
                >
                  {t("translateWord")}
                </button>
                <button
                  onClick={() => setSheetView("sentence")}
                  className={`rounded-full px-3 py-1 transition ${
                    sheet.view === "sentence" ? "bg-rose text-cream" : "text-charcoal/50 hover:text-charcoal/80"
                  }`}
                >
                  {t("translateSentence")}
                </button>
              </div>
            )}

            {sentenceView && sheet.sentence ? (
              <p className="text-charcoal/70">{revealText(sheet.sentence)}</p>
            ) : sheet.term ? (
              <>
                <p className="text-xs font-medium uppercase tracking-wide text-rose/60">
                  {sheet.term.partOfSpeech}
                  {sheet.term.reading ? ` · ${sheet.term.reading}` : ""}
                </p>
                <p className="text-charcoal/70">{sheet.term.translation}</p>
              </>
            ) : sheet.isPhrase ? (
              <p className="text-charcoal/70">{sheet.translation ?? t("translationOf")}</p>
            ) : sheet.dictGloss ? (
              <p className="text-charcoal/70">{sheet.dictGloss}</p>
            ) : (
              <p className="text-sm text-charcoal/50">{t("noWordEntry")}</p>
            )}
            {!sentenceView && sheet.term?.example && (
              <p className="mt-2 text-sm italic text-charcoal/55">
                {sheet.term.example}
                <span className="not-italic text-charcoal/40"> — {sheet.term.exampleTranslation}</span>
              </p>
            )}
            {/* Always keep the line's meaning one glance away for a word tap. */}
            {!sentenceView && !sheet.term && !sheet.isPhrase && sheet.sentence && (
              <p className="mt-2 text-sm not-italic leading-6 text-charcoal/45">
                <span className="text-charcoal/35">{t("inThisLine")} </span>
                {revealText(sheet.sentence)}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {canAddToPlan && (
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
              )}

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
