export type UiLang = "en" | "ko";

type Dict = Record<string, { en: string; ko: string }>;

export const dict = {
  // Brand name — never localized, identical in every UI language.
  appName: { en: "SeoJae Story", ko: "SeoJae Story" },
  tagline: { en: "Short stories, gentle progress.", ko: "짧은 이야기로, 천천히 성장해요." },
  library: { en: "Library", ko: "서재" },
  classics: { en: "Classics", ko: "고전" },
  classicsSubtitle: {
    en: "Timeless stories, gently adapted for learners.",
    ko: "오래도록 사랑받은 이야기를 학습자를 위해 부드럽게 다듬었어요.",
  },
  classicsIntro: {
    en: "Read classic literature as a graded reader — novels and short stories by Jane Austen, the Brontës, Louisa May Alcott, O. Henry, Anton Chekhov and L. M. Montgomery, retold in simpler English at CEFR levels A1 to B2. Every story has a sentence-by-sentence Korean translation, audio narration, vocabulary flashcards, and a comprehension check.",
    ko: "고전 문학을 단계별 리더로 읽어요. 제인 오스틴, 브론테 자매, 루이자 메이 올컷, 오 헨리, 안톤 체호프, L. M. 몽고메리의 장편과 단편을 CEFR A1~B2 수준의 쉬운 영어로 다시 썼어요. 모든 이야기에 문장별 한국어 번역, 음성 낭독, 어휘 플래시카드, 이해도 확인 문제가 있어요.",
  },
  classicsBrowseByLevel: { en: "Browse by level", ko: "수준별로 보기" },
  classicsAllBooks: { en: "All classics", ko: "고전 전체" },
  classicsLevelIntro: {
    en: "{level} graded readers: classic short stories and novel openings retold in simple English at CEFR {level}, each with a sentence-by-sentence Korean translation, audio narration, and vocabulary practice.",
    ko: "{level} 단계별 리더: 고전 단편과 장편 도입부를 CEFR {level} 수준의 쉬운 영어로 다시 썼어요. 각 이야기에 문장별 한국어 번역, 음성 낭독, 어휘 연습이 있어요.",
  },
  libraryIntro: {
    en: "Every SeoJae Story lesson in one place — short stories and classic literature graded to CEFR A1–B2. Tap any word for an instant translation, listen to native-voice narration, review the vocabulary as flashcards, and check your understanding at the end.",
    ko: "SeoJae Story의 모든 레슨을 한곳에. 단편과 고전 문학을 CEFR A1~B2로 나눴어요. 단어를 누르면 바로 번역되고, 원어민 음성 낭독을 듣고, 어휘를 플래시카드로 복습하고, 마지막에 이해도를 확인해요.",
  },
  classicsSeeAll: { en: "See all", ko: "전체 보기" },

  // --- Classics shelf: search / filter / sort ---
  classicsSearchPlaceholder: { en: "Search by title or author", ko: "제목이나 작가로 검색" },
  classicsAllLevels: { en: "All levels", ko: "모든 수준" },
  classicsUnreadOnly: { en: "Unread only", ko: "안 읽은 것만" },
  classicsSort: { en: "Sort", ko: "정렬" },
  classicsSortDefault: { en: "Library order", ko: "서재 순서" },
  classicsSortTitle: { en: "Title (A–Z)", ko: "제목 (ㄱ–ㅎ)" },
  classicsSortLevel: { en: "By level", ko: "수준순" },
  classicsSortShortest: { en: "Shortest first", ko: "짧은 순" },
  classicsResultCount: { en: "{shown} of {total} books", ko: "책 {total}권 중 {shown}권" },
  classicsNoMatches: { en: "No books match your search.", ko: "검색과 일치하는 책이 없어요." },
  classicsClearFilters: { en: "Clear filters", ko: "필터 지우기" },

  // --- Dashboard: fresh recommendations for returning readers ---
  newForYouTitle: { en: "New for you", ko: "새로 추천" },
  newForYouBody: {
    en: "Classics you haven't opened yet, near your level.",
    ko: "아직 펼쳐 보지 않은 고전들이에요. 지금 수준에 가까운 것들로요.",
  },

  // --- Dashboard: fables & folktales strip ---
  fablesTitle: { en: "Fables & folktales", ko: "우화와 옛이야기" },
  fablesSubtitle: {
    en: "Short beginner tales — a gentle place to start.",
    ko: "짧은 입문용 이야기 — 부담 없이 시작하기 좋아요.",
  },

  bookshelf: { en: "Bookshelf", ko: "책장" },
  bookshelfSubtitle: {
    en: "Every story you finish finds a place here.",
    ko: "완독한 이야기가 하나씩 이곳에 꽂혀요.",
  },
  bookshelfEmpty: {
    en: "Your shelf is empty for now. Finish a story to place your first book — your cat is waiting.",
    ko: "아직 책장이 비어 있어요. 이야기를 하나 완독하면 첫 책이 꽂혀요. 고양이가 기다리고 있어요.",
  },
  savedWords: { en: "Saved Words", ko: "저장한 단어" },
  minRead: { en: "min read", ko: "분 소요" },

  // --- Header / menu drawer ---
  menu: { en: "Menu", ko: "메뉴" },
  close: { en: "Close", ko: "닫기" },
  signedInAs: { en: "Signed in as", ko: "로그인 계정" },
  story: { en: "The Story", ko: "이야기" },
  listen: { en: "Listen", ko: "듣기" },
  stop: { en: "Stop", ko: "정지" },
  tapWordHint: {
    en: "Tap a word for its meaning. Tap 🌐 to translate a line.",
    ko: "단어를 탭하면 뜻이 나와요. 🌐을 누르면 문장이 번역돼요.",
  },
  comprehensionCheck: { en: "Comprehension Check", ko: "이해도 확인" },
  questionLanguage: { en: "Question language", ko: "문제 언어" },
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
  signInError: {
    en: "Sign-in didn't complete. Please try again.",
    ko: "로그인이 완료되지 않았어요. 다시 시도해 주세요.",
  },

  // --- Billing / paywall ---
  premium: { en: "Premium", ko: "프리미엄" },
  premiumTitle: { en: "SeoJae Story Premium", ko: "SeoJae Story 프리미엄" },
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
  noWordEntry: {
    en: "Not in the pocket dictionary yet — here's the whole line instead.",
    ko: "아직 사전에 없는 단어예요 — 대신 문장 전체 번역을 보여 드릴게요.",
  },
  inThisLine: { en: "In this line:", ko: "이 문장에서:" },
  readingLanguage: { en: "Reading language", ko: "읽기 언어" },

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
    ko: "SeoJae Story를 내게 맞게 설정하세요.",
  },
  settingsLearningTitle: { en: "Your learning", ko: "학습 설정" },
  settingsNotOnboarded: {
    en: "You haven't set up your learning profile yet.",
    ko: "아직 학습 프로필을 설정하지 않았어요.",
  },
  redoOnboarding: { en: "Change your goals", ko: "목표 변경하기" },
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
  settingsFontSizeTitle: { en: "Text size", ko: "글자 크기" },
  settingsFontSizeHint: {
    en: "Adjusts text across the whole app. A larger size can make reading easier.",
    ko: "앱 전체의 글자 크기를 조절해요. 크게 하면 읽기가 더 편해질 수 있어요.",
  },
  fontSizeSm: { en: "Small", ko: "작게" },
  fontSizeMd: { en: "Default", ko: "기본" },
  fontSizeLg: { en: "Large", ko: "크게" },
  fontSizeXl: { en: "Extra large", ko: "아주 크게" },

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

  // --- Book club ---
  myBookClub: { en: "My book club", ko: "내 북클럽" },
  clubShareTitle: { en: "Read this with your book club", ko: "북클럽과 함께 읽기" },
  clubShareBody: {
    en: "Share this chapter with your book club and discuss it together.",
    ko: "이 챕터를 북클럽과 공유하고 함께 이야기 나눠요.",
  },
  clubShareCta: { en: "Share this chapter", ko: "이 챕터 공유하기" },
  clubCopyLink: { en: "Copy link", ko: "링크 복사" },
  clubLinkCopied: { en: "Link copied", ko: "링크를 복사했어요" },
  clubShareInviteText: {
    en: "Read this chapter with me on SeoJae Story and let's discuss it.",
    ko: "SeoJae Story에서 이 챕터를 함께 읽고 이야기 나눠요.",
  },
  clubSignInToShare: {
    en: "Sign in to start a book club and share chapters.",
    ko: "로그인하면 북클럽을 만들고 챕터를 공유할 수 있어요.",
  },
  clubStart: { en: "Start a book club", ko: "북클럽 만들기" },
  clubStartBody: {
    en: "Make a private group of up to 10 readers. While your membership is active, chapters you share unlock free for everyone in it.",
    ko: "최대 10명이 함께하는 비공개 모임을 만들어요. 멤버십이 유효한 동안, 공유한 챕터를 모두가 무료로 읽을 수 있어요.",
  },
  clubNameLabel: { en: "Book club name", ko: "북클럽 이름" },
  clubNamePlaceholder: { en: "e.g. Tuesday Readers", ko: "예: 화요일 독서 모임" },
  clubCreate: { en: "Create", ko: "만들기" },
  clubCancel: { en: "Cancel", ko: "취소" },
  clubSave: { en: "Save", ko: "저장" },
  clubRename: { en: "Rename", ko: "이름 변경" },
  clubMembersCount: { en: "{count} of {max} members", ko: "멤버 {count}/{max}명" },
  clubInviteTitle: { en: "Invite link", ko: "초대 링크" },
  clubInviteHint: {
    en: "Anyone with this link can join, up to 10 members. Paste it into your group chat.",
    ko: "이 링크가 있으면 누구나 참여할 수 있어요(최대 10명). 그룹 채팅에 붙여넣어 보내세요.",
  },
  clubShareStatusShared: { en: "Shared with {name}", ko: "{name}에 공유됨" },
  clubUnshare: { en: "Remove from club", ko: "북클럽에서 빼기" },
  clubOwnerBadge: { en: "Owner", ko: "관리자" },
  clubYouBadge: { en: "You", ko: "나" },
  clubRemoveMember: { en: "Remove", ko: "내보내기" },
  clubSharedChaptersTitle: { en: "Chapters shared with the club", ko: "북클럽에 공유된 챕터" },
  clubNoSharedChapters: {
    en: "No chapters yet. Open a lesson and tap “Share this chapter”.",
    ko: "아직 없어요. 레슨을 열고 “이 챕터 공유하기”를 눌러 보세요.",
  },
  clubMembersTitle: { en: "Members", ko: "멤버" },
  clubLeave: { en: "Leave book club", ko: "북클럽 나가기" },
  clubDelete: { en: "Delete book club", ko: "북클럽 삭제" },
  clubLeaveConfirm: {
    en: "Leave this book club? You'll lose free access to its shared chapters.",
    ko: "이 북클럽에서 나갈까요? 공유된 챕터의 무료 이용이 사라져요.",
  },
  clubDeleteConfirm: {
    en: "Delete this book club for everyone? This can't be undone.",
    ko: "모두를 위해 이 북클럽을 삭제할까요? 되돌릴 수 없어요.",
  },
  clubMemberChapterNote: { en: "This chapter is on your book club's list.", ko: "이 챕터가 북클럽 목록에 있어요." },
  clubOwnerOnlyShare: {
    en: "Only the club owner can add chapters.",
    ko: "관리자만 챕터를 추가할 수 있어요.",
  },
  clubOpen: { en: "Open {name}", ko: "{name} 열기" },
  clubMembersReadFree: {
    en: "Your members can read this chapter free.",
    ko: "북클럽 멤버가 이 챕터를 무료로 읽을 수 있어요.",
  },
  clubMembersReadFreeWhenSubscribed: {
    en: "Members read shared chapters free while your membership is active.",
    ko: "멤버십이 유효한 동안 멤버가 공유 챕터를 무료로 읽어요.",
  },
  clubSignInCta: { en: "Sign in", ko: "로그인" },
  clubJoinLoading: { en: "Joining…", ko: "참여하는 중…" },
  clubJoined: { en: "You've joined {name}.", ko: "{name}에 참여했어요." },
  clubJoinContinue: { en: "Continue", ko: "계속" },
  clubUnavailable: {
    en: "Book clubs aren't available here yet.",
    ko: "북클럽 기능은 아직 사용할 수 없어요.",
  },
  clubNeedsAccount: {
    en: "Book clubs need an account. Sign in to join this one.",
    ko: "북클럽은 계정이 필요해요. 로그인하고 참여해 보세요.",
  },
  clubJoinInvalid: { en: "This invite link isn't valid anymore.", ko: "이 초대 링크는 더 이상 유효하지 않아요." },
  clubJoinFull: { en: "This book club is full (10 members).", ko: "이 북클럽은 정원이 찼어요 (10명)." },
  clubJoinAlready: {
    en: "You're already in another book club. Leave it first to join this one.",
    ko: "이미 다른 북클럽에 속해 있어요. 먼저 나가야 참여할 수 있어요.",
  },
  clubGenericError: { en: "Something went wrong. Please try again.", ko: "문제가 발생했어요. 다시 시도해 주세요." },
  clubSignedOutTitle: { en: "Reading with others?", ko: "함께 읽고 있나요?" },
  clubSignedOutBody: {
    en: "Sign in to start a book club — a private group of up to 10 readers who can open the chapters you share.",
    ko: "로그인하고 북클럽을 시작하세요. 공유한 챕터를 함께 볼 수 있는, 최대 10명의 비공개 모임이에요.",
  },

  // --- Landing page (the marketing home at "/") ---
  landingEyebrow: {
    en: "English & Korean through stories",
    ko: "이야기로 배우는 영어와 한국어",
  },
  landingHeadline: {
    en: "Learn a language the gentle way — one short story at a time.",
    ko: "짧은 이야기 하나씩, 부드럽게 배우는 언어.",
  },
  landingSubhead: {
    en: "SeoJae Story turns timeless short fiction into a real language course: CEFR-graded reading, a tap-anywhere dictionary, review flashcards, and native-voice audio — in English and Korean. No account needed to begin.",
    ko: "SeoJae Story는 오래 사랑받은 단편 문학을 제대로 된 언어 학습 코스로 바꿔 드려요. CEFR 등급별 읽기, 아무 데나 탭하면 뜨는 사전, 복습용 플래시카드, 그리고 원어민 음성 오디오까지 — 영어와 한국어로요. 계정 없이 바로 시작할 수 있어요.",
  },
  landingCtaPrimary: { en: "Start reading — it's free", ko: "무료로 읽기 시작하기" },
  landingCtaSecondary: { en: "Browse the classics", ko: "고전 둘러보기" },
  landingTrust: {
    en: "Free first lessons · No sign-up · Works offline",
    ko: "첫 수업 무료 · 가입 불필요 · 오프라인 지원",
  },

  landingPreviewTitle: {
    en: "Try the tools you'll learn with",
    ko: "학습에 쓰게 될 도구를 직접 만져 보세요",
  },
  landingPreviewBody: {
    en: "Tap any word for an instant meaning, reveal a whole line, and flip through vocabulary flashcards — right here on this page.",
    ko: "모르는 단어를 탭하면 뜻이 바로 뜨고, 문장 전체 번역도 볼 수 있으며, 어휘 플래시카드도 넘겨 볼 수 있어요. 바로 이 화면에서요.",
  },
  landingPreviewReaderLabel: { en: "Reader", ko: "리더" },
  landingPreviewTapHint: {
    en: "Tap a highlighted word for its meaning →",
    ko: "표시된 단어를 탭하면 뜻이 나와요 →",
  },
  landingPreviewRevealHint: {
    en: "Tap the globe to see the whole line",
    ko: "지구본을 탭하면 문장 전체 번역이 보여요",
  },
  landingPreviewFlashcardHint: {
    en: "Tap the card to flip it",
    ko: "카드를 탭하면 뒤집혀요",
  },
  landingPreviewReadCaption: {
    en: "A screen from the reader: tap a word for its meaning, or reveal the whole line's translation.",
    ko: "리더 화면 예시: 단어를 탭해 뜻을 보거나, 문장 전체 번역을 펼쳐 볼 수 있어요.",
  },
  landingPreviewCardCaption: {
    en: "An interactive vocabulary flashcard: flip it, and step through the words in the lesson.",
    ko: "상호작용형 어휘 플래시카드: 뒤집고, 수업에 나오는 단어들을 하나씩 넘겨 볼 수 있어요.",
  },

  landingHowTitle: { en: "How a lesson works", ko: "수업은 이렇게 진행돼요" },
  landingStep1Title: { en: "Read a short story", ko: "짧은 이야기를 읽어요" },
  landingStep1Body: {
    en: "One self-contained scene, simplified to your level (A1–B2). One idea per sentence.",
    ko: "하나의 완결된 장면을 지금 수준(A1–B2)에 맞게 다듬었어요. 한 문장에 한 가지 생각만.",
  },
  landingStep2Title: { en: "Tap any word", ko: "모르는 단어를 탭해요" },
  landingStep2Body: {
    en: "Instant meanings from a built-in dictionary — no lookups, no leaving the page. Reveal a whole line when you want it.",
    ko: "내장 사전으로 뜻이 바로 떠요. 사전을 찾을 필요도, 페이지를 떠날 필요도 없어요. 원하면 문장 전체 번역도 볼 수 있어요.",
  },
  landingStep3Title: { en: "Check, save, reflect", ko: "확인하고, 저장하고, 정리해요" },
  landingStep3Body: {
    en: "A few comprehension questions, flashcards for the words you saved, and a gentle note on the summary you write.",
    ko: "짧은 이해도 퀴즈, 저장한 단어로 만드는 플래시카드, 그리고 직접 쓴 요약에 대한 따뜻한 피드백.",
  },

  landingFeaturesTitle: {
    en: "A language course, hiding in a library",
    ko: "서재의 모습을 한 언어 학습 코스",
  },
  landingFeaturesLead: {
    en: "Reading is the front door. Behind it is everything you need to actually learn the language.",
    ko: "읽기는 입구일 뿐이에요. 그 안에는 언어를 제대로 익히는 데 필요한 모든 것이 들어 있어요.",
  },
  landingFeatureLevelTitle: { en: "Matched to your level", ko: "내 수준에 맞춰서" },
  landingFeatureLevelBody: {
    en: "Every story is graded A1–B2 (CEFR) and simplified to fit — so it stretches you without losing you.",
    ko: "모든 이야기는 유럽언어기준(CEFR) A1–B2로 등급이 매겨지고 그 수준에 맞게 다듬어져요. 버겁지 않으면서도 실력을 끌어올리죠.",
  },
  landingFeatureDictTitle: { en: "A dictionary on every word", ko: "모든 단어 위의 사전" },
  landingFeatureDictBody: {
    en: "Tap any word for an instant meaning from a built-in offline dictionary. Reveal a full line whenever you like.",
    ko: "아무 단어나 탭하면 내장 오프라인 사전에서 뜻이 바로 떠요. 원할 때면 문장 전체 번역도 펼쳐 볼 수 있어요.",
  },
  landingFeatureFlashcardsTitle: { en: "Vocabulary that sticks", ko: "머릿속에 남는 어휘" },
  landingFeatureFlashcardsBody: {
    en: "Save the words that matter and review them as flashcards — with a reading, a meaning, and an example in context.",
    ko: "중요한 단어를 저장해 플래시카드로 복습하세요. 발음과 뜻, 그리고 문맥 속 예문이 함께 있어요.",
  },
  landingFeatureCheckTitle: { en: "Check that it landed", ko: "제대로 이해했는지 확인" },
  landingFeatureCheckBody: {
    en: "A few comprehension questions after each story, plus a gentle note on the short summary you write.",
    ko: "이야기마다 짧은 이해도 문제가 있고, 직접 쓴 요약에 대한 따뜻한 피드백도 받아요.",
  },
  landingFeatureListenTitle: { en: "Listening practice built in", ko: "듣기 연습까지" },
  landingFeatureListenBody: {
    en: "Every sentence is pre-recorded with a natural neural voice, in both English and Korean.",
    ko: "모든 문장을 자연스러운 뉴럴 음성으로 미리 녹음했어요 — 영어와 한국어 모두.",
  },
  landingFeatureBilingualTitle: { en: "Both directions", ko: "양방향 학습" },
  landingFeatureBilingualBody: {
    en: "Learn English from Korean, or Korean from English. Flip the reading language and the interface any time.",
    ko: "한국어로 영어를, 영어로 한국어를 배워요. 읽기 언어와 인터페이스는 언제든 바꿀 수 있어요.",
  },

  landingClassicsTitle: { en: "Start with a classic", ko: "고전으로 시작해요" },
  landingClassicsBody: {
    en: "Public-domain stories, retold and translated by us for learners.",
    ko: "저작권이 만료된 이야기를 학습자를 위해 새로 옮기고 번역했어요.",
  },
  landingClassicsSeeAll: { en: "See all {count} stories", ko: "이야기 {count}편 모두 보기" },

  landingClubTitle: { en: "Read it together", ko: "함께 읽어요" },
  landingClubBody: {
    en: "Start a book club of up to 10 readers. Share a chapter and everyone in your club can open it — free, while your membership is active — then talk it over.",
    ko: "최대 10명이 함께하는 북클럽을 만들어요. 챕터를 공유하면 멤버십이 유효한 동안 클럽의 모두가 무료로 열어 읽고, 함께 이야기 나눌 수 있어요.",
  },

  landingClosingTitle: { en: "Your first story is waiting.", ko: "첫 이야기가 기다리고 있어요." },
  landingClosingCta: { en: "Open the library", ko: "서재 열기" },
  landingFooterRights: {
    en: "Original retellings and translations © SeoJae Story. Source texts are in the public domain.",
    ko: "새로 옮긴 이야기와 번역의 저작권은 SeoJae Story에 있습니다. 원문은 모두 퍼블릭 도메인입니다.",
  },
} satisfies Dict;

export function t(key: keyof typeof dict, lang: UiLang): string {
  return dict[key]?.[lang] ?? key;
}
