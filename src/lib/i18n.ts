export type UiLang = "en" | "ko";

type Dict = Record<string, { en: string; ko: string }>;

export const dict = {
  appName: { en: "SeoJae Story", ko: "서재 이야기" },
  tagline: { en: "Short stories, gentle progress.", ko: "짧은 이야기로, 천천히 성장해요." },
  library: { en: "Library", ko: "서재" },
  savedWords: { en: "Saved Words", ko: "저장한 단어" },
  minRead: { en: "min read", ko: "분 소요" },
  story: { en: "The Story", ko: "이야기" },
  listen: { en: "Listen", ko: "듣기" },
  stop: { en: "Stop", ko: "정지" },
  tapWordHint: {
    en: "Tap a word for its meaning. Tap 🌐 to translate a line.",
    ko: "단어를 탭하면 뜻이 나와요. 🌐을 누르면 문장이 번역돼요.",
  },
  comprehensionCheck: { en: "Comprehension Check", ko: "이해도 확인" },
  vocabulary: { en: "Vocabulary", ko: "핵심 단어" },
  save: { en: "Save", ko: "저장" },
  saved: { en: "Saved", ko: "저장됨" },
  flipCard: { en: "Tap to flip", ko: "탭해서 뒤집기" },
  writeSummary: { en: "Your Summary", ko: "한줄 요약" },
  summaryPromptDefault: {
    en: "In your own words, write 1–2 sentences about what happened.",
    ko: "이야기를 1~2문장으로 직접 요약해 보세요.",
  },
  getFeedback: { en: "Get Feedback", ko: "피드백 받기" },
  markComplete: { en: "Mark Lesson Complete", ko: "학습 완료로 표시" },
  completed: { en: "Completed", ko: "완료됨" },
  correct: { en: "Correct!", ko: "정답이에요!" },
  tryAgain: { en: "Not quite — here's why:", ko: "다시 생각해봐요 — 이유는:" },
  yourScore: { en: "Your score", ko: "점수" },
  noSavedWords: {
    en: "You haven't saved any words yet. Tap the bookmark on a flashcard to add one.",
    ko: "아직 저장한 단어가 없어요. 플래시카드의 저장 버튼을 눌러보세요.",
  },
  removeWord: { en: "Remove", ko: "삭제" },
  backToLibrary: { en: "Back to Library", ko: "서재로 돌아가기" },
  wordCount: { en: "words", ko: "단어" },
  translationOf: { en: "Translation", ko: "번역" },
  sourceNote: { en: "Source", ko: "출처" },

  // --- Auth ---
  continueWithGoogle: { en: "Continue with Google", ko: "Google로 계속하기" },
  orContinueWithEmail: { en: "or continue with email", ko: "또는 이메일로 계속하기" },
  emailLabel: { en: "Email", ko: "이메일" },
  passwordLabel: { en: "Password", ko: "비밀번호" },
  forgotPassword: { en: "Forgot password?", ko: "비밀번호를 잊으셨나요?" },
  resetLinkSent: { en: "Reset link sent — check your email.", ko: "재설정 링크를 보냈어요. 이메일을 확인해 주세요." },
  enterEmailFirst: { en: "Enter your email first.", ko: "이메일을 먼저 입력해 주세요." },
  signIn: { en: "Sign In", ko: "로그인" },
  signUp: { en: "Sign Up", ko: "가입하기" },
  noAccount: { en: "Don't have an account? Sign up", ko: "계정이 없으신가요? 가입하기" },
  haveAccount: { en: "Already have an account? Sign in", ko: "이미 계정이 있으신가요? 로그인하기" },
  signOut: { en: "Sign out", ko: "로그아웃" },
  signInTitle: { en: "Welcome back", ko: "다시 만나서 반가워요" },
  signInSubtitle: {
    en: "Sign in to sync your saved words and progress across devices.",
    ko: "로그인하면 저장한 단어와 학습 진행 상황이 기기 간에 동기화돼요.",
  },
  authNotConfigured: {
    en: "Sign-in isn't set up yet. Your progress is saved on this device only.",
    ko: "아직 로그인 기능이 설정되지 않았어요. 학습 진행 상황은 이 기기에만 저장돼요.",
  },

  // --- Billing / paywall ---
  premium: { en: "Premium", ko: "프리미엄" },
  premiumTitle: { en: "SeoJae Story Premium", ko: "서재 이야기 프리미엄" },
  premiumLockedTitle: { en: "This is a Premium lesson", ko: "프리미엄 레슨이에요" },
  premiumLockedBody: {
    en: "Subscribe to unlock this story and the rest of the library.",
    ko: "구독하면 이 이야기와 서재의 모든 이야기를 볼 수 있어요.",
  },
  subscribeNow: { en: "Subscribe", ko: "구독하기" },
  subscribeSubtitle: { en: "Unlock every story in the library.", ko: "서재의 모든 이야기를 잠금 해제하세요." },
  subscribeFeature1: { en: "Full access to every lesson", ko: "모든 레슨 전체 이용" },
  subscribeFeature2: { en: "New stories added regularly", ko: "새로운 이야기 정기 추가" },
  subscribeFeature3: { en: "Cancel anytime", ko: "언제든 해지 가능" },
  perMonth: { en: "month", ko: "월" },
  checkoutLoadFailed: { en: "Couldn't load checkout. Please try again.", ko: "결제 모듈을 불러오지 못했어요. 다시 시도해 주세요." },
  checkoutStartFailed: { en: "Couldn't start checkout. Please try again.", ko: "결제를 시작할 수 없어요. 다시 시도해 주세요." },
  checkoutOpenFailed: { en: "Couldn't open checkout. Please try again.", ko: "결제 창을 여는 데 실패했어요. 다시 시도해 주세요." },
  checkoutNotConfigured: { en: "Checkout isn't set up yet", ko: "결제 설정이 아직 완료되지 않았어요" },
  checkoutNotConfiguredHint: {
    en: "Paddle isn't configured yet — add your keys to .env.local.",
    ko: "Paddle이 아직 설정되지 않았어요. .env.local에 키를 추가해 주세요.",
  },
  cancelSubscription: { en: "Cancel subscription", ko: "구독 해지" },
  cancelConfirm: {
    en: "You'll keep access until the end of your current billing period. Cancel anyway?",
    ko: "현재 결제 기간이 끝날 때까지는 계속 이용할 수 있어요. 그래도 해지할까요?",
  },
  keepSubscription: { en: "Keep subscription", ko: "구독 유지" },
  currentlySubscribed: { en: "You're subscribed", ko: "구독 중이에요" },
  renewsOn: { en: "Renews on", ko: "다음 결제일" },
  cancelScheduled: { en: "Access ends on", ko: "이용 종료일" },
  subscriptionActive: { en: "You're all set!", ko: "구독이 완료됐어요!" },
  subscriptionActiveBody: { en: "Your subscription is active — enjoy the full library.", ko: "구독이 활성화됐어요. 서재의 모든 이야기를 즐겨보세요." },
  subscriptionPending: { en: "Almost there...", ko: "거의 다 됐어요..." },
  subscribeOnWebsite: {
    en: "Subscribe from a browser at",
    ko: "브라우저에서 아래 주소로 구독해 주세요:",
  },
  subscriptionPendingBody: {
    en: "We're confirming your payment. This can take a minute — refresh if it doesn't update.",
    ko: "결제를 확인하고 있어요. 잠시 시간이 걸릴 수 있어요. 반영되지 않으면 새로고침해 주세요.",
  },

  // --- Reader: select / highlight / translate ---
  readerHint: {
    en: "Tap a word to translate it. Select text to highlight it or add it to your study plan.",
    ko: "단어를 탭하면 번역돼요. 문장을 선택하면 형광펜을 칠하거나 학습 계획에 추가할 수 있어요.",
  },
  translate: { en: "Translate", ko: "번역" },
  highlight: { en: "Highlight", ko: "형광펜" },
  highlightLine: { en: "Highlight line", ko: "이 문장 표시" },
  removeHighlight: { en: "Remove highlight", ko: "형광펜 지우기" },
  translateWord: { en: "Word", ko: "단어" },
  translateSentence: { en: "Sentence", ko: "문장" },

  // --- Study plan ---
  studyPlan: { en: "Study Plan", ko: "학습 계획" },
  studyPlanSubtitle: {
    en: "Review your saved cards with spaced repetition.",
    ko: "저장한 카드를 간격 반복으로 복습하세요.",
  },
  addToStudyPlan: { en: "Add to Study Plan", ko: "학습 계획에 추가" },
  inStudyPlan: { en: "In Study Plan", ko: "학습 계획에 있음" },
  addedToStudyPlan: { en: "Added to your study plan", ko: "학습 계획에 추가했어요" },
  totalCards: { en: "Cards", ko: "카드" },
  dueToday: { en: "Due", ko: "복습할 카드" },
  dayStreak: { en: "Day streak", ko: "연속 학습" },
  startReview: { en: "Start review", ko: "복습 시작" },
  tapToReveal: { en: "Tap to reveal", ko: "탭해서 정답 보기" },
  again: { en: "Again", ko: "다시" },
  good: { en: "Good", ko: "알맞음" },
  easy: { en: "Easy", ko: "쉬움" },
  reviewCaughtUp: {
    en: "All caught up — nothing due right now.",
    ko: "지금 복습할 카드가 없어요.",
  },
  reviewDone: { en: "Done", ko: "완료" },
  noStudyItems: {
    en: "Your study plan is empty. Add words from a lesson's flashcards, or select text while reading.",
    ko: "학습 계획이 비어 있어요. 레슨의 플래시카드에서 단어를 추가하거나, 읽으면서 문장을 선택해 보세요.",
  },
  yourHighlights: { en: "Highlights", ko: "형광펜 표시" },
  noHighlights: {
    en: "No highlights yet. Select a sentence while reading to mark it.",
    ko: "아직 형광펜 표시가 없어요. 읽으면서 문장을 선택해 표시해 보세요.",
  },
  openLesson: { en: "Open lesson", ko: "레슨 열기" },

  // --- Onboarding ---
  onbSkip: { en: "Skip", ko: "건너뛰기" },
  onbBack: { en: "Back", ko: "이전" },
  onbContinue: { en: "Continue", ko: "계속" },
  onbStart: { en: "Start reading", ko: "읽기 시작하기" },
  onbWelcomeBody: {
    en: "A few quick questions so your stories fit you. This takes about a minute.",
    ko: "이야기를 맞춤 추천하기 위한 짧은 질문이에요. 1분이면 충분해요.",
  },
  onbDirectionTitle: { en: "Which describes you?", ko: "어느 쪽에 해당하나요?" },
  onbDirKoEnSub: { en: "I speak Korean, learning English", ko: "한국어가 모국어이고, 영어를 배워요" },
  onbDirEnKoSub: { en: "I speak English, learning Korean", ko: "영어가 모국어이고, 한국어를 배워요" },
  onbLevelTitle: { en: "How's your level?", ko: "지금 수준은 어느 정도인가요?" },
  onbLevelBody: { en: "Pick the one that feels closest. You can change this later.", ko: "가장 가까운 것을 골라주세요. 나중에 바꿀 수 있어요." },
  onbInterestsTitle: { en: "What are you into?", ko: "어떤 주제에 관심이 있나요?" },
  onbInterestsBody: { en: "Pick a few — or none. We'll lean your library this way.", ko: "몇 개 골라도 되고, 안 골라도 돼요. 서재를 이 방향으로 채워드릴게요." },
  onbGoalTitle: { en: "What's your goal?", ko: "목표가 무엇인가요?" },
  onbGoalBody: { en: "This helps us shape the practice and feedback.", ko: "연습과 피드백을 맞추는 데 참고할게요." },
  onbSummaryTitle: { en: "You're all set", ko: "준비 완료예요" },
  onbSummaryBody: { en: "Here's what we'll use to pick your stories.", ko: "이 정보로 이야기를 골라드릴게요." },
  onbRecapLearning: { en: "Learning", ko: "학습 방향" },
  onbRecapLevel: { en: "Level", ko: "수준" },
  onbRecapGoal: { en: "Goal", ko: "목표" },
  onbRecapInterests: { en: "Interests", ko: "관심사" },
  forYou: { en: "For you", ko: "맞춤 추천" },

  // --- Settings ---
  settings: { en: "Settings", ko: "설정" },
  settingsSubtitle: {
    en: "Personalize how SeoJae Story works for you.",
    ko: "서재 이야기를 내게 맞게 설정하세요.",
  },
  settingsLearningTitle: { en: "Your learning", ko: "학습 설정" },
  settingsNotOnboarded: {
    en: "You haven't set up your learning profile yet.",
    ko: "아직 학습 프로필을 설정하지 않았어요.",
  },
  redoOnboarding: { en: "Redo onboarding", ko: "온보딩 다시 하기" },
  startOnboarding: { en: "Set up my profile", ko: "프로필 설정하기" },
  redoOnboardingHint: {
    en: "Walk through the questions again. Your current answers are kept as a starting point.",
    ko: "질문에 다시 답해요. 지금 답변이 기본값으로 유지돼요.",
  },
  settingsLanguageTitle: { en: "Interface language", ko: "인터페이스 언어" },
  settingsLanguageHint: {
    en: "The language for menus and instructions — you can switch anytime.",
    ko: "메뉴와 안내 문구의 언어예요. 언제든 바꿀 수 있어요.",
  },
  settingsNoInterests: { en: "No interests picked", ko: "선택한 관심사 없음" },

  // --- Daily habit ---
  lessonOfDay: { en: "Today's story", ko: "오늘의 이야기" },
  startTodaysLesson: { en: "Start today's story", ko: "오늘의 이야기 시작하기" },
  lessonOfDayDone: { en: "You've read this one", ko: "이 이야기를 읽었어요" },
  lessonOfDayDoneToday: { en: "Done for today — nice work!", ko: "오늘 학습 완료 — 잘했어요!" },
  readAgain: { en: "Read again", ko: "다시 읽기" },
  streakKeepGoing: {
    en: "Come back tomorrow to keep your streak going.",
    ko: "내일 다시 오면 연속 기록이 이어져요.",
  },
} satisfies Dict;

export function t(key: keyof typeof dict, lang: UiLang): string {
  return dict[key]?.[lang] ?? key;
}
