export type UiLang = "en" | "ko";

type Dict = Record<string, { en: string; ko: string }>;

export const dict = {
  appName: { en: "LuminaRead", ko: "루미나리드" },
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
  premiumTitle: { en: "LuminaRead Premium", ko: "루미나리드 프리미엄" },
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
} satisfies Dict;

export function t(key: keyof typeof dict, lang: UiLang): string {
  return dict[key]?.[lang] ?? key;
}
