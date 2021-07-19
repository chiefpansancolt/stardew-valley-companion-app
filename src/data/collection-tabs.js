import { faCheckDouble, faListAlt, faBuilding } from "@fortawesome/free-solid-svg-icons";

const artifactsTabs = [
  {
    name: "All",
    icon: null,
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png",
    current: true,
  },
  { name: "Found", icon: faCheckDouble, current: false },
  { name: "Donated", icon: faBuilding, current: false },
  { name: "To-Do", icon: faListAlt, current: false },
];

export { artifactsTabs };
