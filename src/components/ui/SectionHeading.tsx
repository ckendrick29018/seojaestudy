export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-4">
      {eyebrow && <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-rose/70">{eyebrow}</p>}
      <h2 className="font-serif text-2xl font-semibold text-charcoal">{title}</h2>
    </div>
  );
}
