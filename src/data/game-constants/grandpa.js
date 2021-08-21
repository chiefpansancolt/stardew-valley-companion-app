const grandpa = [
  {
    name: "50,000g",
    requirement: {
      type: "money",
      count: 50000,
    },
    points: 1,
  },
  {
    name: "100,000g",
    requirement: {
      type: "money",
      count: 100000,
    },
    points: 1,
  },
  {
    name: "200,000g",
    requirement: {
      type: "money",
      count: 200000,
    },
    points: 1,
  },
  {
    name: "300,000g",
    requirement: {
      type: "money",
      count: 300000,
    },
    points: 1,
  },
  {
    name: "500,000g",
    requirement: {
      type: "money",
      count: 500000,
    },
    points: 1,
  },
  {
    name: "1,000,000g",
    requirement: {
      type: "money",
      count: 1000000,
    },
    points: 2,
  },
  {
    name: "Have a total of at least 30 levels in Skills.",
    requirement: {
      type: "skills",
      count: 30,
    },
    points: 1,
  },
  {
    name: "Have a total of at least 50 levels in Skills (reach level 10 in every skill).",
    requirement: {
      type: "skills",
      count: 50,
    },
    points: 1,
  },
  {
    name: "Complete the museum collection.",
    requirement: {
      type: "achievement",
      count: "A Complete Collection",
    },
    points: 1,
  },
  {
    name: "Catch every fish.",
    requirement: {
      type: "achievement",
      count: "Master Angler",
    },
    points: 1,
  },
  {
    name: "Ship every item.",
    requirement: {
      type: "achievement",
      count: "Full Shipment",
    },
    points: 1,
  },
  {
    name: "Married with at least two house upgrades (kitchen and nursery). You do not need the 3rd upgrade (cellar) for this milestone.",
    requirement: {
      type: "married_house",
      count: 2,
      married: true,
    },
    points: 1,
  },
  {
    name: "Have a friendship of at least eight hearts with at least five villagers.",
    requirement: {
      type: "friends",
      count: 5,
      hearts: 8,
    },
    points: 1,
  },
  {
    name: "Have a friendship of at least eight hearts with at least ten villagers.",
    requirement: {
      type: "friends",
      count: 10,
      hearts: 8,
    },
    points: 1,
  },
  {
    name: "Have a friendship of approximately five hearts with your pet.",
    requirement: {
      type: "pet",
      count: 5,
    },
    points: 1,
  },
  {
    name: "The Community Center is completed.",
    requirement: {
      type: "community_center",
      count: "calculated",
    },
    points: 1,
  },
  {
    name: "The Community Center completion ceremony has taken place.",
    requirement: {
      type: "community_center_event",
      count: "calculated",
    },
    points: 2,
  },
  {
    name: "Skull Key obtained.",
    requirement: {
      type: "skull_key",
      count: true,
    },
    points: 1,
  },
  {
    name: "Rusty Key obtained.",
    requirement: {
      type: "rust_key",
      count: true,
    },
    points: 1,
  },
];

const candles = {
  one: { min: 0, max: 3 },
  two: { min: 4, max: 7 },
  three: { min: 8, max: 11 },
  four: { min: 12, max: 21 },
};

export { grandpa, candles };
