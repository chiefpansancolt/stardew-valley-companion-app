const SEASONS = {
  SPRING: "Spring",
  SUMMER: "Summer",
  FALL: "Fall",
  ALL: "All",
};

const trees = [
  {
    id: 388,
    name: "Wood",
    description: "A sturdy, yet flexible plant material with a wide variety of uses.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png",
    seasons: [SEASONS.ALL],
    sources: ["Trees", "Large Stump", "Carpenter's Shop"],
    price: "2g",
    shipping: {
      order: 72,
      usage: true,
    },
  },
  {
    id: 709,
    name: "Hardwood",
    description: "A special kind of wood with superior strength and beauty.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png",
    seasons: [SEASONS.ALL],
    sources: ["Foraging", "Large Log", "Woodskip (Fish Pond)", "Mahogany Trees"],
    price: "15g",
    shipping: {
      order: 123,
      usage: true,
    },
  },
  {
    id: 92,
    name: "Sap",
    description: "A fluid obtained from trees.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/73/Sap.png",
    seasons: [SEASONS.ALL],
    sources: ["Trees", "Slimes"],
    price: "2g",
    shipping: {
      order: 10,
      usage: true,
    },
  },
  {
    id: 310,
    name: "Maple Seed",
    description: "This can be planted to grow a maple tree.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/36/Maple_Seed.png",
    seasons: [SEASONS.ALL],
    sources: ["Maple Tree"],
    price: "5g",
    shipping: {
      usage: false,
    },
  },
  {
    id: 309,
    name: "Acorn",
    description: "This can be planted to grow an oak tree.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Acorn.png",
    seasons: [SEASONS.ALL],
    sources: ["Oak Tree"],
    price: "20g",
    shipping: {
      usage: false,
    },
  },
  {
    id: 311,
    name: "Pine Cone",
    description: "This can be planted to grow a pine tree.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/90/Pine_Cone.png",
    seasons: [SEASONS.ALL],
    sources: ["Pine Tree"],
    price: "5g",
    shipping: {
      usage: false,
    },
  },
  {
    id: 292,
    name: "Mahogany Seed",
    description: "This can be planted to grow a mahogany tree.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/84/Mahogany_Seed.png",
    seasons: [SEASONS.ALL],
    sources: ["Mahogany Tree"],
    price: "100g",
    shipping: {
      usage: false,
    },
  },
  {
    id: 725,
    name: "Oak Resin",
    description: "A sticky, fragrant substance derived from oak sap.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png",
    seasons: [SEASONS.ALL],
    sources: ["Oak Tree"],
    price: "150g",
    shipping: {
      order: 125,
      usage: true,
    },
  },
  {
    id: 726,
    name: "Pine Tar",
    description: "A pungent substance derived from pine sap.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Pine_Tar.png",
    seasons: [SEASONS.ALL],
    sources: ["Pine Tree"],
    price: "100g",
    shipping: {
      order: 126,
      usage: true,
    },
  },
  {
    id: 724,
    name: "Maple Syrup",
    description: "A sweet syrup with a unique flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png",
    seasons: [SEASONS.ALL],
    sources: ["Maple Tree"],
    price: "200g",
    shipping: {
      order: 124,
      usage: true,
    },
  },
  {
    id: 634,
    name: "Apricot",
    description: "A tender little fruit with a rock-hard pit.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png",
    seasons: [SEASONS.SPRING],
    sources: ["Apricot Tree"],
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
    shipping: {
      order: 117,
      usage: true,
    },
  },
  {
    id: 638,
    name: "Cherry",
    description: "It's popular, and ripens sooner than most other fruits.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png",
    seasons: [SEASONS.SPRING],
    sources: ["Cherry Tree"],
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
    shipping: {
      order: 121,
      usage: true,
    },
  },
  {
    id: 91,
    name: "Banana",
    description: "A sweet, starchy tropical fruit.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png",
    seasons: [SEASONS.SUMMER],
    sources: ["Banana Tree"],
    prices: [
      { color: "text-gray-900", cost: "150g" },
      { color: "text-gray-500", cost: Math.floor(150 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(150 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(150 * 2) + "g" },
    ],
    shipping: {
      order: 9,
      usage: true,
    },
  },
  {
    id: 834,
    name: "Mango",
    description: "A big, sweet tropical fruit with a unique flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png",
    seasons: [SEASONS.SUMMER],
    sources: ["Mango Tree"],
    prices: [
      { color: "text-gray-900", cost: "130g" },
      { color: "text-gray-500", cost: Math.floor(130 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(130 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(130 * 2) + "g" },
    ],
    shipping: {
      order: 140,
      usage: true,
    },
  },
  {
    id: 635,
    name: "Orange",
    description: "Juicy, tangy, and bursting with sweet summer aroma.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png",
    seasons: [SEASONS.SUMMER],
    sources: ["Orange Tree"],
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
    shipping: {
      order: 118,
      usage: true,
    },
  },
  {
    id: 636,
    name: "Peach",
    description: "It's almost fuzzy to the touch.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png",
    seasons: [SEASONS.SUMMER],
    sources: ["Peach Tree"],
    prices: [
      { color: "text-gray-900", cost: "140g" },
      { color: "text-gray-500", cost: Math.floor(140 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(140 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(140 * 2) + "g" },
    ],
    shipping: {
      order: 119,
      usage: true,
    },
  },
  {
    id: 613,
    name: "Apple",
    description: "A crisp fruit used for juice and cider.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png",
    seasons: [SEASONS.FALL],
    sources: ["Apple Tree"],
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
    shipping: {
      order: 115,
      usage: true,
    },
  },
  {
    id: 637,
    name: "Pomegranate",
    description: "Within the fruit are clusters of juicy seeds.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png",
    seasons: [SEASONS.FALL],
    sources: ["Pomegranate Tree"],
    prices: [
      { color: "text-gray-900", cost: "140g" },
      { color: "text-gray-500", cost: Math.floor(140 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(140 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(140 * 2) + "g" },
    ],
    shipping: {
      order: 120,
      usage: true,
    },
  },
];

export default trees;
