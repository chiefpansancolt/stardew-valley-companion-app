import { faCheckDouble, faListAlt, faBuilding } from "@fortawesome/free-solid-svg-icons";

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
    img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png"
  },
  { name: "Caught", icon: faCheckDouble },
  { name: "To-Do", icon: faListAlt },
];

export { artifactsTabs, mineralTabs, fishTabs };
