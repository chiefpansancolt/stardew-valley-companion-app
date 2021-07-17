const skillLevelNumbers = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];

const skillTitle = function (skillTotal, isMale) {
  switch (skillTotal) {
    case 0:
    case 1:
    case 2:
      return "Newcomer";
    case 3:
    case 4:
      return "Greenhorn";
    case 5:
    case 6:
      return "Bumpkin";
    case 7:
    case 8:
      return "Cowpoke";
    case 9:
    case 10:
      return "Farmhand";
    case 11:
    case 12:
      return "Tiller";
    case 13:
    case 14:
      return "Smallholder";
    case 15:
    case 16:
      return "Sodbuster";
    case 17:
    case 18:
      return "Farm" + (isMale ? "Boy" : "Girl");
    case 19:
    case 20:
      return "Granger";
    case 21:
    case 22:
      return "Planter";
    case 23:
    case 24:
      return "Rancher";
    case 25:
    case 26:
      return "Farmer";
    case 27:
    case 28:
      return "Agriculturist";
    case 29:
      return "Cropmaster";
    default:
      return "Farm King";
  }
};

const skills = [
  {
    name: "Farming",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Farming_Skill_Icon.png",
    description:
      "Farming skill is gained by harvesting crops. Caring for animals also adds experience: Petting, milking, and shearing farm animals or picking up an animal product inside a barn or coop each give 5 experience points. Using a hoe or watering can does not grant experience by itself. Each level grants +1 proficiency to hoes and watering cans.",
    height: "h-44",
    levels: [
      {
        name: "Level 1",
        num: 1,
        items: [
          {
            name: "Scarecrow",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/75/Scarecrow.png/24px-Scarecrow.png",
            link: "/collection/crafting",
          },
          {
            name: "Basic Fertilizer",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9b/Basic_Fertilizer.png/24px-Basic_Fertilizer.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 2",
        num: 2,
        items: [
          {
            name: "Mayonnaise Machine",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Mayonnaise_Machine.png/24px-Mayonnaise_Machine.png",
            link: "/collection/crafting",
          },
          {
            name: "Stone Fence",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2d/Stone_Fence.png/24px-Stone_Fence.png",
            link: "/collection/crafting",
          },
          {
            name: "Sprinkler",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/08/Sprinkler.png/24px-Sprinkler.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 3",
        num: 3,
        items: [
          {
            name: "Bee House",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bee_House.png/24px-Bee_House.png",
            link: "/collection/crafting",
          },
          {
            name: "Speed-Gro",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Speed-Gro.png/24px-Speed-Gro.png",
            link: "/collection/crafting",
          },
          {
            name: "Farmer's Lunch",
            img: "https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png",
            link: "/collection/food",
          },
        ],
      },
      {
        name: "Level 4",
        num: 4,
        items: [
          {
            name: "Preserves Jar",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Preserves_Jar.png/24px-Preserves_Jar.png",
            link: "/collection/crafting",
          },
          {
            name: "Basic Retaining Soil",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c7/Basic_Retaining_Soil.png/24px-Basic_Retaining_Soil.png",
            link: "/collection/crafting",
          },
          {
            name: "Iron Fence",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9d/Iron_Fence.png/24px-Iron_Fence.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 5",
        num: 5,
        items: [
          [
            {
              name: "Rancher",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3c/Rancher.png/24px-Rancher.png",
              description: "Animal products worth 20% more.",
            },
          ],
          [
            {
              name: "Tiller",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/b/b2/Tiller.png/24px-Tiller.png",
              description: "Crops worth 10% more.",
            },
          ],
        ],
      },
      {
        name: "Level 6",
        num: 6,
        items: [
          {
            name: "Cheese Press",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Cheese_Press.png/24px-Cheese_Press.png",
            link: "/collection/crafting",
          },
          {
            name: "Hardwood Fence",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5c/Hardwood_Fence.png/24px-Hardwood_Fence.png",
            link: "/collection/crafting",
          },
          {
            name: "Quality Sprinkler",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Quality_Sprinkler.png/24px-Quality_Sprinkler.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 7",
        num: 7,
        items: [
          {
            name: "Loom",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3b/Loom.png/24px-Loom.png",
            link: "/collection/crafting",
          },
          {
            name: "Quality Retaining Soil",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/0a/Quality_Retaining_Soil.png/24px-Quality_Retaining_Soil.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 8",
        num: 8,
        items: [
          {
            name: "Oil Maker",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c5/Oil_Maker.png/24px-Oil_Maker.png",
            link: "/collection/crafting",
          },
          {
            name: "Keg",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7c/Keg.png/24px-Keg.png",
            link: "/collection/crafting",
          },
          {
            name: "Deluxe Speed-Gro",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6d/Deluxe_Speed-Gro.png/24px-Deluxe_Speed-Gro.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 9",
        num: 9,
        items: [
          {
            name: "Seed Maker",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Seed_Maker.png/24px-Seed_Maker.png",
            link: "/collection/crafting",
          },
          {
            name: "Iridium Sprinkler",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/90/Iridium_Sprinkler.png/24px-Iridium_Sprinkler.png",
            link: "/collection/crafting",
          },
          {
            name: "Quality Fertilizer",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a0/Quality_Fertilizer.png/24px-Quality_Fertilizer.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 10",
        num: 10,
        items: [
          [
            {
              name: "Coopmaster",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/26/Coopmaster.png/24px-Coopmaster.png",
              description: "Befriend coop animals quicker. Incubation time cut in half.",
            },
            {
              name: "Shepherd",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/80/Shepherd.png/24px-Shepherd.png",
              description: "Befriend barn animals quicker. Sheep produce wool faster.",
            },
          ],
          [
            {
              name: "Artisan",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/46/Artisan.png/24px-Artisan.png",
              description: "Artisan goods (wine, cheese, oil, etc.) worth 40% more.",
            },
            {
              name: "Agriculturist",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/78/Agriculturist.png/24px-Agriculturist.png",
              description: "All crops grow 10% faster.",
            },
          ],
        ],
      },
    ],
  },
  {
    name: "Mining",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Mining_Skill_Icon.png/32px-Mining_Skill_Icon.png",
    description:
      "Mining skill is increased by breaking rocks. Each level adds +1 to Pickaxe proficiency. You are awarded mining skill points when rocks are destroyed -- it doesn't matter if this is done by Pickaxe, Bombs, or by the action of Monsters. Different rock types give different numbers of experience points.",
    height: "h-32",
    levels: [
      {
        name: "Level 1",
        num: 1,
        items: [
          {
            name: "Cherry Bomb",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Cherry_Bomb.png/24px-Cherry_Bomb.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 2",
        num: 2,
        items: [
          {
            name: "Staircase",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/8c/Staircase.png/24px-Staircase.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 3",
        num: 3,
        items: [
          {
            name: "Miner's Treat",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/12/Miner%27s_Treat.png/24px-Miner%27s_Treat.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 4",
        num: 4,
        items: [
          {
            name: "Glowstone Ring",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/65/Glowstone_Ring.png/24px-Glowstone_Ring.png",
            link: "/collection/crafting",
          },
          {
            name: "Transumute (Fe)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Iron_Bar.png/24px-Iron_Bar.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 5",
        num: 5,
        items: [
          [
            {
              name: "Miner",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4a/Miner.png/24px-Miner.png",
              description: "+1 ore per vein.",
            },
          ],
          [
            {
              name: "Geologist",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/88/Geologist.png/24px-Geologist.png",
              description: "Chance for gems to appear in pairs.",
            },
          ],
        ],
      },
      {
        name: "Level 6",
        num: 6,
        items: [
          {
            name: "Bomb",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3b/Bomb.png/24px-Bomb.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 7",
        num: 7,
        items: [
          {
            name: "Transmute (Au)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 8",
        num: 8,
        items: [
          {
            name: "Mega Bomb",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4f/Mega_Bomb.png/24px-Mega_Bomb.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 9",
        num: 9,
        items: [
          {
            name: "Crystalarium",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crystalarium.png/24px-Crystalarium.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 10",
        num: 10,
        items: [
          [
            {
              name: "Blacksmith",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ea/Blacksmith_Icon.png/24px-Blacksmith_Icon.png",
              description: "Metal bars worth 50% more.",
            },
            {
              name: "Prospector",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/ae/Prospector.png/24px-Prospector.png",
              description: "Chance to find coal doubled.",
            },
          ],
          [
            {
              name: "Excavator",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/53/Excavator.png/24px-Excavator.png",
              description: "Chance to find geodes doubled.",
            },
            {
              name: "Gemologist",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3c/Gemologist.png/24px-Gemologist.png",
              description: "Gems worth 30% more.",
            },
          ],
        ],
      },
    ],
  },
  {
    name: "Foraging",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Foraging_Skill_Icon.png/32px-Foraging_Skill_Icon.png",
    description:
      "Foraging skill is increased both by gathering forage items found on the ground throughout Stardew Valley and by chopping down Trees with an Axe. Each foraging skill level adds +1 axe proficiency.",
    height: "h-40",
    levels: [
      {
        name: "Level 1",
        num: 1,
        items: [
          {
            name: "Wild Seeds (Sp)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/39/Spring_Seeds.png/24px-Spring_Seeds.png",
            link: "/collection/crafting",
          },
          {
            name: "Field Snack",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Field_Snack.png/24px-Field_Snack.png",
            link: "/collection/crafting",
          },
          {
            name: "Trees sometimes drop seeds.",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 2",
        num: 2,
        items: [
          {
            name: "Survival Burger",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Survival_Burger.png/24px-Survival_Burger.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 3",
        num: 3,
        items: [
          {
            name: "Tapper",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/da/Tapper.png/24px-Tapper.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 4",
        num: 4,
        items: [
          {
            name: "Charcoal Kiln",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/76/Charcoal_Kiln.png/18px-Charcoal_Kiln.png",
            link: "/collection/crafting",
          },
          {
            name: "Wild Seeds (Su)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c4/Summer_Seeds.png/24px-Summer_Seeds.png",
            link: "/collection/crafting",
          },
          {
            name: "+1 Wild Berry harvesting",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 5",
        num: 5,
        items: [
          [
            {
              name: "Forester",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/0b/Forester.png/24px-Forester.png",
              description: "Gain 25% more wood when chopping.",
            },
          ],
          [
            {
              name: "Gatherer",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a6/Gatherer.png/24px-Gatherer.png",
              description: "Chance for double harvest of foraged items.",
            },
          ],
        ],
      },
      {
        name: "Level 6",
        num: 6,
        items: [
          {
            name: "Lightning Rod",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/62/Lightning_Rod.png/24px-Lightning_Rod.png",
            link: "/collection/crafting",
          },
          {
            name: "Wild Seeds (Fa)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/55/Fall_Seeds.png/24px-Fall_Seeds.png",
            link: "/collection/crafting",
          },
          {
            name: "Warp Totem: Beach",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Warp_Totem_Beach.png/24px-Warp_Totem_Beach.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 7",
        num: 7,
        items: [
          {
            name: "Wild Seeds (Wi)",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/dd/Winter_Seeds.png/24px-Winter_Seeds.png",
            link: "/collection/crafting",
          },
          {
            name: "Warp Totem: Mountains",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d8/Warp_Totem_Mountains.png/24px-Warp_Totem_Mountains.png",
            link: "/collection/crafting",
          },
          {
            name: "Tree Fertilizer",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Tree_Fertilizer.png/24px-Tree_Fertilizer.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 8",
        num: 8,
        items: [
          {
            name: "Warp Totem: Farm",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e4/Warp_Totem_Farm.png/24px-Warp_Totem_Farm.png",
            link: "/collection/crafting",
          },
          {
            name: "+1 Wild Berry harvesting",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 9",
        num: 9,
        items: [
          {
            name: "Rain Totem",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f7/Rain_Totem.png/24px-Rain_Totem.png",
            link: "/collection/crafting",
          },
          {
            name: "Cookout Kit",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Cookout_Kit.png/24px-Cookout_Kit.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 10",
        num: 10,
        items: [
          [
            {
              name: "Lumberjack",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cc/Lumberjack.png/24px-Lumberjack.png",
              description: "All trees have a chance to drop hardwood.",
            },
            {
              name: "Tapper",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cc/Lumberjack.png/24px-Lumberjack.png",
              description: "Syrups worth 25% more.",
            },
          ],
          [
            {
              name: "Botanist",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/86/Botanist.png/24px-Botanist.png",
              description: "Foraged items are always highest quality.",
            },
            {
              name: "Tracker",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c5/Tracker.png/24px-Tracker.png",
              description: "Location of forageable items revealed.",
            },
          ],
        ],
      },
    ],
  },
  {
    name: "Fishing",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Fishing_Skill_Icon.png/32px-Fishing_Skill_Icon.png",
    description:
      "Fishing Skill is increased by catching Fish, Trash, Seaweed, Green Algae, or White Algae with a Fishing Rod/Pole or by harvesting Crab Pots. Each level grants +1 Fishing Rod Proficiency, increases the minimum fish size (in/cm) and bobber bar height, and decreases the max amount of time before fish bite. Fishing skill also increases the chance to find quality (silver or gold star) fish.",
    height: "h-60",
    levels: [
      {
        name: "Level 1",
        num: 1,
        items: [
          {
            name: "Casting distance increased by one tile",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 2",
        num: 2,
        items: [
          {
            name: "Bait",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Bait.png/24px-Bait.png",
            link: "/collection/crafting",
          },
          {
            name: "Fiberglass Rod & Bait unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 3",
        num: 3,
        items: [
          {
            name: "Crab Pot",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/9/92/Crab_Pot.png/24px-Crab_Pot.png",
            link: "/collection/crafting",
          },
          {
            name: "Dish O' The Sea",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Dish_O%27_The_Sea.png/24px-Dish_O%27_The_Sea.png",
            link: "/collection/food",
          },
          {
            name: "Crab Pot unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 4",
        num: 4,
        items: [
          {
            name: "Recycling Machine",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/26/Recycling_Machine.png/24px-Recycling_Machine.png",
            link: "/collection/crafting",
          },
          {
            name: "Casting distance increased by one tile",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 5",
        num: 5,
        items: [
          [
            {
              name: "Fisher",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/44/Fisher.png/24px-Fisher.png",
              description: "Fish worth 25% more.",
            },
          ],
          [
            {
              name: "Trapper",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/b/b8/Trapper.png/24px-Trapper.png",
              description: "Resources required to craft crab pots reduced.",
            },
          ],
        ],
      },
      {
        name: "Level 6",
        num: 6,
        items: [
          {
            name: "Spinner",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7b/Spinner.png/24px-Spinner.png",
            link: "/collection/crafting",
          },
          {
            name: "Trap Bobber",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/d/da/Trap_Bobber.png/24px-Trap_Bobber.png",
            link: "/collection/crafting",
          },
          {
            name: "Iridium Rod, Lead Bobber, Spinner, & Trap Bobber unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 7",
        num: 7,
        items: [
          {
            name: "Cork Bobber",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/0b/Cork_Bobber.png/24px-Cork_Bobber.png",
            link: "/collection/crafting",
          },
          {
            name: "Treasure Hunter",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Treasure_Hunter.png/24px-Treasure_Hunter.png",
            link: "/collection/crafting",
          },
          {
            name: "Cork Bobber & Treasure Hunter unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 8",
        num: 8,
        items: [
          {
            name: "Worm Bin",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/71/Worm_Bin.png/24px-Worm_Bin.png",
            link: "/collection/crafting",
          },
          {
            name: "Barbed Hook",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4f/Barbed_Hook.png/24px-Barbed_Hook.png",
            link: "/collection/crafting",
          },
          {
            name: "Dressed Spinner",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e8/Dressed_Spinner.png/24px-Dressed_Spinner.png",
            link: "/collection/crafting",
          },
          {
            name: "Barbed Hook & Dressed Spinner unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
          {
            name: "Casting distance increased by one tile",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 9",
        num: 9,
        items: [
          {
            name: "Seafoam Pudding",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/3/33/Seafoam_Pudding.png/24px-Seafoam_Pudding.png",
            link: "/collection/crafting",
          },
          {
            name: "Magnet",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/8c/Magnet.png/24px-Magnet.png",
            link: "/collection/crafting",
          },
          {
            name: "Magnet unlocked in Willy's Fish Shop",
            img: "",
            link: "",
          },
        ],
      },
      {
        name: "Level 10",
        num: 10,
        items: [
          [
            {
              name: "Angler",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/22/Angler_Icon.png/24px-Angler_Icon.png",
              description: "Fish worth 50% more.",
            },
            {
              name: "Pirate",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Pirate.png/24px-Pirate.png",
              description: "Chance to find treasure doubled.",
            },
          ],
          [
            {
              name: "Mariner",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/03/Mariner.png/24px-Mariner.png",
              description: "Crab pots no longer produce junk items.",
            },
            {
              name: "Luremaster",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/29/Luremaster.png/24px-Luremaster.png",
              description: "Crab pots no longer require bait.",
            },
          ],
        ],
      },
    ],
  },
  {
    name: "Combat",
    img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Combat_Skill_Icon.png/32px-Combat_Skill_Icon.png",
    description:
      "Combat skill is increased by fighting monsters. Some levels add to the player's total HP (health points), as shown by an increase in the health meter.",
    height: "h-36",
    levels: [
      {
        name: "Level 1",
        num: 1,
        items: [
          {
            name: "Sturdy Ring",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7e/Sturdy_Ring.png/24px-Sturdy_Ring.png",
            link: "/collection/crafting",
          },
          {
            name: "Bug Steak",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/b/b7/Bug_Steak.png/24px-Bug_Steak.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 2",
        num: 2,
        items: [
          {
            name: "Life Elixir",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6e/Life_Elixir.png/24px-Life_Elixir.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 3",
        num: 3,
        items: [
          {
            name: "Roots Platter",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e0/Roots_Platter.png/24px-Roots_Platter.png",
            link: "/collection/food",
          },
        ],
      },
      {
        name: "Level 4",
        num: 4,
        items: [
          {
            name: "Warrior Ring",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/1/13/Warrior_Ring.png/24px-Warrior_Ring.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 5",
        num: 5,
        items: [
          [
            {
              name: "Fighter",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e6/Fighter.png/24px-Fighter.png",
              description: "All attacks deal 10% more damage. (+15 HP)",
            },
          ],
          [
            {
              name: "Scout",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/6/69/Scout.png/24px-Scout.png",
              description: "Critical strike chance increased by 50%. (+0 HP)",
            },
          ],
        ],
      },
      {
        name: "Level 6",
        num: 6,
        items: [
          {
            name: "Slime Egg-Press",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Slime_Egg-Press.png/24px-Slime_Egg-Press.png",
            link: "/collection/crafting",
          },
          {
            name: "Oil of Garlic",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Oil_of_Garlic.png/24px-Oil_of_Garlic.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 7",
        num: 7,
        items: [
          {
            name: "Ring of Yoba",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/21/Ring_of_Yoba.png/24px-Ring_of_Yoba.png",
            link: "/collection/crafting",
          },
          {
            name: "Thorns Ring",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5b/Thorns_Ring.png/24px-Thorns_Ring.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 8",
        num: 8,
        items: [
          {
            name: "Slime Incubator",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c0/Slime_Incubator.png/24px-Slime_Incubator.png",
            link: "/collection/crafting",
          },
          {
            name: "Explosive Ammo",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f3/Explosive_Ammo.png/24px-Explosive_Ammo.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 9",
        num: 9,
        items: [
          {
            name: "Iridium Band",
            img: "https://stardewvalleywiki.com/mediawiki/images/thumb/7/77/Iridium_Band.png/24px-Iridium_Band.png",
            link: "/collection/crafting",
          },
        ],
      },
      {
        name: "Level 10",
        num: 10,
        items: [
          [
            {
              name: "Brute",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Brute.png/24px-Brute.png",
              description: "Deal 15% more damage. (+0 HP)",
            },
            {
              name: "Defender",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/0d/Defender.png/24px-Defender.png",
              description: "+25 HP.",
            },
          ],
          [
            {
              name: "Acrobat",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Acrobat.png/24px-Acrobat.png",
              description: "Cooldown on special moves cut in half. (+0 HP)",
            },
            {
              name: "Desperado",
              img: "https://stardewvalleywiki.com/mediawiki/images/thumb/5/57/Desperado.png/24px-Desperado.png",
              description: "Critical strikes are deadlier. (+0 HP)",
            },
          ],
        ],
      },
    ],
  },
];

export { skillTitle, skillLevelNumbers, skills };
