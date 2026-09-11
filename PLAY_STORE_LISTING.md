# Play Store listing — draft copy & ASO plan

Draft store-listing copy for the Google Play Console, written ahead of the
closed test (see `ANDROID.md` for the technical TWA build steps this
listing gets attached to). This is copy to paste into Play Console's
**Store presence → Main store listing**, not code — nothing here needs a
build step.

Google Play has no separate "keywords" field like Apple's App Store. Its
search ranking leans on the **app title, short description, and full
description** — so those three fields carry the keyword strategy directly,
written to read naturally rather than stuffed.

---

## English listing (en-US) — primary

### App name (30 char max)

**Recommended:** `SeoJae Story: Learn by Reading` (30/30 chars)

Deliberately reuses the exact phrase already anchoring the web SEO push —
[How to Learn English by Reading](src/lib/articles.ts) and
[How to Learn Korean by Reading](src/lib/articles.ts) are both titled this
way. Same phrase ranking on Google web search and in Play Store search
compounds brand recognition instead of splitting it.

**Alt (leads harder with the bilingual angle):**
`SeoJae Story: EN & KO Reading` (29/30 chars)

### Short description (80 char max)

**Recommended:** `Learn English or Korean by reading short stories, at your level.` (64/80 chars)

**Alt:** `Bilingual short stories with translation, audio & flashcards.` (61/80 chars)

### Full description (4000 char max — this draft is ~1,600)

```
Learn English or Korean the way that actually works: by reading stories you enjoy, at exactly your level.

SeoJae Story is a graded-reader app for adult learners of English or Korean. Every story — from Aesop's fables to Jane Austen, Grimm's fairy tales to The Great Gatsby — is retold in clear, level-appropriate English and Korean, so you read for meaning instead of decoding every word.

Start reading in seconds — no account required.

WHY READERS LIKE IT
• Levelled A1–B2 (CEFR), so you always start at a comfortable difficulty
• Tap any word for an instant offline translation, in either direction
• Tap a sentence to reveal its full English or Korean translation
• Listen along with narrated audio, with pause and resume that stays out of your way
• Save new words as flashcards and review them later
• A short comprehension check after every story turns reading into real progress
• A growing "Classics" shelf of public-domain literature, retold for learners — not machine-translated
• A daily reading streak and a small library of finished books to look back on

WHO IT'S FOR
Built for adult learners of English or Korean — students preparing for exams, professionals brushing up a second language, or anyone who tried an app that felt like flashcards and wanted something that felt like reading.

A CALM, FOCUSED DESIGN
No leaderboards, no streak-shaming, no forced notifications. Just short stories, well levelled, with the tools to actually understand them.

SeoJae Story is in early access. New stories are added regularly, and your feedback shapes what we build next.
```

Notes on choices:

- **"No account required"** is a real, current differentiator — Beta is
  deliberately sign-in-free (`seojae-beta-no-signup`). Drop this line (or
  soften it) once Beta ends and accounts become the norm.
- Deliberately **doesn't mention Premium/pricing** — the paywall is off for
  everyone during Beta (`isFree: true` on every lesson, per `BACKLOG.md`),
  so promising a subscription tier would be describing a state the app
  isn't currently in. Add a pricing line once the post-Beta gate ships.
- **"Not machine-translated"** is accurate and a real quality signal — every
  lesson is an original retelling + translation (`CONTENT_BACKLOG.md`
  sourcing rule #2), worth the reader trusting the text.

### Keyword strategy (English)

Primary (used in title/short description — highest weight):
`learn English`, `learn Korean`, `English Korean`, `reading`, `graded reader`

Secondary (woven into the full description body):
`bilingual`, `translation`, `CEFR`, `vocabulary flashcards`, `short stories`,
`classic literature`, `language learning app`, `listening practice`

These match the exact keyword sets already validated in
[`src/lib/articles.ts`](src/lib/articles.ts) (`learn English by reading`,
`learn Korean by reading`, `graded readers English/Korean`, `CEFR levels
explained`) — reusing them here means the same search intent that finds the
`/learn` hub on Google can also find the app on Play, instead of the two
surfaces competing for different phrases.

### Category & content rating

- **Category:** Education (primary fit — Play doesn't allow a second
  category, but "Books & Reference" is the closer runner-up if Education's
  competition looks too steep once you can see Play Console's own
  suggestions).
- **Tags:** Play Console offers a curated tag picker (not freeform) under
  Store presence → tags — pick whatever's closest to: language learning,
  reading, English learning, Korean learning, education.
- **Content rating questionnaire:** expect **Everyone**. The fairy-tale
  content has had peril "gently softened" throughout
  (`CONTENT_BACKLOG.md`), so nothing should trip a higher tier — still run
  the actual IARC questionnaire in Play Console rather than assuming.

---

## Korean listing (ko-KR) — recommended addition

Play Console lets you add a fully separate localized listing per language,
which then surfaces in Korean-language Play Store search. Worth doing here
specifically because the app serves **two** real audiences in Korean search
— Koreans searching for an English-learning app, and Korean-learners
searching for a Korean-reading app — neither of which the English listing
reaches.

### App name (17/30 chars)

**Recommended:** `서재 스토리: 영어·한국어 리딩`

### Short description (49/80 chars)

**Recommended:** `짧은 이야기로 배우는 영어와 한국어, 나의 눈높이에 맞춰서. 계정 없이 바로 시작하세요.`

### Full description (870/4000 chars)

```
짧은 이야기를 읽으면서 배우는 영어와 한국어 — 딱 내 눈높이에 맞춰서.

서재 스토리는 성인 학습자를 위한 리딩 앱입니다. 이솝 우화부터 제인 오스틴, 그림 형제 동화, 위대한 개츠비까지 — 모든 이야기를 원작 그대로가 아니라 학습자 눈높이에 맞게 새로 쓴 영어와 한국어로 제공합니다. 단어 하나하나를 해석하는 대신, 이야기의 흐름을 따라가며 자연스럽게 읽을 수 있습니다.

계정 없이 몇 초 만에 바로 읽기 시작할 수 있어요.

이런 점이 좋아요
• A1~B2(CEFR) 레벨로 구성되어 있어 항상 편안한 난이도에서 시작할 수 있어요
• 어떤 단어든 탭하면 오프라인으로 즉시 뜻을 확인할 수 있어요 (영↔한 양방향)
• 문장을 탭하면 전체 번역을 바로 볼 수 있어요
• 내레이션 음성으로 함께 들을 수 있고, 일시정지·다시듣기도 자연스럽게 지원해요
• 새로운 단어는 플래시카드로 저장해서 나중에 복습할 수 있어요
• 이야기가 끝나면 짧은 이해도 확인 문제로 학습을 점검해요
• 저작권이 만료된 고전 문학을 학습자를 위해 새로 쓴 "클래식" 컬렉션이 계속 늘어나요 (기계 번역이 아니에요)
• 매일 읽기 스트릭과 완독한 책들을 모아보는 작은 서재가 생겨요

이런 분께 추천해요
영어나 한국어를 배우는 성인 학습자 — 시험을 준비하는 학생, 제2외국어를 다시 다지고 싶은 직장인, 혹은 단어 암기 앱은 지겹고 진짜 "읽기"를 하고 싶었던 분들을 위해 만들었습니다.

차분하고 집중하기 좋은 디자인
순위표도, 스트릭 압박도, 강제 알림도 없습니다. 잘 정리된 짧은 이야기와, 그것을 제대로 이해할 수 있는 도구만 있습니다.

서재 스토리는 현재 얼리 액세스 단계입니다. 새로운 이야기가 꾸준히 추가되고 있고, 여러분의 피드백이 다음 업데이트에 반영됩니다.
```

This is a fresh Korean-market translation written for this listing, not a
reuse of any in-app lesson text — same sourcing discipline as the lesson
content itself.

### Keyword strategy (Korean)

`영어 공부 앱`, `한국어 공부 앱`, `영어 리딩`, `쉬운 영어책`, `영어 원서 쉬운`,
`영어 단어장 앱`, `리딩 앱`, `외국어 학습 앱`

Native speaker (or at least a second fluent pass) should sanity-check the
Korean copy before it goes live — this draft is solid but Play listing copy
is exactly the kind of customer-facing text worth a human proofread pass,
the same way the in-app Korean lesson translations get one.

---

## Screenshots & feature graphic (assets, not copy — flagged for later)

Not drafted here since they need real device screenshots, but each of the
5(ish) screenshots Play recommends should carry a short on-image caption —
suggested captions tied to actually-shipped features, in priority order:

1. "Read stories leveled A1 to B2" — the classics shelf / library view
2. "Tap any word for an instant translation" — the word-tap bottom sheet
3. "Listen, pause, and resume" — narration controls in the header
4. "Save words as flashcards" — VocabFlashcards
5. "Check what you understood" — ComprehensionCheck
6. (optional 6th) "A growing library of classic stories" — ClassicsCarousel

Feature graphic (1024×500): reuse the existing brand palette (cream /
rose / sage, serif headings) from `tailwind.config.ts` rather than
introducing new colors — the store listing should look like the same app
the screenshots show.

---

## Before submitting

- [ ] Proofread the Korean copy (native/fluent pass).
- [ ] Re-check the "no account required" and no-pricing framing against
      Beta status at submission time — update both listings together if
      either changes (`seojae-beta-no-signup`, `BACKLOG.md` premium
      rework).
- [ ] Pull 5–6 real device screenshots once the TWA build from `ANDROID.md`
      is installable, captioned per the list above.
- [ ] Run the actual Play Console content-rating questionnaire rather than
      assuming Everyone.
- [ ] Confirm final character counts by pasting into Play Console itself —
      it counts for you and will hard-stop over the limit.
