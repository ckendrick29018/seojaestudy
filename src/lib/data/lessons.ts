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
  {
    slug: "the-princess-and-the-pea",
    title: "The Princess and the Pea",
    titleTranslation: "공주와 완두콩",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Hans Christian Andersen (1805–1875)",
    coverEmoji: "👸",
    coverImage: "/covers/the-princess-and-the-pea.svg",
    source:
      "Adapted from Hans Christian Andersen's fairy tale \"The Princess and the Pea\" (\"Prinsessen paa Ærten\", first published 1835; long in the public domain, Project Gutenberg #1597). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain the test the old queen gave the girl, and how it proved she was a real princess.",
    paragraphs: [
      [
        {
          id: "pap-1",
          text: "Once upon a time there was a prince who wanted to marry a princess.",
          translation: "옛날에 한 왕자가 있었는데, 공주와 결혼하고 싶어 했어요.",
        },
        {
          id: "pap-2",
          text: "But she had to be a real princess, and that was not easy to find.",
          translation:
            "하지만 그 공주는 진짜 공주여야 했고, 그런 사람을 찾기는 쉽지 않았어요.",
        },
        {
          id: "pap-3",
          text: "He travelled all over the world, but there was always something wrong, and he came home very sad.",
          translation:
            "왕자는 온 세상을 돌아다녔지만 늘 무언가가 이상했고, 아주 슬픈 마음으로 집에 돌아왔어요.",
        },
      ],
      [
        {
          id: "pap-4",
          text: "One evening a terrible storm came.",
          translation: "어느 날 저녁, 무서운 폭풍이 몰아쳤어요.",
        },
        {
          id: "pap-5",
          text: "The rain poured down, and the thunder and lightning were frightening.",
          translation: "비가 세차게 쏟아졌고, 천둥과 번개가 무서웠어요.",
        },
        {
          id: "pap-6",
          text: "Then someone knocked at the town gate, and the old king went to open it.",
          translation:
            "그때 누군가 마을 성문을 두드렸고, 늙은 왕이 문을 열러 나갔어요.",
        },
      ],
      [
        {
          id: "pap-7",
          text: "A young woman was standing outside in the rain.",
          translation: "한 젊은 여자가 빗속에 밖에 서 있었어요.",
        },
        {
          id: "pap-8",
          text: "The water ran down her hair and her clothes, and even through her shoes.",
          translation:
            "물이 머리와 옷을 타고 흘러내렸고, 신발 속까지 다 젖어 있었어요.",
        },
        {
          id: "pap-9",
          text: "But she said, \"I am a real princess.\"",
          translation: "그런데 그 여자는 \"저는 진짜 공주예요.\"라고 말했어요.",
        },
      ],
      [
        {
          id: "pap-10",
          text: "\"We will soon see about that,\" the old queen thought, but she said nothing.",
          translation:
            "\"곧 알게 되겠지.\" 늙은 왕비는 생각했지만, 아무 말도 하지 않았어요.",
        },
        {
          id: "pap-11",
          text: "She went to the bedroom and put one little pea on the bottom of the bed.",
          translation:
            "왕비는 침실로 가서 침대 맨 아래에 작은 완두콩 하나를 놓았어요.",
        },
        {
          id: "pap-12",
          text: "Then she piled twenty mattresses and twenty soft quilts on top of the pea.",
          translation:
            "그런 다음 그 완두콩 위에 매트리스 스무 개와 푹신한 이불 스무 개를 쌓아 올렸어요.",
        },
      ],
      [
        {
          id: "pap-13",
          text: "The princess slept there all night.",
          translation: "공주는 그 위에서 밤새 잠을 잤어요.",
        },
        {
          id: "pap-14",
          text: "In the morning they asked her, \"How did you sleep?\"",
          translation: "아침에 사람들이 물었어요. \"잘 주무셨어요?\"",
        },
        {
          id: "pap-15",
          text: "\"Very badly!\" she said. \"There was something hard in the bed, and now I am black and blue all over.\"",
          translation:
            "\"아주 나빴어요!\" 공주가 말했어요. \"침대에 딱딱한 게 있어서, 지금 온몸에 멍이 들었어요.\"",
        },
      ],
      [
        {
          id: "pap-16",
          text: "Now the king and queen were happy, because only a real princess could feel a tiny pea through twenty mattresses and twenty quilts.",
          translation:
            "이제 왕과 왕비는 기뻤어요. 진짜 공주만이 매트리스 스무 개와 이불 스무 개를 뚫고 작은 완두콩을 느낄 수 있으니까요.",
        },
        {
          id: "pap-17",
          text: "So the prince married her, and the little pea was put in a museum, where you can still see it today.",
          translation:
            "그래서 왕자는 그 공주와 결혼했고, 작은 완두콩은 박물관에 놓였는데, 오늘날에도 거기서 볼 수 있어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "pap-v1",
        term: "marry",
        partOfSpeech: "verb",
        translation: "결혼하다",
        example: "The prince wanted to marry a real princess, not just any girl.",
        exampleTranslation: "왕자는 아무 여자가 아니라 진짜 공주와 결혼하고 싶었어요.",
      },
      {
        id: "pap-v2",
        term: "storm",
        partOfSpeech: "noun",
        translation: "폭풍, 폭풍우",
        example: "One evening a terrible storm brought rain, thunder, and lightning.",
        exampleTranslation:
          "어느 날 저녁, 무서운 폭풍이 비와 천둥과 번개를 몰고 왔어요.",
      },
      {
        id: "pap-v3",
        term: "gate",
        partOfSpeech: "noun",
        translation: "문, 성문",
        example: "Someone knocked at the town gate late at night.",
        exampleTranslation: "밤늦게 누군가 마을 성문을 두드렸어요.",
      },
      {
        id: "pap-v4",
        term: "pea",
        partOfSpeech: "noun",
        translation: "완두콩",
        example: "The queen put one small pea under all the mattresses.",
        exampleTranslation: "왕비는 작은 완두콩 하나를 모든 매트리스 밑에 두었어요.",
      },
      {
        id: "pap-v5",
        term: "black and blue",
        partOfSpeech: "phrase",
        translation: "온몸에 멍이 든",
        example: "The bed was so hard that the princess was black and blue in the morning.",
        exampleTranslation:
          "침대가 너무 딱딱해서 공주는 아침에 온몸에 멍이 들었어요.",
      },
    ],
    questions: [
      {
        id: "pap-q1",
        prompt: "What kind of princess did the prince want to marry?",
        options: [
          "A princess who could sing and dance well.",
          "A real princess, not just any girl.",
          "A princess from his own country.",
          "The richest princess in the world.",
        ],
        correctIndex: 1,
        explanation:
          "The prince did not want just any girl — he was looking for a true, real princess, and he could not find one anywhere in the world.",
      },
      {
        id: "pap-q2",
        prompt: "What did the old queen hide in the bed?",
        options: [
          "A gold ring under the pillow.",
          "A letter for the princess to find.",
          "One small pea under twenty mattresses and twenty quilts.",
          "A hard piece of wood in the middle of the bed.",
        ],
        correctIndex: 2,
        explanation:
          "To test the girl, the queen secretly placed a single pea at the bottom of the bed and piled twenty mattresses and twenty quilts on top of it.",
      },
      {
        id: "pap-q3",
        prompt: "How did everyone know she was a real princess?",
        options: [
          "She wore a golden crown to breakfast.",
          "She knew the names of all the kings and queens.",
          "She felt the tiny pea through all the mattresses and slept very badly.",
          "She arrived in a carriage pulled by white horses.",
        ],
        correctIndex: 2,
        explanation:
          "Only a real princess could be so delicate: she felt the little pea through twenty mattresses and twenty quilts, and woke up black and blue.",
      },
    ],
  },
  {
    slug: "little-red-riding-hood",
    title: "Little Red Riding Hood",
    titleTranslation: "빨간 모자",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "🧺",
    coverImage: "/covers/little-red-riding-hood.svg",
    source:
      "Adapted from the Brothers Grimm tale \"Little Red Riding Hood\" (\"Rotkäppchen,\" collected 1812; long in the public domain, Project Gutenberg #2591). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's harsher details have been softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, say what the wolf did while Little Red Riding Hood picked flowers, and how the story ended safely.",
    paragraphs: [
      [
        {
          id: "lrrh-1",
          text: "A little girl always wore a red hood her grandmother had made for her, so everyone called her Little Red Riding Hood.",
          translation:
            "한 어린 소녀는 할머니가 만들어 준 빨간 모자를 늘 쓰고 다녔고, 그래서 모두 그 아이를 빨간 모자라고 불렀어요.",
        },
        {
          id: "lrrh-2",
          text: "One day her mother said, \"Grandmother is ill. Take her this cake and be a good girl.\"",
          translation:
            "어느 날 어머니가 말했어요. \"할머니가 편찮으셔. 이 케이크를 갖다 드리고, 착하게 굴어야 한다.\"",
        },
        {
          id: "lrrh-3",
          text: "\"Walk straight to her house through the wood,\" said her mother, \"and do not leave the path.\"",
          translation:
            "\"숲을 지나 할머니 집까지 곧장 걸어가거라.\" 어머니가 말했어요. \"그리고 길에서 벗어나면 안 된다.\"",
        },
      ],
      [
        {
          id: "lrrh-4",
          text: "On the way, Little Red Riding Hood met a big wolf, but she did not know that wolves were dangerous.",
          translation:
            "가는 길에 빨간 모자는 커다란 늑대를 만났지만, 늑대가 위험하다는 것을 알지 못했어요.",
        },
        {
          id: "lrrh-5",
          text: "\"Where are you going?\" asked the wolf, and she told him, \"To my grandmother's house at the end of the wood.\"",
          translation:
            "\"어디 가니?\" 늑대가 물었고, 그 아이는 \"숲 끝에 있는 할머니 집에요.\"라고 대답했어요.",
        },
        {
          id: "lrrh-6",
          text: "\"Look at the pretty flowers,\" said the wolf. \"Why not pick some for her?\"",
          translation:
            "\"저 예쁜 꽃들을 보렴.\" 늑대가 말했어요. \"할머니께 좀 꺾어다 드리는 게 어때?\"",
        },
      ],
      [
        {
          id: "lrrh-7",
          text: "So Little Red Riding Hood left the path and picked flower after flower, going deeper into the wood.",
          translation:
            "그래서 빨간 모자는 길에서 벗어나 꽃을 한 송이씩 꺾으며 숲속으로 점점 더 깊이 들어갔어요.",
        },
        {
          id: "lrrh-8",
          text: "The wolf ran to Grandmother's house, opened his big mouth, and swallowed her whole.",
          translation:
            "늑대는 할머니 집으로 달려가, 커다란 입을 벌려 할머니를 통째로 삼켜 버렸어요.",
        },
        {
          id: "lrrh-9",
          text: "Then he put on Grandmother's cap and climbed into her bed to wait.",
          translation: "그러고는 할머니의 모자를 쓰고 침대에 올라가 기다렸어요.",
        },
      ],
      [
        {
          id: "lrrh-10",
          text: "When Little Red Riding Hood came in, she thought Grandmother looked very strange.",
          translation:
            "빨간 모자가 안으로 들어왔을 때, 할머니의 모습이 아주 이상해 보인다고 생각했어요.",
        },
        {
          id: "lrrh-11",
          text: "\"Grandmother, what big eyes you have!\" \"All the better to see you with.\"",
          translation: "\"할머니, 눈이 왜 그렇게 커요!\" \"너를 더 잘 보려고 그런단다.\"",
        },
        {
          id: "lrrh-12",
          text: "\"Grandmother, what a big mouth you have!\" \"All the better to eat you with!\" — and the wolf swallowed her too.",
          translation:
            "\"할머니, 입이 왜 그렇게 커요!\" \"너를 잡아먹으려고 그런단다!\" 그러더니 늑대는 빨간 모자까지 삼켜 버렸어요.",
        },
      ],
      [
        {
          id: "lrrh-13",
          text: "The wolf lay down in the bed and soon fell fast asleep, snoring very loudly.",
          translation:
            "늑대는 침대에 드러누웠고, 곧 깊이 잠들어 아주 큰 소리로 코를 골았어요.",
        },
        {
          id: "lrrh-14",
          text: "A huntsman was passing and heard the noise. \"That is not Grandmother,\" he thought, and he went inside.",
          translation:
            "지나가던 사냥꾼이 그 소리를 들었어요. \"저건 할머니가 아니야.\" 하고 생각하며 안으로 들어갔어요.",
        },
        {
          id: "lrrh-15",
          text: "He saw the wolf, took his knife, and carefully cut the sleeping wolf open.",
          translation:
            "사냥꾼은 늑대를 보고는, 칼을 꺼내 잠든 늑대의 배를 조심스럽게 갈랐어요.",
        },
      ],
      [
        {
          id: "lrrh-16",
          text: "Out jumped Little Red Riding Hood, and then Grandmother — both safe and well!",
          translation:
            "빨간 모자가 튀어나왔고, 이어서 할머니도 나왔어요. 두 사람 다 무사했어요!",
        },
        {
          id: "lrrh-17",
          text: "The huntsman took the wolf far away, and Little Red Riding Hood said, \"I will never leave the path again.\"",
          translation:
            "사냥꾼은 늑대를 멀리 데려갔고, 빨간 모자는 말했어요. \"다시는 길에서 벗어나지 않을 거예요.\"",
        },
      ],
    ],
    vocab: [
      {
        id: "lrrh-v1",
        term: "hood",
        partOfSpeech: "noun",
        translation: "(외투 등에 달린) 모자, 두건",
        example: "The girl's red hood kept her head warm on cold days.",
        exampleTranslation: "소녀의 빨간 모자는 추운 날 머리를 따뜻하게 해 주었어요.",
      },
      {
        id: "lrrh-v2",
        term: "wood",
        partOfSpeech: "noun",
        translation: "숲",
        example: "Grandmother's little house stood deep in the wood.",
        exampleTranslation: "할머니의 작은 집은 숲 깊은 곳에 있었어요.",
      },
      {
        id: "lrrh-v3",
        term: "path",
        partOfSpeech: "noun",
        translation: "(좁은) 길, 오솔길",
        example: "Her mother told her to walk straight along the path.",
        exampleTranslation: "어머니는 길을 따라 곧장 걸어가라고 말했어요.",
      },
      {
        id: "lrrh-v4",
        term: "swallow",
        partOfSpeech: "verb",
        translation: "삼키다, 통째로 삼키다",
        example: "The wolf opened his mouth and swallowed Grandmother whole.",
        exampleTranslation: "늑대는 입을 벌려 할머니를 통째로 삼켰어요.",
      },
      {
        id: "lrrh-v5",
        term: "huntsman",
        partOfSpeech: "noun",
        translation: "사냥꾼",
        example: "A huntsman heard the loud snoring and came to help.",
        exampleTranslation: "사냥꾼이 요란한 코 고는 소리를 듣고 도우러 왔어요.",
      },
    ],
    questions: [
      {
        id: "lrrh-q1",
        prompt: "What did Little Red Riding Hood's mother tell her to do?",
        options: [
          "To run through the wood as fast as she could.",
          "To stay on the path and take the cake to Grandmother.",
          "To pick lots of flowers along the way.",
          "To bring Grandmother back home with her.",
        ],
        correctIndex: 1,
        explanation:
          "Her mother sent her straight through the wood to her sick grandmother with a cake, and told her not to leave the path.",
      },
      {
        id: "lrrh-q2",
        prompt: "Why did Little Red Riding Hood leave the path?",
        options: [
          "She saw her grandmother waving to her.",
          "She was frightened of the wolf and ran away.",
          "The wolf told her to pick flowers for Grandmother.",
          "She heard the huntsman calling for help.",
        ],
        correctIndex: 2,
        explanation:
          "The wolf pointed out the pretty flowers and suggested she pick some, so she wandered off the path and deeper into the wood.",
      },
      {
        id: "lrrh-q3",
        prompt: "How were Grandmother and Little Red Riding Hood saved?",
        options: [
          "The wolf let them go and ran away.",
          "They climbed out of a window while the wolf slept.",
          "A huntsman heard the snoring, came in, and cut the sleeping wolf open.",
          "Their mother arrived and chased the wolf off.",
        ],
        correctIndex: 2,
        explanation:
          "A passing huntsman realised the snoring was not Grandmother, found the wolf asleep, and cut it open — out jumped both of them, safe and well.",
      },
    ],
  },
  {
    slug: "anne-of-green-gables-with-an-e",
    title: "Anne of Green Gables: Anne with an E",
    titleTranslation: "빨간 머리 앤: E가 붙은 앤",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "L. M. Montgomery (1874–1942)",
    coverEmoji: "✍️",
    coverImage: "/covers/anne-of-green-gables-with-an-e.svg",
    source:
      "Adapted from Chapter 3 of L. M. Montgomery's novel \"Anne of Green Gables\" (first published 1908; public domain, Project Gutenberg #45). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why the girl cried when she arrived at Green Gables, and how Marilla's feelings toward her began to change.",
    paragraphs: [
      [
        {
          id: "awe-1",
          text: "When Matthew and the girl reached Green Gables, Marilla came to the door — and stopped, astonished.",
          translation:
            "매튜와 여자아이가 초록지붕 집에 도착했을 때, 마릴라가 문으로 나오다가 깜짝 놀라 걸음을 멈췄어요.",
        },
        {
          id: "awe-2",
          text: "\"Matthew Cuthbert, who is that?\" she asked. \"Where is the boy we asked for?\"",
          translation:
            "\"매튜 커스버트, 저 아이는 누구예요?\" 마릴라가 물었어요. \"우리가 부탁한 남자아이는 어디 있어요?\"",
        },
        {
          id: "awe-3",
          text: "\"There wasn't any boy,\" Matthew said unhappily. \"There was only her.\"",
          translation:
            "\"남자아이는 없었어.\" 매튜가 난처한 얼굴로 말했어요. \"이 아이뿐이었어.\"",
        },
      ],
      [
        {
          id: "awe-4",
          text: "The girl had been listening, and suddenly she dropped her bag and began to cry.",
          translation:
            "가만히 듣고 있던 여자아이가 갑자기 가방을 떨어뜨리고 울기 시작했어요.",
        },
        {
          id: "awe-5",
          text: "\"You don't want me because I'm not a boy!\" she sobbed. \"Nobody has ever wanted me.\"",
          translation:
            "\"제가 남자아이가 아니어서 저를 원하지 않는 거죠!\" 아이가 흐느꼈어요. \"저를 원한 사람은 아무도 없었어요.\"",
        },
        {
          id: "awe-6",
          text: "Marilla and Matthew did not know what to say to a child who was crying so hard.",
          translation:
            "마릴라와 매튜는 그토록 서럽게 우는 아이에게 무슨 말을 해야 할지 몰랐어요.",
        },
      ],
      [
        {
          id: "awe-7",
          text: "\"There is no need to cry about it,\" Marilla said, rather stiffly.",
          translation:
            "\"그렇게 울 것까지는 없잖니.\" 마릴라가 다소 딱딱하게 말했어요.",
        },
        {
          id: "awe-8",
          text: "\"There IS need,\" said the girl, lifting her wet face. \"You would cry too, if you were an orphan who had come to a place you thought would be home, and found they didn't want you.\"",
          translation:
            "\"울 일이 맞아요.\" 아이가 젖은 얼굴을 들며 말했어요. \"고아인 당신이 집이라고 믿었던 곳에 왔는데 사람들이 당신을 원하지 않는다는 걸 알게 된다면, 당신도 울 거예요.\"",
        },
        {
          id: "awe-9",
          text: "\"This is the most tragical thing that has ever happened to me.\"",
          translation: "\"이건 제 인생에서 가장 비극적인 일이에요.\"",
        },
      ],
      [
        {
          id: "awe-10",
          text: "Marilla almost smiled, though she did not want to. \"Well, don't cry any more,\" she said.",
          translation:
            "마릴라는 그러고 싶지 않았지만 하마터면 웃을 뻔했어요. \"자, 이제 그만 울어라.\" 마릴라가 말했어요.",
        },
        {
          id: "awe-11",
          text: "\"We won't send you away tonight. You may stay here until we find out what went wrong. What is your name?\"",
          translation:
            "\"오늘 밤에 너를 내보내지는 않을 거야. 무엇이 잘못됐는지 알아낼 때까지 여기 있어도 된다. 네 이름이 뭐니?\"",
        },
        {
          id: "awe-12",
          text: "The girl hesitated. \"Will you please call me Cordelia?\" she asked.",
          translation:
            "아이는 잠시 망설였어요. \"저를 코델리아라고 불러 주시겠어요?\" 아이가 물었어요.",
        },
      ],
      [
        {
          id: "awe-13",
          text: "\"Is Cordelia your name?\" asked Marilla. \"No, but it is such a beautiful name, and I love to pretend it is mine.\"",
          translation:
            "\"코델리아가 네 이름이니?\" 마릴라가 물었어요. \"아니요, 하지만 정말 아름다운 이름이라서, 제 이름인 척하는 게 너무 좋아요.\"",
        },
        {
          id: "awe-14",
          text: "\"My real name is Anne Shirley,\" she said sadly, \"but if you must call me Anne, please call me Anne spelled with an E.\"",
          translation:
            "\"제 진짜 이름은 앤 셜리예요.\" 아이가 슬프게 말했어요. \"하지만 꼭 앤이라고 불러야 한다면, E를 붙여서 쓰는 앤으로 불러 주세요.\"",
        },
        {
          id: "awe-15",
          text: "\"What difference does the spelling make?\" asked Marilla, with the ghost of a smile.",
          translation:
            "\"철자가 무슨 상관이니?\" 마릴라가 희미한 미소를 띠며 물었어요.",
        },
      ],
      [
        {
          id: "awe-16",
          text: "\"Oh, it makes a great difference! A-n-n looks dreadful, but A-n-n-e looks so much more distinguished.\"",
          translation:
            "\"아, 아주 큰 상관이 있어요! A-n-n은 끔찍해 보이지만, A-n-n-e은 훨씬 더 기품 있어 보이거든요.\"",
        },
        {
          id: "awe-17",
          text: "Marilla decided that supper could come first and the questions could wait: the next day they would drive to Mrs. Spencer's and find out the truth.",
          translation:
            "마릴라는 저녁부터 먹고 질문은 나중에 하기로 마음먹었어요. 다음 날 스펜서 부인 댁으로 마차를 몰고 가서 진실을 알아보기로 했지요.",
        },
      ],
    ],
    vocab: [
      {
        id: "awe-v1",
        term: "astonished",
        partOfSpeech: "adjective",
        translation: "깜짝 놀란",
        example: "Marilla was astonished to see a girl instead of the boy she had asked for.",
        exampleTranslation:
          "마릴라는 자기가 부탁한 남자아이 대신 여자아이가 온 것을 보고 깜짝 놀랐어요.",
      },
      {
        id: "awe-v2",
        term: "sob",
        partOfSpeech: "verb",
        translation: "흐느끼다, 흐느껴 울다",
        example: "The girl sat down and sobbed with her face in her hands.",
        exampleTranslation: "여자아이는 자리에 앉아 두 손에 얼굴을 묻고 흐느꼈어요.",
      },
      {
        id: "awe-v3",
        term: "orphan",
        partOfSpeech: "noun",
        translation: "고아",
        example: "Anne was an orphan who had never had a real home.",
        exampleTranslation: "앤은 진짜 집을 가져 본 적 없는 고아였어요.",
      },
      {
        id: "awe-v4",
        term: "hesitate",
        partOfSpeech: "verb",
        translation: "망설이다, 머뭇거리다",
        example: "She hesitated before she answered the question.",
        exampleTranslation: "그 아이는 질문에 답하기 전에 망설였어요.",
      },
      {
        id: "awe-v5",
        term: "distinguished",
        partOfSpeech: "adjective",
        translation: "기품 있는, 품위 있어 보이는",
        example: "Anne thought the name spelled with an E looked more distinguished.",
        exampleTranslation: "앤은 E를 넣어 쓴 이름이 더 기품 있어 보인다고 생각했어요.",
      },
    ],
    questions: [
      {
        id: "awe-q1",
        prompt: "Why did Marilla stop and stare when Matthew arrived?",
        options: [
          "Matthew had come home much later than she expected.",
          "He had brought back a girl, not the boy they had asked for.",
          "The girl was wearing one of Marilla's old dresses.",
          "Matthew had forgotten the shopping in town.",
        ],
        correctIndex: 1,
        explanation:
          "Marilla and Matthew had arranged to adopt a boy to help on the farm, so seeing Matthew arrive with a girl left her astonished and confused.",
      },
      {
        id: "awe-q2",
        prompt: "Why did the girl burst into tears?",
        options: [
          "She was tired and hungry after the long train journey.",
          "Marilla had spoken to her very unkindly.",
          "She realised they had wanted a boy and might not keep her.",
          "She had left her favourite bag on the train.",
        ],
        correctIndex: 2,
        explanation:
          "Hearing that there was supposed to be a boy, the girl understood that the Cuthberts might not want her, and — never having been wanted before — she broke down crying.",
      },
      {
        id: "awe-q3",
        prompt: "Why did the girl want to be called \"Anne spelled with an E\"?",
        options: [
          "It was the name written on her papers from the orphanage.",
          "Her mother had always spelled it that way.",
          "She thought \"Anne\" looked far nicer and more distinguished than \"Ann\".",
          "Another girl at the orphanage was already called Ann.",
        ],
        correctIndex: 2,
        explanation:
          "Her real name was Anne Shirley; she begged to be called Cordelia, but if she had to be Anne, she insisted on the E because \"A-n-n-e\" looked more distinguished to her than plain \"A-n-n\".",
      },
    ],
  },
  {
    slug: "sense-and-sensibility",
    title: "Sense and Sensibility",
    titleTranslation: "이성과 감성",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Jane Austen (1775–1817)",
    coverEmoji: "🏡",
    coverImage: "/covers/sense-and-sensibility.svg",
    source:
      "Adapted from Chapter 1 of Jane Austen's novel \"Sense and Sensibility\" (first published 1811; long in the public domain, Project Gutenberg #21839). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why Mr. Henry Dashwood's wife and daughters were left poor, and what John Dashwood decided to give them.",
    paragraphs: [
      [
        {
          id: "sns-1",
          text: "For many years the Dashwood family had lived at Norland Park, a large old house in the south of England.",
          translation:
            "여러 해 동안 대시우드 집안은 잉글랜드 남부의 크고 오래된 저택인 노랜드 파크에서 살았어요.",
        },
        {
          id: "sns-2",
          text: "The estate belonged to an elderly bachelor, who invited his nephew, Mr. Henry Dashwood, to live there with his wife and three daughters.",
          translation:
            "그 사유지는 나이 든 독신 남성의 것이었는데, 그는 조카인 헨리 대시우드 씨에게 아내와 세 딸을 데리고 와서 함께 살자고 했어요.",
        },
        {
          id: "sns-3",
          text: "The daughters were Elinor, Marianne, and young Margaret, and the old man grew fond of them all.",
          translation:
            "딸들은 엘리너, 메리앤, 그리고 어린 마거릿이었고, 노인은 이들 모두를 아끼게 되었어요.",
        },
      ],
      [
        {
          id: "sns-4",
          text: "Mr. Henry Dashwood also had a grown son, John, from his first marriage, and John had a little boy of his own.",
          translation:
            "헨리 대시우드 씨에게는 첫 번째 결혼에서 얻은 다 큰 아들 존도 있었고, 존에게는 자기 어린 아들이 하나 있었어요.",
        },
        {
          id: "sns-5",
          text: "When the old gentleman died, everyone learned that his will was a great disappointment.",
          translation:
            "노신사가 세상을 떠나자, 그의 유언장이 크게 실망스러운 내용이라는 것을 모두 알게 되었어요.",
        },
        {
          id: "sns-6",
          text: "He left Norland to Henry, but only for his lifetime; after that it would pass straight to John and then to John's small son.",
          translation:
            "그는 노랜드를 헨리에게 남겼지만, 그것은 헨리가 살아 있는 동안만이었어요. 그 뒤에는 곧바로 존에게, 그다음에는 존의 어린 아들에게 넘어가게 되어 있었지요.",
        },
      ],
      [
        {
          id: "sns-7",
          text: "This meant that Mr. Henry Dashwood could not leave the house or the land to his wife and daughters.",
          translation:
            "이 말은 헨리 대시우드 씨가 그 집이나 땅을 아내와 딸들에게 물려줄 수 없다는 뜻이었어요.",
        },
        {
          id: "sns-8",
          text: "He received only ten thousand pounds of his own, and the rest of the fortune was tied up for his son and grandson.",
          translation:
            "그가 자기 몫으로 받은 것은 겨우 1만 파운드였고, 나머지 재산은 모두 아들과 손자를 위해 묶여 있었어요.",
        },
        {
          id: "sns-9",
          text: "He hoped to live many more years and save money for his girls, but he fell ill and died just twelve months later.",
          translation:
            "그는 앞으로 여러 해 더 살면서 딸들을 위해 돈을 모으기를 바랐지만, 병이 들어 겨우 열두 달 뒤에 세상을 떠났어요.",
        },
      ],
      [
        {
          id: "sns-10",
          text: "On his deathbed, Henry sent for John and begged him to take care of his stepmother and his three half-sisters.",
          translation:
            "임종을 앞두고, 헨리는 존을 불러 계모와 세 이복 누이를 잘 보살펴 달라고 간곡히 부탁했어요.",
        },
        {
          id: "sns-11",
          text: "John Dashwood was not a cruel man, but he was cold and rather selfish, and he thought a great deal about money.",
          translation:
            "존 대시우드는 잔인한 사람은 아니었지만, 차갑고 다소 이기적이었으며, 돈에 대해 아주 많이 생각하는 사람이었어요.",
        },
        {
          id: "sns-12",
          text: "Still, he was moved by his father's words, and he promised to do everything he could to make the women comfortable.",
          translation:
            "그래도 그는 아버지의 말에 마음이 움직여, 그 여인들이 편안히 지내도록 할 수 있는 모든 일을 하겠다고 약속했어요.",
        },
      ],
      [
        {
          id: "sns-13",
          text: "After his father's death, John thought carefully about what \"everything he could\" should mean.",
          translation:
            "아버지가 돌아가신 뒤, 존은 '할 수 있는 모든 일'이 무엇을 뜻해야 하는지 곰곰이 생각했어요.",
        },
        {
          id: "sns-14",
          text: "He decided he might give his sisters a thousand pounds each — three thousand pounds in all.",
          translation:
            "그는 누이들에게 각각 1천 파운드씩, 모두 합쳐 3천 파운드를 줄 수도 있겠다고 마음먹었어요.",
        },
        {
          id: "sns-15",
          text: "\"That would be generous and handsome,\" he told himself. \"It would be quite enough to make them easy, and I could spare it with very little trouble.\"",
          translation:
            "\"그 정도면 후하고 훌륭하지.\" 그는 스스로에게 말했어요. \"그들이 넉넉히 지내기에 충분할 테고, 나야 별 어려움 없이 내줄 수 있으니까.\"",
        },
      ],
      [
        {
          id: "sns-16",
          text: "He turned the plan over in his mind all day, and felt pleased with his own kindness.",
          translation:
            "그는 온종일 그 계획을 머릿속으로 이리저리 굴려 보며, 자신의 친절함에 흡족해했어요.",
        },
        {
          id: "sns-17",
          text: "He did not change his mind — not yet — and he did not once think how small three thousand pounds would seem beside all that he had gained.",
          translation:
            "그는 마음을 바꾸지 않았어요. 아직은요. 그리고 자기가 얻은 그 모든 것에 비하면 3천 파운드가 얼마나 하찮아 보일지는 단 한 번도 생각하지 않았어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "sns-v1",
        term: "estate",
        partOfSpeech: "noun",
        translation: "(넓은 땅이 딸린) 사유지, 토지",
        example: "Norland was a large estate with a great house, gardens, and farmland.",
        exampleTranslation: "노랜드는 큰 저택과 정원, 농지가 딸린 넓은 사유지였어요.",
      },
      {
        id: "sns-v2",
        term: "bachelor",
        partOfSpeech: "noun",
        translation: "독신 남성, 미혼 남성",
        example: "The old bachelor had never married and had no children of his own.",
        exampleTranslation: "그 나이 든 독신 남성은 결혼한 적이 없었고 자기 자식도 없었어요.",
      },
      {
        id: "sns-v3",
        term: "will",
        partOfSpeech: "noun",
        translation: "유언장",
        example: "In his will, the old man left the house to his nephew.",
        exampleTranslation: "노인은 유언장에서 그 집을 조카에게 남겼어요.",
      },
      {
        id: "sns-v4",
        term: "fortune",
        partOfSpeech: "noun",
        translation: "재산, 부",
        example: "Most of the family fortune was kept for the son and the grandson.",
        exampleTranslation: "가문 재산의 대부분은 아들과 손자를 위해 남겨졌어요.",
      },
      {
        id: "sns-v5",
        term: "generous",
        partOfSpeech: "adjective",
        translation: "후한, 너그러운",
        example: "John told himself that three thousand pounds was a generous gift.",
        exampleTranslation: "존은 3천 파운드가 후한 선물이라고 스스로에게 말했어요.",
      },
    ],
    questions: [
      {
        id: "sns-q1",
        prompt: "Why was the old gentleman's will a disappointment to Mr. Henry Dashwood?",
        options: [
          "It left Norland to a distant cousin instead of to him.",
          "He could live at Norland but could not pass the house or land to his wife and daughters.",
          "It ordered him to sell Norland and divide the money.",
          "It gave everything to charity and nothing to the family.",
        ],
        correctIndex: 1,
        explanation:
          "Henry was given Norland only for his lifetime; afterwards it went straight to his son John and John's little boy, so he could not leave the estate to his wife or his three daughters.",
      },
      {
        id: "sns-q2",
        prompt: "What did Mr. Henry Dashwood ask his son John to do?",
        options: [
          "To sell the family's London house and share the money.",
          "To let his half-sisters live at Norland forever.",
          "To take care of his stepmother and his three half-sisters.",
          "To find good husbands for Elinor and Marianne.",
        ],
        correctIndex: 2,
        explanation:
          "Dying only a year after the old gentleman, Henry sent for John and begged him to look after the women, who would be left with very little.",
      },
      {
        id: "sns-q3",
        prompt: "What did John Dashwood privately decide to do for his sisters?",
        options: [
          "Give them Norland and move his own family away.",
          "Give them a thousand pounds each, and feel pleased with himself for it.",
          "Invite them to come and live in his own house in London.",
          "Nothing at all, since his father's promise did not bind him.",
        ],
        correctIndex: 1,
        explanation:
          "John resolved to give the three women a thousand pounds apiece — three thousand in total — and spent the day admiring his own generosity, without noticing how small the sum was next to his inheritance.",
      },
    ],
  },
  {
    slug: "frankenstein",
    title: "Frankenstein",
    titleTranslation: "프랑켄슈타인",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Mary Shelley (1797–1851)",
    coverEmoji: "🧭",
    coverImage: "/covers/frankenstein.svg",
    source:
      "Adapted from Letter 1 of Mary Shelley's novel \"Frankenstein; or, The Modern Prometheus\" (first published 1818; long in the public domain, Project Gutenberg #84). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe what Walton hopes to find at the North Pole, and what he has done over six years to prepare for the voyage.",
    paragraphs: [
      [
        {
          id: "frk-1",
          text: "My dear sister, you will be glad to hear that no disaster has met the start of the journey you feared so much for me.",
          translation:
            "사랑하는 누이에게, 네가 그토록 걱정하던 여정이 아무 사고 없이 시작되었다는 소식을 들으면 기뻐하겠지.",
        },
        {
          id: "frk-2",
          text: "I arrived in St. Petersburg yesterday, and my first task is to tell you that I am well and that my hopes for the expedition are growing.",
          translation:
            "나는 어제 상트페테르부르크에 도착했고, 가장 먼저 할 일은 내가 잘 지내고 있으며 이 탐험에 대한 기대가 점점 커지고 있다는 것을 네게 전하는 거야.",
        },
        {
          id: "frk-3",
          text: "I am already far to the north of London, and as I walk the streets I feel a cold wind from the Arctic that sharpens my mind and fills me with delight.",
          translation:
            "나는 이미 런던보다 훨씬 북쪽에 와 있고, 거리를 걸으면 북극에서 불어오는 찬바람이 정신을 또렷하게 하고 나를 기쁨으로 가득 채운단다.",
        },
      ],
      [
        {
          id: "frk-4",
          text: "That wind has blown from the very regions I am travelling toward, and it gives me a foretaste of those icy seas.",
          translation:
            "그 바람은 바로 내가 향하고 있는 그 지역에서 불어온 것이라, 나에게 그 얼음 바다를 미리 맛보게 해 줘.",
        },
        {
          id: "frk-5",
          text: "Others tell me the North Pole is only a place of frost and empty desolation, but I cannot believe it.",
          translation:
            "사람들은 북극이 서리와 텅 빈 황량함뿐인 곳이라고 말하지만, 나는 그 말을 믿을 수가 없어.",
        },
        {
          id: "frk-6",
          text: "In my imagination it is a country of beauty, where the sun never sets and a calm sea carries the traveller to wonders no one has ever seen.",
          translation:
            "내 상상 속에서 그곳은 해가 결코 지지 않고, 잔잔한 바다가 여행자를 아무도 본 적 없는 경이로움으로 실어다 주는 아름다운 나라야.",
        },
      ],
      [
        {
          id: "frk-7",
          text: "There, I believe, I may learn what strange power turns the compass needle, and make discoveries useful to sailors for a hundred years.",
          translation:
            "나는 그곳에서 나침반 바늘을 돌리는 그 이상한 힘이 무엇인지 알아내고, 앞으로 백 년 동안 뱃사람들에게 도움이 될 발견을 할 수 있으리라 믿어.",
        },
        {
          id: "frk-8",
          text: "Above all, I will set my restless curiosity to rest by seeing a part of the world no human being has visited before.",
          translation:
            "무엇보다도, 나는 어떤 인간도 가 본 적 없는 세상의 한 부분을 직접 봄으로써 가만히 있지 못하는 내 호기심을 잠재울 거야.",
        },
        {
          id: "frk-9",
          text: "Writing this down has calmed the nervousness I felt when I began the letter, and my heart glows with a hope that lifts me up.",
          translation:
            "이렇게 적어 내려가다 보니 편지를 시작할 때 느꼈던 초조함이 가라앉았고, 내 가슴은 나를 들어 올리는 듯한 희망으로 뜨겁게 달아오른단다.",
        },
      ],
      [
        {
          id: "frk-10",
          text: "This voyage has been the favourite dream of my life since I was a boy.",
          translation: "이 항해는 내가 소년이던 시절부터 내 인생에서 가장 좋아한 꿈이었어.",
        },
        {
          id: "frk-11",
          text: "My education was neglected, but I read hungrily, and my uncle's shelves of travel books were my whole school.",
          translation:
            "내 교육은 소홀히 되었지만, 나는 게걸스럽게 책을 읽었고, 삼촌의 여행기 책장이 내 학교의 전부였지.",
        },
        {
          id: "frk-12",
          text: "For one year I tried instead to become a poet, and lived in a paradise of my own making, but I failed, and turned back to the sea.",
          translation:
            "한 해 동안은 대신 시인이 되려고 애쓰며 내가 만든 낙원 속에서 살았지만, 실패하고는 다시 바다로 돌아왔어.",
        },
      ],
      [
        {
          id: "frk-13",
          text: "Since then I have given six years to getting ready for this single purpose.",
          translation:
            "그때부터 나는 이 한 가지 목표를 준비하는 데 육 년을 바쳤어.",
        },
        {
          id: "frk-14",
          text: "I joined whaling ships in the northern ice, bore cold, hunger, and sleeplessness, and worked harder by day than the common sailors.",
          translation:
            "나는 북쪽 얼음 바다의 포경선에 올라 추위와 굶주림과 잠 못 이루는 밤을 견뎠고, 낮에는 보통 선원들보다 더 힘들게 일했어.",
        },
        {
          id: "frk-15",
          text: "At night I studied mathematics, medicine, and science, and twice I sailed as an officer on a Greenland whaler and did well.",
          translation:
            "밤에는 수학과 의학과 과학을 공부했고, 두 번은 그린란드 포경선의 항해사로 배를 타서 훌륭히 해냈지.",
        },
      ],
      [
        {
          id: "frk-16",
          text: "Now I have come to hire a ship and a crew, and if all goes well we will sail in June.",
          translation:
            "이제 나는 배와 선원들을 구하러 왔고, 모든 일이 잘 풀리면 6월에 출항할 거야.",
        },
        {
          id: "frk-17",
          text: "Farewell, my dear Margaret; may Heaven bless you, and keep me safe, so that I can thank you again and again for all your kindness.",
          translation:
            "잘 있어, 사랑하는 마거릿. 하늘이 너에게 축복을 내리고 나를 지켜 주어, 내가 네 모든 친절에 몇 번이고 감사할 수 있기를.",
        },
      ],
    ],
    vocab: [
      {
        id: "frk-v1",
        term: "expedition",
        partOfSpeech: "noun",
        translation: "탐험, 원정",
        example: "Walton had planned his polar expedition for many years.",
        exampleTranslation: "월턴은 여러 해 동안 자신의 극지 탐험을 계획해 왔어요.",
      },
      {
        id: "frk-v2",
        term: "desolation",
        partOfSpeech: "noun",
        translation: "황량함, 쓸쓸함",
        example: "Sailors warned him that the far north was a place of ice and desolation.",
        exampleTranslation: "선원들은 먼 북쪽이 얼음과 황량함뿐인 곳이라고 그에게 경고했어요.",
      },
      {
        id: "frk-v3",
        term: "neglected",
        partOfSpeech: "adjective",
        translation: "소홀히 된, 방치된",
        example: "His schooling had been neglected, but he read every book he could find.",
        exampleTranslation: "그의 학교 교육은 소홀히 되었지만, 그는 찾을 수 있는 책은 모두 읽었어요.",
      },
      {
        id: "frk-v4",
        term: "restless",
        partOfSpeech: "adjective",
        translation: "가만히 있지 못하는, 안절부절못하는",
        example: "Only a dangerous voyage could satisfy his restless curiosity.",
        exampleTranslation: "위험한 항해만이 가만히 있지 못하는 그의 호기심을 채워 줄 수 있었어요.",
      },
      {
        id: "frk-v5",
        term: "crew",
        partOfSpeech: "noun",
        translation: "(배·항공기의) 승무원, 선원들",
        example: "He came to the city to hire a ship and a crew for the journey.",
        exampleTranslation: "그는 항해에 쓸 배와 선원들을 구하러 그 도시에 왔어요.",
      },
    ],
    questions: [
      {
        id: "frk-q1",
        prompt: "Why is Walton writing to his sister at the start of the novel?",
        options: [
          "To ask her to send him money for a ship.",
          "To tell her he has arrived safely and that his hopes for the expedition are rising.",
          "To warn her that the voyage has already gone wrong.",
          "To say goodbye because he does not expect to return.",
        ],
        correctIndex: 1,
        explanation:
          "Margaret had feared for him; Walton writes from St. Petersburg to reassure her that the journey has begun without disaster and that his confidence in success is growing.",
      },
      {
        id: "frk-q2",
        prompt: "How does Walton imagine the North Pole?",
        options: [
          "As a frozen wasteland that he must simply endure.",
          "As a busy trading route full of other ships.",
          "As a region of beauty and endless daylight, full of undiscovered wonders.",
          "As a short, easy trip he can finish in a few weeks.",
        ],
        correctIndex: 2,
        explanation:
          "Although others describe the pole as frost and desolation, Walton pictures it as a place of beauty where the sun never sets and a calm sea leads to wonders no one has ever seen.",
      },
      {
        id: "frk-q3",
        prompt: "What had Walton done to prepare for this voyage?",
        options: [
          "He studied at university for a degree in navigation.",
          "He spent six years reading travel books and nothing more.",
          "He spent six years on whaling ships enduring hardship, and studied science at night.",
          "He inherited a ship and crew from his uncle Thomas.",
        ],
        correctIndex: 2,
        explanation:
          "For six years Walton served on whaling vessels in the northern ice, bearing cold, hunger and sleeplessness by day and studying mathematics, medicine and science by night; twice he sailed as an officer on a Greenland whaler.",
      },
    ],
  },
  {
    slug: "the-age-of-innocence",
    title: "The Age of Innocence",
    titleTranslation: "순수의 시대",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Edith Wharton (1862–1937)",
    coverEmoji: "🎭",
    coverImage: "/covers/the-age-of-innocence.svg",
    source:
      "Adapted from Chapter 1 of Edith Wharton's novel \"The Age of Innocence\" (first published 1920; long in the public domain, Project Gutenberg #541). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain who the Countess Olenska was, why her presence at the opera caused a stir, and how Newland Archer decided to respond.",
    paragraphs: [
      [
        {
          id: "aoi-1",
          text: "On a snowy January evening in the 1870s, fashionable New York filled the old Academy of Music to hear a famous soprano sing in Faust.",
          translation:
            "1870년대의 눈 내리는 어느 1월 저녁, 뉴욕의 상류 사회 사람들이 유명한 소프라노가 '파우스트'를 부르는 것을 들으려고 오래된 뮤직 아카데미를 가득 채웠어요.",
        },
        {
          id: "aoi-2",
          text: "Newland Archer arrived late on purpose, since arriving late was one of the small rules by which his world lived.",
          translation:
            "뉴랜드 아처는 일부러 늦게 도착했는데, 늦게 도착하는 것이 그의 세계가 따르는 자잘한 규칙 중 하나였기 때문이에요.",
        },
        {
          id: "aoi-3",
          text: "On the stage the singer pulled the petals from a daisy, one by one, singing softly, \"He loves me — he loves me not.\"",
          translation:
            "무대 위에서 가수는 데이지 꽃잎을 하나씩 하나씩 뜯으며 나지막이 노래했어요. \"그는 나를 사랑해 — 사랑하지 않아.\"",
        },
      ],
      [
        {
          id: "aoi-4",
          text: "Across the theatre, in old Mrs. Mingott's box, sat a girl in white with lilies of the valley at her breast.",
          translation:
            "극장 건너편, 나이 든 밍곳 부인의 특별석에는 가슴에 은방울꽃을 단, 흰옷 차림의 한 아가씨가 앉아 있었어요.",
        },
        {
          id: "aoi-5",
          text: "She was May Welland, and that night Newland's engagement to her was to be quietly made known to their families.",
          translation:
            "그 아가씨는 메이 웰런드였고, 그날 밤 뉴랜드와 그녀의 약혼이 양가 가족에게 조용히 알려질 예정이었어요.",
        },
        {
          id: "aoi-6",
          text: "He watched her with pride, glad that she was too innocent to follow the meaning of the opera.",
          translation:
            "그는 뿌듯한 마음으로 그녀를 바라보며, 그녀가 그 오페라의 뜻을 알아듣기에는 너무 순진하다는 것을 다행으로 여겼어요.",
        },
      ],
      [
        {
          id: "aoi-7",
          text: "Then he noticed a young woman he did not know, sitting a little behind May in the same box.",
          translation:
            "그때 그는 같은 특별석에서 메이보다 조금 뒤에 앉아 있는, 알지 못하는 젊은 여인을 발견했어요.",
        },
        {
          id: "aoi-8",
          text: "Her dark blue velvet dress, cut low, and her loosely curled hair did not belong to the careful New York style.",
          translation:
            "목선이 깊게 파인 짙은 파란색 벨벳 드레스와 느슨하게 곱슬거리는 머리는 조심스러운 뉴욕의 방식과는 어울리지 않았어요.",
        },
        {
          id: "aoi-9",
          text: "It was the Countess Ellen Olenska, May's cousin, just back from Europe after leaving a cruel husband.",
          translation:
            "그 여인은 메이의 사촌인 엘렌 올렌스카 백작 부인으로, 잔인한 남편을 떠나 막 유럽에서 돌아온 참이었어요.",
        },
      ],
      [
        {
          id: "aoi-10",
          text: "A stir passed through the theatre, and in Newland's club box the men lowered their voices.",
          translation:
            "극장 안에 술렁임이 번졌고, 뉴랜드가 있던 클럽 특별석의 남자들은 목소리를 낮췄어요.",
        },
        {
          id: "aoi-11",
          text: "It was one thing for the family to take the Countess back, they said, and quite another to show her off in a public opera box.",
          translation:
            "가족이 백작 부인을 다시 받아들이는 것과, 그녀를 사람들 앞의 오페라 특별석에 내보이는 것은 전혀 다른 문제라고 그들은 말했어요.",
        },
        {
          id: "aoi-12",
          text: "To bring her out on this of all nights, they murmured, was a strange and awkward thing to do.",
          translation:
            "하필 이런 날 밤에 그녀를 데리고 나온 것은 이상하고 난처한 일이라고 그들은 수군거렸어요.",
        },
      ],
      [
        {
          id: "aoi-13",
          text: "Newland felt a flash of annoyance that May's family had drawn her — and himself — so close to gossip.",
          translation:
            "뉴랜드는 메이의 가족이 그녀를, 그리고 자신까지도 험담에 그토록 가까이 끌어들였다는 데에 짜증이 확 치밀었어요.",
        },
        {
          id: "aoi-14",
          text: "Yet he also felt that a man's first duty was to stand by the family he was about to enter.",
          translation:
            "하지만 그는 한편으로, 남자의 첫 번째 의무는 자신이 곧 들어갈 가족의 편에 서는 것이라고 느꼈어요.",
        },
        {
          id: "aoi-15",
          text: "If they had decided to support the Countess, then he would support her too, and let everyone see it.",
          translation:
            "가족이 백작 부인을 지지하기로 했다면, 그도 그녀를 지지할 것이고, 그것을 모두가 보도록 할 생각이었어요.",
        },
      ],
      [
        {
          id: "aoi-16",
          text: "He rose, left his own box, and made his way around the crowded horseshoe of red and gold toward the Mingott box.",
          translation:
            "그는 자리에서 일어나 자기 특별석을 나와, 붉은색과 금색으로 이어진 붐비는 말굽 모양 관람석을 돌아 밍곳 부인의 특별석 쪽으로 향했어요.",
        },
        {
          id: "aoi-17",
          text: "He would take his place at May's side that very evening, in front of all of New York.",
          translation:
            "그는 바로 그날 저녁, 온 뉴욕이 지켜보는 앞에서 메이의 곁에 자리를 잡을 작정이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "aoi-v1",
        term: "soprano",
        partOfSpeech: "noun",
        translation: "소프라노 (여성의 가장 높은 음역, 또는 그 가수)",
        example: "The famous soprano sang the part of Marguerite in Faust.",
        exampleTranslation: "그 유명한 소프라노가 '파우스트'에서 마르그리트 역을 노래했어요.",
      },
      {
        id: "aoi-v2",
        term: "engagement",
        partOfSpeech: "noun",
        translation: "약혼",
        example: "That evening Newland's engagement to May was to be announced to the families.",
        exampleTranslation: "그날 저녁 뉴랜드와 메이의 약혼이 양가 가족에게 알려질 예정이었어요.",
      },
      {
        id: "aoi-v3",
        term: "innocent",
        partOfSpeech: "adjective",
        translation: "순진한, 세상 물정을 모르는",
        example: "He liked to think of May as too innocent to understand such things.",
        exampleTranslation: "그는 메이가 그런 것들을 이해하기에는 너무 순진하다고 여기고 싶어 했어요.",
      },
      {
        id: "aoi-v4",
        term: "countess",
        partOfSpeech: "noun",
        translation: "백작 부인",
        example: "The Countess Olenska had married a Polish count and then left him.",
        exampleTranslation: "올렌스카 백작 부인은 폴란드 백작과 결혼했다가 그를 떠났어요.",
      },
      {
        id: "aoi-v5",
        term: "gossip",
        partOfSpeech: "noun",
        translation: "험담, 남의 말",
        example: "The family feared that the Countess would become the subject of gossip.",
        exampleTranslation: "가족은 백작 부인이 험담의 대상이 될까 봐 두려워했어요.",
      },
    ],
    questions: [
      {
        id: "aoi-q1",
        prompt: "Why did Newland Archer arrive late at the opera?",
        options: [
          "His carriage had been delayed by the heavy snow.",
          "Arriving late was one of the social customs of his world.",
          "He did not really want to see May Welland that night.",
          "He had been arguing with the men in his club box.",
        ],
        correctIndex: 1,
        explanation:
          "In Archer's New York, small unwritten rules governed everything; arriving after the opera had begun was simply what fashionable people did.",
      },
      {
        id: "aoi-q2",
        prompt: "Who was the unknown woman in Mrs. Mingott's box, and why did she draw attention?",
        options: [
          "A famous European singer visiting New York for one night.",
          "May Welland's older sister, newly married in Paris.",
          "Countess Ellen Olenska, May's cousin, just back from Europe after leaving a cruel husband.",
          "A rival of May's for Newland's affections.",
        ],
        correctIndex: 2,
        explanation:
          "The woman in the low-cut blue velvet dress was the Countess Olenska; her European looks, and the scandal of a wife who had left her husband, made her presence in a public box a talking point.",
      },
      {
        id: "aoi-q3",
        prompt: "What did Newland decide to do by the end of the chapter?",
        options: [
          "To leave the opera quietly and avoid the gossip.",
          "To speak sharply to the men in his club box.",
          "To cross to the Mingott box and stand openly at May's side.",
          "To postpone the announcement of his engagement.",
        ],
        correctIndex: 2,
        explanation:
          "Though annoyed that May's family had exposed them both to gossip by parading the Countess, Archer felt he must stand by the family he was joining, so he set off around the theatre to take his place beside May.",
      },
    ],
  },
  {
    slug: "the-frog-prince",
    title: "The Frog Prince",
    titleTranslation: "개구리 왕자",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "🐸",
    coverImage: "/covers/the-frog-prince.svg",
    source:
      "Adapted from the Brothers Grimm tale \"The Frog Prince\" (\"Der Froschkönig,\" collected 1812; long in the public domain, Project Gutenberg #2591). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's harsher details have been softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain the promise the princess made to the frog, why she had to keep it, and what happened to the frog in the end.",
    paragraphs: [
      [
        {
          id: "tfp-1",
          text: "A king had a young daughter who liked to play by a deep well in the woods with a golden ball.",
          translation:
            "어느 왕에게는 어린 딸이 있었는데, 그 딸은 숲속 깊은 우물 옆에서 황금 공을 가지고 노는 것을 좋아했어요.",
        },
        {
          id: "tfp-2",
          text: "One day she threw the ball too high, and it fell into the well and sank out of sight.",
          translation:
            "어느 날 공주는 공을 너무 높이 던졌고, 공은 우물 속으로 떨어져 보이지 않게 가라앉았어요.",
        },
        {
          id: "tfp-3",
          text: "The princess sat down and cried, because the golden ball was her favourite thing.",
          translation:
            "공주는 주저앉아 울었어요. 그 황금 공이 가장 아끼는 물건이었거든요.",
        },
      ],
      [
        {
          id: "tfp-4",
          text: "A frog put its head out of the water and asked, \"Why are you crying?\"",
          translation:
            "개구리 한 마리가 물 밖으로 머리를 내밀고 물었어요. \"왜 울고 있니?\"",
        },
        {
          id: "tfp-5",
          text: "\"My golden ball has fallen into the well,\" she said, \"and the water is far too deep.\"",
          translation:
            "\"내 황금 공이 우물에 빠졌어.\" 공주가 말했어요. \"그런데 물이 너무 깊어.\"",
        },
        {
          id: "tfp-6",
          text: "\"I will bring it back,\" said the frog, \"if you promise to let me be your friend, and eat from your plate, and sleep in your room.\"",
          translation:
            "\"내가 가져다줄게.\" 개구리가 말했어요. \"네가 나를 친구로 삼고, 네 접시에서 같이 먹고, 네 방에서 자게 해 주겠다고 약속한다면 말이야.\"",
        },
      ],
      [
        {
          id: "tfp-7",
          text: "The princess promised, though she did not really mean it, and the frog dived down and brought up the ball.",
          translation:
            "공주는 진심은 아니었지만 약속했고, 개구리는 물속으로 뛰어들어 공을 가지고 올라왔어요.",
        },
        {
          id: "tfp-8",
          text: "She snatched it and ran home as fast as she could, and soon she forgot all about the frog.",
          translation:
            "공주는 공을 낚아채 있는 힘껏 집으로 달려갔고, 곧 개구리에 대해 까맣게 잊어버렸어요.",
        },
        {
          id: "tfp-9",
          text: "But the next evening, something went flip, flap up the stairs and knocked at the door.",
          translation:
            "그런데 다음 날 저녁, 무언가가 찰박찰박 계단을 올라와 문을 두드렸어요.",
        },
      ],
      [
        {
          id: "tfp-10",
          text: "It was the frog, and the frightened princess shut the door in his face.",
          translation:
            "개구리였고, 겁이 난 공주는 개구리 앞에서 문을 쾅 닫아 버렸어요.",
        },
        {
          id: "tfp-11",
          text: "Her father the king asked what was wrong, and she told him about her promise by the well.",
          translation:
            "아버지인 왕이 무슨 일이냐고 물었고, 공주는 우물가에서 한 약속에 대해 이야기했어요.",
        },
        {
          id: "tfp-12",
          text: "\"You made a promise,\" said the king, \"so you must keep it. Let the frog come in.\"",
          translation:
            "\"네가 약속을 했으니,\" 왕이 말했어요. \"그 약속을 지켜야 한다. 개구리를 들여보내라.\"",
        },
      ],
      [
        {
          id: "tfp-13",
          text: "The frog hopped to the table and ate from her golden plate, while the princess could hardly eat at all.",
          translation:
            "개구리는 식탁으로 폴짝 뛰어올라 공주의 황금 접시에서 먹었고, 공주는 거의 아무것도 먹지 못했어요.",
        },
        {
          id: "tfp-14",
          text: "When it was time for bed, the frog asked to come upstairs too, and again the king told her to keep her word.",
          translation:
            "잘 시간이 되자 개구리는 자기도 위층에 올라가겠다고 했고, 왕은 다시 한번 공주에게 약속을 지키라고 말했어요.",
        },
        {
          id: "tfp-15",
          text: "She was very cross, and almost threw the frog down — but then she remembered her promise and set him down gently on a soft cushion.",
          translation:
            "공주는 몹시 화가 나서 개구리를 내동댕이칠 뻔했지만, 곧 약속을 떠올리고는 개구리를 푹신한 방석 위에 살며시 내려놓았어요.",
        },
      ],
      [
        {
          id: "tfp-16",
          text: "At that moment the frog changed into a young prince with kind, smiling eyes.",
          translation:
            "바로 그 순간, 개구리는 다정하게 웃는 눈을 가진 젊은 왕자로 변했어요.",
        },
        {
          id: "tfp-17",
          text: "A witch's spell had turned him into a frog long ago, he said, and only a kept promise could break it.",
          translation:
            "오래전 마녀의 마법이 자신을 개구리로 만들었으며, 오직 지켜진 약속만이 그 마법을 풀 수 있었다고 왕자가 말했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tfp-v1",
        term: "well",
        partOfSpeech: "noun",
        translation: "우물 (땅을 파서 물을 얻는 곳)",
        example: "The golden ball rolled into the deep well and disappeared.",
        exampleTranslation: "황금 공은 깊은 우물 속으로 굴러 들어가 사라졌어요.",
      },
      {
        id: "tfp-v2",
        term: "frog",
        partOfSpeech: "noun",
        translation: "개구리",
        example: "A green frog climbed out of the water and spoke to the princess.",
        exampleTranslation: "초록색 개구리 한 마리가 물에서 기어 나와 공주에게 말을 걸었어요.",
      },
      {
        id: "tfp-v3",
        term: "promise",
        partOfSpeech: "noun",
        translation: "약속; (동사) 약속하다",
        example: "The princess made a promise to the frog, but she did not want to keep it.",
        exampleTranslation: "공주는 개구리에게 약속을 했지만, 그 약속을 지키고 싶지 않았어요.",
      },
      {
        id: "tfp-v4",
        term: "cross",
        partOfSpeech: "adjective",
        translation: "화가 난, 짜증이 난",
        example: "The princess felt very cross when the frog asked to come upstairs.",
        exampleTranslation: "개구리가 위층에 올라가겠다고 하자 공주는 몹시 화가 났어요.",
      },
      {
        id: "tfp-v5",
        term: "spell",
        partOfSpeech: "noun",
        translation: "마법, 주문",
        example: "A witch's spell had turned the prince into a frog.",
        exampleTranslation: "마녀의 마법이 왕자를 개구리로 바꿔 놓았어요.",
      },
    ],
    questions: [
      {
        id: "tfp-q1",
        prompt: "Why did the princess start to cry by the well?",
        options: [
          "A frog jumped onto her hand.",
          "Her golden ball fell into the deep well.",
          "She was lost in the woods.",
          "The king was angry with her.",
        ],
        correctIndex: 1,
        explanation:
          "The princess threw her golden ball too high, and it fell into the well and sank out of sight, so she sat down and cried.",
      },
      {
        id: "tfp-q2",
        prompt: "What did the frog want in return for the golden ball?",
        options: [
          "A bag of gold coins.",
          "The princess's golden crown.",
          "To be her friend, eat from her plate, and stay in her room.",
          "To live in the castle garden.",
        ],
        correctIndex: 2,
        explanation:
          "The frog did not want jewels or gold; it asked the princess to promise that it could be her friend, eat from her plate, and sleep in her room.",
      },
      {
        id: "tfp-q3",
        prompt: "Why did the princess have to let the frog into the castle?",
        options: [
          "The frog was too strong to keep out.",
          "Her father the king told her she must keep her promise.",
          "The frog promised her another golden ball.",
          "She had grown to like the frog.",
        ],
        correctIndex: 1,
        explanation:
          "The princess wanted to shut the frog out, but the king reminded her that a promise must be kept, and told her to let the frog come in.",
      },
    ],
  },
  {
    slug: "snow-white",
    title: "Snow White",
    titleTranslation: "백설공주",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "🍎",
    coverImage: "/covers/snow-white.svg",
    source:
      "Adapted from the Brothers Grimm tale \"Snow White\" (\"Sneewittchen,\" collected 1812; long in the public domain, Project Gutenberg #2591). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's harsher details have been softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain why the queen was jealous of Snow White, and how Snow White was saved in the end.",
    paragraphs: [
      [
        {
          id: "snw-1",
          text: "A princess named Snow White had skin as white as snow, lips as red as blood, and hair as black as night.",
          translation:
            "백설공주라는 공주는 눈처럼 하얀 피부와 피처럼 붉은 입술, 그리고 밤처럼 검은 머리를 가지고 있었어요.",
        },
        {
          id: "snw-2",
          text: "Her stepmother, the queen, had a magic mirror, and every day she asked it, \"Mirror, mirror, who is the fairest of all?\"",
          translation:
            "계모인 왕비에게는 마법 거울이 있었고, 그녀는 날마다 거울에게 물었어요. \"거울아, 거울아, 누가 세상에서 제일 예쁘지?\"",
        },
        {
          id: "snw-3",
          text: "For years the mirror answered, \"You are\" — until one day it said, \"Snow White is fairer than you.\"",
          translation:
            "여러 해 동안 거울은 \"당신입니다.\"라고 답했지만, 어느 날 이렇게 말했어요. \"백설공주가 당신보다 더 예쁩니다.\"",
        },
      ],
      [
        {
          id: "snw-4",
          text: "The jealous queen ordered a huntsman to take Snow White deep into the forest and leave her there.",
          translation:
            "질투에 사로잡힌 왕비는 사냥꾼에게 백설공주를 숲 깊은 곳으로 데려가 그곳에 버리고 오라고 명령했어요.",
        },
        {
          id: "snw-5",
          text: "But the huntsman felt sorry for the girl, and he whispered, \"Run away, child, and never come back.\"",
          translation:
            "하지만 사냥꾼은 그 아이가 가여워서, \"얘야, 달아나거라. 그리고 다시는 돌아오지 마라.\" 하고 속삭였어요.",
        },
        {
          id: "snw-6",
          text: "Alone and frightened, Snow White ran through the dark trees until she came to a tiny cottage.",
          translation:
            "혼자가 되어 겁에 질린 백설공주는 어두운 나무들 사이를 달려 마침내 자그마한 오두막에 이르렀어요.",
        },
      ],
      [
        {
          id: "snw-7",
          text: "Inside stood a table with seven little plates and, along the wall, seven little beds.",
          translation:
            "안에는 작은 접시 일곱 개가 놓인 식탁이 있었고, 벽을 따라 작은 침대 일곱 개가 있었어요.",
        },
        {
          id: "snw-8",
          text: "She ate a little food, lay down, and fell asleep, and that evening seven dwarfs came home from the mountain where they dug for gold.",
          translation:
            "공주는 음식을 조금 먹고 누워서 잠이 들었고, 그날 저녁 일곱 난쟁이가 금을 캐던 산에서 집으로 돌아왔어요.",
        },
        {
          id: "snw-9",
          text: "When they heard her story they said, \"Stay with us and keep house, but let no one in while we are away.\"",
          translation:
            "난쟁이들은 공주의 이야기를 듣고 말했어요. \"우리와 함께 지내면서 집안일을 돌봐 주렴. 대신 우리가 없는 동안에는 아무도 들이지 마.\"",
        },
      ],
      [
        {
          id: "snw-10",
          text: "The queen soon learned from her mirror that Snow White was still alive.",
          translation:
            "왕비는 곧 거울을 통해 백설공주가 아직 살아 있다는 것을 알게 되었어요.",
        },
        {
          id: "snw-11",
          text: "She dressed as an old woman, walked to the cottage, and offered Snow White a beautiful red apple.",
          translation:
            "왕비는 노파로 변장하고 오두막까지 걸어가서, 백설공주에게 탐스러운 빨간 사과를 내밀었어요.",
        },
        {
          id: "snw-12",
          text: "Snow White took one bite, fell to the floor, and lay as still as if she were dead.",
          translation:
            "백설공주가 한 입 베어 물자, 그대로 바닥에 쓰러져 죽은 듯이 꼼짝도 하지 않았어요.",
        },
      ],
      [
        {
          id: "snw-13",
          text: "The dwarfs could not wake her, and they wept for three days.",
          translation: "난쟁이들은 공주를 깨우지 못했고, 사흘 동안 울었어요.",
        },
        {
          id: "snw-14",
          text: "Because she still looked so lovely, they would not bury her, but laid her in a coffin made of glass on the hillside.",
          translation:
            "공주가 여전히 너무나 아름다워 보였기에, 난쟁이들은 그녀를 땅에 묻지 않고 언덕에 유리로 만든 관에 뉘었어요.",
        },
        {
          id: "snw-15",
          text: "One day a prince rode by, saw her through the glass, and begged the dwarfs to let him take the coffin to his castle.",
          translation:
            "어느 날 한 왕자가 말을 타고 지나가다 유리 너머로 공주를 보고는, 그 관을 자기 성으로 가져가게 해 달라고 난쟁이들에게 간청했어요.",
        },
      ],
      [
        {
          id: "snw-16",
          text: "As the servants lifted the coffin, they stumbled, the piece of apple fell from Snow White's lips, and she opened her eyes.",
          translation:
            "하인들이 관을 들어 올리다가 발을 헛디뎠고, 그 바람에 사과 조각이 백설공주의 입술에서 떨어져 나왔으며, 공주는 눈을 떴어요.",
        },
        {
          id: "snw-17",
          text: "The prince took her home to be his wife, and the cruel queen was never seen in that land again.",
          translation:
            "왕자는 공주를 아내로 삼으려고 집으로 데려갔고, 잔인한 왕비는 다시는 그 나라에서 볼 수 없었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "snw-v1",
        term: "mirror",
        partOfSpeech: "noun",
        translation: "거울",
        example: "The queen asked her magic mirror who was the most beautiful in the land.",
        exampleTranslation: "왕비는 자기 마법 거울에게 이 나라에서 누가 가장 아름다운지 물었어요.",
      },
      {
        id: "snw-v2",
        term: "jealous",
        partOfSpeech: "adjective",
        translation: "질투하는, 시기하는",
        example: "The jealous queen could not bear that Snow White was more beautiful.",
        exampleTranslation: "질투에 사로잡힌 왕비는 백설공주가 더 아름답다는 것을 견딜 수 없었어요.",
      },
      {
        id: "snw-v3",
        term: "cottage",
        partOfSpeech: "noun",
        translation: "오두막, 시골의 작은 집",
        example: "Deep in the forest, Snow White found a tiny cottage with seven little beds.",
        exampleTranslation: "숲 깊은 곳에서 백설공주는 작은 침대 일곱 개가 있는 자그마한 오두막을 발견했어요.",
      },
      {
        id: "snw-v4",
        term: "dwarf",
        partOfSpeech: "noun",
        translation: "난쟁이",
        example: "Seven dwarfs lived in the cottage and dug for gold in the mountain.",
        exampleTranslation: "일곱 난쟁이가 그 오두막에 살면서 산에서 금을 캤어요.",
      },
      {
        id: "snw-v5",
        term: "coffin",
        partOfSpeech: "noun",
        translation: "관 (시신을 넣는 상자)",
        example: "The dwarfs laid Snow White in a coffin made of clear glass.",
        exampleTranslation: "난쟁이들은 백설공주를 투명한 유리로 만든 관에 뉘었어요.",
      },
    ],
    questions: [
      {
        id: "snw-q1",
        prompt: "Why did the queen want to get rid of Snow White?",
        options: [
          "Snow White had broken the queen's magic mirror.",
          "The mirror said Snow White was more beautiful than the queen.",
          "Snow White had run away from the castle without asking.",
          "The king loved Snow White more than the queen.",
        ],
        correctIndex: 1,
        explanation:
          "Every day the mirror told the queen she was the fairest — until it said Snow White was fairer, and the jealous queen could not accept it.",
      },
      {
        id: "snw-q2",
        prompt: "What did the huntsman do when he took Snow White into the forest?",
        options: [
          "He built her a small cottage to live in.",
          "He brought her back to the castle in secret.",
          "He felt sorry for her and told her to run away.",
          "He left her with the seven dwarfs.",
        ],
        correctIndex: 2,
        explanation:
          "The huntsman could not harm the girl; he told her to run away and never come back, and Snow White fled through the forest until she found the dwarfs' cottage.",
      },
      {
        id: "snw-q3",
        prompt: "How did Snow White wake up again?",
        options: [
          "The dwarfs found a cure and gave it to her.",
          "The prince's servants stumbled and the piece of apple fell from her lips.",
          "The queen returned and lifted the spell.",
          "She had only been sleeping deeply the whole time.",
        ],
        correctIndex: 1,
        explanation:
          "As the prince's servants carried the glass coffin away, they stumbled; the bite of apple was jolted from Snow White's mouth, and she opened her eyes.",
      },
    ],
  },
  {
    slug: "middlemarch",
    title: "Middlemarch",
    titleTranslation: "미들마치",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "George Eliot (1819–1880)",
    coverEmoji: "📖",
    coverImage: "/covers/middlemarch.svg",
    source:
      "Adapted from the Prelude and Chapter 1 of George Eliot's novel \"Middlemarch\" (first published 1871–72; long in the public domain, Project Gutenberg #145). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe the kind of purpose and the kind of marriage Dorothea longed for, and why she was so taken with Mr. Casaubon.",
    paragraphs: [
      [
        {
          id: "mdm-1",
          text: "Dorothea Brooke was a young woman of a rare, serious kind of beauty, which her very plain clothes somehow made more striking.",
          translation:
            "도러시아 브룩은 보기 드문, 진지한 아름다움을 지닌 젊은 여성이었고, 아주 수수한 옷차림이 오히려 그 아름다움을 더 도드라지게 했어요.",
        },
        {
          id: "mdm-2",
          text: "She was thought remarkably clever, though people liked to add that her younger sister, Celia, had far more common sense.",
          translation:
            "사람들은 그녀가 놀랄 만큼 똑똑하다고 여겼지만, 여동생 실리아가 훨씬 더 현실 감각이 있다는 말을 덧붙이기를 좋아했어요.",
        },
        {
          id: "mdm-3",
          text: "Dorothea longed to give herself to some great and noble purpose, and she cared little for comfort, fashion, or ordinary pleasures.",
          translation:
            "도러시아는 어떤 크고 숭고한 목적에 자신을 바치기를 간절히 바랐고, 안락함이나 유행, 평범한 즐거움에는 별로 관심이 없었어요.",
        },
      ],
      [
        {
          id: "mdm-4",
          text: "The two sisters were orphans, and they lived at Tipton Grange with their kind but scatter-brained bachelor uncle, Mr. Brooke.",
          translation:
            "두 자매는 고아였고, 다정하지만 정신이 산만한 독신 삼촌 브룩 씨와 함께 팁턴 그레인지에서 살았어요.",
        },
        {
          id: "mdm-5",
          text: "Dorothea was not yet twenty, and her head was full of half-formed plans for helping the poor and rebuilding their cottages.",
          translation:
            "도러시아는 아직 스무 살도 되지 않았지만, 가난한 사람들을 돕고 그들의 오두막을 새로 지어 주려는 어설픈 계획들로 머릿속이 가득했어요.",
        },
        {
          id: "mdm-6",
          text: "She was open and eager, with no vanity in her at all, and she was quite ready to be a martyr for a cause she believed in.",
          translation:
            "그녀는 솔직하고 열정적이었으며 허영심이라고는 조금도 없었고, 자신이 믿는 대의를 위해서라면 기꺼이 희생을 자처할 각오가 되어 있었어요.",
        },
      ],
      [
        {
          id: "mdm-7",
          text: "Her ideas about marriage were as unusual as the rest of her.",
          translation:
            "결혼에 대한 그녀의 생각도 그녀의 다른 면들만큼이나 별났어요.",
        },
        {
          id: "mdm-8",
          text: "She did not want a pleasant young husband who simply agreed with everything she said.",
          translation:
            "그녀는 자기가 하는 말마다 그저 맞장구만 치는, 상냥한 젊은 남편은 원하지 않았어요.",
        },
        {
          id: "mdm-9",
          text: "She dreamed instead of marrying a wise old scholar — a man who could be a kind of father to her, and teach her Greek and Hebrew if she asked.",
          translation:
            "대신 그녀는 지혜로운 나이 든 학자와 결혼하는 꿈을 꾸었어요. 자신에게 아버지 같은 존재가 되어 주고, 부탁하면 그리스어와 히브리어도 가르쳐 줄 수 있는 남자 말이에요.",
        },
      ],
      [
        {
          id: "mdm-10",
          text: "A handsome young neighbour, Sir James Chettam, was clearly courting her, and everyone but Dorothea could see it.",
          translation:
            "잘생긴 젊은 이웃 제임스 체텀 경이 분명히 그녀에게 구애하고 있었고, 도러시아만 빼고는 모두가 그것을 알아챘어요.",
        },
        {
          id: "mdm-11",
          text: "She thought he would do very well for Celia, and she talked to him only about drains and better cottages for the poor.",
          translation:
            "그녀는 제임스 경이 실리아에게 아주 잘 어울리겠다고 생각했고, 그에게는 오로지 배수로와 가난한 사람들을 위한 더 나은 오두막 이야기만 했어요.",
        },
        {
          id: "mdm-12",
          text: "Sir James, who understood almost nothing she said, kept answering \"Exactly,\" which she found faintly annoying.",
          translation:
            "그녀의 말을 거의 하나도 이해하지 못한 제임스 경은 계속 \"그렇고말고요.\"라고만 대답했고, 그녀는 그것이 은근히 거슬렸어요.",
        },
      ],
      [
        {
          id: "mdm-13",
          text: "Then a guest came to dinner: Mr. Casaubon, a pale, learned clergyman of nearly fifty.",
          translation:
            "그러던 어느 날 저녁 식사에 손님이 왔어요. 안색이 창백하고 학식이 깊은, 나이가 쉰에 가까운 성직자 커소본 씨였어요.",
        },
        {
          id: "mdm-14",
          text: "He was writing an enormous book called \"The Key to All Mythologies,\" which he had been working on for many years.",
          translation:
            "그는 '모든 신화의 열쇠'라는 방대한 책을 쓰고 있었는데, 여러 해 동안 그 일에 매달려 온 참이었어요.",
        },
        {
          id: "mdm-15",
          text: "As he spoke of his great work, Dorothea listened with shining eyes, certain that she had met a truly great mind.",
          translation:
            "그가 자신의 위대한 저작에 대해 이야기하자, 도러시아는 눈을 빛내며 귀를 기울였고, 자신이 참으로 위대한 지성을 만났다고 확신했어요.",
        },
      ],
      [
        {
          id: "mdm-16",
          text: "Celia thought him dull and rather ugly, and privately compared him to a dried-up scholar in a picture book.",
          translation:
            "실리아는 그가 따분하고 다소 못생겼다고 생각했고, 속으로는 그를 그림책 속 바싹 마른 학자에 빗댔어요.",
        },
        {
          id: "mdm-17",
          text: "But Dorothea had already begun to imagine a life spent helping this man finish his masterpiece, and nothing Celia said could touch that dream.",
          translation:
            "하지만 도러시아는 이미 이 남자가 자신의 걸작을 완성하도록 돕는 데 바치는 삶을 그리기 시작했고, 실리아가 무슨 말을 해도 그 꿈을 흔들 수는 없었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "mdm-v1",
        term: "remarkably",
        partOfSpeech: "adverb",
        translation: "놀랄 만큼, 두드러지게",
        example: "Everyone agreed that Dorothea was remarkably clever for a young woman of her time.",
        exampleTranslation: "다들 도러시아가 그 시대의 젊은 여성치고는 놀랄 만큼 똑똑하다는 데 동의했어요.",
      },
      {
        id: "mdm-v2",
        term: "vanity",
        partOfSpeech: "noun",
        translation: "허영심, 자만심",
        example: "There was no vanity in her; she did not care whether people admired her looks.",
        exampleTranslation: "그녀에게는 허영심이 없어서, 사람들이 자기 외모를 칭찬하든 말든 신경 쓰지 않았어요.",
      },
      {
        id: "mdm-v3",
        term: "martyr",
        partOfSpeech: "noun",
        translation: "순교자; 대의를 위해 희생을 자처하는 사람",
        example: "Dorothea was almost eager to be a martyr for some noble cause.",
        exampleTranslation: "도러시아는 어떤 숭고한 대의를 위해서라면 기꺼이 희생을 자처하고 싶어 할 정도였어요.",
      },
      {
        id: "mdm-v4",
        term: "scholar",
        partOfSpeech: "noun",
        translation: "학자",
        example: "She dreamed of marrying an old scholar who could teach her ancient languages.",
        exampleTranslation: "그녀는 고대 언어를 가르쳐 줄 수 있는 나이 든 학자와 결혼하는 꿈을 꾸었어요.",
      },
      {
        id: "mdm-v5",
        term: "court",
        partOfSpeech: "verb",
        translation: "구애하다, (결혼을 염두에 두고) 사귀려 하다",
        example: "Sir James was clearly courting Dorothea, though she never noticed.",
        exampleTranslation: "제임스 경은 분명히 도러시아에게 구애하고 있었지만, 그녀는 전혀 알아차리지 못했어요.",
      },
    ],
    questions: [
      {
        id: "mdm-q1",
        prompt: "What did Dorothea most want from her life?",
        options: [
          "A comfortable marriage and a fashionable place in society.",
          "To devote herself to some great and noble purpose.",
          "To travel widely, as her uncle Mr. Brooke had done.",
          "To be admired for her cleverness and her looks.",
        ],
        correctIndex: 1,
        explanation:
          "Dorothea cared nothing for comfort or fashion; she longed to give herself to a high, serious cause, and was almost eager to make sacrifices for it.",
      },
      {
        id: "mdm-q2",
        prompt: "What kind of husband did Dorothea imagine she wanted?",
        options: [
          "A cheerful young man who agreed with all her opinions.",
          "A wealthy landowner like Sir James Chettam.",
          "A wise older scholar who could guide and teach her, like a father.",
          "A poor man she could rescue with her fortune.",
        ],
        correctIndex: 2,
        explanation:
          "She dismissed the idea of an agreeable young husband; her dream was to marry a learned older man who could be a kind of father to her and teach her Greek and Hebrew.",
      },
      {
        id: "mdm-q3",
        prompt: "How did the two sisters react to Mr. Casaubon at dinner?",
        options: [
          "Both were bored by him and hoped he would leave early.",
          "Both were impressed by his great learning.",
          "Dorothea admired him deeply, while Celia found him dull and unattractive.",
          "Celia liked him, but Dorothea thought he was a fraud.",
        ],
        correctIndex: 2,
        explanation:
          "As Casaubon described his vast unfinished book, Dorothea listened with shining eyes, sure she had met a great mind; Celia privately thought him dry, dull, and rather ugly.",
      },
    ],
  },
  {
    slug: "the-yellow-wallpaper",
    title: "The Yellow Wallpaper",
    titleTranslation: "누런 벽지",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Charlotte Perkins Gilman (1860–1935)",
    coverEmoji: "📓",
    coverImage: "/covers/the-yellow-wallpaper.svg",
    source:
      "Adapted from the opening of Charlotte Perkins Gilman's short story \"The Yellow Wallpaper\" (first published 1892; long in the public domain, Project Gutenberg #1952). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what John believes his wife needs, what he forbids her to do, and how she feels about the room and its wallpaper.",
    paragraphs: [
      [
        {
          id: "tyw-1",
          text: "For the summer my husband John has rented an old house in the country, far from town, and we are here for my health.",
          translation:
            "여름 동안 남편 존이 마을에서 멀리 떨어진 시골의 오래된 집을 빌렸고, 우리는 내 건강 때문에 이곳에 와 있어요.",
        },
        {
          id: "tyw-2",
          text: "I have been ill since our baby was born — nervous, low, and easily tired — though John says there is really nothing wrong with me.",
          translation:
            "나는 아이를 낳은 뒤로 줄곧 아팠어요. 신경이 예민하고, 기운이 없고, 쉽게 지쳤지요. 존은 나에게 사실 아무 문제도 없다고 말하지만요.",
        },
        {
          id: "tyw-3",
          text: "John is a doctor, and a very practical man, and perhaps that is one reason I do not get well faster.",
          translation:
            "존은 의사이고 아주 현실적인 사람인데, 어쩌면 그것이 내가 더 빨리 낫지 못하는 한 가지 이유일지도 몰라요.",
        },
      ],
      [
        {
          id: "tyw-4",
          text: "He does not believe that I am sick, only that I need rest, fresh air, and no excitement at all.",
          translation:
            "그는 내가 아프다고 믿지 않아요. 그저 내게 휴식과 맑은 공기가 필요하고, 어떤 자극도 있으면 안 된다고만 생각해요.",
        },
        {
          id: "tyw-5",
          text: "Above everything, I am forbidden to work or to write until I am well again.",
          translation:
            "무엇보다도, 나는 다시 나을 때까지 일하거나 글을 쓰는 것이 금지되어 있어요.",
        },
        {
          id: "tyw-6",
          text: "So I write these pages in secret, when John is out seeing patients, and hide them when I hear him on the stairs.",
          translation:
            "그래서 나는 존이 환자를 보러 나가 있을 때 몰래 이 글을 쓰고, 그가 계단을 올라오는 소리가 들리면 얼른 숨겨요.",
        },
      ],
      [
        {
          id: "tyw-7",
          text: "I wanted a pretty room downstairs that opened onto the garden, but John chose the big room at the top of the house instead.",
          translation:
            "나는 정원으로 이어지는 아래층의 예쁜 방을 원했지만, 존은 대신 집 꼭대기의 큰 방을 골랐어요.",
        },
        {
          id: "tyw-8",
          text: "It was once a nursery, and the windows are barred, and there are strange rings fixed into the walls.",
          translation:
            "그곳은 한때 아기방이었고, 창문에는 창살이 달려 있으며, 벽에는 이상한 고리들이 박혀 있어요.",
        },
        {
          id: "tyw-9",
          text: "The bed is heavy and will not move, and a gate stands across the top of the stairs.",
          translation:
            "침대는 무거워서 꿈쩍도 하지 않고, 계단 맨 위에는 문이 하나 가로놓여 있어요.",
        },
      ],
      [
        {
          id: "tyw-10",
          text: "The worst thing in the room is the wallpaper, a dull, sickly yellow, torn away in patches.",
          translation:
            "그 방에서 가장 끔찍한 것은 벽지예요. 칙칙하고 병색이 도는 누런색인데, 군데군데 찢겨 나가 있어요.",
        },
        {
          id: "tyw-11",
          text: "Its pattern sprawls and curls in a way that seems to break every rule of good design.",
          translation:
            "그 무늬는 제대로 된 디자인의 모든 규칙을 어기는 듯한 방식으로 제멋대로 뻗어 나가고 휘감겨 있어요.",
        },
        {
          id: "tyw-12",
          text: "When I follow one of its lame, uncertain curves with my eye, it suddenly turns and goes somewhere I did not expect.",
          translation:
            "그 어설프고 갈피를 못 잡는 곡선 하나를 눈으로 따라가다 보면, 그것은 갑자기 방향을 틀어 내가 예상하지 못한 곳으로 가 버려요.",
        },
      ],
      [
        {
          id: "tyw-13",
          text: "I am sure that a little company, and some real work, would do me more good than all this quiet.",
          translation:
            "나는 이 모든 고요함보다 약간의 친구와 진짜 할 일이 나에게 더 이로우리라고 확신해요.",
        },
        {
          id: "tyw-14",
          text: "But whenever I say so, John takes my hand, calls me his \"little goose,\" and tells me not to think about my illness.",
          translation:
            "하지만 내가 그렇게 말할 때마다, 존은 내 손을 잡고 나를 \"내 귀여운 바보\"라고 부르며, 병에 대해서는 생각하지 말라고 해요.",
        },
        {
          id: "tyw-15",
          text: "My brother is also a doctor, and he says exactly the same thing, so I have stopped arguing.",
          translation:
            "내 오빠도 의사인데 똑같은 말을 하니, 나는 이제 말다툼하기를 그만두었어요.",
        },
      ],
      [
        {
          id: "tyw-16",
          text: "I lie here for hours, resting as I am told, and my eyes come back again and again to that yellow wall.",
          translation:
            "나는 시키는 대로 쉬면서 몇 시간이고 여기 누워 있고, 내 눈은 자꾸만 그 누런 벽으로 되돌아가요.",
        },
        {
          id: "tyw-17",
          text: "I am beginning to think there is something in the pattern that no one else has noticed — something that moves.",
          translation:
            "나는 그 무늬 속에 다른 누구도 알아채지 못한 무언가가 있다는 생각이 들기 시작했어요. 움직이는 무언가가요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tyw-v1",
        term: "forbid",
        partOfSpeech: "verb",
        translation: "금지하다, 못 하게 하다",
        example: "The doctor forbade her to write until she was well again.",
        exampleTranslation: "의사는 그녀가 다 나을 때까지 글을 쓰지 못하게 했어요.",
      },
      {
        id: "tyw-v2",
        term: "practical",
        partOfSpeech: "adjective",
        translation: "현실적인, 실용적인",
        example: "John was a practical man who had no patience with feelings or fancies.",
        exampleTranslation: "존은 감정이나 공상을 조금도 참아 주지 않는 현실적인 사람이었어요.",
      },
      {
        id: "tyw-v3",
        term: "barred",
        partOfSpeech: "adjective",
        translation: "(창 등에) 창살이 달린, 빗장이 걸린",
        example: "The windows of the old nursery were barred, like a cage.",
        exampleTranslation: "옛 아기방의 창문에는 우리처럼 창살이 달려 있었어요.",
      },
      {
        id: "tyw-v4",
        term: "pattern",
        partOfSpeech: "noun",
        translation: "무늬, 패턴",
        example: "The pattern on the wallpaper twisted and curled without any order.",
        exampleTranslation: "벽지의 무늬는 아무 질서도 없이 뒤틀리고 휘감겨 있었어요.",
      },
      {
        id: "tyw-v5",
        term: "argue",
        partOfSpeech: "verb",
        translation: "말다툼하다, 언쟁하다; 주장하다",
        example: "She was too tired to argue with her husband any longer.",
        exampleTranslation: "그녀는 남편과 더 이상 말다툼할 기운이 없었어요.",
      },
    ],
    questions: [
      {
        id: "tyw-q1",
        prompt: "Why have the narrator and her husband come to the old house?",
        options: [
          "John has inherited it from his family.",
          "For the summer, so that the narrator can rest and recover her health.",
          "To sell it after cleaning and repairing the rooms.",
          "Because their house in town has been damaged.",
        ],
        correctIndex: 1,
        explanation:
          "John, who is a doctor, has rented the country house for the summer so his wife can rest; she has been unwell and low since their baby was born.",
      },
      {
        id: "tyw-q2",
        prompt: "Why does the narrator write her journal in secret?",
        options: [
          "She is ashamed of how badly she writes.",
          "The paper and ink are expensive and hard to get.",
          "John has forbidden her to write until she is well, so she hides it from him.",
          "She is writing letters to another man.",
        ],
        correctIndex: 2,
        explanation:
          "John believes any work or excitement is bad for her and has forbidden writing; she keeps the journal anyway, writing when he is out and hiding it when he returns.",
      },
      {
        id: "tyw-q3",
        prompt: "How does the narrator feel about the room John chose?",
        options: [
          "She loves its view over the rose garden.",
          "She dislikes it: it was a barred nursery, and the yellow wallpaper disturbs her.",
          "She finds it too small and dark to rest in.",
          "She is glad it is far from the noisy road.",
        ],
        correctIndex: 1,
        explanation:
          "She had wanted a pretty room downstairs opening on the garden, but John chose the large top-floor room — a former nursery with barred windows and hideous yellow wallpaper that she cannot stop staring at.",
      },
    ],
  },
  {
    slug: "emma",
    title: "Emma",
    titleTranslation: "엠마",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Jane Austen (1775–1817)",
    coverEmoji: "💌",
    coverImage: "/covers/emma.svg",
    source:
      "Adapted from Chapter 1 of Jane Austen's novel \"Emma\" (first published 1815; long in the public domain, Project Gutenberg #158). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Emma's character, how she felt about Miss Taylor's marriage, and what Mr. Knightley warned her against.",
    paragraphs: [
      [
        {
          id: "emm-1",
          text: "Emma Woodhouse was handsome, clever, and rich, and in almost twenty-one years of life she had known very little trouble or sorrow.",
          translation:
            "에마 우드하우스는 아름답고, 영리하고, 부유했으며, 스물한 해 가까이 사는 동안 근심이나 슬픔을 거의 겪어 본 적이 없었어요.",
        },
        {
          id: "emm-2",
          text: "Her mother had died when she was small, and since her elder sister married, Emma had been the mistress of her father's comfortable house.",
          translation:
            "어머니는 에마가 어릴 때 세상을 떠났고, 언니가 결혼한 뒤로 에마는 아버지의 안락한 집의 안주인 노릇을 해 왔어요.",
        },
        {
          id: "emm-3",
          text: "The only real dangers in her happy life were that she was used to having her own way, and that she thought rather too well of herself.",
          translation:
            "그녀의 행복한 삶에서 유일하게 위험한 점이라면, 늘 자기 뜻대로 하는 데 익숙하다는 것과, 자기 자신을 다소 지나치게 높이 평가한다는 것이었어요.",
        },
      ],
      [
        {
          id: "emm-4",
          text: "For sixteen years her governess, Miss Taylor, had been less a teacher than a dear friend, and had let Emma do exactly as she pleased.",
          translation:
            "16년 동안 가정교사 테일러 양은 선생님이라기보다 다정한 친구에 가까웠고, 에마가 하고 싶은 대로 다 하게 내버려 두었어요.",
        },
        {
          id: "emm-5",
          text: "Now Miss Taylor had married Mr. Weston and gone to live half a mile away, and the house felt suddenly quiet and empty.",
          translation:
            "이제 테일러 양은 웨스턴 씨와 결혼해 반 마일 떨어진 곳에 살게 되었고, 집은 갑자기 조용하고 텅 빈 듯했어요.",
        },
        {
          id: "emm-6",
          text: "Emma liked to say that she herself had arranged the whole match, and was very proud of it.",
          translation:
            "에마는 그 혼인을 자기가 다 성사시켰다고 말하기를 좋아했고, 그것을 무척 자랑스러워했어요.",
        },
      ],
      [
        {
          id: "emm-7",
          text: "Her father, Mr. Woodhouse, was a gentle, nervous old man who worried about draughts, damp, and rich food, and who hated any kind of change.",
          translation:
            "그녀의 아버지 우드하우스 씨는 온화하지만 신경이 예민한 노인으로, 외풍과 습기와 기름진 음식을 걱정했고, 어떤 종류의 변화든 몹시 싫어했어요.",
        },
        {
          id: "emm-8",
          text: "All evening he sighed over \"poor Miss Taylor,\" as though she had met with some misfortune instead of a happy marriage.",
          translation:
            "그는 저녁 내내 \"가엾은 테일러 양\" 하며 한숨을 쉬었는데, 마치 그녀가 행복한 결혼이 아니라 무슨 불행한 일을 당한 것처럼 굴었어요.",
        },
        {
          id: "emm-9",
          text: "He wished she had never married at all, and could not be comforted that she now lived so near.",
          translation:
            "그는 그녀가 아예 결혼하지 않았기를 바랐고, 이제 그녀가 그토록 가까이 산다는 말로도 위로가 되지 않았어요.",
        },
      ],
      [
        {
          id: "emm-10",
          text: "That evening Mr. Knightley called, a sensible man of about thirty-seven who had known the family for years.",
          translation:
            "그날 저녁 나이틀리 씨가 찾아왔어요. 서른일곱쯤 된 분별 있는 남자로, 여러 해 동안 그 집안과 알고 지낸 사이였어요.",
        },
        {
          id: "emm-11",
          text: "He was almost the only person who ever told Emma of her faults, and he did it kindly but plainly.",
          translation:
            "그는 에마에게 그녀의 결점을 말해 주는 거의 유일한 사람이었고, 다정하되 솔직하게 그렇게 했어요.",
        },
        {
          id: "emm-12",
          text: "When Emma boasted of making the marriage, he said she had only made a lucky guess, and that a young lady had no business match-making.",
          translation:
            "에마가 그 결혼을 성사시켰다고 자랑하자, 그는 그저 운 좋게 알아맞힌 것뿐이며, 젊은 아가씨가 중매에 나설 일이 아니라고 말했어요.",
        },
      ],
      [
        {
          id: "emm-13",
          text: "Emma laughed and declared that she would make just one more match.",
          translation:
            "에마는 웃으며 딱 한 번만 더 중매를 서겠다고 선언했어요.",
        },
        {
          id: "emm-14",
          text: "She had chosen a wife for Mr. Elton, the young clergyman, who had been in the village a whole year and really ought not to stay single.",
          translation:
            "그녀는 젊은 성직자 엘턴 씨의 아내를 골라 두었는데, 그는 마을에 온 지 꼬박 일 년이 되었으니 정말이지 계속 혼자 있어서는 안 된다는 것이었어요.",
        },
        {
          id: "emm-15",
          text: "Mr. Knightley told her to leave Mr. Elton to choose for himself, but Emma had quite made up her mind.",
          translation:
            "나이틀리 씨는 엘턴 씨가 스스로 고르도록 내버려 두라고 했지만, 에마는 이미 마음을 굳힌 뒤였어요.",
        },
      ],
      [
        {
          id: "emm-16",
          text: "Mr. Woodhouse fretted that his guests would catch cold on the walk home, and begged them to wrap up warmly.",
          translation:
            "우드하우스 씨는 손님들이 걸어서 집에 가다 감기에 걸릴까 봐 안달하며, 따뜻하게 잘 챙겨 입으라고 신신당부했어요.",
        },
        {
          id: "emm-17",
          text: "And so the long, sad evening ended gently, with Emma already dreaming of her next piece of clever planning.",
          translation:
            "그렇게 길고 서글픈 저녁은 잔잔하게 저물었고, 에마는 벌써 다음번의 영리한 계획을 꿈꾸고 있었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "emm-v1",
        term: "governess",
        partOfSpeech: "noun",
        translation: "(입주) 여자 가정교사",
        example: "Miss Taylor had been Emma's governess for sixteen years, but felt more like a friend.",
        exampleTranslation: "테일러 양은 16년 동안 에마의 가정교사였지만, 친구에 더 가깝게 느껴졌어요.",
      },
      {
        id: "emm-v2",
        term: "mistress",
        partOfSpeech: "noun",
        translation: "(집안을 관리하는) 안주인, 여주인",
        example: "After her sister married, Emma became the mistress of her father's house.",
        exampleTranslation: "언니가 결혼한 뒤, 에마는 아버지 집의 안주인이 되었어요.",
      },
      {
        id: "emm-v3",
        term: "misfortune",
        partOfSpeech: "noun",
        translation: "불운, 불행한 일",
        example: "Mr. Woodhouse spoke of the wedding as if it were a misfortune.",
        exampleTranslation: "우드하우스 씨는 그 결혼을 마치 불행한 일인 것처럼 이야기했어요.",
      },
      {
        id: "emm-v4",
        term: "boast",
        partOfSpeech: "verb",
        translation: "자랑하다, 뽐내다",
        example: "Emma liked to boast that she had arranged the marriage herself.",
        exampleTranslation: "에마는 자기가 그 결혼을 직접 성사시켰다고 자랑하기를 좋아했어요.",
      },
      {
        id: "emm-v5",
        term: "fret",
        partOfSpeech: "verb",
        translation: "안달하다, 조바심 내다, 걱정하다",
        example: "Her father fretted that the guests would catch cold walking home.",
        exampleTranslation: "그녀의 아버지는 손님들이 걸어서 집에 가다 감기에 걸릴까 봐 안달했어요.",
      },
    ],
    questions: [
      {
        id: "emm-q1",
        prompt: "What were the \"real dangers\" in Emma's comfortable life?",
        options: [
          "She had almost no money of her own.",
          "She was used to getting her own way and thought too well of herself.",
          "Her father expected her to marry very soon.",
          "She had quarrelled with her elder sister.",
        ],
        correctIndex: 1,
        explanation:
          "Emma was handsome, clever and rich, with little to trouble her; the narrator warns that the true risks were her habit of having her own way and her rather high opinion of herself.",
      },
      {
        id: "emm-q2",
        prompt: "Why was Mr. Woodhouse unhappy on the day of the wedding?",
        options: [
          "He disliked Mr. Weston and did not want the marriage.",
          "He thought Emma should have married first.",
          "He hated change, and felt Miss Taylor's marriage as a loss, almost a misfortune.",
          "He was angry that Emma had arranged the match.",
        ],
        correctIndex: 2,
        explanation:
          "Mr. Woodhouse hated every kind of change; he sighed over \"poor Miss Taylor\" all evening as though she had suffered a misfortune, and wished she had never married.",
      },
      {
        id: "emm-q3",
        prompt: "What did Mr. Knightley think of Emma's match-making?",
        options: [
          "That she had a real gift for it and should do more.",
          "That it was only a lucky guess, and she should stop.",
          "That she should have asked his advice first.",
          "That Mr. Weston was not good enough for Miss Taylor.",
        ],
        correctIndex: 1,
        explanation:
          "Mr. Knightley, almost the only person who told Emma her faults, said she had merely made a lucky guess and that a young lady had no business making matches; he told her to leave Mr. Elton to choose his own wife.",
      },
    ],
  },
  {
    slug: "the-nightingale-and-the-rose",
    title: "The Nightingale and the Rose",
    titleTranslation: "나이팅게일과 장미",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Oscar Wilde (1854–1900)",
    coverEmoji: "🌹",
    coverImage: "/covers/the-nightingale-and-the-rose.svg",
    source:
      "Adapted from Oscar Wilde's fairy tale \"The Nightingale and the Rose\" (first published 1888 in the collection \"The Happy Prince and Other Tales\"; long in the public domain, Project Gutenberg #902). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what the Nightingale gave up to make the red rose, and how the Student and the girl treated her gift.",
    paragraphs: [
      [
        {
          id: "nar-1",
          text: "A young Student sat in the garden and wept, because the girl he loved had said she would dance with him only if he brought her red roses.",
          translation:
            "한 젊은 학생이 정원에 앉아 울고 있었어요. 그가 사랑하는 아가씨가 빨간 장미를 가져와야만 그와 춤을 추겠다고 말했기 때문이에요.",
        },
        {
          id: "nar-2",
          text: "\"There is not one red rose in my whole garden,\" he cried. \"Such a little thing, and yet my happiness depends on it.\"",
          translation:
            "\"내 정원 어디에도 빨간 장미가 한 송이도 없어.\" 그가 외쳤어요. \"이렇게 작은 것에 내 행복이 달려 있다니.\"",
        },
        {
          id: "nar-3",
          text: "In the oak tree a little Nightingale heard him, and thought, \"Here at last is a true lover.\"",
          translation:
            "떡갈나무 위에서 작은 나이팅게일이 그 말을 듣고 생각했어요. \"드디어 진정한 사랑을 하는 사람을 만났구나.\"",
        },
      ],
      [
        {
          id: "nar-4",
          text: "The Nightingale flew from rose-tree to rose-tree, asking each one for a single red rose.",
          translation:
            "나이팅게일은 이 장미나무에서 저 장미나무로 날아다니며, 저마다에게 빨간 장미 한 송이를 부탁했어요.",
        },
        {
          id: "nar-5",
          text: "One had only white roses, another only yellow, and the last had been so hurt by winter that it would give no roses at all.",
          translation:
            "한 나무는 흰 장미뿐이었고, 다른 나무는 노란 장미뿐이었으며, 마지막 나무는 겨울에 너무 상해서 장미를 하나도 피우지 못할 형편이었어요.",
        },
        {
          id: "nar-6",
          text: "\"There is one way,\" the red rose-tree whispered, \"but it is so terrible that I hardly dare to tell you.\"",
          translation:
            "\"방법이 하나 있긴 해.\" 빨간 장미나무가 속삭였어요. \"하지만 너무 끔찍해서 차마 말해 주기가 두렵구나.\"",
        },
      ],
      [
        {
          id: "nar-7",
          text: "\"If you want a red rose, you must sing all night with your heart pressed against a thorn.\"",
          translation:
            "\"빨간 장미를 원한다면, 가시에 가슴을 댄 채 밤새도록 노래해야 해.\"",
        },
        {
          id: "nar-8",
          text: "\"The thorn must pierce your heart, and your life's blood must flow into mine and become the colour of the rose.\"",
          translation:
            "\"그 가시가 네 심장을 꿰뚫어야 하고, 네 생명의 피가 내 몸속으로 흘러들어 장미의 빛깔이 되어야 한단다.\"",
        },
        {
          id: "nar-9",
          text: "\"Death is a high price for a red rose,\" said the Nightingale, \"but Love is worth more than life.\"",
          translation:
            "\"빨간 장미 하나에 죽음이라니 너무 비싼 값이야.\" 나이팅게일이 말했어요. \"하지만 사랑은 목숨보다 더 값진 것이지.\"",
        },
      ],
      [
        {
          id: "nar-10",
          text: "That night the Nightingale set her breast against the sharp thorn and began to sing.",
          translation:
            "그날 밤 나이팅게일은 날카로운 가시에 가슴을 갖다 대고 노래하기 시작했어요.",
        },
        {
          id: "nar-11",
          text: "Hour by hour she sang of love, and slowly a rose grew on the tree — first pale, then pink, then deep and glowing red.",
          translation:
            "한 시간 또 한 시간, 나이팅게일은 사랑을 노래했고, 나무에는 장미 한 송이가 천천히 피어났어요. 처음에는 옅은 빛이었다가, 분홍빛이 되었다가, 마침내 짙고 타는 듯한 붉은빛이 되었어요.",
        },
        {
          id: "nar-12",
          text: "As the last of her song faded, the rose was perfect, but the Nightingale lay dead in the long grass.",
          translation:
            "노래의 마지막 가락이 스러질 무렵, 장미는 더없이 완벽했지만, 나이팅게일은 긴 풀밭에 죽어 누워 있었어요.",
        },
      ],
      [
        {
          id: "nar-13",
          text: "In the morning the Student found the rose, amazed, and hurried with it to the girl.",
          translation:
            "아침에 학생은 그 장미를 발견하고 깜짝 놀라, 장미를 들고 서둘러 아가씨에게 달려갔어요.",
        },
        {
          id: "nar-14",
          text: "But she turned away and said the red rose would not match her dress, and that the rich man's nephew had sent her real jewels instead.",
          translation:
            "하지만 아가씨는 고개를 돌리며, 빨간 장미는 자기 드레스와 어울리지 않는다고, 그리고 부자의 조카가 대신 진짜 보석을 보내왔다고 말했어요.",
        },
        {
          id: "nar-15",
          text: "Angry, the Student threw the rose into the road, where a cart-wheel rolled over it and crushed it.",
          translation:
            "화가 난 학생은 장미를 길바닥에 내던졌고, 수레바퀴가 그 위를 지나가며 장미를 짓뭉갰어요.",
        },
      ],
      [
        {
          id: "nar-16",
          text: "\"What a foolish thing love is,\" the Student said. \"It is far less useful than logic, and it never tells you anything for certain.\"",
          translation:
            "\"사랑이란 참 어리석은 거야.\" 학생이 말했어요. \"논리학보다 훨씬 쓸모가 없고, 무엇 하나 확실하게 알려 주는 법이 없어.\"",
        },
        {
          id: "nar-17",
          text: "So he went back to his room, opened a great dusty book, and began to read.",
          translation:
            "그래서 그는 방으로 돌아가, 먼지 쌓인 두꺼운 책 한 권을 펼치고 읽기 시작했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "nar-v1",
        term: "nightingale",
        partOfSpeech: "noun",
        translation: "나이팅게일 (밤에 아름답게 지저귀는 작은 새)",
        example: "The nightingale sang more sweetly than any other bird in the wood.",
        exampleTranslation: "그 나이팅게일은 숲의 어느 새보다도 아름답게 노래했어요.",
      },
      {
        id: "nar-v2",
        term: "weep",
        partOfSpeech: "verb",
        translation: "울다, 눈물을 흘리다",
        example: "The young Student sat among the flowers and wept.",
        exampleTranslation: "젊은 학생은 꽃들 사이에 앉아 울었어요.",
      },
      {
        id: "nar-v3",
        term: "thorn",
        partOfSpeech: "noun",
        translation: "가시",
        example: "She pressed her breast against a long, sharp thorn.",
        exampleTranslation: "그녀는 길고 날카로운 가시에 가슴을 갖다 댔어요.",
      },
      {
        id: "nar-v4",
        term: "pierce",
        partOfSpeech: "verb",
        translation: "꿰뚫다, 뚫고 들어가다",
        example: "All night the thorn pressed closer, until at last it pierced her heart.",
        exampleTranslation: "밤새 가시가 점점 더 깊이 파고들더니, 마침내 그녀의 심장을 꿰뚫었어요.",
      },
      {
        id: "nar-v5",
        term: "crush",
        partOfSpeech: "verb",
        translation: "으스러뜨리다, 짓밟다",
        example: "A passing cart crushed the rose flat against the stones.",
        exampleTranslation: "지나가던 수레가 그 장미를 돌바닥에 납작하게 짓뭉갰어요.",
      },
    ],
    questions: [
      {
        id: "nar-q1",
        prompt: "Why did the Student need a red rose?",
        options: [
          "To give as a gift to the Prince at the ball.",
          "The girl he loved would only dance with him if he brought her red roses.",
          "To win a garden competition in the village.",
          "The Nightingale had asked him for one.",
        ],
        correctIndex: 1,
        explanation:
          "The girl he loved had promised to dance with him at the Prince's ball only if he brought her red roses, and there was not a single red rose in his garden.",
      },
      {
        id: "nar-q2",
        prompt: "What did the Nightingale have to do to make a red rose?",
        options: [
          "Fly to a far country to fetch a red rose-bush.",
          "Sing to the moon for seven nights in a row.",
          "Sing all night with a thorn pressed into her heart, giving her life for it.",
          "Bring the rose-tree water from a magic spring.",
        ],
        correctIndex: 2,
        explanation:
          "The red rose-tree told her the only way: to sing all night with her breast against a thorn until it pierced her heart, so that her life's blood would colour the rose red — a price that would cost her life.",
      },
      {
        id: "nar-q3",
        prompt: "What happened when the Student gave the girl the red rose?",
        options: [
          "She was delighted and agreed at once to dance with him.",
          "She refused it, saying it did not match her dress and that jewels were worth more.",
          "She thanked him but said she had already promised the dance to someone else.",
          "She kept the rose but forgot her promise.",
        ],
        correctIndex: 1,
        explanation:
          "The girl turned the rose away — it would not go with her dress, and a rich man's nephew had sent her real jewels; the angry Student threw the rose into the road, and then decided love was foolish and went back to his books.",
      },
    ],
  },
  {
    slug: "the-last-leaf",
    title: "The Last Leaf",
    titleTranslation: "마지막 잎새",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "O. Henry (1862–1910)",
    coverEmoji: "🍂",
    coverImage: "/covers/the-last-leaf.svg",
    source:
      "Adapted from O. Henry's short story \"The Last Leaf\" (collected in \"The Trimmed Lamp and Other Stories\", 1907; long in the public domain, Project Gutenberg #2777). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what Johnsy believed about the last leaf, and what old Behrman did on the stormy night.",
    paragraphs: [
      [
        {
          id: "tll-1",
          text: "Sue and Johnsy were two young painters who shared a small room at the top of an old house.",
          translation:
            "수와 존시는 오래된 집 꼭대기의 작은 방을 함께 쓰는 두 젊은 화가였어요.",
        },
        {
          id: "tll-2",
          text: "In November Johnsy caught pneumonia, and soon she lay very still in bed, looking out the window all day.",
          translation:
            "11월에 존시는 폐렴에 걸렸고, 곧 침대에 아주 가만히 누워 하루 종일 창밖만 바라보게 되었어요.",
        },
        {
          id: "tll-3",
          text: "The doctor told Sue quietly that Johnsy might not get better, because she had decided she was going to die.",
          translation:
            "의사는 수에게, 존시가 스스로 죽을 거라고 마음먹었기 때문에 나아지지 않을지도 모른다고 조용히 말했어요.",
        },
      ],
      [
        {
          id: "tll-4",
          text: "Outside the window, an old ivy plant climbed the brick wall of the next house, and the cold wind was tearing off its leaves.",
          translation:
            "창밖에서는 오래된 담쟁이덩굴이 옆집 벽돌 벽을 타고 올라가 있었는데, 차가운 바람이 그 잎을 마구 떼어 내고 있었어요.",
        },
        {
          id: "tll-5",
          text: "Sue heard Johnsy counting softly: \"Ten... nine... eight... seven.\"",
          translation:
            "수는 존시가 나직이 세는 소리를 들었어요. \"열… 아홉… 여덟… 일곱.\"",
        },
        {
          id: "tll-6",
          text: "\"When the last leaf falls, I will go too,\" Johnsy said. \"I have known it for three days.\"",
          translation:
            "\"마지막 잎이 떨어지면, 나도 갈 거야.\" 존시가 말했어요. \"사흘 전부터 알고 있었어.\"",
        },
      ],
      [
        {
          id: "tll-7",
          text: "Downstairs lived Behrman, a poor old painter who had wanted all his life to paint one great picture but had never begun it.",
          translation:
            "아래층에는 베어먼이 살았는데, 평생 위대한 그림 한 점을 그리고 싶어 했지만 한 번도 시작하지 못한 가난한 늙은 화가였어요.",
        },
        {
          id: "tll-8",
          text: "He earned a little money as a model, and he watched over the two young women like a fierce old dog.",
          translation:
            "그는 모델 일로 약간의 돈을 벌었고, 사나운 늙은 개처럼 그 두 젊은 여자를 지켜 주었어요.",
        },
        {
          id: "tll-9",
          text: "When Sue told him about the leaves, he shouted that it was foolish nonsense — but then he grew quiet and stared out at the ivy.",
          translation:
            "수가 잎 이야기를 하자, 그는 어리석은 헛소리라고 소리쳤어요. 하지만 곧 조용해지더니 담쟁이덩굴을 물끄러미 바라보았어요.",
        },
      ],
      [
        {
          id: "tll-10",
          text: "That night a hard storm beat against the house, with rain, snow, and a howling wind.",
          translation:
            "그날 밤 비와 눈과 울부짖는 바람을 몰고 온 거센 폭풍이 집을 때렸어요.",
        },
        {
          id: "tll-11",
          text: "In the morning Johnsy asked Sue to raise the shade, sure that the vine would be bare.",
          translation:
            "아침에 존시는 담쟁이덩굴이 앙상해졌을 거라 믿으며, 수에게 블라인드를 올려 달라고 했어요.",
        },
        {
          id: "tll-12",
          text: "But one last leaf still hung on the wall, dark green, with only its edges turned yellow.",
          translation:
            "하지만 마지막 잎 하나가 여전히 벽에 매달려 있었어요. 짙은 초록색에, 가장자리만 노랗게 물든 채로요.",
        },
      ],
      [
        {
          id: "tll-13",
          text: "All that day and through another wild night the leaf held on.",
          translation:
            "그날 하루 내내, 그리고 또 한 번의 사나운 밤을 지나서도 그 잎은 버텼어요.",
        },
        {
          id: "tll-14",
          text: "When Johnsy saw it still there the next morning, something in her changed.",
          translation:
            "다음 날 아침에도 잎이 그대로 있는 것을 보고, 존시의 마음속 무언가가 바뀌었어요.",
        },
        {
          id: "tll-15",
          text: "\"I have been wicked,\" she said. \"That leaf stayed to show me. Bring me some soup, Sue — and one day I want to paint the Bay of Naples.\"",
          translation:
            "\"내가 못됐었어.\" 존시가 말했어요. \"저 잎이 그걸 보여 주려고 남아 있었던 거야. 수, 수프 좀 갖다줘. 그리고 언젠가 나폴리만을 그리고 싶어.\"",
        },
      ],
      [
        {
          id: "tll-16",
          text: "A few days later, when Johnsy was safe, Sue told her that old Behrman had died of pneumonia, caught out in the freezing storm.",
          translation:
            "며칠 뒤, 존시가 고비를 넘기고 나서, 수는 늙은 베어먼이 얼어붙을 듯한 폭풍 속에 나갔다가 폐렴에 걸려 세상을 떠났다고 이야기했어요.",
        },
        {
          id: "tll-17",
          text: "He had climbed a ladder that night with a lantern and paints, and had drawn the last leaf on the wall himself — the masterpiece he had waited a whole life to make.",
          translation:
            "그는 그날 밤 등불과 물감을 들고 사다리에 올라, 마지막 잎을 직접 벽에 그려 넣었던 거예요. 평생 기다려 온 바로 그 걸작을요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tll-v1",
        term: "pneumonia",
        partOfSpeech: "noun",
        translation: "폐렴",
        example: "Many people in the neighbourhood fell ill with pneumonia that cold winter.",
        exampleTranslation: "그 추운 겨울에 동네 사람 많은 이가 폐렴에 걸렸어요.",
      },
      {
        id: "tll-v2",
        term: "ivy",
        partOfSpeech: "noun",
        translation: "담쟁이덩굴",
        example: "An old ivy plant climbed the brick wall outside the window.",
        exampleTranslation: "오래된 담쟁이덩굴이 창밖 벽돌 벽을 타고 올라가 있었어요.",
      },
      {
        id: "tll-v3",
        term: "shade",
        partOfSpeech: "noun",
        translation: "(창문에 치거나 내리는) 블라인드, 차양",
        example: "Johnsy asked Sue to raise the shade so she could see the vine.",
        exampleTranslation: "존시는 담쟁이덩굴을 볼 수 있게 수에게 블라인드를 올려 달라고 했어요.",
      },
      {
        id: "tll-v4",
        term: "ladder",
        partOfSpeech: "noun",
        translation: "사다리",
        example: "Behrman carried a ladder out into the storm that night.",
        exampleTranslation: "베어먼은 그날 밤 폭풍 속으로 사다리를 들고 나갔어요.",
      },
      {
        id: "tll-v5",
        term: "masterpiece",
        partOfSpeech: "noun",
        translation: "걸작, 명작",
        example: "For forty years Behrman had waited to paint his masterpiece.",
        exampleTranslation: "40년 동안 베어먼은 자신의 걸작을 그릴 날을 기다려 왔어요.",
      },
    ],
    questions: [
      {
        id: "tll-q1",
        prompt: "Why did the doctor think Johnsy might not get better?",
        options: [
          "Her illness was too far advanced to treat.",
          "She had given up and decided she was going to die.",
          "There was no medicine for pneumonia.",
          "She refused to see the doctor at all.",
        ],
        correctIndex: 1,
        explanation:
          "The doctor told Sue that medicine could do only so much; Johnsy's real problem was that she had made up her mind not to live.",
      },
      {
        id: "tll-q2",
        prompt: "What did Johnsy believe about the last ivy leaf?",
        options: [
          "That it would bring her good luck if it stayed.",
          "That she would die when it fell from the vine.",
          "That Sue had painted it to cheer her up.",
          "That it marked the end of winter.",
        ],
        correctIndex: 1,
        explanation:
          "Johnsy watched the wind strip the ivy and decided that when the last leaf fell, she would die too.",
      },
      {
        id: "tll-q3",
        prompt: "How did the last leaf really stay on the wall?",
        options: [
          "It was a specially strong leaf that survived the storm.",
          "Sue tied it to the vine with thread.",
          "Old Behrman painted it on the wall during the storm, and caught the illness that killed him.",
          "The warm spring weather had come early.",
        ],
        correctIndex: 2,
        explanation:
          "Behrman went out in the freezing storm with a ladder, a lantern and his paints and painted the last leaf on the brick wall; the cold gave him pneumonia and he died, but the painted leaf gave Johnsy back her will to live.",
      },
    ],
  },
  {
    slug: "the-little-mermaid",
    title: "The Little Mermaid",
    titleTranslation: "인어공주",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Hans Christian Andersen (1805–1875)",
    coverEmoji: "🐚",
    coverImage: "/covers/the-little-mermaid.svg",
    source:
      "Adapted from Hans Christian Andersen's fairy tale \"The Little Mermaid\" (\"Den lille Havfrue\", first published 1837; long in the public domain, Project Gutenberg #1597). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's details have been trimmed and gently softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain what the little mermaid gave up to become human, why she could not marry the prince, and what became of her in the end.",
    paragraphs: [
      [
        {
          id: "tlm-1",
          text: "The youngest daughter of the Sea King longed more than anything to see the world above the water.",
          translation:
            "바다 왕의 막내딸은 무엇보다도 물 위의 세상을 보고 싶어 했어요.",
        },
        {
          id: "tlm-2",
          text: "On the night she was finally allowed to rise, she watched a ship where a young prince was keeping his birthday.",
          translation:
            "마침내 수면 위로 올라가도 좋다는 허락을 받은 밤, 그녀는 젊은 왕자가 생일을 축하하고 있는 배 한 척을 바라보았어요.",
        },
        {
          id: "tlm-3",
          text: "A storm broke the ship apart, and the little mermaid caught the drowning prince and held his head above the waves until she reached the shore.",
          translation:
            "폭풍이 배를 산산조각 냈고, 인어공주는 물에 빠져 죽어 가는 왕자를 붙잡아 해안에 닿을 때까지 그의 머리를 파도 위로 받쳐 들었어요.",
        },
      ],
      [
        {
          id: "tlm-4",
          text: "She left him on the sand, where a girl from a nearby temple found him, so he never knew who had saved his life.",
          translation:
            "그녀가 왕자를 모래밭에 남겨 두자 근처 신전의 한 소녀가 그를 발견했고, 그래서 왕자는 누가 자기 목숨을 구했는지 끝내 알지 못했어요.",
        },
        {
          id: "tlm-5",
          text: "After that the mermaid could think of nothing but the prince, and of the human soul that mermaids do not have.",
          translation:
            "그 뒤로 인어공주는 오직 왕자 생각, 그리고 인어에게는 없는 인간의 영혼 생각뿐이었어요.",
        },
        {
          id: "tlm-6",
          text: "Her grandmother told her that only a man's true love and marriage could give her a share of such a soul.",
          translation:
            "할머니는 오직 한 남자의 진실한 사랑과 결혼만이 그녀에게 그런 영혼의 한 조각을 나누어 줄 수 있다고 말했어요.",
        },
      ],
      [
        {
          id: "tlm-7",
          text: "So the mermaid swam to the sea witch, who made a drink that would turn her tail into legs.",
          translation:
            "그래서 인어공주는 바다 마녀에게 헤엄쳐 갔고, 마녀는 그녀의 꼬리를 다리로 바꿀 물약을 만들어 주었어요.",
        },
        {
          id: "tlm-8",
          text: "But every step would feel like walking on knives, she could never be a mermaid again, and if the prince married someone else she would melt into sea foam.",
          translation:
            "하지만 걸음마다 칼 위를 걷는 듯할 것이고, 다시는 인어가 될 수 없으며, 만약 왕자가 다른 사람과 결혼하면 그녀는 바다 물거품이 되어 사라질 것이었어요.",
        },
        {
          id: "tlm-9",
          text: "The price for the drink was the mermaid's voice, and the witch took it from her.",
          translation:
            "그 물약의 값은 인어공주의 목소리였고, 마녀는 그것을 그녀에게서 가져갔어요.",
        },
      ],
      [
        {
          id: "tlm-10",
          text: "On the prince's shore she drank the potion, and in the morning he found a lovely, silent girl and took her to his palace.",
          translation:
            "왕자의 해안에서 그녀는 물약을 마셨고, 아침에 왕자는 아름답지만 말을 못 하는 소녀를 발견해 자기 궁전으로 데려갔어요.",
        },
        {
          id: "tlm-11",
          text: "She danced for him, though each step gave her great pain, and he grew to love her as his dearest friend.",
          translation:
            "그녀는 걸음마다 큰 고통이 따랐지만 왕자를 위해 춤을 추었고, 왕자는 그녀를 가장 아끼는 친구로 사랑하게 되었어요.",
        },
        {
          id: "tlm-12",
          text: "But he said he could only marry the girl from the temple, whom he believed had saved him from the sea.",
          translation:
            "하지만 왕자는 자기를 바다에서 구해 주었다고 믿는 신전의 그 소녀하고만 결혼할 수 있다고 말했어요.",
        },
      ],
      [
        {
          id: "tlm-13",
          text: "Then that very girl was found, the prince married her with great joy, and the mermaid knew that at sunrise she would turn to foam.",
          translation:
            "그러던 중 바로 그 소녀가 나타났고, 왕자는 크게 기뻐하며 그녀와 결혼했으며, 인어공주는 해가 뜨면 자신이 물거품이 되리라는 것을 알았어요.",
        },
        {
          id: "tlm-14",
          text: "That night her sisters rose from the water and offered her a way to save herself, but it would mean harming the prince, and she could not do it.",
          translation:
            "그날 밤 언니들이 물 위로 올라와 스스로를 구할 방법을 건넸지만, 그것은 왕자를 해쳐야 하는 일이었고, 그녀는 도저히 그럴 수 없었어요.",
        },
        {
          id: "tlm-15",
          text: "As the sun came up, she let herself fall into the sea.",
          translation: "해가 떠오를 때, 그녀는 스스로 바다로 몸을 던졌어요.",
        },
      ],
      [
        {
          id: "tlm-16",
          text: "But instead of becoming foam, she felt herself lifted into the warm air among bright, kind spirits.",
          translation:
            "하지만 물거품이 되는 대신, 그녀는 자신이 따뜻한 공기 속으로, 빛나고 다정한 정령들 사이로 들어 올려지는 것을 느꼈어요.",
        },
        {
          id: "tlm-17",
          text: "They told her she was now a daughter of the air, and that through many years of good deeds she could still win a soul of her own.",
          translation:
            "정령들은 그녀에게 이제 공기의 딸이 되었으며, 여러 해에 걸친 선한 행동을 통해 자기만의 영혼을 얻을 수 있다고 말해 주었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tlm-v1",
        term: "mermaid",
        partOfSpeech: "noun",
        translation: "인어",
        example: "The little mermaid lived in her father's palace deep under the sea.",
        exampleTranslation: "인어공주는 바다 깊은 곳 아버지의 궁전에서 살았어요.",
      },
      {
        id: "tlm-v2",
        term: "soul",
        partOfSpeech: "noun",
        translation: "영혼",
        example: "Mermaids live for hundreds of years, but they have no soul.",
        exampleTranslation: "인어는 수백 년을 살지만, 영혼이 없어요.",
      },
      {
        id: "tlm-v3",
        term: "drown",
        partOfSpeech: "verb",
        translation: "물에 빠져 죽다, 익사하다",
        example: "She caught the prince before he could drown in the storm.",
        exampleTranslation: "그녀는 왕자가 폭풍 속에서 익사하기 전에 그를 붙잡았어요.",
      },
      {
        id: "tlm-v4",
        term: "potion",
        partOfSpeech: "noun",
        translation: "물약, (마법의) 약",
        example: "The sea witch made a potion that turned her tail into legs.",
        exampleTranslation: "바다 마녀는 그녀의 꼬리를 다리로 바꾸는 물약을 만들었어요.",
      },
      {
        id: "tlm-v5",
        term: "foam",
        partOfSpeech: "noun",
        translation: "(파도의) 물거품, 거품",
        example: "If the prince married another, she would melt into sea foam.",
        exampleTranslation: "왕자가 다른 사람과 결혼하면, 그녀는 바다 물거품이 되어 사라질 운명이었어요.",
      },
    ],
    questions: [
      {
        id: "tlm-q1",
        prompt: "How did the little mermaid help the prince?",
        options: [
          "She warned his ship away from the storm.",
          "She saved him from drowning and brought him to the shore.",
          "She sang to him from the rocks each night.",
          "She gave him a magic drink to keep him safe.",
        ],
        correctIndex: 1,
        explanation:
          "When the storm wrecked his ship, the mermaid held the drowning prince's head above the water and carried him to land, though he never knew it was her.",
      },
      {
        id: "tlm-q2",
        prompt: "What did the mermaid give the sea witch in exchange for legs?",
        options: [
          "Her long golden hair.",
          "Three hundred years of her life.",
          "Her voice.",
          "Her father's crown.",
        ],
        correctIndex: 2,
        explanation:
          "The witch's drink would turn her tail to legs, but every step would hurt like knives and she could never return to the sea; the price was the mermaid's beautiful voice.",
      },
      {
        id: "tlm-q3",
        prompt: "What happened to the little mermaid at the end of the story?",
        options: [
          "She married the prince after the temple girl refused him.",
          "She turned to sea foam and was gone forever.",
          "She became a daughter of the air, with a chance to earn a soul through good deeds.",
          "Her sisters carried her safely home to the Sea King.",
        ],
        correctIndex: 2,
        explanation:
          "Rather than harm the prince to save herself, she let herself fall into the sea at sunrise; instead of becoming foam she was lifted up as a daughter of the air, who could still win a soul through years of kindness.",
      },
    ],
  },
  {
    slug: "beauty-and-the-beast",
    title: "Beauty and the Beast",
    titleTranslation: "미녀와 야수",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Jeanne-Marie Leprince de Beaumont (1711–1780)",
    coverEmoji: "🏰",
    coverImage: "/covers/beauty-and-the-beast.svg",
    source:
      "Adapted from Jeanne-Marie Leprince de Beaumont's fairy tale \"Beauty and the Beast\" (\"La Belle et la Bête\", 1756), as retold in Andrew Lang's \"The Blue Fairy Book\" (1889; long in the public domain, Project Gutenberg #503). This simplified retelling and its Korean translation are original text written for SeoJae Story; some details have been trimmed and gently softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain why Beauty went to the Beast's palace, and what she finally realised that set the Beast free.",
    paragraphs: [
      [
        {
          id: "bab-1",
          text: "A merchant had three daughters, and the youngest, called Beauty, was as kind as she was lovely.",
          translation:
            "한 상인에게 딸이 셋 있었는데, 벨이라 불리는 막내딸은 예쁜 만큼이나 마음씨도 고왔어요.",
        },
        {
          id: "bab-2",
          text: "When the merchant had to travel, his elder daughters asked for fine dresses, but Beauty asked only for a single rose.",
          translation:
            "상인이 먼 길을 떠나게 되자, 두 언니는 고운 드레스를 사다 달라고 했지만, 벨은 오직 장미 한 송이만 부탁했어요.",
        },
        {
          id: "bab-3",
          text: "On his way home, lost in a snowy forest, he came to a great dark palace with warm fires and food, but no people at all.",
          translation:
            "집으로 돌아오는 길에 눈 덮인 숲에서 길을 잃은 그는, 따뜻한 불과 음식이 있지만 사람은 아무도 없는 크고 어두운 궁전에 이르렀어요.",
        },
      ],
      [
        {
          id: "bab-4",
          text: "In the morning, as he left, he picked one rose from the garden for Beauty.",
          translation:
            "아침에 궁전을 나서면서, 그는 벨에게 줄 장미 한 송이를 정원에서 꺾었어요.",
        },
        {
          id: "bab-5",
          text: "At once a terrible Beast appeared and roared, \"You have stolen my rose, and now you must stay here forever.\"",
          translation:
            "그 순간 무시무시한 야수가 나타나 포효했어요. \"네가 내 장미를 훔쳤으니, 이제 너는 영영 이곳에 머물러야 한다.\"",
        },
        {
          id: "bab-6",
          text: "But the Beast said that a daughter might come in his place instead — if she came of her own free will.",
          translation:
            "하지만 야수는 딸 하나가 그 대신 와도 된다고 말했어요. 단, 스스로 원해서 와야 한다는 것이었어요.",
        },
      ],
      [
        {
          id: "bab-7",
          text: "Beauty would not let her father suffer, so she rode to the palace and told the Beast she would stay.",
          translation:
            "벨은 아버지가 고통받게 둘 수 없어서, 궁전으로 말을 달려가 야수에게 자신이 머물겠다고 말했어요.",
        },
        {
          id: "bab-8",
          text: "She found beautiful rooms, kind servants she could not see, and a garden full of roses.",
          translation:
            "그곳에는 아름다운 방들과, 눈에 보이지 않는 친절한 하인들, 그리고 장미가 가득한 정원이 있었어요.",
        },
        {
          id: "bab-9",
          text: "The Beast was gentle to her, and every evening at supper he asked, \"Beauty, will you marry me?\"",
          translation:
            "야수는 벨에게 다정했고, 저녁 식사 때마다 이렇게 물었어요. \"벨, 나와 결혼해 주겠소?\"",
        },
      ],
      [
        {
          id: "bab-10",
          text: "Every evening she answered \"No\" — but she was no longer afraid of him, and she began to look forward to his company.",
          translation:
            "저녁마다 벨은 \"싫어요\"라고 대답했어요. 하지만 이제는 야수가 무섭지 않았고, 그와 함께 있는 시간을 기다리게 되었어요.",
        },
        {
          id: "bab-11",
          text: "In a magic mirror she saw that her father was ill and grieving for her at home.",
          translation:
            "마법 거울 속에서 벨은 아버지가 집에서 병이 든 채 자신을 그리워하며 슬퍼하는 모습을 보았어요.",
        },
        {
          id: "bab-12",
          text: "The Beast gave her a ring and let her visit for one week, but warned that if she stayed away too long, he would die of sorrow.",
          translation:
            "야수는 벨에게 반지를 주며 일주일 동안 다녀오게 해 주었지만, 너무 오래 떨어져 있으면 자신이 슬픔으로 죽고 말 거라고 일러 두었어요.",
        },
      ],
      [
        {
          id: "bab-13",
          text: "At home her jealous sisters begged and wept until Beauty promised to stay a few days more.",
          translation:
            "집에서는 시샘하는 언니들이 애원하고 눈물을 흘려서, 벨은 며칠 더 머물겠다고 약속하고 말았어요.",
        },
        {
          id: "bab-14",
          text: "On the eighth night she dreamed the Beast was lying still and cold in his garden.",
          translation:
            "여드레째 되는 밤, 벨은 야수가 정원에 차갑게 굳은 채 누워 있는 꿈을 꾸었어요.",
        },
        {
          id: "bab-15",
          text: "She turned the ring at once and found herself back at the palace, where the Beast lay dying beside the rose bushes.",
          translation:
            "벨은 즉시 반지를 돌렸고, 어느새 궁전으로 돌아와 있었는데, 야수는 장미 덤불 곁에서 죽어 가고 있었어요.",
        },
      ],
      [
        {
          id: "bab-16",
          text: "\"Do not die,\" she cried. \"I know now that I love you, and I will marry you.\"",
          translation:
            "\"죽지 마세요.\" 벨이 울부짖었어요. \"이제 알겠어요. 저는 당신을 사랑해요. 당신과 결혼할게요.\"",
        },
        {
          id: "bab-17",
          text: "At her words the Beast rose up as a handsome prince, freed at last from a fairy's spell that only true love could break.",
          translation:
            "그 말에 야수는 잘생긴 왕자로 일어섰어요. 오직 진실한 사랑만이 풀 수 있는 요정의 마법에서 마침내 벗어난 것이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "bab-v1",
        term: "merchant",
        partOfSpeech: "noun",
        translation: "상인, 무역상",
        example: "The merchant had lost his ships and most of his money at sea.",
        exampleTranslation: "그 상인은 배와 재산 대부분을 바다에서 잃었어요.",
      },
      {
        id: "bab-v2",
        term: "beast",
        partOfSpeech: "noun",
        translation: "짐승, 야수",
        example: "A huge and frightening beast lived alone in the palace.",
        exampleTranslation: "거대하고 무서운 야수 한 마리가 그 궁전에 혼자 살고 있었어요.",
      },
      {
        id: "bab-v3",
        term: "roar",
        partOfSpeech: "verb",
        translation: "으르렁거리다, 포효하다",
        example: "The Beast roared with anger when the merchant picked a rose.",
        exampleTranslation: "상인이 장미를 꺾자 야수는 분노하여 포효했어요.",
      },
      {
        id: "bab-v4",
        term: "sorrow",
        partOfSpeech: "noun",
        translation: "슬픔, 비탄",
        example: "The Beast said he would die of sorrow if Beauty never came back.",
        exampleTranslation: "야수는 벨이 다시 돌아오지 않으면 슬픔으로 죽고 말 거라고 말했어요.",
      },
      {
        id: "bab-v5",
        term: "gentle",
        partOfSpeech: "adjective",
        translation: "다정한, 온화한",
        example: "In spite of his fearful shape, the Beast was always gentle to Beauty.",
        exampleTranslation: "무시무시한 겉모습과 달리, 야수는 벨에게 늘 다정했어요.",
      },
    ],
    questions: [
      {
        id: "bab-q1",
        prompt: "What did Beauty ask her father to bring back?",
        options: [
          "A fine silk dress.",
          "A single rose.",
          "A box of gold.",
          "A magic mirror.",
        ],
        correctIndex: 1,
        explanation:
          "While her proud sisters asked for dresses and jewels, Beauty asked only for one rose — and it was that rose, picked in the Beast's garden, that began all the trouble.",
      },
      {
        id: "bab-q2",
        prompt: "Why did Beauty go to live in the Beast's palace?",
        options: [
          "She wanted to see the roses in his garden.",
          "Her sisters forced her to leave home.",
          "She went in her father's place, so that he would not be punished.",
          "The Beast carried her there against her will.",
        ],
        correctIndex: 2,
        explanation:
          "The Beast said one of the merchant's daughters could come in his place if she came willingly; Beauty would not let her father suffer, so she went herself.",
      },
      {
        id: "bab-q3",
        prompt: "How was the Beast finally freed?",
        options: [
          "Beauty's father broke the fairy's spell.",
          "Beauty told him she loved him and would marry him.",
          "The Beast picked one of his own roses.",
          "Beauty stayed at the palace for a whole year.",
        ],
        correctIndex: 1,
        explanation:
          "A fairy had cursed the prince to be a Beast until someone loved him for his goodness; when Beauty, finding him near death, said she loved him and would marry him, the spell broke and he became a prince again.",
      },
    ],
  },
  {
    slug: "rapunzel",
    title: "Rapunzel",
    titleTranslation: "라푼젤",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "🗼",
    coverImage: "/covers/rapunzel.svg",
    source:
      "Adapted from the Brothers Grimm tale \"Rapunzel\" (collected 1812; long in the public domain, Project Gutenberg #2591). This simplified retelling and its Korean translation are original text written for SeoJae Story; some of the original's harsher details have been softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain how the prince first reached Rapunzel's tower, what the witch did when she found out, and how the story ended.",
    paragraphs: [
      [
        {
          id: "rpz-1",
          text: "A woman who was going to have a child longed for a green herb called rapunzel, which grew in a witch's garden.",
          translation:
            "곧 아이를 낳을 한 여인이 마녀의 정원에서 자라는 '라푼젤'이라는 푸른 풀을 몹시 먹고 싶어 했어요.",
        },
        {
          id: "rpz-2",
          text: "Her husband climbed the wall to pick some, but the witch caught him and made a hard bargain.",
          translation:
            "남편이 그 풀을 좀 뜯으려고 담을 넘었지만, 마녀에게 붙잡혀 가혹한 거래를 하고 말았어요.",
        },
        {
          id: "rpz-3",
          text: "He could take the herb, she said, only if he gave her the baby when it was born — and, afraid, he agreed.",
          translation:
            "마녀는 아이가 태어나면 자기에게 준다면 풀을 가져가도 좋다고 했고, 겁이 난 남편은 그러겠다고 했어요.",
        },
      ],
      [
        {
          id: "rpz-4",
          text: "The witch named the girl Rapunzel, and when Rapunzel was twelve she shut her in a tall tower with no stairs and no door.",
          translation:
            "마녀는 그 여자아이를 라푼젤이라 불렀고, 라푼젤이 열두 살이 되자 계단도 문도 없는 높은 탑에 가두었어요.",
        },
        {
          id: "rpz-5",
          text: "The tower had only one small window at the very top, and Rapunzel had long, shining golden hair.",
          translation:
            "탑에는 맨 꼭대기에 작은 창문 하나만 있었고, 라푼젤은 길고 반짝이는 금빛 머리카락을 가지고 있었어요.",
        },
        {
          id: "rpz-6",
          text: "When the witch wanted to come up, she called, \"Rapunzel, Rapunzel, let down your hair,\" and climbed up the golden braid.",
          translation:
            "마녀는 위로 올라가고 싶을 때면 \"라푼젤아, 라푼젤아, 머리카락을 내려 다오.\" 하고 외쳤고, 그 금빛 땋은 머리를 타고 올라갔어요.",
        },
      ],
      [
        {
          id: "rpz-7",
          text: "One day a king's son rode through the forest and heard Rapunzel singing to herself in the tower.",
          translation:
            "어느 날 한 왕자가 숲을 지나 말을 달리다가, 탑 안에서 라푼젤이 혼자 노래하는 소리를 들었어요.",
        },
        {
          id: "rpz-8",
          text: "He watched from behind a tree, saw how the witch climbed up, and the next evening he called the same words.",
          translation:
            "왕자는 나무 뒤에 숨어 마녀가 어떻게 올라가는지 지켜보았고, 다음 날 저녁 똑같은 말을 외쳤어요.",
        },
        {
          id: "rpz-9",
          text: "Rapunzel was frightened at first, but the prince spoke so kindly that soon they were friends, and then they agreed to marry.",
          translation:
            "라푼젤은 처음에는 겁을 냈지만, 왕자가 아주 다정하게 말해서 곧 두 사람은 친구가 되었고, 이윽고 결혼하기로 약속했어요.",
        },
      ],
      [
        {
          id: "rpz-10",
          text: "Rapunzel asked him to bring a little silk each time he came, so that she could weave a ladder and climb down.",
          translation:
            "라푼젤은 왕자가 올 때마다 비단을 조금씩 가져다 달라고 했어요. 그것으로 사다리를 엮어 내려갈 생각이었지요.",
        },
        {
          id: "rpz-11",
          text: "But one day she forgot herself and asked the witch why she was so much heavier to pull up than the young prince.",
          translation:
            "그런데 어느 날 라푼젤은 그만 실수로, 마녀가 젊은 왕자보다 왜 그렇게 훨씬 무겁게 끌어올려지느냐고 물어 버렸어요.",
        },
        {
          id: "rpz-12",
          text: "The witch flew into a rage, took a pair of scissors, and cut off all of Rapunzel's beautiful hair.",
          translation:
            "마녀는 격분하여 가위를 들고, 라푼젤의 아름다운 머리카락을 몽땅 잘라 버렸어요.",
        },
      ],
      [
        {
          id: "rpz-13",
          text: "The witch sent Rapunzel far away to a wild and lonely place, then tied the cut hair to the window hook.",
          translation:
            "마녀는 라푼젤을 거칠고 외딴곳으로 멀리 보내 버린 뒤, 잘라 낸 머리카락을 창문 고리에 묶어 두었어요.",
        },
        {
          id: "rpz-14",
          text: "That evening the prince called the words, climbed up the hair — and found the angry witch waiting instead of Rapunzel.",
          translation:
            "그날 저녁 왕자는 그 말을 외치고 머리카락을 타고 올라갔지만, 라푼젤 대신 성난 마녀가 기다리고 있는 것을 보았어요.",
        },
        {
          id: "rpz-15",
          text: "In his grief he fell from the tower and was hurt, and for a long time he wandered blind through the forest, living on roots and berries.",
          translation:
            "슬픔에 빠진 왕자는 탑에서 떨어져 다쳤고, 오랫동안 앞을 보지 못한 채 나무뿌리와 산딸기로 연명하며 숲속을 헤맸어요.",
        },
      ],
      [
        {
          id: "rpz-16",
          text: "At last he came to the lonely place where Rapunzel lived, and she ran to him and wept for joy.",
          translation:
            "마침내 왕자는 라푼젤이 사는 외딴곳에 이르렀고, 라푼젤은 그에게 달려와 기쁨의 눈물을 흘렸어요.",
        },
        {
          id: "rpz-17",
          text: "Two of her tears fell on his eyes, and at once he could see again, and he took her home to his kingdom.",
          translation:
            "그녀의 눈물 두 방울이 왕자의 두 눈에 떨어지자 왕자는 곧바로 다시 앞을 볼 수 있게 되었고, 라푼젤을 자기 왕국으로 데려갔어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "rpz-v1",
        term: "herb",
        partOfSpeech: "noun",
        translation: "풀, 약초, 허브",
        example: "The woman longed to eat the green herb growing in the witch's garden.",
        exampleTranslation: "그 여인은 마녀의 정원에서 자라는 푸른 풀을 먹고 싶어 안달했어요.",
      },
      {
        id: "rpz-v2",
        term: "tower",
        partOfSpeech: "noun",
        translation: "탑",
        example: "Rapunzel lived alone at the top of a tall tower with no door.",
        exampleTranslation: "라푼젤은 문이 없는 높은 탑 꼭대기에서 혼자 살았어요.",
      },
      {
        id: "rpz-v3",
        term: "braid",
        partOfSpeech: "noun",
        translation: "땋은 머리, 땋은 것",
        example: "The witch climbed up Rapunzel's long golden braid.",
        exampleTranslation: "마녀는 라푼젤의 길고 금빛인 땋은 머리를 타고 올라갔어요.",
      },
      {
        id: "rpz-v4",
        term: "weave",
        partOfSpeech: "verb",
        translation: "(실·천 등을) 짜다, 엮다",
        example: "Rapunzel planned to weave a ladder out of pieces of silk.",
        exampleTranslation: "라푼젤은 비단 조각으로 사다리를 엮을 계획이었어요.",
      },
      {
        id: "rpz-v5",
        term: "rage",
        partOfSpeech: "noun",
        translation: "격분, 분노",
        example: "The witch flew into a rage and cut off Rapunzel's hair.",
        exampleTranslation: "마녀는 격분하여 라푼젤의 머리카락을 잘라 버렸어요.",
      },
    ],
    questions: [
      {
        id: "rpz-q1",
        prompt: "Why did the witch take the couple's baby?",
        options: [
          "The parents could not afford to feed her.",
          "The father had promised the baby in exchange for herbs from the witch's garden.",
          "The witch had no children of her own and asked kindly.",
          "The baby was born with golden hair, which the witch wanted.",
        ],
        correctIndex: 1,
        explanation:
          "Caught stealing the herb rapunzel for his pregnant wife, the husband was forced to promise the witch the child in return, and she took the girl at birth.",
      },
      {
        id: "rpz-q2",
        prompt: "How did people climb up to Rapunzel in the tower?",
        options: [
          "They used a long rope ladder.",
          "There was a hidden staircase inside the wall.",
          "Rapunzel let her long hair fall from the window and they climbed it.",
          "The witch carried them up by magic.",
        ],
        correctIndex: 2,
        explanation:
          "The tower had no door or stairs; anyone who wanted to come up called \"Rapunzel, Rapunzel, let down your hair,\" and climbed her long golden braid.",
      },
      {
        id: "rpz-q3",
        prompt: "How did the prince get his sight back at the end?",
        options: [
          "A doctor in his kingdom cured him.",
          "The witch took pity and healed him.",
          "Two of Rapunzel's tears fell on his eyes.",
          "He washed his eyes in a magic spring.",
        ],
        correctIndex: 2,
        explanation:
          "After years wandering blind, the prince found Rapunzel again; when she wept for joy, two of her tears fell on his eyes and his sight returned.",
      },
    ],
  },
  {
    slug: "the-awakening",
    title: "The Awakening",
    titleTranslation: "각성",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Kate Chopin (1850–1904)",
    coverEmoji: "🌊",
    coverImage: "/covers/the-awakening.svg",
    source:
      "Adapted from Chapter 1 of Kate Chopin's novel \"The Awakening\" (first published 1899; long in the public domain, Project Gutenberg #160). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Mr. Pontellier's attitude toward his wife, and how Edna spends the afternoon once he has left for Klein's.",
    paragraphs: [
      [
        {
          id: "awk-1",
          text: "It was summer on Grand Isle, a resort of weathered cottages on the Gulf coast where well-off New Orleans families came to escape the heat.",
          translation:
            "그랜드아일의 여름이었어요. 그곳은 형편이 넉넉한 뉴올리언스 가족들이 더위를 피해 찾아오는, 비바람에 낡은 오두막들이 모인 멕시코만 해안의 휴양지였어요.",
        },
        {
          id: "awk-2",
          text: "Outside the main house a caged green-and-yellow parrot shrieked the same French phrases over and over, and a mockingbird answered from the far side of the door.",
          translation:
            "본채 밖에서는 새장에 갇힌 초록색과 노란색 앵무새가 똑같은 프랑스어 구절을 몇 번이고 되풀이해 꽥꽥거렸고, 문 반대편에서는 흉내지빠귀가 그 소리에 응답했어요.",
        },
        {
          id: "awk-3",
          text: "Mr. Léonce Pontellier, unable to read his newspaper for the noise, folded it under his arm and walked down to his own cottage.",
          translation:
            "레옹스 퐁텔리에 씨는 그 소음 때문에 신문을 읽을 수가 없어서, 신문을 겨드랑이에 접어 끼고 자기 오두막으로 내려갔어요.",
        },
      ],
      [
        {
          id: "awk-4",
          text: "He was a neat, correct man of forty, with a trimmed beard and a careful part in his hair, and he liked his days to run to a plan.",
          translation:
            "그는 잘 다듬은 턱수염과 단정하게 가른 머리를 한, 마흔 살의 깔끔하고 반듯한 사람이었고, 하루하루가 계획대로 흘러가는 것을 좋아했어요.",
        },
        {
          id: "awk-5",
          text: "From his porch he looked toward the beach and saw, under a white sunshade, his wife Edna coming back from a swim with a young man named Robert Lebrun.",
          translation:
            "현관에서 해변 쪽을 바라보던 그는, 하얀 양산 아래로 아내 에드나가 로버트 르브룅이라는 젊은 남자와 함께 수영을 마치고 돌아오는 모습을 보았어요.",
        },
        {
          id: "awk-6",
          text: "He watched them without much interest, the way a man might glance at a costly thing that belonged to him.",
          translation:
            "그는 별다른 관심 없이 두 사람을 바라보았는데, 마치 자기 소유의 값비싼 물건을 흘깃 보는 듯한 눈길이었어요.",
        },
      ],
      [
        {
          id: "awk-7",
          text: "When Edna reached the house she held out her hands for the rings she had left with him, and slipped them back onto her fingers.",
          translation:
            "에드나는 집에 이르자 남편에게 맡겨 두었던 반지를 달라고 손을 내밀었고, 그것을 다시 손가락에 끼웠어요.",
        },
        {
          id: "awk-8",
          text: "\"You are burnt beyond recognition,\" her husband said, half scolding, looking her over.",
          translation:
            "\"알아볼 수 없을 만큼 새까맣게 탔군.\" 남편이 그녀를 훑어보며 반쯤 나무라듯 말했어요.",
        },
        {
          id: "awk-9",
          text: "Edna only laughed, spread out her strong, sunburnt hands, and turned to go on talking with Robert about their morning in the water.",
          translation:
            "에드나는 그저 웃으며, 볕에 그을린 야무진 두 손을 펼쳐 보이고는, 다시 로버트를 향해 물속에서 보낸 그날 아침 이야기를 이어 갔어요.",
        },
      ],
      [
        {
          id: "awk-10",
          text: "Edna and Robert talked at the same time, laughing, finishing each other's stories, and Léonce could have followed it all if he had cared to listen.",
          translation:
            "에드나와 로버트는 동시에 이야기하고, 웃고, 서로의 말을 대신 마무리해 주었으며, 레옹스도 마음먹고 귀를 기울였다면 그 이야기를 다 따라갈 수 있었을 거예요.",
        },
        {
          id: "awk-11",
          text: "He stood up, stretched, and said he was going over to Klein's hotel to play billiards.",
          translation:
            "그는 자리에서 일어나 기지개를 켜고는, 클라인 호텔에 당구를 치러 가겠다고 말했어요.",
        },
        {
          id: "awk-12",
          text: "Edna asked whether he would be back for dinner; he shrugged and said it would depend on the company he found there.",
          translation:
            "에드나가 저녁 식사에 맞춰 돌아올 거냐고 묻자, 그는 어깨를 으쓱하며 거기서 누구를 만나느냐에 달렸다고 말했어요.",
        },
      ],
      [
        {
          id: "awk-13",
          text: "After he had gone, the two little Pontellier boys stayed with their nurse under the oaks, and Edna and Robert settled on the porch steps.",
          translation:
            "그가 떠난 뒤, 퐁텔리에 집안의 어린 두 아들은 떡갈나무 아래에서 보모와 함께 있었고, 에드나와 로버트는 현관 계단에 자리를 잡고 앉았어요.",
        },
        {
          id: "awk-14",
          text: "They talked for hours, easily and without effort, about the sea, the wind, and the other guests at the pension.",
          translation:
            "두 사람은 바다와 바람, 그리고 그 하숙 여관의 다른 손님들에 대해 몇 시간이고 편안하게, 힘들이지 않고 이야기했어요.",
        },
        {
          id: "awk-15",
          text: "Robert spoke of his plan to go to Mexico in the autumn to make his fortune, as he did most summers without ever going.",
          translation:
            "로버트는 가을에 멕시코로 건너가 한몫 잡겠다는 계획을 이야기했는데, 그는 거의 매년 여름 그렇게 말하면서도 한 번도 간 적이 없었어요.",
        },
      ],
      [
        {
          id: "awk-16",
          text: "Edna told him about her father's plantation in Mississippi and the Kentucky bluegrass country where she had grown up.",
          translation:
            "에드나는 미시시피에 있는 아버지의 농장과, 자신이 자란 켄터키의 풀밭 고장에 대해 그에게 들려주었어요.",
        },
        {
          id: "awk-17",
          text: "The afternoon slipped by while they talked, and neither of them thought about when Mr. Pontellier might come home.",
          translation:
            "두 사람이 이야기하는 동안 오후가 흘러갔고, 둘 중 누구도 퐁텔리에 씨가 언제 집에 돌아올지는 생각하지 않았어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "awk-v1",
        term: "resort",
        partOfSpeech: "noun",
        translation: "휴양지, 리조트",
        example: "Grand Isle was a quiet summer resort on the Gulf coast.",
        exampleTranslation: "그랜드아일은 멕시코만 해안의 조용한 여름 휴양지였어요.",
      },
      {
        id: "awk-v2",
        term: "correct",
        partOfSpeech: "adjective",
        translation: "예의 바른, 나무랄 데 없는, 격식을 갖춘",
        example: "Mr. Pontellier was a correct man who liked his days to follow a plan.",
        exampleTranslation:
          "퐁텔리에 씨는 하루하루가 계획대로 흘러가기를 좋아하는 반듯한 사람이었어요.",
      },
      {
        id: "awk-v3",
        term: "scold",
        partOfSpeech: "verb",
        translation: "꾸짖다, 나무라다",
        example: "He scolded her lightly for letting herself get so sunburnt.",
        exampleTranslation: "그는 그녀가 그렇게 심하게 볕에 탄 것을 두고 가볍게 나무랐어요.",
      },
      {
        id: "awk-v4",
        term: "shrug",
        partOfSpeech: "verb",
        translation: "어깨를 으쓱하다",
        example: "He shrugged and said he did not know when he would be back.",
        exampleTranslation: "그는 어깨를 으쓱하며 언제 돌아올지 모르겠다고 말했어요.",
      },
      {
        id: "awk-v5",
        term: "pension",
        partOfSpeech: "noun",
        translation: "(휴양지의) 하숙 여관, 펜션",
        example: "Madame Lebrun ran the pension, a group of cottages by the sea.",
        exampleTranslation: "르브룅 부인은 바닷가의 오두막들로 이루어진 하숙 여관을 운영했어요.",
      },
    ],
    questions: [
      {
        id: "awk-q1",
        prompt: "Why did Mr. Pontellier move from the main house to his own cottage?",
        options: [
          "He wanted to be closer to the beach.",
          "The noise of the parrot and mockingbird kept him from reading.",
          "Madame Lebrun asked the guests to leave the porch.",
          "He was waiting for Edna and Robert to return.",
        ],
        correctIndex: 1,
        explanation:
          "A caged parrot was shrieking the same phrases over and over and a mockingbird was answering it; unable to read his newspaper, Léonce simply got up and walked to his cottage.",
      },
      {
        id: "awk-q2",
        prompt: "How does Mr. Pontellier look at his wife when she comes back from the beach?",
        options: [
          "With worry, because she seems unwell.",
          "With warmth, hurrying down to meet her.",
          "With mild interest, as at a valuable thing that belongs to him.",
          "With anger, because she is late for dinner.",
        ],
        correctIndex: 2,
        explanation:
          "He watches Edna and Robert approach without much interest, and the narrator says he looks at his sunburnt wife the way a man looks at a costly piece of property that is his.",
      },
      {
        id: "awk-q3",
        prompt: "What did Edna and Robert do after Mr. Pontellier left for Klein's?",
        options: [
          "They took the children swimming again.",
          "They sat on the porch and talked easily for hours.",
          "They quarrelled about his plan to go to Mexico.",
          "They walked to the Chênière with the other guests.",
        ],
        correctIndex: 1,
        explanation:
          "With Léonce gone to play billiards, Edna and Robert settled on the porch steps and talked for hours — about the sea, the guests, his yearly plan to go to Mexico, and her childhood in Kentucky and Mississippi.",
      },
    ],
  },
  {
    slug: "the-house-of-mirth",
    title: "The House of Mirth",
    titleTranslation: "환락의 집",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Edith Wharton (1862–1937)",
    coverEmoji: "🚂",
    coverImage: "/covers/the-house-of-mirth.svg",
    source:
      "Adapted from Book 1, Chapter 1 of Edith Wharton's novel \"The House of Mirth\" (first published 1905; long in the public domain, Project Gutenberg #284). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain how Selden and Lily came to have tea together, and what the chapter suggests about Lily's situation in life.",
    paragraphs: [
      [
        {
          id: "hom-1",
          text: "Passing through the crowded Grand Central Station one September afternoon, Lawrence Selden caught sight of Miss Lily Bart and stopped, pleased.",
          translation:
            "9월의 어느 오후, 붐비는 그랜드 센트럴 역을 지나가던 로런스 셀던은 릴리 바트 양을 발견하고는 반가운 마음에 걸음을 멈췄어요.",
        },
        {
          id: "hom-2",
          text: "She stood quite still in the middle of the hurrying crowd, and her bright, finished beauty made everyone around her look grey.",
          translation:
            "그녀는 바삐 오가는 인파 한가운데 가만히 서 있었고, 그 환하고 완성된 아름다움 때문에 주위 사람들이 온통 잿빛으로 보였어요.",
        },
        {
          id: "hom-3",
          text: "He had known her for years, and thought that at twenty-nine she was as lovely as ever, though perhaps a little tired underneath.",
          translation:
            "그는 여러 해 전부터 그녀를 알고 지냈는데, 스물아홉이 된 그녀가 여전히 예전만큼 아름답다고 생각했어요. 다만 그 아래로 어딘가 조금 지친 기색이 있긴 했지요.",
        },
      ],
      [
        {
          id: "hom-4",
          text: "Lily saw him and came over, smiling. \"Mr. Selden — what good luck. You can save me.\"",
          translation:
            "릴리는 그를 보고 웃으며 다가왔어요. \"셀던 씨, 이게 웬 행운이에요. 저를 구해 주실 수 있겠네요.\"",
        },
        {
          id: "hom-5",
          text: "She had missed her train to a country house party, and the next one would not leave for two long hours.",
          translation:
            "그녀는 시골 저택 파티로 가는 기차를 놓쳤고, 다음 기차는 무려 두 시간이 지나야 떠날 참이었어요.",
        },
        {
          id: "hom-6",
          text: "She could not bear to sit in the dismal ladies' waiting room, she said, and did not know what to do with herself.",
          translation:
            "그녀는 을씨년스러운 여성 대합실에 앉아 있는 것은 도저히 못 견디겠다고, 그렇다고 뭘 해야 할지도 모르겠다고 말했어요.",
        },
      ],
      [
        {
          id: "hom-7",
          text: "Selden's rooms were only a street away, and on an impulse he asked whether she would come and have a cup of tea.",
          translation:
            "셀던의 거처는 겨우 한 블록 떨어진 곳이었고, 그는 충동적으로 그녀에게 차 한잔하러 오지 않겠느냐고 물었어요.",
        },
        {
          id: "hom-8",
          text: "A single young woman did not usually visit a bachelor's flat, and for a moment Lily glanced about her and hesitated.",
          translation:
            "미혼의 젊은 여성이 독신 남성의 집을 방문하는 일은 보통 있는 일이 아니었기에, 릴리는 잠시 주위를 둘러보며 망설였어요.",
        },
        {
          id: "hom-9",
          text: "Then she laughed. \"How delightful. One of the few pleasures of being poor is that now and then you may do something a little rash.\"",
          translation:
            "그러더니 그녀는 웃었어요. \"정말 근사하네요. 가난한 것의 몇 안 되는 즐거움 중 하나는, 이따금 조금 경솔한 일을 해도 된다는 거예요.\"",
        },
      ],
      [
        {
          id: "hom-10",
          text: "For Lily was poor, in her world's sense of the word, and she had been living for years on visits, invitations, and other people's houses.",
          translation:
            "릴리는, 그녀가 속한 세계의 기준으로 보면 가난했고, 여러 해 동안 남의 집 방문과 초대에 기대어 살아왔어요.",
        },
        {
          id: "hom-11",
          text: "She was beautiful and clever and admired, but she had no money and no husband, and both were beginning to feel overdue.",
          translation:
            "그녀는 아름답고 영리하고 뭇사람의 찬사를 받았지만, 돈도 남편도 없었고, 그 두 가지가 이제는 진작 있었어야 할 것처럼 느껴지기 시작했어요.",
        },
        {
          id: "hom-12",
          text: "The fine gold bracelet on her wrist, Selden thought, might almost have been a chain.",
          translation:
            "그녀의 손목에 걸린 고운 금팔찌가, 셀던이 보기에는 거의 쇠사슬이나 다름없어 보였어요.",
        },
      ],
      [
        {
          id: "hom-13",
          text: "They left the station together and walked toward his building through the warm afternoon streets.",
          translation:
            "두 사람은 함께 역을 나와, 따뜻한 오후의 거리를 지나 그의 건물 쪽으로 걸었어요.",
        },
        {
          id: "hom-14",
          text: "On the steps a large charwoman was down on her knees scrubbing, and she lifted her red face and stared hard at Lily.",
          translation:
            "건물 계단에서는 덩치 큰 청소부 한 명이 무릎을 꿇고 바닥을 문질러 닦고 있었는데, 그녀는 벌게진 얼굴을 들어 릴리를 뚫어지게 쳐다보았어요.",
        },
        {
          id: "hom-15",
          text: "The look was rude and searching, and it left Lily faintly uneasy, though she could not have said why.",
          translation:
            "그 눈길은 무례하고 뭔가를 캐는 듯했고, 릴리는 이유는 몰라도 어쩐지 마음이 편치 않았어요.",
        },
      ],
      [
        {
          id: "hom-16",
          text: "\"So this is the Benedick,\" she said, reading the name above the door. \"I never knew where it was.\"",
          translation:
            "\"여기가 베네딕이군요.\" 그녀가 문 위에 적힌 이름을 읽으며 말했어요. \"어디 있는 건물인지 여태 몰랐어요.\"",
        },
        {
          id: "hom-17",
          text: "Selden reminded her that it was a house for single men, and, still amused at her own boldness, she went up with him to tea.",
          translation:
            "셀던이 그곳은 독신 남성들이 사는 건물이라고 일러 주자, 그녀는 자신의 대담함이 여전히 우스운 듯 그와 함께 차를 마시러 올라갔어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "hom-v1",
        term: "impulse",
        partOfSpeech: "noun",
        translation: "충동, (갑작스러운) 마음",
        example: "On an impulse, Selden asked her to come up for tea.",
        exampleTranslation: "셀던은 충동적으로 그녀에게 차를 마시러 올라오라고 청했어요.",
      },
      {
        id: "hom-v2",
        term: "rash",
        partOfSpeech: "adjective",
        translation: "경솔한, 성급한, 무모한",
        example: "She enjoyed doing something a little rash now and then.",
        exampleTranslation: "그녀는 이따금 조금 경솔한 일을 하는 것을 즐겼어요.",
      },
      {
        id: "hom-v3",
        term: "dismal",
        partOfSpeech: "adjective",
        translation: "음침한, 을씨년스러운, 우울한",
        example: "She did not want to spend two hours in the dismal waiting room.",
        exampleTranslation: "그녀는 을씨년스러운 대합실에서 두 시간을 보내고 싶지 않았어요.",
      },
      {
        id: "hom-v4",
        term: "charwoman",
        partOfSpeech: "noun",
        translation: "(건물·가정의) 청소부, 파출부",
        example: "A charwoman was scrubbing the steps when they arrived.",
        exampleTranslation: "두 사람이 도착했을 때 청소부 한 명이 계단을 문질러 닦고 있었어요.",
      },
      {
        id: "hom-v5",
        term: "overdue",
        partOfSpeech: "adjective",
        translation: "진작 됐어야 할, 이미 늦은",
        example: "At twenty-nine, both money and a husband were beginning to feel overdue.",
        exampleTranslation:
          "스물아홉이 되니, 돈도 남편도 이제는 진작 있었어야 할 것처럼 느껴지기 시작했어요.",
      },
    ],
    questions: [
      {
        id: "hom-q1",
        prompt: "Why was Lily Bart waiting at the station?",
        options: [
          "She was meeting a friend arriving from the country.",
          "She had missed her train and had two hours until the next one.",
          "She was looking for Lawrence Selden.",
          "Her luggage had been lost by the railway.",
        ],
        correctIndex: 1,
        explanation:
          "Lily had missed her train to a country house party, and the next one would not leave for two hours; she was standing in the crowd, unsure what to do with the time.",
      },
      {
        id: "hom-q2",
        prompt: "Why did Lily hesitate before accepting Selden's invitation?",
        options: [
          "She did not really like him.",
          "She was afraid of missing her later train.",
          "It was not usual for a single young woman to visit a bachelor's flat.",
          "She had already promised to have tea with someone else.",
        ],
        correctIndex: 2,
        explanation:
          "A single young woman calling at a bachelor's rooms was not quite proper; Lily glanced around and paused, then laughed and went anyway, enjoying the small daring of it.",
      },
      {
        id: "hom-q3",
        prompt: "How is Lily's position in society described in this chapter?",
        options: [
          "She is wealthy and secure, with nothing to worry about.",
          "She is beautiful and admired, but poor and unmarried, living on other people's hospitality.",
          "She has just inherited a large fortune from an aunt.",
          "She has decided to give up society and live quietly.",
        ],
        correctIndex: 1,
        explanation:
          "Lily is lovely, clever and much admired, but she has no money and no husband; she has been living for years on visits and invitations, and Selden thinks of her gold bracelet as almost a chain.",
      },
    ],
  },
  {
    slug: "ethan-frome",
    title: "Ethan Frome",
    titleTranslation: "이선 프롬",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Edith Wharton (1862–1937)",
    coverEmoji: "❄️",
    coverImage: "/covers/ethan-frome.svg",
    source:
      "Adapted from the prologue of Edith Wharton's novel \"Ethan Frome\" (first published 1911; long in the public domain, Project Gutenberg #4517). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how Ethan Frome first appeared to the narrator, and what the narrator came to feel he understood after the storm night at the farm.",
    paragraphs: [
      [
        {
          id: "etf-1",
          text: "I had been sent to Starkfield, a small town in the Massachusetts hills, to work through the winter on the new power-house.",
          translation:
            "나는 새 발전소 공사를 맡아 겨우내 일하기 위해 매사추세츠 산간의 작은 마을 스타크필드로 보내졌어요.",
        },
        {
          id: "etf-2",
          text: "A workers' strike held up the job, and I found myself stranded there for months in the deep snow and cold.",
          translation:
            "노동자 파업으로 공사가 지연되면서, 나는 깊은 눈과 추위 속에서 몇 달이나 그곳에 발이 묶이고 말았어요.",
        },
        {
          id: "etf-3",
          text: "It was in Starkfield that I first saw Ethan Frome.",
          translation: "내가 이선 프롬을 처음 본 곳이 바로 스타크필드였어요.",
        },
      ],
      [
        {
          id: "etf-4",
          text: "He was the most striking figure in the town, tall and powerfully built, but bent and stiff down one side, and lame in his right leg.",
          translation:
            "그는 마을에서 가장 눈에 띄는 인물이었어요. 키가 크고 다부진 체격이었지만, 한쪽 옆구리가 굽고 뻣뻣했으며, 오른쪽 다리를 절었어요.",
        },
        {
          id: "etf-5",
          text: "A red scar ran across his forehead, and though people told me he was only fifty-two, he looked far older.",
          translation:
            "붉은 흉터가 그의 이마를 가로질러 나 있었고, 사람들은 그가 겨우 쉰두 살이라고 했지만 훨씬 더 나이 들어 보였어요.",
        },
        {
          id: "etf-6",
          text: "\"He's been in Starkfield too many winters,\" the old stage-driver said.",
          translation:
            "\"저 사람은 스타크필드에서 너무 많은 겨울을 났지.\" 늙은 역마차꾼이 말했어요.",
        },
      ],
      [
        {
          id: "etf-7",
          text: "Frome came to the post office every day for the mail, sat silent in his sleigh, and spoke to almost no one.",
          translation:
            "프롬은 날마다 우편물을 찾으러 우체국에 왔고, 썰매에 말없이 앉아 있었으며, 거의 누구와도 말을 섞지 않았어요.",
        },
        {
          id: "etf-8",
          text: "Little by little I gathered scraps of his story: a bad accident, a \"smash-up,\" twenty-four years ago had nearly killed him and left him lame.",
          translation:
            "나는 조금씩 그의 이야기를 토막토막 주워 모았어요. 24년 전 큰 사고, 이른바 '대참사'가 그를 죽일 뻔했고 다리를 절게 만들었다는 것이었어요.",
        },
        {
          id: "etf-9",
          text: "His family had been a sickly, unlucky one, people said, and there had been a wife, but no one would tell me much more.",
          translation:
            "사람들은 그의 집안이 병약하고 운이 없는 집안이었다고, 아내가 하나 있었다고 했지만, 그 이상은 아무도 말해 주려 하지 않았어요.",
        },
      ],
      [
        {
          id: "etf-10",
          text: "When my own horse could not be hired in the worst weather, Frome agreed to drive me the long cold miles to the railway and back, for a dollar a day.",
          translation:
            "날씨가 가장 험할 때 내가 탈 말을 구할 수 없게 되자, 프롬은 하루 1달러를 받고 나를 태워 멀고 추운 길을 오가며 철도역까지 데려다주기로 했어요.",
        },
        {
          id: "etf-11",
          text: "For more than a week we made that silent journey together through the snow.",
          translation:
            "일주일 넘게 우리는 눈길을 헤치며 그 말 없는 여정을 함께했어요.",
        },
        {
          id: "etf-12",
          text: "I lent him a book about science, and later he said, with a slow flush, that he had once been \"crazy about that kind of thing.\"",
          translation:
            "내가 그에게 과학책 한 권을 빌려주었더니, 나중에 그는 얼굴을 서서히 붉히며 한때는 \"그런 것에 미쳐 있었다\"고 말했어요.",
        },
      ],
      [
        {
          id: "etf-13",
          text: "So there had been a time when this shut-up, frozen man had wanted more from life than Starkfield could give him.",
          translation:
            "그러니까 이 꽉 닫힌, 얼어붙은 남자에게도 스타크필드가 줄 수 있는 것 이상을 인생에서 바라던 때가 있었던 거예요.",
        },
        {
          id: "etf-14",
          text: "One evening a great storm came down, and Frome said the snow was too deep to reach the station.",
          translation:
            "어느 날 저녁 큰 눈보라가 몰아쳤고, 프롬은 눈이 너무 깊어 역까지 갈 수 없겠다고 말했어요.",
        },
        {
          id: "etf-15",
          text: "He would take me home instead, he said, to shelter for the night at the Frome farm.",
          translation:
            "그는 대신 나를 자기 집으로 데려가, 프롬 농장에서 하룻밤 묵게 해 주겠다고 했어요.",
        },
      ],
      [
        {
          id: "etf-16",
          text: "The house stood gaunt and half-ruined in the drifts, with one wing torn away, and inside I heard a woman's voice, thin and high, going on and on in complaint.",
          translation:
            "그 집은 눈더미 속에 앙상하고 반쯤 허물어진 채 서 있었고, 한쪽 별채는 뜯겨 나가 있었으며, 안에서는 가늘고 높은 여자 목소리가 그칠 줄 모르고 불평을 늘어놓는 것이 들렸어요.",
        },
        {
          id: "etf-17",
          text: "That night, I felt, I had found the key to Ethan Frome, and began to put his story together.",
          translation:
            "그날 밤, 나는 이선 프롬을 이해할 열쇠를 찾았다는 느낌이 들었고, 그의 이야기를 하나로 맞춰 나가기 시작했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "etf-v1",
        term: "stranded",
        partOfSpeech: "adjective",
        translation: "발이 묶인, 오도 가도 못하는",
        example: "The strike left the engineer stranded in Starkfield all winter.",
        exampleTranslation: "파업 때문에 그 기술자는 겨우내 스타크필드에 발이 묶였어요.",
      },
      {
        id: "etf-v2",
        term: "lame",
        partOfSpeech: "adjective",
        translation: "다리를 저는, 절름거리는",
        example: "Ever since the accident, Frome had been lame in his right leg.",
        exampleTranslation: "그 사고 이후로 프롬은 오른쪽 다리를 절었어요.",
      },
      {
        id: "etf-v3",
        term: "scar",
        partOfSpeech: "noun",
        translation: "흉터",
        example: "A red scar ran across Ethan Frome's forehead.",
        exampleTranslation: "붉은 흉터가 이선 프롬의 이마를 가로질러 나 있었어요.",
      },
      {
        id: "etf-v4",
        term: "scrap",
        partOfSpeech: "noun",
        translation: "(정보 등의) 조각, 토막",
        example: "The narrator picked up only scraps of Frome's story from the townspeople.",
        exampleTranslation: "화자는 마을 사람들에게서 프롬의 이야기를 토막토막으로만 주워들었어요.",
      },
      {
        id: "etf-v5",
        term: "gaunt",
        partOfSpeech: "adjective",
        translation: "수척한, 앙상한",
        example: "The Frome farmhouse stood gaunt and half-ruined in the snow.",
        exampleTranslation: "프롬의 농가는 눈 속에 앙상하고 반쯤 허물어진 채 서 있었어요.",
      },
    ],
    questions: [
      {
        id: "etf-q1",
        prompt: "Why was the narrator staying in Starkfield?",
        options: [
          "He had family living there.",
          "He was working there for the winter, and a strike kept him from leaving.",
          "He had come to write about Ethan Frome.",
          "His train had broken down in the town.",
        ],
        correctIndex: 1,
        explanation:
          "The narrator, an engineer, had been sent to Starkfield to work on the power-house; a workers' strike delayed the job and left him stranded there through the winter.",
      },
      {
        id: "etf-q2",
        prompt: "What did the narrator learn about Ethan Frome from the townspeople?",
        options: [
          "That he was the richest man in Starkfield.",
          "That he had left town for many years and only just returned.",
          "That a bad accident twenty-four years ago had nearly killed him and left him lame.",
          "That he had never spoken to anyone in his life.",
        ],
        correctIndex: 2,
        explanation:
          "People gave the narrator only scraps: Frome's family had been sickly and unlucky, there had been a wife, and a \"smash-up\" twenty-four years earlier had crippled him.",
      },
      {
        id: "etf-q3",
        prompt: "What did the science book reveal about the kind of man Frome had once been?",
        options: [
          "That he could not read.",
          "That he had once been eager to learn and wanted more than Starkfield could offer.",
          "That he had studied at a university in Florida.",
          "That he disliked books and gave it straight back.",
        ],
        correctIndex: 1,
        explanation:
          "Frome kept the borrowed book and admitted, with a slow flush, that he had once been \"crazy about that kind of thing\" — a sign that the silent, shut-up man had once reached for a larger life.",
      },
    ],
  },
  {
    slug: "east-of-the-sun-and-west-of-the-moon",
    title: "East of the Sun and West of the Moon",
    titleTranslation: "해님의 동쪽, 달님의 서쪽",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "P. C. Asbjørnsen & Jørgen Moe (1812–1885, 1813–1882)",
    coverEmoji: "🌙",
    coverImage: "/covers/east-of-the-sun-and-west-of-the-moon.svg",
    source:
      "Adapted from the Norwegian folk tale \"East of the Sun and West of the Moon,\" collected by Peter Christen Asbjørnsen and Jørgen Moe, as retold in Andrew Lang's \"The Blue Fairy Book\" (1889; long in the public domain, Project Gutenberg #503). This simplified retelling and its Korean translation are original text written for SeoJae Story; the tale has been trimmed and gently softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain what happened when the girl lit the candle, and how she found and won back the prince in the end.",
    paragraphs: [
      [
        {
          id: "esm-1",
          text: "A poor farmer had many children, and one autumn night a great White Bear knocked at the window.",
          translation:
            "가난한 농부에게는 자식이 많았는데, 어느 가을밤 커다란 흰곰 한 마리가 창문을 두드렸어요.",
        },
        {
          id: "esm-2",
          text: "\"Give me your youngest daughter,\" said the Bear, \"and I will make you rich.\"",
          translation:
            "\"막내딸을 나에게 주시오.\" 곰이 말했어요. \"그러면 당신을 부자로 만들어 주겠소.\"",
        },
        {
          id: "esm-3",
          text: "The girl was afraid, but at last she agreed, and she climbed onto the Bear's broad back and was carried away.",
          translation:
            "소녀는 무서웠지만 마침내 승낙했고, 곰의 넓은 등에 올라타 실려 갔어요.",
        },
      ],
      [
        {
          id: "esm-4",
          text: "The Bear brought her to a hidden castle full of gold and fine rooms, where a silver bell gave her anything she wished for.",
          translation:
            "곰은 소녀를 금과 훌륭한 방들로 가득한 숨겨진 성으로 데려갔는데, 그곳에서는 은종을 울리기만 하면 무엇이든 원하는 것을 얻을 수 있었어요.",
        },
        {
          id: "esm-5",
          text: "Each night, after she put out the light, a man came and lay down beside her in the dark, and was gone before morning.",
          translation:
            "밤마다 소녀가 불을 끄고 나면, 한 남자가 어둠 속에서 다가와 곁에 누웠다가 아침이 되기 전에 사라졌어요.",
        },
        {
          id: "esm-6",
          text: "She never saw his face, and though he was kind, she grew lonely and longed to visit her family.",
          translation:
            "소녀는 그의 얼굴을 한 번도 보지 못했고, 그가 다정하기는 했지만 점점 외로워져 가족을 보러 가고 싶어 몹시 그리워했어요.",
        },
      ],
      [
        {
          id: "esm-7",
          text: "The Bear let her go home, but warned her not to listen to her mother's advice, or she would bring sorrow on them both.",
          translation:
            "곰은 소녀를 집에 보내 주었지만, 어머니의 충고를 듣지 말라고, 그러지 않으면 두 사람 모두에게 슬픔이 닥칠 거라고 일렀어요.",
        },
        {
          id: "esm-8",
          text: "Her mother, hearing the strange story, gave her a candle and told her to light it while the man slept and look at his face.",
          translation:
            "이상한 이야기를 들은 어머니는 소녀에게 초 한 자루를 주며, 그 남자가 잠든 사이에 초에 불을 붙여 그의 얼굴을 보라고 했어요.",
        },
        {
          id: "esm-9",
          text: "Back at the castle she lit the candle — and saw the most handsome prince, so lovely that she bent to kiss him.",
          translation:
            "성으로 돌아온 소녀는 초에 불을 붙였고, 세상에서 가장 잘생긴 왕자를 보았어요. 너무나 사랑스러워서 소녀는 몸을 숙여 그에게 입을 맞추었지요.",
        },
      ],
      [
        {
          id: "esm-10",
          text: "Three drops of hot wax fell on his shirt, and he woke. \"Now you have ruined us both,\" he said sadly.",
          translation:
            "뜨거운 촛농 세 방울이 그의 셔츠 위로 떨어졌고, 왕자가 잠에서 깼어요. \"이제 당신은 우리 둘 다를 망쳐 버렸어요.\" 그가 슬프게 말했어요.",
        },
        {
          id: "esm-11",
          text: "A wicked stepmother had put a curse on him: a Bear by day, a man by night, and one more year would have set him free.",
          translation:
            "사악한 계모가 그에게 저주를 걸어 놓았던 거예요. 낮에는 곰, 밤에는 사람이었고, 딱 한 해만 더 버텼으면 저주에서 풀려날 수 있었어요.",
        },
        {
          id: "esm-12",
          text: "Now he must go to her castle, which lay east of the sun and west of the moon, and marry a princess with a long, ugly nose.",
          translation:
            "이제 그는 해님의 동쪽, 달님의 서쪽에 있는 계모의 성으로 가서, 길고 흉한 코를 가진 공주와 결혼해야만 했어요.",
        },
      ],
      [
        {
          id: "esm-13",
          text: "In the morning the castle was gone, and the girl set out to find him, walking on and on through the world.",
          translation:
            "아침이 되자 성은 사라지고 없었고, 소녀는 그를 찾아 나서서 온 세상을 걷고 또 걸었어요.",
        },
        {
          id: "esm-14",
          text: "Three old women gave her golden gifts and sent her from one Wind to the next, until the strong North Wind carried her on his back over the sea.",
          translation:
            "세 노파가 소녀에게 금으로 된 선물을 주며 이 바람에서 저 바람에게로 보냈고, 마침내 힘센 북풍이 소녀를 등에 업고 바다를 건너 실어다 주었어요.",
        },
        {
          id: "esm-15",
          text: "He set her down, worn out, beneath the windows of the castle east of the sun and west of the moon.",
          translation:
            "북풍은 기진맥진한 채로 해님의 동쪽, 달님의 서쪽에 있는 그 성의 창문 아래에 소녀를 내려놓았어요.",
        },
      ],
      [
        {
          id: "esm-16",
          text: "She traded her golden gifts for three nights with the prince; twice he was in a drugged sleep, but on the third night he was awake and they made a plan.",
          translation:
            "소녀는 금으로 된 선물들을 내주고 왕자와 함께할 세 번의 밤을 얻었어요. 두 번은 왕자가 약에 취해 잠들어 있었지만, 셋째 밤에는 깨어 있어서 두 사람은 계획을 세웠어요.",
        },
        {
          id: "esm-17",
          text: "When the long-nosed princess could not wash the wax from the shirt, the girl washed it white in a moment, the spell was broken, and the prince took her for his wife.",
          translation:
            "코가 긴 공주가 셔츠에서 촛농을 씻어 내지 못하자, 소녀가 순식간에 그것을 새하얗게 빨아 냈고, 마법이 풀리면서 왕자는 소녀를 아내로 맞았어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "esm-v1",
        term: "long",
        partOfSpeech: "verb",
        translation: "간절히 바라다, 몹시 그리워하다",
        example: "Alone in the great castle, she longed to see her family again.",
        exampleTranslation: "거대한 성에 혼자 있던 그녀는 가족을 다시 보고 싶어 몹시 그리워했어요.",
      },
      {
        id: "esm-v2",
        term: "wax",
        partOfSpeech: "noun",
        translation: "밀랍, 촛농",
        example: "Three drops of hot wax fell from the candle onto the prince's shirt.",
        exampleTranslation: "촛불에서 뜨거운 촛농 세 방울이 왕자의 셔츠 위로 떨어졌어요.",
      },
      {
        id: "esm-v3",
        term: "curse",
        partOfSpeech: "noun",
        translation: "저주",
        example: "The stepmother's curse turned the prince into a bear every day.",
        exampleTranslation: "계모의 저주는 왕자를 날마다 곰으로 바꿔 놓았어요.",
      },
      {
        id: "esm-v4",
        term: "drugged",
        partOfSpeech: "adjective",
        translation: "약에 취한, 약(수면제)을 탄",
        example: "The princess gave the prince a drugged drink so he would not wake.",
        exampleTranslation: "공주는 왕자가 깨어나지 못하도록 그에게 약을 탄 음료를 주었어요.",
      },
      {
        id: "esm-v5",
        term: "stepmother",
        partOfSpeech: "noun",
        translation: "계모, 새어머니",
        example: "It was his cruel stepmother who had bewitched him.",
        exampleTranslation: "그에게 마법을 건 것은 잔인한 계모였어요.",
      },
    ],
    questions: [
      {
        id: "esm-q1",
        prompt: "What did the White Bear promise the poor farmer?",
        options: [
          "To carry his goods to market each week.",
          "To make him rich if he gave up his youngest daughter.",
          "To guard the family's house through the winter.",
          "To bring back the daughter after one year.",
        ],
        correctIndex: 1,
        explanation:
          "The Bear knocked at the window one autumn night and offered to make the poor farmer rich in exchange for his youngest daughter, who at last agreed to go.",
      },
      {
        id: "esm-q2",
        prompt: "Why did the girl light the candle to look at her sleeping husband?",
        options: [
          "The room was too dark to find her way to bed.",
          "The Bear had told her to check that he was really asleep.",
          "Her mother had told her to, so she could see his face.",
          "She wanted to read a letter he had left for her.",
        ],
        correctIndex: 2,
        explanation:
          "She had never seen the man who came in the dark; on her visit home, her mother gave her a candle and told her to light it while he slept and look at him — but three drops of hot wax fell on his shirt and woke him.",
      },
      {
        id: "esm-q3",
        prompt: "How did the girl finally win the prince back?",
        options: [
          "The North Wind frightened the Trolls away.",
          "She washed the wax spots from the shirt when no one else could.",
          "She gave the long-nosed princess all three golden gifts.",
          "The prince recognised her voice at the wedding feast.",
        ],
        correctIndex: 1,
        explanation:
          "On the wedding morning the long-nosed princess could not wash the wax from the shirt; the girl washed it white in a moment, the spell broke, and the prince chose her as his bride.",
      },
    ],
  },
  {
    slug: "the-twelve-dancing-princesses",
    title: "The Twelve Dancing Princesses",
    titleTranslation: "춤추는 열두 공주",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Fairy tale",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Jacob & Wilhelm Grimm (1785–1863, 1786–1859)",
    coverEmoji: "💃",
    coverImage: "/covers/the-twelve-dancing-princesses.svg",
    source:
      "Adapted from the Brothers Grimm tale \"The Twelve Dancing Princesses\" (\"Die zertanzten Schuhe\", collected 1815), as retold in Andrew Lang's \"The Red Fairy Book\" (1890; long in the public domain, Project Gutenberg #540). This simplified retelling and its Korean translation are original text written for SeoJae Story; the tale has been trimmed and gently softened for new readers.",
    summaryPrompt:
      "In 1–2 sentences, explain how the old soldier managed to follow the princesses without being seen, and what proof he brought back to the king.",
    paragraphs: [
      [
        {
          id: "tdp-1",
          text: "A king had twelve daughters who slept together in one locked room every night.",
          translation:
            "어느 왕에게는 딸이 열둘 있었는데, 이들은 밤마다 잠긴 방 하나에서 함께 잤어요.",
        },
        {
          id: "tdp-2",
          text: "Yet every morning their dancing shoes were found worn full of holes, as if they had danced all night.",
          translation:
            "그런데도 아침마다 공주들의 무도화는 마치 밤새 춤이라도 춘 것처럼 구멍이 나도록 닳아 있었어요.",
        },
        {
          id: "tdp-3",
          text: "The king promised that whoever could discover their secret might marry one of them.",
          translation:
            "왕은 공주들의 비밀을 알아내는 사람은 그들 중 하나와 결혼해도 좋다고 약속했어요.",
        },
      ],
      [
        {
          id: "tdp-4",
          text: "Many princes tried, but each drank the wine the princesses gave him at bedtime, fell fast asleep, and learned nothing.",
          translation:
            "많은 왕자가 도전했지만, 저마다 잠자리에 들 때 공주들이 준 포도주를 마시고 곯아떨어져 아무것도 알아내지 못했어요.",
        },
        {
          id: "tdp-5",
          text: "Then an old soldier came along, and on the road an old woman gave him two pieces of advice.",
          translation:
            "그러던 어느 날 늙은 병사 하나가 지나가는데, 길에서 한 노파가 그에게 두 가지 조언을 해 주었어요.",
        },
        {
          id: "tdp-6",
          text: "\"Do not drink the wine they give you,\" she said, \"and only pretend to sleep.\" She also gave him a cloak that made him invisible.",
          translation:
            "\"공주들이 주는 포도주는 마시지 말고,\" 노파가 말했어요. \"자는 척만 하게.\" 그러고는 그를 보이지 않게 해 주는 망토도 하나 건넸어요.",
        },
      ],
      [
        {
          id: "tdp-7",
          text: "That night the soldier poured the wine away without drinking, then lay still and snored loudly.",
          translation:
            "그날 밤 병사는 포도주를 마시지 않고 몰래 쏟아 버린 뒤, 가만히 누워 큰 소리로 코를 골았어요.",
        },
        {
          id: "tdp-8",
          text: "The princesses laughed, put on beautiful gowns, and the eldest tapped on her bed, which sank down to show a hidden stair.",
          translation:
            "공주들은 웃으며 아름다운 드레스를 차려입었고, 맏딸이 자기 침대를 톡톡 두드리자 침대가 아래로 가라앉으며 숨겨진 계단이 나타났어요.",
        },
        {
          id: "tdp-9",
          text: "One by one they went down, and the soldier threw on his cloak and crept after them.",
          translation:
            "공주들이 하나둘 내려갔고, 병사는 망토를 뒤집어쓰고 그들을 살금살금 뒤따랐어요.",
        },
      ],
      [
        {
          id: "tdp-10",
          text: "They passed through woods where the leaves were made of silver, then of gold, then of shining diamonds.",
          translation:
            "그들은 잎사귀가 은으로 된 숲, 이어서 금으로 된 숲, 그다음에는 반짝이는 다이아몬드로 된 숲을 지나갔어요.",
        },
        {
          id: "tdp-11",
          text: "The soldier quietly broke off one twig from each to keep as proof.",
          translation:
            "병사는 증거로 삼으려고 각 숲에서 잔가지를 하나씩 조용히 꺾었어요.",
        },
        {
          id: "tdp-12",
          text: "At a dark lake, twelve boats were waiting, and the princesses were rowed across to a bright castle full of music.",
          translation:
            "어두운 호수에는 배 열두 척이 기다리고 있었고, 공주들은 노를 저어 음악이 흐르는 환한 성으로 건너갔어요.",
        },
      ],
      [
        {
          id: "tdp-13",
          text: "There the princesses danced until three in the morning, when their shoes were worn through and they had to stop.",
          translation:
            "공주들은 그곳에서 새벽 세 시까지 춤을 추었고, 그때쯤이면 신발이 다 닳아 멈출 수밖에 없었어요.",
        },
        {
          id: "tdp-14",
          text: "Three nights the soldier followed them in secret, and on the last night he also carried off a golden cup.",
          translation:
            "병사는 사흘 밤을 몰래 그들을 따라다녔고, 마지막 밤에는 황금 잔도 하나 몰래 가지고 나왔어요.",
        },
        {
          id: "tdp-15",
          text: "Each morning he lay snoring in his bed before they returned, so they believed their secret was safe.",
          translation:
            "매일 아침 병사는 공주들이 돌아오기 전에 침대에 누워 코를 골았고, 그래서 공주들은 비밀이 안전하다고 믿었어요.",
        },
      ],
      [
        {
          id: "tdp-16",
          text: "When his three nights were up, the soldier showed the king the silver, gold, and diamond twigs and the golden cup, and told him everything.",
          translation:
            "사흘 밤이 지나자, 병사는 왕에게 은과 금과 다이아몬드 잔가지, 그리고 황금 잔을 내보이며 모든 것을 이야기했어요.",
        },
        {
          id: "tdp-17",
          text: "The princesses had to admit the truth, and the king let the soldier choose a bride — and, being old himself, he chose the eldest.",
          translation:
            "공주들은 사실을 인정할 수밖에 없었고, 왕은 병사에게 신붓감을 고르게 했는데, 병사는 자신도 나이가 많은지라 맏딸을 골랐어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tdp-v1",
        term: "worn",
        partOfSpeech: "adjective",
        translation: "닳은, 해진, 낡은",
        example: "Every morning the dancing shoes were worn through with holes.",
        exampleTranslation: "매일 아침 무도화는 구멍이 나도록 닳아 있었어요.",
      },
      {
        id: "tdp-v2",
        term: "invisible",
        partOfSpeech: "adjective",
        translation: "눈에 보이지 않는",
        example: "The magic cloak made the old soldier invisible.",
        exampleTranslation: "그 마법 망토는 늙은 병사를 보이지 않게 만들었어요.",
      },
      {
        id: "tdp-v3",
        term: "twig",
        partOfSpeech: "noun",
        translation: "잔가지, 작은 나뭇가지",
        example: "He broke off a silver twig to keep as proof.",
        exampleTranslation: "그는 증거로 삼으려고 은으로 된 잔가지 하나를 꺾었어요.",
      },
      {
        id: "tdp-v4",
        term: "proof",
        partOfSpeech: "noun",
        translation: "증거",
        example: "The soldier needed proof that his story was true.",
        exampleTranslation: "병사는 자기 이야기가 사실이라는 증거가 필요했어요.",
      },
      {
        id: "tdp-v5",
        term: "gown",
        partOfSpeech: "noun",
        translation: "(여성용) 드레스, 가운",
        example: "The princesses put on their finest gowns before going down.",
        exampleTranslation: "공주들은 아래로 내려가기 전에 가장 좋은 드레스를 차려입었어요.",
      },
    ],
    questions: [
      {
        id: "tdp-q1",
        prompt: "What puzzled the king every morning?",
        options: [
          "One of his daughters was always missing.",
          "The princesses' dancing shoes were worn full of holes.",
          "The door to their room stood open.",
          "The princesses were too tired to get up.",
        ],
        correctIndex: 1,
        explanation:
          "Though the princesses' room was locked and guarded all night, their dancing shoes were found worn through with holes each morning, as if they had danced for hours.",
      },
      {
        id: "tdp-q2",
        prompt: "What advice did the old woman give the soldier?",
        options: [
          "To drink only a little of the wine.",
          "To hide under the princesses' bed.",
          "Not to drink the wine, and to pretend to be asleep.",
          "To lock the princesses in a stronger room.",
        ],
        correctIndex: 2,
        explanation:
          "The old woman told him not to drink the wine the princesses offered and to pretend to sleep; she also gave him a cloak that made him invisible so he could follow them.",
      },
      {
        id: "tdp-q3",
        prompt: "How did the soldier prove where the princesses went?",
        options: [
          "He drew a map of the underground path.",
          "He brought back silver, gold, and diamond twigs and a golden cup.",
          "One of the princesses confessed to him.",
          "He caught one of the underground princes.",
        ],
        correctIndex: 1,
        explanation:
          "Following them invisibly for three nights, the soldier broke a twig from each of the silver, gold, and diamond woods and carried off a golden cup from the castle; he showed all of it to the king.",
      },
    ],
  },
  {
    slug: "the-bet",
    title: "The Bet",
    titleTranslation: "내기",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Anton Chekhov (1860–1904)",
    coverEmoji: "📚",
    coverImage: "/covers/the-bet.svg",
    source:
      "Adapted from Anton Chekhov's short story \"The Bet\" (\"Пари\", first published 1889), from the Constance Garnett collection \"The Lady with the Dog and Other Stories\" (long in the public domain, Project Gutenberg #13415). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain the terms of the bet, and why the lawyer walked away from the two million at the end.",
    paragraphs: [
      [
        {
          id: "bet-1",
          text: "Fifteen years ago, at a party, a young lawyer and a rich banker argued about which was worse: to be put to death, or to be shut up in prison for life.",
          translation:
            "15년 전 어느 파티에서, 젊은 변호사와 부유한 은행가가 사형을 당하는 것과 평생 감옥에 갇히는 것 중 어느 쪽이 더 끔찍한지를 두고 언쟁을 벌였어요.",
        },
        {
          id: "bet-2",
          text: "\"Life in prison is better,\" said the lawyer. \"To live any way at all is better than not to live.\"",
          translation:
            "\"감옥에서라도 사는 게 낫지요.\" 변호사가 말했어요. \"어떻게든 사는 것이 아예 살지 않는 것보다는 낫습니다.\"",
        },
        {
          id: "bet-3",
          text: "Angry, the banker cried, \"I bet you two million that you could not stay locked up alone for even five years.\" \"I will stay fifteen,\" said the lawyer.",
          translation:
            "화가 난 은행가가 소리쳤어요. \"자네가 단 5년도 혼자 갇혀 있지 못한다는 데 200만을 걸겠네.\" \"저는 15년을 있겠습니다.\" 변호사가 말했어요.",
        },
      ],
      [
        {
          id: "bet-4",
          text: "So the lawyer moved into a small lodge in the banker's garden, and the door was locked.",
          translation:
            "그리하여 변호사는 은행가의 정원에 있는 작은 별채로 들어갔고, 문은 잠겼어요.",
        },
        {
          id: "bet-5",
          text: "For fifteen years he was to see no one, hear no voices, and read no news, though he could ask for books, wine, and a piano through a little window.",
          translation:
            "15년 동안 그는 누구도 만나지 못하고, 사람 목소리도 듣지 못하며, 소식도 접할 수 없었어요. 다만 작은 창문을 통해 책과 포도주와 피아노는 청할 수 있었지요.",
        },
        {
          id: "bet-6",
          text: "If he left even five minutes early, he would lose the whole two million.",
          translation:
            "만약 그가 단 5분이라도 일찍 나오면, 200만 전부를 잃게 되어 있었어요.",
        },
      ],
      [
        {
          id: "bet-7",
          text: "In the first years he played sad music and read light novels, and the watchmen sometimes heard him weeping.",
          translation:
            "처음 몇 해 동안 그는 슬픈 음악을 연주하고 가벼운 소설을 읽었으며, 경비원들은 이따금 그가 우는 소리를 들었어요.",
        },
        {
          id: "bet-8",
          text: "Then he began to study in earnest — languages, history, and philosophy — and in a few years he read six hundred books.",
          translation:
            "그러다 그는 본격적으로 공부하기 시작했어요. 여러 언어와 역사와 철학을요. 그리고 몇 년 만에 육백 권의 책을 읽었어요.",
        },
        {
          id: "bet-9",
          text: "Later he read nothing but the Bible, and after that books on religion, science, and poetry, all mixed together.",
          translation:
            "그 뒤로는 오직 성경만 읽었고, 그다음에는 종교와 과학과 시에 관한 책들을 이것저것 뒤섞어 읽었어요.",
        },
      ],
      [
        {
          id: "bet-10",
          text: "The night before the fifteen years ended, the banker sat alone, close to despair.",
          translation:
            "15년이 끝나기 전날 밤, 은행가는 절망에 가까운 심정으로 홀로 앉아 있었어요.",
        },
        {
          id: "bet-11",
          text: "He had gambled and lost, and paying the two million now would leave him ruined and disgraced.",
          translation:
            "그는 도박을 하다 재산을 잃었고, 이제 와서 200만을 물어 주면 파산하고 망신까지 당할 처지였어요.",
        },
        {
          id: "bet-12",
          text: "\"There is only one way out,\" he thought. \"The man must die tonight.\"",
          translation:
            "\"빠져나갈 길은 하나뿐이야.\" 그는 생각했어요. \"저 사람이 오늘 밤 죽어야 해.\"",
        },
      ],
      [
        {
          id: "bet-13",
          text: "In the small hours the banker crept into the locked lodge and found the lawyer asleep at his table, thin as a skeleton, his hair already grey.",
          translation:
            "새벽녘에 은행가는 잠긴 별채로 몰래 들어갔고, 변호사가 탁자에 엎드려 잠든 것을 보았어요. 해골처럼 야위었고, 머리는 벌써 희끗희끗했지요.",
        },
        {
          id: "bet-14",
          text: "On the table lay a letter, and the banker began to read it.",
          translation: "탁자 위에는 편지 한 장이 놓여 있었고, 은행가는 그것을 읽기 시작했어요.",
        },
        {
          id: "bet-15",
          text: "In it the lawyer said that his books had shown him the whole world, and that he now scorned money, comfort, and life itself as empty things.",
          translation:
            "편지에서 변호사는, 자신의 책들이 온 세상을 보여 주었으며, 이제 자신은 돈과 안락함, 그리고 삶 그 자체마저도 공허한 것으로 여겨 경멸한다고 썼어요.",
        },
      ],
      [
        {
          id: "bet-16",
          text: "To prove his contempt, he wrote, he would leave the lodge five minutes early and give up all claim to the two million.",
          translation:
            "그 경멸을 증명하기 위해, 자신은 별채를 5분 일찍 나가 200만에 대한 권리를 모두 포기하겠다고 그는 썼어요.",
        },
        {
          id: "bet-17",
          text: "The banker kissed the sleeping man's head and wept; in the morning the lawyer climbed out of the window and was gone, and the banker locked the letter away in his safe.",
          translation:
            "은행가는 잠든 변호사의 머리에 입을 맞추고 흐느꼈어요. 아침이 되자 변호사는 창문으로 기어나가 사라졌고, 은행가는 그 편지를 금고에 넣어 잠가 두었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "bet-v1",
        term: "bet",
        partOfSpeech: "noun",
        translation: "내기, 내기에 건 것",
        example: "The banker offered a bet of two million roubles.",
        exampleTranslation: "은행가는 200만 루블을 건 내기를 제안했어요.",
      },
      {
        id: "bet-v2",
        term: "lodge",
        partOfSpeech: "noun",
        translation: "(정원·부지 안의) 작은 집, 별채",
        example: "The lawyer spent fifteen years in a small garden lodge.",
        exampleTranslation: "변호사는 정원의 작은 별채에서 15년을 보냈어요.",
      },
      {
        id: "bet-v3",
        term: "ruined",
        partOfSpeech: "adjective",
        translation: "파산한, 몰락한, 망한",
        example: "Years of gambling had left the banker almost ruined.",
        exampleTranslation: "여러 해에 걸친 도박으로 은행가는 거의 파산 지경에 이르렀어요.",
      },
      {
        id: "bet-v4",
        term: "scorn",
        partOfSpeech: "verb",
        translation: "경멸하다, 업신여기다",
        example: "The lawyer wrote that he now scorned money and comfort.",
        exampleTranslation: "변호사는 이제 돈과 안락함을 경멸한다고 썼어요.",
      },
      {
        id: "bet-v5",
        term: "despair",
        partOfSpeech: "noun",
        translation: "절망",
        example: "The night before the bet ended, the banker sat alone in despair.",
        exampleTranslation: "내기가 끝나기 전날 밤, 은행가는 절망에 빠져 홀로 앉아 있었어요.",
      },
    ],
    questions: [
      {
        id: "bet-q1",
        prompt: "What did the banker and the lawyer bet on?",
        options: [
          "Which of them could read more books in fifteen years.",
          "Whether the lawyer could stay locked up alone for fifteen years.",
          "Whether prison or death was the crueller punishment for a crime.",
          "Which of them would still be rich in fifteen years.",
        ],
        correctIndex: 1,
        explanation:
          "Arguing about whether life imprisonment was better than death, the banker bet two million that the lawyer could not bear even five years of solitary confinement; the lawyer said he would stay fifteen.",
      },
      {
        id: "bet-q2",
        prompt: "How did the lawyer spend the fifteen years?",
        options: [
          "Trying again and again to escape from the lodge.",
          "Refusing to read or study anything at all.",
          "Reading and studying — light novels at first, then languages, philosophy, religion, and science.",
          "Writing letters to the banker every day.",
        ],
        correctIndex: 2,
        explanation:
          "He began with sad music and light novels, then studied hard — six hundred books, languages, history, philosophy — later only the Bible, and finally many kinds of books at once.",
      },
      {
        id: "bet-q3",
        prompt: "Why did the lawyer give up the two million?",
        options: [
          "The banker had already paid him in secret.",
          "He had broken one of the rules by accident.",
          "His years of reading had made him scorn money and worldly things as empty.",
          "He felt sorry for the ruined banker.",
        ],
        correctIndex: 2,
        explanation:
          "In his letter the lawyer wrote that his books had shown him the whole world and taught him to despise money, comfort and life itself; to prove his contempt he left the lodge five minutes early and gave up all claim to the prize.",
      },
    ],
  },
  {
    slug: "the-country-of-the-pointed-firs",
    title: "The Country of the Pointed Firs",
    titleTranslation: "뾰족한 전나무의 고장",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Sarah Orne Jewett (1849–1909)",
    coverEmoji: "🌲",
    coverImage: "/covers/the-country-of-the-pointed-firs.svg",
    source:
      "Adapted from Chapters 1–2 of Sarah Orne Jewett's novel \"The Country of the Pointed Firs\" (first published 1896; long in the public domain, Project Gutenberg #367). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Mrs. Todd's place in the village of Dunnet Landing, and how the narrator arranged to get her writing done.",
    paragraphs: [
      [
        {
          id: "cpf-1",
          text: "A writer first saw the little fishing village of Dunnet Landing, on the coast of Maine, from the deck of a small steamer one bright June morning.",
          translation:
            "한 작가는 어느 화창한 6월 아침, 작은 증기선 갑판 위에서 메인주 해안의 작은 어촌 더넷 랜딩을 처음 보았어요.",
        },
        {
          id: "cpf-2",
          text: "There was something in its grey houses and dark pointed fir trees that caught at her heart, and she knew at once she would come back.",
          translation:
            "잿빛 집들과 뾰족하고 검은 전나무들에는 그녀의 마음을 잡아끄는 무언가가 있었고, 그녀는 그 자리에서 다시 오리라는 것을 알았어요.",
        },
        {
          id: "cpf-3",
          text: "Two or three summers later she returned, meaning to stay for a season and write.",
          translation:
            "두세 해 여름이 지난 뒤 그녀는 한 철을 머물며 글을 쓸 작정으로 다시 돌아왔어요.",
        },
      ],
      [
        {
          id: "cpf-4",
          text: "She took a room in the house of Mrs. Almira Todd, an elderly widow who lived at the edge of the village.",
          translation:
            "그녀는 마을 어귀에 사는 나이 든 과부 알미라 토드 부인의 집에 방 하나를 얻었어요.",
        },
        {
          id: "cpf-5",
          text: "Mrs. Todd gathered wild herbs on the hills and sold them, along with quiet home-made remedies and a sharp, spruce-flavoured beer.",
          translation:
            "토드 부인은 언덕에서 야생 약초를 캐다 팔았고, 조용히 만든 민간 치료약과 톡 쏘는 가문비나무 향의 맥주도 함께 팔았어요.",
        },
        {
          id: "cpf-6",
          text: "Her small front garden was so crowded with lovage, thyme, and pennyroyal that a visitor had to brush past their strong sweet smell to reach the door.",
          translation:
            "그녀의 자그마한 앞뜰은 러비지와 타임과 페니로열로 어찌나 빽빽했던지, 찾아온 사람은 그 짙고 달큰한 냄새를 헤치고 지나야 문에 닿을 수 있었어요.",
        },
      ],
      [
        {
          id: "cpf-7",
          text: "Among the herbs grew one strange, pungent plant that Mrs. Todd never named.",
          translation:
            "그 약초들 사이에는 토드 부인이 한 번도 이름을 대지 않은, 이상하고 코를 찌르는 냄새가 나는 식물 하나가 자랐어요.",
        },
        {
          id: "cpf-8",
          text: "Late at night the narrator would sometimes hear her go out and tend it alone by the light of the moon.",
          translation:
            "밤늦은 시각, 화자는 이따금 그녀가 밖으로 나가 달빛 아래 홀로 그 식물을 돌보는 소리를 들었어요.",
        },
        {
          id: "cpf-9",
          text: "There was something old and half-magical about Mrs. Todd, as if she kept knowledge that had been handed down for a very long time.",
          translation:
            "토드 부인에게는 아주 오래되고 반쯤 마법 같은 데가 있었는데, 마치 오랜 세월 동안 전해 내려온 지식을 간직하고 있는 듯했어요.",
        },
      ],
      [
        {
          id: "cpf-10",
          text: "All through the day, neighbours came to the back door — not only for herbs, but for advice.",
          translation:
            "하루 종일 이웃들이 뒷문으로 찾아왔는데, 약초를 구하러만이 아니라 조언을 얻으러도 왔어요.",
        },
        {
          id: "cpf-11",
          text: "They spoke to Mrs. Todd in low voices about their aches, their worries, and their family troubles, and went away comforted.",
          translation:
            "그들은 낮은 목소리로 토드 부인에게 자신의 통증과 걱정거리, 집안의 골칫거리를 털어놓고는 위로를 받고 돌아갔어요.",
        },
        {
          id: "cpf-12",
          text: "Now and then she left the narrator to mind the shop and weigh out a packet of dried leaves for a customer.",
          translation:
            "가끔 그녀는 화자에게 가게를 봐 달라고 맡기고는, 손님에게 줄 마른 잎 한 봉지를 달아 주게 했어요.",
        },
      ],
      [
        {
          id: "cpf-13",
          text: "The little house was busy and full of talk, and the narrator found she could not get her own writing done there.",
          translation:
            "그 작은 집은 늘 분주하고 이야기 소리로 가득해서, 화자는 그곳에서는 자기 글을 도무지 쓸 수 없다는 것을 알게 되었어요.",
        },
        {
          id: "cpf-14",
          text: "On a hill above the village stood the empty summer schoolhouse, and she arranged to rent it as a quiet place to work by day.",
          translation:
            "마을 위쪽 언덕에는 여름 방학으로 비어 있는 학교 건물이 있었고, 그녀는 낮에 조용히 일할 수 있도록 그곳을 빌리기로 했어요.",
        },
        {
          id: "cpf-15",
          text: "Mrs. Todd was a little hurt at first, but she soon understood, and packed her a lunch each morning without another word.",
          translation:
            "토드 부인은 처음에는 조금 서운해했지만 곧 이해했고, 그 뒤로는 아무 말 없이 아침마다 도시락을 싸 주었어요.",
        },
      ],
      [
        {
          id: "cpf-16",
          text: "So the summer settled into an easy rhythm: writing on the breezy hill by day, and Mrs. Todd's herb-scented kitchen in the evening.",
          translation:
            "그렇게 여름은 편안한 리듬으로 자리 잡았어요. 낮에는 바람 부는 언덕에서 글을 쓰고, 저녁에는 약초 향이 밴 토드 부인의 부엌에서 시간을 보내는 것이었지요.",
        },
        {
          id: "cpf-17",
          text: "Little by little, the old herb-woman and the visitor became true friends.",
          translation:
            "조금씩, 나이 든 약초꾼 여인과 그 방문객은 진정한 친구가 되었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "cpf-v1",
        term: "remedy",
        partOfSpeech: "noun",
        translation: "(민간) 치료약, 요법",
        example: "Mrs. Todd sold herbs and quiet home-made remedies to the villagers.",
        exampleTranslation: "토드 부인은 마을 사람들에게 약초와 조용히 만든 민간 치료약을 팔았어요.",
      },
      {
        id: "cpf-v2",
        term: "pungent",
        partOfSpeech: "adjective",
        translation: "코를 찌르는, 톡 쏘는 (냄새·맛)",
        example: "A strange, pungent plant grew among the sweeter herbs.",
        exampleTranslation:
          "향긋한 약초들 사이에 이상하고 코를 찌르는 냄새가 나는 식물 하나가 자랐어요.",
      },
      {
        id: "cpf-v3",
        term: "widow",
        partOfSpeech: "noun",
        translation: "미망인, 과부",
        example: "Mrs. Todd was an elderly widow who lived alone at the edge of the village.",
        exampleTranslation: "토드 부인은 마을 어귀에 혼자 사는 나이 든 과부였어요.",
      },
      {
        id: "cpf-v4",
        term: "mind",
        partOfSpeech: "verb",
        translation: "(자리를) 봐 주다, 지키다",
        example: "Sometimes Mrs. Todd asked the narrator to mind the shop for an hour.",
        exampleTranslation: "이따금 토드 부인은 화자에게 한 시간쯤 가게를 봐 달라고 부탁했어요.",
      },
      {
        id: "cpf-v5",
        term: "rhythm",
        partOfSpeech: "noun",
        translation: "리듬, 규칙적인 흐름",
        example: "The summer soon settled into a gentle rhythm of work and talk.",
        exampleTranslation: "여름은 곧 일과 대화가 어우러진 잔잔한 리듬으로 자리 잡았어요.",
      },
    ],
    questions: [
      {
        id: "cpf-q1",
        prompt: "What made the narrator decide to return to Dunnet Landing?",
        options: [
          "She had family waiting for her there.",
          "She fell in love with the village at first sight and wanted to come back and write.",
          "She had been offered a teaching job at the schoolhouse.",
          "Mrs. Todd had written and invited her.",
        ],
        correctIndex: 1,
        explanation:
          "Seeing the grey houses and pointed firs from the deck of a steamer one June morning, the writer was so taken with the place that she resolved to return, and two or three summers later she came back to stay.",
      },
      {
        id: "cpf-q2",
        prompt: "How did Mrs. Todd earn her living, and what else did the villagers come to her for?",
        options: [
          "She ran the village school and gave music lessons.",
          "She kept a general store and sold newspapers.",
          "She gathered and sold herbs and remedies, and neighbours also came to her for advice.",
          "She took in sewing and mending for the fishing families.",
        ],
        correctIndex: 2,
        explanation:
          "Mrs. Todd gathered wild herbs and sold them with home-made remedies and spruce beer; all day, neighbours came to her back door for herbs and also for quiet advice about their troubles.",
      },
      {
        id: "cpf-q3",
        prompt: "Why did the narrator rent the empty schoolhouse?",
        options: [
          "To hold classes for the village children.",
          "Because Mrs. Todd's house was too far from the harbour.",
          "She needed a quiet place to do her writing, away from the busy house.",
          "The schoolhouse was cheaper than her room at Mrs. Todd's.",
        ],
        correctIndex: 2,
        explanation:
          "Mrs. Todd's house was full of talk and visitors, so the narrator arranged to use the empty summer schoolhouse on the hill as a quiet daytime workroom; Mrs. Todd, though hurt at first, soon packed her a lunch each morning.",
      },
    ],
  },
  {
    slug: "cranford",
    title: "Cranford",
    titleTranslation: "크랜퍼드",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Elizabeth Gaskell (1810–1865)",
    coverEmoji: "☕",
    coverImage: "/covers/cranford.svg",
    source:
      "Adapted from Chapter 1 of Elizabeth Gaskell's novel \"Cranford\" (first published 1851–53; long in the public domain, Project Gutenberg #394). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how the town of Cranford was run, and what made Captain Brown such a shock when he arrived.",
    paragraphs: [
      [
        {
          id: "crf-1",
          text: "The little country town of Cranford was ruled almost entirely by women.",
          translation: "크랜퍼드라는 작은 시골 마을은 거의 전적으로 여성들이 다스렸어요.",
        },
        {
          id: "crf-2",
          text: "Every house of any size was kept by a lady, for the men had gone away — to the army, to sea, or to business in the big smoky town of Drumble, twenty miles off.",
          translation:
            "웬만한 크기의 집은 모두 어느 부인이 꾸려 나갔는데, 남자들은 다들 떠나 버렸기 때문이에요. 군대로, 바다로, 아니면 20마일 떨어진 크고 매연 자욱한 도시 드럼블의 일터로요.",
        },
        {
          id: "crf-3",
          text: "Whatever the men of Cranford did, they did it somewhere else, and were never seen.",
          translation:
            "크랜퍼드의 남자들은 무슨 일을 하든 다른 어딘가에서 했고, 마을에서는 좀처럼 눈에 띄지 않았어요.",
        },
      ],
      [
        {
          id: "crf-4",
          text: "The ladies managed everything: the gardens, the town news, questions of books and politics, and kindness to the poor.",
          translation:
            "부인들은 모든 것을 도맡았어요. 정원, 마을 소식, 책과 정치에 관한 문제들, 그리고 가난한 이들을 돕는 일까지요.",
        },
        {
          id: "crf-5",
          text: "They were poor themselves, mostly, but they had turned genteel poverty into a kind of fashion, which they called \"elegant economy.\"",
          translation:
            "그들 대부분은 스스로도 가난했지만, 점잖은 가난을 일종의 유행으로 바꿔 놓고는 그것을 \"우아한 절약\"이라고 불렀어요.",
        },
        {
          id: "crf-6",
          text: "At their card parties the only refreshment might be a single plate of thin bread and butter, and no one thought the worse of it.",
          translation:
            "그들의 카드 모임에서 나오는 다과라고는 얇게 썬 버터 바른 빵 한 접시가 전부일 때도 있었지만, 아무도 그것을 흉으로 여기지 않았어요.",
        },
      ],
      [
        {
          id: "crf-7",
          text: "Visits were paid strictly between twelve and three, and no caller ever stayed more than a quarter of an hour.",
          translation:
            "방문은 반드시 열두 시에서 세 시 사이에 이루어졌고, 어떤 손님도 15분 넘게 머무는 법이 없었어요.",
        },
        {
          id: "crf-8",
          text: "It was thought vulgar to speak of one's own money or household troubles.",
          translation:
            "자기 돈이나 집안의 골칫거리를 입에 올리는 것은 천박한 일로 여겨졌어요.",
        },
        {
          id: "crf-9",
          text: "So Cranford went on, quiet, careful, and very sure of its own good manners.",
          translation:
            "그렇게 크랜퍼드는 조용하고 조심스럽게, 자신들의 예의범절에 대한 대단한 자부심 속에 굴러갔어요.",
        },
      ],
      [
        {
          id: "crf-10",
          text: "Then Captain Brown came to town to help build the new railway, and at once he shocked everyone.",
          translation:
            "그러던 어느 날 브라운 대위가 새 철도를 놓는 일을 도우러 마을에 왔고, 그는 대번에 모두를 경악하게 했어요.",
        },
        {
          id: "crf-11",
          text: "He spoke of being poor openly, in a loud, cheerful voice, as though poverty were nothing to be ashamed of.",
          translation:
            "그는 크고 명랑한 목소리로, 마치 가난이 부끄러울 것 하나 없다는 듯이 자기가 가난하다는 이야기를 거리낌 없이 했어요.",
        },
        {
          id: "crf-12",
          text: "The ladies were offended — but he was so kind, so sensible, and so quick to help that they could not bring themselves to shut their doors on him.",
          translation:
            "부인들은 기분이 상했어요. 하지만 그가 어찌나 친절하고 사리에 밝으며 남을 돕는 데 빠른지, 그의 앞에서 문을 닫아걸 수는 도저히 없었어요.",
        },
      ],
      [
        {
          id: "crf-13",
          text: "He carried an old woman's coal-scuttle up the street and gave up his seat in the coach without being asked.",
          translation:
            "그는 한 노파의 석탄 통을 들고 길을 올라가 주었고, 부탁을 받지도 않았는데 마차에서 자기 자리를 양보했어요.",
        },
        {
          id: "crf-14",
          text: "He had two daughters: Miss Brown, older, plain, and often ill, and Miss Jessie, younger, pretty, and with dimples she was really too old to have.",
          translation:
            "그에게는 딸이 둘 있었어요. 언니인 브라운 양은 나이가 많고 수수하며 자주 아팠고, 동생인 제시 양은 더 어리고 예뻤으며, 사실 그 나이에 갖고 있기엔 어울리지 않는 보조개가 있었어요.",
        },
        {
          id: "crf-15",
          text: "Little by little, Cranford took the Browns in, though it never quite forgave the Captain for being honest about his purse.",
          translation:
            "조금씩 크랜퍼드는 브라운 가족을 받아들였지만, 대위가 자기 주머니 사정에 대해 솔직했던 것만큼은 끝내 완전히 용서하지 않았어요.",
        },
      ],
      [
        {
          id: "crf-16",
          text: "The one battle that never ended was between Captain Brown and Miss Jenkyns, the rector's daughter, over books.",
          translation:
            "끝날 줄 모르는 단 하나의 다툼은, 브라운 대위와 교구 목사의 딸 젠킨스 양 사이에 벌어진 책을 둘러싼 논쟁이었어요.",
        },
        {
          id: "crf-17",
          text: "He loved the funny new stories of Mr. Dickens; she held that no one had ever written English as finely as Dr. Johnson, and neither would give an inch.",
          translation:
            "그는 디킨스 씨의 우스운 새 이야기들을 좋아했고, 그녀는 존슨 박사만큼 영어를 훌륭하게 쓴 사람은 없다고 주장했으며, 둘 다 한 치도 물러서지 않았어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "crf-v1",
        term: "genteel",
        partOfSpeech: "adjective",
        translation: "(특히 가난하면서도) 점잖은 체하는, 체면을 차리는",
        example: "The ladies of Cranford made their genteel poverty into a kind of fashion.",
        exampleTranslation: "크랜퍼드의 부인들은 자신들의 점잖은 가난을 일종의 유행으로 만들었어요.",
      },
      {
        id: "crf-v2",
        term: "refreshment",
        partOfSpeech: "noun",
        translation: "다과, 가벼운 음식이나 음료",
        example: "The only refreshment at the party was a plate of thin bread and butter.",
        exampleTranslation: "파티에서 나온 다과라고는 얇게 썬 버터 바른 빵 한 접시가 전부였어요.",
      },
      {
        id: "crf-v3",
        term: "vulgar",
        partOfSpeech: "adjective",
        translation: "천박한, 상스러운, 품위 없는",
        example: "In Cranford it was thought vulgar to talk about money.",
        exampleTranslation: "크랜퍼드에서는 돈 이야기를 하는 것이 천박하다고 여겨졌어요.",
      },
      {
        id: "crf-v4",
        term: "offended",
        partOfSpeech: "adjective",
        translation: "기분이 상한, 불쾌해진",
        example: "The ladies were offended when the Captain spoke so freely of being poor.",
        exampleTranslation: "대위가 가난하다는 이야기를 그토록 거리낌 없이 하자 부인들은 기분이 상했어요.",
      },
      {
        id: "crf-v5",
        term: "dimple",
        partOfSpeech: "noun",
        translation: "보조개",
        example: "Miss Jessie had dimples that the town felt she was too old to keep.",
        exampleTranslation:
          "제시 양에게는 보조개가 있었는데, 마을 사람들은 그녀가 그것을 지니기엔 너무 나이가 많다고 여겼어요.",
      },
    ],
    questions: [
      {
        id: "crf-q1",
        prompt: "Why were there so few men in Cranford?",
        options: [
          "A sickness had driven the men away years before.",
          "The men had left for the army, the sea, or business in a larger town.",
          "The town had a law against men owning houses.",
          "The men preferred to live on the nearby farms.",
        ],
        correctIndex: 1,
        explanation:
          "Whatever a Cranford man did — soldiering, sailing, or business in smoky Drumble twenty miles off — he did it elsewhere, so the town's houses were kept and its affairs run almost entirely by women.",
      },
      {
        id: "crf-q2",
        prompt: "What was \"elegant economy\"?",
        options: [
          "A shop in Cranford that sold cheap goods.",
          "A rule that no lady could spend money without permission.",
          "The Cranford habit of being poor while keeping up genteel appearances, and being proud of it.",
          "A charity the ladies ran for the poor of the town.",
        ],
        correctIndex: 2,
        explanation:
          "Most of the ladies were poor, but they had turned genteel poverty into a fashion they called \"elegant economy\" — spending almost nothing, serving the barest refreshments, and thinking none the worse of it.",
      },
      {
        id: "crf-q3",
        prompt: "Why did Captain Brown shock the ladies of Cranford?",
        options: [
          "He refused to visit any of them.",
          "He talked openly and cheerfully about being poor.",
          "He tried to build the railway through the church.",
          "He brought his invalid daughter to every party.",
        ],
        correctIndex: 1,
        explanation:
          "Cranford thought it vulgar to mention money, but Captain Brown spoke of his poverty out loud, in a cheerful military voice, as if it were nothing to be ashamed of — though his kindness soon won the ladies over anyway.",
      },
    ],
  },
  {
    slug: "a-little-princess",
    title: "A Little Princess",
    titleTranslation: "소공녀",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Frances Hodgson Burnett (1849–1924)",
    coverEmoji: "🌫️",
    coverImage: "/covers/a-little-princess.svg",
    source:
      "Adapted from Chapter 1 of Frances Hodgson Burnett's novel \"A Little Princess\" (first published 1905, Project Gutenberg #146), long in the public domain. This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why Sara was left at Miss Minchin's school, and why the school treated her so well at first.",
    paragraphs: [
      [
        {
          id: "alp-1",
          text: "On a dark winter day, in a thick yellow London fog, a cab moved slowly through the streets.",
          translation:
            "어느 어두운 겨울날, 짙은 노란 런던 안개 속을 삯마차 한 대가 거리를 천천히 지나가고 있었어요.",
        },
        {
          id: "alp-2",
          text: "Inside sat a little girl of seven called Sara Crewe, holding tightly to her father's hand.",
          translation:
            "안에는 세라 크루라는 일곱 살 여자아이가 아버지의 손을 꼭 붙잡고 앉아 있었어요.",
        },
        {
          id: "alp-3",
          text: "Sara had a small, plain face and big, thoughtful grey-green eyes, and she looked much older than seven.",
          translation:
            "세라는 작고 수수한 얼굴에 크고 생각이 깊은 회록색 눈을 하고 있었으며, 일곱 살보다 훨씬 나이 들어 보였어요.",
        },
      ],
      [
        {
          id: "alp-4",
          text: "Sara and Captain Crewe had come all the way from India, where Sara was born and where they had always lived together.",
          translation:
            "세라와 크루 대위는 인도에서 먼 길을 왔는데, 세라가 태어난 곳이자 두 사람이 늘 함께 살아온 곳이 바로 그곳이었어요.",
        },
        {
          id: "alp-5",
          text: "Her mother had died long ago, and Sara loved her kind, cheerful father more than anyone in the world.",
          translation:
            "어머니는 오래전에 세상을 떠났고, 세라는 다정하고 명랑한 아버지를 세상 누구보다 사랑했어요.",
        },
        {
          id: "alp-6",
          text: "Now she was old enough for school, so he had brought her to England to leave her there — and neither of them wanted to say it aloud.",
          translation:
            "이제 세라가 학교에 갈 나이가 되어서, 아버지는 그녀를 두고 가려고 영국으로 데려왔어요. 그리고 두 사람 다 그 말을 소리 내어 하고 싶지 않았어요.",
        },
      ],
      [
        {
          id: "alp-7",
          text: "The cab stopped at a large, dull brick house with a shining brass plate: \"Miss Minchin's School for Young Ladies.\"",
          translation:
            "삯마차는 반짝이는 놋쇠 문패가 붙은 크고 칙칙한 벽돌집 앞에 멈췄어요. 문패에는 \"민친 선생의 숙녀 학교\"라고 적혀 있었지요.",
        },
        {
          id: "alp-8",
          text: "Inside, the front room was cold and stiff, with hard chairs and an unfriendly feeling.",
          translation:
            "안으로 들어가니 응접실은 차갑고 딱딱했고, 의자도 뻣뻣했으며, 어딘가 서먹한 느낌이 감돌았어요.",
        },
        {
          id: "alp-9",
          text: "Miss Minchin came in — a tall woman with large, cold, fish-like eyes and a large, cold smile.",
          translation:
            "민친 선생이 들어왔어요. 크고 차갑고 물고기 같은 눈에, 크고 차가운 미소를 지닌 키 큰 여자였어요.",
        },
      ],
      [
        {
          id: "alp-10",
          text: "She was very sweet to Captain Crewe, because he was rich, and a rich pupil was worth a great deal to her.",
          translation:
            "그녀는 크루 대위에게 아주 상냥했는데, 그가 부유했기 때문이에요. 부유한 학생 하나는 그녀에게 대단한 값어치가 있었거든요.",
        },
        {
          id: "alp-11",
          text: "\"What a beautiful, clever little girl,\" she said, though Sara knew quite well that she was not beautiful.",
          translation:
            "\"참으로 아름답고 영리한 아이로군요.\" 그녀가 말했지만, 세라는 자기가 아름답지 않다는 것을 아주 잘 알고 있었어요.",
        },
        {
          id: "alp-12",
          text: "Because her father had money, Sara was to have her own bedroom and sitting-room, a pony, a carriage, and a maid of her own.",
          translation:
            "아버지에게 돈이 있었기에, 세라는 자기만의 침실과 거실, 조랑말 한 마리, 마차 한 대, 그리고 전담 하녀 한 명을 두게 되었어요.",
        },
      ],
      [
        {
          id: "alp-13",
          text: "Miss Minchin promised to be like a mother to Sara while her father was far away.",
          translation:
            "민친 선생은 아버지가 멀리 가 있는 동안 세라에게 어머니처럼 대하겠다고 약속했어요.",
        },
        {
          id: "alp-14",
          text: "Captain Crewe could not bear a long goodbye, so he held Sara very tight, told her to be brave, and hurried out to the cab.",
          translation:
            "크루 대위는 긴 작별을 견딜 수가 없어서, 세라를 아주 꼭 껴안고 씩씩하게 지내라고 이른 뒤 서둘러 삯마차로 나갔어요.",
        },
        {
          id: "alp-15",
          text: "Sara stood at the window and watched the cab until it turned the corner and was gone.",
          translation:
            "세라는 창가에 서서 삯마차가 모퉁이를 돌아 사라질 때까지 그것을 지켜보았어요.",
        },
      ],
      [
        {
          id: "alp-16",
          text: "Then she went up to her fine new room, sat down on the floor, and stayed there very still, staring at nothing.",
          translation:
            "그러고 나서 세라는 근사한 새 방으로 올라가, 바닥에 앉아 아무것도 보지 않은 채 아주 가만히 있었어요.",
        },
        {
          id: "alp-17",
          text: "She did not cry, but she felt colder and more alone than she had ever felt in her life.",
          translation:
            "세라는 울지 않았지만, 살면서 느껴 본 적 없을 만큼 더 춥고 더 외로웠어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "alp-v1",
        term: "fog",
        partOfSpeech: "noun",
        translation: "안개",
        example: "The London streets were hidden in a thick yellow fog.",
        exampleTranslation: "런던 거리는 짙은 노란 안개에 파묻혀 있었어요.",
      },
      {
        id: "alp-v2",
        term: "cab",
        partOfSpeech: "noun",
        translation: "(예전의 말이 끄는) 삯마차; (택시 같은) 영업용 차",
        example: "Sara and her father rode slowly through the city in a cab.",
        exampleTranslation: "세라와 아버지는 삯마차를 타고 도시를 천천히 지나갔어요.",
      },
      {
        id: "alp-v3",
        term: "plain",
        partOfSpeech: "adjective",
        translation: "수수한, 예쁘지도 못생기지도 않은",
        example: "Sara had a small, plain face and quiet, thoughtful eyes.",
        exampleTranslation: "세라는 작고 수수한 얼굴에, 조용하고 생각이 깊은 눈을 하고 있었어요.",
      },
      {
        id: "alp-v4",
        term: "pupil",
        partOfSpeech: "noun",
        translation: "학생, (한 선생님에게 배우는) 제자",
        example: "A rich pupil like Sara was worth a great deal to Miss Minchin.",
        exampleTranslation: "세라처럼 부유한 학생은 민친 선생에게 큰 가치가 있었어요.",
      },
      {
        id: "alp-v5",
        term: "maid",
        partOfSpeech: "noun",
        translation: "하녀, 가정부",
        example: "Because her father was rich, Sara was given a maid of her own.",
        exampleTranslation: "아버지가 부유했기 때문에, 세라에게는 전담 하녀가 한 명 주어졌어요.",
      },
    ],
    questions: [
      {
        id: "alp-q1",
        prompt: "Why had Captain Crewe brought Sara to England?",
        options: [
          "To live with her grandmother.",
          "To leave her at Miss Minchin's school while he returned to India.",
          "To find a doctor for her mother.",
          "To buy her a pony and a carriage.",
        ],
        correctIndex: 1,
        explanation:
          "Sara and her father had always lived together in India, but she was now old enough for school, so he had brought her to England to leave her at Miss Minchin's — a parting neither of them wanted.",
      },
      {
        id: "alp-q2",
        prompt: "Why was Miss Minchin especially sweet to Captain Crewe?",
        options: [
          "He was an old friend of hers.",
          "She hoped he would marry her.",
          "He was rich, and a rich pupil meant a great deal of money to her.",
          "He had promised to teach at the school.",
        ],
        correctIndex: 2,
        explanation:
          "Miss Minchin had large cold fish-like eyes and a cold smile, but she was very sweet to Captain Crewe because he was wealthy, and she arranged for Sara to have her own rooms, a pony, a carriage and a maid.",
      },
      {
        id: "alp-q3",
        prompt: "How did Sara feel after her father left?",
        options: [
          "Excited about her new room and pony.",
          "Angry with Miss Minchin.",
          "Colder and more alone than she had ever felt, though she did not cry.",
          "Sleepy after the long journey.",
        ],
        correctIndex: 2,
        explanation:
          "Sara watched the cab until it was out of sight, then sat down on the floor of her fine new room and stayed very still — not crying, but feeling colder and lonelier than ever before.",
      },
    ],
  },
  {
    slug: "north-and-south",
    title: "North and South",
    titleTranslation: "북과 남",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Elizabeth Gaskell (1810–1865)",
    coverEmoji: "🧣",
    coverImage: "/covers/north-and-south.svg",
    source:
      "Adapted from Chapter 1 of Elizabeth Gaskell's novel \"North and South\" (first published 1854–55; long in the public domain, Project Gutenberg #4276). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Margaret's situation at the start of the novel, and how she felt about leaving London for Helstone.",
    paragraphs: [
      [
        {
          id: "nas-1",
          text: "For most of the last ten years, Margaret Hale had lived in London with her aunt, Mrs. Shaw, and her cousin Edith.",
          translation:
            "지난 10년의 대부분을, 마거릿 헤일은 런던에서 이모인 쇼 부인, 그리고 사촌 이디스와 함께 살았어요.",
        },
        {
          id: "nas-2",
          text: "Now the house was in a happy uproar, for Edith was to be married the next morning to Captain Lennox.",
          translation:
            "이제 집 안은 즐거운 야단법석이었는데, 이디스가 이튿날 아침 레녹스 대위와 결혼하기로 되어 있었기 때문이에요.",
        },
        {
          id: "nas-3",
          text: "There were flowers everywhere, and boxes of new clothes, and callers all day long.",
          translation:
            "사방에 꽃이 놓여 있었고, 새 옷이 담긴 상자들이 있었으며, 온종일 방문객이 드나들었어요.",
        },
      ],
      [
        {
          id: "nas-4",
          text: "Margaret had shared Edith's lessons and her London seasons, but every summer she had gone back to Helstone, her father's country parsonage.",
          translation:
            "마거릿은 이디스와 함께 수업을 받고 런던의 사교 철도 함께 보냈지만, 여름마다 아버지의 시골 목사관이 있는 헬스톤으로 돌아갔어요.",
        },
        {
          id: "nas-5",
          text: "Helstone was a small village on the edge of a great forest in the south of England, and Margaret loved it more than any place on earth.",
          translation:
            "헬스톤은 잉글랜드 남부의 드넓은 숲 가장자리에 자리한 작은 마을이었고, 마거릿은 그곳을 세상 어느 곳보다 사랑했어요.",
        },
        {
          id: "nas-6",
          text: "When the wedding was over she would go home to Helstone for good, and the thought filled her with a quiet happiness.",
          translation:
            "결혼식이 끝나면 그녀는 헬스톤으로 아주 돌아갈 참이었고, 그 생각만으로도 잔잔한 행복이 차올랐어요.",
        },
      ],
      [
        {
          id: "nas-7",
          text: "That evening, after a dinner party, the ladies sat in the drawing-room while the gentlemen stayed downstairs over their wine.",
          translation:
            "그날 저녁, 만찬이 끝난 뒤 신사들은 아래층에서 포도주를 마시며 남았고, 부인들은 응접실에 앉아 있었어요.",
        },
        {
          id: "nas-8",
          text: "Edith had fallen asleep on the sofa in her white dress, looking like a picture.",
          translation:
            "이디스는 흰 드레스 차림으로 소파에서 잠이 들어 있었는데, 마치 그림 같았어요.",
        },
        {
          id: "nas-9",
          text: "Mrs. Shaw, a comfortable, fretful widow, worried aloud about Edith going so far away, to the regiment's post on the island of Corfu.",
          translation:
            "여유롭게 살면서도 늘 안달하는 미망인인 쇼 부인은, 이디스가 연대가 주둔한 코르푸섬까지 그렇게 멀리 간다며 소리 내어 걱정했어요.",
        },
      ],
      [
        {
          id: "nas-10",
          text: "Mrs. Shaw had married a much older man for his money and had been perfectly comfortable ever since.",
          translation:
            "쇼 부인은 재산을 보고 훨씬 나이 많은 남자와 결혼했고, 그 뒤로 줄곧 아무 부족함 없이 지냈어요.",
        },
        {
          id: "nas-11",
          text: "Yet now she liked to speak of Edith's marriage as a pure love-match, and to sigh over how romantic it all was.",
          translation:
            "그런데도 이제 와서는 이디스의 결혼을 순전한 연애결혼이라고 말하기를 좋아했고, 그 모든 것이 얼마나 낭만적인지 한숨을 쉬며 이야기했어요.",
        },
        {
          id: "nas-12",
          text: "Margaret listened politely, and said little.",
          translation: "마거릿은 예의 바르게 듣기만 하고, 말은 거의 하지 않았어요.",
        },
      ],
      [
        {
          id: "nas-13",
          text: "Mr. Henry Lennox, the bridegroom's clever lawyer brother, came up from the dining-room and sat down beside Margaret.",
          translation:
            "신랑의 형제이자 영리한 변호사인 헨리 레녹스 씨가 식당에서 올라와 마거릿 옆에 앉았어요.",
        },
        {
          id: "nas-14",
          text: "He asked her to describe Helstone, and she said it was \"like a village in a poem — in one of Tennyson's poems.\"",
          translation:
            "그가 헬스톤이 어떤 곳이냐고 묻자, 그녀는 \"시 속의 마을 같아요. 테니슨의 시 어딘가에 나오는.\"이라고 답했어요.",
        },
        {
          id: "nas-15",
          text: "She told him of the old grey church, the cottages half hidden in roses, and the great trees of the forest, and he half teased and half envied her for loving it so.",
          translation:
            "그녀는 오래된 잿빛 교회와, 장미에 반쯤 파묻힌 오두막들, 그리고 숲의 큰 나무들에 대해 이야기했고, 그는 그녀가 그곳을 그토록 사랑하는 것을 반쯤은 놀리고 반쯤은 부러워했어요.",
        },
      ],
      [
        {
          id: "nas-16",
          text: "Before bed, Mrs. Shaw made Margaret stand still and model the soft Indian shawls that were part of Edith's wedding gifts, heavy and warm and smelling of sandalwood.",
          translation:
            "잠자리에 들기 전, 쇼 부인은 마거릿을 가만히 세워 두고 이디스의 결혼 선물 중 하나인 부드러운 인도 숄들을 걸쳐 보게 했는데, 그 숄들은 묵직하고 따뜻했으며 백단향 냄새가 났어요.",
        },
        {
          id: "nas-17",
          text: "Margaret stood patient among the silks, thinking all the while of the forest paths at Helstone, and of going home.",
          translation:
            "마거릿은 비단들 사이에서 참을성 있게 서서, 내내 헬스톤의 숲길과 집으로 돌아갈 일을 생각했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "nas-v1",
        term: "uproar",
        partOfSpeech: "noun",
        translation: "야단법석, 큰 소동",
        example: "The house was in a happy uproar the day before the wedding.",
        exampleTranslation: "결혼식 전날, 집 안은 즐거운 야단법석이었어요.",
      },
      {
        id: "nas-v2",
        term: "caller",
        partOfSpeech: "noun",
        translation: "(집을) 방문하는 사람, 방문객",
        example: "Callers came all day to wish Edith well.",
        exampleTranslation: "이디스를 축하하려는 방문객들이 온종일 찾아왔어요.",
      },
      {
        id: "nas-v3",
        term: "fretful",
        partOfSpeech: "adjective",
        translation: "안달하는, 늘 불안해하고 걱정하는",
        example: "Mrs. Shaw was a comfortable but fretful widow.",
        exampleTranslation: "쇼 부인은 여유롭게 살면서도 늘 안달하는 미망인이었어요.",
      },
      {
        id: "nas-v4",
        term: "regiment",
        partOfSpeech: "noun",
        translation: "연대 (군대의 편성 단위)",
        example: "Captain Lennox's regiment was posted to the island of Corfu.",
        exampleTranslation: "레녹스 대위의 연대는 코르푸섬으로 파견되었어요.",
      },
      {
        id: "nas-v5",
        term: "envy",
        partOfSpeech: "verb",
        translation: "부러워하다",
        example: "Henry Lennox half envied Margaret for loving her home so much.",
        exampleTranslation: "헨리 레녹스는 마거릿이 자기 고향을 그토록 사랑하는 것을 반쯤은 부러워했어요.",
      },
    ],
    questions: [
      {
        id: "nas-q1",
        prompt: "Where had Margaret spent most of the last ten years, and where did her heart truly belong?",
        options: [
          "In Helstone all year, dreaming of London.",
          "In London with the Shaws, but her heart was at Helstone, her father's country village.",
          "Travelling abroad with Captain Lennox's regiment.",
          "At school in the New Forest, longing for her cousin Edith.",
        ],
        correctIndex: 1,
        explanation:
          "Margaret had lived in London with her aunt and cousin, sharing Edith's lessons and seasons, but every summer she returned to Helstone, the country parsonage she loved above any place on earth — and after the wedding she would go home there for good.",
      },
      {
        id: "nas-q2",
        prompt: "How is Mrs. Shaw described?",
        options: [
          "A poor relation who depended on the Hales.",
          "A stern woman who disapproved of Edith's marriage.",
          "A comfortable, fretful widow who had married for money but liked to talk of love-matches.",
          "A famous London hostess admired for her wit.",
        ],
        correctIndex: 2,
        explanation:
          "Mrs. Shaw was a well-off, easily worried widow; she had married a much older man for his money, yet now liked to speak of Edith's marriage as a romantic love-match and to sigh over it.",
      },
      {
        id: "nas-q3",
        prompt: "How did Margaret describe Helstone to Henry Lennox?",
        options: [
          "As a dull, muddy place she was glad to leave.",
          "As a busy market town near the sea.",
          "As \"like a village in a poem,\" with an old church, rose-covered cottages, and great forest trees.",
          "As too far from London for anyone to visit.",
        ],
        correctIndex: 2,
        explanation:
          "Margaret told Henry Lennox that Helstone was \"like a village in a poem — in one of Tennyson's poems,\" and spoke of its grey church, its cottages half hidden in roses, and the great trees of the forest.",
      },
    ],
  },
  {
    slug: "silas-marner",
    title: "Silas Marner",
    titleTranslation: "사일러스 마너",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "George Eliot (1819–1880)",
    coverEmoji: "🔥",
    coverImage: "/covers/silas-marner.svg",
    source:
      "Adapted from Chapter 12 of George Eliot's novel \"Silas Marner\" (first published 1861; long in the public domain, Project Gutenberg #550). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain how a small child came to be at Silas Marner's fireside, and what he mistook her for at first.",
    paragraphs: [
      [
        {
          id: "sil-1",
          text: "Silas Marner was a weaver who lived alone at the edge of the village of Raveloe, and for fifteen years his only friend had been his little pile of gold.",
          translation:
            "사일러스 마너는 레이블로 마을 어귀에 홀로 사는 베 짜는 사람이었고, 15년 동안 그의 유일한 벗은 조그맣게 쌓아 둔 금이었어요.",
        },
        {
          id: "sil-2",
          text: "Then, one dark night, a thief had crept in and carried the gold away.",
          translation:
            "그러던 어느 캄캄한 밤, 도둑 하나가 몰래 들어와 그 금을 가지고 사라졌어요.",
        },
        {
          id: "sil-3",
          text: "Since the robbery, Silas often left his cottage door open in the evening, staring out at the road, as if the money might somehow come back to him.",
          translation:
            "도둑을 맞은 뒤로 사일러스는 저녁이면 오두막 문을 열어 둔 채 길을 내다보곤 했는데, 마치 그 돈이 어떻게든 자기에게 돌아오기라도 할 것처럼요.",
        },
      ],
      [
        {
          id: "sil-4",
          text: "It was New Year's Eve, and snow was falling softly over the fields.",
          translation:
            "섣달그믐 밤이었고, 눈이 들판 위로 소리 없이 내리고 있었어요.",
        },
        {
          id: "sil-5",
          text: "Silas sometimes fell into a strange, still trance in which he stood without moving and saw nothing around him.",
          translation:
            "사일러스는 이따금 이상하고 고요한 무아지경에 빠졌는데, 그럴 때면 꼼짝도 않고 서서 주위의 아무것도 보지 못했어요.",
        },
        {
          id: "sil-6",
          text: "As he stood in the open doorway that night, one of these spells came over him, and he did not notice a small figure coming through the snow.",
          translation:
            "그날 밤 열린 문간에 서 있을 때 그런 발작이 다시 찾아왔고, 그는 눈 속을 헤치고 다가오는 작은 형체를 알아채지 못했어요.",
        },
      ],
      [
        {
          id: "sil-7",
          text: "A little girl, no more than two years old, had wandered away from something lying still in the snow by the road.",
          translation:
            "두 살이 채 안 된 어린 여자아이가, 길가 눈밭에 꼼짝 않고 누워 있는 무언가로부터 떨어져 나와 걸어온 것이었어요.",
        },
        {
          id: "sil-8",
          text: "She saw the bright firelight through Silas's open door, crawled toward the warmth, and sat down on the hearth.",
          translation:
            "아이는 사일러스의 열린 문 사이로 환한 불빛을 보고, 그 온기를 향해 기어가 난롯가 바닥에 앉았어요.",
        },
        {
          id: "sil-9",
          text: "There, close to the fire, she fell fast asleep.",
          translation: "그렇게 불 가까이에서 아이는 깊이 잠이 들었어요.",
        },
      ],
      [
        {
          id: "sil-10",
          text: "When the trance passed, Silas shut the door and turned back toward the fire — and saw something gold shining on the hearth.",
          translation:
            "무아지경이 걷히자 사일러스는 문을 닫고 다시 불 쪽으로 돌아섰고, 난롯가에서 금빛으로 반짝이는 무언가를 보았어요.",
        },
        {
          id: "sil-11",
          text: "His heart leaped: he thought his lost money had been brought back to him.",
          translation:
            "그의 가슴이 뛰었어요. 잃어버린 돈이 자기에게 되돌아온 줄로만 알았지요.",
        },
        {
          id: "sil-12",
          text: "But when he bent down and put out his hand, his fingers touched not hard coins but soft, warm golden curls.",
          translation:
            "그런데 몸을 숙여 손을 내밀자, 그의 손끝에 닿은 것은 딱딱한 동전이 아니라 부드럽고 따뜻한 금빛 곱슬머리였어요.",
        },
      ],
      [
        {
          id: "sil-13",
          text: "The child woke, looked up at the strange man, and cried out for her mother.",
          translation:
            "아이가 잠에서 깨어 낯선 남자를 올려다보더니, 엄마를 부르며 울음을 터뜨렸어요.",
        },
        {
          id: "sil-14",
          text: "Something in Silas stirred — a memory of a baby sister he had carried in his arms long ago, in the town he had left.",
          translation:
            "사일러스의 마음속에서 무언가가 일었어요. 오래전, 그가 떠나온 고향 마을에서 품에 안고 다니던 어린 여동생의 기억이었지요.",
        },
        {
          id: "sil-15",
          text: "He warmed some porridge and fed her, took off her wet little boots, and held her until she was quiet again.",
          translation:
            "그는 죽을 데워 아이에게 먹이고, 젖은 작은 신발을 벗겨 주었으며, 아이가 다시 잠잠해질 때까지 안고 있었어요.",
        },
      ],
      [
        {
          id: "sil-16",
          text: "Following her small wet footprints back out into the night, Silas found a young woman lying dead in the snow, and understood that the child was now alone in the world.",
          translation:
            "아이의 작고 젖은 발자국을 따라 다시 밤 속으로 나간 사일러스는, 한 젊은 여인이 눈 속에 죽어 누워 있는 것을 발견했고, 이제 그 아이가 세상에 홀로 남았다는 것을 알았어요.",
        },
        {
          id: "sil-17",
          text: "He carried her to the great house to fetch help — and where his gold had shut him away from everyone, this child would slowly open his heart again.",
          translation:
            "그는 도움을 청하러 아이를 안고 큰 저택으로 갔어요. 그리고 금이 그를 모든 사람으로부터 닫아걸었던 자리에서, 이 아이가 그의 마음을 다시 천천히 열어 가게 되지요.",
        },
      ],
    ],
    vocab: [
      {
        id: "sil-v1",
        term: "thief",
        partOfSpeech: "noun",
        translation: "도둑",
        example: "A thief crept into the cottage and stole all of Silas's gold.",
        exampleTranslation: "도둑 하나가 오두막에 몰래 들어와 사일러스의 금을 몽땅 훔쳤어요.",
      },
      {
        id: "sil-v2",
        term: "trance",
        partOfSpeech: "noun",
        translation: "무아지경, (의식이 흐려지는) 최면 상태",
        example: "Silas would sometimes stand quite still, lost in a strange trance.",
        exampleTranslation: "사일러스는 이따금 이상한 무아지경에 빠져 꼼짝 않고 서 있곤 했어요.",
      },
      {
        id: "sil-v3",
        term: "hearth",
        partOfSpeech: "noun",
        translation: "벽난로 앞바닥, 난롯가",
        example: "The child sat down on the warm hearth in front of the fire.",
        exampleTranslation: "아이는 불 앞의 따뜻한 난롯가 바닥에 앉았어요.",
      },
      {
        id: "sil-v4",
        term: "curl",
        partOfSpeech: "noun",
        translation: "곱슬머리 한 가닥, 고수머리",
        example: "His fingers touched soft golden curls instead of coins.",
        exampleTranslation: "그의 손끝에는 동전 대신 부드러운 금빛 곱슬머리가 닿았어요.",
      },
      {
        id: "sil-v5",
        term: "stir",
        partOfSpeech: "verb",
        translation: "(감정·기억 등이) 일다, 꿈틀하다",
        example: "An old memory stirred in Silas as he held the little girl.",
        exampleTranslation: "어린 소녀를 안고 있자 사일러스의 마음속에서 오래된 기억이 일었어요.",
      },
    ],
    questions: [
      {
        id: "sil-q1",
        prompt: "Why did Silas Marner leave his cottage door open in the evenings?",
        options: [
          "He was expecting a visitor from the village.",
          "He hoped, without much sense, that his stolen gold might somehow return.",
          "The cottage was too warm with the door shut.",
          "He wanted the villagers to see that he had nothing left to steal.",
        ],
        correctIndex: 1,
        explanation:
          "Since a thief had carried off the gold that had been his only companion for fifteen years, Silas would sit with the door open, gazing at the road, as though the money might somehow come back to him.",
      },
      {
        id: "sil-q2",
        prompt: "What did Silas find on his hearth when his trance passed?",
        options: [
          "The thief who had robbed him, warming himself.",
          "His bag of gold coins, returned at last.",
          "A sleeping child, whose golden curls he at first mistook for his gold.",
          "A letter from the village doctor.",
        ],
        correctIndex: 2,
        explanation:
          "Turning back from the door, Silas saw something gold shining on the hearth and thought his money had come back; but when he reached out, his fingers found soft warm curls — a little girl asleep by the fire.",
      },
      {
        id: "sil-q3",
        prompt: "What did Silas discover when he followed the child's footprints outside?",
        options: [
          "The child's father, searching for her.",
          "A young woman lying dead in the snow — the child's mother.",
          "His stolen gold, dropped in the road.",
          "Nothing; the snow had covered every track.",
        ],
        correctIndex: 1,
        explanation:
          "Following the child's small wet footprints back into the night, Silas found a young woman lying dead in the snow, and realised the child was now alone in the world; he carried her to the great house for help.",
      },
    ],
  },
  {
    slug: "the-blue-castle",
    title: "The Blue Castle",
    titleTranslation: "푸른 성",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "L. M. Montgomery (1874–1942)",
    coverEmoji: "🏰",
    coverImage: "/covers/the-blue-castle.svg",
    source:
      "Adapted from Chapter 1 of L. M. Montgomery's novel \"The Blue Castle\" (first published 1926; in the public domain, Project Gutenberg #67979). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Valancy's life on the morning of her twenty-ninth birthday and the three secrets she was keeping from her family.",
    paragraphs: [
      [
        {
          id: "blu-1",
          text: "Valancy Stirling woke on the morning of her twenty-ninth birthday, and for one moment, before she was fully awake, she felt almost happy.",
          translation:
            "밸런시 스털링은 스물아홉 번째 생일 아침에 잠에서 깼고, 완전히 깨어나기 전 아주 잠깐은 거의 행복하다고 느꼈어요.",
        },
        {
          id: "blu-2",
          text: "Then she heard the rain against the window, and the grey light in the room told her that it was going to be another joyless day.",
          translation:
            "그러다 창문에 부딪치는 빗소리가 들렸고, 방 안의 잿빛 빛은 오늘도 또 하루 기쁨 없는 날이 되리라는 것을 알려 주었어요.",
        },
        {
          id: "blu-3",
          text: "She lay still in her hard, narrow bed and thought about her life, which seemed to her as dull and colourless as the sky outside.",
          translation:
            "그녀는 딱딱하고 좁은 침대에 가만히 누워 자기 삶을 생각했는데, 그 삶은 바깥 하늘만큼이나 따분하고 빛깔 없어 보였어요.",
        },
      ],
      [
        {
          id: "blu-4",
          text: "She lived in a small, ugly house on Elm Street with her mother and an older cousin named Stickles, and neither of them had ever spoken to her with real warmth.",
          translation:
            "그녀는 엘름가(街)의 작고 볼품없는 집에서 어머니, 그리고 스티클스라는 나이 많은 사촌과 함께 살았는데, 두 사람 다 그녀에게 진심 어린 다정함을 보인 적이 없었어요.",
        },
        {
          id: "blu-5",
          text: "Her family was a large, proud clan of aunts, uncles, and cousins, and to them a woman still unmarried at twenty-nine was a quiet embarrassment.",
          translation:
            "그녀의 집안은 이모와 삼촌과 사촌들이 잔뜩 있는 크고 자존심 센 일가였고, 그들에게 스물아홉이 되도록 결혼하지 않은 여자는 조용한 골칫거리였어요.",
        },
        {
          id: "blu-6",
          text: "They said so at dinner, in front of everyone, in kind and smiling voices, and Valancy had long ago learned to say nothing.",
          translation:
            "그들은 저녁 식탁에서, 모두가 보는 앞에서, 다정하고 웃는 목소리로 그런 말을 했고, 밸런시는 오래전부터 아무 말도 하지 않는 법을 익혀 두었어요.",
        },
      ],
      [
        {
          id: "blu-7",
          text: "She had never been in love, and no young man had ever waited for her at the gate.",
          translation:
            "그녀는 한 번도 사랑에 빠져 본 적이 없었고, 어떤 젊은 남자도 대문 앞에서 그녀를 기다린 적이 없었어요.",
        },
        {
          id: "blu-8",
          text: "In twenty-nine years she had never once done a thing simply because she wanted to.",
          translation:
            "스물아홉 해를 사는 동안 그녀는 단지 하고 싶다는 이유만으로 무언가를 해 본 적이 한 번도 없었어요.",
        },
        {
          id: "blu-9",
          text: "But Valancy had two secret comforts that her family knew nothing about.",
          translation: "하지만 밸런시에게는 가족이 전혀 모르는 두 가지 은밀한 위안이 있었어요.",
        },
      ],
      [
        {
          id: "blu-10",
          text: "The first was her Blue Castle: an imaginary castle in Spain that she had built in her mind as a child and had lived in, in her daydreams, ever since.",
          translation:
            "첫 번째는 그녀의 '푸른 성'이었는데, 어릴 적 마음속에 지어 놓고 그 뒤로 줄곧 공상 속에서 살아온 스페인의 상상의 성이었어요.",
        },
        {
          id: "blu-11",
          text: "In the Blue Castle she was beautiful and brave and loved, and nothing there ever frightened her.",
          translation:
            "푸른 성에서 그녀는 아름답고 용감하고 사랑받았으며, 그곳에서는 무엇도 그녀를 무섭게 하지 않았어요.",
        },
        {
          id: "blu-12",
          text: "The second comfort was a shelf of nature books by a writer who called himself John Foster, which she borrowed from the library and read like poetry.",
          translation:
            "두 번째 위안은 존 포스터라는 필명을 쓰는 작가의 자연 책들이 꽂힌 책꽂이였는데, 그녀는 그 책들을 도서관에서 빌려 시(詩)처럼 읽었어요.",
        },
      ],
      [
        {
          id: "blu-13",
          text: "Her mother said the Foster books were a foolish waste of time.",
          translation: "그녀의 어머니는 포스터의 책이 어리석은 시간 낭비라고 말했어요.",
        },
        {
          id: "blu-14",
          text: "That week Valancy was carrying a third secret, and this one frightened her.",
          translation:
            "그 주에 밸런시는 세 번째 비밀을 품고 있었는데, 이 비밀은 그녀를 두렵게 했어요.",
        },
        {
          id: "blu-15",
          text: "For months she had felt a strange pain near her heart, and she could not breathe easily when she climbed the stairs.",
          translation:
            "몇 달 동안 그녀는 심장 근처에 이상한 통증을 느꼈고, 계단을 오르면 숨을 편히 쉴 수가 없었어요.",
        },
      ],
      [
        {
          id: "blu-16",
          text: "She had written quietly to a doctor in another town, Dr. Trent, because she could not bear for her family to find out that something might be wrong.",
          translation:
            "그녀는 다른 마을의 트렌트 의사에게 조용히 편지를 썼는데, 어딘가 잘못되었을지도 모른다는 것을 가족이 알게 되는 일을 견딜 수 없었기 때문이에요.",
        },
        {
          id: "blu-17",
          text: "Lying there listening to the rain on her birthday morning, she made a small, trembling decision: this year, somehow, her life was going to change.",
          translation:
            "생일 아침에 빗소리를 들으며 누워서, 그녀는 작지만 떨리는 결심을 했어요. 올해는, 어떻게든, 자기 삶이 달라지고야 말겠다고요.",
        },
      ],
    ],
    vocab: [
      {
        id: "blu-v1",
        term: "clan",
        partOfSpeech: "noun",
        translation: "일가, 문중, 큰 친척 집단",
        example: "The whole Stirling clan gathered for dinner every month.",
        exampleTranslation: "스털링 일가 전체가 매달 저녁 식사에 모였어요.",
      },
      {
        id: "blu-v2",
        term: "embarrassment",
        partOfSpeech: "noun",
        translation: "당혹감, 창피함; (여기서는) 남부끄러운 존재",
        example: "To her relatives, an unmarried woman of twenty-nine was a quiet embarrassment.",
        exampleTranslation: "친척들에게 스물아홉의 미혼 여성은 조용한 골칫거리였어요.",
      },
      {
        id: "blu-v3",
        term: "imaginary",
        partOfSpeech: "adjective",
        translation: "상상의, 가상의",
        example: "As a child she built an imaginary castle in her mind.",
        exampleTranslation: "어릴 적 그녀는 마음속에 상상의 성을 지었어요.",
      },
      {
        id: "blu-v4",
        term: "comfort",
        partOfSpeech: "noun",
        translation: "위안, 위로(가 되는 것)",
        example: "Her two secret comforts were the Blue Castle and the Foster books.",
        exampleTranslation: "그녀의 두 가지 은밀한 위안은 푸른 성과 포스터의 책이었어요.",
      },
      {
        id: "blu-v5",
        term: "trembling",
        partOfSpeech: "adjective",
        translation: "떨리는, 떨면서 하는",
        example: "She made a small, trembling decision to change her life.",
        exampleTranslation: "그녀는 삶을 바꾸겠다는 작지만 떨리는 결심을 했어요.",
      },
    ],
    questions: [
      {
        id: "blu-q1",
        prompt: "How did Valancy's family treat her for being unmarried at twenty-nine?",
        options: [
          "They mostly left her alone and rarely mentioned it.",
          "They openly praised her independence.",
          "They spoke of it kindly at dinner as a quiet failure, and she learned to stay silent.",
          "They pushed her to move away and live on her own.",
        ],
        correctIndex: 2,
        explanation:
          "In her large, proud clan, a woman still unmarried at twenty-nine was a quiet embarrassment; her relatives said so at family dinners in kind, smiling voices, and Valancy had long ago learned to say nothing.",
      },
      {
        id: "blu-q2",
        prompt: "What were Valancy's two secret comforts?",
        options: [
          "A close friend in another town and a private diary.",
          "Her imaginary Blue Castle and a shelf of John Foster's nature books.",
          "Her savings and a plan to leave Deerwood.",
          "Long walks alone and letters from Dr. Trent.",
        ],
        correctIndex: 1,
        explanation:
          "The first was the Blue Castle, an imaginary castle in Spain she had lived in through daydreams since childhood; the second was the nature books of a writer called John Foster, which she borrowed from the library and read like poetry.",
      },
      {
        id: "blu-q3",
        prompt: "Why had Valancy written secretly to Dr. Trent in another town?",
        options: [
          "She wanted to ask him about a job.",
          "Her mother had told her to make an appointment.",
          "She was thanking him for a birthday gift.",
          "She had felt a pain near her heart and did not want her family to know something might be wrong.",
        ],
        correctIndex: 3,
        explanation:
          "For months she had felt a strange pain near her heart and could not breathe easily on the stairs, but she could not bear for her family to find out, so she quietly wrote to a doctor in another town.",
      },
    ],
  },
  {
    slug: "daddy-long-legs",
    title: "Daddy-Long-Legs",
    titleTranslation: "키다리 아저씨",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Jean Webster (1876–1916)",
    coverEmoji: "✉️",
    coverImage: "/covers/daddy-long-legs.svg",
    source:
      "Adapted from Chapter 1 (\"Blue Wednesday\") of Jean Webster's novel \"Daddy-Long-Legs\" (first published 1912; long in the public domain, Project Gutenberg #157). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain the offer that one trustee made to Jerusha Abbott, and the single condition attached to it.",
    paragraphs: [
      [
        {
          id: "dll-1",
          text: "At the John Grier Home, the first Wednesday of every month was the most dreaded day of all.",
          translation:
            "존 그리어 고아원에서는 매달 첫째 수요일이 가장 무서운 날이었어요.",
        },
        {
          id: "dll-2",
          text: "On that day the trustees and their visitors came to walk through the orphanage and inspect everything.",
          translation:
            "그날이면 이사들과 그들이 데려온 방문객들이 고아원 안을 두루 돌아보며 이것저것 점검했어요.",
        },
        {
          id: "dll-3",
          text: "Jerusha Abbott, at seventeen the oldest orphan in the house, had been on her feet since early morning.",
          translation:
            "열일곱 살로 그 집에서 가장 나이 많은 고아였던 제루샤 애벗은 이른 아침부터 줄곧 서서 일했어요.",
        },
      ],
      [
        {
          id: "dll-4",
          text: "She had swept rooms, wiped small faces, dressed nearly a hundred children in their stiff best clothes, and taught them to bow when a visitor spoke to them.",
          translation:
            "그녀는 방을 쓸고, 작은 얼굴들을 닦아 주고, 백 명 가까운 아이들에게 빳빳한 나들이옷을 입히고, 방문객이 말을 걸면 고개 숙여 인사하도록 가르쳤어요.",
        },
        {
          id: "dll-5",
          text: "Jerusha had lived at the Home her whole life, and she had never once been outside its iron gates for more than a day.",
          translation:
            "제루샤는 평생을 그 고아원에서 살았고, 철문 밖으로 하루 넘게 나가 본 적이 한 번도 없었어요.",
        },
        {
          id: "dll-6",
          text: "That afternoon, when the last visitor had finally gone, she leaned against a window, tired all the way through.",
          translation:
            "그날 오후 마지막 방문객이 마침내 돌아가자, 그녀는 온몸이 지친 채 창가에 기대섰어요.",
        },
      ],
      [
        {
          id: "dll-7",
          text: "Then Mrs. Lippett, who ran the Home, sent for her, and Jerusha went with a sinking heart, sure she had done something wrong.",
          translation:
            "그때 고아원을 운영하는 리펫 부인이 그녀를 불렀고, 제루샤는 무언가 잘못을 저질렀구나 싶어 가슴이 철렁 내려앉은 채로 갔어요.",
        },
        {
          id: "dll-8",
          text: "Instead, Mrs. Lippett told her that one of the trustees had made a surprising offer.",
          translation:
            "그런데 리펫 부인은 이사들 가운데 한 사람이 뜻밖의 제안을 했다고 말했어요.",
        },
        {
          id: "dll-9",
          text: "This trustee had read an essay Jerusha had written, a sharp and funny piece called \"Blue Wednesday\" about life in the orphanage.",
          translation:
            "그 이사는 제루샤가 쓴 '푸른 수요일'이라는 글을 읽었는데, 고아원 생활을 다룬 날카롭고 재미있는 글이었어요.",
        },
      ],
      [
        {
          id: "dll-10",
          text: "He believed she could become a writer, and he was willing to pay for her to go to college for four years.",
          translation:
            "그는 그녀가 작가가 될 수 있다고 믿었고, 그녀를 4년 동안 대학에 보내는 비용을 대 주겠다고 했어요.",
        },
        {
          id: "dll-11",
          text: "She would be given clothes, books, and a small amount of money to spend each month.",
          translation:
            "그녀는 옷과 책, 그리고 다달이 쓸 얼마간의 돈을 받게 될 것이었어요.",
        },
        {
          id: "dll-12",
          text: "There was only one thing she had to do in return: write him a letter once a month about her studies and her progress.",
          translation:
            "그 대가로 그녀가 해야 할 일은 단 하나, 한 달에 한 번 자기 공부와 발전에 대해 그에게 편지를 쓰는 것이었어요.",
        },
      ],
      [
        {
          id: "dll-13",
          text: "The letters were meant as a way of saying thank you, and also as practice for her writing.",
          translation:
            "그 편지는 고맙다는 인사이자, 동시에 글쓰기 연습이기도 했어요.",
        },
        {
          id: "dll-14",
          text: "But the trustee would never answer them, and he did not want to hear a single word about the money.",
          translation:
            "하지만 그 이사는 편지에 답장을 하지 않을 것이며, 돈 이야기는 한마디도 듣고 싶어 하지 않았어요.",
        },
        {
          id: "dll-15",
          text: "Jerusha had barely seen him; as he left, she had only caught sight of a tall man's long shadow thrown across the wall by the light in the hall.",
          translation:
            "제루샤는 그를 거의 보지 못했어요. 그가 떠날 때, 복도의 불빛에 벽으로 길게 드리운 키 큰 남자의 그림자를 얼핏 보았을 뿐이었어요.",
        },
      ],
      [
        {
          id: "dll-16",
          text: "The shadow had absurdly long arms and legs, like a big spider called a \"daddy-long-legs,\" and the name stuck in her mind.",
          translation:
            "그 그림자는 '장다리거미(daddy-long-legs)'라 불리는 큰 거미처럼 팔다리가 우스꽝스럽게 길었고, 그 이름이 그녀의 머릿속에 남았어요.",
        },
        {
          id: "dll-17",
          text: "She was to send her letters to a \"Mr. John Smith\" through his secretary, and she would never be told his real name.",
          translation:
            "그녀는 그의 비서를 통해 '존 스미스 씨'에게 편지를 보내야 했고, 그의 진짜 이름은 끝내 알 수 없을 것이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "dll-v1",
        term: "orphan",
        partOfSpeech: "noun",
        translation: "고아",
        example: "Jerusha was the oldest orphan in the John Grier Home.",
        exampleTranslation: "제루샤는 존 그리어 고아원에서 가장 나이 많은 고아였어요.",
      },
      {
        id: "dll-v2",
        term: "trustee",
        partOfSpeech: "noun",
        translation: "(기관의) 이사, 관리 위원",
        example: "One trustee offered to pay for her education.",
        exampleTranslation: "한 이사가 그녀의 학비를 대 주겠다고 했어요.",
      },
      {
        id: "dll-v3",
        term: "inspect",
        partOfSpeech: "verb",
        translation: "점검하다, 꼼꼼히 살피다",
        example: "The visitors walked through the rooms to inspect everything.",
        exampleTranslation: "방문객들은 모든 것을 점검하려고 방들을 두루 돌아보았어요.",
      },
      {
        id: "dll-v4",
        term: "dread",
        partOfSpeech: "verb",
        translation: "몹시 두려워하다, 무서워하다",
        example: "The children dreaded the first Wednesday of every month.",
        exampleTranslation: "아이들은 매달 첫째 수요일을 몹시 두려워했어요.",
      },
      {
        id: "dll-v5",
        term: "shadow",
        partOfSpeech: "noun",
        translation: "그림자",
        example: "She saw only his long shadow on the wall.",
        exampleTranslation: "그녀는 벽에 비친 그의 긴 그림자만 보았어요.",
      },
    ],
    questions: [
      {
        id: "dll-q1",
        prompt: "What was the first Wednesday of every month like at the John Grier Home?",
        options: [
          "A holiday, when the children were taken on an outing.",
          "The dreaded inspection day, when trustees and visitors walked through the orphanage.",
          "The day new orphans usually arrived.",
          "A quiet day, because Mrs. Lippett was always away.",
        ],
        correctIndex: 1,
        explanation:
          "On the first Wednesday of each month the trustees and their visitors came to inspect the Home; Jerusha, the oldest orphan, spent the whole day cleaning and dressing nearly a hundred children and teaching them to bow to visitors.",
      },
      {
        id: "dll-q2",
        prompt: "Why did one of the trustees offer to send Jerusha to college?",
        options: [
          "She had nursed his sick child back to health.",
          "Mrs. Lippett had begged him to take her off her hands.",
          "He had read her sharp, funny essay \"Blue Wednesday\" and thought she could be a writer.",
          "She was the only orphan old enough to leave the Home.",
        ],
        correctIndex: 2,
        explanation:
          "The trustee had read an essay Jerusha wrote about orphanage life, called \"Blue Wednesday,\" and believed she had the talent to become a writer, so he offered to pay for four years of college.",
      },
      {
        id: "dll-q3",
        prompt: "What did Jerusha have to do in return for her education?",
        options: [
          "Come back to work at the Home every summer.",
          "Write him one letter a month about her studies, expecting no reply.",
          "Pay the money back once she had graduated.",
          "Keep the whole arrangement secret from everyone she met.",
        ],
        correctIndex: 1,
        explanation:
          "In return she had only to write him one letter a month about her progress, as thanks and as writing practice; he would never answer, and she was to address the letters to a \"Mr. John Smith\" without ever learning his real name.",
      },
    ],
  },
  {
    slug: "the-mysteries-of-udolpho",
    title: "The Mysteries of Udolpho",
    titleTranslation: "우돌포의 비밀",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Ann Radcliffe (1764–1823)",
    coverEmoji: "🕯️",
    coverImage: "/covers/the-mysteries-of-udolpho.svg",
    source:
      "Adapted from Volume 1, Chapter 1 of Ann Radcliffe's novel \"The Mysteries of Udolpho\" (first published 1794; long in the public domain, Project Gutenberg #3268). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe the life the St. Aubert family led at La Vallée, and the lesson Emily's father tried to teach her.",
    paragraphs: [
      [
        {
          id: "mou-1",
          text: "On the pleasant banks of the river Garonne, in the south of France, stood the château of Monsieur St. Aubert.",
          translation:
            "프랑스 남부, 가론강의 아름다운 강가에 생토베르 씨의 저택이 있었어요.",
        },
        {
          id: "mou-2",
          text: "It was a modest house, half hidden by woods, with the great blue line of the Pyrenees rising far away to the south.",
          translation:
            "숲에 반쯤 가려진 소박한 집이었고, 저 멀리 남쪽으로는 피레네산맥의 거대한 푸른 능선이 솟아 있었어요.",
        },
        {
          id: "mou-3",
          text: "St. Aubert had once known the wider world, but he had seen enough of its noise and its falseness, and had chosen to leave it.",
          translation:
            "생토베르는 한때 넓은 세상을 알았지만, 그 소란과 거짓됨을 충분히 겪고서 그곳을 떠나기로 마음먹었어요.",
        },
      ],
      [
        {
          id: "mou-4",
          text: "Here at La Vallée he lived quietly with his wife and his one surviving child, a daughter named Emily.",
          translation:
            "이곳 라발레에서 그는 아내와, 살아남은 하나뿐인 자식인 에밀리라는 딸과 함께 조용히 살았어요.",
        },
        {
          id: "mou-5",
          text: "He filled his days with his books, his music, and the study of plants, and every evening he walked through the same well-loved fields.",
          translation:
            "그는 책과 음악, 식물 연구로 하루하루를 채웠고, 저녁마다 늘 같은 정든 들판을 거닐었어요.",
        },
        {
          id: "mou-6",
          text: "Madame St. Aubert was gentle and often unwell, and the small family was bound together by a deep and easy affection.",
          translation:
            "생토베르 부인은 온화했지만 자주 몸이 편치 않았고, 이 작은 가족은 깊고도 편안한 애정으로 서로 이어져 있었어요.",
        },
      ],
      [
        {
          id: "mou-7",
          text: "Emily, now eighteen, had her father's love of books and her mother's soft manner.",
          translation:
            "이제 열여덟이 된 에밀리는 아버지의 책 사랑과 어머니의 부드러운 태도를 함께 지니고 있었어요.",
        },
        {
          id: "mou-8",
          text: "She was tall and gracefully made, with a face that showed every feeling as it passed.",
          translation:
            "그녀는 키가 크고 우아한 몸매였으며, 스쳐 가는 모든 감정이 그대로 드러나는 얼굴을 하고 있었어요.",
        },
        {
          id: "mou-9",
          text: "She loved best to wander alone near the little fishing-house by the stream, reading poetry or watching the light change on the mountains.",
          translation:
            "그녀가 가장 좋아한 것은 시냇가의 작은 낚시 오두막 근처를 혼자 거닐며 시를 읽거나 산 위로 빛이 변해 가는 모습을 지켜보는 일이었어요.",
        },
      ],
      [
        {
          id: "mou-10",
          text: "Sometimes she wrote verses of her own, though she was shy of showing them to anyone.",
          translation:
            "이따금 그녀는 직접 시를 짓기도 했지만, 누구에게도 보여 주기를 부끄러워했어요.",
        },
        {
          id: "mou-11",
          text: "Her father delighted in her, and yet one thing about her made him uneasy.",
          translation:
            "아버지는 그녀를 몹시 사랑했지만, 그녀에 대해 한 가지 마음에 걸리는 것이 있었어요.",
        },
        {
          id: "mou-12",
          text: "He saw that her feelings were unusually strong, and that beauty or sorrow could move her almost past bearing.",
          translation:
            "그는 그녀의 감정이 유난히 강해서, 아름다움이나 슬픔이 그녀를 거의 견딜 수 없을 만큼 뒤흔든다는 것을 알았어요.",
        },
      ],
      [
        {
          id: "mou-13",
          text: "Such a nature, he believed, was a kind of danger in a world that does not spare the tender-hearted.",
          translation:
            "그런 기질은, 마음 여린 사람을 봐주지 않는 세상에서는 일종의 위험이라고 그는 믿었어요.",
        },
        {
          id: "mou-14",
          text: "He tried, gently, to teach her self-command: to feel deeply, but not to be ruled by feeling.",
          translation:
            "그는 그녀에게 자제력을 부드럽게 가르치려 했어요. 깊이 느끼되, 감정에 휘둘리지는 말라고요.",
        },
        {
          id: "mou-15",
          text: "\"Do not be proud of your sensibility,\" he told her; a mind that cannot govern itself, however fine, brings its owner grief.",
          translation:
            "\"네 감수성을 자랑스러워하지 마라.\" 그는 그녀에게 말했어요. 스스로를 다스리지 못하는 마음은, 아무리 고와도 그 주인에게 슬픔을 안겨 준다고요.",
        },
      ],
      [
        {
          id: "mou-16",
          text: "Emily listened, and loved him the more for it, though she was still too young to know how much she would need the lesson.",
          translation:
            "에밀리는 귀 기울여 들었고, 그 때문에 아버지를 더욱 사랑했지만, 그 가르침이 얼마나 절실히 필요하게 될지는 알기에는 아직 너무 어렸어요.",
        },
        {
          id: "mou-17",
          text: "For the present the days passed one like another at La Vallée, calm and bright, and none of them guessed how soon that quiet would end.",
          translation:
            "당분간 라발레의 나날은 서로 비슷하게, 고요하고 환하게 흘러갔고, 그 평온이 얼마나 빨리 끝날지는 아무도 짐작하지 못했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "mou-v1",
        term: "affection",
        partOfSpeech: "noun",
        translation: "애정, 다정함",
        example: "The small family was bound together by a deep affection.",
        exampleTranslation: "그 작은 가족은 깊은 애정으로 서로 이어져 있었어요.",
      },
      {
        id: "mou-v2",
        term: "sensibility",
        partOfSpeech: "noun",
        translation: "감수성, 감정에 쉽게 흔들리는 마음",
        example: "Her father worried about her strong sensibility.",
        exampleTranslation: "아버지는 그녀의 강한 감수성을 걱정했어요.",
      },
      {
        id: "mou-v3",
        term: "self-command",
        partOfSpeech: "noun",
        translation: "자제(력), 감정을 다스리는 힘",
        example: "He tried to teach Emily self-command.",
        exampleTranslation: "그는 에밀리에게 자제력을 가르치려 했어요.",
      },
      {
        id: "mou-v4",
        term: "uneasy",
        partOfSpeech: "adjective",
        translation: "불안한, 마음이 편치 않은",
        example: "One thing about his daughter made St. Aubert uneasy.",
        exampleTranslation: "딸에 대한 한 가지가 생토베르의 마음을 편치 않게 했어요.",
      },
      {
        id: "mou-v5",
        term: "govern",
        partOfSpeech: "verb",
        translation: "다스리다, 통제하다",
        example: "A mind that cannot govern itself brings its owner grief.",
        exampleTranslation: "스스로를 다스리지 못하는 마음은 그 주인에게 슬픔을 안겨 줘요.",
      },
    ],
    questions: [
      {
        id: "mou-q1",
        prompt: "Why had Monsieur St. Aubert come to live quietly at La Vallée?",
        options: [
          "He had lost his fortune and could no longer afford the city.",
          "He had grown tired of the noise and falseness of the wider world and chose to withdraw from it.",
          "His doctors had ordered him to the mountains for his health.",
          "He had inherited the château and was required by law to live in it.",
        ],
        correctIndex: 1,
        explanation:
          "St. Aubert had known the wider world but had seen enough of its noise and falseness; he chose to leave it and live quietly at La Vallée with his books, his music, his plants, and his family.",
      },
      {
        id: "mou-q2",
        prompt: "What was the one thing about Emily that made her father uneasy?",
        options: [
          "She spent too much of the family's money on books and music.",
          "She refused to learn anything about plants or botany.",
          "Her feelings were unusually strong, and beauty or sorrow could overwhelm her.",
          "She kept asking to leave home and travel through Europe.",
        ],
        correctIndex: 2,
        explanation:
          "St. Aubert delighted in Emily, but he saw that her sensibility was unusually strong — beauty or sorrow could move her almost past bearing — and he thought such a nature was a danger in an unkind world.",
      },
      {
        id: "mou-q3",
        prompt: "What did St. Aubert try to teach Emily?",
        options: [
          "To hide her feelings completely and always appear cold.",
          "To be proud of her fine sensibility and trust it.",
          "To feel deeply but not be ruled by her feelings — self-command.",
          "To think well of every stranger she met.",
        ],
        correctIndex: 2,
        explanation:
          "He tried gently to teach her self-command: to feel deeply but not to be governed by feeling, warning her that a mind which cannot govern itself, however fine, brings its owner grief.",
      },
    ],
  },
  {
    slug: "the-mill-on-the-floss",
    title: "The Mill on the Floss",
    titleTranslation: "플로스강의 물방앗간",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "George Eliot (1819–1880)",
    coverEmoji: "🎣",
    coverImage: "/covers/the-mill-on-the-floss.svg",
    source:
      "Adapted from Book First, Chapter 5 (\"Tom Comes Home\") of George Eliot's novel \"The Mill on the Floss\" (first published 1860; long in the public domain, Project Gutenberg #6688). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what Maggie had to confess to Tom when he came home, how he reacted, and how the day ended.",
    paragraphs: [
      [
        {
          id: "mff-1",
          text: "For a whole week Maggie Tulliver had thought of nothing but her brother Tom, who was coming home from school for the holidays.",
          translation:
            "한 주 내내 매기 털리버는 방학을 맞아 학교에서 집으로 오는 오빠 톰 생각밖에 하지 않았어요.",
        },
        {
          id: "mff-2",
          text: "Maggie was nine, quick and dark and clever, and she loved Tom with her whole fierce heart.",
          translation:
            "매기는 아홉 살이었고, 눈치 빠르고 가무잡잡하고 영리했으며, 온 마음을 다해 격렬하게 톰을 사랑했어요.",
        },
        {
          id: "mff-3",
          text: "Before he left, Tom had asked her to take care of his two rabbits while he was away.",
          translation:
            "톰은 떠나기 전에, 자기가 없는 동안 토끼 두 마리를 돌봐 달라고 매기에게 부탁했어요.",
        },
      ],
      [
        {
          id: "mff-4",
          text: "But Maggie forgot things when her mind was full of books and daydreams, and for several days no one fed them.",
          translation:
            "하지만 매기는 머릿속이 책과 공상으로 가득 차면 이것저것 잊어버렸고, 며칠 동안 아무도 토끼에게 먹이를 주지 않았어요.",
        },
        {
          id: "mff-5",
          text: "By the time she remembered, both rabbits were dead.",
          translation: "매기가 생각해 냈을 때에는 토끼 두 마리가 다 죽어 있었어요.",
        },
        {
          id: "mff-6",
          text: "She had been carrying the guilt of it about with her like a stone.",
          translation: "그녀는 그 죄책감을 돌덩이처럼 안고 다녔어요.",
        },
      ],
      [
        {
          id: "mff-7",
          text: "When the cart finally brought Tom to the door, Maggie rushed at him and hugged him so hard that his cap fell off.",
          translation:
            "마침내 수레가 톰을 문 앞에 내려놓자, 매기는 그에게 달려들어 어찌나 세게 끌어안았는지 그의 모자가 벗겨져 떨어졌어요.",
        },
        {
          id: "mff-8",
          text: "Tom was pleased to be home, and pleased with himself, for he had something for her in his pocket.",
          translation:
            "톰은 집에 온 것이 기뻤고, 스스로도 뿌듯했어요. 주머니에 매기에게 줄 것이 있었거든요.",
        },
        {
          id: "mff-9",
          text: "It was a fishing-line — half of one he had bought with his own money — and a new hook, so that she could fish beside him.",
          translation:
            "그것은 낚싯줄이었는데, 자기 돈으로 산 낚싯줄의 절반과 새 낚싯바늘이어서, 매기도 그의 곁에서 낚시를 할 수 있게 되었어요.",
        },
      ],
      [
        {
          id: "mff-10",
          text: "Maggie was almost too happy to speak, and for a few minutes she let herself forget the rabbits.",
          translation:
            "매기는 너무 행복해서 말이 안 나올 지경이었고, 몇 분 동안은 토끼 일을 잊어버릴 수 있었어요.",
        },
        {
          id: "mff-11",
          text: "Then Tom asked, brightly, how his rabbits were getting on.",
          translation: "그때 톰이 밝은 목소리로 자기 토끼들은 잘 지내느냐고 물었어요.",
        },
        {
          id: "mff-12",
          text: "Maggie's face changed, and after a struggle she told him the truth.",
          translation: "매기의 얼굴빛이 변했고, 한참을 망설이다가 사실대로 말했어요.",
        },
      ],
      [
        {
          id: "mff-13",
          text: "Tom's pleasure went cold at once. \"You're a very naughty girl,\" he said. \"I don't love you.\"",
          translation:
            "톰의 기쁨은 그 자리에서 싸늘하게 식었어요. \"너 정말 나쁜 애야.\" 그가 말했어요. \"난 너 안 좋아해.\"",
        },
        {
          id: "mff-14",
          text: "He would not look at her; he talked instead about going to see the mill and the pond.",
          translation:
            "그는 매기를 쳐다보려 하지 않고, 대신 방앗간과 연못을 보러 가겠다는 이야기만 했어요.",
        },
        {
          id: "mff-15",
          text: "Maggie's heart seemed to break, and she ran upstairs to the dark attic to cry alone.",
          translation:
            "매기는 가슴이 찢어지는 것 같아서, 혼자 울려고 어두운 다락방으로 뛰어 올라갔어요.",
        },
      ],
      [
        {
          id: "mff-16",
          text: "But Tom's anger never lasted long, and before the afternoon was over he climbed up to fetch her, and they were friends again.",
          translation:
            "하지만 톰의 화는 오래가는 법이 없어서, 오후가 다 가기 전에 그는 매기를 데리러 다락으로 올라왔고, 둘은 다시 사이좋아졌어요.",
        },
        {
          id: "mff-17",
          text: "They walked down together to the Round Pool, and as she sat by the water with her line, Maggie thought that heaven could be nothing better than this: to sit beside Tom, and never be scolded.",
          translation:
            "둘은 함께 라운드 풀로 걸어 내려갔고, 낚싯줄을 드리운 채 물가에 앉아 매기는 천국이라 해도 이보다 나을 수는 없겠다고 생각했어요. 톰 곁에 앉아서, 야단맞는 일 없이 지내는 것 말이에요.",
        },
      ],
    ],
    vocab: [
      {
        id: "mff-v1",
        term: "fierce",
        partOfSpeech: "adjective",
        translation: "격렬한, 맹렬한; 사나운",
        example: "Maggie loved her brother with a fierce, whole-hearted love.",
        exampleTranslation: "매기는 오빠를 격렬하고 온 마음을 다한 사랑으로 사랑했어요.",
      },
      {
        id: "mff-v2",
        term: "guilt",
        partOfSpeech: "noun",
        translation: "죄책감",
        example: "She carried the guilt of the dead rabbits like a stone.",
        exampleTranslation: "그녀는 죽은 토끼들에 대한 죄책감을 돌덩이처럼 안고 다녔어요.",
      },
      {
        id: "mff-v3",
        term: "naughty",
        partOfSpeech: "adjective",
        translation: "(아이가) 버릇없는, 말을 안 듣는, 못된",
        example: "Tom said she was a very naughty girl.",
        exampleTranslation: "톰은 그녀가 아주 못된 아이라고 말했어요.",
      },
      {
        id: "mff-v4",
        term: "attic",
        partOfSpeech: "noun",
        translation: "다락방",
        example: "Maggie ran up to the dark attic to cry alone.",
        exampleTranslation: "매기는 혼자 울려고 어두운 다락방으로 뛰어 올라갔어요.",
      },
      {
        id: "mff-v5",
        term: "scold",
        partOfSpeech: "verb",
        translation: "꾸짖다, 야단치다",
        example: "Maggie longed for a place where no one would scold her.",
        exampleTranslation: "매기는 아무도 자기를 야단치지 않는 곳을 간절히 바랐어요.",
      },
    ],
    questions: [
      {
        id: "mff-q1",
        prompt: "What had happened to Tom's rabbits while he was away at school?",
        options: [
          "Maggie had given them away to a neighbour.",
          "They had escaped from their hutch and could not be found.",
          "No one had fed them, and by the time Maggie remembered, both were dead.",
          "They were healthy and had had a litter of babies.",
        ],
        correctIndex: 2,
        explanation:
          "Tom had asked Maggie to look after his two rabbits, but she forgot while lost in books and daydreams; for several days no one fed them, and by the time she remembered, both rabbits had died.",
      },
      {
        id: "mff-q2",
        prompt: "How did Tom react when Maggie finally confessed about the rabbits?",
        options: [
          "He laughed and said it did not matter at all.",
          "His pleasure went cold; he said she was very naughty and that he did not love her.",
          "He cried, and Maggie had to comfort him.",
          "He blamed their mother rather than Maggie.",
        ],
        correctIndex: 1,
        explanation:
          "Tom had just given Maggie a fishing-line and was happy to be home, but when she told him the truth his pleasure went cold at once; he called her very naughty, said \"I don't love you,\" and would not look at her.",
      },
      {
        id: "mff-q3",
        prompt: "How did the afternoon end?",
        options: [
          "Maggie stayed alone in the attic until nightfall.",
          "Tom went fishing by himself and left Maggie behind.",
          "Their father punished them both and sent them to bed.",
          "Tom's anger passed, he fetched Maggie from the attic, and they went to fish at the Round Pool together.",
        ],
        correctIndex: 3,
        explanation:
          "Tom's anger never lasted long; before the afternoon was over he climbed up to the attic to fetch Maggie, they made up, and they walked down together to fish at the Round Pool, where Maggie felt perfectly happy.",
      },
    ],
  },
  {
    slug: "pollyanna",
    title: "Pollyanna",
    titleTranslation: "폴리애나",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Eleanor H. Porter (1868–1920)",
    coverEmoji: "☀️",
    coverImage: "/covers/pollyanna.svg",
    source:
      "Adapted from Chapter 1 (\"Miss Polly\") of Eleanor H. Porter's novel \"Pollyanna\" (first published 1913; long in the public domain, Project Gutenberg #1450). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, say what news the letter brought Miss Polly and what she decided to do.",
    paragraphs: [
      [
        {
          id: "pol-1",
          text: "Miss Polly Harrington lived alone in a big house in a small town.",
          translation: "폴리 해링턴 아주머니는 작은 마을의 큰 집에서 혼자 살았어요.",
        },
        {
          id: "pol-2",
          text: "She was not poor. She had plenty of money.",
          translation: "그녀는 가난하지 않았어요. 돈은 많았어요.",
        },
        {
          id: "pol-3",
          text: "But she was not a happy woman, and she did not smile very often.",
          translation: "하지만 그녀는 행복한 사람이 아니었고, 자주 웃지 않았어요.",
        },
      ],
      [
        {
          id: "pol-4",
          text: "One June morning, Miss Polly got a letter.",
          translation: "6월의 어느 아침, 폴리 아주머니는 편지 한 통을 받았어요.",
        },
        {
          id: "pol-5",
          text: "The letter had bad news in it.",
          translation: "편지에는 나쁜 소식이 들어 있었어요.",
        },
        {
          id: "pol-6",
          text: "Miss Polly had a sister who lived far away. Years ago, that sister left home to marry a poor man.",
          translation:
            "폴리 아주머니에게는 멀리 사는 여동생이 있었어요. 오래전에 그 여동생은 가난한 남자와 결혼하려고 집을 떠났어요.",
        },
      ],
      [
        {
          id: "pol-7",
          text: "Now the letter said that the sister and her husband had both died.",
          translation:
            "그런데 편지에는 그 여동생과 남편이 둘 다 세상을 떠났다고 쓰여 있었어요.",
        },
        {
          id: "pol-8",
          text: "They had one child, a little girl named Pollyanna. She was eleven years old.",
          translation:
            "그들에게는 아이가 하나 있었어요. 폴리애나라는 어린 여자아이였고, 열한 살이었어요.",
        },
        {
          id: "pol-9",
          text: "The girl had no home and no family now. Only Miss Polly was left.",
          translation:
            "이제 그 아이에게는 집도 없고 가족도 없었어요. 폴리 아주머니만 남았어요.",
        },
      ],
      [
        {
          id: "pol-10",
          text: "Miss Polly put down the letter and frowned.",
          translation: "폴리 아주머니는 편지를 내려놓고 얼굴을 찌푸렸어요.",
        },
        {
          id: "pol-11",
          text: "She did not want a child in her house. She liked her quiet life.",
          translation:
            "그녀는 집에 아이가 있는 것을 원하지 않았어요. 조용한 생활이 좋았거든요.",
        },
        {
          id: "pol-12",
          text: "But Pollyanna was her sister's child, and there was no one else.",
          translation: "하지만 폴리애나는 여동생의 아이였고, 달리 아무도 없었어요.",
        },
      ],
      [
        {
          id: "pol-13",
          text: "\"It is my duty,\" Miss Polly said to herself. \"I will take her.\"",
          translation:
            "\"이건 내 의무야.\" 폴리 아주머니는 혼잣말을 했어요. \"내가 그 아이를 맡겠어.\"",
        },
        {
          id: "pol-14",
          text: "She called her servant, a young woman named Nancy.",
          translation: "그녀는 하녀를 불렀어요. 낸시라는 젊은 여자였어요.",
        },
        {
          id: "pol-15",
          text: "\"My niece is coming to live here,\" she said. \"Get the little room in the attic ready for her.\"",
          translation:
            "\"내 조카가 여기 와서 살 거야.\" 그녀가 말했어요. \"다락방의 작은 방을 그 아이가 쓸 수 있게 준비해 둬.\"",
        },
      ],
      [
        {
          id: "pol-16",
          text: "Nancy was surprised. The attic room was small, hot, and far from everyone. But she did not say anything.",
          translation:
            "낸시는 놀랐어요. 다락방은 작고, 덥고, 다른 사람들과 멀리 떨어져 있었거든요. 하지만 낸시는 아무 말도 하지 않았어요.",
        },
        {
          id: "pol-17",
          text: "Miss Polly went back to her work. In a few weeks, the child would arrive.",
          translation:
            "폴리 아주머니는 다시 일하러 갔어요. 몇 주 뒤면 그 아이가 도착할 거예요.",
        },
      ],
    ],
    vocab: [
      {
        id: "pol-v1",
        term: "frown",
        partOfSpeech: "verb",
        translation: "얼굴을 찌푸리다, 인상을 쓰다",
        example: "Miss Polly frowned when she read the bad news.",
        exampleTranslation: "폴리 아주머니는 나쁜 소식을 읽고 얼굴을 찌푸렸어요.",
      },
      {
        id: "pol-v2",
        term: "duty",
        partOfSpeech: "noun",
        translation: "의무, 마땅히 해야 할 일",
        example: "\"It is my duty to take the child,\" she said.",
        exampleTranslation: "\"그 아이를 맡는 것이 내 의무야.\"라고 그녀가 말했어요.",
      },
      {
        id: "pol-v3",
        term: "niece",
        partOfSpeech: "noun",
        translation: "(여자) 조카",
        example: "Pollyanna was Miss Polly's niece.",
        exampleTranslation: "폴리애나는 폴리 아주머니의 조카였어요.",
      },
      {
        id: "pol-v4",
        term: "servant",
        partOfSpeech: "noun",
        translation: "하인, 하녀",
        example: "Nancy was the servant in Miss Polly's house.",
        exampleTranslation: "낸시는 폴리 아주머니 집의 하녀였어요.",
      },
      {
        id: "pol-v5",
        term: "surprised",
        partOfSpeech: "adjective",
        translation: "놀란",
        example: "Nancy was surprised by the small attic room.",
        exampleTranslation: "낸시는 작은 다락방을 보고 놀랐어요.",
      },
    ],
    questions: [
      {
        id: "pol-q1",
        prompt: "What bad news did the letter bring Miss Polly?",
        options: [
          "Her sister wanted to come and live with her.",
          "Her sister and her sister's husband had both died, leaving a child alone.",
          "Someone had stolen money from her house.",
          "Her niece did not want to live with her.",
        ],
        correctIndex: 1,
        explanation:
          "The letter told Miss Polly that her sister, who had left home years before to marry a poor man, had died along with her husband; their eleven-year-old daughter Pollyanna now had no home and no family except Miss Polly.",
      },
      {
        id: "pol-q2",
        prompt: "How did Miss Polly feel about taking Pollyanna in?",
        options: [
          "She was very happy and could not wait.",
          "She did not want a child, but she felt it was her duty.",
          "She was afraid of the little girl.",
          "She wanted to give Pollyanna the best room in the house.",
        ],
        correctIndex: 1,
        explanation:
          "Miss Polly frowned when she read the letter, because she liked her quiet life and did not want a child; but Pollyanna was her sister's child and there was no one else, so she decided it was her duty to take her.",
      },
      {
        id: "pol-q3",
        prompt: "Which room did Miss Polly tell Nancy to get ready?",
        options: [
          "The best room, next to her own.",
          "A small room in the attic.",
          "A room in the garden house.",
          "The big room downstairs.",
        ],
        correctIndex: 1,
        explanation:
          "Miss Polly told her servant Nancy to get \"the little room in the attic\" ready for Pollyanna; Nancy was surprised, because that room was small, hot, and far from everyone, but she said nothing.",
      },
    ],
  },
  {
    slug: "rebecca-of-sunnybrook-farm",
    title: "Rebecca of Sunnybrook Farm",
    titleTranslation: "서니브룩 농장의 레베카",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Kate Douglas Wiggin (1856–1923)",
    coverEmoji: "🌂",
    coverImage: "/covers/rebecca-of-sunnybrook-farm.svg",
    source:
      "Adapted from Chapter 1 (\"Sunnybrook Farm\") of Kate Douglas Wiggin's novel \"Rebecca of Sunnybrook Farm\" (first published 1903; long in the public domain, Project Gutenberg #498). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why Rebecca was on the stagecoach and what she was like as a passenger.",
    paragraphs: [
      [
        {
          id: "rsf-1",
          text: "The old yellow stagecoach rolled slowly along the dusty road to Riverboro.",
          translation: "낡은 노란색 역마차가 리버보로로 가는 먼지투성이 길을 천천히 굴러갔어요.",
        },
        {
          id: "rsf-2",
          text: "It was a hot morning in May, and the driver was a kind man named Mr. Jeremiah Cobb.",
          translation:
            "5월의 더운 아침이었고, 마부는 제리마이어 콥 씨라는 친절한 사람이었어요.",
        },
        {
          id: "rsf-3",
          text: "That day the coach had only one passenger: a small, thin girl with dark hair and bright eyes.",
          translation:
            "그날 마차에는 승객이 딱 한 명 있었어요. 검은 머리에 눈이 반짝이는 작고 마른 여자아이였어요.",
        },
      ],
      [
        {
          id: "rsf-4",
          text: "Her name was Rebecca Randall, and she was ten years old.",
          translation: "아이의 이름은 레베카 랜들이었고, 열 살이었어요.",
        },
        {
          id: "rsf-5",
          text: "Rebecca lived far away on a poor farm called Sunnybrook Farm.",
          translation: "레베카는 멀리 떨어진 서니브룩 농장이라는 가난한 농장에서 살았어요.",
        },
        {
          id: "rsf-6",
          text: "Her father was dead, and her mother had seven children and very little money.",
          translation:
            "아버지는 돌아가셨고, 어머니는 아이가 일곱이나 있었지만 돈은 아주 적었어요.",
        },
      ],
      [
        {
          id: "rsf-7",
          text: "So Rebecca was being sent to live with her two aunts in the brick house at Riverboro.",
          translation:
            "그래서 레베카는 리버보로의 벽돌집에 사는 두 이모와 함께 살도록 보내지는 참이었어요.",
        },
        {
          id: "rsf-8",
          text: "The aunts, Miranda and Jane, would give her a home and send her to school.",
          translation:
            "미란다 이모와 제인 이모가 레베카에게 집을 마련해 주고 학교에 보내 줄 거예요.",
        },
        {
          id: "rsf-9",
          text: "Rebecca sat alone on the hard back seat, holding a small pink parasol.",
          translation:
            "레베카는 딱딱한 뒷좌석에 혼자 앉아, 작은 분홍색 양산을 들고 있었어요.",
        },
      ],
      [
        {
          id: "rsf-10",
          text: "The parasol was old, but she loved it more than anything else she owned.",
          translation:
            "양산은 낡았지만, 레베카는 자기가 가진 그 무엇보다 그 양산을 좋아했어요.",
        },
        {
          id: "rsf-11",
          text: "After a while, she called out to the driver and asked if she could sit up front with him.",
          translation:
            "얼마 뒤, 레베카는 마부를 불러 앞자리에 함께 앉아도 되느냐고 물었어요.",
        },
        {
          id: "rsf-12",
          text: "Mr. Cobb was surprised, but he stopped the horses and let her climb up beside him.",
          translation:
            "콥 씨는 놀랐지만, 말을 세우고 레베카가 자기 옆으로 올라오게 해 주었어요.",
        },
      ],
      [
        {
          id: "rsf-13",
          text: "From that moment, Rebecca did not stop talking.",
          translation: "그 순간부터 레베카는 이야기를 멈추지 않았어요.",
        },
        {
          id: "rsf-14",
          text: "She told him about her family, her farm, her brothers and sisters, and her long name.",
          translation:
            "레베카는 자기 가족, 농장, 형제자매들, 그리고 자기 긴 이름에 대해 이야기했어요.",
        },
        {
          id: "rsf-15",
          text: "Her mother had loved two heroines from books, she explained, so she was called Rebecca Rowena.",
          translation:
            "어머니가 책 속 여주인공 두 명을 좋아해서 자기 이름이 레베카 로위나가 되었다고 레베카는 설명했어요.",
        },
      ],
      [
        {
          id: "rsf-16",
          text: "Mr. Cobb had never heard a child talk so much, or say such interesting things.",
          translation:
            "콥 씨는 아이가 그렇게 말을 많이 하는 것도, 그렇게 재미있는 말을 하는 것도 들어 본 적이 없었어요.",
        },
        {
          id: "rsf-17",
          text: "\"Mother told me to be quiet on the trip,\" Rebecca said at last, \"but it is so hard to remember.\"",
          translation:
            "\"엄마가 가는 길에 조용히 있으라고 했어요.\" 마침내 레베카가 말했어요. \"그런데 그걸 기억하기가 참 어려워요.\"",
        },
      ],
    ],
    vocab: [
      {
        id: "rsf-v1",
        term: "stagecoach",
        partOfSpeech: "noun",
        translation: "역마차 (옛날에 사람과 우편물을 실어 나르던 마차)",
        example: "The old stagecoach carried the mail and one or two passengers.",
        exampleTranslation: "낡은 역마차는 우편물과 승객 한두 명을 실어 날랐어요.",
      },
      {
        id: "rsf-v2",
        term: "passenger",
        partOfSpeech: "noun",
        translation: "승객",
        example: "That day Rebecca was the only passenger.",
        exampleTranslation: "그날 레베카는 유일한 승객이었어요.",
      },
      {
        id: "rsf-v3",
        term: "parasol",
        partOfSpeech: "noun",
        translation: "양산",
        example: "She held her pink parasol carefully on her lap.",
        exampleTranslation: "레베카는 분홍색 양산을 무릎 위에 조심스럽게 들고 있었어요.",
      },
      {
        id: "rsf-v4",
        term: "aunt",
        partOfSpeech: "noun",
        translation: "이모, 고모, 아주머니 (부모의 여자 형제)",
        example: "Rebecca was going to live with her aunts Miranda and Jane.",
        exampleTranslation: "레베카는 미란다 이모, 제인 이모와 함께 살러 가는 길이었어요.",
      },
      {
        id: "rsf-v5",
        term: "heroine",
        partOfSpeech: "noun",
        translation: "(이야기·소설의) 여주인공",
        example: "Her mother named her after two heroines from books.",
        exampleTranslation: "어머니는 책 속 여주인공 두 명의 이름을 따서 딸의 이름을 지었어요.",
      },
    ],
    questions: [
      {
        id: "rsf-q1",
        prompt: "Why was Rebecca travelling to Riverboro on the stagecoach?",
        options: [
          "To sell vegetables from Sunnybrook Farm at the market.",
          "To visit her aunts for a short holiday.",
          "To live with her two aunts, who would give her a home and send her to school.",
          "To carry a message from her mother to Mr. Cobb.",
        ],
        correctIndex: 2,
        explanation:
          "Rebecca's father was dead and her mother had seven children and very little money, so Rebecca was being sent to live with her aunts Miranda and Jane in the brick house at Riverboro, where she would have a home and go to school.",
      },
      {
        id: "rsf-q2",
        prompt: "What did Rebecca do soon after the journey began?",
        options: [
          "She fell asleep on the hard back seat.",
          "She asked to sit up front with the driver, and then talked without stopping.",
          "She asked Mr. Cobb to turn the coach around.",
          "She lost her pink parasol out of the window.",
        ],
        correctIndex: 1,
        explanation:
          "After a while Rebecca called to Mr. Cobb and asked to sit beside him; he was surprised but let her climb up front, and from that moment she did not stop talking about her family, her farm, and her name.",
      },
      {
        id: "rsf-q3",
        prompt: "How did Mr. Cobb react to Rebecca?",
        options: [
          "He was annoyed and told her to be silent.",
          "He could not understand a word she said.",
          "He asked her to get down and walk beside the coach.",
          "He had never heard a child talk so much or say such interesting things.",
        ],
        correctIndex: 3,
        explanation:
          "Mr. Cobb was a kind man and, though bewildered, he had never heard a child talk so much or say such interesting things; Rebecca even admitted her mother had told her to stay quiet, but that it was hard to remember.",
      },
    ],
  },
  {
    slug: "an-old-fashioned-girl",
    title: "An Old-Fashioned Girl",
    titleTranslation: "구식 소녀",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Louisa May Alcott (1832–1888)",
    coverEmoji: "👒",
    coverImage: "/covers/an-old-fashioned-girl.svg",
    source:
      "Adapted from Chapter 1 (\"Polly Arrives\") of Louisa May Alcott's novel \"An Old-Fashioned Girl\" (first published 1870; long in the public domain, Project Gutenberg #2787). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe how Polly felt on her first day at the Shaws' house and who made her feel welcome.",
    paragraphs: [
      [
        {
          id: "ofg-1",
          text: "Polly Milton was fourteen years old, and she lived in a small country town.",
          translation: "폴리 밀턴은 열네 살이었고, 작은 시골 마을에 살았어요.",
        },
        {
          id: "ofg-2",
          text: "One winter day, she took the train to the city to visit her friend Fanny Shaw.",
          translation:
            "어느 겨울날, 폴리는 친구 패니 쇼를 만나러 기차를 타고 도시로 갔어요.",
        },
        {
          id: "ofg-3",
          text: "It was Polly's first visit, and she felt shy and a little afraid.",
          translation: "폴리에게는 첫 방문이어서, 수줍고 조금 겁이 났어요.",
        },
      ],
      [
        {
          id: "ofg-4",
          text: "Fanny met her at the busy station.",
          translation: "패니가 붐비는 역으로 폴리를 마중 나왔어요.",
        },
        {
          id: "ofg-5",
          text: "The two girls were the same age, but they did not look the same at all.",
          translation: "두 소녀는 나이가 같았지만, 겉모습은 전혀 달랐어요.",
        },
        {
          id: "ofg-6",
          text: "Fanny wore a long fashionable coat, a fur hat, and high-heeled boots.",
          translation:
            "패니는 길고 유행하는 외투에 털모자를 쓰고, 굽 높은 부츠를 신고 있었어요.",
        },
      ],
      [
        {
          id: "ofg-7",
          text: "Polly wore a simple grey coat and a plain round hat, and her boots were made for walking.",
          translation:
            "폴리는 수수한 회색 외투에 평범한 둥근 모자를 쓰고 있었고, 부츠는 걷기에 편한 것이었어요.",
        },
        {
          id: "ofg-8",
          text: "Fanny looked like a young lady. Polly still looked like a little girl.",
          translation: "패니는 젊은 숙녀처럼 보였어요. 폴리는 아직 어린아이처럼 보였고요.",
        },
        {
          id: "ofg-9",
          text: "The Shaws' house was tall and grand, with thick carpets and many fine things.",
          translation:
            "쇼 씨네 집은 높고 으리으리했으며, 두꺼운 카펫과 값진 물건이 많았어요.",
        },
      ],
      [
        {
          id: "ofg-10",
          text: "Polly had never stayed in such a house before.",
          translation: "폴리는 그런 집에 머물러 본 적이 한 번도 없었어요.",
        },
        {
          id: "ofg-11",
          text: "At dinner she met the whole family.",
          translation: "저녁 식사 자리에서 폴리는 온 가족을 만났어요.",
        },
        {
          id: "ofg-12",
          text: "Mr. and Mrs. Shaw were polite but busy, and did not say much to her.",
          translation:
            "쇼 씨 부부는 예의는 발랐지만 바빴고, 폴리에게 말을 많이 걸지 않았어요.",
        },
      ],
      [
        {
          id: "ofg-13",
          text: "Maud, the youngest child, stared at Polly's plain dress and asked why it was so old-fashioned.",
          translation:
            "막내인 모드는 폴리의 수수한 옷을 빤히 쳐다보며 왜 그렇게 구식이냐고 물었어요.",
        },
        {
          id: "ofg-14",
          text: "Tom, who was sixteen, laughed and teased Polly until her face turned red.",
          translation:
            "열여섯 살인 톰은 웃으면서 폴리의 얼굴이 빨개질 때까지 놀려 댔어요.",
        },
        {
          id: "ofg-15",
          text: "Only Grandma Shaw was truly kind; she smiled at Polly and made room for her by the fire.",
          translation:
            "오직 쇼 할머니만이 진심으로 다정했어요. 할머니는 폴리에게 미소 지으며 난롯가에 자리를 내주었어요.",
        },
      ],
      [
        {
          id: "ofg-16",
          text: "That night, alone in a strange room, Polly felt homesick and cried a little.",
          translation:
            "그날 밤, 낯선 방에 혼자 있으니 폴리는 집이 그리워 조금 울었어요.",
        },
        {
          id: "ofg-17",
          text: "But she remembered her mother's advice — to be herself — and she fell asleep feeling braver.",
          translation:
            "하지만 폴리는 그저 자기 자신답게 지내라던 엄마의 말을 떠올렸고, 조금 더 용감해진 기분으로 잠이 들었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "ofg-v1",
        term: "fashionable",
        partOfSpeech: "adjective",
        translation: "유행하는, 멋을 낸",
        example: "Fanny wore a fashionable coat and a fur hat.",
        exampleTranslation: "패니는 유행하는 외투를 입고 털모자를 쓰고 있었어요.",
      },
      {
        id: "ofg-v2",
        term: "grand",
        partOfSpeech: "adjective",
        translation: "웅장한, 으리으리한",
        example: "The Shaws' house was tall and grand.",
        exampleTranslation: "쇼 씨네 집은 높고 으리으리했어요.",
      },
      {
        id: "ofg-v3",
        term: "old-fashioned",
        partOfSpeech: "adjective",
        translation: "구식의, 옛날식의",
        example: "Maud asked why Polly's dress was so old-fashioned.",
        exampleTranslation: "모드는 폴리의 옷이 왜 그렇게 구식이냐고 물었어요.",
      },
      {
        id: "ofg-v4",
        term: "tease",
        partOfSpeech: "verb",
        translation: "놀리다, 장난치다",
        example: "Tom teased Polly until her face turned red.",
        exampleTranslation: "톰은 폴리의 얼굴이 빨개질 때까지 놀렸어요.",
      },
      {
        id: "ofg-v5",
        term: "homesick",
        partOfSpeech: "adjective",
        translation: "집을 그리워하는, 향수병에 걸린",
        example: "Alone in a strange room, Polly felt homesick.",
        exampleTranslation: "낯선 방에 혼자 있으니 폴리는 집이 그리웠어요.",
      },
    ],
    questions: [
      {
        id: "ofg-q1",
        prompt: "How were Polly and Fanny different when they met at the station?",
        options: [
          "Fanny was several years older than Polly.",
          "Polly was dressed in the latest fashion, while Fanny wore plain country clothes.",
          "They were the same age, but Fanny looked like a young lady while Polly still looked like a little girl.",
          "Polly did not recognise Fanny at all.",
        ],
        correctIndex: 2,
        explanation:
          "The two girls were the same age, but Fanny wore a fashionable coat, a fur hat, and high-heeled boots and looked like a young lady, while Polly's plain grey coat and sensible walking boots made her still look like a child.",
      },
      {
        id: "ofg-q2",
        prompt: "How did the Shaw children treat Polly on her first evening?",
        options: [
          "They welcomed her warmly and showed her around the house.",
          "Maud stared at her old-fashioned dress, and Tom teased her until she blushed.",
          "They ignored her completely and would not speak to her.",
          "They gave her presents and asked all about her town.",
        ],
        correctIndex: 1,
        explanation:
          "Maud, the youngest, stared at Polly's plain dress and asked why it was so old-fashioned, and sixteen-year-old Tom laughed and teased her until her face turned red.",
      },
      {
        id: "ofg-q3",
        prompt: "Who was kind to Polly, and how did the first night end?",
        options: [
          "Mrs. Shaw was kind, and Polly slept happily at once.",
          "Fanny was kind, and the two girls stayed up talking all night.",
          "No one was kind, and Polly went home the next morning.",
          "Only Grandma Shaw was kind; Polly felt homesick and cried, but remembered her mother's advice and felt braver.",
        ],
        correctIndex: 3,
        explanation:
          "Only Grandma Shaw was truly kind, smiling at Polly and making room for her by the fire; alone in a strange room that night Polly felt homesick and cried a little, but she remembered her mother's advice to be herself and fell asleep feeling braver.",
      },
    ],
  },
  {
    slug: "agnes-grey",
    title: "Agnes Grey",
    titleTranslation: "아그네스 그레이",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Anne Brontë (1820–1849)",
    coverEmoji: "✒️",
    coverImage: "/covers/agnes-grey.svg",
    source:
      "Adapted from Chapter 1 (\"The Parsonage\") of Anne Brontë's novel \"Agnes Grey\" (first published 1847; long in the public domain, Project Gutenberg #767). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain how the Grey family lost their money and what Agnes decided to do about it.",
    paragraphs: [
      [
        {
          id: "agr-1",
          text: "Agnes Grey was the younger of two daughters of a poor clergyman in the north of England.",
          translation:
            "애그니스 그레이는 잉글랜드 북부의 가난한 목사의 두 딸 중 동생이었어요.",
        },
        {
          id: "agr-2",
          text: "Her father had only a small church and a small income.",
          translation: "아버지에게는 작은 교회와 적은 수입밖에 없었어요.",
        },
        {
          id: "agr-3",
          text: "Her mother came from a rich family, but she had given up her fortune to marry the man she loved.",
          translation:
            "어머니는 부유한 집안 출신이었지만, 사랑하는 남자와 결혼하려고 자기 재산을 포기했어요.",
        },
      ],
      [
        {
          id: "agr-4",
          text: "The Greys had little money, and yet their home was a happy one.",
          translation: "그레이 가족은 돈이 별로 없었지만, 그 집은 행복한 가정이었어요.",
        },
        {
          id: "agr-5",
          text: "Because Agnes was the youngest, everyone treated her as a child and let her do very little.",
          translation:
            "애그니스가 막내였기 때문에, 모두가 그녀를 어린애처럼 대하며 거의 아무 일도 시키지 않았어요.",
        },
        {
          id: "agr-6",
          text: "She longed to be thought grown-up and useful.",
          translation: "그녀는 어른스럽고 쓸모 있는 사람으로 여겨지기를 간절히 바랐어요.",
        },
      ],
      [
        {
          id: "agr-7",
          text: "One year, her father tried to make the family richer.",
          translation: "어느 해, 아버지는 가족을 더 잘살게 해 보려고 했어요.",
        },
        {
          id: "agr-8",
          text: "He gave all his savings to a merchant friend, who promised to trade with the money and share the profit.",
          translation:
            "그는 저축한 돈을 몽땅 상인인 친구에게 맡겼고, 그 친구는 그 돈으로 무역을 해서 이익을 나누겠다고 약속했어요.",
        },
        {
          id: "agr-9",
          text: "But the ship carrying the goods was lost at sea, and every penny went with it.",
          translation:
            "하지만 물건을 싣고 가던 배가 바다에서 침몰했고, 한 푼도 남김없이 사라졌어요.",
        },
      ],
      [
        {
          id: "agr-10",
          text: "Agnes's father blamed himself, and the worry made him ill.",
          translation: "애그니스의 아버지는 스스로를 탓했고, 그 근심 때문에 병이 났어요.",
        },
        {
          id: "agr-11",
          text: "Now the family had to live on very little indeed.",
          translation: "이제 가족은 정말 얼마 안 되는 돈으로 살아야 했어요.",
        },
        {
          id: "agr-12",
          text: "Mary, the elder sister, sold her drawings to earn a little money.",
          translation: "언니 메리는 자기 그림을 팔아 얼마간의 돈을 벌었어요.",
        },
      ],
      [
        {
          id: "agr-13",
          text: "Agnes wanted to help too, so she made a bold decision: she would become a governess.",
          translation:
            "애그니스도 돕고 싶어서 대담한 결심을 했어요. 가정교사가 되기로 한 거예요.",
        },
        {
          id: "agr-14",
          text: "She would go to live with a rich family and teach their young children for pay.",
          translation:
            "부잣집에 들어가 살면서 그 집 어린아이들을 가르치고 돈을 받겠다는 것이었어요.",
        },
        {
          id: "agr-15",
          text: "Her mother and Mary said she was too young and knew too little of the world.",
          translation:
            "어머니와 메리는 그녀가 너무 어리고 세상 물정을 너무 모른다고 말했어요.",
        },
      ],
      [
        {
          id: "agr-16",
          text: "But Agnes promised she could learn, and at last they agreed to let her try.",
          translation:
            "하지만 애그니스는 배우면 된다고 약속했고, 마침내 두 사람도 한번 해 보라고 허락했어요.",
        },
        {
          id: "agr-17",
          text: "Secretly she was full of hope, glad to be earning her own bread and eager to see life beyond her quiet home.",
          translation:
            "속으로 그녀는 희망에 부풀어 있었어요. 자기 힘으로 밥벌이를 한다는 것이 기뻤고, 조용한 집 너머의 세상을 보고 싶어 마음이 들떴지요.",
        },
      ],
    ],
    vocab: [
      {
        id: "agr-v1",
        term: "clergyman",
        partOfSpeech: "noun",
        translation: "성직자, 목사",
        example: "Her father was a country clergyman with a small church.",
        exampleTranslation: "그녀의 아버지는 작은 교회를 맡은 시골 목사였어요.",
      },
      {
        id: "agr-v2",
        term: "fortune",
        partOfSpeech: "noun",
        translation: "재산, 부; 큰돈",
        example: "Her mother gave up a fortune to marry for love.",
        exampleTranslation: "그녀의 어머니는 사랑을 위해 큰 재산을 포기하고 결혼했어요.",
      },
      {
        id: "agr-v3",
        term: "merchant",
        partOfSpeech: "noun",
        translation: "상인, 무역상",
        example: "He trusted his savings to a merchant friend.",
        exampleTranslation: "그는 저축한 돈을 상인인 친구에게 믿고 맡겼어요.",
      },
      {
        id: "agr-v4",
        term: "governess",
        partOfSpeech: "noun",
        translation: "(입주) 가정교사 (부잣집에 살며 아이들을 가르침)",
        example: "Agnes decided to go out as a governess.",
        exampleTranslation: "애그니스는 가정교사로 나가기로 마음먹었어요.",
      },
      {
        id: "agr-v5",
        term: "bold",
        partOfSpeech: "adjective",
        translation: "대담한, 용감한",
        example: "Becoming a governess was a bold decision for such a young girl.",
        exampleTranslation: "가정교사가 되는 것은 그렇게 어린 소녀에게 대담한 결심이었어요.",
      },
    ],
    questions: [
      {
        id: "agr-q1",
        prompt: "How did the Grey family lose most of their money?",
        options: [
          "Agnes's father spent it all on books and travel.",
          "Her father gave his savings to a merchant friend, and the ship carrying the goods was lost at sea.",
          "Her mother's rich family took back the fortune.",
          "Mary's drawings failed to sell at the market.",
        ],
        correctIndex: 1,
        explanation:
          "Agnes's father, hoping to make the family richer, gave all his savings to a merchant friend to trade with; the ship carrying the goods sank, every penny was lost, and the worry made him ill.",
      },
      {
        id: "agr-q2",
        prompt: "Why did Agnes decide to become a governess?",
        options: [
          "Her mother ordered her to leave home and earn money.",
          "She disliked her sister Mary and wanted to get away from her.",
          "A rich family had already written to offer her a place.",
          "She wanted to help the family and to be treated as grown-up and useful.",
        ],
        correctIndex: 3,
        explanation:
          "Agnes had always been treated as the baby of the family and longed to be thought grown-up and useful; when money grew short, she made the bold decision to go out as a governess so she could earn her own money and prove herself.",
      },
      {
        id: "agr-q3",
        prompt: "How did Agnes's mother and sister first react to her plan?",
        options: [
          "They were delighted and helped her pack at once.",
          "They said she was too young and knew too little of the world, but at last agreed to let her try.",
          "They forbade it completely and never changed their minds.",
          "They decided to become governesses as well.",
        ],
        correctIndex: 1,
        explanation:
          "Her mother and Mary thought Agnes was too young and too inexperienced for such work, but she promised she could learn, and in the end they agreed to let her try.",
      },
    ],
  },
  {
    slug: "the-enchanted-april",
    title: "The Enchanted April",
    titleTranslation: "마법에 걸린 사월",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Elizabeth von Arnim (1866–1941)",
    coverEmoji: "🌸",
    coverImage: "/covers/the-enchanted-april.svg",
    source:
      "Adapted from Chapter 1 of Elizabeth von Arnim's novel \"The Enchanted April\" (first published 1922; in the public domain, Project Gutenberg #16389). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe the advertisement Mrs. Wilkins saw and the bold suggestion she made to Mrs. Arbuthnot.",
    paragraphs: [
      [
        {
          id: "tea-1",
          text: "It was a wet, grey afternoon in February, and Mrs. Wilkins was sitting alone in her London ladies' club.",
          translation:
            "2월의 비 내리는 잿빛 오후였고, 윌킨스 부인은 런던의 여성 클럽에 혼자 앉아 있었어요.",
        },
        {
          id: "tea-2",
          text: "She felt small and tired, and she did not expect anything good to happen.",
          translation:
            "그녀는 자신이 작고 초라하게 느껴졌고, 좋은 일이 생기리라고는 기대하지 않았어요.",
        },
        {
          id: "tea-3",
          text: "Then she opened The Times and saw a strange advertisement.",
          translation: "그때 그녀는 《타임스》를 펼쳤고, 이상한 광고 하나를 보았어요.",
        },
      ],
      [
        {
          id: "tea-4",
          text: "A small medieval castle in Italy, close to the sea, was for rent for the month of April.",
          translation:
            "바닷가에 있는 이탈리아의 작은 중세 성을, 4월 한 달 동안 빌려준다는 것이었어요.",
        },
        {
          id: "tea-5",
          text: "It was offered \"to those who love wistaria and sunshine.\"",
          translation: "그 성은 \"등나무 꽃과 햇살을 사랑하는 분들께\" 내놓은 것이었어요.",
        },
        {
          id: "tea-6",
          text: "The words made Mrs. Wilkins ache with longing.",
          translation: "그 문구는 윌킨스 부인의 마음을 간절한 그리움으로 아리게 했어요.",
        },
      ],
      [
        {
          id: "tea-7",
          text: "She thought of cold, grey Hampstead, where she lived.",
          translation: "그녀는 자기가 사는, 춥고 잿빛인 햄스테드를 떠올렸어요.",
        },
        {
          id: "tea-8",
          text: "She thought of her husband, Mellersh, a lawyer who counted every penny and never praised her.",
          translation:
            "그녀는 남편 멜러시를 떠올렸는데, 그는 한 푼까지 따지고 아내를 한 번도 칭찬하지 않는 변호사였어요.",
        },
        {
          id: "tea-9",
          text: "She never spent money on herself, and she never did anything just because she wished to.",
          translation:
            "그녀는 자신을 위해 돈을 쓰는 법이 없었고, 그저 하고 싶다는 이유로 무언가를 하는 일도 없었어요.",
        },
      ],
      [
        {
          id: "tea-10",
          text: "Looking up, she saw another woman across the room reading the very same page.",
          translation:
            "고개를 들자, 방 건너편에서 바로 그 같은 지면을 읽고 있는 또 다른 여자가 보였어요.",
        },
        {
          id: "tea-11",
          text: "It was Mrs. Arbuthnot, whom she knew a little from their church at home.",
          translation:
            "그 여자는 고향 교회에서 조금 알고 지내던 아버스넛 부인이었어요.",
        },
        {
          id: "tea-12",
          text: "Mrs. Arbuthnot had the same hungry look on her face.",
          translation: "아버스넛 부인의 얼굴에도 똑같이 무언가를 갈망하는 표정이 떠올라 있었어요.",
        },
      ],
      [
        {
          id: "tea-13",
          text: "Then Mrs. Wilkins did something she had never done before: she walked over and spoke to her.",
          translation:
            "그때 윌킨스 부인은 한 번도 해 본 적 없는 일을 했어요. 그 여자에게 걸어가 말을 건 거예요.",
        },
        {
          id: "tea-14",
          text: "\"What if we took that castle together for April,\" she said, \"and asked two more ladies to share the cost?\"",
          translation:
            "\"우리 둘이 4월에 저 성을 함께 빌리고, 다른 부인 두 사람을 더 구해서 비용을 나누면 어떨까요?\" 그녀가 말했어요.",
        },
        {
          id: "tea-15",
          text: "Mrs. Arbuthnot was startled and said it was impossible — the money, the husbands, the sheer folly of it.",
          translation:
            "아버스넛 부인은 깜짝 놀라며, 그건 불가능하다고 말했어요. 돈도 그렇고, 남편들도 그렇고, 도무지 터무니없는 짓이라고요.",
        },
      ],
      [
        {
          id: "tea-16",
          text: "But she could not put the idea out of her mind either.",
          translation: "하지만 그녀 역시 그 생각을 머릿속에서 떨쳐낼 수가 없었어요.",
        },
        {
          id: "tea-17",
          text: "By the time the rain stopped, the two near-strangers had almost agreed to run away to Italy.",
          translation:
            "비가 그칠 무렵, 서로 거의 남남이던 두 사람은 이탈리아로 떠나기로 거의 마음을 정하고 있었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "tea-v1",
        term: "advertisement",
        partOfSpeech: "noun",
        translation: "광고",
        example: "She read the advertisement twice, hardly believing it.",
        exampleTranslation: "그녀는 그 광고를 두 번 읽으며 좀처럼 믿지 못했어요.",
      },
      {
        id: "tea-v2",
        term: "medieval",
        partOfSpeech: "adjective",
        translation: "중세의",
        example: "The castle was a small medieval one, close to the sea.",
        exampleTranslation: "그 성은 바닷가에 있는 작은 중세 성이었어요.",
      },
      {
        id: "tea-v3",
        term: "longing",
        partOfSpeech: "noun",
        translation: "갈망, 간절한 그리움",
        example: "The words filled her with a sudden longing for sunshine.",
        exampleTranslation: "그 문구는 그녀를 햇살에 대한 갑작스러운 갈망으로 가득 채웠어요.",
      },
      {
        id: "tea-v4",
        term: "folly",
        partOfSpeech: "noun",
        translation: "어리석음, 어리석은 짓",
        example: "Mrs. Arbuthnot called the whole plan sheer folly.",
        exampleTranslation: "아버스넛 부인은 그 계획 전체를 순전한 어리석음이라고 불렀어요.",
      },
      {
        id: "tea-v5",
        term: "startled",
        partOfSpeech: "adjective",
        translation: "깜짝 놀란",
        example: "Mrs. Arbuthnot was startled by the sudden question.",
        exampleTranslation: "아버스넛 부인은 갑작스러운 질문에 깜짝 놀랐어요.",
      },
    ],
    questions: [
      {
        id: "tea-q1",
        prompt: "What did the advertisement in The Times offer?",
        options: [
          "A cottage in the English countryside for the whole summer.",
          "A small medieval Italian castle by the sea, to rent for the month of April.",
          "Cheap tickets on a train to the south of France.",
          "A post as a lady companion to a family in Italy.",
        ],
        correctIndex: 1,
        explanation:
          "The advertisement offered a small medieval castle in Italy, close to the sea, for rent for the month of April, \"to those who love wistaria and sunshine\" — and the words filled Mrs. Wilkins with longing.",
      },
      {
        id: "tea-q2",
        prompt: "Why did the advertisement affect Mrs. Wilkins so strongly?",
        options: [
          "She had visited that very castle as a child.",
          "She was looking for somewhere to move to permanently.",
          "Her life in grey Hampstead was joyless, with a penny-counting husband and nothing she ever did for herself.",
          "She wanted to buy the castle and sell it again for a profit.",
        ],
        correctIndex: 2,
        explanation:
          "Mrs. Wilkins thought of cold, grey Hampstead, of her husband Mellersh who counted every penny and never praised her, and of how she never spent money on herself or did anything simply because she wished to.",
      },
      {
        id: "tea-q3",
        prompt: "What did Mrs. Wilkins do about it?",
        options: [
          "She wrote to the castle's owner on her own.",
          "She decided it was folly and put it out of her mind.",
          "She asked her husband for the money to go.",
          "She spoke to Mrs. Arbuthnot, a near-stranger, and suggested they rent the castle together and find two more ladies to share the cost.",
        ],
        correctIndex: 3,
        explanation:
          "Seeing Mrs. Arbuthnot reading the same advertisement with the same hungry look, Mrs. Wilkins did something quite unlike her — she went over and proposed that the two of them take the castle for April and ask two more ladies to share the cost; by the time the rain stopped they had almost agreed.",
      },
    ],
  },
  {
    slug: "little-women-jo-and-amy",
    title: "Little Women: Jo and Amy",
    titleTranslation: "작은 아씨들: 조와 에이미",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Louisa May Alcott (1832–1888)",
    coverEmoji: "📓",
    coverImage: "/covers/little-women-jo-and-amy.svg",
    source:
      "Adapted from Chapter 8 (\"Jo Meets Apollyon\") of Louisa May Alcott's novel \"Little Women\" (first published 1868; long in the public domain, Project Gutenberg #37106). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what Amy did to Jo, and what nearly happened on the ice as a result of Jo's anger.",
    paragraphs: [
      [
        {
          id: "lwa-1",
          text: "One winter afternoon, Jo and Meg were going to the theatre with their friend Laurie.",
          translation:
            "어느 겨울 오후, 조와 메그는 친구 로리와 함께 극장에 가려던 참이었어요.",
        },
        {
          id: "lwa-2",
          text: "Their youngest sister, Amy, wanted to come too, but Jo said sharply that she could not.",
          translation:
            "막내 여동생 에이미도 따라가고 싶어 했지만, 조는 안 된다고 퉁명스럽게 말했어요.",
        },
        {
          id: "lwa-3",
          text: "Amy was hurt and angry. \"You'll be sorry for this, Jo!\" she called.",
          translation:
            "에이미는 마음이 상하고 화가 났어요. \"조, 언니 이 일을 후회하게 될 거야!\" 에이미가 소리쳤어요.",
        },
      ],
      [
        {
          id: "lwa-4",
          text: "While the others were out, Amy did a terrible thing.",
          translation: "다른 사람들이 나가 있는 동안, 에이미는 끔찍한 짓을 저질렀어요.",
        },
        {
          id: "lwa-5",
          text: "Jo had spent years writing a book of stories by hand, a manuscript she loved more than almost anything she owned.",
          translation:
            "조는 몇 년에 걸쳐 손으로 이야기책 한 권을 써 왔는데, 그 원고를 자기가 가진 그 무엇보다 아꼈어요.",
        },
        {
          id: "lwa-6",
          text: "Amy took the book and burned every page in the fire.",
          translation: "에이미는 그 책을 가져다 한 장도 남김없이 불 속에 태워 버렸어요.",
        },
      ],
      [
        {
          id: "lwa-7",
          text: "When Jo came home and found the burnt pages, her manuscript — the work of years — was gone, and it could never be written again.",
          translation:
            "조가 집에 돌아와 타 버린 종이를 발견했을 때, 몇 년에 걸친 작업인 그 원고는 사라졌고, 다시는 쓸 수 없게 되었어요.",
        },
        {
          id: "lwa-8",
          text: "She shook Amy hard and shouted that she would never forgive her.",
          translation: "조는 에이미를 세게 흔들며 절대로 용서하지 않겠다고 소리쳤어요.",
        },
        {
          id: "lwa-9",
          text: "Amy was truly sorry, but being sorry could not bring the stories back.",
          translation:
            "에이미는 진심으로 뉘우쳤지만, 뉘우친다고 해서 이야기가 되돌아오지는 않았어요.",
        },
      ],
      [
        {
          id: "lwa-10",
          text: "That evening their mother told Jo, gently, not to let the sun go down on her anger.",
          translation:
            "그날 저녁 어머니는 조에게 화를 품은 채로 해가 지게 하지 말라고 다정하게 타일렀어요.",
        },
        {
          id: "lwa-11",
          text: "But Jo's heart was still hard the next morning, when she went skating on the river with Laurie.",
          translation:
            "하지만 이튿날 아침 로리와 강으로 스케이트를 타러 갔을 때에도 조의 마음은 여전히 굳어 있었어요.",
        },
        {
          id: "lwa-12",
          text: "Amy followed them, hoping to make peace.",
          translation: "에이미는 화해하고 싶어서 두 사람을 뒤따라갔어요.",
        },
      ],
      [
        {
          id: "lwa-13",
          text: "Jo heard Laurie call out that the ice in the middle of the river was thin.",
          translation:
            "조는 강 한가운데의 얼음이 얇다고 로리가 외치는 소리를 들었어요.",
        },
        {
          id: "lwa-14",
          text: "She was still so angry that she did not pass the warning on to Amy.",
          translation:
            "조는 아직도 너무 화가 나서 그 경고를 에이미에게 전해 주지 않았어요.",
        },
        {
          id: "lwa-15",
          text: "A moment later there was a crack and a cry: Amy had fallen through the ice.",
          translation:
            "잠시 뒤 쩍 하는 소리와 비명이 들렸어요. 에이미가 얼음이 깨져 물에 빠진 거예요.",
        },
      ],
      [
        {
          id: "lwa-16",
          text: "Jo and Laurie pulled her out, cold and frightened but safe.",
          translation:
            "조와 로리는 에이미를 끌어냈고, 에이미는 춥고 겁에 질렸지만 무사했어요.",
        },
        {
          id: "lwa-17",
          text: "That night, shaking, Jo told her mother that her temper had nearly killed her sister — and she promised to learn to control it.",
          translation:
            "그날 밤 조는 몸을 떨며, 자기 성질 때문에 동생이 죽을 뻔했다고 어머니에게 말했어요. 그리고 그 성질을 다스리는 법을 배우겠다고 약속했어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "lwa-v1",
        term: "sharply",
        partOfSpeech: "adverb",
        translation: "쌀쌀맞게, 퉁명스럽게; 날카롭게",
        example: "Jo answered sharply that Amy could not come.",
        exampleTranslation: "조는 에이미는 올 수 없다고 퉁명스럽게 대답했어요.",
      },
      {
        id: "lwa-v2",
        term: "manuscript",
        partOfSpeech: "noun",
        translation: "원고, 손으로 쓴 글",
        example: "Her manuscript was years of work, all in one little book.",
        exampleTranslation: "그녀의 원고는 작은 책 한 권에 담긴 몇 년간의 작업이었어요.",
      },
      {
        id: "lwa-v3",
        term: "forgive",
        partOfSpeech: "verb",
        translation: "용서하다",
        example: "Jo said she would never forgive Amy.",
        exampleTranslation: "조는 에이미를 절대 용서하지 않겠다고 말했어요.",
      },
      {
        id: "lwa-v4",
        term: "warning",
        partOfSpeech: "noun",
        translation: "경고, 주의",
        example: "Jo did not pass Laurie's warning on to her sister.",
        exampleTranslation: "조는 로리의 경고를 동생에게 전해 주지 않았어요.",
      },
      {
        id: "lwa-v5",
        term: "temper",
        partOfSpeech: "noun",
        translation: "성질, 화, 울화",
        example: "Jo's temper had nearly cost Amy her life.",
        exampleTranslation: "조의 성질 때문에 에이미가 목숨을 잃을 뻔했어요.",
      },
    ],
    questions: [
      {
        id: "lwa-q1",
        prompt: "Why did Amy burn Jo's manuscript?",
        options: [
          "She thought the stories were badly written.",
          "She was angry that Jo had refused to take her to the theatre.",
          "She needed paper to light the fire.",
          "Their mother had told her to destroy it.",
        ],
        correctIndex: 1,
        explanation:
          "Amy had begged to go to the theatre with Jo, Meg, and Laurie; when Jo sharply refused, Amy warned her she would be sorry, and while the others were out she took Jo's beloved manuscript and burned every page.",
      },
      {
        id: "lwa-q2",
        prompt: "Why could Jo not simply forgive Amy?",
        options: [
          "Amy refused to say that she was sorry.",
          "Their mother forbade Jo to make peace with her.",
          "Jo did not really care about the book anyway.",
          "The manuscript was the work of years and could never be written again.",
        ],
        correctIndex: 3,
        explanation:
          "Jo had spent years writing the stories by hand and loved the manuscript more than almost anything she owned; once the pages were burned, the work was gone forever, and Amy's being sorry could not bring it back.",
      },
      {
        id: "lwa-q3",
        prompt: "What happened while Jo and Amy were skating, and what did Jo learn?",
        options: [
          "Amy skated home early, and Jo felt relieved to be rid of her.",
          "Laurie fell through the ice, and Jo saved him.",
          "Jo, still angry, did not warn Amy about the thin ice; Amy fell through, was rescued, and Jo saw that her temper had nearly killed her sister.",
          "The ice held firm, and the sisters made up on the river.",
        ],
        correctIndex: 2,
        explanation:
          "Jo heard Laurie warn that the ice in the middle was thin but, still angry, did not pass the warning to Amy; Amy fell through, Jo and Laurie pulled her out safely, and that night a shaken Jo told her mother her temper had nearly cost Amy her life and promised to learn to control it.",
      },
    ],
  },
  {
    slug: "the-tenant-of-wildfell-hall",
    title: "The Tenant of Wildfell Hall",
    titleTranslation: "와일드펠 홀의 세입자",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Anne Brontë (1820–1849)",
    coverEmoji: "🏚️",
    coverImage: "/covers/the-tenant-of-wildfell-hall.svg",
    source:
      "Adapted from Chapter 1 (\"A Discovery\") of Anne Brontë's novel \"The Tenant of Wildfell Hall\" (first published 1848; long in the public domain, Project Gutenberg #969). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe the new tenant of Wildfell Hall and why she set the whole parish talking.",
    paragraphs: [
      [
        {
          id: "twh-1",
          text: "In the autumn of 1827, the talk of our quiet country neighbourhood was all of one thing: Wildfell Hall had a tenant at last.",
          translation:
            "1827년 가을, 조용한 우리 시골 동네의 화제는 온통 한 가지였어요. 마침내 와일드펠 홀에 세입자가 들었다는 것이었지요.",
        },
        {
          id: "twh-2",
          text: "The Hall was an old, dark house of Elizabeth's time, standing alone on a windy hill above the village.",
          translation:
            "그 홀은 엘리자베스 여왕 시대의 오래되고 어두운 집으로, 마을 위 바람 부는 언덕에 홀로 서 있었어요.",
        },
        {
          id: "twh-3",
          text: "It had stood empty and half ruined for many years, and children were afraid to go near it after dark.",
          translation:
            "여러 해 동안 비어 반쯤 허물어진 채였고, 아이들은 날이 저물면 그 근처에 가기를 무서워했어요.",
        },
      ],
      [
        {
          id: "twh-4",
          text: "Now a single lady had taken a few of its rooms and moved in quietly, with one old servant and a young child.",
          translation:
            "그런데 한 부인이 그 집의 방 몇 개를 빌려, 나이 많은 하인 한 명과 어린아이 하나를 데리고 조용히 이사해 온 것이었어요.",
        },
        {
          id: "twh-5",
          text: "Her name was Mrs. Graham, and she said she was a widow.",
          translation:
            "그녀의 이름은 그레이엄 부인이었고, 자신이 미망인이라고 했어요.",
        },
        {
          id: "twh-6",
          text: "She kept entirely to herself, saw no visitors, and gave no account of where she had come from.",
          translation:
            "그녀는 완전히 혼자 지냈고, 손님을 만나지 않았으며, 어디서 왔는지도 전혀 밝히지 않았어요.",
        },
      ],
      [
        {
          id: "twh-7",
          text: "Naturally, this was enough to set every tongue in the parish moving.",
          translation: "당연히 이것만으로도 교구의 모든 입이 움직이기에 충분했어요.",
        },
        {
          id: "twh-8",
          text: "My mother, my sister Rose, and the vicar's wife discussed her endlessly over their tea.",
          translation:
            "어머니와 누이 로즈, 그리고 목사의 부인은 차를 마시며 그녀 이야기를 끝없이 했어요.",
        },
        {
          id: "twh-9",
          text: "Some pitied her; some thought her proud; a few hinted that a woman so secret must have something to hide.",
          translation:
            "어떤 이는 그녀를 딱하게 여겼고, 어떤 이는 그녀가 도도하다고 생각했으며, 몇몇은 저렇게 비밀스러운 여자라면 숨기는 것이 있을 거라고 넌지시 말했어요.",
        },
      ],
      [
        {
          id: "twh-10",
          text: "I told them I had no interest in the matter, which was not quite true.",
          translation:
            "나는 그 일에 관심 없다고 말했지만, 그것은 사실이 아니었어요.",
        },
        {
          id: "twh-11",
          text: "I first saw her the following Sunday, at church.",
          translation: "나는 그다음 일요일에 교회에서 그녀를 처음 보았어요.",
        },
        {
          id: "twh-12",
          text: "She sat apart, dressed plainly in black, with her little boy close beside her.",
          translation:
            "그녀는 검은 옷을 수수하게 입고 어린 아들을 바짝 곁에 둔 채, 사람들과 떨어져 앉아 있었어요.",
        },
      ],
      [
        {
          id: "twh-13",
          text: "Her face was pale and rather stern, but it was a striking face, not easily forgotten.",
          translation:
            "그녀의 얼굴은 창백하고 다소 엄해 보였지만, 한번 보면 쉽게 잊히지 않는 인상적인 얼굴이었어요.",
        },
        {
          id: "twh-14",
          text: "She looked at no one and spoke to no one, and left as soon as the service ended.",
          translation:
            "그녀는 아무도 쳐다보지 않고 아무와도 말하지 않았으며, 예배가 끝나자마자 떠났어요.",
        },
        {
          id: "twh-15",
          text: "On the walk home, everyone had an opinion about her, and none of them was kind.",
          translation:
            "집으로 걸어오는 길에 모두가 그녀에 대해 한마디씩 했는데, 그중 다정한 말은 하나도 없었어요.",
        },
      ],
      [
        {
          id: "twh-16",
          text: "I found myself defending a woman I had never met, simply because the others were so sure of her faults.",
          translation:
            "나는 만난 적도 없는 여자를 변호하고 있는 나 자신을 발견했어요. 그저 다른 사람들이 그녀의 흠을 너무 확신했기 때문이었지요.",
        },
        {
          id: "twh-17",
          text: "Wildfell Hall and its silent tenant had caught my curiosity, and I could not quite let them go.",
          translation:
            "와일드펠 홀과 그 말 없는 세입자는 내 호기심을 사로잡았고, 나는 그것을 좀처럼 떨쳐 버릴 수 없었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "twh-v1",
        term: "tenant",
        partOfSpeech: "noun",
        translation: "세입자, 임차인",
        example: "The Hall had stood empty until a new tenant arrived.",
        exampleTranslation: "그 홀은 새 세입자가 오기 전까지 비어 있었어요.",
      },
      {
        id: "twh-v2",
        term: "widow",
        partOfSpeech: "noun",
        translation: "미망인, 과부",
        example: "Mrs. Graham told the neighbours she was a widow.",
        exampleTranslation: "그레이엄 부인은 이웃들에게 자신이 미망인이라고 말했어요.",
      },
      {
        id: "twh-v3",
        term: "parish",
        partOfSpeech: "noun",
        translation: "(교회) 교구; 교구 사람들",
        example: "News of the stranger spread through the whole parish.",
        exampleTranslation: "낯선 이의 소식이 교구 전체에 퍼졌어요.",
      },
      {
        id: "twh-v4",
        term: "vicar",
        partOfSpeech: "noun",
        translation: "(영국 국교회의) 교구 목사",
        example: "The vicar's wife had the most to say about Mrs. Graham.",
        exampleTranslation: "그레이엄 부인에 대해 가장 말이 많았던 사람은 목사의 부인이었어요.",
      },
      {
        id: "twh-v5",
        term: "striking",
        partOfSpeech: "adjective",
        translation: "눈길을 끄는, 인상적인",
        example: "Pale and stern, hers was a striking face.",
        exampleTranslation: "창백하고 엄해 보이는 그녀의 얼굴은 인상적이었어요.",
      },
    ],
    questions: [
      {
        id: "twh-q1",
        prompt: "What was the whole neighbourhood talking about in the autumn of 1827?",
        options: [
          "A wedding at the village church.",
          "That Wildfell Hall, long empty, finally had a tenant — a private young widow.",
          "That the vicar was leaving the parish for good.",
          "A storm that had badly damaged the village.",
        ],
        correctIndex: 1,
        explanation:
          "Wildfell Hall, an old, dark Elizabethan house that had stood empty and half ruined for years, had at last been taken by a single lady, Mrs. Graham, who moved in quietly with one old servant and a young child.",
      },
      {
        id: "twh-q2",
        prompt: "Why did the neighbourhood gossip so much about Mrs. Graham?",
        options: [
          "She had insulted the vicar's wife in public.",
          "She was very rich and gave grand parties every week.",
          "She kept entirely to herself, saw no visitors, and would not say where she had come from.",
          "She had arrived with a large train of servants.",
        ],
        correctIndex: 2,
        explanation:
          "Mrs. Graham lived completely apart, received no visitors, and gave no account of her past; that secrecy was enough to set every tongue in the parish moving, with some pitying her and others sure she had something to hide.",
      },
      {
        id: "twh-q3",
        prompt: "How did Gilbert feel after seeing Mrs. Graham at church and hearing the others talk?",
        options: [
          "He agreed that she was proud and disliked her.",
          "He lost all interest in her and the Hall.",
          "He found himself defending a woman he had never met, and his curiosity was caught.",
          "He decided to warn her to leave the village.",
        ],
        correctIndex: 2,
        explanation:
          "Though Gilbert claimed to have no interest, the harsh certainty of the others made him defend a stranger; the mysterious Hall and its silent tenant had caught his curiosity, and he could not let the matter go.",
      },
    ],
  },
  {
    slug: "wives-and-daughters",
    title: "Wives and Daughters",
    titleTranslation: "아내들과 딸들",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Elizabeth Gaskell (1810–1865)",
    coverEmoji: "🌳",
    coverImage: "/covers/wives-and-daughters.svg",
    source:
      "Adapted from Chapter 1 (\"The Dawn of a Gala Day\") of Elizabeth Gaskell's novel \"Wives and Daughters\" (first published 1864–66; long in the public domain, Project Gutenberg #4274). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe Molly's first visit to the Towers and how the day ended.",
    paragraphs: [
      [
        {
          id: "wnd-1",
          text: "Molly Gibson was twelve years old, the only child of the country doctor at Hollingford.",
          translation:
            "몰리 깁슨은 열두 살이었고, 홀링퍼드의 시골 의사에게 하나뿐인 자식이었어요.",
        },
        {
          id: "wnd-2",
          text: "Her mother had died when she was a baby, and she and her father were everything to each other.",
          translation:
            "어머니는 그녀가 갓난아기일 때 세상을 떠났고, 몰리와 아버지는 서로에게 전부였어요.",
        },
        {
          id: "wnd-3",
          text: "Once a year, the great family at the Towers opened their park to the respectable ladies of the town.",
          translation:
            "일 년에 한 번, 타워스 저택의 대단한 가문은 자기네 정원을 마을의 점잖은 부인들에게 열어 주었어요.",
        },
      ],
      [
        {
          id: "wnd-4",
          text: "This year, for the first time, Molly was to go too.",
          translation: "올해에는 처음으로 몰리도 가게 되었어요.",
        },
        {
          id: "wnd-5",
          text: "She woke long before dawn, too excited to sleep, and lay watching the light come.",
          translation:
            "그녀는 동트기 훨씬 전에 잠에서 깼는데, 너무 들떠서 잠을 이룰 수가 없어 빛이 밝아 오는 것을 누운 채 지켜보았어요.",
        },
        {
          id: "wnd-6",
          text: "She was dressed in her stiffest white frock and taken to the Towers in the Miss Brownings' carriage.",
          translation:
            "그녀는 가장 빳빳한 흰 원피스를 입고, 브라우닝 자매의 마차를 타고 타워스로 갔어요.",
        },
      ],
      [
        {
          id: "wnd-7",
          text: "The house was the grandest she had ever seen, and the gardens seemed to go on forever.",
          translation:
            "그 집은 그녀가 본 것 중 가장 웅장했고, 정원은 끝없이 이어지는 것 같았어요.",
        },
        {
          id: "wnd-8",
          text: "At first Molly was enchanted, wandering among the flowers and the smooth green lawns.",
          translation:
            "처음에 몰리는 넋을 잃고, 꽃들과 매끄러운 초록 잔디밭 사이를 거닐었어요.",
        },
        {
          id: "wnd-9",
          text: "But the day was very hot, the ladies talked over her head, and no one thought to give her any lunch.",
          translation:
            "하지만 날은 무척 더웠고, 부인들은 그녀의 머리 위로 이야기를 주고받았으며, 아무도 그녀에게 점심을 챙겨 줄 생각을 하지 않았어요.",
        },
      ],
      [
        {
          id: "wnd-10",
          text: "By the afternoon she was tired, dizzy, and close to tears.",
          translation: "오후가 되자 그녀는 지치고 어지럽고 금방이라도 울 것 같았어요.",
        },
        {
          id: "wnd-11",
          text: "She crept away to a quiet corner of the garden and fell asleep under a tree.",
          translation:
            "그녀는 정원의 조용한 구석으로 살그머니 가서 나무 아래에서 잠이 들었어요.",
        },
        {
          id: "wnd-12",
          text: "When she woke, the Hollingford carriages had gone home without her.",
          translation:
            "잠에서 깼을 때, 홀링퍼드의 마차들은 그녀를 두고 집으로 돌아가 버린 뒤였어요.",
        },
      ],
      [
        {
          id: "wnd-13",
          text: "A kind, pretty lady named Mrs. Kirkpatrick found her and brought her indoors.",
          translation:
            "커크패트릭 부인이라는 친절하고 어여쁜 여인이 그녀를 발견해 집 안으로 데리고 들어왔어요.",
        },
        {
          id: "wnd-14",
          text: "Mrs. Kirkpatrick gave her some food, settled her on a sofa — and then, caught up in the party, forgot about her completely.",
          translation:
            "커크패트릭 부인은 그녀에게 먹을 것을 주고 소파에 앉혀 주었지만, 이내 파티에 정신이 팔려 그녀를 까맣게 잊어버렸어요.",
        },
        {
          id: "wnd-15",
          text: "Evening came, and still no one had remembered to send Molly home.",
          translation:
            "저녁이 되었는데도 아무도 몰리를 집으로 보낼 생각을 하지 못했어요.",
        },
      ],
      [
        {
          id: "wnd-16",
          text: "At last a message reached Hollingford, and her father drove over himself to fetch her.",
          translation:
            "마침내 홀링퍼드로 전갈이 갔고, 아버지가 직접 마차를 몰고 그녀를 데리러 왔어요.",
        },
        {
          id: "wnd-17",
          text: "Molly's first grand day out had ended in hunger and neglect, but the sight of her father at the door made everything right again.",
          translation:
            "몰리의 첫 나들이는 배고픔과 홀대로 끝났지만, 문간에 선 아버지의 모습을 보자 모든 것이 다시 괜찮아졌어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "wnd-v1",
        term: "respectable",
        partOfSpeech: "adjective",
        translation: "점잖은, 번듯한, 존경할 만한",
        example: "The party was only for the respectable ladies of the town.",
        exampleTranslation: "그 모임은 마을의 점잖은 부인들만을 위한 것이었어요.",
      },
      {
        id: "wnd-v2",
        term: "enchanted",
        partOfSpeech: "adjective",
        translation: "매혹된, 홀린",
        example: "At first Molly was enchanted by the great gardens.",
        exampleTranslation: "처음에 몰리는 그 넓은 정원에 매혹되었어요.",
      },
      {
        id: "wnd-v3",
        term: "dizzy",
        partOfSpeech: "adjective",
        translation: "어지러운, 현기증이 나는",
        example: "The heat and hunger left her tired and dizzy.",
        exampleTranslation: "더위와 배고픔에 그녀는 지치고 어지러웠어요.",
      },
      {
        id: "wnd-v4",
        term: "neglect",
        partOfSpeech: "noun",
        translation: "방치, 소홀히 함, 홀대",
        example: "Her grand day out ended in hunger and neglect.",
        exampleTranslation: "그녀의 멋진 나들이는 배고픔과 홀대로 끝났어요.",
      },
      {
        id: "wnd-v5",
        term: "frock",
        partOfSpeech: "noun",
        translation: "(여자·아이의) 원피스, 드레스",
        example: "Molly was dressed in her stiffest white frock.",
        exampleTranslation: "몰리는 가장 빳빳한 흰 원피스를 입었어요.",
      },
    ],
    questions: [
      {
        id: "wnd-q1",
        prompt: "What special event was Molly going to for the first time?",
        options: [
          "Her father's wedding.",
          "The yearly garden party at the Towers, the great family's house.",
          "A dance in the town hall at Hollingford.",
          "A visit to her mother's grave.",
        ],
        correctIndex: 1,
        explanation:
          "Once a year the great family at the Towers opened their park to the respectable ladies of Hollingford; this year, for the first time, twelve-year-old Molly was to go too, and she woke long before dawn from excitement.",
      },
      {
        id: "wnd-q2",
        prompt: "Why did Molly's day at the Towers go badly?",
        options: [
          "She quarrelled with the Miss Brownings.",
          "She tore her white frock on a rose bush.",
          "It was very hot, no one gave her any lunch, and she grew tired and dizzy.",
          "Lady Cumnor scolded her for walking on the grass.",
        ],
        correctIndex: 2,
        explanation:
          "The day was very hot, the ladies talked over her head, and no one thought to feed her; by the afternoon Molly was tired, dizzy, and near tears, so she crept off and fell asleep under a tree.",
      },
      {
        id: "wnd-q3",
        prompt: "What happened after Molly fell asleep in the garden?",
        options: [
          "The Miss Brownings woke her and took her straight home.",
          "The Hollingford carriages left without her; Mrs. Kirkpatrick took her in but then forgot her, until her father finally came to fetch her.",
          "Lady Cumnor invited her to stay the night at the Towers.",
          "She woke just in time to catch the last carriage home.",
        ],
        correctIndex: 1,
        explanation:
          "The carriages went back to Hollingford without her; a kind lady, Mrs. Kirkpatrick, brought Molly indoors and fed her but then forgot her in the bustle of the party, and it was evening before a message reached her father, who drove over himself to bring her home.",
      },
    ],
  },
  {
    slug: "villette",
    title: "Villette",
    titleTranslation: "빌레트",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Charlotte Brontë (1816–1855)",
    coverEmoji: "🕰️",
    coverImage: "/covers/villette.svg",
    source:
      "Adapted from Chapter 1 (\"Bretton\") of Charlotte Brontë's novel \"Villette\" (first published 1853; long in the public domain, Project Gutenberg #9182). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, describe the child Polly and how she behaved when her father left her at Bretton.",
    paragraphs: [
      [
        {
          id: "vil-1",
          text: "When I was young, I often stayed with my godmother, Mrs. Bretton, in the quiet old town of Bretton.",
          translation:
            "어릴 적, 나는 조용한 옛 도시 브레턴에서 대모인 브레턴 부인과 함께 자주 지냈어요.",
        },
        {
          id: "vil-2",
          text: "Her house was large, clean, and calm, and time there passed like a slow, smooth river.",
          translation:
            "그 집은 크고 깨끗하고 고요했으며, 그곳에서는 시간이 느리고 잔잔한 강물처럼 흘렀어요.",
        },
        {
          id: "vil-3",
          text: "Mrs. Bretton was a tall, handsome widow, sensible and kind, not given to strong feeling.",
          translation:
            "브레턴 부인은 키가 크고 잘생긴 미망인으로, 분별 있고 다정했으며, 감정에 크게 휘둘리는 사람이 아니었어요.",
        },
      ],
      [
        {
          id: "vil-4",
          text: "Her only child, Graham, was a bright, good-looking boy of sixteen, used to being liked.",
          translation:
            "그녀의 외아들 그레이엄은 열여섯 살의 총명하고 잘생긴 소년으로, 사람들의 호감을 받는 데 익숙했어요.",
        },
        {
          id: "vil-5",
          text: "I was a quiet girl who preferred to watch other people rather than be watched myself.",
          translation:
            "나는 남에게 주목받기보다 남을 지켜보기를 좋아하는 조용한 소녀였어요.",
        },
        {
          id: "vil-6",
          text: "One autumn, the calm of the house was broken by the arrival of a visitor.",
          translation:
            "어느 가을, 그 집의 고요는 한 방문객이 찾아오면서 깨졌어요.",
        },
      ],
      [
        {
          id: "vil-7",
          text: "He was Mr. Home, an old friend of the family, a grave man with a troubled face.",
          translation:
            "그는 홈 씨였는데, 그 집안의 오랜 친구였고, 근심 어린 얼굴을 한 근엄한 사람이었어요.",
        },
        {
          id: "vil-8",
          text: "His wife had lately died, and he was about to travel abroad for a long time.",
          translation:
            "그의 아내는 얼마 전에 세상을 떠났고, 그는 오랫동안 외국으로 떠나려던 참이었어요.",
        },
        {
          id: "vil-9",
          text: "He asked Mrs. Bretton to take care of his small daughter while he was gone.",
          translation:
            "그는 자기가 없는 동안 어린 딸을 돌봐 달라고 브레턴 부인에게 부탁했어요.",
        },
      ],
      [
        {
          id: "vil-10",
          text: "The child was called Polly, and she was not quite seven years old.",
          translation: "그 아이의 이름은 폴리였고, 아직 일곱 살도 채 되지 않았어요.",
        },
        {
          id: "vil-11",
          text: "She was tiny, neat, and unnaturally still, and she spoke like a careful little grown woman.",
          translation:
            "아이는 자그맣고 단정했으며 유난히 얌전했고, 조심스러운 작은 어른처럼 말했어요.",
        },
        {
          id: "vil-12",
          text: "When her father was in the room, she watched his every movement; when he left it, she seemed hardly to breathe.",
          translation:
            "아버지가 방에 있을 때면 아이는 그의 모든 움직임을 지켜보았고, 아버지가 방을 나가면 숨조차 거의 쉬지 않는 것 같았어요.",
        },
      ],
      [
        {
          id: "vil-13",
          text: "On the night before he went away, she sat on his knee without a word for hours, holding his coat in her small hands.",
          translation:
            "아버지가 떠나기 전날 밤, 아이는 작은 손으로 그의 외투를 꼭 쥔 채 몇 시간 동안 말없이 그의 무릎에 앉아 있었어요.",
        },
        {
          id: "vil-14",
          text: "After his carriage had gone, she did not cry loudly, as other children do.",
          translation:
            "아버지의 마차가 떠난 뒤에도, 아이는 다른 아이들처럼 큰 소리로 울지 않았어요.",
        },
        {
          id: "vil-15",
          text: "Instead she crept into a corner and stayed there, grieving with a silence that was hard to watch.",
          translation:
            "대신 아이는 구석으로 기어들어 가 그곳에 머물렀고, 지켜보기 힘든 침묵 속에서 슬퍼했어요.",
        },
      ],
      [
        {
          id: "vil-16",
          text: "Slowly, over the following weeks, the child fastened all her fierce little heart onto Graham instead.",
          translation:
            "그 뒤 몇 주에 걸쳐, 아이는 자기 작은 가슴속 뜨거운 애정을 이번에는 온통 그레이엄에게 쏟았어요.",
        },
        {
          id: "vil-17",
          text: "I said nothing, but I watched them all, and I forgot none of what I saw.",
          translation:
            "나는 아무 말도 하지 않았지만, 그들 모두를 지켜보았고, 내가 본 것을 하나도 잊지 않았어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "vil-v1",
        term: "godmother",
        partOfSpeech: "noun",
        translation: "대모 (아이의 신앙·성장을 돌봐 주기로 한 여성)",
        example: "Lucy spent many holidays with her godmother at Bretton.",
        exampleTranslation: "루시는 브레턴에서 대모와 함께 여러 번 휴일을 보냈어요.",
      },
      {
        id: "vil-v2",
        term: "sensible",
        partOfSpeech: "adjective",
        translation: "분별 있는, 사리에 밝은",
        example: "Mrs. Bretton was a calm, sensible woman.",
        exampleTranslation: "브레턴 부인은 차분하고 분별 있는 여성이었어요.",
      },
      {
        id: "vil-v3",
        term: "grave",
        partOfSpeech: "adjective",
        translation: "근엄한, 심각한",
        example: "Mr. Home was a grave man with a troubled face.",
        exampleTranslation: "홈 씨는 근심 어린 얼굴을 한 근엄한 사람이었어요.",
      },
      {
        id: "vil-v4",
        term: "unnaturally",
        partOfSpeech: "adverb",
        translation: "부자연스럽게, 유난히",
        example: "For a child, Polly was unnaturally still and quiet.",
        exampleTranslation: "아이치고 폴리는 유난히 얌전하고 조용했어요.",
      },
      {
        id: "vil-v5",
        term: "grieve",
        partOfSpeech: "verb",
        translation: "슬퍼하다, 비통해하다",
        example: "Polly grieved for her father in a hard, adult silence.",
        exampleTranslation: "폴리는 어른 같은 무거운 침묵 속에서 아버지를 그리며 슬퍼했어요.",
      },
    ],
    questions: [
      {
        id: "vil-q1",
        prompt: "What was life like at Mrs. Bretton's house in Bretton?",
        options: [
          "Noisy and full of visitors day and night.",
          "Large, clean, and calm, where time passed slowly and smoothly.",
          "Poor and uncomfortable, with far too many children.",
          "Cold and unfriendly, ruled by strict rules.",
        ],
        correctIndex: 1,
        explanation:
          "Lucy often stayed with her godmother Mrs. Bretton in the quiet old town; the house was large, clean, and calm, and time there passed \"like a slow, smooth river,\" under the sensible, unemotional Mrs. Bretton and her likable son Graham.",
      },
      {
        id: "vil-q2",
        prompt: "Why did Mr. Home leave his daughter Polly at Bretton?",
        options: [
          "Polly had asked to live with Graham.",
          "He could no longer afford to keep her at home.",
          "His wife had recently died and he had to travel abroad for a long time.",
          "Mrs. Bretton was secretly Polly's real mother.",
        ],
        correctIndex: 2,
        explanation:
          "Mr. Home, an old friend of the family with a troubled face, had lately lost his wife and was about to go abroad for a long time, so he asked Mrs. Bretton to care for his small daughter while he was gone.",
      },
      {
        id: "vil-q3",
        prompt: "How did the child Polly behave?",
        options: [
          "Loud and playful, like most children her age.",
          "She refused to speak to anyone in the house.",
          "She quickly forgot her father and was perfectly happy.",
          "Tiny, still, and grave; she watched her father constantly and, after he left, grieved in a hard, adult silence before fastening her heart onto Graham.",
        ],
        correctIndex: 3,
        explanation:
          "Polly, not quite seven, was tiny, neat, and unnaturally still, speaking like a careful grown woman; she watched her father's every move, and after his carriage left she crept into a corner and grieved in silence, and over the following weeks she attached all her fierce little heart to Graham.",
      },
    ],
  },
  {
    slug: "persuasion",
    title: "Persuasion",
    titleTranslation: "설득",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B2",
    isFree: true,
    collection: "classics",
    author: "Jane Austen (1775–1817)",
    coverEmoji: "⚓",
    coverImage: "/covers/persuasion.svg",
    source:
      "Adapted from Chapter 4 of Jane Austen's novel \"Persuasion\" (first published 1817; long in the public domain, Project Gutenberg #105). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain why Anne gave up Frederick Wentworth eight years ago and what it had cost her by the time he returned.",
    paragraphs: [
      [
        {
          id: "per-1",
          text: "Eight years before this story begins, Anne Elliot was nineteen, and she fell in love.",
          translation:
            "이 이야기가 시작되기 8년 전, 앤 엘리엇은 열아홉 살이었고, 사랑에 빠졌어요.",
        },
        {
          id: "per-2",
          text: "The young man was Frederick Wentworth, a naval officer — clever, confident, and full of life.",
          translation:
            "그 청년은 프레더릭 웬트워스로, 해군 장교였고, 영리하고 자신감이 넘치며 활기가 가득했어요.",
        },
        {
          id: "per-3",
          text: "He had no fortune and no important family, but he was sure he would soon make his own way in the world.",
          translation:
            "그에게는 재산도, 대단한 집안도 없었지만, 자기 힘으로 곧 세상에서 자리를 잡을 것이라고 확신했어요.",
        },
      ],
      [
        {
          id: "per-4",
          text: "Anne loved him completely, and when he asked her to marry him, she said yes.",
          translation:
            "앤은 그를 온전히 사랑했고, 그가 청혼하자 그러겠다고 했어요.",
        },
        {
          id: "per-5",
          text: "For a short time she was perfectly happy.",
          translation: "잠시 동안 앤은 더없이 행복했어요.",
        },
        {
          id: "per-6",
          text: "But her father, Sir Walter, thought the match beneath her and gave it no real support.",
          translation:
            "하지만 아버지 월터 경은 그 혼사가 딸에게 격에 맞지 않는다고 여겨 제대로 지지해 주지 않았어요.",
        },
      ],
      [
        {
          id: "per-7",
          text: "Worse, Lady Russell — the wise older friend who had been like a mother to Anne — was firmly against it.",
          translation:
            "더 나쁜 것은, 앤에게 어머니와도 같았던 지혜로운 손윗사람 러셀 부인이 그 혼사를 단호히 반대했다는 점이었어요.",
        },
        {
          id: "per-8",
          text: "She believed Wentworth was too poor, his profession too uncertain, and the engagement a risk that would only bring Anne years of worry.",
          translation:
            "러셀 부인은 웬트워스가 너무 가난하고, 그의 직업이 너무 불안정하며, 이 약혼은 앤에게 여러 해의 근심만 안겨 줄 위험이라고 믿었어요.",
        },
        {
          id: "per-9",
          text: "She urged Anne to give him up, for her own good and for his.",
          translation:
            "부인은 앤에게, 앤 자신을 위해서도 그를 위해서도, 그를 단념하라고 강하게 권했어요.",
        },
      ],
      [
        {
          id: "per-10",
          text: "Anne was young and gentle, and she trusted the people who loved her.",
          translation:
            "앤은 어렸고 마음이 여렸으며, 자기를 사랑하는 사람들을 믿었어요.",
        },
        {
          id: "per-11",
          text: "Believing she was being wise and unselfish, she broke off the engagement.",
          translation:
            "자신이 현명하고 사심 없이 행동하는 것이라 믿으며, 앤은 약혼을 깼어요.",
        },
        {
          id: "per-12",
          text: "Wentworth did not think it wise; he felt wronged and abandoned, and he left in anger.",
          translation:
            "웬트워스는 그것이 현명하다고 생각하지 않았어요. 그는 부당한 대우를 받고 버림받았다고 느꼈고, 화가 난 채 떠났어요.",
        },
      ],
      [
        {
          id: "per-13",
          text: "The parting cost Anne her happiness and, for a while, her health and her looks.",
          translation:
            "그 이별로 앤은 행복을 잃었고, 한동안은 건강과 고운 얼굴빛까지 잃었어요.",
        },
        {
          id: "per-14",
          text: "In the years that followed, she met no one who was his equal, and no other man ever touched her heart.",
          translation:
            "그 뒤 여러 해 동안 앤은 그에 견줄 만한 사람을 만나지 못했고, 다른 어떤 남자도 그녀의 마음을 움직이지 못했어요.",
        },
        {
          id: "per-15",
          text: "At twenty-seven she was still unmarried, quieter now, and privately sure she had made a mistake.",
          translation:
            "스물일곱이 된 앤은 여전히 미혼이었고, 예전보다 조용해졌으며, 자기가 잘못한 것이라고 속으로 확신하고 있었어요.",
        },
      ],
      [
        {
          id: "per-16",
          text: "Wentworth, meanwhile, had gone to sea, won honour and a fortune in the war, and risen to captain — but he had not married, and he had not forgiven her.",
          translation:
            "한편 웬트워스는 바다로 나가 전쟁에서 명예와 재산을 얻고 함장의 자리에까지 올랐지만, 결혼은 하지 않았고, 앤을 용서하지도 않았어요.",
        },
        {
          id: "per-17",
          text: "Now his sister had rented the Elliots' house, and Captain Wentworth was coming back into Anne's quiet life.",
          translation:
            "그런데 이제 그의 누이가 엘리엇 가의 저택을 빌렸고, 웬트워스 함장이 앤의 조용한 삶 속으로 다시 돌아오려던 참이었어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "per-v1",
        term: "naval",
        partOfSpeech: "adjective",
        translation: "해군의",
        example: "Wentworth was a young naval officer with no fortune.",
        exampleTranslation: "웬트워스는 재산이 없는 젊은 해군 장교였어요.",
      },
      {
        id: "per-v2",
        term: "match",
        partOfSpeech: "noun",
        translation: "(결혼) 상대, 혼처; 어울리는 짝",
        example: "Sir Walter thought the marriage a poor match for his daughter.",
        exampleTranslation: "월터 경은 그 결혼이 딸에게 어울리지 않는 혼처라고 생각했어요.",
      },
      {
        id: "per-v3",
        term: "engagement",
        partOfSpeech: "noun",
        translation: "약혼",
        example: "Persuaded by Lady Russell, Anne broke off the engagement.",
        exampleTranslation: "러셀 부인의 설득에 앤은 약혼을 깼어요.",
      },
      {
        id: "per-v4",
        term: "profession",
        partOfSpeech: "noun",
        translation: "(전문) 직업",
        example: "Lady Russell thought his profession too uncertain.",
        exampleTranslation: "러셀 부인은 그의 직업이 너무 불안정하다고 생각했어요.",
      },
      {
        id: "per-v5",
        term: "unselfish",
        partOfSpeech: "adjective",
        translation: "사심 없는, 이타적인",
        example: "Anne believed that giving him up was the unselfish thing to do.",
        exampleTranslation: "앤은 그를 단념하는 것이 사심 없는 행동이라고 믿었어요.",
      },
    ],
    questions: [
      {
        id: "per-q1",
        prompt: "Why did Anne break off her engagement to Frederick Wentworth eight years earlier?",
        options: [
          "She had stopped loving him.",
          "She had met a richer man she preferred.",
          "Her father and Lady Russell opposed it, and she was persuaded that giving him up was the wise, unselfish thing to do.",
          "Wentworth had asked to end it himself.",
        ],
        correctIndex: 2,
        explanation:
          "Sir Walter thought the match beneath Anne and gave it no support, and Lady Russell, who was like a mother to her, was firmly against it, believing Wentworth too poor and his profession too uncertain; young and trusting, Anne was persuaded that breaking it off was wise and unselfish.",
      },
      {
        id: "per-q2",
        prompt: "How did the broken engagement affect Anne in the years that followed?",
        options: [
          "She quickly married someone else and was content.",
          "She lost her happiness and, for a time, her health and looks; she met no one to equal Wentworth and stayed single, privately sure she had been wrong.",
          "She became close friends with Wentworth again.",
          "She left home to travel and forgot him.",
        ],
        correctIndex: 1,
        explanation:
          "The parting cost Anne her happiness and briefly her health and bloom; in eight years she met no one who was Wentworth's equal, and at twenty-seven she was still unmarried, quieter, and privately certain she had made a mistake.",
      },
      {
        id: "per-q3",
        prompt: "What had become of Wentworth, and what was about to happen?",
        options: [
          "He had died at sea, and Anne only now heard of it.",
          "He had married another woman and settled far away.",
          "He had left the navy and become a farmer.",
          "He had made his fortune and become a captain, had not married or forgiven Anne, and was now returning to her neighbourhood because his sister had rented the Elliots' house.",
        ],
        correctIndex: 3,
        explanation:
          "Wentworth had gone to sea, won honour and a fortune in the war, and risen to captain, but he had neither married nor forgiven Anne; now his sister had rented the Elliots' house, so Captain Wentworth was coming back into Anne's quiet life.",
      },
    ],
  },
  {
    slug: "a-little-princess-the-attic",
    title: "A Little Princess: The Attic",
    titleTranslation: "소공녀: 다락방",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Novel excerpt",
    level: "B1",
    isFree: true,
    collection: "classics",
    author: "Frances Hodgson Burnett (1849–1924)",
    coverEmoji: "👑",
    coverImage: "/covers/a-little-princess-the-attic.svg",
    source:
      "Adapted from Chapter 7 (\"The Diamond Mines Again\") of Frances Hodgson Burnett's novel \"A Little Princess\" (first published 1905; long in the public domain, Project Gutenberg #146). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain how Sara Crewe lost her fortune and her father, and how her life at the school changed.",
    paragraphs: [
      [
        {
          id: "alpa-1",
          text: "It was Sara Crewe's eleventh birthday, and Miss Minchin's school was full of flowers and presents.",
          translation:
            "세라 크루의 열한 번째 생일이었고, 민친 선생님의 학교는 꽃과 선물로 가득했어요.",
        },
        {
          id: "alpa-2",
          text: "Sara's father, Captain Crewe, was rich, and the whole school treated Sara like a little princess.",
          translation:
            "세라의 아버지 크루 대위는 부자였고, 학교 전체가 세라를 작은 공주님처럼 대했어요.",
        },
        {
          id: "alpa-3",
          text: "In the middle of the party, a serious man came to see Miss Minchin; he was her lawyer.",
          translation:
            "파티가 한창일 때, 근엄한 남자 한 명이 민친 선생님을 찾아왔어요. 그녀의 변호사였어요.",
        },
      ],
      [
        {
          id: "alpa-4",
          text: "He brought very bad news.",
          translation: "그는 아주 나쁜 소식을 가져왔어요.",
        },
        {
          id: "alpa-5",
          text: "Captain Crewe had put all his money into a friend's diamond mine in India.",
          translation:
            "크루 대위는 인도에 있는 친구의 다이아몬드 광산에 전 재산을 넣었어요.",
        },
        {
          id: "alpa-6",
          text: "The friend had run away, and the mine turned out to be worth nothing.",
          translation: "그 친구는 달아났고, 광산은 아무런 가치도 없는 것으로 드러났어요.",
        },
      ],
      [
        {
          id: "alpa-7",
          text: "Captain Crewe lost everything he had.",
          translation: "크루 대위는 가진 것을 전부 잃었어요.",
        },
        {
          id: "alpa-8",
          text: "Then he caught a fever, and, far away in India, he died.",
          translation:
            "그러고 나서 그는 열병에 걸렸고, 머나먼 인도에서 세상을 떠났어요.",
        },
        {
          id: "alpa-9",
          text: "Sara was now an orphan, and there was no money left for her at all.",
          translation:
            "이제 세라는 고아가 되었고, 그녀에게 남은 돈은 한 푼도 없었어요.",
        },
      ],
      [
        {
          id: "alpa-10",
          text: "Miss Minchin was not sad; she was angry about the cost of the party and years of Sara's fine clothes.",
          translation:
            "민친 선생님은 슬퍼하지 않았어요. 파티 비용과 여러 해 동안 세라에게 들인 고운 옷값 때문에 화가 나 있었어요.",
        },
        {
          id: "alpa-11",
          text: "She sent for Sara and told her, in a hard voice, that her father was dead and the money was gone.",
          translation:
            "그녀는 세라를 불러, 차가운 목소리로 아버지가 돌아가셨고 돈은 사라졌다고 말했어요.",
        },
        {
          id: "alpa-12",
          text: "She took away the birthday presents and the pretty dress.",
          translation: "그녀는 생일 선물들과 예쁜 드레스를 빼앗아 갔어요.",
        },
      ],
      [
        {
          id: "alpa-13",
          text: "From now on, she said, Sara would work for her food and her bed.",
          translation:
            "이제부터 세라는 밥과 잠자리를 얻는 대가로 일을 해야 한다고 그녀는 말했어요.",
        },
        {
          id: "alpa-14",
          text: "Sara would run errands, teach the little children, and help in the kitchen.",
          translation:
            "세라는 심부름을 다니고, 어린아이들을 가르치고, 부엌일을 도와야 했어요.",
        },
        {
          id: "alpa-15",
          text: "She would sleep in a cold attic room next to Becky, the tired little servant girl.",
          translation:
            "그리고 지치고 조그만 하녀 아이 베키 옆의 추운 다락방에서 자야 했어요.",
        },
      ],
      [
        {
          id: "alpa-16",
          text: "Sara was too shocked to cry; she said almost nothing and went slowly up the stairs.",
          translation:
            "세라는 너무 충격을 받아 울지도 못했어요. 그녀는 거의 아무 말도 하지 않고 천천히 계단을 올라갔어요.",
        },
        {
          id: "alpa-17",
          text: "But alone in the bare attic, she made a quiet promise to herself: whatever happened, inside she would still be a princess.",
          translation:
            "하지만 텅 빈 다락방에 혼자 있게 되자, 세라는 스스로에게 조용히 다짐했어요. 무슨 일이 있어도, 마음속으로는 여전히 공주로 살겠다고요.",
        },
      ],
    ],
    vocab: [
      {
        id: "alpa-v1",
        term: "lawyer",
        partOfSpeech: "noun",
        translation: "변호사",
        example: "Miss Minchin's lawyer arrived with the news of Captain Crewe.",
        exampleTranslation: "민친 선생님의 변호사가 크루 대위의 소식을 가지고 도착했어요.",
      },
      {
        id: "alpa-v2",
        term: "fever",
        partOfSpeech: "noun",
        translation: "열, 열병",
        example: "Captain Crewe caught a fever and died in India.",
        exampleTranslation: "크루 대위는 열병에 걸려 인도에서 세상을 떠났어요.",
      },
      {
        id: "alpa-v3",
        term: "errand",
        partOfSpeech: "noun",
        translation: "심부름",
        example: "Now Sara had to run errands for the whole school.",
        exampleTranslation: "이제 세라는 학교 전체의 심부름을 다녀야 했어요.",
      },
      {
        id: "alpa-v4",
        term: "shocked",
        partOfSpeech: "adjective",
        translation: "충격을 받은",
        example: "Sara was too shocked by the news to cry.",
        exampleTranslation: "세라는 그 소식에 너무 충격을 받아 울지도 못했어요.",
      },
      {
        id: "alpa-v5",
        term: "bare",
        partOfSpeech: "adjective",
        translation: "텅 빈, 아무것도 없는",
        example: "The attic room was cold and bare.",
        exampleTranslation: "다락방은 춥고 텅 비어 있었어요.",
      },
    ],
    questions: [
      {
        id: "alpa-q1",
        prompt: "What news did Miss Minchin's lawyer bring during Sara's birthday party?",
        options: [
          "Captain Crewe was coming to visit the school.",
          "Captain Crewe had lost all his money in a failed diamond mine and had died of a fever in India.",
          "Sara had won a prize at another school.",
          "The school had to move to a new building.",
        ],
        correctIndex: 1,
        explanation:
          "The lawyer told Miss Minchin that Captain Crewe had put everything into a friend's diamond mine, that the friend had vanished and the mine was worthless, and that Captain Crewe, ruined and ill with fever, had died in India — leaving Sara a penniless orphan.",
      },
      {
        id: "alpa-q2",
        prompt: "How did Miss Minchin react to the news?",
        options: [
          "She wept for Captain Crewe and comforted Sara.",
          "She was not sad but angry about the money the party and Sara's clothes had cost her.",
          "She promised to raise Sara as her own daughter.",
          "She sent Sara away to live with relatives.",
        ],
        correctIndex: 1,
        explanation:
          "Miss Minchin felt no grief; she was angry about being out of pocket for the party and for years of Sara's fine clothes, and she told Sara coldly that her father was dead and the money gone.",
      },
      {
        id: "alpa-q3",
        prompt: "What happened to Sara after that day?",
        options: [
          "She was allowed to keep her room and her lessons as before.",
          "She was taken away from the school at once.",
          "She lost her presents and fine clothes and became a servant — running errands, helping in the kitchen, sleeping in a cold attic — but privately vowed to stay a princess inside.",
          "She ran away to look for her father's friend.",
        ],
        correctIndex: 2,
        explanation:
          "Miss Minchin took away Sara's presents and pretty dress and made her work for her food and bed — errands, minding the little ones, kitchen work, and a cold attic beside Becky — but alone up there Sara quietly promised herself that inside she would still be a princess.",
      },
    ],
  },
  {
    slug: "a-pair-of-silk-stockings",
    title: "A Pair of Silk Stockings",
    titleTranslation: "실크 스타킹 한 켤레",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "A2",
    isFree: true,
    collection: "classics",
    author: "Kate Chopin (1850–1904)",
    coverEmoji: "🧦",
    coverImage: "/covers/a-pair-of-silk-stockings.svg",
    source:
      "Adapted from Kate Chopin's short story \"A Pair of Silk Stockings\" (first published 1897; long in the public domain). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain what Mrs. Sommers meant to do with her fifteen dollars and what she actually did.",
    paragraphs: [
      [
        {
          id: "pss-1",
          text: "Mrs. Sommers was a poor woman with several children and very little money.",
          translation:
            "소머스 부인은 아이가 여럿 딸린 가난한 여자였고, 돈은 아주 적었어요.",
        },
        {
          id: "pss-2",
          text: "One day, quite suddenly, she found herself with fifteen dollars.",
          translation: "어느 날, 아주 갑자기, 그녀에게 15달러가 생겼어요.",
        },
        {
          id: "pss-3",
          text: "To her, that felt like a great deal of money.",
          translation: "그녀에게 그것은 큰돈처럼 느껴졌어요.",
        },
      ],
      [
        {
          id: "pss-4",
          text: "For two days she thought carefully about how to spend it.",
          translation: "이틀 동안 그녀는 그 돈을 어떻게 쓸지 신중하게 생각했어요.",
        },
        {
          id: "pss-5",
          text: "She would buy new shoes for the children, and cloth to make them shirts and dresses.",
          translation:
            "아이들에게 새 신발을 사 주고, 셔츠와 원피스를 지을 천을 사기로 했어요.",
        },
        {
          id: "pss-6",
          text: "On the day she went shopping, she was tired and had forgotten to eat lunch.",
          translation:
            "장을 보러 간 날, 그녀는 피곤했고 점심 먹는 것을 잊어버렸어요.",
        },
      ],
      [
        {
          id: "pss-7",
          text: "She sat down for a moment at a shop counter to rest.",
          translation: "그녀는 잠깐 쉬려고 가게 판매대 앞에 앉았어요.",
        },
        {
          id: "pss-8",
          text: "Her hand fell on a pile of silk stockings, soft and smooth.",
          translation:
            "그녀의 손이 부드럽고 매끄러운 실크 스타킹 더미에 닿았어요.",
        },
        {
          id: "pss-9",
          text: "She looked at them for a long time. Then she asked the price.",
          translation: "그녀는 그것을 한참 동안 바라보았어요. 그러고는 값을 물었어요.",
        },
      ],
      [
        {
          id: "pss-10",
          text: "Almost without deciding to, she bought a pair for herself.",
          translation:
            "거의 마음을 정하지도 않은 채, 그녀는 자기 것으로 한 켤레를 샀어요.",
        },
        {
          id: "pss-11",
          text: "Something had changed. She did not go to buy the children's things.",
          translation:
            "무언가가 달라졌어요. 그녀는 아이들 물건을 사러 가지 않았어요.",
        },
        {
          id: "pss-12",
          text: "Instead she put on the silk stockings in the shop and bought new boots to match.",
          translation:
            "대신 가게에서 실크 스타킹을 신고, 거기에 어울리는 새 부츠를 샀어요.",
        },
      ],
      [
        {
          id: "pss-13",
          text: "She bought gloves that fit her hands perfectly, and two expensive magazines.",
          translation:
            "손에 꼭 맞는 장갑을 사고, 값비싼 잡지도 두 권 샀어요.",
        },
        {
          id: "pss-14",
          text: "She ate a quiet, proper lunch alone at a restaurant, with a glass of wine.",
          translation:
            "그녀는 식당에서 혼자 조용히 제대로 된 점심을 먹었고, 포도주도 한 잔 곁들였어요.",
        },
        {
          id: "pss-15",
          text: "Then she went to the theatre and watched a play all afternoon.",
          translation: "그런 다음 극장에 가서 오후 내내 연극을 보았어요.",
        },
      ],
      [
        {
          id: "pss-16",
          text: "For a few hours she was not a tired mother counting every cent; she was simply herself.",
          translation:
            "몇 시간 동안 그녀는 한 푼까지 세는 지친 어머니가 아니었어요. 그저 자기 자신이었어요.",
        },
        {
          id: "pss-17",
          text: "On the cable car home, a kind-looking man saw her face and wished, as she did, that the ride would never end.",
          translation:
            "집으로 가는 전차 안에서, 친절해 보이는 한 남자가 그녀의 얼굴을 보고는, 그녀와 마찬가지로 이 전차가 영영 멈추지 않기를 바랐어요.",
        },
      ],
    ],
    vocab: [
      {
        id: "pss-v1",
        term: "stockings",
        partOfSpeech: "noun",
        translation: "스타킹, 긴 양말",
        example: "The silk stockings felt soft and smooth in her hand.",
        exampleTranslation: "실크 스타킹은 그녀의 손에 부드럽고 매끄럽게 느껴졌어요.",
      },
      {
        id: "pss-v2",
        term: "counter",
        partOfSpeech: "noun",
        translation: "(상점의) 판매대, 계산대",
        example: "She rested for a moment at the shop counter.",
        exampleTranslation: "그녀는 가게 판매대 앞에서 잠깐 쉬었어요.",
      },
      {
        id: "pss-v3",
        term: "gloves",
        partOfSpeech: "noun",
        translation: "장갑",
        example: "She bought gloves that fit her hands perfectly.",
        exampleTranslation: "그녀는 손에 꼭 맞는 장갑을 샀어요.",
      },
      {
        id: "pss-v4",
        term: "proper",
        partOfSpeech: "adjective",
        translation: "제대로 된, 격식을 갖춘",
        example: "She ate a quiet, proper lunch alone at a restaurant.",
        exampleTranslation: "그녀는 식당에서 혼자 조용히 제대로 된 점심을 먹었어요.",
      },
      {
        id: "pss-v5",
        term: "cent",
        partOfSpeech: "noun",
        translation: "센트 (1달러의 100분의 1)",
        example: "For once she was not counting every cent.",
        exampleTranslation: "그때만큼은 그녀도 한 푼까지 세고 있지 않았어요.",
      },
    ],
    questions: [
      {
        id: "pss-q1",
        prompt: "How did Mrs. Sommers first plan to spend the fifteen dollars?",
        options: [
          "On a holiday for herself.",
          "On new shoes and clothes for her children.",
          "On paying back money she owed.",
          "On silk stockings and a trip to the theatre.",
        ],
        correctIndex: 1,
        explanation:
          "For two days Mrs. Sommers thought carefully about the money and decided to buy new shoes for the children and cloth to make them shirts and dresses.",
      },
      {
        id: "pss-q2",
        prompt: "What changed her plan while she was out shopping?",
        options: [
          "A shopkeeper told her the children's things were sold out.",
          "She lost the money and had to go home.",
          "Tired and hungry, she rested at a counter, touched a pile of soft silk stockings, and bought a pair for herself almost without deciding to.",
          "One of her children came to find her.",
        ],
        correctIndex: 2,
        explanation:
          "Tired and having skipped lunch, Mrs. Sommers sat down at a shop counter to rest; her hand fell on some smooth silk stockings, and almost without meaning to she bought a pair for herself — and after that she did not buy the children's things at all.",
      },
      {
        id: "pss-q3",
        prompt: "How did Mrs. Sommers spend the rest of her afternoon?",
        options: [
          "She hurried home feeling guilty about the stockings.",
          "She returned everything and got her money back.",
          "She spent it all on food for the family.",
          "She bought new boots, gloves, and magazines, had a proper lunch with wine, and went to the theatre — a few hours of being simply herself.",
        ],
        correctIndex: 3,
        explanation:
          "She wore the silk stockings out of the shop, bought matching boots, well-fitting gloves, and two costly magazines, ate a quiet lunch alone with a glass of wine, and watched a play all afternoon — and on the cable car home she wished the ride would never end.",
      },
    ],
  },
  {
    slug: "the-tale-of-peter-rabbit",
    title: "The Tale of Peter Rabbit",
    titleTranslation: "피터 래빗 이야기",
    targetLanguage: "en",
    nativeLanguage: "ko",
    topic: "Short story",
    level: "A1",
    isFree: true,
    collection: "classics",
    author: "Beatrix Potter (1866–1943)",
    coverEmoji: "🐰",
    coverImage: "/covers/the-tale-of-peter-rabbit.svg",
    source:
      "Adapted from Beatrix Potter's \"The Tale of Peter Rabbit\" (first published 1902; in the public domain). This simplified retelling and its Korean translation are original text written for SeoJae Story.",
    summaryPrompt:
      "In 1–2 sentences, explain where Peter was told not to go, and what happened to him when he went there anyway.",
    paragraphs: [
      [
        {
          id: "pr-1",
          text: "Once there were four little rabbits. Their names were Flopsy, Mopsy, Cotton-tail, and Peter.",
          translation:
            "옛날에 아기 토끼 네 마리가 있었어요. 이름은 플롭시, 몹시, 코튼테일, 그리고 피터였어요.",
        },
        {
          id: "pr-2",
          text: "They lived with their mother in a sandy burrow under a big fir tree.",
          translation: "그들은 엄마와 함께 큰 전나무 아래 모래 굴에서 살았어요.",
        },
      ],
      [
        {
          id: "pr-3",
          text: "One morning their mother said, \"You may play in the fields, but do not go into Mr. McGregor's garden.\"",
          translation:
            "어느 날 아침, 엄마가 말했어요. \"들판에서는 놀아도 되지만, 맥그리거 아저씨네 밭에는 들어가지 마.\"",
        },
        {
          id: "pr-4",
          text: "\"Your father had trouble there. Now be good while I am away.\"",
          translation: "\"너희 아빠가 거기서 큰일을 당했단다. 엄마가 없는 동안 얌전히 있으렴.\"",
        },
        {
          id: "pr-5",
          text: "Then she took her basket and went to the baker's shop.",
          translation: "그러고 나서 엄마는 바구니를 들고 빵집에 갔어요.",
        },
      ],
      [
        {
          id: "pr-6",
          text: "Flopsy, Mopsy, and Cotton-tail were good little rabbits. They went down the lane to pick blackberries.",
          translation:
            "플롭시, 몹시, 코튼테일은 착한 아기 토끼였어요. 그들은 오솔길을 따라 내려가 블랙베리를 땄어요.",
        },
        {
          id: "pr-7",
          text: "But Peter was naughty. He ran straight to Mr. McGregor's garden and squeezed under the gate.",
          translation:
            "하지만 피터는 장난꾸러기였어요. 피터는 곧장 맥그리거 아저씨네 밭으로 달려가 문 밑으로 비집고 들어갔어요.",
        },
      ],
      [
        {
          id: "pr-8",
          text: "First he ate some lettuces. Then he ate some beans and some radishes.",
          translation: "먼저 상추를 좀 먹었어요. 그다음에는 콩과 무를 먹었어요.",
        },
        {
          id: "pr-9",
          text: "Soon his stomach felt sick, so he went to look for some parsley.",
          translation: "곧 배가 아파 와서, 피터는 파슬리를 찾으러 갔어요.",
        },
        {
          id: "pr-10",
          text: "But at the end of a row, he met Mr. McGregor!",
          translation: "그런데 밭이랑 끝에서 맥그리거 아저씨와 딱 마주쳤어요!",
        },
      ],
      [
        {
          id: "pr-11",
          text: "Mr. McGregor jumped up and ran after him, shouting, \"Stop! Stop!\"",
          translation:
            "맥그리거 아저씨는 벌떡 일어나 \"거기 서! 서!\" 하고 소리치며 피터를 쫓아왔어요.",
        },
        {
          id: "pr-12",
          text: "Peter was very frightened. He ran this way and that way, and lost one of his shoes among the cabbages.",
          translation:
            "피터는 몹시 무서웠어요. 이리저리 뛰어다니다가 양배추밭에서 신발 한 짝을 잃어버렸어요.",
        },
        {
          id: "pr-13",
          text: "His little blue jacket caught on a net, so he wriggled out of it and ran on.",
          translation:
            "작은 파란 웃옷이 그물에 걸리자, 피터는 몸을 비틀어 웃옷을 벗어 두고 계속 달렸어요.",
        },
        {
          id: "pr-14",
          text: "He hid in a watering can in the shed, but then he sneezed and had to run again.",
          translation:
            "피터는 창고에 있던 물뿌리개 안에 숨었지만, 그만 재채기를 해서 다시 달아나야 했어요.",
        },
      ],
      [
        {
          id: "pr-15",
          text: "At last Peter found the gate. He slipped under it and was safe in the wood outside.",
          translation:
            "마침내 피터는 문을 찾았어요. 문 밑으로 빠져나가 바깥 숲으로 안전하게 도망쳤어요.",
        },
        {
          id: "pr-16",
          text: "He ran all the way home and lay down on the soft floor of the burrow. He was too tired to speak.",
          translation:
            "피터는 집까지 쉬지 않고 달려가 굴의 부드러운 바닥에 드러누웠어요. 너무 지쳐서 말도 할 수 없었어요.",
        },
        {
          id: "pr-17",
          text: "That evening his mother gave him a cup of warm camomile tea, while the other three had bread and milk and blackberries.",
          translation:
            "그날 저녁, 엄마는 피터에게 따뜻한 캐모마일 차 한 잔을 주었어요. 다른 세 마리는 빵과 우유와 블랙베리를 먹었지요.",
        },
      ],
    ],
    vocab: [
      {
        id: "pr-v1",
        term: "burrow",
        partOfSpeech: "noun",
        translation: "굴 (동물이 파서 사는 곳)",
        example: "The rabbits lived in a burrow under a tree.",
        exampleTranslation: "토끼들은 나무 아래 굴에서 살았어요.",
      },
      {
        id: "pr-v2",
        term: "lane",
        partOfSpeech: "noun",
        translation: "좁은 길, 오솔길",
        example: "The three good rabbits went down the lane.",
        exampleTranslation: "착한 토끼 세 마리는 오솔길을 따라 내려갔어요.",
      },
      {
        id: "pr-v3",
        term: "naughty",
        partOfSpeech: "adjective",
        translation: "말을 안 듣는, 장난꾸러기의",
        example: "Peter was naughty and did not listen to his mother.",
        exampleTranslation: "피터는 장난꾸러기여서 엄마 말을 듣지 않았어요.",
      },
      {
        id: "pr-v4",
        term: "frightened",
        partOfSpeech: "adjective",
        translation: "겁먹은, 무서워하는",
        example: "Peter was frightened when Mr. McGregor ran after him.",
        exampleTranslation: "맥그리거 아저씨가 쫓아오자 피터는 겁이 났어요.",
      },
      {
        id: "pr-v5",
        term: "safe",
        partOfSpeech: "adjective",
        translation: "안전한",
        example: "Peter was safe when he reached the wood.",
        exampleTranslation: "숲에 이르자 피터는 안전했어요.",
      },
    ],
    questions: [
      {
        id: "pr-q1",
        prompt: "Where did the mother rabbit tell her children not to go?",
        options: [
          "Down the lane.",
          "Into Mr. McGregor's garden.",
          "Under the fir tree.",
          "To the baker's shop.",
        ],
        correctIndex: 1,
        explanation:
          "Before she left for the baker's, the mother rabbit said the little rabbits could play in the fields but must not go into Mr. McGregor's garden, because their father had had trouble there.",
      },
      {
        id: "pr-q2",
        prompt: "What did Peter do that his sisters did not do?",
        options: [
          "He picked blackberries by the lane.",
          "He stayed at home with his mother.",
          "He went straight into the garden and ate the vegetables.",
          "He carried the basket to the baker's.",
        ],
        correctIndex: 2,
        explanation:
          "Flopsy, Mopsy, and Cotton-tail obediently gathered blackberries down the lane, but naughty Peter squeezed under the gate into Mr. McGregor's garden and ate lettuces, beans, and radishes.",
      },
      {
        id: "pr-q3",
        prompt: "How did Peter's adventure end?",
        options: [
          "Mr. McGregor caught him and kept him.",
          "He found his jacket and shoes and put them back on.",
          "He stayed in the garden until his mother came for him.",
          "He escaped under the gate, ran home exhausted, and was given camomile tea.",
        ],
        correctIndex: 3,
        explanation:
          "Peter finally slipped under the gate to safety, ran all the way home too tired to speak, and that evening his mother put him to bed with a cup of warm camomile tea while his sisters had a good supper.",
      },
    ],
  },
];
