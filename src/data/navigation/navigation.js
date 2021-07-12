import {
  faFish,
  faMortarPestle,
  faGem,
  faHamburger,
  faSeedling,
  faTree,
  faHammer,
  faBuilding,
  faExclamationCircle,
  faCheese,
  faHorse,
  faShoppingCart,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { CollectionIcon, UserGroupIcon } from "@heroicons/react/outline";
import { DashboardIcon, UserIcon } from "@iconicicons/react";

const navigation = [
  { name: "Overview", href: "/", icon: DashboardIcon, standardIcon: true },
  { name: "Character", href: "/character", icon: UserIcon, standardIcon: true },
  { name: "Town People", href: "#", icon: UserGroupIcon, standardIcon: true },
  {
    name: "Collections",
    href: "#",
    icon: CollectionIcon,
    standardIcon: true,
    current: false,
    children: [
      { name: "Artifacts", href: "#", icon: faMortarPestle, standardIcon: false },
      { name: "Minerals", href: "#", icon: faGem, standardIcon: false },
      { name: "Fish", href: "#", icon: faFish, standardIcon: false },
      { name: "Artisan Goods", href: "#", icon: faCheese, standardIcon: false },
      { name: "Food", href: "#", icon: faHamburger, standardIcon: false },
      { name: "Foraging", href: "#", icon: faTree, standardIcon: false },
      { name: "Crops", href: "#", icon: faSeedling, standardIcon: false },
      { name: "Crafting", href: "#", icon: faHammer, standardIcon: false },
    ],
  },
  { name: "Animals", href: "#", icon: faHorse, standardIcon: false },
  { name: "Community Center", href: "#", icon: faBuilding, standardIcon: false },
  { name: "Quests", href: "#", icon: faExclamationCircle, standardIcon: false },
  { name: "Mines", href: "#", icon: faShoppingCart, standardIcon: false },
  { name: "GrandFather Note", href: "#", icon: faStickyNote, standardIcon: false },
];

export default navigation;
