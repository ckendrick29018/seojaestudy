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
];
