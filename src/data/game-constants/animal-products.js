const animalProducts = [
  {
    id: 174,
    name: "Large Egg (White)",
    description: "It's an uncommonly large white egg!",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Large_Egg.png",
    shipping: {
      order: 11,
      usage: true,
    },
    sources: ["Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "95g" },
        { color: "text-gray-500", cost: Math.floor(95 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(95 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(95 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "114g" },
        { color: "text-gray-500", cost: Math.floor(114 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(114 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(114 * 2) + "g" },
      ],
    },
  },
  {
    id: 176,
    name: "Egg (White)",
    description: "A regular white chicken egg.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/26/Egg.png",
    shipping: {
      order: 12,
      usage: true,
    },
    sources: ["Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "50g" },
        { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "60g" },
        { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
      ],
    },
  },
  {
    id: 180,
    name: "Egg (Brown)",
    description: "A regular brown chicken egg.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Brown_Egg.png",
    shipping: {
      order: 13,
      usage: true,
    },
    sources: ["Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "50g" },
        { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "60g" },
        { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
      ],
    },
  },
  {
    id: 182,
    name: "Large Egg (Brown)",
    description: "It's an uncommonly large brown egg!",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/91/Large_Brown_Egg.png",
    shipping: {
      order: 14,
      usage: true,
    },
    sources: ["Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "95g" },
        { color: "text-gray-500", cost: Math.floor(95 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(95 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(95 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "114g" },
        { color: "text-gray-500", cost: Math.floor(114 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(114 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(114 * 2) + "g" },
      ],
    },
  },
  {
    id: 184,
    name: "Milk",
    description: "A jug of cow's milk.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/92/Milk.png",
    shipping: {
      order: 15,
      usage: true,
    },
    sources: ["Cows"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "125g" },
        { color: "text-gray-500", cost: Math.floor(125 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(125 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(125 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "150g" },
        { color: "text-gray-500", cost: Math.floor(150 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(150 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(150 * 2) + "g" },
      ],
    },
  },
  {
    id: 186,
    name: "Large Milk",
    description: "A large jug of cow's milk.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/67/Large_Milk.png",
    shipping: {
      order: 16,
      usage: true,
    },
    sources: ["Cows"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "190g" },
        { color: "text-gray-500", cost: Math.floor(190 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(190 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(190 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "228g" },
        { color: "text-gray-500", cost: Math.floor(228 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(228 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(228 * 2) + "g" },
      ],
    },
  },
  {
    id: 289,
    name: "Ostrich Egg",
    description: "It may be the world's largest egg.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Ostrich_Egg.png",
    shipping: {
      order: 44,
      usage: true,
    },
    sources: ["Ostrich"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "600g" },
        { color: "text-gray-500", cost: Math.floor(600 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(600 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(600 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "720g" },
        { color: "text-gray-500", cost: Math.floor(720 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(720 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(720 * 2) + "g" },
      ],
    },
  },
  {
    id: 305,
    name: "Void Egg",
    description: "A jet-black egg with red flecks. It's warm to the touch.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/58/Void_Egg.png",
    shipping: {
      order: 49,
      usage: true,
    },
    sources: ["Void Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "65g" },
        { color: "text-gray-500", cost: Math.floor(65 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(65 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(65 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "78g" },
        { color: "text-gray-500", cost: Math.floor(78 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(78 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(78 * 2) + "g" },
      ],
    },
  },
  {
    id: 928,
    name: "Golden Egg",
    description: "A very rare and special egg with a solid gold shell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/97/Golden_Egg.png",
    shipping: {
      usage: false,
    },
    sources: ["Golden Chicken"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "500g" },
        { color: "text-gray-500", cost: Math.floor(500 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(500 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(500 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "600g" },
        { color: "text-gray-500", cost: Math.floor(600 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(600 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(600 * 2) + "g" },
      ],
    },
  },
  {
    id: 430,
    name: "Truffle",
    description: "A gourmet type of mushroom with a unique taste.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Truffle.png",
    shipping: {
      order: 98,
      usage: true,
    },
    sources: ["Pigs"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "625g" },
        { color: "text-gray-500", cost: Math.floor(625 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(625 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(625 * 2) + "g" },
      ],
    },
  },
  {
    id: 436,
    name: "Goat Milk",
    description: "The milk of a goat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
    shipping: {
      order: 101,
      usage: true,
    },
    sources: ["Goats"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "225g" },
        { color: "text-gray-500", cost: Math.floor(225 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(225 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(225 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "270g" },
        { color: "text-gray-500", cost: Math.floor(270 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(270 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(270 * 2) + "g" },
      ],
    },
  },
  {
    id: 438,
    name: "Large Goat Milk",
    description: "A gallon of creamy goat's milk.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Large_Goat_Milk.png",
    shipping: {
      order: 102,
      usage: true,
    },
    sources: ["Goats"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "345g" },
        { color: "text-gray-500", cost: Math.floor(345 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(345 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(345 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "414g" },
        { color: "text-gray-500", cost: Math.floor(414 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(414 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(414 * 2) + "g" },
      ],
    },
  },
  {
    id: 440,
    name: "Wool",
    description: "Soft, fluffy wool.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/34/Wool.png",
    shipping: {
      order: 103,
      usage: true,
    },
    sources: ["Rabbits", "Sheep"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "340g" },
        { color: "text-gray-500", cost: Math.floor(340 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(340 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(340 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "408g" },
        { color: "text-gray-500", cost: Math.floor(408 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(408 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(408 * 2) + "g" },
      ],
    },
  },
  {
    id: 442,
    name: "Duck Egg",
    description: "It's still warm.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Duck_Egg.png",
    shipping: {
      order: 104,
      usage: true,
    },
    sources: ["Ducks"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "95g" },
        { color: "text-gray-500", cost: Math.floor(95 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(95 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(95 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "114g" },
        { color: "text-gray-500", cost: Math.floor(114 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(114 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(114 * 2) + "g" },
      ],
    },
  },
  {
    id: 444,
    name: "Duck Feather",
    description: "It's so colorful.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png",
    shipping: {
      order: 105,
      usage: true,
    },
    sources: ["Ducks"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "250g" },
        { color: "text-gray-500", cost: Math.floor(250 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(250 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(250 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "300g" },
        { color: "text-gray-500", cost: Math.floor(300 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(300 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(300 * 2) + "g" },
      ],
    },
  },
  {
    id: 446,
    name: "Rabbit's Foot",
    description: "Some say it's lucky.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Rabbit%27s_Foot.png",
    shipping: {
      order: 107,
      usage: true,
    },
    sources: ["Rabbits", "Serpent"],
    prices: {
      standard: [
        { color: "text-gray-900", cost: "565g" },
        { color: "text-gray-500", cost: Math.floor(565 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(565 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(565 * 2) + "g" },
      ],
      rancher: [
        { color: "text-gray-900", cost: "678g" },
        { color: "text-gray-500", cost: Math.floor(678 * 1.25) + "g" },
        { color: "text-yellow-500", cost: Math.floor(678 * 1.5) + "g" },
        { color: "text-purple-500", cost: Math.floor(678 * 2) + "g" },
      ],
    },
  },
  {
    id: 766,
    name: "Slime",
    description: "A shimmering, gelatinous glob with no smell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png",
    shipping: {
      order: 127,
      usage: true,
    },
    sources: ["Slimes", "Slime Ball", "Fish Pond"],
    price: "5g",
  },
  {
    id: 812,
    name: "Roe",
    description: "Fresh fish eggs. These can be aged in a preserves jar to bring out more flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/56/Roe.png",
    shipping: {
      order: 134,
      usage: true,
    },
    sources: ["Fish Pond"],
    price: "30g + (base fish price / 2)",
  },
  {
    id: 814,
    name: "Squid Ink",
    description: "Squid use this ink to confuse would-be predators.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/ac/Squid_Ink.png",
    shipping: {
      order: 135,
      usage: true,
    },
    sources: ["Squid Kid", "Squid (Fish Pond)", "Midnight Squid (Fish Pond)"],
    price: "110g",
  },
];

export default animalProducts;
