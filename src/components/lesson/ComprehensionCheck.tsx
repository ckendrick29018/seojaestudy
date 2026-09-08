"use client";

import { useState } from "react";
import type { ComprehensionQuestion } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, XIcon } from "@/components/ui/icons";

export function ComprehensionCheck({ questions }: { questions: ComprehensionQuestion[] }) {
  const t = useT();
  const [answers, setAnswers] = useState<Record<string, number>>({});

  function select(questionId: string, optionIndex: number) {
    setAnswers((prev) => (prev[questionId] !== undefined ? prev : { ...prev, [questionId]: optionIndex }));
  }

  const answeredCount = Object.keys(answers).length;
  const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  return (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <SectionHeading title={t("comprehensionCheck")} />
      <div className="space-y-6">
        {questions.map((question, qi) => {
          const chosen = answers[question.id];
          const isAnswered = chosen !== undefined;

          return (
            <div key={question.id} className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4">
              <p className="mb-3 font-medium text-charcoal">
                {qi + 1}. {question.prompt}
              </p>
              <div className="space-y-2">
                {question.options.map((option, oi) => {
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
                  {question.explanation}
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
