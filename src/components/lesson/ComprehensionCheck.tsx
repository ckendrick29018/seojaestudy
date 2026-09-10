"use client";

import { useEffect, useState } from "react";
import type { ComprehensionQuestion } from "@/lib/types";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, XIcon } from "@/components/ui/icons";

type QLang = "en" | "ko";

const STORE_KEY = "luminaread:comprehension-lang";
const READING_LANG_KEY = "luminaread:reading-lang";

/** The prompt / options / explanation for a question in the chosen language. */
function view(question: ComprehensionQuestion, lang: QLang) {
  if (lang === "ko" && question.promptKo) {
    return {
      prompt: question.promptKo,
      options: question.optionsKo ?? question.options,
      explanation: question.explanationKo ?? question.explanation,
    };
  }
  return {
    prompt: question.prompt,
    options: question.options,
    explanation: question.explanation,
  };
}

export function ComprehensionCheck({ questions }: { questions: ComprehensionQuestion[] }) {
  const t = useT();
  const { lang: uiLang } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const hasKo = questions.some((q) => q.promptKo);

  // Which language the questions are shown in. Seeded (once, client-side) from an
  // explicit past choice → the story reading language → the app UI language.
  const [qLang, setQLang] = useState<QLang>("en");
  useEffect(() => {
    let next: QLang = uiLang === "ko" ? "ko" : "en";
    try {
      const saved = window.localStorage.getItem(STORE_KEY);
      const reading = window.localStorage.getItem(READING_LANG_KEY);
      if (saved === "en" || saved === "ko") next = saved;
      else if (reading === "en" || reading === "ko") next = reading;
    } catch {
      // localStorage unavailable — the UI-language default stands.
    }
    setQLang(next);
    // Seed only on mount; later changes come from the toggle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function chooseQLang(next: QLang) {
    setQLang(next);
    try {
      window.localStorage.setItem(STORE_KEY, next);
    } catch {
      // best-effort persistence only
    }
  }

  const effectiveLang: QLang = hasKo ? qLang : "en";
  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  function select(questionId: string, optionIndex: number) {
    setAnswers((prev) => (prev[questionId] !== undefined ? prev : { ...prev, [questionId]: optionIndex }));
  }

  return (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <div className="mb-4 flex items-start justify-between gap-3">
        <SectionHeading title={t("comprehensionCheck")} />
        {hasKo && (
          <div
            role="group"
            aria-label={t("questionLanguage")}
            className="mt-0.5 inline-flex shrink-0 rounded-full border border-rose-soft/40 bg-white/70 p-0.5 text-xs font-medium"
          >
            {(["en", "ko"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => chooseQLang(code)}
                aria-pressed={qLang === code}
                className={`rounded-full px-2.5 py-1 transition ${
                  qLang === code ? "bg-rose text-cream" : "text-charcoal/50 hover:text-charcoal/80"
                }`}
              >
                {code === "en" ? "EN" : "한국어"}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((question, qi) => {
          const chosen = answers[question.id];
          const isAnswered = chosen !== undefined;
          const { prompt, options, explanation } = view(question, effectiveLang);

          return (
            <div key={question.id} className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4">
              <p className="mb-3 font-medium text-charcoal">
                {qi + 1}. {prompt}
              </p>
              <div className="space-y-2">
                {options.map((option, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrectOption = oi === question.correctIndex;

                  let stateClass = "border-rose-light/40 bg-cream hover:bg-sage/20";
                  if (isAnswered && isChosen && isCorrectOption) stateClass = "border-sage-dark bg-sage/50";
                  else if (isAnswered && isChosen && !isCorrectOption) stateClass = "border-rose/40 bg-rose-light/40";
                  else if (isAnswered && isCorrectOption) stateClass = "border-sage-dark/60 bg-sage/20";

                  return (
                    <button
                      key={oi}
                      disabled={isAnswered}
                      onClick={() => select(question.id, oi)}
                      className={`flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm transition disabled:cursor-default ${stateClass}`}
                    >
                      <span>{option}</span>
                      {isAnswered && isChosen && (
                        isCorrectOption ? (
                          <CheckIcon className="h-4 w-4 shrink-0 text-sage-dark" />
                        ) : (
                          <XIcon className="h-4 w-4 shrink-0 text-rose" />
                        )
                      )}
                    </button>
                  );
                })}
              </div>
              {isAnswered && (
                <p className="mt-3 text-sm text-charcoal/60">
                  <span className="font-medium text-charcoal/80">
                    {chosen === question.correctIndex ? t("correct") : t("tryAgain")}
                  </span>{" "}
                  {explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {answeredCount === questions.length && (
        <p className="mt-5 text-center text-sm font-medium text-charcoal/70">
          {t("yourScore")}: {correctCount} / {questions.length}
        </p>
      )}
    </section>
  );
}
