const LOCATIONS = {
  SPRING: "Spring",
  SUMMER: "Summer",
  FALL: "Fall",
  WINTER: "Winter",
  ALL: "All",
  BEACH: "The Beach",
  MINES: "The Mines",
  DESERT: "The Desert",
  GINGER: "Ginger Island",
};

const foraging = [
  {
    id: 92,
    name: "Sap",
    description: "A fluid obtained from trees.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/73/Sap.png",
    locations: [
      LOCATIONS.ALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "2g" },
    ],
  },
  {
    id: 16,
    name: "Wild Horseradish",
    description: "A spicy root found in the spring.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
  },
  {
    id: 18,
    name: "Daffodil",
    description: "A traditional spring flower that makes a nice gift.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "30g" },
      { color: "text-gray-500", cost: Math.floor(30 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(30 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(30 * 2) + "g" },
    ],
  },
  {
    id: 20,
    name: "Leek",
    description: "A tasty relative of the onion.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
      { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
    ],
  },
  {
    id: 22,
    name: "Dandelion",
    description: "Not the prettiest flower, but the leaves make a good salad.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "40g" },
      { color: "text-gray-500", cost: Math.floor(40 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(40 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(40 * 2) + "g" },
    ],
  },
  {
    id: 399,
    name: "Spring Onion",
    description: "These grow wild during the spring.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0c/Spring_Onion.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "8g" },
      { color: "text-gray-500", cost: Math.floor(8 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(8 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(8 * 2) + "g" },
    ],
  },
  {
    id: 257,
    name: "Morel",
    description: "Sought after for its unique nutty flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Morel.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "150g" },
      { color: "text-gray-500", cost: Math.floor(150 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(150 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(150 * 2) + "g" },
    ],
  },
  {
    id: 404,
    name: "Common Mushroom",
    description: "Slightly nutty, with good texture.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png",
    locations: [
      LOCATIONS.SPRING,
      LOCATIONS.SUMMER,
      LOCATIONS.FALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "40g" },
      { color: "text-gray-500", cost: Math.floor(40 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(40 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(40 * 2) + "g" },
    ],
  },
  {
    id: 296,
    name: "Salmonberry",
    description: "A spring-time berry with the flavor of the forest.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/59/Salmonberry.png",
    locations: [
      LOCATIONS.SPRING,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "5g" },
      { color: "text-gray-500", cost: Math.floor(5 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(5 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(5 * 2) + "g" },
    ],
  },
  {
    id: 396,
    name: "Spice Berry",
    description: "It fills the air with a pungent aroma.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png",
    locations: [
      LOCATIONS.SUMMER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
  },
  {
    id: 398,
    name: "Grape",
    description: "A sweet cluster of fruit.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png",
    locations: [
      LOCATIONS.SUMMER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
  },
  {
    id: 402,
    name: "Sweat Pea",
    description: "A fragrant summer flower.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png",
    locations: [
      LOCATIONS.SUMMER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
  },
  {
    id: 420,
    name: "Red Mushroom",
    description: "A spotted mushroom sometimes found in caves.	",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png",
    locations: [
      LOCATIONS.SUMMER,
      LOCATIONS.FALL,
      LOCATIONS.MINES,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "75g" },
      { color: "text-gray-500", cost: Math.floor(75 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(75 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(75 * 2) + "g" },
    ],
  },
  {
    id: 259,
    name: "Fiddlehead Fern",
    description: "The young shoots are an edible specialty.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png",
    locations: [
      LOCATIONS.SUMMER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "90g" },
      { color: "text-gray-500", cost: Math.floor(90 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(90 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(90 * 2) + "g" },
    ],
  },
  {
    id: 406,
    name: "Wild Plum",
    description: "Tart and juicy with a pungent aroma.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png",
    locations: [
      LOCATIONS.FALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
  },
  {
    id: 408,
    name: "Hazelnut",
    description: "That's one big hazelnut!",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png",
    locations: [
      LOCATIONS.FALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "90g" },
      { color: "text-gray-500", cost: Math.floor(90 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(90 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(90 * 2) + "g" },
    ],
  },
  {
    id: 410,
    name: "Blackberry",
    description: "An early-fall treat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png",
    locations: [
      LOCATIONS.FALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "20g" },
      { color: "text-gray-500", cost: Math.floor(20 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(20 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(20 * 2) + "g" },
    ],
  },
  {
    id: 281,
    name: "Chanterelle",
    description: "A tasty mushroom with a fruity smell and slightly peppery flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Chanterelle.png",
    locations: [
      LOCATIONS.FALL,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "160g" },
      { color: "text-gray-500", cost: Math.floor(160 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(160 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(160 * 2) + "g" },
    ],
  },
  {
    id: 422,
    name: "Purple Mushroom",
    description: "A rare mushroom found deep in caves.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png",
    locations: [
      LOCATIONS.FALL,
      LOCATIONS.MINES,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "250g" },
      { color: "text-gray-500", cost: Math.floor(250 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(250 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(250 * 2) + "g" },
    ],
  },
  {
    id: 412,
    name: "Winter Root",
    description: "A starchy tuber.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png",
    locations: [
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "70g" },
      { color: "text-gray-500", cost: Math.floor(70 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(70 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(70 * 2) + "g" },
    ],
  },
  {
    id: 414,
    name: "Crystal Fruit",
    description: "A delicate fruit that pops up from the snow.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png",
    locations: [
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "150g" },
      { color: "text-gray-500", cost: Math.floor(150 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(150 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(150 * 2) + "g" },
    ],
  },
  {
    id: 416,
    name: "Snow Yam",
    description: "This little yam was hiding beneath the snow.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png",
    locations: [
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
  },
  {
    id: 418,
    name: "Crocus",
    description: "A flower that can bloom in the winter.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png",
    locations: [
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
      { color: "text-gray-500", cost: Math.floor(60 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(60 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(60 * 2) + "g" },
    ],
  },
  {
    id: 283,
    name: "Holly",
    description: "The leaves and bright red berries make a popular winter decoration.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b8/Holly.png",
    locations: [
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
  },
  {
    id: 392,
    name: "Nautilus Shell",
    description: "An ancient shell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Nautilus_Shell.png",
    locations: [
      LOCATIONS.BEACH,
      LOCATIONS.WINTER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "120g" },
      { color: "text-gray-500", cost: Math.floor(120 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(120 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(120 * 2) + "g" },
    ],
  },
  {
    id: 393,
    name: "Coral",
    description: "A colony of tiny creatures that clump together to form beautiful structures.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Coral.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "80g" },
      { color: "text-gray-500", cost: Math.floor(80 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(80 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(80 * 2) + "g" },
    ],
  },
  {
    id: 397,
    name: "Sea Urchin",
    description: "A slow-moving, spiny creature that some consider a delicacy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "160g" },
      { color: "text-gray-500", cost: Math.floor(160 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(160 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(160 * 2) + "g" },
    ],
  },
  {
    id: 394,
    name: "Rainbow Shell",
    description: "It's a very beautiful shell.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Rainbow_Shell.png",
    locations: [
      LOCATIONS.BEACH,
      LOCATIONS.SUMMER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "300g" },
      { color: "text-gray-500", cost: Math.floor(300 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(300 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(300 * 2) + "g" },
    ],
  },
  {
    id: 372,
    name: "Clam",
    description: "Someone lived here once.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
  },
  {
    id: 718,
    name: "Cockle",
    description: "A common saltwater clam.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Cockle.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "50g" },
      { color: "text-gray-500", cost: Math.floor(50 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(50 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(50 * 2) + "g" },
    ],
  },
  {
    id: 719,
    name: "Mussel",
    description: "A common bivalve that often lives in clusters.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "30g" },
      { color: "text-gray-500", cost: Math.floor(30 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(30 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(30 * 2) + "g" },
    ],
  },
  {
    id: 723,
    name: "Oyster",
    description: "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "40g" },
      { color: "text-gray-500", cost: Math.floor(40 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(40 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(40 * 2) + "g" },
    ],
  },
  {
    id: 152,
    name: "Seaweed",
    description: "It can be used in cooking.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png",
    locations: [
      LOCATIONS.BEACH,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "20g" },
      { color: "text-gray-500", cost: Math.floor(20 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(20 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(20 * 2) + "g" },
    ],
  },
  {
    id: 78,
    name: "Cave Carrot",
    description: "A starchy snack found in caves. It helps miners work longer.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/34/Cave_Carrot.png",
    locations: [
      LOCATIONS.MINES,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "25g" },
    ],
  },
  {
    id: 90,
    name: "Cactus Fruit",
    description: "The sweet fruit of the prickly pear cactus.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png",
    locations: [
      LOCATIONS.DESERT,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "75g" },
      { color: "text-gray-500", cost: Math.floor(75 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(75 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(75 * 2) + "g" },
    ],
  },
  {
    id: 88,
    name: "Cocunut",
    description: "A seed of the coconut palm. It has many culinary uses.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png",
    locations: [
      LOCATIONS.DESERT,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "100g" },
      { color: "text-gray-500", cost: Math.floor(100 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(100 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(100 * 2) + "g" },
    ],
  },
  {
    id: 829,
    name: "Ginger",
    description: "This sharp, spicy root is said to increase vitality.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/85/Ginger.png",
    locations: [
      LOCATIONS.GINGER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "60g" },
    ],
  },
  {
    id: 851,
    name: "Magma Cap",
    description: "A very rare mushroom that lives next to pools of lava.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/77/Magma_Cap.png",
    locations: [
      LOCATIONS.GINGER,
    ],
    shipping: true,
    prices: [
      { color: "text-gray-900", cost: "400g" },
      { color: "text-gray-500", cost: Math.floor(400 * 1.25) + "g" },
      { color: "text-yellow-500", cost: Math.floor(400 * 1.5) + "g" },
      { color: "text-purple-500", cost: Math.floor(400 * 2) + "g" },
    ],
  },
];

export default foraging;