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
  { name: "Town People", href: "/town-people", icon: UserGroupIcon, standardIcon: true },
  {
    name: "Collections",
    href: "#",
    icon: CollectionIcon,
    standardIcon: true,
    current: false,
    children: [
      { name: "Artifacts", href: "/collection/artifacts", icon: faMortarPestle, standardIcon: false },
      { name: "Minerals", href: "/collection/minerals", icon: faGem, standardIcon: false },
      { name: "Fish", href: "/collection/fish", icon: faFish, standardIcon: false },
      { name: "Artisan Goods", href: "/collection/artisan-goods", icon: faCheese, standardIcon: false },
      { name: "Food", href: "/collection/food", icon: faHamburger, standardIcon: false },
      { name: "Foraging", href: "/collection/foraging", icon: faTree, standardIcon: false },
      { name: "Crops", href: "/collection/crops", icon: faSeedling, standardIcon: false },
      { name: "Crafting", href: "/collection/crafting", icon: faHammer, standardIcon: false },
    ],
  },
  { name: "Animals", href: "/animals", icon: faHorse, standardIcon: false },
  { name: "Community Center", href: "/community-center", icon: faBuilding, standardIcon: false },
  { name: "Quests", href: "/quests", icon: faExclamationCircle, standardIcon: false },
  { name: "Mines", href: "/mines", icon: faShoppingCart, standardIcon: false },
  { name: "GrandFather Note", href: "/grandfather-note", icon: faStickyNote, standardIcon: false },
];

export default navigation;
