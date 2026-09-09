import type { Lesson } from "../types";

/**
 * Sample content library.
 *
 * Sourcing note: the stories below are simplified original retellings of
 * public-domain source material, written specifically for SeoJae Story so
 * that no modern, copyrighted translation is used anywhere in the app:
 *
 *  - "The Fox and the Grapes" retells a fable attributed to Aesop
 *    (traditionally dated ~6th century BCE); the fable itself and its
 *    core plot have been in the public domain for millennia.
 *  - "흥부와 놀부" (Heungbu and Nolbu) retells Heungbu-jeon (흥부전), an
 *    anonymous traditional Korean folktale of unknown authorship from the
 *    late Joseon era, also long in the public domain.
 *  - "The Gift of the Magi" is a simplified retelling of O. Henry's short
 *    story (first published 1905, Project Gutenberg #7256), long in the
 *    public domain. It opens the "Classics" collection (see CONTENT_BACKLOG.md).
 *  - "The Story of an Hour" is a simplified retelling of Kate Chopin's short
 *    story (first published 1894), long in the public domain — the second
 *    lesson in the "Classics" collection.
 *  - "Anne of Green Gables" is a simplified retelling of Chapter 2 of
 *    L. M. Montgomery's novel (first published 1908, Project Gutenberg #45),
 *    long in the public domain — the third lesson in the "Classics" collection.
 *  - "Little Women" is a simplified retelling of Chapter 1 of Louisa May
 *    Alcott's novel (first published 1868, Project Gutenberg #37106).
 *  - "The Ugly Duckling" is a simplified retelling of Hans Christian
 *    Andersen's fairy tale (first published 1843, Project Gutenberg #1597).
 *  - "Cinderella" is a simplified, gently softened retelling of the Brothers
 *    Grimm tale "Aschenputtel" (collected 1812, Project Gutenberg #2591).
 *  - "Pride and Prejudice" is a simplified retelling of Chapter 1 of Jane
 *    Austen's novel (first published 1813, Project Gutenberg #1342).
 *  - "Jane Eyre" is a simplified retelling of Chapter 1 of Charlotte
 *    Brontë's novel (first published 1847, Project Gutenberg #1260).
 *  - "The Selfish Giant" is a simplified, gently softened retelling of Oscar
 *    Wilde's fairy tale (first published 1888, Project Gutenberg #902).
 *  - "The Necklace" is a simplified retelling of Guy de Maupassant's short
 *    story "La Parure" (first published 1884), long in the public domain.
 *  - "A Christmas Carol" is a simplified retelling of Stave One ("Marley's
 *    Ghost") from Charles Dickens's novella (first published 1843, Project
 *    Gutenberg #46), long in the public domain.
 *  - "The Lady with the Dog" is a simplified retelling of Part I of Anton
 *    Chekhov's short story "Дама с собачкой" (first published 1899; the
 *    English text on Project Gutenberg, #13415, is Constance Garnett's 1917
 *    translation), long in the public domain.
 *  - "Wuthering Heights" is a simplified retelling of Chapter 3 of Emily
 *    Brontë's novel (first published 1847, Project Gutenberg #768), long in
 *    the public domain.
 *  - "The Secret Garden" is a simplified retelling of Chapter 1 of Frances
 *    Hodgson Burnett's novel (first published 1911, Project Gutenberg #113),
 *    long in the public domain.
 *  - "The Emperor's New Clothes" is a simplified retelling of Hans Christian
 *    Andersen's fairy tale "Keiserens nye Klæder" (first published 1837,
 *    Project Gutenberg #1597), long in the public domain.
 *
 * The English and Korean text in every lesson — including all
 * translations — was written fresh for this app, so there are no
 * translation-copyright concerns. When you add more lessons, keep sourcing
 * from public-domain works (e.g. Project Gutenberg, Korean Wikisource /
 * Gongyumadang) and write your own translations rather than copying an
 * existing modern translation.
 */
export const lessons: Lesson[] = [
  {
    slug: "fox-and-grapes",
    title: "The Fox and the Grapes",
    titleTranslation: "여우와 포도",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fables",
    level: "A1",
    isFree: true,
    coverEmoji: "🦊",
    source:
      "Adapted from Aesop's Fables (public domain, c. 6th century BCE). This retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt: "In 1–2 sentences, describe what the fox did and how she reacted at the end.",
    paragraphs: [
      [
        {
          id: "fg-1",
          text: "One hot afternoon, a fox was walking through a quiet garden.",
          translation: "어느 더운 오후, 여우 한 마리가 조용한 정원을 걷고 있었어요.",
        },
        {
          id: "fg-2",
          text: "She had not eaten all day, and she was very hungry.",
          translation: "하루 종일 아무것도 먹지 못해서 여우는 몹시 배가 고팠어요.",
        },
      ],
      [
        {
          id: "fg-3",
          text: "Above her, on a tall vine, hung a bunch of ripe, purple grapes.",
          translation: "여우 머리 위 높은 덩굴에는 잘 익은 보라색 포도송이가 매달려 있었어요.",
        },
        {
          id: "fg-4",
          text: "The grapes looked sweet and juicy in the sunlight.",
          translation: "포도는 햇빛 속에서 달콤하고 즙이 많아 보였어요.",
        },
      ],
      [
        {
          id: "fg-5",
          text: "The fox jumped as high as she could, but she could not reach the grapes.",
          translation: "여우는 있는 힘껏 뛰어올랐지만, 포도에 닿을 수 없었어요.",
        },
        {
          id: "fg-6",
          text: "She tried again and again, but every jump ended the same way.",
          translation: "여우는 몇 번이고 다시 뛰었지만, 결과는 매번 같았어요.",
        },
      ],
      [
        {
          id: "fg-7",
          text: "At last, tired and a little embarrassed, the fox stopped jumping.",
          translation: "결국 지치고 조금 민망해진 여우는 뛰어오르기를 멈췄어요.",
        },
        {
          id: "fg-8",
          text: "\"Those grapes are probably sour anyway,\" she said, and walked away.",
          translation: "\"어차피 저 포도는 신 포도일 거야.\" 여우는 이렇게 말하며 자리를 떠났어요.",
        },
      ],
      [
        {
          id: "fg-9",
          text: "It is easy to say we do not want something, once we find out we cannot have it.",
          translation: "가질 수 없다는 걸 알게 되면, 애초에 원하지 않았다고 말하기 쉬워요.",
        },
      ],
    ],
    vocab: [
      {
        id: "fg-v1",
        term: "ripe",
        partOfSpeech: "adjective",
        translation: "잘 익은",
        example: "The ripe, purple grapes hung above her.",
        exampleTranslation: "잘 익은 보라색 포도가 그녀 머리 위에 매달려 있었어요.",
      },
      {
        id: "fg-v2",
        term: "hungry",
        partOfSpeech: "adjective",
        translation: "배고픈",
        example: "She was very hungry after a long day.",
        exampleTranslation: "긴 하루를 보낸 그녀는 몹시 배가 고팠어요.",
      },
      {
        id: "fg-v3",
        term: "reach",
        partOfSpeech: "verb",
        translation: "닿다, 도달하다",
        example: "She could not reach the grapes.",
        exampleTranslation: "그녀는 포도에 닿을 수 없었어요.",
      },
      {
        id: "fg-v4",
        term: "sour",
        partOfSpeech: "adjective",
        translation: "신, 시큼한",
        example: "\"Those grapes are probably sour,\" she said.",
        exampleTranslation: "\"저 포도는 아마 신 포도일 거야,\" 그녀가 말했어요.",
      },
      {
        id: "fg-v5",
        term: "embarrassed",
        partOfSpeech: "adjective",
        translation: "민망한, 창피한",
        example: "She felt a little embarrassed after failing.",
        exampleTranslation: "실패한 후 그녀는 조금 민망함을 느꼈어요.",
      },
    ],
    questions: [
      {
        id: "fg-q1",
        prompt: "Why couldn't the fox eat the grapes?",
        options: [
          "She wasn't hungry.",
          "She couldn't jump high enough to reach them.",
          "The grapes belonged to someone else.",
          "She didn't like grapes.",
        ],
        correctIndex: 1,
        explanation: "The fox jumped again and again, but the grapes were too high for her to reach.",
      },
      {
        id: "fg-q2",
        prompt: "What did the fox say about the grapes before leaving?",
        options: [
          "\"They look delicious.\"",
          "\"I'll come back tomorrow.\"",
          "\"Those grapes are probably sour anyway.\"",
          "\"Someone else can have them.\"",
        ],
        correctIndex: 2,
        explanation: "After failing to reach the grapes, the fox decided to say they were probably sour instead of admitting she failed.",
      },
      {
        id: "fg-q3",
        prompt: "What is the lesson of this fable?",
        options: [
          "Always ask for help.",
          "It's easy to claim we don't want something once we realize we can't have it.",
          "Foxes should not eat grapes.",
          "Practice makes perfect.",
        ],
        correctIndex: 1,
        explanation: "This fable is the origin of the phrase \"sour grapes\" — pretending not to want something you can't get.",
      },
    ],
  },
  {
    slug: "heungbu-and-nolbu",
    title: "흥부와 놀부",
    titleTranslation: "Heungbu and Nolbu",
    targetLanguage: "ko",
    nativeLanguage: "en",
    topic: "Folktale",
    level: "A2",
    isFree: false,
    coverEmoji: "🐦",
    source:
      "Based on Heungbu-jeon (흥부전), an anonymous traditional Korean folktale of unknown authorship believed to date from the late Joseon era and long in the public domain. This simplified retelling and its English translation are original text written for SeoJae Story.",
    summaryPrompt: "In 1–2 sentences, describe what Heungbu did for the swallow and what happened afterward.",
    paragraphs: [
      [
        {
          id: "hn-1",
          text: "옛날 어느 마을에 형제가 살았어요.",
          translation: "Long ago, in a small village, there lived two brothers.",
        },
        {
          id: "hn-2",
          text: "형의 이름은 놀부였고, 동생의 이름은 흥부였어요.",
          translation: "The older brother was named Nolbu, and the younger brother was named Heungbu.",
        },
      ],
      [
        {
          id: "hn-3",
          text: "놀부는 욕심이 많고 마음이 차가웠지만, 흥부는 착하고 다정했어요.",
          translation: "Nolbu was greedy and cold-hearted, but Heungbu was kind and warm.",
        },
        {
          id: "hn-4",
          text: "부모님이 돌아가신 뒤, 놀부는 흥부를 집에서 쫓아냈어요.",
          translation: "After their parents passed away, Nolbu drove Heungbu out of the house.",
        },
      ],
      [
        {
          id: "hn-5",
          text: "어느 봄날, 흥부는 다리가 부러진 제비 한 마리를 발견했어요.",
          translation: "One spring day, Heungbu found a swallow with a broken leg.",
        },
        {
          id: "hn-6",
          text: "흥부는 정성껏 제비의 다리를 치료해 주었어요.",
          translation: "Heungbu carefully treated the swallow's leg and nursed it back to health.",
        },
      ],
      [
        {
          id: "hn-7",
          text: "다음 해 봄, 제비는 흥부에게 작은 박씨 하나를 물어다 주었어요.",
          translation: "The next spring, the swallow brought Heungbu a single gourd seed as thanks.",
        },
        {
          id: "hn-8",
          text: "흥부가 그 씨앗을 심자, 커다란 박이 주렁주렁 열렸어요.",
          translation: "When Heungbu planted the seed, it grew into a vine heavy with giant gourds.",
        },
      ],
      [
        {
          id: "hn-9",
          text: "박을 가르자, 그 안에서 쌀과 금은보화가 쏟아져 나왔어요.",
          translation: "When he cut one open, rice and treasure poured out from inside.",
        },
        {
          id: "hn-10",
          text: "흥부는 부자가 되었지만, 예전처럼 이웃에게 늘 친절했어요.",
          translation: "Heungbu became wealthy, but he remained just as kind to his neighbors as before.",
        },
      ],
    ],
    vocab: [
      {
        id: "hn-v1",
        term: "제비",
        reading: "jebi",
        partOfSpeech: "noun",
        translation: "swallow (bird)",
        example: "제비 한 마리가 다리를 다쳤어요.",
        exampleTranslation: "A swallow had hurt its leg.",
      },
      {
        id: "hn-v2",
        term: "다정하다",
        reading: "dajeonghada",
        partOfSpeech: "adjective",
        translation: "to be warm-hearted, affectionate",
        example: "흥부는 다정한 사람이었어요.",
        exampleTranslation: "Heungbu was a warm-hearted person.",
      },
      {
        id: "hn-v3",
        term: "욕심",
        reading: "yoksim",
        partOfSpeech: "noun",
        translation: "greed",
        example: "놀부는 욕심이 많았어요.",
        exampleTranslation: "Nolbu was very greedy.",
      },
      {
        id: "hn-v4",
        term: "치료하다",
        reading: "chiryohada",
        partOfSpeech: "verb",
        translation: "to treat, to heal",
        example: "흥부는 제비의 다리를 치료했어요.",
        exampleTranslation: "Heungbu treated the swallow's leg.",
      },
      {
        id: "hn-v5",
        term: "보물",
        reading: "bomul",
        partOfSpeech: "noun",
        translation: "treasure",
        example: "박 안에 보물이 가득했어요.",
        exampleTranslation: "The gourd was full of treasure.",
      },
    ],
    questions: [
      {
        id: "hn-q1",
        prompt: "흥부는 어떤 사람이었나요?",
        options: ["욕심이 많았다", "착하고 다정했다", "화를 잘 냈다", "거짓말을 잘했다"],
        correctIndex: 1,
        explanation: "흥부는 착하고 다정한 사람으로, 다친 제비를 정성껏 도와주었어요.",
      },
      {
        id: "hn-q2",
        prompt: "제비는 흥부에게 무엇을 가져다주었나요?",
        options: ["쌀 한 그릇", "박씨 하나", "새 옷", "돈 봉투"],
        correctIndex: 1,
        explanation: "제비는 은혜에 보답하려고 작은 박씨 하나를 물어다 주었어요.",
      },
      {
        id: "hn-q3",
        prompt: "박 안에서 무엇이 나왔나요?",
        options: ["더 많은 제비", "쌀과 금은보화", "빈 상자", "편지 한 장"],
        correctIndex: 1,
        explanation: "박을 가르자 쌀과 금은보화가 쏟아져 나와 흥부는 부자가 되었어요.",
      },
    ],
  },
  {
    slug: "gift-of-the-magi",
    title: "The Gift of the Magi",
    titleTranslation: "동방박사의 선물",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "O. Henry (1862–1910)",
    coverEmoji: "🎁",
    coverImage: "/covers/gift-of-the-magi.svg",
    source:
      "Adapted from O. Henry's short story \"The Gift of the Magi\" (first published 1905; public domain, Project Gutenberg #7256). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, say what Della and Jim each gave up, and what they bought for each other.",
    paragraphs: [
      [
        {
          id: "gm-1",
          text: "It was the day before Christmas, and Della had only one dollar and eighty-seven cents.",
          translation: "크리스마스 전날이었고, 델라에게는 단돈 1달러 87센트밖에 없었어요.",
        },
        {
          id: "gm-2",
          text: "She wanted to buy a present for her husband, Jim, but it was not nearly enough.",
          translation: "델라는 남편 짐에게 선물을 사 주고 싶었지만, 그 돈으로는 턱없이 부족했어요.",
        },
      ],
      [
        {
          id: "gm-3",
          text: "Della and Jim did not have much money, but each of them owned one treasure.",
          translation: "델라와 짐은 가진 돈이 많지 않았지만, 두 사람에게는 각자 보물이 하나씩 있었어요.",
        },
        {
          id: "gm-4",
          text: "Jim had a gold watch that had belonged to his father and his grandfather.",
          translation: "짐에게는 아버지와 할아버지가 대대로 쓰시던 금시계가 있었어요.",
        },
        {
          id: "gm-5",
          text: "Della had beautiful brown hair that fell in waves below her knees.",
          translation: "델라에게는 무릎 아래까지 물결치며 내려오는 아름다운 갈색 머리카락이 있었어요.",
        },
      ],
      [
        {
          id: "gm-6",
          text: "Della looked at herself in the mirror for a long time, and then she made a decision.",
          translation: "델라는 한참 동안 거울 속 자신을 바라보다가, 마침내 결심을 했어요.",
        },
        {
          id: "gm-7",
          text: "She put on her old brown coat, went out, and sold her long hair for twenty dollars.",
          translation: "델라는 낡은 갈색 외투를 걸치고 나가서, 긴 머리카락을 팔고 20달러를 받았어요.",
        },
      ],
      [
        {
          id: "gm-8",
          text: "With the money she bought a plain platinum chain for Jim's gold watch.",
          translation: "그 돈으로 델라는 짐의 금시계에 어울리는 소박한 백금 시곗줄을 샀어요.",
        },
        {
          id: "gm-9",
          text: "Then she went home and waited, nervous about what Jim would think of her short hair.",
          translation: "그러고는 집에 돌아와, 짧아진 머리를 짐이 어떻게 볼지 마음 졸이며 기다렸어요.",
        },
      ],
      [
        {
          id: "gm-10",
          text: "When Jim came in, he stopped and stared at her with a strange look on his face.",
          translation: "짐이 들어오더니 걸음을 멈추고, 묘한 표정으로 델라를 빤히 바라보았어요.",
        },
        {
          id: "gm-11",
          text: "He had sold his gold watch to buy a set of pretty combs for Della's long hair.",
          translation: "짐은 델라의 긴 머리에 꽂을 예쁜 빗 세트를 사려고 자기 금시계를 팔아 버렸던 거예요.",
        },
      ],
      [
        {
          id: "gm-12",
          text: "Neither gift could be used that night, yet each had given the other everything they had.",
          translation: "그날 밤 두 선물 다 쓸 수 없었지만, 두 사람은 서로에게 가진 모든 것을 내어 준 셈이었어요.",
        },
        {
          id: "gm-13",
          text: "Of everyone who gives gifts, these two were the wisest of all.",
          translation: "선물을 주는 모든 사람 가운데, 이 두 사람이 가장 지혜로웠어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "gm-v1",
        term: "treasure",
        partOfSpeech: "noun",
        translation: "보물, 소중한 것",
        example: "Each of them owned one treasure.",
        exampleTranslation: "두 사람에게는 각자 보물이 하나씩 있었어요.",
      },
      {
        id: "gm-v2",
        term: "platinum",
        partOfSpeech: "noun",
        translation: "백금",
        example: "She bought a plain platinum chain for the watch.",
        exampleTranslation: "델라는 시계에 어울리는 소박한 백금 시곗줄을 샀어요.",
      },
      {
        id: "gm-v3",
        term: "nervous",
        partOfSpeech: "adjective",
        translation: "불안한, 초조한",
        example: "She waited at home, nervous about her short hair.",
        exampleTranslation: "델라는 짧아진 머리가 걱정되어 초조하게 집에서 기다렸어요.",
      },
      {
        id: "gm-v4",
        term: "stare",
        partOfSpeech: "verb",
        translation: "빤히 쳐다보다",
        example: "Jim stopped and stared at her.",
        exampleTranslation: "짐은 걸음을 멈추고 델라를 빤히 바라보았어요.",
      },
      {
        id: "gm-v5",
        term: "wise",
        partOfSpeech: "adjective",
        translation: "지혜로운",
        example: "These two were the wisest of all.",
        exampleTranslation: "이 두 사람이 가장 지혜로웠어요.",
      },
    ],
    questions: [
      {
        id: "gm-q1",
        prompt: "Why couldn't Della buy Jim a present at first?",
        options: [
          "The shops were closed for Christmas.",
          "She had only one dollar and eighty-seven cents.",
          "She had lost her money on the street.",
          "Jim had asked her not to.",
        ],
        correctIndex: 1,
        explanation:
          "On the day before Christmas, Della had only $1.87 — not nearly enough for the gift she wanted to give.",
      },
      {
        id: "gm-q2",
        prompt: "How did Della get the money for Jim's gift?",
        options: [
          "She borrowed it from a neighbor.",
          "She sold Jim's gold watch.",
          "She sold her long hair.",
          "She returned her old coat to the shop.",
        ],
        correctIndex: 2,
        explanation: "Della sold her beautiful long hair for twenty dollars and used it to buy the watch chain.",
      },
      {
        id: "gm-q3",
        prompt: "Why was Jim's gift a surprise at the end?",
        options: [
          "He had bought combs for the hair Della had just sold.",
          "He had forgotten that it was Christmas.",
          "He had bought her a new brown coat.",
          "He had made the gift with his own hands.",
        ],
        correctIndex: 0,
        explanation:
          "Jim had sold his gold watch to buy combs for Della's long hair — the same hair she had sold to buy his watch chain.",
      },
    ],
  },
  {
    slug: "story-of-an-hour",
    title: "The Story of an Hour",
    titleTranslation: "한 시간의 이야기",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Kate Chopin (1850–1904)",
    coverEmoji: "🕊️",
    coverImage: "/covers/story-of-an-hour.svg",
    source:
      "Adapted from Kate Chopin's short story \"The Story of an Hour\" (first published 1894; long in the public domain). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how Mrs. Mallard felt while she was alone in her room, and how the story ends.",
    paragraphs: [
      [
        {
          id: "sh-1",
          text: "Mrs. Mallard had a weak heart, so her sister broke the news to her as gently as she could.",
          translation: "맬러드 부인은 심장이 약했기 때문에, 언니가 최대한 조심스럽게 소식을 전했어요.",
        },
        {
          id: "sh-2",
          text: "There had been a train accident, and her husband, Brently, was among those who had died.",
          translation: "기차 사고가 있었는데, 남편 브렌틀리가 사망자들 중에 있었어요.",
        },
      ],
      [
        {
          id: "sh-3",
          text: "She began to cry at once, with sudden, wild sadness, in her sister's arms.",
          translation: "부인은 곧바로 언니의 품에 안겨, 걷잡을 수 없는 슬픔에 격하게 울기 시작했어요.",
        },
        {
          id: "sh-4",
          text: "Then she went up to her room alone and asked everyone not to follow her.",
          translation: "그러고는 혼자 방으로 올라가, 아무도 따라오지 말라고 했어요.",
        },
      ],
      [
        {
          id: "sh-5",
          text: "She sank into a wide armchair in front of the open window.",
          translation: "부인은 열린 창문 앞에 놓인 커다란 안락의자에 깊이 몸을 파묻었어요.",
        },
        {
          id: "sh-6",
          text: "Outside, the tops of the trees were bright with new spring leaves, and the air smelled of rain.",
          translation: "창밖에는 나무 꼭대기마다 봄의 새잎이 돋아 환했고, 공기에서는 비 냄새가 났어요.",
        },
        {
          id: "sh-7",
          text: "Here and there, patches of blue sky showed between the clouds.",
          translation: "구름 사이로 파란 하늘이 군데군데 보였어요.",
        },
      ],
      [
        {
          id: "sh-8",
          text: "As she sat there, a strange feeling came slowly toward her, and at first she was afraid of it.",
          translation: "그렇게 앉아 있는데 낯선 감정 하나가 천천히 다가왔고, 부인은 처음엔 그것이 두려웠어요.",
        },
        {
          id: "sh-9",
          text: "Then she stopped fighting it, and one word broke softly from her lips: \"Free.\"",
          translation: "이윽고 부인은 맞서기를 그만두었고, 입술에서 한 마디가 조용히 새어 나왔어요. \"자유.\"",
        },
        {
          id: "sh-10",
          text: "She saw a long line of years ahead that would belong to her alone.",
          translation: "앞으로 오롯이 자기만의 것이 될 긴 세월이 눈앞에 펼쳐졌어요.",
        },
      ],
      [
        {
          id: "sh-11",
          text: "She had loved her husband — sometimes. Often she had not.",
          translation: "부인은 남편을 사랑했어요. 때로는요. 사랑하지 않은 때도 많았고요.",
        },
        {
          id: "sh-12",
          text: "But that seemed small now beside this new sense of freedom.",
          translation: "하지만 그것은 이 새로운 자유의 느낌 앞에서는 이제 사소하게만 느껴졌어요.",
        },
        {
          id: "sh-13",
          text: "Her sister knelt outside the locked door and begged her to come out.",
          translation: "언니는 잠긴 문 앞에 무릎을 꿇고 앉아 나오라고 애원했어요.",
        },
      ],
      [
        {
          id: "sh-14",
          text: "At last she opened the door, her eyes bright, and walked downstairs with her sister.",
          translation: "마침내 부인은 문을 열었고, 눈을 반짝이며 언니와 함께 아래층으로 내려갔어요.",
        },
        {
          id: "sh-15",
          text: "Just then the front door opened, and Brently walked in, alive and well.",
          translation: "바로 그때 현관문이 열리더니, 브렌틀리가 멀쩡히 살아서 걸어 들어왔어요.",
        },
        {
          id: "sh-16",
          text: "He had been nowhere near the accident and had not even heard of it.",
          translation: "그는 사고 근처에 있지도 않았고, 사고가 났다는 것조차 듣지 못했어요.",
        },
        {
          id: "sh-17",
          text: "Mrs. Mallard gave a sudden cry and fell. The doctors said her weak heart had stopped — killed, they said, by a joy too great to bear.",
          translation: "맬러드 부인은 짧은 비명을 지르며 쓰러졌어요. 의사들은 약한 심장이 멎었다고, 감당할 수 없이 큰 기쁨 때문이었다고 말했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "sh-v1",
        term: "gently",
        partOfSpeech: "adverb",
        translation: "부드럽게, 조심스럽게",
        example: "Her sister broke the news to her as gently as she could.",
        exampleTranslation: "언니는 최대한 조심스럽게 소식을 전했어요.",
      },
      {
        id: "sh-v2",
        term: "among",
        partOfSpeech: "preposition",
        translation: "~중에, ~에 속하여",
        example: "Her husband was among those who had died.",
        exampleTranslation: "남편은 사망한 사람들 중에 있었어요.",
      },
      {
        id: "sh-v3",
        term: "sink into",
        partOfSpeech: "phrasal verb",
        translation: "(의자 등에) 깊이 파묻히듯 앉다",
        example: "She sank into a wide armchair by the window.",
        exampleTranslation: "부인은 창가의 커다란 안락의자에 깊이 몸을 파묻었어요.",
      },
      {
        id: "sh-v4",
        term: "freedom",
        partOfSpeech: "noun",
        translation: "자유",
        example: "She felt a new sense of freedom.",
        exampleTranslation: "부인은 새로운 자유의 느낌을 받았어요.",
      },
      {
        id: "sh-v5",
        term: "beg",
        partOfSpeech: "verb",
        translation: "애원하다, 간청하다",
        example: "Her sister begged her to come out.",
        exampleTranslation: "언니는 부인에게 나오라고 애원했어요.",
      },
    ],
    questions: [
      {
        id: "sh-q1",
        prompt: "How did Mrs. Mallard first react to the news of her husband's death?",
        options: [
          "She refused to believe it.",
          "She cried at once in her sister's arms.",
          "She fainted and had to be carried upstairs.",
          "She went outside for a walk.",
        ],
        correctIndex: 1,
        explanation:
          "She wept at once, with sudden and wild sadness, and only afterward went up to her room alone.",
      },
      {
        id: "sh-q2",
        prompt: "What did Mrs. Mallard begin to feel while she sat alone by the window?",
        options: [
          "Fear that she would now be poor.",
          "Anger at her sister for telling her.",
          "A new sense of freedom about the years ahead.",
          "A wish to leave the house at once.",
        ],
        correctIndex: 2,
        explanation:
          "Alone in her room she whispered \"Free\" and saw a long line of years that would belong to her alone.",
      },
      {
        id: "sh-q3",
        prompt: "Why does Mrs. Mallard die at the end of the story?",
        options: [
          "Her husband really had died in the accident.",
          "She falls on the stairs while coming down.",
          "The shock of seeing her husband alive is too much for her weak heart.",
          "She had been seriously ill for many years.",
        ],
        correctIndex: 2,
        explanation:
          "Brently walks in unharmed. The doctors call it \"a joy too great to bear,\" though the story lets us wonder whether it was joy or the sudden loss of her new freedom.",
      },
    ],
  },
  {
    slug: "anne-of-green-gables",
    title: "Anne of Green Gables",
    titleTranslation: "빨간 머리 앤",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "L. M. Montgomery (1874–1942)",
    coverEmoji: "🌸",
    coverImage: "/covers/anne-of-green-gables.svg",
    source:
      "Adapted from Chapter 2 of L. M. Montgomery's novel \"Anne of Green Gables\" (first published 1908; public domain, Project Gutenberg #45). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what mistake happened at the station, and how Matthew felt about the girl by the time they reached Green Gables.",
    paragraphs: [
      [
        {
          id: "ag-1",
          text: "Matthew Cuthbert lived with his sister Marilla on a quiet farm called Green Gables.",
          translation: "매튜 커스버트는 여동생 마릴라와 함께 '초록지붕 집'이라는 조용한 농장에서 살았어요.",
        },
        {
          id: "ag-2",
          text: "Matthew was growing old, and the farm work was becoming too much for him alone.",
          translation: "매튜는 나이가 들어 가고 있었고, 혼자서 하기에 농장 일이 점점 벅차졌어요.",
        },
        {
          id: "ag-3",
          text: "So he and Marilla decided to adopt a boy from an orphanage to help them.",
          translation: "그래서 매튜와 마릴라는 일손을 도와줄 남자아이를 고아원에서 입양하기로 했어요.",
        },
      ],
      [
        {
          id: "ag-4",
          text: "One June afternoon, Matthew drove his horse and buggy to the little station to meet the boy.",
          translation: "어느 6월 오후, 매튜는 그 아이를 데리러 말이 끄는 마차를 몰고 작은 기차역으로 갔어요.",
        },
        {
          id: "ag-5",
          text: "But the stationmaster told him that no boy had come on the train.",
          translation: "그런데 역장은 기차에 남자아이는 오지 않았다고 말했어요.",
        },
        {
          id: "ag-6",
          text: "Instead, a girl of about eleven sat alone on the platform, waiting.",
          translation: "대신 열한 살쯤 되어 보이는 여자아이가 승강장에 혼자 앉아 기다리고 있었어요.",
        },
      ],
      [
        {
          id: "ag-7",
          text: "She had red hair in two long braids, a thin freckled face, and big eager eyes.",
          translation: "여자아이는 길게 두 갈래로 땋은 빨간 머리에, 주근깨가 가득한 마른 얼굴, 그리고 초롱초롱한 큰 눈을 하고 있었어요.",
        },
        {
          id: "ag-8",
          text: "Someone had made a mistake, but Matthew was too shy to explain it to her there.",
          translation: "누군가 실수를 한 것이 분명했지만, 매튜는 너무 수줍어서 그 자리에서 아이에게 사정을 설명하지 못했어요.",
        },
        {
          id: "ag-9",
          text: "He decided to take her home and let Marilla sort everything out.",
          translation: "매튜는 일단 아이를 집으로 데려가서 마릴라에게 모든 일을 맡기기로 했어요.",
        },
      ],
      [
        {
          id: "ag-10",
          text: "The girl jumped up and shook his hand, her face bright with happiness.",
          translation: "여자아이는 벌떡 일어나 매튜의 손을 잡고 흔들었고, 얼굴이 기쁨으로 환하게 빛났어요.",
        },
        {
          id: "ag-11",
          text: "She said that if no one had come, she had planned to climb the big cherry tree by the road and sleep there all night.",
          translation: "아이는 아무도 오지 않았다면 길가의 커다란 벚나무에 올라가 밤새 거기서 잘 생각이었다고 말했어요.",
        },
      ],
      [
        {
          id: "ag-12",
          text: "On the drive home, the girl talked without stopping.",
          translation: "집으로 가는 길 내내, 여자아이는 쉬지 않고 이야기했어요.",
        },
        {
          id: "ag-13",
          text: "She was so happy, because at last she was going to have a real home.",
          translation: "드디어 진짜 집이 생긴다는 사실에 아이는 몹시 행복했어요.",
        },
        {
          id: "ag-14",
          text: "When they passed a road lined with apple trees in white bloom, she went quiet for the first time.",
          translation: "하얀 꽃이 활짝 핀 사과나무가 늘어선 길을 지날 때, 아이는 처음으로 말을 멈췄어요.",
        },
        {
          id: "ag-15",
          text: "Then she said, \"A place this pretty needs a prettier name. I will call it the White Way of Delight.\"",
          translation: "그러더니 이렇게 말했어요. \"이렇게 예쁜 곳에는 더 예쁜 이름이 필요해요. 저는 여기를 '기쁨의 하얀 길'이라고 부를래요.\"",
        },
      ],
      [
        {
          id: "ag-16",
          text: "Matthew was a shy man, and he usually felt uncomfortable around girls.",
          translation: "매튜는 수줍은 사람이라, 평소에는 여자아이들 앞에서 늘 불편했어요.",
        },
        {
          id: "ag-17",
          text: "But to his surprise, he liked this one, and he hoped Marilla would let her stay.",
          translation: "하지만 뜻밖에도 이 아이는 마음에 들었고, 매튜는 마릴라가 아이를 곁에 두게 해 주기를 바랐어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "ag-v1",
        term: "adopt",
        partOfSpeech: "verb",
        translation: "입양하다",
        example: "They decided to adopt a boy from an orphanage.",
        exampleTranslation: "그들은 고아원에서 남자아이를 입양하기로 했어요.",
      },
      {
        id: "ag-v2",
        term: "orphanage",
        partOfSpeech: "noun",
        translation: "고아원",
        example: "The child came from an orphanage far away.",
        exampleTranslation: "그 아이는 멀리 떨어진 고아원에서 왔어요.",
      },
      {
        id: "ag-v3",
        term: "platform",
        partOfSpeech: "noun",
        translation: "(기차역의) 승강장, 플랫폼",
        example: "A girl sat alone on the station platform.",
        exampleTranslation: "한 여자아이가 역 승강장에 혼자 앉아 있었어요.",
      },
      {
        id: "ag-v4",
        term: "braid",
        partOfSpeech: "noun",
        translation: "땋은 머리",
        example: "Her red hair hung in two long braids.",
        exampleTranslation: "그녀의 빨간 머리는 두 갈래로 길게 땋여 있었어요.",
      },
      {
        id: "ag-v5",
        term: "shy",
        partOfSpeech: "adjective",
        translation: "수줍은, 부끄럼을 타는",
        example: "Matthew was too shy to talk to the girl.",
        exampleTranslation: "매튜는 너무 수줍어서 그 여자아이에게 말을 걸지 못했어요.",
      },
    ],
    questions: [
      {
        id: "ag-q1",
        prompt: "Why did Matthew and Marilla want to adopt a boy?",
        options: [
          "They wanted a playmate for a child they already had.",
          "Matthew was getting old and needed help with the farm work.",
          "They had always wanted a large family.",
          "A neighbor had asked them to take the child in.",
        ],
        correctIndex: 1,
        explanation:
          "Matthew was growing old, and running the Green Gables farm alone had become too much for him.",
      },
      {
        id: "ag-q2",
        prompt: "What did Matthew find at the station?",
        options: [
          "The train had arrived several hours late.",
          "The boy he expected had already gone home.",
          "A girl was waiting there instead of a boy.",
          "Marilla had come to meet him.",
        ],
        correctIndex: 2,
        explanation:
          "The stationmaster told him no boy had come — a red-haired girl of about eleven was sitting alone on the platform instead.",
      },
      {
        id: "ag-q3",
        prompt: "How did Matthew feel about the girl by the time they reached Green Gables?",
        options: [
          "He was annoyed by how much she talked.",
          "He had decided to take her back to the station the next day.",
          "He hoped Marilla would let her stay.",
          "He still had not spoken a single word to her.",
        ],
        correctIndex: 2,
        explanation:
          "Though Matthew was shy around girls, he found he liked this one and was hoping Marilla would agree to keep her.",
      },
    ],
  },
  {
    slug: "little-women",
    title: "Little Women",
    titleTranslation: "작은 아씨들",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Louisa May Alcott (1832–1888)",
    coverEmoji: "🕯️",
    coverImage: "/covers/little-women.svg",
    source:
      "Adapted from Chapter 1 of Louisa May Alcott's novel \"Little Women\" (first published 1868; public domain, Project Gutenberg #37106). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, say why the sisters felt sad at first, and what they decided to do with their money.",
    paragraphs: [
      [
        {
          id: "lw-1",
          text: "It was the night before Christmas, and the four March sisters sat around the fire.",
          translation: "크리스마스 전날 밤, 마치 가의 네 자매가 난롯가에 둘러앉아 있었어요.",
        },
        {
          id: "lw-2",
          text: "Their father was far away, helping the soldiers in the war, and money was short that year.",
          translation: "아버지는 멀리서 전쟁터의 군인들을 돕고 있었고, 그해에는 살림이 넉넉하지 않았어요.",
        },
        {
          id: "lw-3",
          text: "\"Christmas won't be Christmas without any presents,\" said Jo, lying on the rug.",
          translation: "\"선물도 없는데 크리스마스가 무슨 크리스마스야.\" 조가 양탄자에 드러누운 채 말했어요.",
        },
      ],
      [
        {
          id: "lw-4",
          text: "Meg, the oldest, sighed and looked down at her worn dress.",
          translation: "맏이인 메그는 한숨을 쉬며 낡은 원피스를 내려다봤어요.",
        },
        {
          id: "lw-5",
          text: "Shy little Beth said softly that they still had Father and Mother and each other.",
          translation: "수줍음 많은 막내 베스는 그래도 아버지와 어머니, 그리고 서로가 있지 않냐고 조용히 말했어요.",
        },
        {
          id: "lw-6",
          text: "But young Amy added that they had no money, and just then that felt very hard.",
          translation: "하지만 어린 에이미는 돈이 한 푼도 없다고 덧붙였고, 그 순간에는 그 사실이 무척 서럽게 느껴졌어요.",
        },
      ],
      [
        {
          id: "lw-7",
          text: "Each girl had one dollar, and each had planned to spend it on herself.",
          translation: "네 자매에게는 각자 1달러가 있었고, 저마다 그 돈을 자기 자신을 위해 쓸 생각이었어요.",
        },
        {
          id: "lw-8",
          text: "But their mother, whom they called Marmee, had a gentler idea.",
          translation: "그런데 자매들이 '마미'라고 부르는 어머니에게는 더 다정한 생각이 있었어요.",
        },
        {
          id: "lw-9",
          text: "Because the winter was hard and the soldiers were suffering, she asked them to spend nothing on themselves this year.",
          translation: "겨울은 혹독하고 군인들은 고생하고 있으니, 올해에는 자기 자신을 위해서는 아무것도 사지 말자고 하셨어요.",
        },
      ],
      [
        {
          id: "lw-10",
          text: "The sisters were quiet for a moment, and then Jo spoke up.",
          translation: "자매들은 잠시 말이 없다가, 조가 먼저 입을 열었어요.",
        },
        {
          id: "lw-11",
          text: "\"Let's each buy a present for Marmee, and nothing for ourselves,\" she said.",
          translation: "\"우리 각자 마미한테 드릴 선물을 사고, 우리 것은 사지 말자.\" 조가 말했어요.",
        },
        {
          id: "lw-12",
          text: "The others agreed at once, glad to have found a way to give.",
          translation: "다른 자매들도 곧바로 찬성했고, 무언가를 베풀 방법을 찾았다는 것이 기뻤어요.",
        },
      ],
      [
        {
          id: "lw-13",
          text: "That evening Marmee came home cold and tired, but with a letter from Father.",
          translation: "그날 저녁 마미는 춥고 지친 모습으로 집에 왔지만, 아버지의 편지를 가지고 왔어요.",
        },
        {
          id: "lw-14",
          text: "He wrote that he hoped his \"little women\" would be brave and kind and do their duty while he was gone.",
          translation: "아버지는 자신의 '작은 아씨들'이 용감하고 다정하게, 자기가 없는 동안 각자 할 일을 잘 해내기를 바란다고 썼어요.",
        },
        {
          id: "lw-15",
          text: "When he came home, he would love them and be proud of them more than ever.",
          translation: "그리고 집에 돌아오면 그 어느 때보다 딸들을 더 사랑하고 자랑스러워할 것이라고 했어요.",
        },
      ],
      [
        {
          id: "lw-16",
          text: "The girls tried not to cry, and each quietly promised to be a little better.",
          translation: "자매들은 눈물을 참으며, 저마다 조금 더 나은 사람이 되겠다고 조용히 다짐했어요.",
        },
        {
          id: "lw-17",
          text: "Then they sang together before bed, the way their mother loved best.",
          translation: "그러고는 잠자리에 들기 전, 어머니가 가장 좋아하는 대로 다 함께 노래를 불렀어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "lw-v1",
        term: "sigh",
        partOfSpeech: "verb",
        translation: "한숨을 쉬다",
        example: "Meg sighed and looked at her old dress.",
        exampleTranslation: "메그는 한숨을 쉬며 낡은 원피스를 바라봤어요.",
      },
      {
        id: "lw-v2",
        term: "worn",
        partOfSpeech: "adjective",
        translation: "낡은, 해진",
        example: "Her dress was old and worn.",
        exampleTranslation: "그녀의 원피스는 오래되고 해졌어요.",
      },
      {
        id: "lw-v3",
        term: "duty",
        partOfSpeech: "noun",
        translation: "해야 할 일, 본분",
        example: "Father asked them to do their duty while he was away.",
        exampleTranslation: "아버지는 자기가 없는 동안 각자 할 일을 해내라고 했어요.",
      },
      {
        id: "lw-v4",
        term: "suffer",
        partOfSpeech: "verb",
        translation: "고통받다, 고생하다",
        example: "Many soldiers were suffering in the cold.",
        exampleTranslation: "많은 군인이 추위 속에서 고생하고 있었어요.",
      },
      {
        id: "lw-v5",
        term: "proud",
        partOfSpeech: "adjective",
        translation: "자랑스러워하는",
        example: "He would be proud of his daughters when he came home.",
        exampleTranslation: "그는 집에 돌아오면 딸들을 자랑스러워할 거예요.",
      },
    ],
    questions: [
      {
        id: "lw-q1",
        prompt: "Why was there no money for presents that year?",
        options: [
          "The sisters had already spent all of it.",
          "Their father was away at the war and times were hard.",
          "Marmee had lost her work in the town.",
          "They had given every dollar to the soldiers.",
        ],
        correctIndex: 1,
        explanation:
          "Mr. March was far from home helping in the war, and the family had very little money that winter.",
      },
      {
        id: "lw-q2",
        prompt: "What did the sisters decide to do with their dollars?",
        options: [
          "Save them until Father came home.",
          "Buy small treats for themselves after all.",
          "Buy Christmas presents for Marmee instead.",
          "Send the money to their father.",
        ],
        correctIndex: 2,
        explanation:
          "Instead of spending on themselves, each sister chose to buy a present for their mother.",
      },
      {
        id: "lw-q3",
        prompt: "What did Father's letter ask of his \"little women\"?",
        options: [
          "To sell the house and move to the city.",
          "To write to him every single day.",
          "To be brave and kind and do their duty while he was gone.",
          "To stop singing so much in the evenings.",
        ],
        correctIndex: 2,
        explanation:
          "He hoped they would be good and do their duty, so that he could be proud of them when he returned.",
      },
    ],
  },
  {
    slug: "the-ugly-duckling",
    title: "The Ugly Duckling",
    titleTranslation: "미운 오리 새끼",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Hans Christian Andersen (1805–1875)",
    coverEmoji: "🦢",
    coverImage: "/covers/the-ugly-duckling.svg",
    source:
      "Adapted from Hans Christian Andersen's fairy tale \"The Ugly Duckling\" (first published 1843; long in the public domain, Project Gutenberg #1597). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why the other animals were unkind to the grey bird, and what he turned out to be.",
    paragraphs: [
      [
        {
          id: "ud-1",
          text: "One summer a mother duck sat on her nest, waiting for her eggs to hatch.",
          translation: "어느 여름, 어미 오리가 둥지에 앉아 알이 깨어나기를 기다리고 있었어요.",
        },
        {
          id: "ud-2",
          text: "One by one they broke open, and out came small yellow ducklings — all except the largest egg.",
          translation: "알은 하나씩 갈라졌고, 작고 노란 새끼 오리들이 나왔어요 — 가장 큰 알 하나만 빼고요.",
        },
        {
          id: "ud-3",
          text: "At last that one cracked too, and a big, grey, clumsy bird tumbled out.",
          translation: "마침내 그 알도 깨졌고, 크고 잿빛에 어설픈 새 한 마리가 굴러 나왔어요.",
        },
      ],
      [
        {
          id: "ud-4",
          text: "\"How ugly he is,\" said the other ducks, and they would not make room for him.",
          translation: "\"정말 못생겼네.\" 다른 오리들이 말하며 그에게 자리를 내주지 않았어요.",
        },
        {
          id: "ud-5",
          text: "His brothers and sisters pushed him away, the hens pecked him, and the girl who fed the birds pushed him aside with her foot.",
          translation: "친형제자매들마저 그를 밀쳐 냈고, 암탉들은 그를 쪼아 댔으며, 모이를 주는 여자아이는 발로 그를 밀어냈어요.",
        },
        {
          id: "ud-6",
          text: "Everywhere he went the animals laughed at him, so one day he ran away from the farm.",
          translation: "어디를 가든 동물들이 그를 비웃어서, 어느 날 그는 농장을 떠나 달아났어요.",
        },
      ],
      [
        {
          id: "ud-7",
          text: "He hid among the reeds by a lake, but the wild birds there thought he was strange too.",
          translation: "그는 호숫가 갈대밭에 숨었지만, 거기 사는 들새들도 그를 이상하게 여겼어요.",
        },
        {
          id: "ud-8",
          text: "Winter came, cold and lonely; the water froze, and he was often hungry.",
          translation: "겨울이 왔고, 춥고 외로웠어요. 물은 얼어붙었고 그는 자주 굶주렸어요.",
        },
        {
          id: "ud-9",
          text: "A farmer found him half-frozen and took him home, but the noisy children frightened him and he escaped again.",
          translation: "한 농부가 반쯤 얼어붙은 그를 발견해 집으로 데려갔지만, 시끄러운 아이들이 무서워서 그는 다시 달아났어요.",
        },
      ],
      [
        {
          id: "ud-10",
          text: "He lived through the long winter as best he could, hiding in the marsh.",
          translation: "그는 습지에 몸을 숨긴 채, 그 긴 겨울을 겨우겨우 견뎌 냈어요.",
        },
        {
          id: "ud-11",
          text: "Then the sun grew warm, the birds began to sing, and spring had come at last.",
          translation: "이윽고 햇살이 따뜻해지고 새들이 노래하기 시작했으며, 드디어 봄이 왔어요.",
        },
        {
          id: "ud-12",
          text: "On the bright water he saw three beautiful white swans gliding slowly toward him.",
          translation: "환하게 빛나는 물 위로, 아름다운 백조 세 마리가 천천히 그에게 다가오는 것이 보였어요.",
        },
      ],
      [
        {
          id: "ud-13",
          text: "\"I will go to them, even if such splendid birds drive me away,\" he thought.",
          translation: "\"저렇게 멋진 새들이 나를 쫓아낸다 해도, 나는 저들에게 가겠어.\" 그는 생각했어요.",
        },
        {
          id: "ud-14",
          text: "He bent his head low over the water — and in his reflection he saw not a grey bird, but a white swan.",
          translation: "그가 물 위로 고개를 깊이 숙이자 — 물에 비친 모습은 잿빛 새가 아니라 새하얀 백조였어요.",
        },
        {
          id: "ud-15",
          text: "The other swans swam around him and welcomed him as one of their own.",
          translation: "다른 백조들이 그의 주위를 헤엄치며, 그를 자기들의 일원으로 반겨 주었어요.",
        },
      ],
      [
        {
          id: "ud-16",
          text: "Children came to the water's edge and said the new swan was the most beautiful of them all.",
          translation: "아이들이 물가로 다가와, 새로 온 백조가 그중에서 가장 아름답다고 말했어요.",
        },
        {
          id: "ud-17",
          text: "He thought of the hard days and was glad: it did not matter that he was born in a duck yard, because he had come from a swan's egg.",
          translation: "그는 힘들었던 날들을 떠올리며 기뻐했어요. 오리 우리에서 태어난 것은 아무 상관이 없었어요. 백조의 알에서 나왔으니까요.",
        },
      ],
    ],
    vocab: [
      {
        id: "ud-v1",
        term: "hatch",
        partOfSpeech: "verb",
        translation: "(알이) 부화하다, 깨어나다",
        example: "She waited for her eggs to hatch.",
        exampleTranslation: "그녀는 알이 깨어나기를 기다렸어요.",
      },
      {
        id: "ud-v2",
        term: "clumsy",
        partOfSpeech: "adjective",
        translation: "어설픈, 서투른",
        example: "The big grey bird was clumsy on land.",
        exampleTranslation: "크고 잿빛인 그 새는 땅 위에서 어설펐어요.",
      },
      {
        id: "ud-v3",
        term: "peck",
        partOfSpeech: "verb",
        translation: "(부리로) 쪼다",
        example: "The hens pecked the poor bird.",
        exampleTranslation: "암탉들이 그 가엾은 새를 쪼아 댔어요.",
      },
      {
        id: "ud-v4",
        term: "lonely",
        partOfSpeech: "adjective",
        translation: "외로운",
        example: "The winter was cold and lonely.",
        exampleTranslation: "겨울은 춥고 외로웠어요.",
      },
      {
        id: "ud-v5",
        term: "reflection",
        partOfSpeech: "noun",
        translation: "(물이나 거울에) 비친 모습",
        example: "He saw his reflection in the water.",
        exampleTranslation: "그는 물에 비친 자기 모습을 보았어요.",
      },
    ],
    questions: [
      {
        id: "ud-q1",
        prompt: "Why did the farmyard animals treat the grey bird badly?",
        options: [
          "He ate far more food than the others.",
          "He was big and different, and they thought he was ugly.",
          "He could not swim like the ducklings.",
          "He had wandered in from another farm.",
        ],
        correctIndex: 1,
        explanation:
          "The other animals judged him by his looks — grey, large, and unlike the yellow ducklings — and called him ugly.",
      },
      {
        id: "ud-q2",
        prompt: "What happened to him during the winter?",
        options: [
          "The mother duck took him back in.",
          "He flew south with the wild birds.",
          "He was cold, hungry, and alone, and a farmer's children frightened him.",
          "He made friends with three swans on the ice.",
        ],
        correctIndex: 2,
        explanation:
          "He spent a hard, lonely winter near the frozen lake; a farmer took him in, but the children scared him and he fled.",
      },
      {
        id: "ud-q3",
        prompt: "What did the bird discover in the spring?",
        options: [
          "That he had grown into a swan.",
          "That the ducks missed him and wanted him back.",
          "That he could sing more sweetly than any other bird.",
          "That the lake was warmer on the far side.",
        ],
        correctIndex: 0,
        explanation:
          "Seeing his reflection, he realised he had become a white swan, and the other swans welcomed him.",
      },
    ],
  },
  {
    slug: "cinderella",
    title: "Cinderella",
    titleTranslation: "신데렐라",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "👠",
    coverImage: "/covers/cinderella.svg",
    source:
      "Adapted from the Brothers Grimm tale \"Cinderella\" (\"Aschenputtel,\" collected 1812; long in the public domain, Project Gutenberg #2591). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's harsher details have been softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, say who helped Cinderella get to the festival, and how the prince found her again afterwards.",
    paragraphs: [
      [
        {
          id: "cd-1",
          text: "A kind girl lived with her stepmother and two stepsisters.",
          translation: "마음씨 고운 소녀가 새어머니, 그리고 두 의붓언니와 함께 살았어요.",
        },
        {
          id: "cd-2",
          text: "They made her do all the hard work and sleep beside the warm ashes of the fire.",
          translation: "그들은 소녀에게 힘든 일을 모두 시키고, 난롯불의 따뜻한 잿더미 옆에서 자게 했어요.",
        },
        {
          id: "cd-3",
          text: "Because she was often grey with ash, they called her Cinderella.",
          translation: "소녀는 늘 재를 뒤집어써서 잿빛이었기 때문에, 사람들은 그녀를 신데렐라라고 불렀어요.",
        },
      ],
      [
        {
          id: "cd-4",
          text: "One day the king held a festival so the prince could choose a wife.",
          translation: "어느 날 임금님이 왕자님의 신붓감을 고르도록 잔치를 열었어요.",
        },
        {
          id: "cd-5",
          text: "The two stepsisters put on their best dresses and went.",
          translation: "두 의붓언니는 가장 좋은 드레스를 차려입고 잔치에 갔어요.",
        },
        {
          id: "cd-6",
          text: "Cinderella wanted to go too, but they only laughed at her.",
          translation: "신데렐라도 가고 싶었지만, 언니들은 그녀를 비웃기만 했어요.",
        },
      ],
      [
        {
          id: "cd-7",
          text: "She went to a little tree by her mother's grave and began to cry.",
          translation: "신데렐라는 어머니의 무덤가에 있는 작은 나무로 가서 울기 시작했어요.",
        },
        {
          id: "cd-8",
          text: "A white bird lived in the tree, and it dropped down a golden dress and shoes for her.",
          translation: "그 나무에는 하얀 새가 살고 있었는데, 새가 금빛 드레스와 구두를 떨어뜨려 주었어요.",
        },
        {
          id: "cd-9",
          text: "In the beautiful clothes, Cinderella looked so lovely that no one knew her.",
          translation: "아름다운 옷을 입은 신데렐라가 너무 고와서, 아무도 그녀를 알아보지 못했어요.",
        },
      ],
      [
        {
          id: "cd-10",
          text: "At the festival, the prince danced with her all evening and with no one else.",
          translation: "잔치에서 왕자님은 저녁 내내 다른 사람은 제쳐 두고 신데렐라하고만 춤을 췄어요.",
        },
        {
          id: "cd-11",
          text: "But each night she hurried home before he could ask her name.",
          translation: "하지만 신데렐라는 밤마다 왕자님이 이름을 묻기 전에 서둘러 집으로 돌아갔어요.",
        },
        {
          id: "cd-12",
          text: "On the last night she ran so fast that she lost one golden shoe on the stairs.",
          translation: "마지막 날 밤, 그녀는 너무 빨리 달리다가 금빛 구두 한 짝을 계단에 떨어뜨렸어요.",
        },
      ],
      [
        {
          id: "cd-13",
          text: "The prince said he would marry the girl whose foot fit the little shoe.",
          translation: "왕자님은 그 작은 구두가 발에 꼭 맞는 아가씨와 결혼하겠다고 했어요.",
        },
        {
          id: "cd-14",
          text: "He went from house to house, but no one's foot would fit.",
          translation: "왕자님은 집집마다 찾아다녔지만, 아무의 발에도 구두가 맞지 않았어요.",
        },
        {
          id: "cd-15",
          text: "The stepsisters tried hard, yet the shoe was far too small for them.",
          translation: "의붓언니들도 무척 애를 썼지만, 구두는 그들에게 너무 작았어요.",
        },
      ],
      [
        {
          id: "cd-16",
          text: "Then Cinderella tried it on, and it fit her foot perfectly.",
          translation: "그때 신데렐라가 구두를 신어 보니, 발에 꼭 맞았어요.",
        },
        {
          id: "cd-17",
          text: "The prince knew her at once, and took her home to be his bride.",
          translation: "왕자님은 그녀를 곧바로 알아보았고, 신부로 맞이하려고 그녀를 데려갔어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "cd-v1",
        term: "stepmother",
        partOfSpeech: "noun",
        translation: "새어머니, 계모",
        example: "She lived with her stepmother and stepsisters.",
        exampleTranslation: "그녀는 새어머니, 의붓언니들과 함께 살았어요.",
      },
      {
        id: "cd-v2",
        term: "ash",
        partOfSpeech: "noun",
        translation: "재",
        example: "She slept near the warm ash of the fire.",
        exampleTranslation: "그녀는 난롯불의 따뜻한 재 옆에서 잤어요.",
      },
      {
        id: "cd-v3",
        term: "festival",
        partOfSpeech: "noun",
        translation: "잔치, 축제",
        example: "The king held a festival at the palace.",
        exampleTranslation: "임금님이 궁전에서 잔치를 열었어요.",
      },
      {
        id: "cd-v4",
        term: "grave",
        partOfSpeech: "noun",
        translation: "무덤",
        example: "The little tree grew by her mother's grave.",
        exampleTranslation: "그 작은 나무는 어머니의 무덤가에서 자랐어요.",
      },
      {
        id: "cd-v5",
        term: "fit",
        partOfSpeech: "verb",
        translation: "(크기가) 맞다",
        example: "The golden shoe fit her foot perfectly.",
        exampleTranslation: "금빛 구두는 그녀의 발에 꼭 맞았어요.",
      },
    ],
    questions: [
      {
        id: "cd-q1",
        prompt: "Why was the girl called Cinderella?",
        options: [
          "It was the name her mother had given her.",
          "She was often covered in grey ash from the fire.",
          "She loved to sit and count the cinders.",
          "She came from a town called Cinder.",
        ],
        correctIndex: 1,
        explanation:
          "She had to sleep beside the ashes and was often grey with ash, so they called her Cinderella.",
      },
      {
        id: "cd-q2",
        prompt: "Who gave Cinderella the golden dress and shoes?",
        options: [
          "Her stepmother, who felt sorry for her.",
          "The prince, who sent them to her house.",
          "A white bird in the tree by her mother's grave.",
          "One of the kinder stepsisters.",
        ],
        correctIndex: 2,
        explanation:
          "She cried by the little tree on her mother's grave, and a white bird there dropped down the golden clothes.",
      },
      {
        id: "cd-q3",
        prompt: "How did the prince find Cinderella again?",
        options: [
          "She sent him a letter with her name.",
          "He knew her voice at the market.",
          "Her lost golden shoe fit only her foot.",
          "The white bird led him to her house.",
        ],
        correctIndex: 2,
        explanation:
          "Cinderella left one golden shoe on the stairs; the prince searched from house to house until he found the girl it fit.",
      },
    ],
  },
  {
    slug: "pride-and-prejudice",
    title: "Pride and Prejudice",
    titleTranslation: "오만과 편견",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Jane Austen (1775–1817)",
    coverEmoji: "🪭",
    coverImage: "/covers/pride-and-prejudice.svg",
    source:
      "Adapted from Chapter 1 of Jane Austen's novel \"Pride and Prejudice\" (first published 1813; long in the public domain, Project Gutenberg #1342). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, say what news Mrs. Bennet was so excited about, and why she wanted Mr. Bennet to visit their new neighbour.",
    paragraphs: [
      [
        {
          id: "pp-1",
          text: "It is a truth that nearly everyone accepts: a single man with a large fortune must be looking for a wife.",
          translation:
            "재산이 넉넉한 독신 남자라면 반드시 아내를 찾고 있기 마련이다 — 이것은 거의 모든 사람이 당연하게 여기는 진리였어요.",
        },
        {
          id: "pp-2",
          text: "So whenever such a man moves into a neighbourhood, the families nearby soon begin to see him as a husband for one of their daughters.",
          translation:
            "그래서 그런 남자가 어느 동네에 들어오면, 근처 집안들은 곧 그를 자기 딸들 가운데 하나의 신랑감으로 여기기 시작했어요.",
        },
        {
          id: "pp-3",
          text: "One day Mrs. Bennet came to her husband with exciting news: Netherfield Park, the big house nearby, had been rented at last.",
          translation:
            "어느 날 베넷 부인이 남편에게 반가운 소식을 가지고 왔어요. 근처의 큰 저택인 네더필드 파크가 드디어 세를 나갔다는 것이었어요.",
        },
      ],
      [
        {
          id: "pp-4",
          text: "\"Don't you want to know who has taken it?\" she asked, because her husband said nothing.",
          translation:
            "\"누가 들어왔는지 궁금하지도 않아요?\" 남편이 아무 말이 없자 부인이 물었어요.",
        },
        {
          id: "pp-5",
          text: "\"You want to tell me,\" he answered calmly, \"and I have no objection to hearing it.\"",
          translation:
            "\"당신은 나한테 말하고 싶어 하잖소.\" 남편이 태연하게 대답했어요. \"그리고 나도 그 얘기를 듣는 데 반대할 이유는 없고.\"",
        },
        {
          id: "pp-6",
          text: "That was invitation enough, and Mrs. Bennet happily told him everything.",
          translation: "그 말이면 충분한 허락이었고, 베넷 부인은 신이 나서 남편에게 모든 것을 이야기했어요.",
        },
      ],
      [
        {
          id: "pp-7",
          text: "The new neighbour was a young man named Mr. Bingley, from the north of England, and he was very rich.",
          translation:
            "새 이웃은 잉글랜드 북부에서 온 빙리 씨라는 젊은 남자였고, 아주 부유했어요.",
        },
        {
          id: "pp-8",
          text: "He had an income of four or five thousand pounds a year, and best of all, he was single.",
          translation:
            "그는 일 년에 사오천 파운드의 수입이 있었고, 무엇보다 좋은 것은 독신이라는 점이었어요.",
        },
        {
          id: "pp-9",
          text: "\"What a fine thing for our girls!\" cried Mrs. Bennet.",
          translation: "\"우리 딸들한테 얼마나 좋은 일이에요!\" 베넷 부인이 소리쳤어요.",
        },
      ],
      [
        {
          id: "pp-10",
          text: "\"How can that affect them?\" asked Mr. Bennet, though he understood her meaning very well.",
          translation:
            "\"그게 우리 딸들한테 무슨 영향이 있단 말이오?\" 베넷 씨가 물었지만, 그는 아내의 속뜻을 아주 잘 알고 있었어요.",
        },
        {
          id: "pp-11",
          text: "\"You know I am thinking of his marrying one of them,\" she said, \"so you must call on him as soon as he arrives.\"",
          translation:
            "\"그 사람이 우리 딸 중 하나와 결혼하는 걸 생각하고 있는 거잖아요.\" 부인이 말했어요. \"그러니 그 사람이 오자마자 당신이 찾아가서 인사를 해야 해요.\"",
        },
        {
          id: "pp-12",
          text: "In those days, the women of a family could not meet a new gentleman until the father had visited him first.",
          translation:
            "그 시절에는 아버지가 먼저 찾아가 인사를 해야만, 그 집 여자들이 새로 온 신사를 만날 수 있었어요.",
        },
      ],
      [
        {
          id: "pp-13",
          text: "Mr. Bennet liked to tease his wife, so he pretended he had no wish to go.",
          translation: "베넷 씨는 아내를 놀리기를 좋아해서, 갈 마음이 없는 척했어요.",
        },
        {
          id: "pp-14",
          text: "\"Send the girls on their own,\" he said, \"or go with them yourself — though you are so handsome that Mr. Bingley may like you best of the party.\"",
          translation:
            "\"딸들만 보내구려.\" 그가 말했어요. \"아니면 당신이 직접 같이 가든지. 하기야 당신이 어찌나 고운지, 빙리 씨가 그중에서 당신을 제일 마음에 들어 할지도 모르지.\"",
        },
        {
          id: "pp-15",
          text: "\"You take delight in vexing me,\" she replied. \"You have no pity for my poor nerves.\"",
          translation:
            "\"당신은 나를 약 올리는 게 그렇게 즐거워요?\" 부인이 대꾸했어요. \"내 가엾은 신경은 조금도 안쓰럽지 않은가 보군요.\"",
        },
      ],
      [
        {
          id: "pp-16",
          text: "\"You mistake me, my dear,\" he said gently. \"I have great respect for your nerves. They have been my old friends for twenty years.\"",
          translation:
            "\"오해하지 마시오, 여보.\" 그가 부드럽게 말했어요. \"나는 당신 신경을 아주 존중한다오. 이십 년 동안 나의 오랜 친구였는걸.\"",
        },
        {
          id: "pp-17",
          text: "Mrs. Bennet's one purpose in life was to see her daughters married; her clever, quiet, joking husband had puzzled her for three-and-twenty years.",
          translation:
            "베넷 부인이 인생에서 품은 단 하나의 목적은 딸들이 시집가는 것을 보는 일이었고, 영리하고 과묵하며 농담을 즐기는 남편은 스물세 해가 지나도록 부인에게는 알 수 없는 사람이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "pp-v1",
        term: "fortune",
        partOfSpeech: "noun",
        translation: "재산, 부(富)",
        example: "A single man with a large fortune must want a wife.",
        exampleTranslation: "재산이 많은 독신 남자는 아내를 원하기 마련이에요.",
      },
      {
        id: "pp-v2",
        term: "neighbourhood",
        partOfSpeech: "noun",
        translation: "동네, 인근 지역",
        example: "A rich young man had moved into the neighbourhood.",
        exampleTranslation: "부유한 젊은 남자가 그 동네로 이사 왔어요.",
      },
      {
        id: "pp-v3",
        term: "pretend",
        partOfSpeech: "verb",
        translation: "~인 척하다",
        example: "Mr. Bennet pretended he had no wish to go.",
        exampleTranslation: "베넷 씨는 갈 마음이 없는 척했어요.",
      },
      {
        id: "pp-v4",
        term: "tease",
        partOfSpeech: "verb",
        translation: "놀리다, 장난치다",
        example: "He liked to tease his wife at the dinner table.",
        exampleTranslation: "그는 식탁에서 아내를 놀리기를 좋아했어요.",
      },
      {
        id: "pp-v5",
        term: "vex",
        partOfSpeech: "verb",
        translation: "짜증 나게 하다, 약 올리다",
        example: "\"You take delight in vexing me,\" she said.",
        exampleTranslation: "\"당신은 나를 약 올리는 걸 즐기는군요,\" 부인이 말했어요.",
      },
    ],
    questions: [
      {
        id: "pp-q1",
        prompt: "What was the news that made Mrs. Bennet so excited?",
        options: [
          "Their daughter Jane had received a marriage proposal.",
          "A rich single man had rented Netherfield Park nearby.",
          "Mr. Bingley had already visited the Bennet family.",
          "The Bennets were going to move to the north of England.",
        ],
        correctIndex: 1,
        explanation:
          "Mrs. Bennet had just heard that Netherfield Park was let at last — to Mr. Bingley, a young man with a large fortune and, importantly, no wife.",
      },
      {
        id: "pp-q2",
        prompt: "Why did Mrs. Bennet want her husband to visit Mr. Bingley?",
        options: [
          "To borrow money from him for the household.",
          "To ask whether they could rent part of Netherfield.",
          "So that their daughters could then be introduced to him.",
          "To invite him to speak at the local church.",
        ],
        correctIndex: 2,
        explanation:
          "By the custom of the time, the women of a family could not meet a new gentleman until the father had called on him first, so Mr. Bennet's visit had to come before any match.",
      },
      {
        id: "pp-q3",
        prompt: "How does Mr. Bennet behave toward his wife in this scene?",
        options: [
          "He shares her excitement and offers to visit at once.",
          "He teases her, pretending he has no interest in Mr. Bingley.",
          "He grows angry and forbids her to mention the subject.",
          "He says nothing at all for the whole conversation.",
        ],
        correctIndex: 1,
        explanation:
          "Mr. Bennet enjoys joking at his wife's expense: he acts uninterested, suggests she go herself, and gently mocks her \"poor nerves.\"",
      },
    ],
  },
  {
    slug: "pride-and-prejudice-proposal",
    title: "Pride and Prejudice: The Proposal",
    titleTranslation: "오만과 편견: 첫 청혼",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Jane Austen (1775–1817)",
    coverEmoji: "💍",
    coverImage: "/covers/pride-and-prejudice-proposal.svg",
    source:
      "Adapted from Chapter 34 of Jane Austen's novel \"Pride and Prejudice\" (first published 1813; long in the public domain, Project Gutenberg #1342). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, say what Mr. Darcy offered Elizabeth in this scene, and give two reasons she gave for refusing him.",
    paragraphs: [
      [
        {
          id: "ppp-1",
          text: "That evening Elizabeth stayed alone at the parsonage while the others dined at Rosings, and she spent the time rereading Jane's letters.",
          translation:
            "그날 저녁 다른 사람들이 로징스에서 식사하는 동안 엘리자베스는 목사관에 혼자 남아, 언니 제인이 보낸 편지들을 다시 읽으며 시간을 보냈어요.",
        },
        {
          id: "ppp-2",
          text: "In every line she seemed to hear how low her sister's spirits were, and she blamed Mr. Darcy for it, since it was he who had drawn Mr. Bingley away from Netherfield and from Jane.",
          translation:
            "편지의 문장마다 언니의 가라앉은 마음이 느껴지는 듯했고, 엘리자베스는 그것이 다아시 씨 탓이라고 여겼어요. 빙리 씨를 네더필드에서, 그리고 제인에게서 떼어 놓은 사람이 바로 그였으니까요.",
        },
      ],
      [
        {
          id: "ppp-3",
          text: "The doorbell rang, and to her complete astonishment Mr. Darcy walked into the room.",
          translation:
            "초인종이 울렸고, 방으로 들어온 사람은 놀랍게도 다아시 씨였어요.",
        },
        {
          id: "ppp-4",
          text: "He asked hurriedly after her health, sat down for a moment, then rose again and paced about the room in silence.",
          translation:
            "그는 서둘러 그녀의 안부를 물은 뒤 잠시 앉았다가, 다시 일어나 말없이 방 안을 서성였어요.",
        },
        {
          id: "ppp-5",
          text: "At last he came toward her and said, \"In vain I have struggled. It will not do. You must allow me to tell you how ardently I admire and love you.\"",
          translation:
            "마침내 그는 그녀에게 다가와 말했어요. \"아무리 애를 써도 소용이 없습니다. 이대로는 안 되겠습니다. 제가 당신을 얼마나 뜨겁게 흠모하고 사랑하는지 말하게 해 주십시오.\"",
        },
      ],
      [
        {
          id: "ppp-6",
          text: "But he did not speak of love alone.",
          translation: "하지만 그는 사랑만을 이야기하지는 않았어요.",
        },
        {
          id: "ppp-7",
          text: "He spoke just as plainly of her family's lower rank, of the disgrace such a marriage would bring him, and of how long his judgement had fought against his heart.",
          translation:
            "그는 그녀 집안의 낮은 지위와, 그런 결혼이 자기에게 안겨 줄 수치와, 자신의 이성이 얼마나 오랫동안 마음에 맞서 싸워 왔는지를 그에 못지않게 솔직하게 늘어놓았어요.",
        },
        {
          id: "ppp-8",
          text: "He seemed quite sure that she would accept him.",
          translation: "그는 그녀가 자신의 청혼을 받아들이리라고 꽤 확신하는 듯했어요.",
        },
      ],
      [
        {
          id: "ppp-9",
          text: "Elizabeth's anger rose as she listened, but she tried at first to reply calmly.",
          translation:
            "엘리자베스는 그 말을 들으며 화가 치밀었지만, 처음에는 차분하게 대답하려고 애썼어요.",
        },
        {
          id: "ppp-10",
          text: "She said she was sorry to cause him pain, but that she had never sought his good opinion and could not accept his offer.",
          translation:
            "그녀는 그에게 고통을 주게 되어 미안하지만, 자신은 한 번도 그의 호의를 바란 적이 없으며 그 청혼을 받아들일 수 없다고 말했어요.",
        },
        {
          id: "ppp-11",
          text: "Darcy, leaning against the mantelpiece, went pale, and demanded to know why he was refused with so little courtesy.",
          translation:
            "벽난로 선반에 기대선 다아시는 얼굴이 창백해졌고, 어째서 이토록 예의 없이 거절당하는지 알아야겠다고 다그쳤어요.",
        },
      ],
      [
        {
          id: "ppp-12",
          text: "Elizabeth answered that he had just insulted her by saying he loved her against his will, against his reason, and against his own character.",
          translation:
            "엘리자베스는, 그가 자신의 뜻과 이성과 성품까지 거스르며 그녀를 사랑한다고 말한 것이야말로 방금 자신을 모욕한 것이라고 대꾸했어요.",
        },
        {
          id: "ppp-13",
          text: "Then she named her true reasons: that he had destroyed her beloved sister's happiness by parting her from Mr. Bingley, and that he had treated Mr. Wickham with cruelty and injustice.",
          translation:
            "그러고는 진짜 이유들을 하나하나 들었어요. 그가 사랑하는 언니를 빙리 씨와 갈라놓아 언니의 행복을 무너뜨렸고, 위컴 씨를 잔인하고 부당하게 대했다는 것이었어요.",
        },
        {
          id: "ppp-14",
          text: "Darcy did not deny either charge; he admitted he had worked to separate his friend from Jane, and only grew angrier that she should think so ill of him.",
          translation:
            "다아시는 두 가지 비난 중 어느 것도 부인하지 않았어요. 친구를 제인에게서 떼어 놓으려 애썼다는 것은 인정했고, 그녀가 자신을 그토록 나쁘게 여긴다는 사실에 오히려 더 화를 낼 뿐이었어요.",
        },
      ],
      [
        {
          id: "ppp-15",
          text: "\"You could not have made me the offer of your hand in any possible way that would have tempted me to accept it,\" she told him.",
          translation:
            "\"어떤 식으로 청혼하셨더라도, 제가 그 청을 받아들이고 싶어질 방법은 없었을 거예요.\" 그녀가 그에게 말했어요.",
        },
        {
          id: "ppp-16",
          text: "From almost the first moment she had known him, she said, his arrogance, his conceit, and his contempt for the feelings of others had made him the last man in the world she could ever be persuaded to marry.",
          translation:
            "그를 알게 된 거의 첫 순간부터, 그의 거만함과 자만심, 그리고 남의 감정을 하찮게 여기는 태도 때문에, 그는 이 세상에서 그녀가 도저히 결혼할 마음이 들지 않는 마지막 남자가 되었다고 그녀는 말했어요.",
        },
        {
          id: "ppp-17",
          text: "\"You have said quite enough, madam,\" Darcy replied; he wished her health and happiness, and left the house — and Elizabeth sat down and cried for half an hour.",
          translation:
            "\"충분히 말씀하셨습니다, 부인.\" 다아시가 대답했어요. 그는 그녀의 건강과 행복을 빈다는 말을 남기고 집을 나섰고, 엘리자베스는 주저앉아 삼십 분 동안 울었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "ppp-v1",
        term: "parsonage",
        partOfSpeech: "noun",
        translation: "목사관 (교구 목사가 사는 집)",
        example: "The Collinses lived in a small parsonage near Rosings.",
        exampleTranslation: "콜린스 부부는 로징스 근처의 작은 목사관에 살았어요.",
      },
      {
        id: "ppp-v2",
        term: "in vain",
        partOfSpeech: "phrase",
        translation: "헛되이, 아무리 애써도 소용없이",
        example: "In vain I have struggled; my feelings will not be silenced.",
        exampleTranslation: "아무리 애를 써도 소용이 없었습니다. 제 감정은 잠재워지지 않습니다.",
      },
      {
        id: "ppp-v3",
        term: "ardently",
        partOfSpeech: "adverb",
        translation: "열렬히, 뜨겁게",
        example: "He told Elizabeth how ardently he admired and loved her.",
        exampleTranslation: "그는 엘리자베스에게 자신이 그녀를 얼마나 열렬히 흠모하고 사랑하는지 말했어요.",
      },
      {
        id: "ppp-v4",
        term: "disgrace",
        partOfSpeech: "noun",
        translation: "수치, 불명예",
        example: "Darcy spoke of the disgrace that such a marriage would bring him.",
        exampleTranslation: "다아시는 그런 결혼이 자기에게 가져올 수치에 대해 말했어요.",
      },
      {
        id: "ppp-v5",
        term: "conceit",
        partOfSpeech: "noun",
        translation: "자만심, 우쭐함",
        example: "His pride and conceit made Elizabeth dislike him from the start.",
        exampleTranslation: "그의 자존심과 자만심 때문에 엘리자베스는 처음부터 그를 싫어했어요.",
      },
    ],
    questions: [
      {
        id: "ppp-q1",
        prompt: "Why had Elizabeth been rereading Jane's letters that evening?",
        options: [
          "To find Mr. Bingley's address so that she could write to him.",
          "To make herself feel even more angry with Mr. Darcy.",
          "Because Jane had asked her to send the letters back.",
          "To copy out passages from them for Mr. Collins.",
        ],
        correctIndex: 1,
        explanation:
          "She read the letters over on purpose, hearing her sister's low spirits in every line and blaming Darcy, who had drawn Bingley away from Jane.",
      },
      {
        id: "ppp-q2",
        prompt: "When Darcy proposed, what did he talk about besides his love for Elizabeth?",
        options: [
          "His plans to travel abroad for a year.",
          "How much her family would gain from the match.",
          "Her family's lower rank and the disgrace the marriage would bring him.",
          "The illness that had kept him away from Netherfield.",
        ],
        correctIndex: 2,
        explanation:
          "He dwelt openly on the inferiority of her connections and on how long his judgement had resisted his feelings, yet still expected her to accept him.",
      },
      {
        id: "ppp-q3",
        prompt: "What did Elizabeth accuse Darcy of when she refused him?",
        options: [
          "Lying about his fortune and insulting Mr. Collins.",
          "Separating Jane from Mr. Bingley and treating Mr. Wickham cruelly.",
          "Reading her private letters and mocking her in public.",
          "Refusing to dance with her and ignoring her younger sisters.",
        ],
        correctIndex: 1,
        explanation:
          "Beyond the ungracious manner of the proposal, she charged him with ruining Jane's happiness by parting her from Bingley and with the cruel, unjust treatment of Wickham; Darcy did not deny his part in the first.",
      },
    ],
  },
  {
    slug: "jane-eyre",
    title: "Jane Eyre",
    titleTranslation: "제인 에어",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Charlotte Brontë (1816–1855)",
    coverEmoji: "📕",
    coverImage: "/covers/jane-eyre.svg",
    source:
      "Adapted from Chapter 1 of Charlotte Brontë's novel \"Jane Eyre\" (first published 1847; long in the public domain, Project Gutenberg #1260). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how John Reed treated Jane in this scene, and what Jane did differently this time.",
    paragraphs: [
      [
        {
          id: "je-1",
          text: "There would be no walk that day: since morning a cold wind had driven the rain against the windows without stopping.",
          translation:
            "그날은 산책을 할 수 없었어요. 아침부터 찬 바람이 쉬지 않고 창문에 비를 몰아쳤거든요.",
        },
        {
          id: "je-2",
          text: "Jane Eyre was ten years old, an orphan, and lived with her aunt, Mrs. Reed, and her three cousins at a house called Gateshead.",
          translation:
            "제인 에어는 열 살 난 고아로, 이모인 리드 부인과 사촌 셋과 함께 게이츠헤드라는 집에서 살았어요.",
        },
        {
          id: "je-3",
          text: "That afternoon Mrs. Reed sat by the fire with her own children around her, and told Jane to keep away until she learned to behave like a pleasant, contented child.",
          translation:
            "그날 오후 리드 부인은 자기 아이들을 곁에 두고 난롯가에 앉아 있었고, 제인에게는 상냥하고 만족할 줄 아는 아이가 되는 법을 배우기 전까지는 가까이 오지 말라고 했어요.",
        },
      ],
      [
        {
          id: "je-4",
          text: "Jane was not sorry to be sent away.",
          translation: "제인은 쫓겨나도 서운하지 않았어요.",
        },
        {
          id: "je-5",
          text: "She slipped into the empty breakfast-room, took down a book full of pictures of birds, and climbed onto the window seat.",
          translation:
            "제인은 아무도 없는 아침 식사방으로 몰래 들어가, 새 그림이 가득한 책을 한 권 꺼내 들고 창가 자리에 올라앉았어요.",
        },
        {
          id: "je-6",
          text: "She pulled the heavy red curtain almost shut, so that she was hidden in her own small, quiet corner, half reading and half watching the grey rain outside.",
          translation:
            "제인은 두꺼운 빨간 커튼을 거의 닫아, 자기만의 작고 조용한 구석에 숨은 채, 반쯤은 책을 읽고 반쯤은 창밖의 잿빛 비를 바라보았어요.",
        },
      ],
      [
        {
          id: "je-7",
          text: "The peace did not last.",
          translation: "그 평온은 오래가지 않았어요.",
        },
        {
          id: "je-8",
          text: "John Reed, her fourteen-year-old cousin, was a large, rough boy who bullied Jane whenever he could, and no one in the house ever stopped him.",
          translation:
            "열네 살 난 사촌 존 리드는 덩치가 크고 거친 아이로, 기회만 있으면 제인을 괴롭혔지만, 집안의 누구도 그를 말리지 않았어요.",
        },
        {
          id: "je-9",
          text: "He hunted through the room, found her behind the curtain, and ordered her to come out and stand in front of him.",
          translation:
            "존은 방 안을 뒤지다가 커튼 뒤에 있는 제인을 찾아냈고, 나와서 자기 앞에 서라고 명령했어요.",
        },
      ],
      [
        {
          id: "je-10",
          text: "He reminded her that she had no money and no home of her own, and that she had no right to live with a gentleman's family or to touch his books.",
          translation:
            "존은 제인에게 돈도 없고 자기 집도 없으면서, 신사 집안과 함께 살거나 자기 책에 손댈 자격이 없다고 쏘아붙였어요.",
        },
        {
          id: "je-11",
          text: "Then he threw the heavy book straight at her.",
          translation: "그러고는 그 무거운 책을 제인에게 곧장 던졌어요.",
        },
        {
          id: "je-12",
          text: "It struck her, and she fell and cut her head against the door, so that it began to bleed.",
          translation:
            "책에 맞은 제인은 쓰러지면서 문에 머리를 부딪쳐 베였고, 피가 나기 시작했어요.",
        },
      ],
      [
        {
          id: "je-13",
          text: "Something in Jane broke that day, and for the first time she shouted back: \"You cruel, wicked boy — you are like a murderer!\"",
          translation:
            "그날 제인의 마음속에서 무언가가 무너졌고, 제인은 난생처음 소리쳐 대들었어요. \"이 잔인하고 못된 애 — 너는 살인자나 다름없어!\"",
        },
        {
          id: "je-14",
          text: "John rushed at her, seizing her hair and her shoulder, and this time she did not stay still — she fought him with her hands.",
          translation:
            "존이 제인에게 달려들어 머리채와 어깨를 움켜잡았지만, 이번에는 제인도 가만있지 않고 두 손으로 맞서 싸웠어요.",
        },
        {
          id: "je-15",
          text: "She hardly knew what her hands were doing; she felt only the blood on her face and a wild, reckless anger.",
          translation:
            "제인은 자기 손이 무엇을 하고 있는지도 잘 몰랐어요. 그저 얼굴에 흐르는 피와, 걷잡을 수 없이 무모한 분노만이 느껴졌어요.",
        },
      ],
      [
        {
          id: "je-16",
          text: "Two servants ran in and pulled the children apart, crying that Jane had flown at Master John like a mad thing.",
          translation:
            "하인 둘이 달려 들어와 아이들을 떼어 놓으며, 제인이 미친 아이처럼 존 도련님에게 덤벼들었다고 소리쳤어요.",
        },
        {
          id: "je-17",
          text: "Mrs. Reed did not ask what had happened; she only said, \"Take her away to the red-room, and lock her in,\" and Jane was carried off, still struggling.",
          translation:
            "리드 부인은 무슨 일이 있었는지 묻지도 않고, 그저 \"저 애를 붉은 방으로 데려가서 가둬 두어라\"라고만 했고, 제인은 여전히 발버둥 치며 끌려갔어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "je-v1",
        term: "bully",
        partOfSpeech: "verb",
        translation: "괴롭히다, 못살게 굴다",
        example: "John Reed bullied Jane whenever the adults were not watching.",
        exampleTranslation: "존 리드는 어른들이 보지 않을 때마다 제인을 괴롭혔어요.",
      },
      {
        id: "je-v2",
        term: "wicked",
        partOfSpeech: "adjective",
        translation: "사악한, 못된",
        example: "\"You cruel, wicked boy!\" Jane shouted.",
        exampleTranslation: "\"이 잔인하고 못된 애!\" 제인이 소리쳤어요.",
      },
      {
        id: "je-v3",
        term: "seize",
        partOfSpeech: "verb",
        translation: "와락 붙잡다, 움켜쥐다",
        example: "He seized her hair and pulled hard.",
        exampleTranslation: "존은 제인의 머리채를 움켜쥐고 세게 잡아당겼어요.",
      },
      {
        id: "je-v4",
        term: "reckless",
        partOfSpeech: "adjective",
        translation: "무모한, 앞뒤를 가리지 않는",
        example: "A wild, reckless anger made her forget her fear.",
        exampleTranslation: "걷잡을 수 없이 무모한 분노가 그녀에게 두려움을 잊게 했어요.",
      },
      {
        id: "je-v5",
        term: "struggle",
        partOfSpeech: "verb",
        translation: "몸부림치다, 발버둥 치다",
        example: "Jane was carried away, still struggling.",
        exampleTranslation: "제인은 여전히 발버둥 치며 끌려갔어요.",
      },
    ],
    questions: [
      {
        id: "je-q1",
        prompt: "Why was Jane sitting in the window seat behind the curtain?",
        options: [
          "Mrs. Reed had told her to stay away from the family until she behaved better.",
          "She was hiding from John Reed, who had been chasing her all morning.",
          "She wanted to watch her cousins playing outside in the rain.",
          "She had been shut in the room alone as a punishment.",
        ],
        correctIndex: 0,
        explanation:
          "Mrs. Reed had told Jane to keep her distance until she learned to seem pleasant and contented, so Jane found a quiet corner with a book of birds.",
      },
      {
        id: "je-q2",
        prompt: "What did John Reed say to Jane before he threw the book?",
        options: [
          "That he would tell Mrs. Reed she had been reading in secret.",
          "That she was poor, had no home of her own, and no right to his books.",
          "That she had to give the book back and say sorry to him.",
          "That she could keep the book if she did his lessons for him.",
        ],
        correctIndex: 1,
        explanation:
          "John reminded Jane that she was a penniless dependent with no claim on the family or on anything in the house.",
      },
      {
        id: "je-q3",
        prompt: "How was Jane's reaction this time different from usual?",
        options: [
          "She ran to Mrs. Reed for help instead of staying silent.",
          "She fought back and shouted at John for the first time.",
          "She managed to avoid him completely and was not hurt.",
          "She began to cry and refused to leave the window seat.",
        ],
        correctIndex: 1,
        explanation:
          "Jane normally bore John's bullying in silence; this time she called him cruel and wicked and struck back with her hands.",
      },
    ],
  },
  {
    slug: "the-selfish-giant",
    title: "The Selfish Giant",
    titleTranslation: "이기적인 거인",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Oscar Wilde (1854–1900)",
    coverEmoji: "🌳",
    coverImage: "/covers/the-selfish-giant.svg",
    source:
      "Adapted from Oscar Wilde's fairy tale \"The Selfish Giant\" (first published 1888 in \"The Happy Prince and Other Tales\"; long in the public domain, Project Gutenberg #902). This simplified retelling and its Korean translation are original text written for SeoJae Story; the story's final scene has been gently softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, say what the Giant did when he first came home, and what later changed his heart.",
    paragraphs: [
      [
        {
          id: "sg-1",
          text: "The Giant had a big, beautiful garden with soft green grass and sweet flowers.",
          translation:
            "거인에게는 부드러운 초록 잔디와 향기로운 꽃이 가득한, 크고 아름다운 정원이 있었어요.",
        },
        {
          id: "sg-2",
          text: "Every afternoon, on their way home from school, the children came to play there.",
          translation:
            "매일 오후, 아이들은 학교에서 집으로 가는 길에 그 정원에 들러 놀았어요.",
        },
        {
          id: "sg-3",
          text: "The Giant had been away for seven years, and now he came home and saw the children in his garden.",
          translation:
            "거인은 칠 년 동안 집을 떠나 있었는데, 이제 돌아와 보니 아이들이 자기 정원에서 놀고 있었어요.",
        },
      ],
      [
        {
          id: "sg-4",
          text: "\"My garden is my own garden,\" he shouted. \"No one may play here but me!\"",
          translation:
            "\"내 정원은 내 정원이야.\" 거인이 소리쳤어요. \"여기서는 나 말고 아무도 놀 수 없어!\"",
        },
        {
          id: "sg-5",
          text: "The Giant was selfish, so he built a high wall around the garden and put up a sign that said, \"Keep out.\"",
          translation:
            "거인은 이기적이어서, 정원 둘레에 높은 담을 쌓고 \"들어오지 마시오\"라고 쓴 팻말을 세웠어요.",
        },
        {
          id: "sg-6",
          text: "Now the children had nowhere to play, and the road outside was hard and full of dust and stones.",
          translation:
            "이제 아이들은 놀 곳이 없었고, 담 밖의 길은 딱딱하고 먼지와 돌투성이였어요.",
        },
      ],
      [
        {
          id: "sg-7",
          text: "Then Spring came to all the country, but in the Giant's garden it was still Winter.",
          translation:
            "이윽고 온 나라에 봄이 찾아왔지만, 거인의 정원만은 여전히 겨울이었어요.",
        },
        {
          id: "sg-8",
          text: "No birds sang there, the trees did not flower, and cold snow lay on the grass.",
          translation:
            "그곳에서는 새도 울지 않았고, 나무에는 꽃도 피지 않았으며, 차가운 눈이 잔디를 덮고 있었어요.",
        },
        {
          id: "sg-9",
          text: "\"I don't understand why Spring is so late,\" the Giant said, looking out at his white, empty garden.",
          translation:
            "\"봄이 왜 이렇게 늦는지 모르겠군.\" 거인은 하얗고 텅 빈 정원을 내다보며 말했어요.",
        },
      ],
      [
        {
          id: "sg-10",
          text: "One morning the Giant heard a little bird singing, and he saw that the children had crept back in through a small hole in the wall.",
          translation:
            "어느 아침 거인은 작은 새 한 마리가 지저귀는 소리를 들었고, 아이들이 담에 난 작은 구멍으로 몰래 다시 들어온 것을 보았어요.",
        },
        {
          id: "sg-11",
          text: "They were sitting in the trees, and on every branch where a child sat, the tree had burst into flowers again.",
          translation:
            "아이들은 나무에 올라앉아 있었고, 아이가 앉은 가지마다 나무가 다시 꽃을 활짝 피웠어요.",
        },
        {
          id: "sg-12",
          text: "But in one corner it was still cold, for a very small boy could not climb up, and he stood by the tree and cried.",
          translation:
            "하지만 한 구석은 여전히 추웠어요. 아주 작은 소년이 나무에 오르지 못한 채, 나무 옆에 서서 울고 있었거든요.",
        },
      ],
      [
        {
          id: "sg-13",
          text: "The Giant's heart grew soft; he went out quietly and lifted the little boy up into the tree, which at once broke into flowers.",
          translation:
            "거인의 마음이 부드러워졌어요. 거인은 조용히 밖으로 나가 그 작은 소년을 안아 나무 위에 올려 주었고, 나무는 곧바로 꽃을 활짝 피웠어요.",
        },
        {
          id: "sg-14",
          text: "\"It is your garden now, children,\" said the Giant, and he knocked the wall down with his great hammer.",
          translation:
            "\"이제 이 정원은 너희 것이란다, 얘들아.\" 거인은 이렇게 말하며 커다란 망치로 담을 허물었어요.",
        },
        {
          id: "sg-15",
          text: "He played with the children all afternoon, but the small boy he loved best was gone, and no one knew where he lived.",
          translation:
            "거인은 오후 내내 아이들과 놀았지만, 가장 아끼던 그 작은 소년은 사라졌고, 아무도 그 아이가 어디 사는지 몰랐어요.",
        },
      ],
      [
        {
          id: "sg-16",
          text: "Many years passed, and the Giant grew old and weak; then one winter morning he saw the little boy again, under a tree covered with soft white flowers.",
          translation:
            "여러 해가 지나 거인은 늙고 쇠약해졌어요. 그러던 어느 겨울 아침, 거인은 부드러운 하얀 꽃으로 뒤덮인 나무 아래에서 그 작은 소년을 다시 보았어요.",
        },
        {
          id: "sg-17",
          text: "\"You once let me play in your garden,\" the boy said with a smile. \"Today you will come and play in mine.\" That afternoon the children found the Giant lying still under the tree, a peaceful smile on his face, covered all over with white flowers.",
          translation:
            "\"예전에 아저씨가 저를 정원에서 놀게 해 주셨죠.\" 소년이 미소 지으며 말했어요. \"오늘은 아저씨가 제 정원에 오셔서 노실 차례예요.\" 그날 오후 아이들은 나무 아래에 조용히 누운 거인을 발견했어요. 얼굴에는 평온한 미소가 떠 있었고, 온몸이 하얀 꽃으로 뒤덮여 있었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "sg-v1",
        term: "selfish",
        partOfSpeech: "adjective",
        translation: "이기적인",
        example: "It was selfish to keep the whole garden for himself.",
        exampleTranslation: "정원을 통째로 자기만 쓰려고 한 것은 이기적이었어요.",
      },
      {
        id: "sg-v2",
        term: "wall",
        partOfSpeech: "noun",
        translation: "담, 벽",
        example: "He built a high wall around the garden.",
        exampleTranslation: "그는 정원 둘레에 높은 담을 쌓았어요.",
      },
      {
        id: "sg-v3",
        term: "climb",
        partOfSpeech: "verb",
        translation: "오르다, 기어오르다",
        example: "The little boy was too small to climb the tree.",
        exampleTranslation: "그 작은 소년은 너무 어려서 나무에 오르지 못했어요.",
      },
      {
        id: "sg-v4",
        term: "corner",
        partOfSpeech: "noun",
        translation: "구석, 모퉁이",
        example: "In one corner of the garden it was still winter.",
        exampleTranslation: "정원 한 구석은 여전히 겨울이었어요.",
      },
      {
        id: "sg-v5",
        term: "weak",
        partOfSpeech: "adjective",
        translation: "약한, 쇠약한",
        example: "The Giant grew old and weak.",
        exampleTranslation: "거인은 늙고 쇠약해졌어요.",
      },
    ],
    questions: [
      {
        id: "sg-q1",
        prompt: "Why did the Giant build a wall around his garden?",
        options: [
          "He wanted to keep the garden only for himself.",
          "He wanted to protect the flowers from the snow.",
          "The children had asked him to build it.",
          "He needed the stones from the road outside.",
        ],
        correctIndex: 0,
        explanation:
          "The Giant was selfish. He said the garden was his own and that no one else could play in it, so he shut the children out.",
      },
      {
        id: "sg-q2",
        prompt: "What happened to the garden while the children were shut out?",
        options: [
          "It grew larger and more beautiful than before.",
          "Spring never came, and it stayed cold and full of snow.",
          "The flowers bloomed there all year round.",
          "Other children climbed over the wall to play.",
        ],
        correctIndex: 1,
        explanation:
          "Spring came to the rest of the country, but the Giant's garden stayed in winter for as long as the children were kept out.",
      },
      {
        id: "sg-q3",
        prompt: "What brought Spring back to the garden?",
        options: [
          "The Giant paid workers to plant new trees.",
          "The snow and the cold wind simply grew tired and left.",
          "The children crept back in, and the Giant lifted the smallest boy into a tree.",
          "The weather slowly grew warmer as the year went on.",
        ],
        correctIndex: 2,
        explanation:
          "The trees flowered again wherever a child sat; the last cold corner warmed only after the Giant helped the little boy who could not climb.",
      },
    ],
  },
  {
    slug: "the-necklace",
    title: "The Necklace",
    titleTranslation: "목걸이",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Guy de Maupassant (1850–1893)",
    coverEmoji: "💎",
    coverImage: "/covers/the-necklace.svg",
    source:
      "Adapted from Guy de Maupassant's short story \"The Necklace\" (\"La Parure,\" first published 1884; long in the public domain). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what happened to the borrowed necklace, and what the Loisels did about it over the next ten years.",
    paragraphs: [
      [
        {
          id: "nk-1",
          text: "Mathilde was a pretty, charming woman, but she had been born into a poor family and had married a clerk with a small salary.",
          translation:
            "마틸드는 예쁘고 매력적인 여자였지만, 가난한 집안에서 태어나 월급이 적은 하급 공무원과 결혼했어요.",
        },
        {
          id: "nk-2",
          text: "She had always believed she deserved a life of luxury, and her plain flat, with its worn chairs and ugly curtains, made her unhappy every day.",
          translation:
            "마틸드는 자신이 원래 호화로운 삶을 누릴 사람이라고 늘 믿었기에, 낡은 의자와 보기 흉한 커튼이 있는 초라한 집이 날마다 그녀를 우울하게 했어요.",
        },
        {
          id: "nk-3",
          text: "She had one rich friend from her school days, Madame Forestier, but visiting her hurt so much that she rarely went.",
          translation:
            "학창 시절 친구 중에 부유한 포레스티에 부인이 한 명 있었지만, 그 집에 다녀오면 너무 마음이 아파서 마틸드는 좀처럼 찾아가지 않았어요.",
        },
      ],
      [
        {
          id: "nk-4",
          text: "One evening her husband came home proudly with an invitation to a grand party at the Ministry where he worked.",
          translation:
            "어느 날 저녁, 남편이 자기가 일하는 정부 부처에서 열리는 성대한 파티 초대장을 자랑스럽게 가지고 왔어요.",
        },
        {
          id: "nk-5",
          text: "Instead of being pleased, Mathilde began to cry, because she had no fine dress to wear.",
          translation:
            "그런데 마틸드는 기뻐하기는커녕 울기 시작했어요. 입고 갈 좋은 드레스가 없었거든요.",
        },
        {
          id: "nk-6",
          text: "Her husband gave her the four hundred francs he had been saving for a gun, and she bought a beautiful gown.",
          translation:
            "남편은 사냥총을 사려고 모아 둔 400프랑을 마틸드에게 주었고, 그녀는 아름다운 드레스를 한 벌 샀어요.",
        },
      ],
      [
        {
          id: "nk-7",
          text: "Still she was not happy, because she had no jewels, and she did not want to look poor among rich women.",
          translation:
            "그래도 마틸드는 행복하지 않았어요. 보석이 하나도 없어서, 부유한 여자들 사이에서 초라해 보이고 싶지 않았거든요.",
        },
        {
          id: "nk-8",
          text: "Her husband told her to borrow something from Madame Forestier, so Mathilde went to her the next day.",
          translation:
            "남편이 포레스티에 부인에게 뭔가 빌려 보라고 하자, 마틸드는 이튿날 그 집을 찾아갔어요.",
        },
        {
          id: "nk-9",
          text: "Among her friend's jewels she found a magnificent diamond necklace, and she borrowed it with a beating heart.",
          translation:
            "친구의 보석들 중에서 마틸드는 눈부신 다이아몬드 목걸이를 발견했고, 가슴을 두근거리며 그것을 빌렸어요.",
        },
      ],
      [
        {
          id: "nk-10",
          text: "At the party Mathilde was the most beautiful woman in the room; everyone looked at her, and she danced all night, lost in joy.",
          translation:
            "파티에서 마틸드는 그 자리에서 가장 아름다운 여자였어요. 모두가 그녀를 바라보았고, 그녀는 밤새 기쁨에 취해 춤을 췄어요.",
        },
        {
          id: "nk-11",
          text: "They reached home at four in the morning, and in front of the mirror she saw that the necklace was gone from her neck.",
          translation:
            "두 사람은 새벽 네 시에 집에 도착했는데, 거울 앞에 선 마틸드는 목에서 목걸이가 사라진 것을 보았어요.",
        },
        {
          id: "nk-12",
          text: "They searched everywhere and told the police, but the diamonds were never found.",
          translation:
            "부부는 온 사방을 뒤지고 경찰에도 알렸지만, 다이아몬드는 끝내 찾지 못했어요.",
        },
      ],
      [
        {
          id: "nk-13",
          text: "In a shop they found a necklace exactly like it, priced at thirty-six thousand francs.",
          translation:
            "한 상점에서 두 사람은 그것과 똑같이 생긴 목걸이를 찾았는데, 값이 3만 6천 프랑이었어요.",
        },
        {
          id: "nk-14",
          text: "Loisel used the little money his father had left him and borrowed the rest from money-lenders, promising to pay far more back.",
          translation:
            "루아젤은 아버지가 남겨 준 얼마 안 되는 돈을 쓰고, 나머지는 훨씬 많이 갚겠다고 약속하며 여기저기 고리대금업자들에게 빌렸어요.",
        },
        {
          id: "nk-15",
          text: "They gave the new necklace to Madame Forestier, who did not open the case, and then began ten hard years of paying back the debt.",
          translation:
            "부부는 새 목걸이를 포레스티에 부인에게 건넸고, 부인은 상자를 열어 보지 않았어요. 그리고 빚을 갚는 고단한 10년이 시작되었어요.",
        },
      ],
      [
        {
          id: "nk-16",
          text: "Mathilde learned to scrub floors, wash clothes, and argue over every coin; she grew old, hard, and strong, like any woman of a poor household.",
          translation:
            "마틸드는 바닥을 닦고 빨래를 하고 한 푼을 두고도 흥정하는 법을 배웠어요. 그렇게 그녀는 가난한 집 여자들이 다 그렇듯 늙고 억세고 거칠어졌어요.",
        },
        {
          id: "nk-17",
          text: "One day she met Madame Forestier, still young and lovely, and told her the whole story at last — and her friend, taking her hands, said softly, \"Oh, my poor Mathilde! My necklace was not real. It was worth five hundred francs at most.\"",
          translation:
            "어느 날 마틸드는 여전히 젊고 아름다운 포레스티에 부인을 만나 마침내 그동안의 일을 모두 이야기했어요. 그러자 친구는 그녀의 두 손을 잡으며 나직이 말했어요. \"아, 가엾은 마틸드! 내 목걸이는 진짜가 아니었어. 기껏해야 500프랑짜리였는걸.\"",
        },
      ],
    ],
    vocab: [
      {
        id: "nk-v1",
        term: "clerk",
        partOfSpeech: "noun",
        translation: "사무원, (하급) 공무원",
        example: "Her husband was a clerk with a small salary.",
        exampleTranslation: "그녀의 남편은 월급이 적은 하급 공무원이었어요.",
      },
      {
        id: "nk-v2",
        term: "luxury",
        partOfSpeech: "noun",
        translation: "사치, 호화로움",
        example: "She had always believed she deserved a life of luxury.",
        exampleTranslation: "그녀는 자신이 호화로운 삶을 누릴 자격이 있다고 늘 믿었어요.",
      },
      {
        id: "nk-v3",
        term: "borrow",
        partOfSpeech: "verb",
        translation: "빌리다",
        example: "Her husband told her to borrow something from Madame Forestier.",
        exampleTranslation: "남편은 그녀에게 포레스티에 부인에게서 뭔가 빌리라고 했어요.",
      },
      {
        id: "nk-v4",
        term: "magnificent",
        partOfSpeech: "adjective",
        translation: "대단히 멋진, 눈부신",
        example: "Among the jewels she found a magnificent necklace.",
        exampleTranslation: "보석들 중에서 그녀는 눈부신 목걸이를 발견했어요.",
      },
      {
        id: "nk-v5",
        term: "debt",
        partOfSpeech: "noun",
        translation: "빚, 부채",
        example: "Ten hard years of paying back the debt began.",
        exampleTranslation: "빚을 갚는 고단한 10년이 시작되었어요.",
      },
    ],
    questions: [
      {
        id: "nk-q1",
        prompt: "Why did Mathilde borrow a necklace from Madame Forestier?",
        options: [
          "Her own necklace had broken the week before.",
          "She had a fine new dress but no jewels to wear with it.",
          "Madame Forestier had asked her to keep it safe.",
          "She wanted to sell it and pay for the party.",
        ],
        correctIndex: 1,
        explanation:
          "Loisel had paid for a beautiful gown, but Mathilde felt she would look poor at the Ministry party without any jewels, so her husband suggested she borrow some.",
      },
      {
        id: "nk-q2",
        prompt: "What did the Loisels do after they lost the necklace?",
        options: [
          "They told Madame Forestier the truth at once and asked her to forgive them.",
          "They bought a matching necklace with borrowed money and said nothing.",
          "They left Paris so that no one would find out.",
          "They reported it to the police, who soon returned it.",
        ],
        correctIndex: 1,
        explanation:
          "They replaced it with a near-identical necklace costing thirty-six thousand francs, borrowed heavily to pay for it, and gave it back without admitting the loss.",
      },
      {
        id: "nk-q3",
        prompt: "What did Mathilde learn at the very end of the story?",
        options: [
          "Madame Forestier had known about the switch all along.",
          "The lost necklace had been found by a cab driver.",
          "The necklace she had replaced was fake, worth only about five hundred francs.",
          "Her husband had secretly kept some of the borrowed money.",
        ],
        correctIndex: 2,
        explanation:
          "After ten years of poverty spent repaying the debt, Madame Forestier tells her that the original necklace had been imitation, worth at most five hundred francs.",
      },
    ],
  },
  {
    slug: "a-christmas-carol",
    title: "A Christmas Carol",
    titleTranslation: "크리스마스 캐럴",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Ghost story",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Charles Dickens (1812–1870)",
    coverEmoji: "🕯️",
    coverImage: "/covers/a-christmas-carol.svg",
    source:
      "Adapted from Stave One (\"Marley's Ghost\") of Charles Dickens's novella \"A Christmas Carol\" (first published 1843; Project Gutenberg #46), long in the public domain. This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe who visited Scrooge on Christmas Eve and what warning that visitor gave him.",
    paragraphs: [
      [
        {
          id: "cc-1",
          text: "Jacob Marley had been dead for seven years, and Ebenezer Scrooge, his old business partner, was the only person who had come to his funeral.",
          translation:
            "제이컵 말리가 죽은 지 7년이 되었고, 그의 옛 동업자인 에버니저 스크루지는 그의 장례식에 온 유일한 사람이었어요.",
        },
        {
          id: "cc-2",
          text: "Scrooge was a hard, greedy old man, cold inside and out, who cared for nothing but money and kept every fire small to save coal.",
          translation:
            "스크루지는 냉정하고 탐욕스러운 노인이었어요. 속도 겉도 차가웠고, 돈 말고는 아무것도 아끼지 않았으며, 석탄을 아끼려고 어느 난롯불이든 늘 작게만 피웠어요.",
        },
        {
          id: "cc-3",
          text: "On a bitter, foggy Christmas Eve he sat working in his counting-house, while his clerk copied letters in a freezing little room with only one lump of coal on the fire.",
          translation:
            "몹시 춥고 안개 낀 어느 크리스마스이브에 그는 회계 사무실에서 일하고 있었고, 그의 서기는 난로에 석탄 한 덩이만 넣은 채 얼어붙을 듯 추운 작은 방에서 편지를 옮겨 적고 있었어요.",
        },
      ],
      [
        {
          id: "cc-4",
          text: "His cheerful nephew looked in to wish him a merry Christmas and to invite him to dinner the next day, but Scrooge only said, \"Bah! Humbug!\" and sent him away.",
          translation:
            "그의 쾌활한 조카가 잠깐 들러 메리 크리스마스 인사를 건네고 이튿날 저녁 식사에 초대했지만, 스크루지는 \"흥, 다 헛소리야!\"라고만 말하고 그를 돌려보냈어요.",
        },
        {
          id: "cc-5",
          text: "Then two kind gentlemen came in, collecting money for the poor, but Scrooge refused to give a single coin and told them the poor could go to the prisons and the workhouses.",
          translation:
            "그다음에는 친절한 신사 두 사람이 들어와 가난한 사람들을 위해 모금을 했지만, 스크루지는 동전 한 닢도 내주기를 거부하며 가난한 이들은 감옥이나 구빈원에나 가면 된다고 말했어요.",
        },
        {
          id: "cc-6",
          text: "When the day's work was over, he grudgingly let his clerk have Christmas Day off with pay, and then walked home through the fog to the gloomy rooms that had once been Marley's.",
          translation:
            "하루 일이 끝나자 그는 마지못해 서기에게 급여를 주면서 크리스마스 당일을 쉬게 해 주고는, 안개를 헤치고 예전에 말리가 살던 음침한 방으로 걸어갔어요.",
        },
      ],
      [
        {
          id: "cc-7",
          text: "As he put his key in the door, the knocker seemed to change into Marley's face, pale and staring, with spectacles pushed up on its ghostly forehead.",
          translation:
            "열쇠를 문에 꽂는 순간, 문고리가 말리의 얼굴로 변한 것처럼 보였어요. 창백하게 노려보는 얼굴이었고, 유령 같은 이마 위로 안경이 밀어 올려져 있었어요.",
        },
        {
          id: "cc-8",
          text: "He blinked, and it was only a knocker again; but upstairs, alone by his small fire, he heard a bell begin to ring by itself, and then a heavy clanking of chains coming up from below.",
          translation:
            "그가 눈을 깜박이자 그것은 다시 그냥 문고리일 뿐이었어요. 하지만 위층에서 작은 난롯불 앞에 홀로 있을 때, 종이 저절로 울리기 시작하더니 아래층에서 무거운 쇠사슬 소리가 철컹거리며 올라오는 것이 들렸어요.",
        },
        {
          id: "cc-9",
          text: "Straight through the closed door came the ghost of Jacob Marley, the same face Scrooge had known, but wound about with a long chain made of cash-boxes, keys, padlocks, ledgers, and heavy purses.",
          translation:
            "닫힌 문을 그대로 통과해 제이컵 말리의 유령이 들어왔어요. 스크루지가 알던 바로 그 얼굴이었지만, 돈궤와 열쇠, 자물쇠, 장부, 묵직한 돈주머니로 이어진 긴 쇠사슬이 몸을 칭칭 감고 있었어요.",
        },
      ],
      [
        {
          id: "cc-10",
          text: "Scrooge tried not to believe his eyes, saying the ghost might be nothing more than a bad piece of meat he had eaten, until the spirit gave a terrible cry and shook its chain so hard that Scrooge fell on his knees.",
          translation:
            "스크루지는 눈앞의 광경을 믿지 않으려고, 저 유령은 잘못 먹은 상한 고기 한 조각 때문일 뿐이라고 말했어요. 그러자 유령이 무시무시한 비명을 지르며 쇠사슬을 어찌나 세게 흔들었는지 스크루지는 무릎을 꿇고 말았어요.",
        },
        {
          id: "cc-11",
          text: "Marley explained that in life he had never looked beyond his own money, and so now he could find no rest: he was forced to wander the world and watch the people he could no longer help.",
          translation:
            "말리는 살아 있는 동안 자기 돈 너머를 한 번도 바라보지 않았기에 이제 안식을 얻지 못한다고 설명했어요. 그는 세상을 떠돌며, 이제는 도울 수 없는 사람들을 지켜봐야만 하는 신세였어요.",
        },
        {
          id: "cc-12",
          text: "\"This chain I wear, I made myself in life,\" he said, \"link by link — and yours was already longer and heavier than mine seven Christmas Eves ago.\"",
          translation:
            "\"내가 차고 있는 이 쇠사슬은 내가 살아서 직접 만든 거야,\" 그가 말했어요. \"한 고리 한 고리씩 말이지 — 그리고 네 것은 7년 전 크리스마스이브에 이미 내 것보다 더 길고 더 무거웠어.\"",
        },
      ],
      [
        {
          id: "cc-13",
          text: "He had come, he said, to warn Scrooge that there was still a chance to choose a different path, and that he would be haunted by three spirits.",
          translation:
            "그는 스크루지에게 아직 다른 길을 택할 기회가 남아 있다는 것을 경고하러 왔으며, 스크루지가 세 유령의 방문을 받게 될 거라고 말했어요.",
        },
        {
          id: "cc-14",
          text: "The first would come the next night when the bell struck one, the second the night after at the same hour, and the third when the last stroke of midnight had finished on the third night.",
          translation:
            "첫 번째 유령은 다음 날 밤 종이 한 시를 칠 때 오고, 두 번째 유령은 그다음 날 밤 같은 시각에, 세 번째 유령은 사흘째 되는 날 밤 자정을 알리는 마지막 종소리가 끝났을 때 온다고 했어요.",
        },
        {
          id: "cc-15",
          text: "Then Marley drew Scrooge to the window, and outside in the night air were crowds of moaning phantoms, each bound in chains, all of them wretched that they could no longer do any good among the living.",
          translation:
            "그러고 나서 말리는 스크루지를 창가로 데려갔는데, 밤공기 속 바깥에는 신음하는 유령들이 무리 지어 있었어요. 저마다 쇠사슬에 묶인 채, 이제 산 사람들 사이에서 아무런 선행도 할 수 없다는 사실에 모두가 비참해하고 있었어요.",
        },
      ],
      [
        {
          id: "cc-16",
          text: "The ghost floated backward out into the dark, and when Scrooge looked again the phantoms had faded and the night was silent.",
          translation:
            "유령은 뒤로 둥실 떠서 어둠 속으로 나갔고, 스크루지가 다시 바라보았을 때 유령들은 사라지고 밤은 고요했어요.",
        },
        {
          id: "cc-17",
          text: "Worn out by all he had seen, Scrooge stumbled to his bed without undressing and fell asleep the moment he lay down.",
          translation:
            "본 것에 완전히 지쳐 버린 스크루지는 옷도 벗지 않은 채 비틀비틀 침대로 가서, 눕자마자 잠이 들었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "cc-v1",
        term: "greedy",
        partOfSpeech: "adjective",
        translation: "탐욕스러운, 욕심 많은",
        example: "Scrooge was a hard, greedy old man who cared for nothing but money.",
        exampleTranslation: "스크루지는 돈 말고는 아무것에도 관심이 없는 냉정하고 탐욕스러운 노인이었어요.",
      },
      {
        id: "cc-v2",
        term: "refuse",
        partOfSpeech: "verb",
        translation: "거부하다, 거절하다",
        example: "Scrooge refused to give a single coin to the poor.",
        exampleTranslation: "스크루지는 가난한 사람들에게 동전 한 닢 주는 것도 거부했어요.",
      },
      {
        id: "cc-v3",
        term: "haunt",
        partOfSpeech: "verb",
        translation: "(유령이) 출몰하다; 계속 따라다니며 괴롭히다",
        example: "Marley warned that Scrooge would be haunted by three spirits.",
        exampleTranslation: "말리는 스크루지가 세 유령에게 시달리게 될 거라고 경고했어요.",
      },
      {
        id: "cc-v4",
        term: "chain",
        partOfSpeech: "noun",
        translation: "쇠사슬, 사슬",
        example: "The ghost was wound about with a long, heavy chain.",
        exampleTranslation: "그 유령은 길고 무거운 쇠사슬을 몸에 칭칭 감고 있었어요.",
      },
      {
        id: "cc-v5",
        term: "wander",
        partOfSpeech: "verb",
        translation: "헤매다, 떠돌다, 배회하다",
        example: "Marley was forced to wander the world without rest.",
        exampleTranslation: "말리는 쉬지도 못한 채 온 세상을 떠돌아야만 했어요.",
      },
    ],
    questions: [
      {
        id: "cc-q1",
        prompt: "How did Scrooge respond to his nephew's Christmas invitation?",
        options: [
          "He accepted it, but only if Marley's ghost could come too.",
          "He refused it, said \"Bah! Humbug!\", and sent his nephew away.",
          "He agreed to come as long as dinner was at his own house.",
          "He was too busy with the charity collectors to give an answer.",
        ],
        correctIndex: 1,
        explanation:
          "Scrooge's cheerful nephew looked in to invite him to dinner, but Scrooge dismissed Christmas as \"humbug\" and sent him off without accepting.",
      },
      {
        id: "cc-q2",
        prompt: "What was Marley's chain made of, and where had it come from?",
        options: [
          "Iron bars from the prisons, locked on him as a punishment.",
          "Gold coins he had stolen, handed to him by the other phantoms.",
          "Cash-boxes, keys, padlocks, and ledgers, which he had made himself in life.",
          "Church bells, which had grown around him after his death.",
        ],
        correctIndex: 2,
        explanation:
          "The ghost's chain was formed of cash-boxes, keys, padlocks, ledgers, and heavy purses — the tools of his money-getting — and Marley says he made it himself, link by link, while he was alive.",
      },
      {
        id: "cc-q3",
        prompt: "Why had Marley's ghost come to see Scrooge?",
        options: [
          "To ask Scrooge to pay off a debt Marley had left behind.",
          "To take Scrooge away with him that very night.",
          "To beg Scrooge to give his clerk a warmer room and more pay.",
          "To warn Scrooge that he could still change, and that three spirits would visit him.",
        ],
        correctIndex: 3,
        explanation:
          "Marley tells Scrooge he still has a chance to escape Marley's fate, and that he will be haunted by three spirits over the next three nights.",
      },
    ],
  },
  {
    slug: "the-lady-with-the-dog",
    title: "The Lady with the Dog",
    titleTranslation: "개를 데리고 다니는 부인",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Anton Chekhov (1860–1904)",
    coverEmoji: "🐩",
    coverImage: "/covers/the-lady-with-the-dog.svg",
    source:
      "Adapted from Part I of Anton Chekhov's short story \"The Lady with the Dog\" (\"Дама с собачкой,\" first published 1899; the English text on Project Gutenberg, #13415, is Constance Garnett's 1917 translation). The story is long in the public domain. This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how Gurov and Anna Sergeyevna first met in Yalta, and what Gurov thought of her once he was alone again.",
    paragraphs: [
      [
        {
          id: "ld-1",
          text: "People at Yalta were saying that a new face had appeared on the sea-front: a lady with a little dog.",
          translation:
            "얄타의 해안 산책로에 새로운 얼굴이 나타났다는 이야기가 사람들 사이에 돌고 있었어요. 작은 개를 데리고 다니는 어느 부인이었어요.",
        },
        {
          id: "ld-2",
          text: "Dmitri Gurov, who had already spent two weeks in the town and was thoroughly bored, had begun to take an interest in everyone who was new.",
          translation:
            "이미 그 도시에서 두 주를 보내며 완전히 지루해져 있던 드미트리 구로프는, 새로 오는 사람이라면 누구에게나 관심을 갖기 시작한 참이었어요.",
        },
        {
          id: "ld-3",
          text: "From a table outside a café he watched the fair-haired young woman walk past along the water, a white Pomeranian trotting after her.",
          translation:
            "카페 밖 탁자에 앉아 그는 금발의 젊은 여인이 물가를 따라 지나가는 모습을 바라보았고, 하얀 포메라니안 한 마리가 그 뒤를 종종거리며 따라가고 있었어요.",
        },
      ],
      [
        {
          id: "ld-4",
          text: "Gurov was not yet forty, but he already had a daughter of twelve and two sons at school.",
          translation:
            "구로프는 아직 마흔이 되지 않았지만, 벌써 열두 살 난 딸 하나와 학교에 다니는 아들 둘이 있었어요.",
        },
        {
          id: "ld-5",
          text: "He had married young, and by now his wife seemed almost twice his age: a tall, serious woman who read a great deal and thought of herself as clever.",
          translation:
            "그는 젊어서 결혼했고, 이제 그의 아내는 그보다 거의 두 배는 나이 들어 보였어요. 책을 많이 읽고 스스로 똑똑하다고 여기는, 키가 크고 진지한 여자였어요.",
        },
        {
          id: "ld-6",
          text: "He privately thought her narrow and dull, was a little afraid of her, and did not like to be at home.",
          translation:
            "그는 속으로 아내가 속이 좁고 따분하다고 생각했고, 그녀를 조금 두려워했으며, 집에 있는 것을 좋아하지 않았어요.",
        },
      ],
      [
        {
          id: "ld-7",
          text: "He had been unfaithful to her for years, and often, and he had picked up the habit of speaking of women unkindly, calling them \"the lower race.\"",
          translation:
            "그는 여러 해 동안, 그것도 자주 아내를 두고 바람을 피워 왔고, 여자들을 \"열등한 족속\"이라 부르며 함부로 말하는 버릇이 들어 있었어요.",
        },
        {
          id: "ld-8",
          text: "And yet he could not get through two days without them; among men he was bored and stiff, but with women he felt free and knew exactly what to say.",
          translation:
            "그러면서도 그는 여자들 없이는 이틀도 견디지 못했어요. 남자들 사이에서는 지루하고 서먹했지만, 여자들과 있으면 마음이 편했고 무슨 말을 해야 할지 정확히 알았어요.",
        },
        {
          id: "ld-9",
          text: "Something in his looks and his manner attracted women, and he knew it.",
          translation:
            "그의 외모와 태도에는 여자들을 끌어당기는 무언가가 있었고, 그는 그것을 알고 있었어요.",
        },
      ],
      [
        {
          id: "ld-10",
          text: "One evening, while he was dining in the public gardens, the woman in the béret came over and sat down at the next table.",
          translation:
            "어느 날 저녁, 그가 공원 식당에서 저녁을 먹고 있을 때, 베레모를 쓴 그 여인이 다가와 옆 탁자에 앉았어요.",
        },
        {
          id: "ld-11",
          text: "Her expression, her walk, and her dress all told him that she was married, that she was travelling alone, and that she was not enjoying herself.",
          translation:
            "그녀의 표정과 걸음걸이, 옷차림 모두가 그에게 말해 주었어요. 그녀가 결혼했고, 혼자 여행 중이며, 조금도 즐거워하지 않는다는 것을요.",
        },
        {
          id: "ld-12",
          text: "He beckoned to the little dog, and when it came near he wagged his finger at it; the dog growled, and the woman said quickly, \"He doesn't bite,\" and blushed.",
          translation:
            "그가 작은 개를 손짓해 불렀고, 개가 가까이 오자 손가락을 흔들어 겁을 주었어요. 개가 으르렁대자 여인은 얼른 \"물지 않아요\"라고 말하고는 얼굴을 붉혔어요.",
        },
      ],
      [
        {
          id: "ld-13",
          text: "He asked whether he might give the dog a bone, and with that the two of them began to talk.",
          translation:
            "그가 개에게 뼈다귀를 하나 줘도 되겠느냐고 물었고, 그 말로 두 사람은 이야기를 시작했어요.",
        },
        {
          id: "ld-14",
          text: "She told him that she had grown up in Petersburg but had married and moved to the town of S—, where she had lived for two years, and that her name was Anna Sergeyevna.",
          translation:
            "그녀는 페테르부르크에서 자랐지만 결혼해서 S시로 옮겨 와 그곳에서 두 해를 살았다고, 그리고 자기 이름은 안나 세르게예브나라고 말했어요.",
        },
        {
          id: "ld-15",
          text: "She spoke of her husband vaguely, half-laughing that she could not even say for certain where it was that he worked.",
          translation:
            "그녀는 남편에 대해 어렴풋하게 이야기하며, 남편이 정확히 어디서 일하는지조차 확실히 말할 수 없다고 반쯤 웃으며 말했어요.",
        },
      ],
      [
        {
          id: "ld-16",
          text: "Later, alone in his room, he thought about her — how young she still seemed, how shy, how new to all of this — and he felt certain he would meet her again the next day.",
          translation:
            "나중에 방에 혼자 있을 때 그는 그녀를 생각했어요. 그녀가 아직 얼마나 어려 보이는지, 얼마나 수줍어하는지, 이 모든 것에 얼마나 서툰지를요. 그리고 다음 날 그녀를 다시 만나게 되리라고 확신했어요.",
        },
        {
          id: "ld-17",
          text: "\"There is something pathetic about her, all the same,\" he thought, and fell asleep.",
          translation:
            "\"그래도 저 여자에게는 어딘가 가여운 데가 있어,\" 그는 그렇게 생각하며 잠이 들었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "ld-v1",
        term: "unfaithful",
        partOfSpeech: "adjective",
        translation: "부정한, 바람을 피우는",
        example: "Gurov had been unfaithful to his wife for years before he came to Yalta.",
        exampleTranslation: "구로프는 얄타에 오기 전부터 여러 해 동안 아내를 두고 바람을 피워 왔어요.",
      },
      {
        id: "ld-v2",
        term: "dull",
        partOfSpeech: "adjective",
        translation: "따분한, 재미없는",
        example: "He thought his wife was narrow and dull, and he avoided being at home.",
        exampleTranslation: "그는 아내가 속이 좁고 따분하다고 생각했고, 집에 있는 것을 피했어요.",
      },
      {
        id: "ld-v3",
        term: "blush",
        partOfSpeech: "verb",
        translation: "얼굴을 붉히다, 얼굴이 빨개지다",
        example: "The young woman blushed and said that the dog would not bite.",
        exampleTranslation: "젊은 여인은 얼굴을 붉히며 개가 물지 않을 거라고 말했어요.",
      },
      {
        id: "ld-v4",
        term: "attract",
        partOfSpeech: "verb",
        translation: "(마음을) 끌다, 끌어당기다",
        example: "Something in his manner attracted women, and he was well aware of it.",
        exampleTranslation: "그의 태도에는 여자들을 끌어당기는 무언가가 있었고, 그는 그것을 잘 알고 있었어요.",
      },
      {
        id: "ld-v5",
        term: "pathetic",
        partOfSpeech: "adjective",
        translation: "가여운, 애처로운",
        example: "Alone in his room, he decided there was something pathetic about her.",
        exampleTranslation: "방에 혼자 있을 때, 그는 그녀에게 어딘가 가여운 데가 있다고 생각했어요.",
      },
    ],
    questions: [
      {
        id: "ld-q1",
        prompt: "Why had Gurov started paying attention to newcomers like the lady with the dog?",
        options: [
          "He was expecting friends from Moscow to arrive at the resort.",
          "He had been in Yalta about two weeks and was bored.",
          "His wife had asked him to make new friends while he was away.",
          "He was hoping to meet someone who could help his career.",
        ],
        correctIndex: 1,
        explanation:
          "Gurov had already been a fortnight at Yalta and had grown bored, so he had begun taking an interest in every new face on the sea-front.",
      },
      {
        id: "ld-q2",
        prompt: "How does Part I describe Gurov's marriage and home life?",
        options: [
          "He adored his wife but was forced to travel constantly for work.",
          "He had married for money and openly quarrelled with his wife.",
          "He had married young, thought his wife dull, and disliked being at home.",
          "He and his wife had quietly agreed to spend the year apart.",
        ],
        correctIndex: 2,
        explanation:
          "Gurov married while he was still young; by now he considered his wife narrow and dull, was slightly afraid of her, and preferred not to be at home.",
      },
      {
        id: "ld-q3",
        prompt: "How does Gurov's first evening with Anna Sergeyevna end?",
        options: [
          "Her husband appears at the gardens and leads her away.",
          "She is offended by him and refuses to say another word.",
          "They agree to leave Yalta together the next morning.",
          "They say good night, and alone in his room he thinks about her and expects to see her again.",
        ],
        correctIndex: 3,
        explanation:
          "After talking over dinner they simply part for the night; back in his room Gurov reflects on how young and shy she seems, thinks there is \"something pathetic\" about her, and feels sure they will meet the next day.",
      },
    ],
  },
  {
    slug: "wuthering-heights",
    title: "Wuthering Heights",
    titleTranslation: "폭풍의 언덕",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Emily Brontë (1818–1848)",
    coverEmoji: "🪟",
    coverImage: "/covers/wuthering-heights.svg",
    source:
      "Adapted from Chapter 3 of Emily Brontë's novel \"Wuthering Heights\" (first published 1847, Project Gutenberg #768), long in the public domain. This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe what Lockwood found scratched on the bed and written in the old books, and what happened at the window in his dream.",
    paragraphs: [
      [
        {
          id: "wh-1",
          text: "Snow had shut me in at Wuthering Heights for the night, and a servant quietly led me to a bedroom that her master did not want anyone to use.",
          translation:
            "눈에 갇혀 그날 밤 나는 워더링 하이츠에서 묵게 되었고, 하녀가 주인이 아무도 쓰지 못하게 하던 침실로 나를 조용히 안내했어요.",
        },
        {
          id: "wh-2",
          text: "In it stood an old bed of dark oak, with tall panels that closed like the sides of a box around whoever lay inside.",
          translation:
            "그 방에는 검은 참나무로 만든 낡은 침대가 있었는데, 높은 판벽이 상자의 옆면처럼 그 안에 누운 사람을 에워싸며 닫히게 되어 있었어요.",
        },
        {
          id: "wh-3",
          text: "I set my candle on the wide ledge, and saw that the paint there was covered, over and over, with one name scratched into it: Catherine.",
          translation:
            "나는 촛불을 넓은 창턱 위에 올려놓았고, 그 위의 칠이 온통 한 이름으로 긁혀 새겨져 있는 것을 보았어요. 캐서린이라는 이름이었어요.",
        },
      ],
      [
        {
          id: "wh-4",
          text: "The name was written three ways — Catherine Earnshaw, Catherine Heathcliff, Catherine Linton — as if the girl who wrote it could not decide who she was.",
          translation:
            "그 이름은 세 가지로 적혀 있었어요. 캐서린 언쇼, 캐서린 히스클리프, 캐서린 린턴 — 마치 그것을 쓴 소녀가 자기가 누구인지 정하지 못한 것처럼요.",
        },
        {
          id: "wh-5",
          text: "A few old books lay on the ledge, and their margins were full of faded handwriting: a kind of diary, kept years before by a girl named Catherine Earnshaw.",
          translation:
            "창턱에는 낡은 책 몇 권이 놓여 있었고, 그 여백은 색이 바랜 손글씨로 가득했어요. 여러 해 전에 캐서린 언쇼라는 소녀가 쓴 일기 같은 것이었어요.",
        },
        {
          id: "wh-6",
          text: "I read the small, cramped lines until they blurred before my eyes, and then I fell asleep over the mouldy pages.",
          translation:
            "나는 작고 빽빽한 글줄이 눈앞에서 흐려질 때까지 읽다가, 곰팡이 낀 책장 위에 엎드려 잠이 들었어요.",
        },
      ],
      [
        {
          id: "wh-7",
          text: "A fir branch was tapping and scraping at the window in the wind, and in my dream I got up to stop the noise.",
          translation:
            "전나무 가지 하나가 바람에 창문을 두드리며 긁고 있었고, 꿈속에서 나는 그 소리를 멈추려고 일어났어요.",
        },
        {
          id: "wh-8",
          text: "I thought I broke the glass and reached out to seize the branch, but my fingers closed instead on a small, ice-cold hand.",
          translation:
            "나는 유리를 깨고 손을 뻗어 그 가지를 붙잡았다고 생각했어요. 그런데 내 손가락에 잡힌 것은 작고 얼음장처럼 차가운 손이었어요.",
        },
        {
          id: "wh-9",
          text: "A voice sobbed, \"Let me in — let me in!\", and a child's face, white with cold, looked at me through the dark glass.",
          translation:
            "어떤 목소리가 \"들여보내 줘 — 들여보내 줘!\" 하고 흐느꼈고, 추위로 하얗게 질린 아이의 얼굴이 어두운 유리창 너머로 나를 바라보고 있었어요.",
        },
      ],
      [
        {
          id: "wh-10",
          text: "\"Who are you?\" I asked, pulling to get free. \"Catherine Linton,\" it answered. \"I have come home. I lost my way on the moor.\"",
          translation:
            "\"너는 누구냐?\" 내가 벗어나려고 몸을 당기며 물었어요. \"캐서린 린턴이에요.\" 그것이 대답했어요. \"집에 돌아왔어요. 황야에서 길을 잃었어요.\"",
        },
        {
          id: "wh-11",
          text: "The little fingers held on, and the sobbing did not stop, and a helpless terror rose in me.",
          translation:
            "작은 손가락들은 놓지 않았고, 흐느낌도 그치지 않았으며, 어찌할 수 없는 공포가 내 안에서 치밀어 올랐어요.",
        },
        {
          id: "wh-12",
          text: "In my fear I pulled the thin wrist hard against the broken glass until the hand let go; then I piled the books against the hole and stopped my ears.",
          translation:
            "두려움에 나는 그 가는 손목을 깨진 유리에 세게 밀어붙여 손이 놓을 때까지 잡아당겼어요. 그러고는 그 구멍에 책을 쌓아 막고 두 귀를 틀어막았어요.",
        },
      ],
      [
        {
          id: "wh-13",
          text: "My own cry woke me — and it had not been silent, for I heard quick steps outside, and Heathcliff came in holding a light, his hand shaking.",
          translation:
            "내 비명 소리에 내가 깨어났는데, 그 소리는 조용하지 않았던 모양이었어요. 밖에서 빠른 발소리가 들리더니, 히스클리프가 등불을 든 채 손을 떨며 들어왔어요.",
        },
        {
          id: "wh-14",
          text: "Half ashamed, I told him the room was haunted, and that a ghost calling herself \"Catherine Linton, or Earnshaw\" had come to the window.",
          translation:
            "나는 반쯤 부끄러워하며 그에게 이 방에 유령이 나온다고, \"캐서린 린턴, 아니 언쇼\"라고 자기를 부르는 유령이 창가에 왔었다고 말했어요.",
        },
        {
          id: "wh-15",
          text: "To my astonishment he sank onto the bed and fought to control some strong feeling, then told me in a broken voice to leave the room.",
          translation:
            "놀랍게도 그는 침대에 주저앉아 어떤 북받치는 감정을 억누르려 애쓰더니, 갈라진 목소리로 방에서 나가 달라고 말했어요.",
        },
      ],
      [
        {
          id: "wh-16",
          text: "As I went out I looked back and saw him climb onto the bed, wrench the window open, and burst into tears.",
          translation:
            "내가 나가면서 뒤를 돌아보니, 그는 침대 위로 올라가 창문을 홱 열어젖히고는 왈칵 울음을 터뜨렸어요.",
        },
        {
          id: "wh-17",
          text: "\"Come in! Come in!\" he sobbed. \"Cathy, do come. Oh, do — once more! My heart's darling, hear me this time!\" But only the snow and the wind replied.",
          translation:
            "\"들어와! 들어와!\" 그가 흐느꼈어요. \"캐시, 제발 와 줘. 아, 제발 — 한 번만 더! 내 사랑, 이번엔 내 말을 들어 줘!\" 하지만 대답하는 것은 눈과 바람뿐이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "wh-v1",
        term: "haunted",
        partOfSpeech: "adjective",
        translation: "유령이 나오는, 귀신 들린",
        example: "Lockwood was sure the cold little room was haunted.",
        exampleTranslation: "록우드는 그 춥고 작은 방에 유령이 나온다고 확신했어요.",
      },
      {
        id: "wh-v2",
        term: "sob",
        partOfSpeech: "verb",
        translation: "흐느껴 울다",
        example: "A voice at the window sobbed that it wanted to be let in.",
        exampleTranslation: "창가의 어떤 목소리가 들여보내 달라고 흐느꼈어요.",
      },
      {
        id: "wh-v3",
        term: "seize",
        partOfSpeech: "verb",
        translation: "와락 붙잡다, 움켜쥐다",
        example: "He reached through the glass to seize the branch, but caught a cold hand instead.",
        exampleTranslation: "그는 유리 너머로 손을 뻗어 나뭇가지를 붙잡으려 했지만, 대신 차가운 손을 잡았어요.",
      },
      {
        id: "wh-v4",
        term: "moor",
        partOfSpeech: "noun",
        translation: "황야, 황무지 (히스가 자라는 넓은 들판)",
        example: "The ghost child said she had lost her way on the moor.",
        exampleTranslation: "유령 아이는 황야에서 길을 잃었다고 말했어요.",
      },
      {
        id: "wh-v5",
        term: "wrench",
        partOfSpeech: "verb",
        translation: "홱 잡아당기다, 비틀어 열다",
        example: "Heathcliff climbed onto the bed and wrenched the window open.",
        exampleTranslation: "히스클리프는 침대 위로 올라가 창문을 홱 열어젖혔어요.",
      },
    ],
    questions: [
      {
        id: "wh-q1",
        prompt: "Why was Lockwood spending the night in that particular bedroom?",
        options: [
          "Heathcliff had given him the largest and warmest guest room.",
          "A servant had quietly put him in a room her master kept unused.",
          "He had asked to sleep close to the kitchen fire.",
          "It was the only room whose window would still close.",
        ],
        correctIndex: 1,
        explanation:
          "Snowed in for the night, Lockwood was slipped into a disused, oak-panelled room by a servant, even though Heathcliff did not want anyone sleeping there.",
      },
      {
        id: "wh-q2",
        prompt: "In Lockwood's dream, what did he take hold of when he reached through the broken window?",
        options: [
          "The fir branch, which he pulled inside and snapped off.",
          "A small, ice-cold hand belonging to a child who begged to be let in.",
          "An iron latch that had frozen the window shut.",
          "Nothing — the window turned out to be nailed over with boards.",
        ],
        correctIndex: 1,
        explanation:
          "Instead of the branch, Lockwood's fingers closed on a little ice-cold hand; a sobbing voice — \"Catherine Linton\" — begged to come in, saying she had lost her way on the moor.",
      },
      {
        id: "wh-q3",
        prompt: "How does Heathcliff behave after Lockwood tells him about the ghost at the window?",
        options: [
          "He laughs it off as a traveller's foolish nightmare.",
          "He calmly examines the window and locks it for the night.",
          "He is overcome with feeling, sends Lockwood out, then throws the window open and calls to Catherine.",
          "He accuses Lockwood of inventing the story to leave early.",
        ],
        correctIndex: 2,
        explanation:
          "Heathcliff struggles with an emotion he cannot hide, orders Lockwood from the room, then climbs onto the bed, wrenches the window open, and sobs for Cathy to come to him.",
      },
    ],
  },
  {
    slug: "the-secret-garden",
    title: "The Secret Garden",
    titleTranslation: "비밀의 화원",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Frances Hodgson Burnett (1849–1924)",
    coverEmoji: "🗝️",
    coverImage: "/covers/the-secret-garden.svg",
    source:
      "Adapted from Chapter 1 of Frances Hodgson Burnett's novel \"The Secret Garden\" (first published 1911, Project Gutenberg #113), long in the public domain. This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why Mary was left alone in the house in India and what happened to her at the end of the chapter.",
    paragraphs: [
      [
        {
          id: "tsg-1",
          text: "Mary Lennox lived in India with her mother and father, but they did not want her, so she almost never saw them.",
          translation:
            "메리 레녹스는 인도에서 어머니, 아버지와 함께 살았지만, 부모님은 메리를 원하지 않아서 메리는 부모님을 거의 보지 못했어요.",
        },
        {
          id: "tsg-2",
          text: "An Indian servant she called her Ayah took care of her and gave her everything she asked for.",
          translation:
            "메리가 아야라고 부르던 인도인 하인이 메리를 돌봤고, 메리가 달라고 하는 것은 무엇이든 다 주었어요.",
        },
        {
          id: "tsg-3",
          text: "Because no one ever said no to her, Mary grew up cross, selfish, and unkind.",
          translation:
            "아무도 메리에게 안 된다고 말하지 않아서, 메리는 짜증이 많고 이기적이고 못된 아이로 자랐어요.",
        },
      ],
      [
        {
          id: "tsg-4",
          text: "One very hot morning Mary woke up and found a strange servant beside her bed instead of her Ayah.",
          translation:
            "몹시 더운 어느 날 아침, 메리는 잠에서 깨어 자기 아야 대신 낯선 하인이 침대 옆에 있는 것을 발견했어요.",
        },
        {
          id: "tsg-5",
          text: "\"Where is my Ayah?\" she asked, but the woman only looked frightened and hurried away.",
          translation:
            "\"내 아야는 어디 있어?\" 하고 메리가 물었지만, 그 여자는 겁먹은 얼굴로 서둘러 자리를 떠나기만 했어요.",
        },
        {
          id: "tsg-6",
          text: "All through the house people were whispering, and Mary's mother stood in the doorway, talking in a low, scared voice to a young officer.",
          translation:
            "집 안 곳곳에서 사람들이 소곤거렸고, 메리의 어머니는 문간에 서서 젊은 장교에게 낮고 겁에 질린 목소리로 이야기하고 있었어요.",
        },
      ],
      [
        {
          id: "tsg-7",
          text: "A terrible illness called cholera had come to the town, and people were dying very quickly.",
          translation:
            "콜레라라는 무서운 병이 그 마을에 들이닥쳤고, 사람들이 아주 빠르게 죽어 가고 있었어요.",
        },
        {
          id: "tsg-8",
          text: "That day the house filled with crying and running feet, and everyone forgot about Mary.",
          translation:
            "그날 집은 울음소리와 뛰어다니는 발소리로 가득 찼고, 모두가 메리를 잊어버렸어요.",
        },
        {
          id: "tsg-9",
          text: "She hid in her room, frightened and alone, and after a long time she cried herself to sleep.",
          translation:
            "메리는 무섭고 외로운 채로 방에 숨었고, 한참이 지난 뒤 울다가 잠이 들었어요.",
        },
      ],
      [
        {
          id: "tsg-10",
          text: "When she woke, the house was completely silent — no voices, no footsteps, nothing at all.",
          translation:
            "잠에서 깼을 때, 집은 완전히 고요했어요. 말소리도, 발소리도, 아무것도 없었어요.",
        },
        {
          id: "tsg-11",
          text: "Mary did not know that the illness had taken almost everyone, and that the rest had run away.",
          translation:
            "메리는 그 병이 거의 모든 사람을 데려갔고 남은 사람들은 달아났다는 것을 알지 못했어요.",
        },
        {
          id: "tsg-12",
          text: "She only wondered who would feed her now, and who would be her new Ayah.",
          translation:
            "메리는 그저 이제 누가 자기에게 밥을 줄지, 누가 자기의 새 아야가 될지 궁금해할 뿐이었어요.",
        },
      ],
      [
        {
          id: "tsg-13",
          text: "She walked through the empty rooms and saw a small snake slide across the floor, the only living thing left.",
          translation:
            "메리는 텅 빈 방들을 지나 걸었고, 작은 뱀 한 마리가 바닥을 미끄러지듯 지나가는 것을 보았어요. 그것이 남아 있는 유일한 생명체였어요.",
        },
        {
          id: "tsg-14",
          text: "In the dining room a meal sat half eaten, the chairs pushed back as if people had jumped up in a hurry.",
          translation:
            "식당에는 반쯤 먹다 만 식사가 놓여 있었고, 의자들은 사람들이 급히 일어난 것처럼 뒤로 밀려나 있었어요.",
        },
        {
          id: "tsg-15",
          text: "Mary ate a little fruit and some biscuits, then went back to her room and fell asleep again.",
          translation:
            "메리는 과일과 비스킷을 조금 먹고, 다시 방으로 돌아가 또 잠이 들었어요.",
        },
      ],
      [
        {
          id: "tsg-16",
          text: "At last some men came into the quiet house, and one of them cried, \"There is no one left — and here is a child everyone forgot!\"",
          translation:
            "마침내 몇몇 남자들이 그 조용한 집으로 들어왔고, 그중 한 명이 소리쳤어요. \"남은 사람이 아무도 없어 — 그런데 여기 모두가 잊어버린 아이가 있어!\"",
        },
        {
          id: "tsg-17",
          text: "Mary's mother, her father, and her Ayah were all gone, and the unwanted little girl was sent far away to live with an uncle in England.",
          translation:
            "메리의 어머니와 아버지, 그리고 아야는 모두 떠나 버렸고, 아무도 원하지 않던 그 어린 소녀는 멀리 영국에 있는 삼촌에게 보내졌어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tsg-v1",
        term: "selfish",
        partOfSpeech: "adjective",
        translation: "이기적인",
        example: "A selfish child thinks only about what she wants.",
        exampleTranslation: "이기적인 아이는 자기가 원하는 것만 생각해요.",
      },
      {
        id: "tsg-v2",
        term: "whisper",
        partOfSpeech: "verb",
        translation: "속삭이다, 소곤거리다",
        example: "The servants whispered so that the children would not hear.",
        exampleTranslation: "하인들은 아이들이 듣지 못하도록 소곤거렸어요.",
      },
      {
        id: "tsg-v3",
        term: "frightened",
        partOfSpeech: "adjective",
        translation: "겁먹은, 무서워하는",
        example: "The frightened woman hurried out of the room.",
        exampleTranslation: "겁먹은 여자는 서둘러 방을 빠져나갔어요.",
      },
      {
        id: "tsg-v4",
        term: "silent",
        partOfSpeech: "adjective",
        translation: "고요한, 아무 소리도 없는",
        example: "After everyone had gone, the house was silent.",
        exampleTranslation: "모두가 떠난 뒤, 집은 고요했어요.",
      },
      {
        id: "tsg-v5",
        term: "unwanted",
        partOfSpeech: "adjective",
        translation: "원치 않는, 반갑지 않은",
        example: "The unwanted little girl was sent away to England.",
        exampleTranslation: "아무도 원하지 않던 그 어린 소녀는 영국으로 보내졌어요.",
      },
    ],
    questions: [
      {
        id: "tsg-q1",
        prompt: "Why did Mary hardly ever see her mother and father in India?",
        options: [
          "They were often away, working in another town.",
          "Her parents did not want her, so her Ayah raised her instead.",
          "She had been sent to a school far from home.",
          "They were both ill in bed for most of her childhood.",
        ],
        correctIndex: 1,
        explanation:
          "Mary's parents did not want a child, so she was handed to her Indian servant, the Ayah, and grew up spoiled and almost never with her family.",
      },
      {
        id: "tsg-q2",
        prompt: "Why did the house suddenly become silent?",
        options: [
          "Everyone had gone into town for a party.",
          "The servants were resting through the hottest part of the day.",
          "Cholera had killed or driven away almost everyone in the house.",
          "Mary's family had quietly moved to a new home.",
        ],
        correctIndex: 2,
        explanation:
          "Cholera swept through the town; most of the household died and the rest fled in the panic, leaving Mary alone without anyone remembering she was there.",
      },
      {
        id: "tsg-q3",
        prompt: "How does the chapter end for Mary?",
        options: [
          "Her Ayah comes back and takes care of her again.",
          "She stays in the house with one faithful servant.",
          "Men find her alone and send her to an uncle in England.",
          "Her uncle travels to India to bring her home himself.",
        ],
        correctIndex: 2,
        explanation:
          "Searchers find the forgotten child in the empty house, and with her parents and Ayah gone, Mary is sent to live with an uncle she has never met in England.",
      },
    ],
  },
  {
    slug: "the-emperors-new-clothes",
    title: "The Emperor's New Clothes",
    titleTranslation: "벌거벗은 임금님",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Hans Christian Andersen (1805–1875)",
    coverEmoji: "👑",
    coverImage: "/covers/the-emperors-new-clothes.svg",
    source:
      "Adapted from Hans Christian Andersen's fairy tale \"The Emperor's New Clothes\" (\"Keiserens nye Klæder\", first published 1837; long in the public domain, Project Gutenberg #1597). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what the two men said about their cloth and why no one admitted they could not see it.",
    paragraphs: [
      [
        {
          id: "enc-1",
          text: "Once there was an emperor who loved fine clothes more than anything.",
          translation: "옛날에 무엇보다 좋은 옷을 사랑하는 황제가 있었어요.",
        },
        {
          id: "enc-2",
          text: "One day two men came to his city and said, \"We are weavers.\"",
          translation: "어느 날 두 남자가 그의 도시에 와서 \"우리는 베 짜는 사람입니다.\"라고 말했어요.",
        },
        {
          id: "enc-3",
          text: "\"We can make magic cloth,\" they said. \"A stupid person cannot see it, and a person who is bad at their job cannot see it either.\"",
          translation:
            "\"우리는 마법의 천을 만들 수 있어요.\" 그들이 말했어요. \"어리석은 사람은 그 천을 볼 수 없고, 자기 일을 잘 못하는 사람도 볼 수 없어요.\"",
        },
      ],
      [
        {
          id: "enc-4",
          text: "The emperor thought, \"With clothes like that, I can find out who in my land is clever and who is stupid.\"",
          translation:
            "황제는 생각했어요. \"그런 옷이 있으면, 내 나라에서 누가 똑똑하고 누가 어리석은지 알아낼 수 있겠구나.\"",
        },
        {
          id: "enc-5",
          text: "He gave the two men lots of gold, and they started to work.",
          translation: "그는 두 남자에게 많은 금을 주었고, 그들은 일을 시작했어요.",
        },
        {
          id: "enc-6",
          text: "But their looms were empty; they asked for silk and fine thread, and hid it all in their bags.",
          translation:
            "하지만 그들의 베틀은 비어 있었어요. 그들은 비단과 고운 실을 달라고 한 뒤, 그것을 모두 자기 가방에 숨겼어요.",
        },
      ],
      [
        {
          id: "enc-7",
          text: "After a few days the emperor sent his honest old minister to look at the cloth.",
          translation: "며칠 뒤 황제는 정직한 늙은 대신을 보내 그 천을 보게 했어요.",
        },
        {
          id: "enc-8",
          text: "The old man stared at the empty loom and saw nothing. \"Am I stupid?\" he thought. \"Am I bad at my job?\"",
          translation:
            "늙은 대신은 빈 베틀을 빤히 쳐다보았지만 아무것도 보이지 않았어요. \"내가 어리석은 걸까?\" 그가 생각했어요. \"내가 일을 잘 못하는 걸까?\"",
        },
        {
          id: "enc-9",
          text: "He was afraid to tell the truth, so he said, \"Oh, how beautiful! What lovely colours!\"",
          translation:
            "그는 사실대로 말하기가 두려워서, \"오, 정말 아름답군요! 색깔이 참 곱네요!\"라고 말했어요.",
        },
      ],
      [
        {
          id: "enc-10",
          text: "Soon the whole city was talking about the emperor's wonderful new cloth.",
          translation: "곧 도시 전체가 황제의 멋진 새 천에 대해 이야기했어요.",
        },
        {
          id: "enc-11",
          text: "Then the emperor went to see it himself, with his finest officers.",
          translation: "그러자 황제는 가장 훌륭한 신하들을 데리고 직접 그것을 보러 갔어요.",
        },
        {
          id: "enc-12",
          text: "He looked and looked, but he saw nothing at all. \"I must not say so,\" he thought, and he said, \"Yes, it is very fine.\"",
          translation:
            "그는 보고 또 보았지만 아무것도 보이지 않았어요. \"그렇게 말하면 안 되지.\" 그가 생각하고는 \"그래, 아주 훌륭하구나.\"라고 말했어요.",
        },
      ],
      [
        {
          id: "enc-13",
          text: "When the cloth was \"ready\", the two men helped the emperor put on his new clothes.",
          translation: "천이 '다 되자', 두 남자는 황제가 새 옷을 입도록 도왔어요.",
        },
        {
          id: "enc-14",
          text: "\"Now walk through the city,\" they said, \"so all your people can see them.\"",
          translation: "\"이제 도시를 걸어 보세요.\" 그들이 말했어요. \"그러면 모든 백성이 그 옷을 볼 수 있어요.\"",
        },
        {
          id: "enc-15",
          text: "So the emperor walked down the street with no clothes on, and everyone called out, \"How wonderful! What a beautiful suit!\"",
          translation:
            "그래서 황제는 아무 옷도 입지 않은 채 거리를 걸었고, 모두가 \"정말 멋지다! 참 아름다운 옷이야!\"라고 외쳤어요.",
        },
      ],
      [
        {
          id: "enc-16",
          text: "Then a little child said in a loud, clear voice, \"But he has nothing on!\"",
          translation: "그때 한 어린아이가 크고 또렷한 목소리로 말했어요. \"그런데 임금님은 아무것도 안 입었잖아요!\"",
        },
        {
          id: "enc-17",
          text: "Soon everyone was saying it, and the emperor knew it was true — but he lifted his head higher and walked on to the end.",
          translation:
            "곧 모두가 그렇게 말했고, 황제도 그것이 사실임을 알았어요. 하지만 그는 고개를 더 높이 들고 끝까지 걸어갔어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "enc-v1",
        term: "weaver",
        partOfSpeech: "noun",
        translation: "베 짜는 사람, 직조공",
        example: "The two weavers said their cloth was magic.",
        exampleTranslation: "두 직조공은 자기들의 천이 마법이라고 말했어요.",
      },
      {
        id: "enc-v2",
        term: "cloth",
        partOfSpeech: "noun",
        translation: "천, 옷감",
        example: "The magic cloth was not really there at all.",
        exampleTranslation: "그 마법의 천은 사실 전혀 거기에 없었어요.",
      },
      {
        id: "enc-v3",
        term: "loom",
        partOfSpeech: "noun",
        translation: "베틀, 직조기",
        example: "They sat at the loom and pretended to weave.",
        exampleTranslation: "그들은 베틀에 앉아 베를 짜는 척했어요.",
      },
      {
        id: "enc-v4",
        term: "honest",
        partOfSpeech: "adjective",
        translation: "정직한, 솔직한",
        example: "The honest old minister did not want to lie.",
        exampleTranslation: "정직한 늙은 대신은 거짓말을 하고 싶지 않았어요.",
      },
      {
        id: "enc-v5",
        term: "stare",
        partOfSpeech: "verb",
        translation: "빤히 쳐다보다",
        example: "He could only stare at the empty wooden frame.",
        exampleTranslation: "그는 그저 텅 빈 나무 틀을 빤히 쳐다볼 수밖에 없었어요.",
      },
    ],
    questions: [
      {
        id: "enc-q1",
        prompt: "What did the two men say was special about their cloth?",
        options: [
          "It could change colour in the sunlight.",
          "Only the emperor would ever be allowed to wear it.",
          "A stupid person, or someone bad at their job, could not see it.",
          "It would keep the wearer warm through any winter.",
        ],
        correctIndex: 2,
        explanation:
          "The men claimed the cloth was invisible to anyone who was stupid or not good at their job — so no one dared admit they saw nothing on the loom.",
      },
      {
        id: "enc-q2",
        prompt: "Why did the old minister praise the cloth when he could see nothing?",
        options: [
          "He was afraid people would think he was stupid or bad at his job.",
          "He could actually see a faint pattern in the threads.",
          "The two men had promised him a share of the gold.",
          "The emperor had ordered him to praise it.",
        ],
        correctIndex: 0,
        explanation:
          "Seeing nothing on the loom, the minister feared it meant he was stupid or unfit for his post, so he pretended to admire the colours instead of telling the truth.",
      },
      {
        id: "enc-q3",
        prompt: "Who finally said out loud that the emperor was wearing nothing?",
        options: [
          "The honest old minister.",
          "One of the two weavers.",
          "A little child in the crowd.",
          "The emperor himself.",
        ],
        correctIndex: 2,
        explanation:
          "During the procession a small child called out that the emperor had nothing on; the crowd soon took up the cry, but the emperor proudly finished his walk anyway.",
      },
    ],
  },
  {
    slug: "alice-in-wonderland",
    title: "Alice's Adventures in Wonderland",
    titleTranslation: "이상한 나라의 앨리스",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Lewis Carroll (1832–1898)",
    coverEmoji: "🐰",
    coverImage: "/covers/alice-in-wonderland.svg",
    source:
      "Adapted from Chapter 1 (\"Down the Rabbit-Hole\") of Lewis Carroll's novel \"Alice's Adventures in Wonderland\" (first published 1865; long in the public domain, Project Gutenberg #11). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how Alice ended up falling down the rabbit-hole and what she saw on the walls as she fell.",
    paragraphs: [
      [
        {
          id: "aiw-1",
          text: "Alice was sitting beside the river with her sister on a warm afternoon, and she had nothing to do.",
          translation:
            "어느 따뜻한 오후, 앨리스는 언니와 함께 강가에 앉아 있었는데, 할 일이 하나도 없었어요.",
        },
        {
          id: "aiw-2",
          text: "Her sister was reading a book, but it had no pictures and no conversations in it.",
          translation:
            "언니는 책을 읽고 있었지만, 그 책에는 그림도 없고 대화도 없었어요.",
        },
        {
          id: "aiw-3",
          text: "Alice felt sleepy and bored, and she wondered if it was worth getting up to pick some daisies.",
          translation:
            "앨리스는 졸리고 지루했고, 데이지 꽃을 꺾으러 굳이 일어날 만한 가치가 있을까 생각했어요.",
        },
      ],
      [
        {
          id: "aiw-4",
          text: "Suddenly a White Rabbit with pink eyes ran close past her.",
          translation:
            "그때 갑자기 분홍색 눈을 한 하얀 토끼 한 마리가 앨리스 곁을 바짝 스쳐 달려갔어요.",
        },
        {
          id: "aiw-5",
          text: "Then the Rabbit said out loud, \"Oh dear! Oh dear! I shall be late!\"",
          translation: "그러더니 토끼가 큰 소리로 말했어요. \"이런! 이런! 늦겠어!\"",
        },
        {
          id: "aiw-6",
          text: "Alice did not even think that was strange — but then the Rabbit took a watch out of its waistcoat pocket.",
          translation:
            "앨리스는 그것조차 이상하다고 생각하지 않았어요. 그런데 그때 토끼가 조끼 주머니에서 회중시계를 꺼냈어요.",
        },
      ],
      [
        {
          id: "aiw-7",
          text: "She had never seen a rabbit with a waistcoat or a watch, and she jumped to her feet, full of curiosity.",
          translation:
            "앨리스는 조끼를 입고 시계를 든 토끼는 한 번도 본 적이 없어서, 호기심에 가득 차 벌떡 일어났어요.",
        },
        {
          id: "aiw-8",
          text: "She ran across the field after it, just in time to see it disappear down a large rabbit-hole under the hedge.",
          translation:
            "앨리스는 들판을 가로질러 토끼를 뒤쫓았고, 때마침 토끼가 산울타리 아래 커다란 토끼 굴로 사라지는 모습을 볼 수 있었어요.",
        },
        {
          id: "aiw-9",
          text: "Alice went straight in after it, and she never once stopped to think how she would get out again.",
          translation:
            "앨리스는 곧장 토끼를 따라 굴로 들어갔고, 어떻게 다시 나올지는 한 번도 생각하지 않았어요.",
        },
      ],
      [
        {
          id: "aiw-10",
          text: "For a little way the hole went straight on like a tunnel, and then it suddenly dropped down.",
          translation:
            "굴은 얼마 동안 터널처럼 곧게 이어지다가, 갑자기 아래로 뚝 떨어졌어요.",
        },
        {
          id: "aiw-11",
          text: "Alice fell slowly, down and down, with plenty of time to look around her as she went.",
          translation:
            "앨리스는 천천히 계속 아래로 떨어졌고, 떨어지는 동안 주위를 둘러볼 시간이 넉넉했어요.",
        },
        {
          id: "aiw-12",
          text: "Cupboards and shelves covered the sides of the hole, and here and there maps and pictures hung on the wall.",
          translation:
            "굴의 벽면은 찬장과 선반으로 뒤덮여 있었고, 여기저기 지도와 그림이 벽에 걸려 있었어요.",
        },
      ],
      [
        {
          id: "aiw-13",
          text: "As she passed a shelf, she took down a jar with the label \"ORANGE MARMALADE\" on it, but the jar was empty.",
          translation:
            "선반을 지나면서 앨리스는 \"오렌지 마멀레이드\"라고 적힌 병을 하나 집어 들었지만, 병은 비어 있었어요.",
        },
        {
          id: "aiw-14",
          text: "She did not drop it, in case it hit somebody far below, so she put it back into a cupboard as she fell past.",
          translation:
            "앨리스는 저 아래에 있는 누군가가 맞을까 봐 병을 떨어뜨리지 않고, 찬장을 지나칠 때 그 안에 도로 넣어 두었어요.",
        },
        {
          id: "aiw-15",
          text: "Down, down, down she went, until she began to wonder if she was near the centre of the earth.",
          translation:
            "아래로, 아래로, 아래로 떨어지면서, 앨리스는 자기가 지구 중심 가까이에 온 게 아닐까 생각하기 시작했어요.",
        },
      ],
      [
        {
          id: "aiw-16",
          text: "Then, thump! thump! she landed on a great heap of dry leaves and sticks, and the fall was over.",
          translation:
            "그때 쿵! 쿵! 하고 앨리스는 마른 나뭇잎과 나뭇가지가 잔뜩 쌓인 더미 위에 떨어졌고, 그렇게 추락은 끝이 났어요.",
        },
        {
          id: "aiw-17",
          text: "She was not hurt at all, and far down a long passage ahead she could still see the White Rabbit, hurrying away.",
          translation:
            "앨리스는 하나도 다치지 않았고, 저 앞 긴 복도 끝에서 하얀 토끼가 서둘러 달아나는 모습이 아직 보였어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "aiw-v1",
        term: "waistcoat",
        partOfSpeech: "noun",
        translation: "조끼 (셔츠 위에 입는 소매 없는 옷)",
        example: "The White Rabbit wore a waistcoat and kept a watch in its pocket.",
        exampleTranslation: "하얀 토끼는 조끼를 입고 주머니에 시계를 넣고 다녔어요.",
      },
      {
        id: "aiw-v2",
        term: "curiosity",
        partOfSpeech: "noun",
        translation: "호기심",
        example: "Full of curiosity, Alice ran after the rabbit without stopping to think.",
        exampleTranslation: "호기심에 가득 찬 앨리스는 생각할 겨를도 없이 토끼를 뒤쫓았어요.",
      },
      {
        id: "aiw-v3",
        term: "hedge",
        partOfSpeech: "noun",
        translation: "산울타리, 생울타리",
        example: "The rabbit-hole was under the hedge at the edge of the field.",
        exampleTranslation: "토끼 굴은 들판 가장자리의 산울타리 아래에 있었어요.",
      },
      {
        id: "aiw-v4",
        term: "tunnel",
        partOfSpeech: "noun",
        translation: "터널, 굴",
        example: "At first the hole went straight on, like a tunnel.",
        exampleTranslation: "처음에 그 굴은 터널처럼 곧게 이어졌어요.",
      },
      {
        id: "aiw-v5",
        term: "heap",
        partOfSpeech: "noun",
        translation: "무더기, 더미",
        example: "Alice landed on a heap of dry leaves and sticks and was not hurt.",
        exampleTranslation: "앨리스는 마른 나뭇잎과 나뭇가지 더미 위에 떨어졌고 다치지 않았어요.",
      },
    ],
    questions: [
      {
        id: "aiw-q1",
        prompt: "Why did Alice jump up and run after the White Rabbit?",
        options: [
          "It was carrying a daisy-chain that belonged to her sister.",
          "It called her name and asked her to follow it.",
          "It took a watch out of its waistcoat pocket, which she had never seen a rabbit do.",
          "Her sister told her to catch it before it reached the river.",
        ],
        correctIndex: 2,
        explanation:
          "A talking rabbit barely surprised Alice, but a rabbit that pulled a watch from its waistcoat pocket was too strange to ignore, so she ran after it, full of curiosity.",
      },
      {
        id: "aiw-q2",
        prompt: "What was unusual about the way Alice fell down the hole?",
        options: [
          "She fell so fast that everything around her was a blur.",
          "She fell slowly, with time to look at cupboards, shelves, and pictures on the walls.",
          "She kept floating back upward every few seconds.",
          "The hole was so narrow that she could not move her arms.",
        ],
        correctIndex: 1,
        explanation:
          "The well was either very deep or Alice fell very slowly; either way she had plenty of time to look around and even take a jar off a shelf as she passed.",
      },
      {
        id: "aiw-q3",
        prompt: "Why didn't Alice simply drop the empty marmalade jar?",
        options: [
          "She wanted to keep it as a souvenir of the strange place.",
          "It was too heavy for her to let go of safely.",
          "She was afraid it might hit somebody far below her.",
          "Her sister had told her never to break glass jars.",
        ],
        correctIndex: 2,
        explanation:
          "Even while falling, Alice was careful: rather than drop the jar and risk hitting someone below, she put it back into a cupboard as she fell past.",
      },
    ],
  },
  {
    slug: "the-happy-prince",
    title: "The Happy Prince",
    titleTranslation: "행복한 왕자",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Oscar Wilde (1854–1900)",
    coverEmoji: "🤴",
    coverImage: "/covers/the-happy-prince.svg",
    source:
      "Adapted from Oscar Wilde's fairy tale \"The Happy Prince\" (first published 1888 in the collection \"The Happy Prince and Other Tales\"; long in the public domain, Project Gutenberg #902). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain how the Happy Prince used the swallow to help the poor, and what happened to the two of them in the end.",
    paragraphs: [
      [
        {
          id: "thp-1",
          text: "High above the city stood the statue of the Happy Prince, covered from head to foot with fine gold, with two bright sapphires for eyes and a red ruby on his sword.",
          translation:
            "도시 높은 곳에 행복한 왕자의 동상이 서 있었는데, 온몸이 고운 금으로 덮여 있었고, 두 눈은 반짝이는 사파이어였으며, 칼자루에는 붉은 루비가 박혀 있었어요.",
        },
        {
          id: "thp-2",
          text: "One night a little swallow, flying late to the warm south, stopped to rest between the statue's feet.",
          translation:
            "어느 날 밤, 따뜻한 남쪽으로 뒤늦게 날아가던 작은 제비 한 마리가 동상의 두 발 사이에 내려앉아 쉬었어요.",
        },
        {
          id: "thp-3",
          text: "As he put his head under his wing, a drop of water fell on him, and then another — the Happy Prince was crying.",
          translation:
            "제비가 날개 밑에 머리를 넣으려는데, 물방울 하나가 그 위로 떨어졌고, 이어서 또 한 방울이 떨어졌어요. 행복한 왕자가 울고 있었던 거예요.",
        },
      ],
      [
        {
          id: "thp-4",
          text: "\"When I was alive, I did not know what tears were,\" said the Prince. \"But now I see all the sadness of the city below me, and I cannot stop crying.\"",
          translation:
            "\"내가 살아 있을 때는 눈물이 무엇인지 몰랐단다.\" 왕자가 말했어요. \"하지만 지금은 저 아래 도시의 온갖 슬픔이 다 보여서, 우는 것을 멈출 수가 없구나.\"",
        },
        {
          id: "thp-5",
          text: "\"In a poor room far off, a tired woman is sewing, and her little boy is sick and asking for oranges,\" he said. \"Swallow, take the ruby from my sword and carry it to her.\"",
          translation:
            "\"저 멀리 가난한 방에서 지친 여인이 바느질을 하고 있는데, 그 어린 아들은 병이 나서 오렌지를 달라고 하고 있단다.\" 왕자가 말했어요. \"제비야, 내 칼에서 루비를 빼내어 그 여인에게 가져다주렴.\"",
        },
        {
          id: "thp-6",
          text: "So the swallow carried the great ruby to the poor house, and he fanned the sick boy's face with his wings until the child fell into a cool sleep.",
          translation:
            "그래서 제비는 그 커다란 루비를 가난한 집으로 날라다 주었고, 날개로 아픈 아이의 얼굴에 부채질을 해 주어 아이가 시원하게 잠들 때까지 곁을 지켰어요.",
        },
      ],
      [
        {
          id: "thp-7",
          text: "The next night the Prince asked the swallow to fly to a young writer who was cold and hungry and could not finish his play.",
          translation:
            "다음 날 밤, 왕자는 제비에게 춥고 배고파서 희곡을 끝내지 못하고 있는 젊은 작가에게 날아가 달라고 부탁했어요.",
        },
        {
          id: "thp-8",
          text: "\"I have no more rubies,\" said the Prince, \"so take out one of my sapphire eyes and give it to him.\"",
          translation:
            "\"이제 나에게 루비는 없단다.\" 왕자가 말했어요. \"그러니 내 사파이어 눈 하나를 빼내어 그에게 주렴.\"",
        },
        {
          id: "thp-9",
          text: "The swallow cried and did not want to, but he obeyed, and the writer found the jewel and knew that someone cared for him.",
          translation:
            "제비는 울면서 그러고 싶지 않았지만 왕자의 말을 따랐고, 작가는 그 보석을 발견하고 누군가 자신을 아껴 주고 있다는 것을 알게 되었어요.",
        },
      ],
      [
        {
          id: "thp-10",
          text: "On the third night the swallow gave the Prince's other eye to a little girl who had dropped her matches and was afraid to go home.",
          translation:
            "셋째 날 밤, 제비는 성냥을 떨어뜨려 집에 갈 엄두를 못 내던 어린 소녀에게 왕자의 남은 눈 하나를 가져다주었어요.",
        },
        {
          id: "thp-11",
          text: "Now the Prince was blind, and the swallow decided to stay beside him and never fly to Egypt at all.",
          translation:
            "이제 왕자는 앞을 볼 수 없게 되었고, 제비는 이집트로 아예 떠나지 않고 왕자 곁에 머물기로 했어요.",
        },
        {
          id: "thp-12",
          text: "Day by day the swallow told the blind Prince what he saw: rich people laughing in fine houses, and hungry children sitting in the dark streets.",
          translation:
            "날마다 제비는 앞 못 보는 왕자에게 자기가 본 것을 이야기했어요. 좋은 집에서 웃고 있는 부자들, 그리고 어두운 거리에 앉아 있는 굶주린 아이들을요.",
        },
      ],
      [
        {
          id: "thp-13",
          text: "\"Take the gold off my body, piece by piece, and give it to the poor,\" said the Prince, and the swallow did this until the statue looked grey and dull.",
          translation:
            "\"내 몸에서 금을 한 조각씩 떼어내어 가난한 사람들에게 주렴.\" 왕자가 말했고, 제비는 동상이 잿빛으로 칙칙해 보일 때까지 그 일을 했어요.",
        },
        {
          id: "thp-14",
          text: "Then the snow came, and the frost, and the little swallow grew colder and colder and knew that he would die.",
          translation:
            "이윽고 눈이 내리고 서리가 앉았으며, 작은 제비는 점점 더 추워져서 자기가 죽으리라는 것을 알았어요.",
        },
        {
          id: "thp-15",
          text: "The swallow kissed the Happy Prince on the lips and fell down dead at his feet, and at that moment the Prince's heart, which was made of lead, broke in two.",
          translation:
            "제비는 행복한 왕자의 입술에 입을 맞추고 그의 발치에 떨어져 죽었고, 바로 그 순간 납으로 만들어진 왕자의 심장이 두 조각으로 갈라졌어요.",
        },
      ],
      [
        {
          id: "thp-16",
          text: "The next day the mayor took down the shabby statue and had it melted, but the broken heart would not melt, so it was thrown away beside the dead bird.",
          translation:
            "이튿날 시장은 초라해진 동상을 끌어내려 녹이게 했지만, 깨진 심장은 녹지 않아서 죽은 새 옆에 함께 버려졌어요.",
        },
        {
          id: "thp-17",
          text: "Then God asked an angel to bring him the two most precious things in the city. The angel chose the leaden heart and the dead swallow, and there in God's garden they lived for ever.",
          translation:
            "그때 하느님이 천사에게 그 도시에서 가장 귀중한 것 두 가지를 가져오라고 하셨어요. 천사는 납 심장과 죽은 제비를 골랐고, 그 둘은 하느님의 정원에서 영원히 살게 되었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "thp-v1",
        term: "statue",
        partOfSpeech: "noun",
        translation: "동상, 조각상",
        example: "The statue of the Happy Prince stood high above the city.",
        exampleTranslation: "행복한 왕자의 동상은 도시 높은 곳에 서 있었어요.",
      },
      {
        id: "thp-v2",
        term: "sew",
        partOfSpeech: "verb",
        translation: "바느질하다, 꿰매다",
        example: "The tired woman had to sew all night to earn a little money.",
        exampleTranslation: "지친 여인은 적은 돈이라도 벌기 위해 밤새 바느질을 해야 했어요.",
      },
      {
        id: "thp-v3",
        term: "lead",
        partOfSpeech: "noun",
        translation: "납 (무겁고 잘 휘는 회색 금속)",
        example: "The Prince's heart was made of lead, a heavy grey metal.",
        exampleTranslation: "왕자의 심장은 무거운 회색 금속인 납으로 만들어져 있었어요.",
      },
      {
        id: "thp-v4",
        term: "frost",
        partOfSpeech: "noun",
        translation: "서리",
        example: "When the frost came, the little swallow grew too cold to fly.",
        exampleTranslation: "서리가 내리자, 작은 제비는 너무 추워서 날 수 없게 되었어요.",
      },
      {
        id: "thp-v5",
        term: "precious",
        partOfSpeech: "adjective",
        translation: "귀중한, 소중한",
        example: "God asked for the two most precious things in the whole city.",
        exampleTranslation: "하느님은 도시 전체에서 가장 귀중한 것 두 가지를 달라고 하셨어요.",
      },
    ],
    questions: [
      {
        id: "thp-q1",
        prompt: "Why was the Happy Prince crying?",
        options: [
          "He was afraid that the little swallow would leave him for Egypt.",
          "From high up he could see all the poverty and sadness in his city.",
          "The rain and frost had spoiled the gold on his body.",
          "The people of the city had stopped coming to admire him.",
        ],
        correctIndex: 1,
        explanation:
          "The statue stands so high that the Prince sees every unhappy corner of the city, and though his heart is only lead, the sight makes him weep.",
      },
      {
        id: "thp-q2",
        prompt: "What did the swallow do with the ruby and the two sapphires?",
        options: [
          "He hid them between the statue's feet to keep them safe.",
          "He carried them to the warm south to sell them.",
          "He gave them to a poor mother, a cold young writer, and a match girl.",
          "He put them back into the Prince's sword and eyes each morning.",
        ],
        correctIndex: 2,
        explanation:
          "One by one the swallow takes the jewels to people in need — the ruby to the seamstress's sick child, then a sapphire eye each to the starving writer and the frightened match girl.",
      },
      {
        id: "thp-q3",
        prompt: "How does the story end for the swallow and the Prince?",
        options: [
          "The swallow flies to Egypt at last, and the Prince is repaired with new gold.",
          "Both die, but an angel carries the leaden heart and the dead bird to God's garden.",
          "The mayor keeps the statue and builds a new one of the swallow beside it.",
          "The Prince's heart heals, and he and the swallow live on the column together.",
        ],
        correctIndex: 1,
        explanation:
          "The swallow dies of cold at the Prince's feet and the leaden heart breaks; when the statue is melted down, God has the angel bring him the cracked heart and the dead swallow as the city's two most precious things.",
      },
    ],
  },
];
