const COMMON = {
  NAME: "Name",
  SHIPPINGCOUNT: "Shipping Count",
  CRAFTCOUNT: "Craft Count",
  SOURCES: "Source(s)",
  INREDIENTS: "Ingredient(s)",
  SELLPRICE: "Sell Price",
  SEASONS: "Season(s)",
  LOCATIONS: "Location(s)",
  FOUND: "Found",
  SHIPPED: "Shipped",
  DONATED: "Donated",
};

const tableHeadings = {
  animalProducts: [
    COMMON.NAME,
    COMMON.SHIPPINGCOUNT,
    COMMON.SOURCES,
    COMMON.SELLPRICE,
    COMMON.SHIPPED,
  ],
  artifacts: [COMMON.NAME, COMMON.SELLPRICE, COMMON.FOUND, COMMON.DONATED],
  artisanGoods: [
    COMMON.NAME,
    COMMON.SHIPPINGCOUNT,
    COMMON.INREDIENTS,
    COMMON.SELLPRICE,
    COMMON.SHIPPED,
  ],
  crafts: [
    COMMON.NAME,
    COMMON.CRAFTCOUNT,
    COMMON.INREDIENTS,
    COMMON.SOURCES,
    COMMON.FOUND,
    "Crafted",
  ],
  crops: [
    COMMON.NAME,
    "Harvest / Regrowth",
    COMMON.SEASONS,
    COMMON.SHIPPINGCOUNT,
    COMMON.SOURCES,
    COMMON.SELLPRICE,
    COMMON.SHIPPED,
    "Polyculture",
    "Monoculture",
  ],
  fish: [
    COMMON.NAME,
    COMMON.LOCATIONS,
    "Time",
    COMMON.SEASONS,
    "Weather",
    COMMON.SELLPRICE,
    "Status",
  ],
  food: [COMMON.NAME, COMMON.INREDIENTS, COMMON.SOURCES, COMMON.SELLPRICE, COMMON.FOUND, "Cooked"],
  foraging: [COMMON.NAME, COMMON.SHIPPINGCOUNT, COMMON.LOCATIONS, COMMON.SELLPRICE, COMMON.SHIPPED],
  minerals: [
    COMMON.NAME,
    "Type",
    COMMON.SELLPRICE,
    "Gemologist Price",
    COMMON.FOUND,
    COMMON.DONATED,
  ],
  trees: [
    COMMON.NAME,
    COMMON.SHIPPINGCOUNT,
    COMMON.SEASONS,
    COMMON.SOURCES,
    COMMON.SELLPRICE,
    COMMON.SHIPPED,
  ],
  geodes: [COMMON.NAME],
  monsters: [COMMON.NAME, COMMON.LOCATIONS, "Kill Count"],
  shipping: [COMMON.NAME, COMMON.SHIPPINGCOUNT, COMMON.SOURCES, COMMON.SELLPRICE, COMMON.SHIPPED],
};

export default tableHeadings;
