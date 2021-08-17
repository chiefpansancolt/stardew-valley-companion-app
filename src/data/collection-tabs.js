import {
  faCheckDouble,
  faListAlt,
  faBuilding,
  faBlender,
  faPencilRuler,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const artifactsTabs = [
  {
    name: "All Artifacts",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Donated", icon: faBuilding },
  { name: "To-Be Donated", icon: faListAlt },
  { name: "To-Be Found", icon: faListAlt },
];

const mineralTabs = [
  {
    name: "All Minerals",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0e/Diamond_Node.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Donated", icon: faBuilding },
  { name: "To-Be Donated", icon: faListAlt },
  { name: "To-Be Found", icon: faListAlt },
];

const fishTabs = [
  {
    name: "All Fish",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
  },
  { name: "Caught", icon: faCheckDouble },
  { name: "To-Do", icon: faListAlt },
];

const monsterTabs = [
  {
    name: "All Monsters",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Bug.png/32px-Bug.png",
  },
  {
    name: "Eradication Goals",
    icon: faCheckDouble,
  },
  {
    name: "No Eradication Goals",
    icon: faListAlt,
  },
];

const foodTabs = [
  {
    name: "All Recipes",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Cooking_Icon.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Cooked", icon: faBlender },
  { name: "To-Be Cooked", icon: faListAlt },
  { name: "To-Be Found", icon: faListAlt },
];

const craftingTabs = [
  {
    name: "All Crafts",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Field_Snack.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Crafted", icon: faPencilRuler },
  { name: "To-Be Crafted", icon: faListAlt },
  { name: "To-Be Found", icon: faListAlt },
];

const cropTabs = [
  {
    name: "All Crops",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png",
  },
  { name: "Shipped", icon: faCheckDouble },
  { name: "Polycultured", icon: faShoppingBasket },
  { name: "To-Be Polycultured", icon: faListAlt },
  { name: "To-Be Shipped", icon: faListAlt },
];

const forageTabs = [
  {
    name: "All Foraging",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
  },
  { name: "Shipped", icon: faCheckDouble },
  { name: "To-Be Shipped", icon: faListAlt },
];

const artisanGoodsTabs = [
  {
    name: "All Artisan Goods",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png",
  },
  { name: "Shipped", icon: faCheckDouble },
  { name: "To-Be Shipped", icon: faListAlt },
];

export { artifactsTabs, mineralTabs, fishTabs, monsterTabs, foodTabs, craftingTabs, cropTabs, forageTabs, artisanGoodsTabs };
