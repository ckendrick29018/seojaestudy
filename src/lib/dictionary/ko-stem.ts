/**
 * Light Korean morphology for the reader's KO→EN word lookup.
 *
 * Korean is agglutinative: a tapped surface form like `말했어요` or `그녀에게`
 * rarely matches a dictionary head-word directly. This module doesn't try to
 * be a real analyser — it just proposes a handful of candidate base forms
 * (particles stripped, verb/adjective endings folded back to the `-다` form),
 * and `lookupKoEn` tries each against the pocket table. Wrong guesses are
 * harmless: they simply don't hit an entry.
 */

const SBASE = 0xac00;
const SLAST = 0xd7a3;

/** [lead, vowel, tail] jamo indices for a Hangul syllable, or null. */
function jamo(ch: string): [number, number, number] | null {
  const c = ch.charCodeAt(0);
  if (c < SBASE || c > SLAST) return null;
  const i = c - SBASE;
  return [Math.floor(i / 588), Math.floor((i % 588) / 28), i % 28];
}

function syllable(lead: number, vowel: number, tail: number): string {
  return String.fromCharCode(SBASE + (lead * 21 + vowel) * 28 + tail);
}

/** True when the last character is a full Hangul syllable with no final consonant. */
function endsOpen(w: string): boolean {
  const j = jamo(w[w.length - 1]);
  return !!j && j[2] === 0;
}

/** Clear the final consonant of the last syllable: 큰→크, 흰→희, 그를→(n/a). */
function clearFinalConsonant(w: string): string | null {
  const j = jamo(w[w.length - 1]);
  if (!j || j[2] === 0) return null;
  return w.slice(0, -1) + syllable(j[0], j[1], 0);
}

/** ㄹ-final residue → ㄷ-final head (ㄷ irregular: 듣다→들어, 걷다→걸어). */
function rieulToDigeut(w: string): string | null {
  const j = jamo(w[w.length - 1]);
  if (!j || j[2] !== 8) return null; // ends in ㄹ
  return w.slice(0, -1) + syllable(j[0], j[1], 7); // 7 = ㄷ
}

/**
 * Contracted past / ─어 stems: the fused syllable → its verb stem.
 * e.g. 말**했**어요 → 하, **왔**어요 → 오, 되**었**… handled by the ENDINGS list.
 */
const FUSED: Record<string, string> = {
  했: "하",
  왔: "오", 봤: "보", 줬: "주", 췄: "추", 뒀: "두",
  갔: "가", 섰: "서", 났: "나", 탔: "타", 잤: "자", 샀: "사", 짰: "짜", 깼: "깨",
  썼: "쓰", 껐: "끄", 컸: "크", 텄: "트", 폈: "피", 겼: "기",
  됐: "되", 쐈: "쏘", 꿨: "꾸",
};

/** Adnominal / adjective forms that fold to a `-다` head irregularly. */
const IRREGULAR_ADNOMINAL: Record<string, string> = {
  빨간: "빨갛다", 파란: "파랗다", 노란: "노랗다", 하얀: "하얗다", 까만: "까맣다",
  커다란: "커다랗다", 조그만: "조그맣다", 동그란: "동그랗다",
  그런: "그렇다", 이런: "이렇다", 저런: "저렇다", 어떤: "어떻다",
  아름다운: "아름답다", 차가운: "차갑다", 뜨거운: "뜨겁다", 무거운: "무겁다",
  가벼운: "가볍다", 즐거운: "즐겁다", 외로운: "외롭다", 어두운: "어둡다",
  귀여운: "귀엽다", 미운: "밉다", 고운: "곱다", 매운: "맵다", 두꺼운: "두껍다",
  가까운: "가깝다", 반가운: "반갑다", 무서운: "무섭다", 부드러운: "부드럽다",
  시끄러운: "시끄럽다", 더러운: "더럽다", 새로운: "새롭다", 그리운: "그립다",
};

/** Particles / case markers, longest first. */
const PARTICLES = [
  "으로부터", "에게서", "에서는", "에게는", "이라고", "라고는", "이라는",
  "에서", "에게", "에다", "께서", "으로", "이라", "처럼", "보다", "마다",
  "까지", "부터", "조차", "마저", "이나", "이란", "한테", "밖에", "같이", "만큼",
  "라고", "라는",
  "은", "는", "이", "가", "을", "를", "에", "의", "와", "과", "도", "만", "로",
  "랑", "이랑", "께", "야",
];

/** Verb/adjective endings, longest first; residue + 다 becomes a candidate. */
const ENDINGS = [
  "었어요", "았어요", "였어요", "셨어요",
  "었습니다", "았습니다", "였습니다", "습니다",
  "었고", "았고", "였고", "었지만", "았지만", "었는데", "았는데", "였는데",
  "었으며", "았으며", "었다가", "았다가", "으면서",
  "어요", "아요", "여요", "에요", "예요",
  "었다", "았다", "였다", "는다", "린다",
  "으면", "으니", "으러", "으려고", "려고", "면서", "니까", "느라", "다가",
  "아서", "어서", "여서", "아도", "어도", "지만", "는데", "군요", "네요",
  "고서", "고는", "으며",
  "면", "고", "며", "서", "지", "게", "던", "듯", "자",
  "은", "는", "을", "아", "어", "여",
];

/**
 * Candidate dictionary forms for a Korean surface form, best-guess first.
 * Always includes the surface form itself so verbatim table entries win.
 */
export function koStemCandidates(w: string): string[] {
  const out: string[] = [];
  const add = (s?: string | null) => {
    if (s && s.length >= 1 && /[가-힣]/.test(s) && !out.includes(s)) out.push(s);
  };

  add(w);
  if (w.length < 2) return out;

  // 하다-family: forms built on a 하- stem (했-, 하고/하는/하지…, 하여, 해서, 해요, 해).
  const haMatch = w.match(/^(.*?)(했|하[고는지며면려게]|하여|해서|해요|해)(.*)$/);
  if (haMatch && haMatch[1]) add(haMatch[1] + "하다");
  if (w === "해" || w.endsWith("해")) add(w.slice(0, -1) + "하다");

  // Fused past / ─어 stem anywhere in the word, first syllable included
  // (말했어요 → 말 + 하 + 다; 갔고 → 가 + 다; 왔어요 → 오 + 다).
  for (let cut = w.length - 1; cut >= 0; cut -= 1) {
    if (FUSED[w[cut]]) {
      add(w.slice(0, cut) + FUSED[w[cut]] + "다");
      break;
    }
  }

  // Plural 들, with or without a trailing particle (공주들 → 공주,
  // 아이들에게 → 아이, 나무들이 → 나무).
  const plural = w.match(
    /^(.+?)들(은|는|이|가|을|를|에|의|에게|에게서|도|만|과|와|께|로|으로|처럼|보다|까지|부터)?$/,
  );
  if (plural && plural[1].length >= 1) {
    add(plural[1]);
    add(plural[1] + "다");
  }

  // Irregular adjective / adnominal forms.
  if (IRREGULAR_ADNOMINAL[w]) add(IRREGULAR_ADNOMINAL[w]);

  // Particle stripping (noun + 조사).
  for (const p of PARTICLES) {
    if (w.length > p.length && w.endsWith(p)) add(w.slice(0, -p.length));
  }

  // Bare final-consonant endings: adnominal ㄴ/ㄹ (큰→크다), past ㅆ already fused.
  const open = clearFinalConsonant(w);
  if (open) {
    const j = jamo(w[w.length - 1]);
    if (j && (j[2] === 4 || j[2] === 8)) add(open + "다"); // ㄴ or ㄹ → adjective/verb head
    add(open); // 그를→(no); 것을→(handled by particles); 흰→희 as a noun-ish fallback
  }

  // Verb / adjective endings → residue + 다.
  for (const end of ENDINGS) {
    if (w.length > end.length && w.endsWith(end)) {
      const residue = w.slice(0, -end.length);
      if (!/[가-힣]$/.test(residue)) continue;
      add(residue + "다");
      if (endsOpen(residue)) add(residue + "다");
      const swapped = rieulToDigeut(residue);
      if (swapped) add(swapped + "다");
    }
  }

  // ─지다 inchoative / passive: 쏟아져 → 쏟아지다, 슬퍼졌고 → 슬퍼지다,
  // 만들어집니다 → 만들어지다. (Bare 지 needs a following char, so 가지/바지
  // are left to the verbatim pass.)
  const jida = w.match(/^(.+?)(져|졌[다고는지만어요며]*|지[고는며면지답]|집니다)$/);
  if (jida && jida[1] && /[가-힣]$/.test(jida[1])) add(jida[1] + "지다");

  // Nominaliser ‑기 (+ optional particle): 긁어내기 → 긁어내다, 크기만을 → 크다.
  const gi = w.match(/^(.+?)기(도|만|만을|만은|에|에는|로|로는|는|가|를|의)?$/);
  if (gi && gi[1] && /[가-힣]$/.test(gi[1])) {
    add(gi[1] + "다");
    if (endsOpen(gi[1])) add(gi[1] + "다");
  }

  // Copula on a noun → the noun: 친구인 → 친구, 의붓딸이었어요 → 의붓딸,
  // 운동선수였던 → 운동선수. (The surface form is tried first, so real nouns
  // like 노인/주인 still resolve directly.)
  const cop = w.match(/^(.+?)(인|이었[다고던어요습니다는지]*|였[다고던어요습니다는지]*|이라는|이라고|이라|이던|이고)$/);
  if (cop && cop[1] && /[가-힣]$/.test(cop[1])) add(cop[1]);

  // ㅂ-irregular adjectives: 추워서 → 춥다, 무서워 → 무섭다, 날카로운 → 날카롭다,
  // 반가웠다 → 반갑다.
  const bIrr = w.match(/^(.+?)(워서|워도|워야|워|웠[다고던어요습니다]*|운|움)$/);
  if (bIrr && bIrr[1] && /[가-힣]$/.test(bIrr[1])) {
    const stem = bIrr[1];
    const j = jamo(stem[stem.length - 1]);
    if (j && j[2] === 0) add(stem.slice(0, -1) + syllable(j[0], j[1], 17) + "다"); // 17 = ㅂ
  }

  return out;
}
