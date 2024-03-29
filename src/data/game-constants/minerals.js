const minerals = [
  {
    key: 60,
    value: {
      name: "Emerald",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png",
      description: "A precious stone with a brilliant green color.",
      price: "250g",
      gemologistPrice: "325g",
    },
  },
  {
    key: 62,
    value: {
      name: "Aquamarine",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png",
      description: "A shimmery blue-green gem.",
      price: "180g",
      gemologistPrice: "234g",
    },
  },
  {
    key: 64,
    value: {
      name: "Ruby",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Ruby.png",
      description: "A precious stone that is sought after for its rich color and beautiful luster.",
      price: "250g",
      gemologistPrice: "325g",
    },
  },
  {
    key: 66,
    value: {
      name: "Amethyst",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png",
      description: "A purple variant of quartz.",
      price: "100g",
      gemologistPrice: "130g",
    },
  },
  {
    key: 68,
    value: {
      name: "Topaz",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Topaz.png",
      description: "Fairly common but still prized for its beauty.",
      price: "80g",
      gemologistPrice: "104g",
    },
  },
  {
    key: 70,
    value: {
      name: "Jade",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Jade.png",
      description: "A pale green ornamental stone.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 72,
    value: {
      name: "Diamond",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png",
      description: "A rare and valuable gem.",
      price: "750g",
      gemologistPrice: "925g",
    },
  },
  {
    key: 74,
    value: {
      name: "Prismatic Shard",
      type: "Gem",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/56/Prismatic_Shard.png",
      description: "A very rare and powerful substance with unknown origins.",
      price: "2,000g",
      gemologistPrice: "2,600g",
    },
  },
  {
    key: 80,
    value: {
      name: "Quartz",
      type: "Forged Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png",
      description: "A clear crystal commonly found in caves and mines.",
      price: "25g",
      gemologistPrice: "32g",
    },
  },
  {
    key: 82,
    value: {
      name: "Fire Quartz",
      type: "Forged Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png",
      description: "A glowing red crystal commonly found near hot lava.",
      price: "75g",
      gemologistPrice: "97g",
    },
  },
  {
    key: 84,
    value: {
      name: "Frozen Tear",
      type: "Forged Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png",
      description: "A crystal fabled to be the frozen tears of a yeti.",
      price: "100g",
      gemologistPrice: "130g",
    },
  },
  {
    key: 86,
    value: {
      name: "Earth Crystal",
      type: "Forged Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png",
      description: "A resinous substance found near the surface.",
      price: "50g",
      gemologistPrice: "65g",
    },
  },
  {
    key: 535,
    value: {
      name: "Geode",
      type: "Geode",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Geode.png",
      description: "A blacksmith can break this open for you.",
    },
  },
  {
    key: 536,
    value: {
      name: "Frozen Geode",
      type: "Geode",
      img: "https://stardewvalleywiki.com/mediawiki/images/b/bf/Frozen_Geode.png",
      description: "A blacksmith can break this open for you.",
    },
  },
  {
    key: 537,
    value: {
      name: "Magma Geode",
      type: "Geode",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/89/Magma_Geode.png",
      description: "A blacksmith can break this open for you.",
    },
  },
  {
    key: 538,
    value: {
      name: "Alamite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/7c/Alamite.png",
      description: "Its distinctive fluorescence makes it a favorite among rock collectors.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 539,
    value: {
      name: "Bixite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/98/Bixite.png",
      description: "A dark metallic Mineral sought after for its cubic structure.",
      price: "300g",
      gemologistPrice: "390g",
    },
  },
  {
    key: 540,
    value: {
      name: "Baryte",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Baryte.png",
      description: "The best specimens resemble a desert rose.",
      price: "50g",
      gemologistPrice: "65g",
    },
  },
  {
    key: 541,
    value: {
      name: "Aerinite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/6b/Aerinite.png",
      description: "These crystals are curiously light.",
      price: "125g",
      gemologistPrice: "162g",
    },
  },
  {
    key: 542,
    value: {
      name: "Calcite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/97/Calcite.png",
      description: "This yellow crystal is speckled with shimmering nodules.",
      price: "75g",
      gemologistPrice: "97g",
    },
  },
  {
    key: 543,
    value: {
      name: "Dolomite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Dolomite.png",
      description: "It can occur in coral reefs, often near an underwater volcano.",
      price: "300g",
      gemologistPrice: "390g",
    },
  },
  {
    key: 544,
    value: {
      name: "Esperite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Esperite.png",
      description: "Esperite	The crystals glow bright green when stimulated.",
      price: "100g",
      gemologistPrice: "130g",
    },
  },
  {
    key: 545,
    value: {
      name: "Fluorapatite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fluorapatite.png",
      description: "Fluorapatite	Small amounts are found in human teeth.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 546,
    value: {
      name: "Geminite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/54/Geminite.png",
      description: "Geminite	Occurs in brilliant clusters.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 547,
    value: {
      name: "Helvite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Helvite.png",
      description: "Helvite	It grows in a triangular column.",
      price: "450g",
      gemologistPrice: "585g",
    },
  },
  {
    key: 548,
    value: {
      name: "Jamborite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Jamborite.png",
      description: "Jamborite	The crystals are so tightly packed it almost looks fuzzy.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 549,
    value: {
      name: "Jagoite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Jagoite.png",
      description: "Jagoite	A high volume of tiny crystals makes it very glittery.",
      price: "115g",
      gemologistPrice: "149g",
    },
  },
  {
    key: 550,
    value: {
      name: "Kyanite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/e4/Kyanite.png",
      description: "Kyanite	The geometric faces are as smooth as glass.",
      price: "250g",
      gemologistPrice: "325g",
    },
  },
  {
    key: 551,
    value: {
      name: "Lunarite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/0/06/Lunarite.png",
      description: "Lunarite	The cratered white orbs form a tight cluster.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 552,
    value: {
      name: "Malachite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Malachite.png",
      description:
        "Malachite	A popular ornamental stone, used in sculpture and to make green paint.",
      price: "100g",
      gemologistPrice: "130g",
    },
  },
  {
    key: 553,
    value: {
      name: "Neptunite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/0/05/Neptunite.png",
      description: "Neptunite	A jet-black crystal that is unusually reflective.",
      price: "400g",
      gemologistPrice: "520g",
    },
  },
  {
    key: 554,
    value: {
      name: "Lemon Stone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/31/Lemon_Stone.png",
      description: "Lemon Stone	Some claim the powdered crystal is a dwarvish delicacy.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 555,
    value: {
      name: "Nekoite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/53/Nekoite.png",
      description: "Nekoite	The delicate shards form a tiny pink meadow.",
      price: "80g",
      gemologistPrice: "104g",
    },
  },
  {
    key: 556,
    value: {
      name: "Orpiment",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/41/Orpiment.png",
      description:
        "Orpiment	Despite its high toxicity, this Mineral is widely used in manufacturing and folk medicine.",
      price: "80g",
      gemologistPrice: "104g",
    },
  },
  {
    key: 557,
    value: {
      name: "Petrified Slime",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/24/Petrified_Slime.png",
      description: "Petrified Slime	This little guy may be 100,000 years old.",
      price: "120g",
      gemologistPrice: "156g",
    },
  },
  {
    key: 558,
    value: {
      name: "Thunder Egg",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/1/14/Thunder_Egg.png",
      description:
        "Thunder Egg	According to legend, angry thunder spirits would throw these stones at one another.",
      price: "100g",
      gemologistPrice: "130g",
    },
  },
  {
    key: 559,
    value: {
      name: "Pyrite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pyrite.png",
      description: 'Pyrite	Commonly known as "Fool\'s Gold".',
      price: "120g",
      gemologistPrice: "156g",
    },
  },
  {
    key: 560,
    value: {
      name: "Ocean Stone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Ocean_Stone.png",
      description:
        "Ocean Stone	An old legend claims these stones are the mosaics of ancient mermaids.",
      price: "220g",
      gemologistPrice: "286g",
    },
  },
  {
    key: 561,
    value: {
      name: "Ghost Crystal",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d0/Ghost_Crystal.png",
      description: "Ghost Crystal	There is an aura of coldness around this crystal.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 562,
    value: {
      name: "Tigerseye",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Tigerseye.png",
      description: "A stripe of shimmering gold gives this gem a warm luster.",
      price: "275g",
      gemologistPrice: "357g",
    },
  },
  {
    key: 563,
    value: {
      name: "Jasper",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Jasper.png",
      description:
        "Jasper	When polished, this stone becomes attractively luminous. Prized by ancient peoples for thousands of years.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 564,
    value: {
      name: "Opal",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/3c/Opal.png",
      description: "Its internal structure causes it to reflect a rainbow of light.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 565,
    value: {
      name: "Fire Opal",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/60/Fire_Opal.png",
      description: "A rare variety of opal, named for its red spots.",
      price: "350g",
      gemologistPrice: "455g",
    },
  },
  {
    key: 566,
    value: {
      name: "Celestine",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Celestine.png",
      description: "Celestine	Some early life forms had bones made from this.",
      price: "125g",
      gemologistPrice: "162g",
    },
  },
  {
    key: 567,
    value: {
      name: "Marble",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/82/Marble.png",
      description: "Marble	A very popular material for sculptures and construction.",
      price: "110g",
      gemologistPrice: "143g",
    },
  },
  {
    key: 568,
    value: {
      name: "Sandstone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d6/Sandstone.png",
      description: "Sandstone	A common type of stone with red and brown striations.",
      price: "60g",
      gemologistPrice: "78g",
    },
  },
  {
    key: 569,
    value: {
      name: "Granite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Granite.png",
      description: "Granite	A speckled Mineral that is commonly used in construction.",
      price: "75g",
      gemologistPrice: "97g",
    },
  },
  {
    key: 570,
    value: {
      name: "Basalt",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/22/Basalt.png",
      description: "Basalt	Forms near searing hot magma.",
      price: "175g",
      gemologistPrice: "227g",
    },
  },
  {
    key: 571,
    value: {
      name: "Limestone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Limestone.png",
      description: "Limestone	A very common type of stone. It's not worth very much.",
      price: "15g",
      gemologistPrice: "19g",
    },
  },
  {
    key: 572,
    value: {
      name: "Soapstone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/81/Soapstone.png",
      description:
        "Soapstone	Because of its relatively soft consistency, this stone is very popular for carving.",
      price: "120g",
      gemologistPrice: "156g",
    },
  },
  {
    key: 573,
    value: {
      name: "Hematite",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Hematite.png",
      description: "Hematite	An iron-based Mineral with interesting magnetic properties.",
      price: "150g",
      gemologistPrice: "195g",
    },
  },
  {
    key: 574,
    value: {
      name: "Mudstone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/52/Mudstone.png",
      description: "Mudstone	A fine-grained rock made from ancient clay or mud.",
      price: "25g",
      gemologistPrice: "32g",
    },
  },
  {
    key: 575,
    value: {
      name: "Obsidian",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png",
      description: "Obsidian	A volcanic glass that forms when lava cools rapidly.",
      price: "200g",
      gemologistPrice: "260g",
    },
  },
  {
    key: 576,
    value: {
      name: "Slate",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/97/Slate.png",
      description: "Slate	It's extremely resistant to water, making it a good roofing material.",
      price: "85g",
      gemologistPrice: "110g",
    },
  },
  {
    key: 577,
    value: {
      name: "Fairy Stone",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Fairy_Stone.png",
      description:
        "Fairy Stone	An old miner's song suggests these are made from the bones of ancient fairies.",
      price: "250g",
      gemologistPrice: "325g",
    },
  },
  {
    key: 578,
    value: {
      name: "Star Shards",
      type: "Geode Mineral",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Star_Shards.png",
      description:
        "Star Shards	No one knows how these form. Some scientists claim that the microscopic structure displays unnatural regularity.",
      price: "500g",
      gemologistPrice: "650g",
    },
  },
  {
    key: 749,
    value: {
      name: "Omni Geode",
      type: "Geode",
      img: "https://stardewvalleywiki.com/mediawiki/images/0/09/Omni_Geode.png",
      description:
        "A blacksmith can break this open for you. These geodes contain a wide variety of Minerals.",
    },
  },
];

const mineralsShipping = [
  {
    id: 330,
    name: "Clay",
    description: "Used in crafting and construction.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Clay.png",
    sources: ["Artifact Spots", "Geodes"],
    price: "20g",
    shipping: {
      order: 53,
      usage: true,
    },
  },
  {
    id: 378,
    name: "Copper Ore",
    description: "A common ore that can be smelted into bars.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/78/Copper_Ore.png",
    sources: [
      "The Mines",
      "Blacksmith",
      "Fishing",
      "Artifact Spot",
      "Geodes",
      "Panning",
      "Traveling Cart",
    ],
    price: "5g",
    shipping: {
      order: 67,
      usage: true,
    },
  },
  {
    id: 380,
    name: "Iron Ore",
    description: "A fairly common ore that can be smelted into bars.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Iron_Ore.png",
    sources: ["Mines", "Blacksmith", "Fishing", "Geodes", "Panning", "Traveling Cart"],
    price: "10g",
    shipping: {
      order: 68,
      usage: true,
    },
  },
  {
    id: 382,
    name: "Coal",
    description: "A combustible rock that is useful for crafting and smelting.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a7/Coal.png",
    sources: [
      "Mines",
      "Blacksmith",
      "Charcoal Kiln",
      "Recycling Machine",
      "Geodes",
      "Fishing Treasure Chest",
      "Artifact Spot",
      "Panning",
      "Traveling Cart",
    ],
    price: "15g",
    shipping: {
      order: 69,
      usage: true,
    },
  },
  {
    id: 384,
    name: "Gold Ore",
    description: "A precious ore that can be smelted into bars.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f7/Gold_Ore.png",
    sources: [
      "Mining",
      "Blacksmith",
      "Fishing",
      "Frozen Geode",
      "Magma Geode",
      "Omni Geode",
      "Panning",
      "Traveling Cart",
      "Lava Eel Fish Pond",
    ],
    price: "25g",
    shipping: {
      order: 70,
      usage: true,
    },
  },
  {
    id: 386,
    name: "Iridium Ore",
    description: "An exotic ore with many curious properties. Can be smelted into bars.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e9/Iridium_Ore.png",
    sources: [
      "Skull Cavern",
      "Mines",
      "Statue Of Perfection",
      "Fishing",
      "Magma Geode",
      "Omni Geode",
      "Panning",
      "Traveling Cart",
    ],
    price: "100g",
    shipping: {
      order: 71,
      usage: true,
    },
  },
  {
    id: 390,
    name: "Stone",
    description: "A common material with many uses in crafting and building.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png",
    sources: ["Rocks", "Carpenter's Shop", "Fishing"],
    price: "2g",
    shipping: {
      order: 73,
      usage: true,
    },
  },
  {
    id: 848,
    name: "Cinder Shard",
    description: "You can feel a warm glow from within this stone.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/fd/Cinder_Shard.png",
    sources: ["Ginger Island", "Fish Pond"],
    price: "50g",
    shipping: {
      order: 141,
      usage: true,
    },
  },
  {
    id: 909,
    name: "Radioactive Ore",
    description: "It's glowing with dangerous energy... Can be smelted into bars.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9f/Radioactive_Ore.png",
    sources: ["The Mines", "Skull Cavern"],
    price: "300g",
    shipping: {
      order: 144,
      usage: true,
    },
  },
];

export { minerals, mineralsShipping };
