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
];
