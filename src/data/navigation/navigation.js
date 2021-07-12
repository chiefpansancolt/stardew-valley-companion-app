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
  { name: "Overview", href: "/", icon: DashboardIcon, standardIcon: true, current: true },
  { name: "Character", href: "#", icon: UserIcon, standardIcon: true, current: false },
  { name: "Town People", href: "#", icon: UserGroupIcon, standardIcon: true, current: false },
  {
    name: "Collections",
    href: "#",
    icon: CollectionIcon,
    standardIcon: true,
    current: false,
    children: [
      { name: "Artifacts", href: "#", icon: faMortarPestle, standardIcon: false, current: false },
      { name: "Minerals", href: "#", icon: faGem, standardIcon: false, current: false },
      { name: "Fish", href: "#", icon: faFish, standardIcon: false, current: false },
      { name: "Artisan Goods", href: "#", icon: faCheese, standardIcon: false, current: false },
      { name: "Food", href: "#", icon: faHamburger, standardIcon: false, current: false },
      { name: "Foraging", href: "#", icon: faTree, standardIcon: false, current: false },
      { name: "Crops", href: "#", icon: faSeedling, standardIcon: false, current: false },
      { name: "Crafting", href: "#", icon: faHammer, standardIcon: false, current: false },
    ],
  },
  { name: "Animals", href: "#", icon: faHorse, standardIcon: false, current: false },
  { name: "Community Center", href: "#", icon: faBuilding, standardIcon: false, current: false },
  { name: "Quests", href: "#", icon: faExclamationCircle, standardIcon: false, current: false },
  { name: "Mines", href: "#", icon: faShoppingCart, standardIcon: false, current: false },
  { name: "GrandFather Note", href: "#", icon: faStickyNote, standardIcon: false, current: false },
];

export default navigation;
