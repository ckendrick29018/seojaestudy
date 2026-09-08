"use client";

import { useEffect, useRef, useState } from "react";
import { GlobeIcon, HighlighterIcon, PlusIcon } from "@/components/ui/icons";
import { useCallbackRef } from "@/lib/useCallbackRef";

export interface StorySelection {
  /** Trimmed selected text. */
  text: string;
  /** ids of every story sentence the selection touches, in document order. */
  sentenceIds: string[];
}

interface Anchor {
  x: number;
  y: number;
  /** Place the toolbar below the selection (used near the top of the viewport). */
  below: boolean;
  selection: StorySelection;
}

interface Props {
  containerRef: React.RefObject<HTMLElement>;
  onTranslate: (sel: StorySelection) => void;
  onHighlight: (sel: StorySelection) => void;
  onStudy: (sel: StorySelection) => void;
  /** True when every sentence in the selection is already highlighted. */
  allHighlighted: (sentenceIds: string[]) => boolean;
  labels: { translate: string; highlight: string; removeHighlight: string; study: string };
}

const MAX_SELECTION_LEN = 240;

/**
 * A small floating toolbar that appears above a text selection made inside the
 * story. Uses the native Selection API so long-press / drag selection on both
 * touch and desktop just works; the toolbar sits above the OS handles.
 */
export function SelectionToolbar({
  containerRef,
  onTranslate,
  onHighlight,
  onStudy,
  allHighlighted,
  labels,
}: Props) {
  const [anchor, setAnchor] = useState<Anchor | null>(null);
  const debounce = useRef<number | null>(null);

  // Keep the latest callbacks without re-subscribing the document listeners.
  const read = useCallbackRef(() => {
    const container = containerRef.current;
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    if (!container || !sel || sel.isCollapsed || sel.rangeCount === 0) {
      setAnchor(null);
      return;
    }

    const range = sel.getRangeAt(0);
    const withinNode = range.commonAncestorContainer;
    const withinEl = withinNode.nodeType === Node.ELEMENT_NODE ? (withinNode as Element) : withinNode.parentElement;
    if (!withinEl || !container.contains(withinEl)) {
      setAnchor(null);
      return;
    }

    const text = sel.toString().replace(/\s+/g, " ").trim();
    if (text.length < 1 || text.length > MAX_SELECTION_LEN) {
      setAnchor(null);
      return;
    }

    const sentenceIds = Array.from(container.querySelectorAll<HTMLElement>("[data-sentence-id]"))
      .filter((el) => sel.containsNode(el, true))
      .map((el) => el.dataset.sentenceId!)
      .filter(Boolean);
    if (sentenceIds.length === 0) {
      setAnchor(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      setAnchor(null);
      return;
    }
    // The toolbar is centered on `x` (-translate-x-1/2), so keep half its
    // width clear of both edges. Clamp the half-width on very narrow screens.
    const half = Math.min(148, Math.max(60, (window.innerWidth - 16) / 2));
    const center = rect.left + rect.width / 2;
    const x = Math.min(Math.max(center, half + 8), window.innerWidth - half - 8);
    const below = rect.top < 96;
    setAnchor({ x, y: below ? rect.bottom : rect.top, below, selection: { text, sentenceIds } });
  });

  useEffect(() => {
    function onSelectionChange() {
      if (debounce.current) window.clearTimeout(debounce.current);
      debounce.current = window.setTimeout(read, 180);
    }
    function onScroll() {
      setAnchor(null);
    }
    document.addEventListener("selectionchange", onSelectionChange);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      document.removeEventListener("selectionchange", onSelectionChange);
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      if (debounce.current) window.clearTimeout(debounce.current);
    };
  }, [read]);

  if (!anchor) return null;

  const { selection } = anchor;
  const highlighted = allHighlighted(selection.sentenceIds);

  function run(action: (sel: StorySelection) => void) {
    action(selection);
    window.getSelection()?.removeAllRanges();
    setAnchor(null);
  }

  return (
    <div
      className={`fixed z-50 -translate-x-1/2 ${anchor.below ? "translate-y-0" : "-translate-y-full"}`}
      style={{ left: anchor.x, top: anchor.below ? anchor.y + 10 : anchor.y - 10 }}
      role="toolbar"
      aria-label={labels.translate}
    >
      <div className="flex items-stretch gap-0.5 rounded-xl2 border border-rose-light/60 bg-white p-1 shadow-soft">
        <ToolbarButton icon={<GlobeIcon className="h-4 w-4" />} label={labels.translate} onClick={() => run(onTranslate)} />
        <ToolbarButton
          icon={<HighlighterIcon className="h-4 w-4" />}
          label={highlighted ? labels.removeHighlight : labels.highlight}
          active={highlighted}
          onClick={() => run(onHighlight)}
        />
        <ToolbarButton icon={<PlusIcon className="h-4 w-4" />} label={labels.study} onClick={() => run(onStudy)} />
      </div>
    </div>
  );
}

function ToolbarButton({
  icon,
  label,
  onClick,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-1.5 text-[10px] font-medium transition ${
        active ? "bg-gold/20 text-gold" : "text-charcoal/70 hover:bg-sage/40"
      }`}
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
