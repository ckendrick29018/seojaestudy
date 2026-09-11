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
  냈: "내", 뺐: "빼", 뎄: "데", 셌: "세", 켰: "켜", 켔: "케",
  잰: "재", 뱄: "배", 팼: "패",
};

/** Fused syllables that could fold either way (ㅡ-irregular vs. plain stem). */
const FUSED_MULTI: Record<string, string[]> = {
  팠: ["프", "파"], // 고팠어요 → 고프다 · 땅을 팠다 → 파다
  펐: ["프", "퍼"],
  떴: ["뜨", "떠"],
  꼈: ["끼", "꼬"],
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
  "으로부터", "에게서는", "에서부터", "에게서", "에서는", "에게는", "에게도",
  "이라고는", "이라고", "라고는", "이라는", "으로는", "으로도", "으로써", "으로서",
  "이라도", "이며", "에서도", "에서만", "에다가", "이야말로", "은커녕", "는커녕",
  "에서", "에게", "에다", "께서", "으로", "이라", "처럼", "보다", "마다",
  "까지", "부터", "조차", "마저", "이나", "이란", "한테", "밖에", "같이", "만큼",
  "라고", "라는", "라도", "이든", "이든지", "든지", "에는", "에도", "에선", "에나",
  "엔", "이자", "로는", "로도", "로써", "로서", "만이", "만을", "만은", "만도",
  "만의", "만에", "만한", "만큼은", "이라면", "라면", "이며", "이건", "이라야",
  "대로", "뿐", "뿐만", "치고", "치고는", "께는", "께서는", "이서", "서껀",
  "은", "는", "이", "가", "을", "를", "에", "의", "와", "과", "도", "만", "로",
  "랑", "이랑", "께", "야", "여", "이여",
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
  "고서", "고는", "으며", "러",
  "으라고", "으라는", "으라며", "라고", "라는", "라며", "자고", "자는",
  "다는", "다고", "다며", "단다", "다니", "라니", "느냐고", "냐는",
  "거든요", "거든", "더라도", "더라고요", "더라고", "더라", "더군요", "더군",
  "더니", "던데", "길래", "기에", "느냐", "으냐", "냐고", "냐", "나요", "던가요",
  "던가", "든가", "잖아요", "잖아", "자마자", "래요", "대요", "구나", "구려",
  "으렴", "으려무나", "려무나", "렴", "으니까", "으므로", "므로", "은데", "는군",
  "면", "고", "며", "서", "지", "게", "던", "듯", "자", "냐", "랴", "마",
  "은", "는", "을", "아", "어", "여", "네", "군", "다",
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

  // Single-syllable surface forms still deserve the final-consonant and ─어/─아
  // rules (준 → 주다, 울 → 울다, 봐 → 보다); only the multi-syllable-specific
  // passes below are skipped for them.
  const multi = w.length >= 2;

  // 하다-family: forms built on a 하- stem (했-, 하고/하는/하지…, 하여, 해서, 해요, 해).
  const haMatch = w.match(/^(.*?)(했|하[고는지며면려게]|하여|해서|해요|해)(.*)$/);
  if (haMatch && haMatch[1]) add(haMatch[1] + "하다");
  if (w === "해" || w.endsWith("해")) add(w.slice(0, -1) + "하다");

  // Fused past / ─어 stem anywhere in the word, first syllable included
  // (말했어요 → 말 + 하 + 다; 갔고 → 가 + 다; 왔어요 → 오 + 다).
  for (let cut = w.length - 1; cut >= 0; cut -= 1) {
    const one = FUSED[w[cut]];
    const many = FUSED_MULTI[w[cut]];
    if (one || many) {
      const prefix = w.slice(0, cut);
      if (one) add(prefix + one + "다");
      if (many) for (const s of many) add(prefix + s + "다");
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

      // The residue may be an adnominal / present stem whose own final
      // consonant is really an ending (한다 → 한 → 하다, 온다 → 온 → 오다,
      // 큰 → 크다). Try it with the last consonant cleared, too.
      const bare = clearFinalConsonant(residue);
      if (bare) add(bare + "다");

      // The residue may still carry a fused tense syllable (있었거든요 →
      // 있었 → 있다; 놀랐더니 → 놀랐 → 놀라다; 기뻤구나 → 기뻤 → 기쁘다).
      const last = residue[residue.length - 1];
      const core = residue.slice(0, -1);
      const jl = core ? jamo(last) : null;
      if (core && FUSED[last]) {
        add(core + FUSED[last] + "다");
      } else if (jl && jl[2] === 20) {
        if (jl[0] === 11 && (jl[1] === 0 || jl[1] === 4 || jl[1] === 6)) {
          // A plain 았/었/였 tense syllable: the stem ends at `core`
          // (있었 → 있다, 먹었 → 먹다, 잡았 → 잡다).
          add(core + "다");
        } else {
          // The ㅆ fused onto the stem's own vowel: drop it (놀랐 → 놀라다),
          // or read it as ㅡ-irregular (기뻤 → 기쁘다, 슬펐 → 슬프다).
          add(core + syllable(jl[0], jl[1], 0) + "다");
          add(core + syllable(jl[0], 18, 0) + "다"); // 18 = ㅡ
        }
      }
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
  const cop = w.match(/^(.+?)(이다|입니다|이다가|이지|이야|이에요|예요|이며|인|이란|이든|이나|이었[다고던어요습니다는지]*|였[다고던어요습니다는지]*|이라는|이라고|이라|이라서|이라야|이던|이고)$/);
  if (cop && cop[1] && /[가-힣]$/.test(cop[1])) add(cop[1]);

  // ㅂ-irregular adjectives: 추워서 → 춥다, 무서워 → 무섭다, 날카로운 → 날카롭다,
  // 반가웠다 → 반갑다.
  const bIrr = w.match(/^(.+?)(워서|워도|워야|워|웠[다고던어요습니다]*|운|움)$/);
  if (bIrr && bIrr[1] && /[가-힣]$/.test(bIrr[1])) {
    const stem = bIrr[1];
    const j = jamo(stem[stem.length - 1]);
    if (j && j[2] === 0) add(stem.slice(0, -1) + syllable(j[0], j[1], 17) + "다"); // 17 = ㅂ
  }

  // 르-irregular: the doubled-ㄹ surface (불렀어요 → 부르다, 골라 → 고르다,
  // 잘랐고 → 자르다, 서둘러 → 서두르다). Find the first 라/러/랐/렀 whose
  // preceding syllable carries a ㄹ final; drop that ㄹ and rejoin as ‑르다.
  const rMatch = w.match(/[라러랐렀]/);
  if (rMatch && rMatch.index && rMatch.index >= 1) {
    const i = rMatch.index;
    const j = jamo(w[i - 1]);
    if (j && j[2] === 8) add(w.slice(0, i - 1) + syllable(j[0], j[1], 0) + "르다");
  }

  // Causative / passive ‑이‑ contracted to ‑려/‑렸 (올려 → 올리다, 걸렸어요 →
  // 걸리다, 매달려 → 매달리다, 알려 줬다 → 알리다). Keep residue+다 as a fallback.
  const yeoMatch = w.match(/^(.+?)(렸[다고는지만어요으며]*|려[야도서]?)$/);
  if (yeoMatch && yeoMatch[1] && /[가-힣]$/.test(yeoMatch[1]) && !w.startsWith("하")) {
    add(yeoMatch[1] + "리다");
    add(yeoMatch[1] + "다");
  }

  // ‑우‑ causatives contracted to ‑워/‑웠 (세워 → 세우다, 태웠어요 → 태우다,
  // 채워 → 채우다). The ㅂ-irregular block above also fires; both are cheap.
  const wuMatch = w.match(/^(.+?)(워[야도서]?|웠[다고는지만어요으며]*)$/);
  if (wuMatch && wuMatch[1] && /[가-힣]$/.test(wuMatch[1])) add(wuMatch[1] + "우다");

  // ㅗ/ㅜ + 아/어 contraction on the last syllable (봐 → 보다, 돌봐 → 돌보다,
  // 가져와 → 가져오다, 채워 → 채우다, 맞춰 → 맞추다, 넘겨 → 넘기다).
  {
    const last = w[w.length - 1];
    const head = w.slice(0, -1);
    const tail: Record<string, string> = {
      "봐": "보다", "와": "오다", "둬": "두다", "줘": "주다", "춰": "추다", "눠": "누다",
    };
    if (tail[last]) add(head + tail[last]);
  }

  // ‑치‑ verbs contracted to ‑쳐/‑쳤 (걸쳐 → 걸치다, 가르쳐 → 가르치다,
  // 마주쳤어요 → 마주치다, 밀쳐 → 밀치다, 바쳤다 → 바치다).
  const chyeo = w.match(/^(.+?)(쳐[야도서]?|쳤[다고는지만어요으며]*)$/);
  if (chyeo && chyeo[1] && /[가-힣]$/.test(chyeo[1])) add(chyeo[1] + "치다");

  // Causative ‑이‑ contracted to ‑여/‑였 (숙여 → 숙이다, 먹여 → 먹이다,
  // 죽여 → 죽이다, 높였어요 → 높이다). Skip 하여 / 이여 / 어여.
  const iCaus = w.match(/^(.+?)(였[다고는지만어요으며]*|여[야도서]?)$/);
  if (
    iCaus && iCaus[1] && /[가-힣]$/.test(iCaus[1]) &&
    !/(하|이|어|주|쥐|피)$/.test(iCaus[1])
  ) {
    add(iCaus[1] + "이다");
    add(iCaus[1] + "다");
  }

  // Contracted ‑기‑/‑이‑ causatives & passives ending in ‑겨/‑겼 (넘겨 → 넘기다,
  // 맡겨 뒀다 → 맡기다, 숨겼어요 → 숨기다, 벗겨 → 벗기다, 남겨 → 남기다).
  const giCaus = w.match(/^(.+?)(겨[야도서]?|겼[다고는지만어요으며]*)$/);
  if (giCaus && giCaus[1] && /[가-힣]$/.test(giCaus[1])) add(giCaus[1] + "기다");

  // Short ㄹ-final stems where the ㄹ belongs to the stem, not an ending
  // (울 → 울다, 살 → 살다, 알 → 알다, 들 → 들다, 물 → 물다, 갈 → 갈다).
  if (w.length <= 2) {
    const j = jamo(w[w.length - 1]);
    if (j && j[2] === 8) add(w + "다");
  }

  // ㄹ-verb present/adnominal: the stem's ㄹ drops before ‑는 (우는 → 울다,
  // 사는 → 살다, 아는 → 알다, 여는 → 열다, 도는 → 돌다, 부는 → 불다).
  const neun = w.match(/^(.+?)는$/);
  if (neun && neun[1] && endsOpen(neun[1])) {
    const j = jamo(neun[1][neun[1].length - 1]);
    if (j) add(neun[1].slice(0, -1) + syllable(j[0], j[1], 8) + "다");
  }

  // Honorific ‑님 on a noun (왕자님은 → 왕자, 공주님께 → 공주, 선생님이 → 선생).
  const nim = w.match(/^(.+?)님(은|는|이|가|을|를|의|에게|에게서|께|께서|도|만|과|와|이랑|랑)?$/);
  if (nim && nim[1]) add(nim[1]);

  // Number + counter/unit: gloss the counter alone (15년 → 년, 6월 → 월,
  // 삼십 분 already split, 열두 시 → 시). Digits are kept by `normalize`.
  const counter = w.match(
    /^[0-9]+\s?(년|월|일|시|분|초|명|살|개|권|장|번|째|번째|배|채|칸|층|줄|쌍|켤레|마리|가지|달|주일|주|해|세기|세|시간|분간|킬로|미터|센티|리|평|근|되|말|자|치|천|만|억|프랑|파운드|달러|실링|기니|루블|코페이카|에이커|마일|야드|피트|인치)$/,
  );
  if (counter) add(counter[1]);
  // Any digit run + trailing Hangul: hand the Hangul tail on for its own
  // particle stripping (200만을 → 만을 → 만, 15달러가 → 달러가 → 달러).
  const numTail = w.match(/^[0-9]+\s?([가-힣].*)$/);
  if (numTail) {
    add(numTail[1]);
    for (const p of PARTICLES) {
      if (numTail[1].length > p.length && numTail[1].endsWith(p)) add(numTail[1].slice(0, -p.length));
    }
  }

  // Last-ditch: a bare all-Hangul stem may just need the dictionary ‑다 form
  // (돌아가 → 돌아가다, 내려다보 → 내려다보다). Harmless when it misses.
  if (/^[가-힣]{2,}$/.test(w) && !w.endsWith("다")) add(w + "다");

  return out;
}
