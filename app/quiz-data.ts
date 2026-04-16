export type PersonalityKey =
  | "boldExplorer"
  | "smoothOperator"
  | "cozyClassic"
  | "wildCard";

export type Personality = {
  key: PersonalityKey;
  name: string;
  subtitle: string;
  description: string;
  coffee: {
    name: string;
    tastingNotes: string;
    description: string;
  };
  accent: string;
};

export type AnswerOption = {
  text: string;
  icon: string;
  personality: PersonalityKey;
};

export type QuizQuestion = {
  prompt: string;
  options: AnswerOption[];
};

export const personalities: Record<PersonalityKey, Personality> = {
  boldExplorer: {
    key: "boldExplorer",
    name: "Bold Explorer",
    subtitle: "Intense taste. Clear point of view.",
    description:
      "You like coffee with presence. You gravitate toward strong flavor, confident choices, and a ritual that feels like a reset button before the day begins.",
    coffee: {
      name: "Midnight Summit",
      tastingNotes: "Dark roast, smoky depth, high-intensity finish",
      description:
        "A bold recommendation for drinkers who want punch, structure, and a cup that makes an entrance.",
    },
    accent: "#7d4a2f",
  },
  smoothOperator: {
    key: "smoothOperator",
    name: "Smooth Operator",
    subtitle: "Polished, balanced, quietly excellent.",
    description:
      "You appreciate quality that feels effortless. Your ideal coffee experience is elegant, reliable, and refined without trying too hard.",
    coffee: {
      name: "Wildflower",
      tastingNotes: "Light roast, floral lift, bright fruit",
      description:
        "A clean and graceful pairing that feels elevated, distinctive, and easy to come back to.",
    },
    accent: "#8f6f52",
  },
  cozyClassic: {
    key: "cozyClassic",
    name: "Cozy Classic",
    subtitle: "Comfort, ritual, and warmth first.",
    description:
      "You want coffee to feel grounding. You lean toward softness, familiarity, and the kind of cup that turns a regular morning into a small ritual.",
    coffee: {
      name: "Campfire Stories",
      tastingNotes: "Dark roast, toasted marshmallow, graham warmth",
      description:
        "A comforting recommendation built for slow mornings, softer edges, and familiar flavor.",
    },
    accent: "#a26643",
  },
  wildCard: {
    key: "wildCard",
    name: "Wild Card",
    subtitle: "Curious palate. Unexpected choices.",
    description:
      "You like to be surprised. Your ideal coffee does not just taste good; it gives you something new to talk about, compare, and remember.",
    coffee: {
      name: "Off the Map",
      tastingNotes: "Experimental processing, bright funk, rotating surprises",
      description:
        "A recommendation for subscribers who actively want novelty, experimentation, and discovery in the cup.",
    },
    accent: "#6f7f63",
  },
};

export const questions: QuizQuestion[] = [
  {
    prompt: "Your ideal Saturday morning starts with...",
    options: [
      {
        text: "A strong first cup and a head start before the world catches up",
        icon: "⚡",
        personality: "boldExplorer",
      },
      {
        text: "A slow, polished routine with good light and a playlist in the background",
        icon: "☀️",
        personality: "smoothOperator",
      },
      {
        text: "A blanket, a pastry, and absolutely nowhere to be",
        icon: "🧣",
        personality: "cozyClassic",
      },
      {
        text: "A spontaneous plan and wherever the day decides to take you",
        icon: "🗺️",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "At a dinner party, your energy is closest to...",
    options: [
      {
        text: "The confident one with strong opinions and great taste",
        icon: "🥃",
        personality: "boldExplorer",
      },
      {
        text: "The calm one everyone gravitates toward",
        icon: "✨",
        personality: "smoothOperator",
      },
      {
        text: "The comforting one making people feel instantly at home",
        icon: "🕯️",
        personality: "cozyClassic",
      },
      {
        text: "The wildcard who always has the most unexpected story",
        icon: "🎲",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "If you could spend a weekend anywhere, you would choose...",
    options: [
      {
        text: "A dramatic mountain cabin with crisp air and total focus",
        icon: "⛰️",
        personality: "boldExplorer",
      },
      {
        text: "A boutique hotel with perfect design and a city to explore",
        icon: "🏛️",
        personality: "smoothOperator",
      },
      {
        text: "A quiet lakeside cottage with cozy socks and a stack of books",
        icon: "📚",
        personality: "cozyClassic",
      },
      {
        text: "A place you have never been, with no itinerary and lots of surprises",
        icon: "✈️",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "Your friends would say your taste is...",
    options: [
      {
        text: "Bold and unmistakable",
        icon: "🔥",
        personality: "boldExplorer",
      },
      {
        text: "Refined and effortlessly good",
        icon: "🎼",
        personality: "smoothOperator",
      },
      {
        text: "Warm, comforting, and familiar",
        icon: "🍂",
        personality: "cozyClassic",
      },
      {
        text: "Unexpected and impossible to predict",
        icon: "🌪️",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "When you walk into a cafe, you are most likely to...",
    options: [
      {
        text: "Order the strongest thing on the menu without hesitation",
        icon: "☕",
        personality: "boldExplorer",
      },
      {
        text: "Pick something classic that you know will be excellent",
        icon: "🪞",
        personality: "smoothOperator",
      },
      {
        text: "Look for whatever sounds comforting and cozy",
        icon: "🥐",
        personality: "cozyClassic",
      },
      {
        text: "Ask what is new, strange, or unlike anything else",
        icon: "🧭",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "Your ideal brand makes you feel...",
    options: [
      {
        text: "Powerful and energized",
        icon: "🚀",
        personality: "boldExplorer",
      },
      {
        text: "Understood and well taken care of",
        icon: "🤍",
        personality: "smoothOperator",
      },
      {
        text: "Warm, grounded, and relaxed",
        icon: "🪵",
        personality: "cozyClassic",
      },
      {
        text: "Curious, inspired, and a little surprised",
        icon: "🌙",
        personality: "wildCard",
      },
    ],
  },
  {
    prompt: "If your life had a soundtrack this week, it would be...",
    options: [
      {
        text: "Driving, intense, and full of momentum",
        icon: "🎸",
        personality: "boldExplorer",
      },
      {
        text: "Smooth, stylish, and balanced",
        icon: "🎷",
        personality: "smoothOperator",
      },
      {
        text: "Soft, nostalgic, and comforting",
        icon: "🎻",
        personality: "cozyClassic",
      },
      {
        text: "Eclectic, surprising, and impossible to pin down",
        icon: "🥁",
        personality: "wildCard",
      },
    ],
  },
];

export const orderedPersonalityKeys: PersonalityKey[] = [
  "boldExplorer",
  "smoothOperator",
  "cozyClassic",
  "wildCard",
];
