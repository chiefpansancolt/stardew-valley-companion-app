const artifacts = [
  {
    key: 96,
    value: {
      name: "Dwarf Scroll I",
      img: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Dwarf_Scroll_I.png",
      description:
        "A yellowed scroll of parchment filled with dwarven script. This one's tied with a red bow.",
      price: "1g",
    },
  },
  {
    key: 97,
    value: {
      name: "Dwarf Scroll II",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Dwarf_Scroll_II.png",
      description:
        "A yellowed scroll of parchment filled with dwarven script. This one's tied with a green ribbon.",
      price: "1g",
    },
  },
  {
    key: 98,
    value: {
      name: "Dwarf Scroll III",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Dwarf_Scroll_III.png",
      description:
        "A yellowed scroll of parchment filled with dwarven script. This one's tied with a blue rope.",
      price: "1g",
    },
  },
  {
    key: 99,
    value: {
      name: "Dwarf Scroll IV",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/85/Dwarf_Scroll_IV.png",
      description:
        "A yellowed scroll of parchment filled with dwarven script. This one's tied with a golden chain.",
      price: "1g",
    },
  },
  {
    key: 100,
    value: {
      name: "Chipped Amphora",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Chipped_Amphora.png",
      description:
        "An ancient vessel made of ceramic material. Used to transport both dry and wet goods.",
      price: "40g",
    },
  },
  {
    key: 101,
    value: {
      name: "Arrowhead",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Arrowhead.png",
      description: "A crudely fashioned point used for hunting.",
      price: "40g",
    },
  },
  {
    key: 103,
    value: {
      name: "Ancient Doll",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/c0/Ancient_Doll.png",
      description:
        "An ancient doll covered in grime. This doll may have been used as a toy, a decoration, or a prop in some kind of ritual.",
      price: "60g",
    },
  },
  {
    key: 104,
    value: {
      name: "Elvish Jewelry",
      img: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Elvish_Jewelry.png",
      description:
        "Dirty but still beautiful. On the side is a flowing script thought by some to be the ancient language of the elves. No Elvish bones have ever been found.",
      price: "200g",
    },
  },
  {
    key: 105,
    value: {
      name: "Chewing Stick",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Chewing_Stick.png",
      description: "Ancient people chewed on these to keep their teeth clean.",
      price: "50g",
    },
  },
  {
    key: 106,
    value: {
      name: "Ornamental Fan",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Ornamental_Fan.png",
      description:
        "This exquisute fan most likely belonged to a noblewoman. Historians believe that the valley was a popular sixth-era vacation spot for the wealthy.",
      price: "300g",
    },
  },
  {
    key: 107,
    value: {
      name: "Dinosaur Egg",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/a1/Dinosaur_Egg.png",
      description: "A giant dino egg... The entire shell is still intact!",
      price: "350g",
    },
  },
  {
    key: 108,
    value: {
      name: "Rare Disc",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Rare_Disc.png",
      description:
        "A heavy black disc studded with peculiar red stones. When you hold it, you're overwhelmed with a feeling of dread.",
      price: "300g",
    },
  },
  {
    key: 109,
    value: {
      name: "Ancient Sword",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/76/Ancient_Sword.png",
      description:
        "It's the remains of an ancient sword. Most of the blade has turned to rust, but the hilt is very finely crafted.",
      price: "100g",
    },
  },
  {
    key: 110,
    value: {
      name: "Rusty Spoon",
      img: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Rusty_Spoon.png",
      description: "A plain old spoon, probably ten years old. Not very interesting.",
      price: "25g",
    },
  },
  {
    key: 111,
    value: {
      name: "Rusty Spur",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/cd/Rusty_Spur.png",
      description:
        "An old spur that was once attached to a cowboy's boot. People must have been raising animals in this area for many generations.",
      price: "25g",
    },
  },
  {
    key: 112,
    value: {
      name: "Rusty Cog",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/74/Rusty_Cog.png",
      description:
        "A well preserved cog that must have been part of some ancient machine. This could be dwarven technology.",
      price: "25g",
    },
  },
  {
    key: 113,
    value: {
      name: "Chicken Statue",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/af/Chicken_Statue.png",
      description:
        "It's a statue of a chicken on a bronze base. The ancient people of this area must have been very fond of chickens.",
      price: "50g",
    },
  },
  {
    key: 114,
    value: {
      name: "Ancient Seed",
      img: "https://stardewvalleywiki.com/mediawiki/images/a/af/Ancient_Seed.png",
      description:
        "It's a dry old seed from some ancient plant. By all appearances it's long since dead...",
      price: "5g",
    },
  },
  {
    key: 115,
    value: {
      name: "Prehistoric Tool",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/26/Prehistoric_Tool.png",
      description: "Some kind of gnarly old digging tool.",
      price: "50g",
    },
  },
  {
    key: 116,
    value: {
      name: "Dried Starfish",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/df/Dried_Starfish.png",
      description: "A starfish from the primordial ocean. It's an unusually pristine specimen!",
      price: "40g",
    },
  },
  {
    key: 117,
    value: {
      name: "Anchor",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/c0/Anchor.png",
      description: "It may have belonged to ancient pirates.",
      price: "100g",
    },
  },
  {
    key: 118,
    value: {
      name: "Glass Shards",
      img: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Glass_Shards.png",
      description:
        "A mixture of glass shards smoothed by centuries of ocean surf. These could have belonged to an ancient mosaic or necklace.",
      price: "20g",
    },
  },
  {
    key: 119,
    value: {
      name: "Bone Flute",
      img: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Bone_Flute.png",
      description:
        "It's a prehistoric wind instrument carved from an animal's bone. It produces an eerie tone.",
      price: "100g",
    },
  },
  {
    key: 120,
    value: {
      name: "Prehistoric Handaxe",
      img: "https://stardewvalleywiki.com/mediawiki/images/0/07/Prehistoric_Handaxe.png",
      description:
        'One of the earliest tools employed by humans. This "crude" tool was created by striking one rock with another to form a sharp edge.',
      price: "50g",
    },
  },
  {
    key: 121,
    value: {
      name: "Dwarvish Helm",
      img: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Dwarvish_Helm.png",
      description:
        "It's one of the helmets commonly worn by dwarves. The thick metal plating protects them from falling debris and stalactites.",
      price: "100g",
    },
  },
  {
    key: 122,
    value: {
      name: "Dwarf Gadget",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/58/Dwarf_Gadget.png",
      description:
        "It's a piece of the advanced technology once known to the dwarves. It's still glowing and humming, but you're unable to understand how it works.",
      price: "200g",
    },
  },
  {
    key: 123,
    value: {
      name: "Ancient Drum",
      img: "https://stardewvalleywiki.com/mediawiki/images/1/1e/Ancient_Drum.png",
      description: "It's a drum made from wood and animal skin. It has a low, reverberating tone.",
      price: "100g",
    },
  },
  {
    key: 124,
    value: {
      name: "Golden Mask",
      img: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Golden_Mask.png",
      description:
        "A creepy golden mask probably used in an ancient magic ritual. A socket in the forehead contains a large purple gemstone.",
      price: "500g",
    },
  },
  {
    key: 125,
    value: {
      name: "Golden Relic",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/37/Golden_Relic.png",
      description: "It's a golden slab with heiroglyphs and pictures emblazoned onto the front.",
      price: "250g",
    },
  },
  {
    key: 126,
    value: { name: "Strange Doll (green)", img: "https://stardewvalleywiki.com/mediawiki/images/3/39/Strange_Doll_%28green%29.png", description: "???", price: "1,000g" },
  },
  {
    key: 127,
    value: { name: "Strange Doll (yellow)", img: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Strange_Doll_%28yellow%29.png", description: "???", price: "1,000g" },
  },
  {
    key: 579,
    value: {
      name: "Prehistoric Scapula",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/ee/Prehistoric_Scapula.png",
      description:
        'Commonly known as a "shoulder blade"... It\'s unclear what species it belonged to.',
      price: "100g",
    },
  },
  {
    key: 580,
    value: {
      name: "Prehistoric Tibia",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Prehistoric_Tibia.png",
      description: "A thick and sturdy leg bone.",
      price: "100g",
    },
  },
  {
    key: 581,
    value: {
      name: "Prehistoric Skull",
      img: "https://stardewvalleywiki.com/mediawiki/images/5/58/Prehistoric_Skull.png",
      description: "This is definitely a mammalian skull.",
      price: "100g",
    },
  },
  {
    key: 582,
    value: {
      name: "Skeletal Hand",
      img: "https://stardewvalleywiki.com/mediawiki/images/d/da/Skeletal_Hand.png",
      description: "It's a wonder all these ancient little pieces lasted so long.",
      price: "100g",
    },
  },
  {
    key: 583,
    value: {
      name: "Prehistoric Rib",
      img: "https://stardewvalleywiki.com/mediawiki/images/6/62/Prehistoric_Rib.png",
      description: "Little gouge marks on the side suggest that this rib was someone's dinner.",
      price: "100g",
    },
  },
  {
    key: 584,
    value: {
      name: "Prehistoric Vertebra",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/e9/Prehistoric_Vertebra.png",
      description: "A segment of some prehistoric creature's spine.",
      price: "100g",
    },
  },
  {
    key: 585,
    value: {
      name: "Skeletal Tail",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/29/Skeletal_Tail.png",
      description: "It's pretty short for a tail.",
      price: "100g",
    },
  },
  {
    key: 586,
    value: {
      name: "Nautilus Fossil",
      img: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Nautilus_Fossil.png",
      description: "This must've washed up ages ago from an ancient coral reef.",
      price: "80g",
    },
  },
  {
    key: 587,
    value: {
      name: "Amphibian Fossil",
      img: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Amphibian_Fossil.png",
      description: "The relatively short hind legs suggest some kind of primordial toad.",
      price: "150g",
    },
  },
  {
    key: 588,
    value: {
      name: "Palm Fossil",
      img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Palm_Fossil.png",
      description:
        "Palm Fossils are relatively common, but this happens to be a particularly well-preserved specimen.",
      price: "100g",
    },
  },
  {
    key: 589,
    value: {
      name: "Trilobite",
      img: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Trilobite.png",
      description: "A long extinct relative of the crab.",
      price: "50g",
    },
  },
];

export default artifacts;
