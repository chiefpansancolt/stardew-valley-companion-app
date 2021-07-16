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
];

export { skillTitle, skillLevelNumbers, skills };
