"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { DIRECTION_BADGE, LEVELS, INTERESTS, GOALS, labelFor, uiLanguageFor, type LearnDirection } from "@/lib/onboarding";
import type { CEFRLevel } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ChevronLeftIcon } from "@/components/ui/icons";

const STEPS = ["direction", "level", "interests", "goal", "summary"] as const;
const DOT_COUNT = 4; // direction..goal; summary is the finale

const HIDDEN_ON = ["/login", "/subscribe", "/auth"];

export function OnboardingFlow() {
  const pathname = usePathname();
  const { hydrated, data, setDirection, setLevel, toggleInterest, setGoal, complete } = useOnboarding();
  const { lang, setLang } = useLanguage();
  const t = useT();
  const [step, setStep] = useState(0);

  // When the flow re-opens (first run, or "Redo onboarding" from Settings),
  // always start from the first question. Depends only on `completed`, so it
  // never fires between steps mid-flow.
  useEffect(() => {
    if (!data.completed) setStep(0);
  }, [data.completed]);

  if (!hydrated || data.completed) return null;
  // The marketing landing page lives at "/"; the app — and onboarding — start at "/library".
  if (pathname === "/") return null;
  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  const stepName = STEPS[step];
  const go = (n: number) => setStep(Math.min(Math.max(n, 0), STEPS.length - 1));

  function chooseDirection(d: LearnDirection) {
    setDirection(d);
    setLang(uiLanguageFor(d));
    go(1);
  }

  function chooseLevel(l: CEFRLevel) {
    setLevel(l);
    go(2);
  }

  function finish() {
    if (data.direction) setLang(uiLanguageFor(data.direction));
    complete();
  }

  const canContinue = stepName !== "level" || data.level != null;

  return (
    <div className="app-stage fixed inset-0 z-50 overflow-y-auto">
      <div className="mx-auto flex min-h-full max-w-app flex-col bg-cream px-6 py-7 sm:my-8 sm:min-h-[calc(100dvh-4rem)] sm:rounded-xl2 sm:border sm:border-rose-light sm:shadow-frame">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-serif text-lg font-semibold tracking-tight text-charcoal">{t("appName")}</span>
          {stepName !== "summary" && (
            <button onClick={finish} className="text-xs font-medium text-charcoal/40 transition hover:text-charcoal/70">
              {t("onbSkip")}
            </button>
          )}
        </div>

        {stepName !== "summary" && (
          <div className="mb-8 flex gap-1.5">
            {Array.from({ length: DOT_COUNT }, (_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-rose" : "bg-rose-light/50"}`}
              />
            ))}
          </div>
        )}

        <div key={stepName} className="flex flex-1 animate-fade-in flex-col">
          {stepName === "direction" && (
            <Step title={t("onbDirectionTitle")} body={t("onbWelcomeBody")}>
              <div className="space-y-3">
                <ChoiceCard
                  emoji={DIRECTION_BADGE["ko-en"]}
                  head="한국어 → English"
                  sub={t("onbDirKoEnSub")}
                  selected={data.direction === "ko-en"}
                  onClick={() => chooseDirection("ko-en")}
                />
                <ChoiceCard
                  emoji={DIRECTION_BADGE["en-ko"]}
                  head="English → 한국어"
                  sub={t("onbDirEnKoSub")}
                  selected={data.direction === "en-ko"}
                  onClick={() => chooseDirection("en-ko")}
                />
              </div>
            </Step>
          )}

          {stepName === "level" && (
            <Step title={t("onbLevelTitle")} body={t("onbLevelBody")}>
              <div className="space-y-2.5">
                {LEVELS.map((lv) => (
                  <button
                    key={lv.id}
                    onClick={() => chooseLevel(lv.id)}
                    className={`flex w-full items-center gap-3 rounded-xl2 border p-4 text-left transition ${
                      data.level === lv.id
                        ? "border-rose-soft bg-rose-light/25"
                        : "border-rose-light/50 bg-white/60 hover:bg-sage/20"
                    }`}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 bg-sage/50 text-xl"
                      aria-hidden
                    >
                      {lv.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-medium text-charcoal">{lang === "ko" ? lv.ko : lv.en}</span>
                        <span className="rounded-full bg-sage/60 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-charcoal/60">
                          {lv.id}
                        </span>
                      </span>
                      <span className="block text-xs text-charcoal/50">{lang === "ko" ? lv.koHint : lv.enHint}</span>
                    </span>
                  </button>
                ))}
              </div>
            </Step>
          )}

          {stepName === "interests" && (
            <Step title={t("onbInterestsTitle")} body={t("onbInterestsBody")}>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((it) => {
                  const on = data.interests.includes(it.id);
                  return (
                    <button
                      key={it.id}
                      onClick={() => toggleInterest(it.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition ${
                        on
                          ? "border-rose-soft bg-rose-light/40 text-rose"
                          : "border-rose-light/60 text-charcoal/60 hover:bg-sage/20"
                      }`}
                    >
                      <span aria-hidden>{it.emoji}</span>
                      {lang === "ko" ? it.ko : it.en}
                    </button>
                  );
                })}
              </div>
            </Step>
          )}

          {stepName === "goal" && (
            <Step title={t("onbGoalTitle")} body={t("onbGoalBody")}>
              <div className="space-y-2.5">
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl2 border p-4 text-left text-sm transition ${
                      data.goal === g.id
                        ? "border-rose-soft bg-rose-light/25 text-charcoal"
                        : "border-rose-light/50 bg-white/60 text-charcoal/70 hover:bg-sage/20"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span aria-hidden className="text-lg">{g.emoji}</span>
                      {lang === "ko" ? g.ko : g.en}
                    </span>
                    {data.goal === g.id && <CheckIcon className="h-4 w-4 shrink-0 text-rose" />}
                  </button>
                ))}
              </div>
            </Step>
          )}

          {stepName === "summary" && (
            <Step title={t("onbSummaryTitle")} body={t("onbSummaryBody")}>
              <ul className="space-y-2 rounded-xl2 border border-rose-light/50 bg-white/60 p-4 text-sm">
                <SummaryRow
                  label={t("onbRecapLearning")}
                  value={data.direction === "ko-en" ? "한국어 → English" : data.direction === "en-ko" ? "English → 한국어" : "—"}
                />
                <SummaryRow
                  label={t("onbRecapLevel")}
                  value={
                    data.level
                      ? `${data.level} · ${labelFor(
                          LEVELS.map((l) => ({ id: l.id, en: l.en, ko: l.ko })),
                          data.level,
                          lang,
                        )}`
                      : "—"
                  }
                />
                <SummaryRow label={t("onbRecapGoal")} value={labelFor(GOALS, data.goal, lang) ?? "—"} />
                <SummaryRow
                  label={t("onbRecapInterests")}
                  value={
                    data.interests.length
                      ? data.interests.map((id) => labelFor(INTERESTS, id, lang)).filter(Boolean).join(", ")
                      : "—"
                  }
                />
              </ul>
            </Step>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3">
          {step > 0 && (
            <button
              onClick={() => go(step - 1)}
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-charcoal/50 transition hover:bg-sage/30"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              {t("onbBack")}
            </button>
          )}
          <div className="flex-1" />
          {stepName === "summary" ? (
            <Button onClick={finish}>{t("onbStart")}</Button>
          ) : stepName === "direction" ? null : (
            <Button onClick={() => go(step + 1)} disabled={!canContinue}>
              {t("onbContinue")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Step({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-charcoal">{title}</h2>
      <p className="mb-6 mt-1.5 text-sm text-charcoal/55">{body}</p>
      {children}
    </div>
  );
}

function ChoiceCard({
  emoji,
  head,
  sub,
  selected,
  onClick,
}: {
  emoji?: string;
  head: string;
  sub: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3.5 rounded-xl2 border p-5 text-left transition ${
        selected ? "border-rose-soft bg-rose-light/25 shadow-soft" : "border-rose-light/50 bg-white/60 hover:bg-sage/20"
      }`}
    >
      {emoji && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-sage/50 text-2xl" aria-hidden>
          {emoji}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-serif text-lg font-semibold text-charcoal">{head}</span>
        <span className="mt-0.5 block text-xs text-charcoal/55">{sub}</span>
      </span>
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-rose bg-rose text-cream" : "border-rose-light"
        }`}
      >
        {selected && <CheckIcon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between gap-4">
      <span className="shrink-0 text-charcoal/45">{label}</span>
      <span className="text-right font-medium text-charcoal/80">{value}</span>
    </li>
  );
}
