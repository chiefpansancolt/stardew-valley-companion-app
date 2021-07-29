import { faCheckDouble, faListAlt, faBuilding, faBlender } from "@fortawesome/free-solid-svg-icons";

const artifactsTabs = [
  {
    name: "All",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Donated", icon: faBuilding },
  { name: "To-Do", icon: faListAlt },
];

const mineralTabs = [
  {
    name: "All",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0e/Diamond_Node.png",
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Donated", icon: faBuilding },
  { name: "To-Do", icon: faListAlt },
];

const fishTabs = [
  {
    name: "All",
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
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Cooking_Icon.png"
  },
  { name: "Found", icon: faCheckDouble },
  { name: "Cooked", icon: faBlender },
  { name: "To-Do", icon: faListAlt },
];

export { artifactsTabs, mineralTabs, fishTabs, monsterTabs, foodTabs };
