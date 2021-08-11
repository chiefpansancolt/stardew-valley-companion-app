const SEASONS = {
  SPRING: "Spring",
  SUMMER: "Summer",
  FALL: "Fall",
  WINTER: "Winter",
  ALLGINGER: "All Seasons on Ginger Island",
  INDOORS: "Indoors",
};

const crops = [
  {
    id: 597,
    name: "Blue Jazz",
    description: "The flower grows in a sphere to invite as many butterflies as possible.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png",
    harvest: "7 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: false,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 30g",
      "JojaMart: 37g"
    ]
  },
  {
    id: 190,
    name: "Cauliflower",
    description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png",
    harvest: "12 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "175g" },
      { color: "text-gray-500", cost: Math.floor(175 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(175 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(175 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 80g",
      "JojaMart: 100g"
    ]
  },
  {
    id: 433,
    name: "Coffee Bean",
    description: "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png",
    harvest: "10 Days",
    regrowth: "2 Days",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "15g" },
      { color: "text-gray-500", cost: Math.floor(15 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(15 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(15 * 2) + "g" },
    ],
    sources: [
      "Traveling Cart: 2,500g",
      "Dust Sprite (1% chance)"
    ]
  },
  {
    id: 248,
    name: "Garlic",
    description: "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png",
    harvest: "4 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
      { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 40g",
    ]
  },
  {
    id: 188,
    name: "Green Bean",
    description: "A juicy little bean with a cool, crisp snap.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png",
    harvest: "10 Days",
    regrowth: "3 Days",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "40g" },
      { color: "text-gray-500", cost: Math.floor(40 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(40 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(40 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 60g",
      "JojaMart: 75g"
    ]
  },
  {
    id: 250,
    name: "Kale",
    description: "The waxy leaves are great in soups and stir frys.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png",
    harvest: "6 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "110g" },
      { color: "text-gray-500", cost: Math.floor(110 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(110 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(110 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 70g",
      "JojaMart: 87g"
    ]
  },
  {
    id: 24,
    name: "Parsnips",
    description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
    harvest: "4 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "35g" },
      { color: "text-gray-500", cost: Math.floor(35 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(35 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(35 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 20g",
      "JojaMart: 25g"
    ]
  },
  {
    id: 192,
    name: "Potato",
    description: "A widely cultivated tuber.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png",
    harvest: "6 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 50g",
      "JojaMart: 62g"
    ]
  },
  {
    id: 252,
    name: "Rhubarb",
    description: "The stalks are extremely tart, but make a great dessert when sweetened.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png",
    harvest: "13 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "220g" },
      { color: "text-gray-500", cost: Math.floor(220 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(220 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(220 * 2) + "g" },
    ],
    sources: [
      "Oasis: 100g",
    ]
  },
  {
    id: 400,
    name: "Strawberry",
    description: "A sweet, juicy favorite with an appealing red color.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png",
    harvest: "8 Days",
    regrowth: "4 Days",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "120g" },
      { color: "text-gray-500", cost: Math.floor(120 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(120 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(120 * 2) + "g" },
    ],
    sources: [
      "Egg Festival: 100g",
    ]
  },
  {
    id: 591,
    name: "Tulip",
    description: "The most popular spring flower. Has a very faint sweet smell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png",
    harvest: "6 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: false,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "30g" },
      { color: "text-gray-500", cost: Math.floor(30 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(30 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(30 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 20g",
      "JojaMart: 25g"
    ]
  },
  {
    id: 271,
    name: "Unmilled Rice",
    description: "Rice in its rawest form. Run this through a mill to increase the value.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Unmilled_Rice.png",
    harvest: "8 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "30g" },
      { color: "text-gray-500", cost: Math.floor(30 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(30 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(30 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 40g",
    ]
  },
  {
    id: 258,
    name: "Blueberry",
    description: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png",
    harvest: "13 Days",
    regrowth: "4 Days",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 80g"
    ]
  },
  {
    id: 270,
    name: "Corn",
    description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png",
    harvest: "14 Days",
    regrowth: "4 Days",
    seasons: [
      SEASONS.SUMMER,
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 150g",
      "JojaMart: 187g"
    ]
  },
  {
    id: 304,
    name: "Hops",
    description: "A bitter, tangy flower used to flavor beer.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png",
    harvest: "11 Days",
    regrowth: "1 day",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "25g" },
      { color: "text-gray-500", cost: Math.floor(25 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(25 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(25 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 60g",
      "JojaMart: 75g"
    ]
  },
  {
    id: 260,
    name: "Hot Pepper",
    description: "Fiery hot with a hint of sweetness.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png",
    harvest: "5 Days",
    regrowth: "3 Days",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "40g" },
      { color: "text-gray-500", cost: Math.floor(40 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(40 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(40 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 40g",
      "JojaMart: 50g"
    ]
  },
  {
    id: 254,
    name: "Melon",
    description: "A cool, sweet summer treat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png",
    harvest: "12 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "250g" },
      { color: "text-gray-500", cost: Math.floor(250 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(250 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(250 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 80g",
      "JojaMart: 100g"
    ]
  },
  {
    id: 376,
    name: "Poppy",
    description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png",
    harvest: "7 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "140g" },
      { color: "text-gray-500", cost: Math.floor(140 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(140 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(140 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 100g",
      "JojaMart: 125g"
    ]
  },
  {
    id: 264,
    name: "Radish",
    description: "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png",
    harvest: "6 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "90g" },
      { color: "text-gray-500", cost: Math.floor(90 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(90 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(90 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 40g",
      "JojaMart: 50g"
    ]
  },
  {
    id: 266,
    name: "Red Cabbage",
    description: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png",
    harvest: "9 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "260g" },
      { color: "text-gray-500", cost: Math.floor(260 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(260 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(260 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 100g"
    ]
  },
  {
    id: 268,
    name: "Starfruit",
    description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png",
    harvest: "13 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "750g" },
      { color: "text-gray-500", cost: Math.floor(750 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(750 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(750 * 2) + "g" },
    ],
    sources: [
      "Oasis: 400g"
    ]
  },
  {
    id: 593,
    name: "Summer Spangle",
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png",
    harvest: "8 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "90g" },
      { color: "text-gray-500", cost: Math.floor(90 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(90 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(90 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 50g",
      "JojaMart: 62g"
    ]
  },
  {
    id: 421,
    name: "Sunflower",
    description: "A common misconception is that the flower turns so it's always facing the sun.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png",
    harvest: "8 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 200g",
      "JojaMart: 125g"
    ]
  },
  {
    id: 256,
    name: "Tomato",
    description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
    harvest: "11 Days",
    regrowth: "4 Days",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
      { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 50g",
      "JojaMart: 62g"
    ]
  },
  {
    id: 262,
    name: "Wheat",
    description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png",
    harvest: "4 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "25g" },
      { color: "text-gray-500", cost: Math.floor(25 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(25 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(25 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 10g",
      "JojaMart: 12g"
    ]
  },
  {
    id: 300,
    name: "Amaranth",
    description: "A purple grain cultivated by an ancient civilization.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png",
    harvest: "7 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "150g" },
      { color: "text-gray-500", cost: Math.floor(150 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(150 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(150 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 70g",
      "JojaMart: 87g"
    ]
  },
  {
    id: 274,
    name: "Artichoke",
    description: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png",
    harvest: "8 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "160g" },
      { color: "text-gray-500", cost: Math.floor(160 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(160 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(160 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 30g"
    ]
  },
  {
    id: 284,
    name: "Beet",
    description: "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png",
    harvest: "6 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
    sources: [
      "Oasis: 20g"
    ]
  },
  {
    id: 278,
    name: "Bok Choy",
    description: "The leafy greens and fibrous stalks are healthy and delicious.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png",
    harvest: "4 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 50g",
      "JojaMart: 62g"
    ]
  },
  {
    id: 282,
    name: "Cranberries",
    description: "These tart red berries are a traditional winter food.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png",
    harvest: "7 Days",
    regrowth: "5 Days",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "75g" },
      { color: "text-gray-500", cost: Math.floor(75 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(75 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(75 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 240g",
      "JojaMart: 300g"
    ]
  },
  {
    id: 272,
    name: "Eggplant",
    description: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png",
    harvest: "5 Days",
    regrowth: "5 Days",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
      { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 20g",
      "JojaMart: 25g"
    ]
  },
  {
    id: 595,
    name: "Fairy Rose",
    description: "An old folk legend suggests that the sweet smell of this flower attracts fairies.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Fairy_Rose.png",
    harvest: "12 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: false,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "290g" },
      { color: "text-gray-500", cost: Math.floor(290 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(290 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(290 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 200g",
      "JojaMart: 250g"
    ]
  },
  {
    id: 398,
    name: "Grape",
    description: "A sweet cluster of fruit.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png",
    harvest: "10 Days",
    regrowth: "3 Days",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 60g",
      "JojaMart: 75g"
    ]
  },
  {
    id: 276,
    name: "Pumpkin",
    description: "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png",
    harvest: "13 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "320g" },
      { color: "text-gray-500", cost: Math.floor(320 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(320 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(320 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 100g",
      "JojaMart: 125g"
    ]
  },
  {
    id: 280,
    name: "Yam",
    description: "A starchy tuber with a lot of culinary versatility.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png",
    harvest: "10 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: true,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "160g" },
      { color: "text-gray-500", cost: Math.floor(160 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(160 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(160 * 2) + "g" },
    ],
    sources: [
      "Pierre's: 60g",
      "JojaMart: 75g"
    ]
  },
  {
    id: 454,
    name: "Ancient Fruit",
    description: "It's been dormant for eons.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png",
    harvest: "28 Days",
    regrowth: "7 Days",
    seasons: [
      SEASONS.SPRING,
      SEASONS.SUMMER,
      SEASONS.FALL
    ],
    shipping: true,
    polyculture: false,
    monoculture: true,
    prices: [
      { color: "text-gray-900", cost: "550g" },
      { color: "text-gray-500", cost: Math.floor(550 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(550 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(550 * 2) + "g" },
    ],
    sources: [
      "Crafting Recipe: Free",
      "Traveling Cart: 100-1,000g"
    ]
  },
  {
    id: 90,
    name: "Cactus Fruit",
    description: "The sweet fruit of the prickly pear cactus.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png",
    harvest: "12 Days",
    regrowth: "3 Days",
    seasons: [
      "Greenhouse",
      SEASONS.INDOORS,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "75g" },
      { color: "text-gray-500", cost: Math.floor(75 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(75 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(75 * 2) + "g" },
    ],
    sources: [
      "Oasis: 150g",
    ]
  },
  {
    id: 771,
    name: "Fiber",
    description: "Raw material sourcesd from plants.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/45/Fiber.png",
    harvest: "7 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SPRING,
      SEASONS.SUMMER,
      SEASONS.FALL,
      SEASONS.WINTER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "1g" },
    ],
    sources: [
      "Crafting Recipe: Free",
    ]
  },
  {
    id: 832,
    name: "Pineapple",
    description: "A sweet and tangy tropical treat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png",
    harvest: "14 Days",
    regrowth: "7 Days",
    seasons: [
      SEASONS.SUMMER,
      SEASONS.ALLGINGER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "300g" },
      { color: "text-gray-500", cost: Math.floor(300 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(300 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(300 * 2) + "g" },
    ],
    sources: [
      "Island Trader:",
      "Magma Cap (1)"
    ]
  },
  {
    id: 830,
    name: "Taro Root",
    description: "This starchy root is one of the most ancient crops.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png",
    harvest: "10 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.SUMMER,
      SEASONS.ALLGINGER,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
    sources: [
      "Island Trader:",
      "Bone Fragment (2)",
    ]
  },
  {
    id: 417,
    name: "Sweet Gem Berry",
    description: "It's by far the sweetest thing you've ever smelled.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png",
    harvest: "24 Days",
    regrowth: "n/a",
    seasons: [
      SEASONS.FALL,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "3,000g" },
      { color: "text-gray-500", cost: Math.floor(3000 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(3000 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(3000 * 2) + "g" },
    ],
    sources: [
      "Traveling Cart: 1,000g",
    ]
  },
  {
    id: 815,
    name: "Tea Leaves",
    description: "The young leaves of the tea plant. Can be brewed into the popular, energizing beverage.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Tea_Leaves.png",
    harvest: "20 Days",
    regrowth: "1 day",
    seasons: [
      SEASONS.SPRING,
      SEASONS.SUMMER,
      SEASONS.FALL,
      SEASONS.INDOORS,
    ],
    shipping: true,
    polyculture: false,
    monoculture: false,
    prices: [
      { color: "text-gray-900", cost: "50g" },
    ],
    sources: [
      "Crafting Recipe: Free",
    ]
  },
];

export default crops;