import type { ReactNode } from "react";

const TONES = {
  rose: "bg-rose-light/60 text-rose",
  sage: "bg-sage/60 text-charcoal/70",
  gold: "bg-gold/20 text-gold",
} as const;

export function Badge({ children, tone = "rose" }: { children: ReactNode; tone?: keyof typeof TONES }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${TONES[tone]}`}>
      {children}
    </span>
  );
}
