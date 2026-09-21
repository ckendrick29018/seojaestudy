import type { CSSProperties, ReactNode } from "react";
import type { CatStageId } from "./cat-stages";

/**
 * Mascot colours. The cat keeps the same warm fur in every reading theme — like a
 * logo it should stay recognisable — and it is always drawn on a light disc or
 * card, so these are fixed values rather than theme tokens.
 */
const C = {
  fur: "#EBCFAE",
  shade: "#D9B08A",
  line: "#B96F4A",
  belly: "#F8EAD9",
  earIn: "#E8A48E",
  cheek: "#F0A98F",
  nose: "#D9826B",
  ink: "#2C2C2C",
  paper: "#FDFBF7",
  cover: "#C57B57",
  coverDark: "#9E5A3B",
  sage: "#9DAE7A",
  gold: "#E2B458",
  goldDark: "#B98A2E",
  plum: "#6B5A8E",
  navy: "#3A4468",
  cape: "#B4503F",
  scarf: "#C9705A",
};

const TAIL_ORIGIN: CSSProperties = { transformBox: "fill-box", transformOrigin: "left bottom" };
const CENTER_ORIGIN: CSSProperties = { transformBox: "fill-box", transformOrigin: "center" };

/** A four-pointed sparkle centred on (x, y). */
const spark = (x: number, y: number, r: number) =>
  `M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r} Z`;

type Eyes = "open" | "wide" | "down" | "happy" | "closed";

function Eye({ cx, mode }: { cx: number; mode: Eyes }) {
  if (mode === "closed" || mode === "happy") {
    const d = mode === "closed" ? `M${cx - 6} 58 q6 5.5 12 0` : `M${cx - 6} 60 q6 -6 12 0`;
    return <path d={d} stroke={C.ink} strokeWidth="2.2" strokeLinecap="round" />;
  }
  const wide = mode === "wide";
  const cy = mode === "down" ? 60.5 : 58;
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={wide ? 5.4 : 4.4} ry={wide ? 6.6 : 5.6} fill={C.ink} />
      <circle cx={cx + 1.7} cy={cy - 2.3} r={wide ? 2.1 : 1.6} fill="#fff" />
      <circle cx={cx - 1.6} cy={cy + 2.2} r="0.9" fill="#fff" opacity="0.8" />
    </g>
  );
}

/** Ears, face and whiskers — shared by the sitting and sleeping poses. */
function Head({ eyes }: { eyes: Eyes }) {
  return (
    <g>
      <path d="M44 48 L40 20 Q56 24 64 36 Z" fill={C.fur} stroke={C.line} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M96 48 L100 20 Q84 24 76 36 Z" fill={C.fur} stroke={C.line} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M47 41 L45 27 Q53 30 58 36 Z" fill={C.earIn} />
      <path d="M93 41 L95 27 Q87 30 82 36 Z" fill={C.earIn} />
      <ellipse cx="70" cy="58" rx="31" ry="27" fill={C.fur} stroke={C.line} strokeWidth="2.4" />
      <path d="M70 32 v9 M61 34 l2.5 8 M79 34 l-2.5 8" stroke={C.shade} strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="70" cy="68" rx="12" ry="8.5" fill={C.belly} />
      <ellipse cx="48" cy="67" rx="6" ry="3.6" fill={C.cheek} opacity="0.55" />
      <ellipse cx="92" cy="67" rx="6" ry="3.6" fill={C.cheek} opacity="0.55" />
      <Eye cx={58} mode={eyes} />
      <Eye cx={82} mode={eyes} />
      <path d="M66.5 63.5 h7 l-3.5 4.2 Z" fill={C.nose} stroke={C.line} strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M70 67.7 v3.3 M70 71 q-4.5 4 -9 1 M70 71 q4.5 4 9 1"
        stroke={C.line}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <g stroke={C.line} strokeWidth="1.4" strokeLinecap="round" opacity="0.6">
        <path d="M40 62 h-13 M41 68 l-12 4" />
        <path d="M100 62 h13 M99 68 l12 4" />
      </g>
    </g>
  );
}

/** Round reading glasses. */
function Glasses({ stroke }: { stroke: string }) {
  return (
    <g stroke={stroke} strokeWidth="2" fill="#fff" fillOpacity="0.28">
      <circle cx="58" cy="58" r="8.6" />
      <circle cx="82" cy="58" r="8.6" />
      <path d="M66.6 57 h6.8 M49.4 56 l-6 -3 M90.6 56 l6 -3" fill="none" strokeLinecap="round" />
    </g>
  );
}

/** A small open book, seen from the front. */
function OpenBook({ x, y, w = 64, h = 30 }: { x: number; y: number; w?: number; h?: number }) {
  const mid = x + w / 2;
  const dip = h * 0.2;
  return (
    <g>
      <path
        d={`M${x} ${y + 6} L${mid} ${y} L${x + w} ${y + 6} L${x + w} ${y + h} L${mid} ${y + h - dip} L${x} ${y + h} Z`}
        fill={C.paper}
        stroke={C.line}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d={`M${mid} ${y} V${y + h - dip}`} stroke={C.line} strokeWidth="2" />
      <path
        d={`M${x + 8} ${y + 11} l${w / 2 - 14} -3 M${x + 8} ${y + 18} l${w / 2 - 14} -3 M${mid + 6} ${y + 8} l${w / 2 - 14} 3 M${mid + 6} ${y + 15} l${w / 2 - 14} 3`}
        stroke={C.shade}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  );
}

/** A closed book lying flat. */
function FlatBook({ x, y, w, h, fill }: { x: number; y: number; w: number; h: number; fill: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2.2" fill={fill} stroke={C.line} strokeWidth="1.8" />
      <path d={`M${x + 5} ${y} V${y + h} M${x + w - 4} ${y + 3} V${y + h - 3}`} stroke={C.paper} strokeWidth="1.3" opacity="0.7" />
    </g>
  );
}

function Tail({ still }: { still: boolean }) {
  const d = "M96 130 C 124 132 132 104 114 92";
  return (
    <g style={TAIL_ORIGIN} className={still ? undefined : "motion-safe:animate-tail-sway"}>
      <path d={d} stroke={C.line} strokeWidth="13" strokeLinecap="round" />
      <path d={d} stroke={C.shade} strokeWidth="9" strokeLinecap="round" />
      <path d="M122 118 l6 -4 M119 104 l7 -2" stroke={C.line} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </g>
  );
}

function Paws({ raised = false }: { raised?: boolean }) {
  return (
    <g stroke={C.line} strokeWidth="2">
      <ellipse cx="60" cy={raised ? 118 : 126} rx="6.5" ry="9" fill={C.fur} />
      <ellipse cx="80" cy={raised ? 118 : 126} rx="6.5" ry="9" fill={C.fur} />
      <path d="M58 131 v-4 M62 131 v-4 M78 131 v-4 M82 131 v-4" strokeWidth="1.2" opacity="0.55" strokeLinecap="round" />
    </g>
  );
}

function Twinkle({ x, y, r, delay = 0, still, fill = C.gold }: { x: number; y: number; r: number; delay?: number; still: boolean; fill?: string }) {
  return (
    <path
      d={spark(x, y, r)}
      fill={fill}
      style={{ ...CENTER_ORIGIN, animationDelay: `${delay}s` }}
      className={still ? undefined : "motion-safe:animate-twinkle"}
    />
  );
}

function Float({ children, delay = 0, still }: { children: ReactNode; delay?: number; still: boolean }) {
  return (
    <g style={{ animationDelay: `${delay}s` }} className={still ? undefined : "motion-safe:animate-float"}>
      {children}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Poses                                                                */
/* ------------------------------------------------------------------ */

function SleepingCat({ still }: { still: boolean }) {
  return (
    <g transform="translate(0 -5)">
      <ellipse cx="70" cy="120" rx="50" ry="26" fill={C.fur} stroke={C.line} strokeWidth="2.4" />
      <path d="M36 108 l3 9 M48 100 l3 10 M60 97 l2 10 M84 97 l-2 10" stroke={C.shade} strokeWidth="2.6" strokeLinecap="round" />
      <g transform="translate(5.6 30) scale(0.92)">
        <Head eyes="closed" />
      </g>
      <g stroke={C.line} strokeWidth="2">
        <ellipse cx="52" cy="128" rx="10" ry="6" fill={C.belly} />
        <ellipse cx="88" cy="128" rx="10" ry="6" fill={C.belly} />
      </g>
      <path d="M112 128 C 100 142 52 142 30 131" stroke={C.line} strokeWidth="13" strokeLinecap="round" />
      <path d="M112 128 C 100 142 52 142 30 131" stroke={C.shade} strokeWidth="9" strokeLinecap="round" />
      <g fill={C.sage} fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700">
        <text x="104" y="52" fontSize="13" className={still ? undefined : "motion-safe:animate-zzz"}>
          z
        </text>
        <text x="113" y="38" fontSize="16" className={still ? undefined : "motion-safe:animate-zzz"} style={{ animationDelay: "0.7s" }}>
          z
        </text>
        <text x="122" y="22" fontSize="19" className={still ? undefined : "motion-safe:animate-zzz"} style={{ animationDelay: "1.4s" }}>
          z
        </text>
      </g>
    </g>
  );
}

function SittingCat({ stage, still }: { stage: Exclude<CatStageId, "asleep">; still: boolean }) {
  const holdsBook = stage === "reader" || stage === "scholar";
  const eyes: Eyes = stage === "curious" ? "wide" : holdsBook ? "down" : stage === "tea" ? "happy" : "open";
  const glasses = stage === "scholar" ? C.ink : stage === "professor" ? C.goldDark : null;

  return (
    <>
      {stage === "legend" && (
        <g>
          <path
            d="M36 84 C 20 108 18 128 26 140 L114 140 C 122 128 120 108 104 84 C 88 94 52 94 36 84 Z"
            fill={C.cape}
            stroke={C.line}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M29 135 Q70 143 111 135" stroke={C.gold} strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      <Tail still={still} />

      <path
        d="M38 134 C 30 100 46 80 70 80 C 94 80 110 100 102 134 Z"
        fill={C.fur}
        stroke={C.line}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <ellipse cx="70" cy="114" rx="16" ry="19" fill={C.belly} />
      <ellipse cx="52" cy="134" rx="12" ry="6.5" fill={C.belly} stroke={C.line} strokeWidth="2" />
      <ellipse cx="88" cy="134" rx="12" ry="6.5" fill={C.belly} stroke={C.line} strokeWidth="2" />

      {/* Worn around the neck: drawn before the head so the chin overlaps it. */}
      {stage === "tea" && (
        <g stroke={C.line} strokeWidth="2" strokeLinejoin="round">
          <path d="M42 82 Q70 96 98 82 L98 93 Q70 107 42 93 Z" fill={C.scarf} />
          <path d="M44 92 L40 116 L52 118 L56 97 Z" fill={C.scarf} />
          <path d="M40 110 l13 2" stroke={C.paper} strokeWidth="2" opacity="0.8" />
        </g>
      )}
      {stage === "professor" && (
        <g stroke={C.line} strokeWidth="1.8" strokeLinejoin="round">
          <path d="M70 94 L56 88 L56 102 Z M70 94 L84 88 L84 102 Z" fill={C.cape} />
          <circle cx="70" cy="94" r="3.6" fill={C.cover} />
        </g>
      )}

      {!holdsBook && stage !== "tea" && stage !== "graduate" && <Paws />}

      <Head eyes={eyes} />
      {glasses && <Glasses stroke={glasses} />}

      {/* Held items */}
      {holdsBook && (
        <g>
          <OpenBook x={38} y={94} w={64} h={34} />
          <g stroke={C.line} strokeWidth="2" fill={C.fur}>
            <ellipse cx="39" cy="114" rx="6" ry="8.5" />
            <ellipse cx="101" cy="114" rx="6" ry="8.5" />
          </g>
        </g>
      )}

      {stage === "tea" && (
        <g>
          <ellipse cx="70" cy="125" rx="16" ry="3.6" fill={C.paper} stroke={C.line} strokeWidth="1.8" />
          <path d="M58 106 h24 v9 q0 11 -12 11 q-12 0 -12 -11 Z" fill={C.paper} stroke={C.line} strokeWidth="2" strokeLinejoin="round" />
          <path d="M82 109 q9 0 7 7 q-2 5 -8 3" stroke={C.line} strokeWidth="2" strokeLinecap="round" />
          <path d="M58 111 h24" stroke={C.cover} strokeWidth="2.4" />
          <g stroke={C.line} strokeWidth="2" fill={C.fur}>
            <ellipse cx="55" cy="116" rx="5.5" ry="7.5" />
            <ellipse cx="85" cy="118" rx="5.5" ry="7.5" />
          </g>
          <g stroke={C.shade} strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M64 100 q-3.5 -4 0 -8 q3.5 -4 0 -8" className={still ? undefined : "motion-safe:animate-steam"} />
            <path d="M75 100 q-3.5 -4 0 -8 q3.5 -4 0 -8" className={still ? undefined : "motion-safe:animate-steam"} style={{ animationDelay: "0.9s" }} />
          </g>
        </g>
      )}

      {stage === "graduate" && (
        <g>
          <g stroke={C.line} strokeWidth="2">
            <rect x="40" y="104" width="60" height="13" rx="6.5" fill={C.paper} />
            <ellipse cx="41" cy="110.5" rx="3.4" ry="6.5" fill={C.shade} />
            <ellipse cx="99" cy="110.5" rx="3.4" ry="6.5" fill={C.shade} />
            <rect x="65" y="102" width="10" height="17" rx="1.5" fill={C.cape} />
          </g>
          <g stroke={C.line} strokeWidth="2" fill={C.fur}>
            <ellipse cx="34" cy="112" rx="6" ry="8.5" />
            <ellipse cx="106" cy="112" rx="6" ry="8.5" />
          </g>
        </g>
      )}

      {stage === "bookworm" && (
        <g>
          <FlatBook x={2} y={128} w={34} h={12} fill={C.cover} />
          <FlatBook x={6} y={117} w={27} h={11} fill={C.sage} />
          <g strokeLinecap="round" fill="none">
            <path d="M19 117 q-4 -8 2 -11 q6 -3 3 -10" stroke={C.line} strokeWidth="8.5" />
            <path d="M19 117 q-4 -8 2 -11 q6 -3 3 -10" stroke={C.sage} strokeWidth="5.5" />
          </g>
          <circle cx="24" cy="93" r="5.6" fill={C.sage} stroke={C.line} strokeWidth="1.8" />
          <circle cx="22.3" cy="92.4" r="1" fill={C.ink} />
          <circle cx="26.2" cy="92.4" r="1" fill={C.ink} />
          <path d="M22.5 95.6 q1.6 1.4 3 0" stroke={C.ink} strokeWidth="1" strokeLinecap="round" />
        </g>
      )}

      {stage === "professor" && (
        <g>
          <FlatBook x={4} y={128} w={36} h={12} fill={C.navy} />
          <FlatBook x={7} y={117} w={30} h={11} fill={C.cover} />
          <FlatBook x={3} y={106} w={34} h={11} fill={C.sage} />
        </g>
      )}

      {/* Headwear */}
      {stage === "graduate" && (
        <g>
          <path d="M53 33 Q70 27 87 33 L87 41 Q70 35 53 41 Z" fill={C.ink} stroke={C.line} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M38 24 L70 13 L102 24 L70 35 Z" fill={C.ink} stroke={C.line} strokeWidth="2" strokeLinejoin="round" />
          <circle cx="70" cy="24" r="2.4" fill={C.gold} />
          <path d="M70 24 L96 26 L96 42" stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="96" cy="44" rx="3" ry="4.5" fill={C.gold} stroke={C.goldDark} strokeWidth="1.2" />
        </g>
      )}
      {stage === "wizard" && (
        <g>
          <path
            d="M47 34 Q56 12 74 -8 Q80 4 96 28 Q100 32 94 36 Q70 40 47 34 Z"
            fill={C.plum}
            stroke={C.line}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M74 -8 Q86 -10 90 -2" stroke={C.line} strokeWidth="2.2" strokeLinecap="round" />
          <ellipse cx="70" cy="35" rx="34" ry="8" fill={C.plum} stroke={C.line} strokeWidth="2.2" />
          <path d="M50 31 Q70 37 92 31" stroke={C.gold} strokeWidth="3" strokeLinecap="round" />
          <path d={spark(70, 14, 5.5)} fill={C.gold} />
          <path d={spark(80, 26, 3.4)} fill={C.gold} />
          <path d={spark(60, 24, 2.8)} fill={C.gold} />
        </g>
      )}
      {stage === "legend" && (
        <g>
          <Float still={still}>
            <ellipse cx="70" cy="-12" rx="25" ry="6.5" stroke={C.gold} strokeWidth="3.4" />
          </Float>
          <path
            d="M51 30 L53 8 L62 19 L70 3 L78 19 L87 8 L89 30 Q70 36 51 30 Z"
            fill={C.gold}
            stroke={C.goldDark}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="70" cy="22" r="3" fill={C.cape} stroke={C.goldDark} strokeWidth="1.2" />
          <circle cx="60" cy="25" r="2" fill={C.sage} stroke={C.goldDark} strokeWidth="1" />
          <circle cx="80" cy="25" r="2" fill={C.sage} stroke={C.goldDark} strokeWidth="1" />
        </g>
      )}

      {/* Sparkles and floating books */}
      {stage === "curious" && (
        <>
          <Twinkle x={26} y={34} r={7} still={still} />
          <Twinkle x={116} y={46} r={5} delay={0.8} still={still} />
          <Twinkle x={112} y={20} r={3.4} delay={1.5} still={still} />
        </>
      )}
      {stage === "wizard" && (
        <>
          <g transform="translate(96 30) rotate(10 16 12)">
            <Float still={still}>
              <OpenBook x={0} y={4} w={34} h={20} />
            </Float>
          </g>
          <g transform="translate(-2 46) rotate(-12 14 10)">
            <Float delay={1.1} still={still}>
              <FlatBook x={0} y={4} w={26} h={17} fill={C.navy} />
            </Float>
          </g>
          <Twinkle x={20} y={30} r={6} still={still} />
          <Twinkle x={124} y={72} r={4.5} delay={0.9} still={still} />
          <Twinkle x={12} y={84} r={3.6} delay={1.6} still={still} fill={C.paper} />
          <Twinkle x={114} y={8} r={3.4} delay={0.4} still={still} fill={C.paper} />
        </>
      )}
      {stage === "legend" && (
        <>
          <g transform="translate(96 26) rotate(10 16 12)">
            <Float still={still}>
              <FlatBook x={0} y={12} w={30} h={10} fill={C.cover} />
              <FlatBook x={3} y={2} w={26} h={10} fill={C.navy} />
            </Float>
          </g>
          <g transform="translate(-4 34) rotate(-12 16 12)">
            <Float delay={1.1} still={still}>
              <OpenBook x={0} y={6} w={34} h={20} />
            </Float>
          </g>
          <Twinkle x={20} y={14} r={6.5} still={still} />
          <Twinkle x={126} y={68} r={5} delay={0.7} still={still} />
          <Twinkle x={10} y={80} r={4} delay={1.4} still={still} fill={C.paper} />
          <Twinkle x={118} y={-4} r={4} delay={0.3} still={still} fill={C.paper} />
          <Twinkle x={30} y={-6} r={3.4} delay={1} still={still} />
        </>
      )}
    </>
  );
}

/**
 * The bookshelf mascot — a small terracotta cat that grows up as the reader's
 * shelf fills, from a sleepy kitten to a crowned Grand Librarian (see
 * `CAT_STAGES` in cat-stages.ts for the ladder). One SVG, one pose per stage.
 *
 * Idle motion (tail sway, drifting z's, twinkles, floating books, steam) is
 * `motion-safe` only, and `still` turns it off for small or repeated cats so a
 * grid of them doesn't keep the page animating.
 */
export function ReadingCat({
  stage,
  className,
  still = false,
}: {
  stage: CatStageId;
  className?: string;
  still?: boolean;
}) {
  return (
    <svg viewBox="0 -22 140 166" className={className} role="img" aria-hidden="true" fill="none">
      {stage === "asleep" ? <SleepingCat still={still} /> : <SittingCat stage={stage} still={still} />}
    </svg>
  );
}
