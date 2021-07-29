const recipes = [
  {
    id: "194",
    name: "Fried Egg",
    description: "Sunny-side up.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png",
    ingredients: ["Egg"],
    sources: ["Upgraded farmhouse"],
    price: "35g",
  },
  {
    id: "195",
    name: "Omelet",
    description: "It's super fluffy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png",
    ingredients: ["Egg", "Milk"],
    sources: ["The Queen of Sauce 28 Spring, Year 1", "Stardrop Saloon for 100g"],
    price: "125g",
  },
  {
    id: "196",
    name: "Salad",
    description: "A healthy garden salad.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png",
    ingredients: ["Leek", "Dandelion", "Vinegar"],
    sources: ["Emily  (Mail - 3+)"],
    price: "110g",
  },
  {
    id: "197",
    name: "Cheese Cauli.",
    label: "Cheese Cauliflower",
    description: "It smells great!",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png",
    ingredients: ["Cauliflower", "Cheese"],
    sources: ["Pam  (Mail - 3+)"],
    price: "300g",
  },
  {
    id: "198",
    name: "Baked Fish",
    description: "Baked fish on a bed of herbs.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png",
    ingredients: ["Sunfish", "Bream", "Wheat Flour"],
    sources: ["	The Queen of Sauce 7 Summer, Year 1"],
    price: "100g",
  },
  {
    id: "199",
    name: "Parsnip Soup",
    description: "It's fresh and hearty.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png",
    ingredients: ["Parsnip", "Milk", "Vinegar"],
    sources: ["Caroline  (Mail - 3+)"],
    price: "120g",
  },
  {
    id: "200",
    name: "Vegetable Stew",
    label: "Vegetable Medley",
    description: "This is very nutritious.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png",
    ingredients: ["Tomato", "Beet"],
    sources: ["Caroline  (Mail - 7+)"],
    price: "120g",
  },
  {
    id: "201",
    name: "Complete Breakfast",
    description: "You'll feel ready to take on the world!",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png",
    ingredients: ["Fried Egg", "Milk", "Hashbrowns", "Pancakes"],
    sources: ["The Queen of Sauce 21 Spring, Year 2"],
    price: "350g",
  },
  {
    id: "202",
    name: "Fried Calamari",
    description: "It's so chewy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png",
    ingredients: ["Squid", "Wheat Flour", "Oil"],
    sources: ["Jodi  (Mail - 3+)"],
    price: "150g",
  },
  {
    id: "203",
    name: "Strange Bun",
    description: "What's inside?",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png",
    ingredients: ["Wheat Flour", "Periwinkle", "Void Mayonnaise"],
    sources: ["Shane  (Mail - 7+)"],
    price: "225g",
  },
  {
    id: "204",
    name: "Lucky Lunch",
    description: "A special little meal.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png",
    ingredients: ["Sea Cucumber", "Tortilla", "Blue Jazz"],
    sources: ["The Queen of Sauce 28 Spring, Year 2"],
    price: "250g",
  },
  {
    id: "205",
    name: "Fried Mushroom",
    description: "Earthy and aromatic.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png",
    ingredients: ["Common Mushroom", "Morel", "Oil"],
    sources: ["Demetrius  (Mail - 3+)"],
    price: "200g",
  },
  {
    id: "206",
    name: "Pizza",
    description: "It's popular for all the right reasons.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png",
    ingredients: ["Wheat Flour", "Tomato", "Cheese"],
    sources: ["The Queen of Sauce 7 Spring, Year 2", "Stardrop Saloon for 150g"],
    price: "300g",
  },
  {
    id: "207",
    name: "Bean Hotpot",
    description: "It sure is healthy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png",
    ingredients: ["Green Bean", "Green Bean"],
    sources: ["Clint  (Mail - 7+)"],
    price: "100g",
  },
  {
    id: "208",
    name: "Glazed Yams",
    description: "Sweet and satisfying... The sugar gives it a hint of caramel.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png",
    ingredients: ["Yam", "Sugar"],
    sources: ["The Queen of Sauce 21 Fall, Year 1"],
    price: "200g",
  },
  {
    id: "209",
    name: "Carp Surprise",
    description: "	It's bland and oily.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Carp_Surprise.png",
    ingredients: ["Carp", "Carp", "Carp", "Carp"],
    sources: ["The Queen of Sauce 7 Summer, Year 2"],
    price: "150g",
  },
  {
    id: "210",
    name: "Hashbrowns",
    description: "Crispy and golden-brown!",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Hashbrowns.png",
    ingredients: ["Patato", "Oil"],
    sources: ["The Queen of Sauce 14 Spring, Year 2", "Stardrop Saloon for 50g"],
    price: "120g",
  },
  {
    id: "211",
    name: "Pancakes",
    description: "A double stack of fluffy, soft pancakes.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6b/Pancakes.png",
    ingredients: ["Wheat Flour", "Egg"],
    sources: ["The Queen of Sauce 14 Summer, Year 1", "Stardrop Saloon for 100g"],
    price: "80g",
  },
  {
    id: "212",
    name: "Salmon Dinner",
    description: "The lemon spritz makes it special.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png",
    ingredients: ["Salmon", "Amaranth", "Kale"],
    sources: ["Gus  (Mail - 3+)"],
    price: "300g",
  },
  {
    id: "213",
    name: "Fish Taco",
    description: "It smells delicious.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png",
    ingredients: ["Tuna", "Tortilla", "Red Cabbage", "Mayonnaise"],
    sources: ["Linus  (Mail - 7+)"],
    price: "500g",
  },
  {
    id: "214",
    name: "Crispy Bass",
    description: "Wow, the breading is perfect.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png",
    ingredients: ["Largemouth Bass", "Wheat Flour", "Oil"],
    sources: ["Kent  (Mail - 3+)"],
    price: "150g",
  },
  {
    id: "215",
    name: "Pepper Poppers",
    description: "Spicy breaded peppers filled with cheese.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png",
    ingredients: ["Hot Pepper", "Cheese"],
    sources: ["Shane  (Mail - 3+)"],
    price: "200g",
  },
  {
    id: "216",
    name: "Bread",
    description: "A crusty baguette.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bread.png",
    ingredients: ["Wheat Flour"],
    sources: ["The Queen of Sauce 28 Summer, Year 1", "Stardrop Saloon for 100g"],
    price: "60g",
  },
  {
    id: "218",
    name: "Tom Kha Soup",
    description: "These flavors are incredible!",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png",
    ingredients: ["Coconut", "Shrimp", "Common Mushroom"],
    sources: ["Sandy  (Mail - 7+)"],
    price: "250g",
  },
  {
    id: "219",
    name: "Trout Soup",
    description: "Pretty salty.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/48/Trout_Soup.png",
    ingredients: ["Rainbow Trout", "Green Algae"],
    sources: ["The Queen of Sauce 14 Fall, Year 1"],
    price: "100g",
  },
  {
    id: "220",
    name: "Chocolate Cake",
    description: "Rich and moist with a thick fudge icing.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png",
    ingredients: ["Wheat Flour", "Sugar", "Egg"],
    sources: ["The Queen of Sauce 14 Winter, Year 1"],
    price: "200g",
  },
  {
    id: "221",
    name: "Pink Cake",
    description: "There's little heart candies on top.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png",
    ingredients: ["Melon", "Wheat Flour", "Sugar", "Egg"],
    sources: ["The Queen of Sauce 21 Summer, Year 2"],
    price: "480g",
  },
  {
    id: "222",
    name: "Rhubarb Pie",
    description: "Mmm, tangy and sweet!",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/21/Rhubarb_Pie.png",
    ingredients: ["Rhubarb", "Wheat Flour", "Sugar"],
    sources: ["Marnie  (Mail - 7+)"],
    price: "400g",
  },
  {
    id: "223",
    name: "Cookies",
    label: "Cookie",
    description: "Very chewy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/70/Cookie.png",
    ingredients: ["Wheat Flour", "Sugar", "Egg"],
    sources: ["Evelyn  (4-heart event)"],
    price: "140g",
  },
  {
    id: "224",
    name: "Spaghetti",
    description: "An old favorite.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png",
    ingredients: ["Wheat Flour", "Tomato"],
    sources: ["Lewis  (Mail - 3+)"],
    price: "120g",
  },
  {
    id: "225",
    name: "Fried Eel",
    description: "Greasy but flavorful.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/84/Fried_Eel.png",
    ingredients: ["Eel", "Oil"],
    sources: ["George  (Mail - 3+)"],
    price: "120g",
  },
  {
    id: "226",
    name: "Spicy Eel",
    description: "It's really spicy! Be careful.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Spicy_Eel.png",
    ingredients: ["Eel", "Hot Pepper"],
    sources: ["George  (Mail - 7+)"],
    price: "175g",
  },
  {
    id: "227",
    name: "Sashimi",
    description: "Raw fish sliced into thin pieces.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png",
    ingredients: ["Any Fish"],
    sources: ["Linus  (Mail - 3+)"],
    price: "75g",
  },
  {
    id: "228",
    name: "Maki Roll",
    description: "Fish and rice wrapped in seaweed.",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png",
    ingredients: ["Any Fish", "Seaweed", "Rice"],
    sources: ["The Queen of Sauce 21 Summer, Year 1", "Stardrop Saloon for 300g"],
    price: "220g",
  },
  {
    id: "229",
    name: "Tortilla",
    description: "Can be used as a vessel for food or eaten by itself.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png",
    ingredients: ["Corn"],
    sources: ["The Queen of Sauce 7 Fall, Year 1", "Stardrop Saloon for 100g"],
    price: "50g",
  },
  {
    id: "230",
    name: "Red Plate",
    description: "Full of antioxidants.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/45/Red_Plate.png",
    ingredients: ["Red Cabbage", "Radish"],
    sources: ["Emily  (Mail - 7+)"],
    price: "400g",
  },
  {
    id: "231",
    name: "Eggplant Parm.",
    label: "Eggplant Parmesan",
    description: "Tangy, cheesy, and wonderful.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/73/Eggplant_Parmesan.png",
    ingredients: ["Eggplant", "Tomato"],
    sources: ["Lewis  (Mail - 7+)"],
    price: "200g",
  },
  {
    id: "232",
    name: "Rice Pudding",
    description: "It's creamy, sweet, and fun to eat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Rice_Pudding.png",
    ingredients: ["Milk", "Sugar", "Rice"],
    sources: ["Evelyn  (Mail - 7+)"],
    price: "260g",
  },
  {
    id: "233",
    name: "Ice Cream",
    description: "	It's hard to find someone who doesn't like this.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Ice_Cream.png",
    ingredients: ["Milk", "Sugar"],
    sources: ["Jodi  (Mail - 7+)"],
    price: "120g",
  },
  {
    id: "234",
    name: "Blueberry Tart",
    description: "It's subtle and refreshing.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Blueberry_Tart.png",
    ingredients: ["Blueberry", "Wheat Flour", "Sugar", "Egg"],
    sources: ["Pierre  (Mail - 3+)"],
    price: "150g",
  },
  {
    id: "235",
    name: "Autumn's Bounty",
    description: "A taste of the season.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Autumn%27s_Bounty.png",
    ingredients: ["Yam", "Pumpkin"],
    sources: ["Demetrius  (Mail - 7+)"],
    price: "350g",
  },
  {
    id: "236",
    name: "Pumpkin Soup",
    description: "A seasonal favorite.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/59/Pumpkin_Soup.png",
    ingredients: ["Pumpkin", "Milk"],
    sources: ["Robin  (Mail - 7+)"],
    price: "300g",
  },
  {
    id: "237",
    name: "Super Meal",
    description: "It's a really energizing meal.",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Super_Meal.png",
    ingredients: ["Bok Choy", "Cranberries", "Artichoke"],
    sources: ["Kent  (Mail - 7+)"],
    price: "220g",
  },
  {
    id: "238",
    name: "Cran. Sauce",
    label: "Cranberry Sauce",
    description: "A festive treat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Cranberry_Sauce.png",
    ingredients: ["Cranberries", "Sugar"],
    sources: ["Gus  (Mail - 7+)"],
    price: "120g",
  },
  {
    id: "239",
    name: "Stuffing",
    description: "Ahh... the smell of warm bread and sage.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9a/Stuffing.png",
    ingredients: ["Bread", "Cranberries", "Hazelnut"],
    sources: ["Pam  (Mail - 7+)"],
    price: "165g",
  },
  {
    id: "240",
    name: "Farmer's Lunch",
    description: "This'll keep you going.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png",
    ingredients: ["Omelet", "Parsnip"],
    sources: ["Farming Level 3"],
    price: "150g",
  },
  {
    id: "241",
    name: "Survival Burger",
    description: "A convenient snack for the explorer.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/87/Survival_Burger.png",
    ingredients: ["Bread", "Cave Carrot", "Eggplant"],
    sources: ["Foraging Level 2"],
    price: "180g",
  },
  {
    id: "242",
    name: "Dish o' The Sea",
    label: "Dish O' The Sea",
    description: "This'll keep you warm in the cold sea air.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/ff/Dish_O%27_The_Sea.png",
    ingredients: ["Sardine", "Sardine", "Hashbrowns"],
    sources: ["Fishing Level 3"],
    price: "220g",
  },
  {
    id: "243",
    name: "Miner's Treat",
    description: "This should keep your energy up.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/12/Miner%27s_Treat.png",
    ingredients: ["Cave Carrot", "Cave Carrot", "Sugar", "Milk"],
    sources: ["Mining Level 3"],
    price: "200g",
  },
  {
    id: "244",
    name: "Roots Platter",
    description: "This'll get you digging for more.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e0/Roots_Platter.png",
    ingredients: ["Cave Carrot", "Winter Root"],
    sources: ["Combat Level 3"],
    price: "100g",
  },
  {
    id: "253",
    name: "Triple Shot Espresso",
    description: "It's more potent than regular coffee!",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/36/Triple_Shot_Espresso.png",
    ingredients: ["Coffee", "Coffee", "Coffee"],
    sources: ["Stardrop Saloon for 5,000g"],
    price: "450g",
  },
  {
    id: "265",
    name: "Seafoam Pudding",
    description: "This briny pudding will really get you into the maritime mindset!",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/33/Seafoam_Pudding.png",
    ingredients: ["Flounder", "Midnight Carp", "Squid Ink"],
    sources: ["Fishing (Level 9)"],
    price: "300g",
  },
  {
    id: "456",
    name: "Algae Soup",
    description: "It's a little slimy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/5/53/Algae_Soup.png",
    ingredients: ["Green Algae", "Green Algae", "Green Algae", "Green Algae"],
    sources: ["Clint  (Mail - 3+)"],
    price: "100g",
  },
  {
    id: "457",
    name: "Pale Broth",
    description: "A delicate broth with a hint of sulfur.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pale_Broth.png",
    ingredients: ["White Algae", "White Algae"],
    sources: ["Marnie  (Mail - 3+)"],
    price: "150g",
  },
  {
    id: "604",
    name: "Plum Pudding",
    description: "A traditional holiday treat.",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a0/Plum_Pudding.png",
    ingredients: ["Wild Plum", "Wild Plum", "Wheat Flour", "Sugar"],
    sources: ["	The Queen of Sauce 7 Winter, Year 1"],
    price: "260g",
  },
  {
    id: "605",
    name: "Artichoke Dip",
    description: "It's cool and refreshing.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/77/Artichoke_Dip.png",
    ingredients: ["Artichoke", "Milk"],
    sources: ["The Queen of Sauce 28 Fall, Year 1"],
    price: "210g",
  },
  {
    id: "606",
    name: "Stir Fry",
    description: "Julienned vegetables on a bed of rice.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Stir_Fry.png",
    ingredients: ["Cave Carrot", "Common Mushroom", "Kale", "Oil"],
    sources: ["The Queen of Sauce 7 Spring, Year 1"],
    price: "335g",
  },
  {
    id: "607",
    name: "Roasted Hazelnuts",
    description: "The roasting process creates a rich forest flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/18/Roasted_Hazelnuts.png",
    ingredients: ["Hazelnut", "Hazelnut", "Hazelnut"],
    sources: ["The Queen of Sauce 28 Summer, Year 2"],
    price: "270g",
  },
  {
    id: "608",
    name: "Pumpkin Pie",
    description: "Silky pumpkin cream in a flakey crust.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Pumpkin_Pie.png",
    ingredients: ["Pumpkin", "Wheat Flour", "Milk", "Sugar"],
    sources: ["The Queen of Sauce 21 Winter, Year 1"],
    price: "385g",
  },
  {
    id: "609",
    name: "Radish Salad",
    description: "The radishes are so crisp!",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/b9/Radish_Salad.png",
    ingredients: ["Oil", "Vinegar", "Radish"],
    sources: ["The Queen of Sauce 21 Winter, Year 1"],
    price: "300g",
  },
  {
    id: "610",
    name: "Fruit Salad",
    description: "A delicious combination of summer fruits.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Fruit_Salad.png",
    ingredients: ["Blueberry", "Melon", "Apricot"],
    sources: ["	The Queen of Sauce 7 Fall, Year 2"],
    price: "450g",
  },
  {
    id: "611",
    name: "Blackberry Cobbler",
    description: "There's nothing quite like it.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/70/Blackberry_Cobbler.png",
    ingredients: ["Blackberry", "Blackberry", "Sugar", "Wheat Flour"],
    sources: ["The Queen of Sauce 14 Fall, Year 2"],
    price: "260g",
  },
  {
    id: "612",
    name: "Cranberry Candy",
    description: "It's sweet enough to mask the bitter fruit.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Cranberry_Candy.png",
    ingredients: ["Cranberries", "Apple", "Sugar"],
    sources: ["The Queen of Sauce 28 Winter, Year 1"],
    price: "175g",
  },
  {
    id: "618",
    name: "Bruschetta",
    description: "Roasted tomatoes on a crisp white bread.",
    img: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Bruschetta.png",
    ingredients: ["Bread", "Oil", "Tomato"],
    sources: ["The Queen of Sauce 21 Winter, Year 2"],
    price: "210g",
  },
  {
    id: "648",
    name: "Coleslaw",
    description: "It's light, fresh and very healthy.",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Coleslaw.png",
    ingredients: ["Red Cabbage", "Vinegar", "Mayonnaise"],
    sources: ["The Queen of Sauce 14 Spring, Year 1"],
    price: "345g",
  },
  {
    id: "649",
    name: "Fiddlehead Risotto",
    description: "A creamy rice dish served with sauteed fern heads. It's a little bland.",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png",
    ingredients: ["Oil", "Fiddlehead Fern", "Garlic"],
    sources: ["The Queen of Sauce 28 Fall, Year 2"],
    price: "350g",
  },
  {
    id: "651",
    name: "Poppyseed Muffin",
    description: "It has a soothing effect.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png",
    ingredients: ["Poppy", "Wheat Flour", "Sugar"],
    sources: ["The Queen of Sauce 7 Winter, Year 2"],
    price: "250g",
  },
  {
    id: "727",
    name: "Chowder",
    description: "A perfect way to warm yourself after a cold night at sea.",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/95/Chowder.png",
    ingredients: ["Clam", "Milk"],
    sources: ["Willy  (Mail - 3+)"],
    price: "135g",
  },
  {
    id: "728",
    name: "Fish Stew",
    description: "It smells a lot like the sea. Tastes better, though.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6f/Fish_Stew.png",
    ingredients: ["Crayfish", "Mussel", "Periwinkle", "Tomato"],
    sources: ["Willy  (Mail - 7+)"],
    price: "175g",
  },
  {
    id: "729",
    name: "Escargot",
    description: "Butter-soaked snails cooked to perfection.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/78/Escargot.png",
    ingredients: ["Snail", "Garlic"],
    sources: ["Willy  (Mail - 5+)"],
    price: "125g",
  },
  {
    id: "730",
    name: "Lobster Bisque",
    description: "This delicate soup is a secret family recipe of Willy's.",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Lobster_Bisque.png",
    ingredients: ["Lobster", "Milk"],
    sources: ["The Queen of Sauce 14 Winter, Year 2", "Willy  (Mail - 9+)"],
    price: "205g",
  },
  {
    id: "731",
    name: "Maple Bar",
    description: "It's a sweet doughnut topped with a rich maple glaze.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png",
    ingredients: ["Maple Syrup", "Sugar", "Wheat Flour"],
    sources: ["The Queen of Sauce 14 Summer, Year 2"],
    price: "300g",
  },
  {
    id: "732",
    name: "Crab Cakes",
    description: "Crab, bread crumbs, and egg formed into patties then fried to a golden brown.",
    img: "https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png",
    ingredients: ["Crab", "Wheat Flour", "Egg", "Oil"],
    sources: ["The Queen of Sauce 21 Fall, Year 2"],
    price: "275g",
  },
  {
    id: "733",
    name: "Shrimp Cocktail",
    description: "A sumptuous appetizer made with freshly-caught shrimp.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Shrimp_Cocktail.png",
    ingredients: ["Tomato", "Shrimp", "Wild Horseradish"],
    sources: ["	The Queen of Sauce 28 Winter, Year 2"],
    price: "160g",
  },
  {
    id: "903",
    name: "Ginger Ale",
    description: "A zesty soda known for its soothing effect on the stomach.",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1a/Ginger_Ale.png",
    ingredients: ["Ginger", "Ginger", "Ginger", "Sugar"],
    sources: ["Dwarf Shop in Volcano on Ginger Island (1,000g)"],
    price: "200g",
  },
  {
    id: "904",
    name: "Banana Pudding",
    description: "A creamy dessert with a wonderful tropical flavor.",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Banana_Pudding.png",
    ingredients: ["Banana", "Milk (Any)", "Sugar"],
    sources: ["Island Trader for Bone Fragment (30)"],
    price: "260g",
  },
  {
    id: "905",
    name: "Mango Sticky Rice",
    description: "Sweet mango and coconut transforms this rice into something very special.",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Mango_Sticky_Rice.png",
    ingredients: ["Mango", "Coconut", "Rice"],
    sources: ["Leo  (Mail - 7+)"],
    price: "250g",
  },
  {
    id: "906",
    name: "Poi",
    description: "A traditional food with a delicate, sweet flavor when eaten fresh.",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Poi.png",
    ingredients: ["Taro Root", "Taro Root", "Taro Root", "Taro Root"],
    sources: ["Leo  (Mail - 3+)"],
    price: "400g",
  },
  {
    id: "907",
    name: "Tropical Curry",
    description: "An exotic, fragrant curry served in a pineapple bowl.",
    img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Tropical_Curry.png",
    ingredients: ["Coconut", "Pineapple", "Hot Pepper"],
    sources: ["Ginger Island Resort"],
    price: "500g",
  },
  {
    id: "921",
    name: "Squid Ink Ravioli",
    description: "Temporarily protects from debuffs.",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/86/Squid_Ink_Ravioli.png",
    ingredients: ["Squid Ink", "Wheat Flour", "Tomato"],
    sources: ["Combat Level 9"],
    price: "150g",
  },
];

export default recipes;
