/* eslint-disable no-extend-native */
import xml2js from "xml2js";
import farmTypes from "@/data/game-constants/farmTypes";
import { skillLevelNumbers, skillTitle } from "@/data/game-constants/skills";
import {
  HR,
  MIN,
  DAY,
  OF,
  YEAR,
  SPACE,
  COMMA,
  PLAYEDFOR,
  CURRENCY,
  TEN,
  NA,
  LEVEL5,
  LEVEL10,
} from "@/scripts/constants";
import professions from "@/data/game-constants/professions";
import achievements from "@/data/game-constants/achievements";
import { addCharactersList, setCurrentCharacterSetting } from "./new-character";
import weather from "@/data/game-constants/weather";
import artifacts from "@/data/game-constants/artifacts";
import minerals from "@/data/game-constants/minerals";
import townPeople from "@/data/game-constants/town-people";
import fish from "@/data/game-constants/fish";
import monsterTypes from "@/data/game-constants/monsters";
import stardrops from "@/data/game-constants/stardrop";
import recipes from "@/data/game-constants/recipes";
import crafts from "@/data/game-constants/crafting";
import crops from "@/data/game-constants/crops";
import foraging from "@/data/game-constants/foraging";
import artisanGoods from "@/data/game-constants/artisan-goods";
import trees from "@/data/game-constants/trees";

export function handleFileSelect(file) {
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  var reader = new FileReader();
  reader.onload = function (e) {
    var gameData = {},
      saveInfo = {};

    xml2js.parseString(e.target.result, { mergeAttrs: true }, (err, result) => {
      if (result) {
        gameData = result;
      } else if (err) {
        console.log(err);
      }
    });

    saveInfo.character = buildCharacterInfo(file.name, gameData);
    saveInfo.artifacts = buildCollectionArtifacts(gameData);
    saveInfo.minerals = buildCollectionMinerals(gameData);
    saveInfo.townPeople = buildTownPeople(gameData);
    saveInfo.fishing = buildFishing(gameData);
    saveInfo.minesMonsters = buildMinesAndMonsters(gameData);
    saveInfo.recipes = buildCooking(gameData);
    saveInfo.crafting = buildCrafting(gameData);
    saveInfo.crops = buildCrops(gameData);
    saveInfo.foraging = buildForage(gameData);
    saveInfo.artisanGoods = buildArtisanGoods(gameData);
    saveInfo.trees = buildTrees(gameData);
    saveInfo.character.achievements = buildCharacterAchievements(gameData, saveInfo);
    localStorage.setItem(file.name, JSON.stringify(saveInfo));
    addCharactersList(saveInfo.character);
    setCurrentCharacterSetting(saveInfo.character);

    // localStorage.setItem('GameData', JSON.stringify(gameData));
  };
  reader.readAsText(file);
}

function buildCharacterInfo(fileName, data) {
  const player = data.SaveGame.player[0];
  const farming1 = player.professions[0].int.find((e) => e === "0" || e === "1");
  const farming2 = player.professions[0].int.find(
    (e) => e === "2" || e === "3" || e === "4" || e === "5"
  );
  const fishing1 = player.professions[0].int.find((e) => e === "6" || e === "7");
  const fishing2 = player.professions[0].int.find(
    (e) => e === "8" || e === "9" || e === "10" || e === "11"
  );
  const foraging1 = player.professions[0].int.find((e) => e === "12" || e === "13");
  const foraging2 = player.professions[0].int.find(
    (e) => e === "14" || e === "15" || e === "16" || e === "17"
  );
  const mining1 = player.professions[0].int.find((e) => e === "18" || e === "19");
  const mining2 = player.professions[0].int.find(
    (e) => e === "20" || e === "21" || e === "22" || e === "23"
  );
  const combat1 = player.professions[0].int.find((e) => e === "24" || e === "25");
  const combat2 = player.professions[0].int.find(
    (e) => e === "26" || e === "27" || e === "28" || e === "29"
  );

  const pet = buildCharacterPet(data);

  return {
    fileName: fileName,
    version: data.SaveGame.gameVersion[0],
    name: player.name[0],
    farmName: player.farmName[0],
    farmType: farmTypes[parseInt(data.SaveGame.whichFarm[0])],
    health: player.maxHealth[0],
    stamina: player.maxStamina[0],
    items: player.maxItems[0],
    rainChance: parseFloat(data.SaveGame.chanceToRainTomorrow[0]).toFixed(4),
    dailyLuck: parseFloat(data.SaveGame.dailyLuck[0]).toFixed(4),
    weatherTomorrow: weather[data.SaveGame.weatherForTomorrow[0]],
    farmHouseLevel: player.houseUpgradeLevel[0],
    pet: {
      type: pet.type ? pet.type : pet["xsi:type"][0],
      name: !pet.type ? pet.name[0] : "",
      friendshipLevel: !pet.type ? parseInt(pet.friendshipTowardFarmer[0]) : "",
    },
    date: {
      season: data.SaveGame.currentSeason[0].capitalize(),
      day: data.SaveGame.dayOfMonth[0],
      year: data.SaveGame.year[0],
      full:
        DAY +
        SPACE +
        data.SaveGame.dayOfMonth[0] +
        SPACE +
        OF +
        SPACE +
        data.SaveGame.currentSeason[0].capitalize() +
        COMMA +
        SPACE +
        YEAR +
        SPACE +
        data.SaveGame.year[0],
    },
    timePlayed: {
      hours: Math.floor(parseInt(player.millisecondsPlayed[0]) / 36e5),
      mins: Math.floor((parseInt(player.millisecondsPlayed[0]) % 36e5) / 6e4),
      full:
        PLAYEDFOR +
        SPACE +
        Math.floor(parseInt(player.millisecondsPlayed[0]) / 36e5) +
        SPACE +
        HR +
        SPACE +
        Math.floor((parseInt(player.millisecondsPlayed[0]) % 36e5) / 6e4) +
        SPACE +
        MIN,
    },
    spouse: player.spouse[0],
    children: buildCharacterChildren(data),
    money: {
      number: parseInt(player.money[0]),
      full: Intl.NumberFormat().format(parseInt(player.money[0])) + CURRENCY,
    },
    totalMoneyEarned: {
      number: parseInt(player.totalMoneyEarned[0]),
      full: Intl.NumberFormat().format(parseInt(player.totalMoneyEarned[0])) + CURRENCY,
    },
    skills: {
      title: skillTitle(
        Math.floor(
          (parseInt(player.farmingLevel[0]) +
            parseInt(player.fishingLevel[0]) +
            parseInt(player.foragingLevel[0]) +
            parseInt(player.miningLevel[0]) +
            parseInt(player.combatLevel[0]) +
            parseInt(player.luckLevel[0])) /
            2
        ),
        JSON.parse(player.isMale)
      ),
      farming: {
        level: parseInt(player.farmingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[0]),
        nextLevelExp:
          player.farmingLevel[0] !== TEN
            ? skillLevelNumbers[player.farmingLevel[0]] -
              parseInt(player.experiencePoints[0].int[0])
            : NA,
        profession1: farming1 ? professions.farming[farming1] : LEVEL5,
        profession2: farming2 ? professions.farming[farming2] : LEVEL10,
      },
      fishing: {
        level: parseInt(player.fishingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[1]),
        nextLevelExp:
          player.fishingLevel[0] !== TEN
            ? skillLevelNumbers[player.fishingLevel[0]] -
              parseInt(player.experiencePoints[0].int[1])
            : NA,
        profession1: fishing1 ? professions.fishing[fishing1] : LEVEL5,
        profession2: fishing2 ? professions.fishing[fishing2] : LEVEL10,
      },
      foraging: {
        level: parseInt(player.foragingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[2]),
        nextLevelExp:
          player.foragingLevel[0] !== TEN
            ? skillLevelNumbers[player.foragingLevel[0]] -
              parseInt(player.experiencePoints[0].int[2])
            : NA,
        profession1: foraging1 ? professions.foraging[foraging1] : LEVEL5,
        profession2: foraging2 ? professions.foraging[foraging2] : LEVEL10,
      },
      mining: {
        level: parseInt(player.miningLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[3]),
        nextLevelExp:
          player.miningLevel[0] !== TEN
            ? skillLevelNumbers[player.miningLevel[0]] - parseInt(player.experiencePoints[0].int[3])
            : NA,
        profession1: mining1 ? professions.mining[mining1] : LEVEL5,
        profession2: mining2 ? professions.mining[mining2] : LEVEL10,
      },
      combat: {
        level: parseInt(player.combatLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[4]),
        nextLevelExp:
          player.combatLevel[0] !== TEN
            ? skillLevelNumbers[player.combatLevel[0]] - parseInt(player.experiencePoints[0].int[4])
            : NA,
        profession1: combat1 ? professions.combat[combat1] : LEVEL5,
        profession2: combat2 ? professions.combat[combat2] : LEVEL10,
      },
      luck: {
        level: parseInt(player.luckLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[5]),
        nextLevelExp:
          player.luckLevel[0] !== TEN
            ? skillLevelNumbers[player.luckLevel[0]] - parseInt(player.experiencePoints[0].int[5])
            : NA,
      },
    },
    stardrops: buildCharacterStardrops(player.mailReceived[0].string),
  };
}

function buildCharacterStardrops(playerMail) {
  const results = stardrops;

  for (let i = 0; i < results.length; i++) {
    results[i].completed = playerMail.find((e) => e === results[i].id) ? true : false;
  }

  return results;
}

function buildCharacterAchievements(data, saveInfo) {
  const results = [];

  for (let i = 0; i < achievements.length; i++) {
    const el = achievements[i];
    if (data.SaveGame.player[0].achievements[0].int.find((e) => parseInt(e) === el.key)) {
      el.value.completed = true;
    } else if (el.key === "theBottom") {
      el.value.completed = saveInfo.minesMonsters.mineLevel === el.value.count ? true : false;
      el.value.current =
        saveInfo.minesMonsters.mineLevel < el.value.count
          ? saveInfo.minesMonsters.mineLevel
          : "Completed";
    } else if (el.key === "localLegend") {
      el.value.completed = false;
    } else if (el.key === "joJa") {
      el.value.completed = false;
    } else if (el.key === "stardrops") {
      el.value.count = saveInfo.character.stardrops.length;
      el.value.completed =
        saveInfo.character.stardrops.filter((e) => e.completed === true).length === el.value.count
          ? true
          : false;
      el.value.current = saveInfo.character.stardrops.filter((e) => e.completed === true).length;
      el.value.percent = percentCalc(
        saveInfo.character.stardrops.filter((e) => e.completed === true).length,
        el.value.count
      );
    } else if (el.key === "fullHouse") {
      el.value.isMarried = saveInfo.character.spouse !== "" ? true : false;
      el.value.current = saveInfo.character.children;
      el.value.percent = percentCalc(el.value.current, el.value.count);
      el.value.completed = el.value.isMarried && el.value.current >= el.value.count ? true : false;
    } else if (el.key === "singleTalent") {
      el.value.current = Math.max(
        saveInfo.character.skills.farming.level,
        saveInfo.character.skills.foraging.level,
        saveInfo.character.skills.fishing.level,
        saveInfo.character.skills.mining.level,
        saveInfo.character.skills.combat.level
      );
      el.value.percent = percentCalc(el.value.current, el.value.count);
      el.value.completed = el.value.current === el.value.count ? true : false;
    } else if (el.key === "masterTalent") {
      el.value.current =
        saveInfo.character.skills.farming.level +
        saveInfo.character.skills.foraging.level +
        saveInfo.character.skills.fishing.level +
        saveInfo.character.skills.mining.level +
        saveInfo.character.skills.combat.level;
      el.value.percent = percentCalc(el.value.current, el.value.count);
      el.value.completed = el.value.current === el.value.count ? true : false;
    } else if (el.key === "protecter") {
      el.value.count = saveInfo.minesMonsters.monsterTypes.filter((e) => e.goal !== "None").length;
      el.value.current = saveInfo.minesMonsters.monsterTypes.filter((e) => e.percent >= 100).length;
      el.value.percent = percentCalc(el.value.current, el.value.count);
      el.value.percent = el.value.current === el.value.count ? true : false;
    } else {
      el.value.completed = false;
      switch (el.key) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          el.value.current = saveInfo.character.totalMoneyEarned.number;
          el.value.percent = percentCalc(
            saveInfo.character.totalMoneyEarned.number,
            el.value.count
          );
          break;
        case 5:
          el.value.count =
            saveInfo.minerals.fullList.filter((e) => e.type !== "Geode").length +
            saveInfo.artifacts.fullList.length;
          el.value.current = saveInfo.minerals.donated + saveInfo.artifacts.donated;
          el.value.percent = percentCalc(el.value.current, el.value.count);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
          let count5 = 0;
          let count10 = 0;
          for (let i = 0; i < saveInfo.townPeople.length; i++) {
            const friendData = saveInfo.townPeople[i];
            const hearts = friendData.points / 250;
            count5 += hearts >= 5 ? 1 : 0;
            count10 += hearts >= 10 ? 1 : 0;
          }

          el.value.current = el.value.heartLevel === 5 ? count5 : count10;
          el.value.percent = percentCalc(
            el.value.heartLevel === 5 ? count5 : count10,
            el.value.count
          );
          break;
        case 15:
        case 16:
        case 17:
          el.value.count =
            el.value.count === "Calculated" ? saveInfo.recipes.fullList.length : el.value.count;
          el.value.current = saveInfo.recipes.cooked;
          el.value.percent = percentCalc(saveInfo.recipes.cooked, el.value.count);
          break;
        case 18:
        case 19:
          el.value.current = saveInfo.character.farmHouseLevel;
          el.value.percent = percentCalc(saveInfo.character.farmHouseLevel, el.value.count);
          break;
        case 20:
        case 21:
        case 22:
          el.value.count =
            el.value.count === "Calculated" ? saveInfo.crafting.fullList.length : el.value.count;
          el.value.current = saveInfo.crafting.crafted;
          el.value.percent = percentCalc(saveInfo.crafting.crafted, el.value.count);
          break;
        case 24:
        case 25:
        case 26:
          el.value.count =
            el.value.count === "Calculated" ? saveInfo.fishing.fullList.length : el.value.count;
          el.value.current = saveInfo.fishing.caught;
          el.value.percent = percentCalc(saveInfo.fishing.caught, el.value.count);
          break;
        case 27:
          el.value.current = parseInt(data.SaveGame.player[0].stats[0].fishCaught[0]);
          el.value.percent = percentCalc(
            parseInt(data.SaveGame.player[0].stats[0].fishCaught[0]),
            el.value.count
          );
          break;
        case 28:
          el.value.current = saveInfo.minerals.donated + saveInfo.artifacts.donated;
          el.value.percent = percentCalc(el.value.current, el.value.count);
          break;
        case 29:
        case 30:
          break;
        case 31:
          el.value.current = saveInfo.crops.polyculture;
          el.value.percent = percentCalc(el.value.current, el.value.count);
          break;
        case 32:
          el.value.current = saveInfo.crops.monoculture;
          el.value.percent = percentCalc(el.value.current, el.value.count);
          break;
        case 34:
          break;
        default:
          console.log(el.key);
      }
    }
    results.push(el.value);
  }

  return {
    achievements: results,
    isSteam: results.filter((e) => e.isSteam === true).length,
    isSteamCompleted: results.filter((e) => e.isSteam === true && e.completed === true).length,
    isInGame: results.filter((e) => e.isInGame === true).length,
    isInGameCompleted: results.filter((e) => e.isInGame === true && e.completed === true).length,
  };
}

function buildCharacterChildren(data) {
  const FarmHouse = data.SaveGame.locations[0].GameLocation.find(isFarmHouse);

  return FarmHouse.characters[0] !== "" ? FarmHouse.characters[0].NPC.filter(isChild).length : 0;
}

function buildCharacterPet(data) {
  const FarmHouse = data.SaveGame.locations[0].GameLocation.find(isFarmHouse);
  const Farm = data.SaveGame.locations[0].GameLocation.find(isFarm);

  if (FarmHouse.characters[0] !== "") {
    if (FarmHouse.characters[0].NPC.find(isDog)) {
      return FarmHouse.characters[0].NPC.find(isDog);
    }

    if (FarmHouse.characters[0].NPC.find(isCat)) {
      return FarmHouse.characters[0].NPC.find(isCat);
    }
  }

  if (Farm.characters[0] !== "") {
    if (Farm.characters[0].NPC.find(isDog)) {
      return Farm.characters[0].NPC.find(isDog);
    }

    if (Farm.characters[0].NPC.find(isCat)) {
      return Farm.characters[0].NPC.find(isCat);
    }
  }

  return { type: "Not Picked Yet" };
}

function buildTownPeople(data) {
  const friendshipData = data.SaveGame.player[0].friendshipData[0].item;
  const spouse = data.SaveGame.player[0].spouse[0];
  const events = data.SaveGame.player[0].eventsSeen[0].int;
  const results = [];

  for (let i = 0; i < townPeople.length; i++) {
    const person = townPeople[i];
    const friendData = friendshipData.find((e) => e.key[0].string[0] === person.name);
    if (person.name === spouse) {
      person.isMarried = true;
    }

    if (friendData) {
      const friendDataValue = friendData.value[0].Friendship[0];
      person.status = friendDataValue.Status[0];
      person.points = parseInt(friendDataValue.Points[0]);
    }

    for (let e = 0; e < person.events.length; e++) {
      const eventsList = String(person.events[e].id).split("|");
      for (let ev = 0; ev < eventsList.length; ev++) {
        if (events.find((v) => v === String(eventsList[ev]))) {
          person.events[e].completed = true;
          break;
        }
      }
    }

    results.push(person);
  }

  return results;
}

function buildCollectionArtifacts(data) {
  const museumItems =
    data.SaveGame.locations[0].GameLocation.find(isLibraryMuseum).museumPieces[0].item;
  const archaeologyFound = data.SaveGame.player[0].archaeologyFound[0].item;
  let found = [];
  let unfound = [];
  let all = [];

  for (let i = 0; i < artifacts.length; i++) {
    const artifact = artifacts[i].value;
    const isFound = archaeologyFound.find(
      (e) => String(e.key[0].int[0]) === String(artifacts[i].key)
    )
      ? true
      : false;
    const isDonated = museumItems.find(
      (e) => String(e.value[0].int[0]) === String(artifacts[i].key)
    )
      ? true
      : false;

    artifact.found = isFound;
    artifact.donated = isDonated;

    if (isFound) {
      found.push(artifact);
    } else {
      unfound.push(artifact);
    }

    all.push(artifact);
  }

  return {
    found: found.length,
    donated: found.filter((e) => e.donated === true).length,
    undonated: found.filter((e) => e.donated === false).length,
    unfound: unfound.length,
    fullList: all,
    foundList: found,
    unfoundList: unfound,
  };
}

function buildCollectionMinerals(data) {
  const museumItems =
    data.SaveGame.locations[0].GameLocation.find(isLibraryMuseum).museumPieces[0].item;
  const mineralsFound = data.SaveGame.player[0].mineralsFound[0].item;
  let found = [];
  let unfound = [];
  let all = [];

  for (let i = 0; i < minerals.length; i++) {
    const mineral = minerals[i].value;
    const isFound = mineralsFound.find((e) => String(e.key[0].int[0]) === String(minerals[i].key))
      ? true
      : false;
    const isDonated = museumItems.find((e) => String(e.value[0].int[0]) === String(minerals[i].key))
      ? true
      : false;

    mineral.found = isFound;
    mineral.donated = isDonated;

    if (isFound) {
      found.push(mineral);
    } else if (mineral.type !== "Geode") {
      unfound.push(mineral);
    }

    all.push(mineral);
  }

  return {
    found: found.length,
    donated: found.filter((e) => e.donated === true).length,
    undonated: found.filter((e) => e.donated === false).length,
    unfound: unfound.filter((e) => e.type !== "Geode").length,
    fullList: all,
    foundList: found,
    unfoundList: unfound,
  };
}

function buildFishing(data) {
  const fishCaught = data.SaveGame.player[0].fishCaught[0].item;
  let all = [];
  let caught = [];
  let unfound = [];

  for (let i = 0; i < fish.length; i++) {
    const current = fish[i].value;
    if (fishCaught.find((e) => e.key[0].int[0] === String(fish[i].key))) {
      current.caught = true;
      caught.push(current);
    } else {
      current.caught = false;
      unfound.push(current);
    }

    all.push(current);
  }

  return {
    fishCaught: data.SaveGame.player[0].stats[0].fishCaught[0],
    caught: caught.length,
    unfound: unfound.filter((e) => e.trackable === true).length,
    fullList: all,
    foundList: caught,
    unfoundList: unfound,
  };
}

function buildMinesAndMonsters(data) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.count;
  let types = monsterTypes;
  let monsters = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];

    for (let m = 0; m < type.monsters.length; m++) {
      const monster = type.monsters[m];
      const current = data.SaveGame.player[0].stats[0].specificMonstersKilled[0].item.find(
        (e) => e.key[0].string[0] === monster.name
      );

      monster.count = current ? parseInt(current.value[0].int[0]) : 0;
      monsters.push(monster);
    }

    type.trackableSum = type.monsters.filter((e) => e.trackable === true).reduce(reducer, 0);
    type.untrackableSum = type.monsters.filter((e) => e.trackable === false).reduce(reducer, 0);
    type.total = type.trackableSum + type.untrackableSum;
    type.percent = ((type.trackableSum / type.goal) * 100).toFixed(2);
  }

  return {
    monsterList: monsters,
    monsterTypes: types,
    hasSkullKey: data.SaveGame.player[0].hasSkullKey[0] === "true",
    mineLevel:
      parseInt(data.SaveGame.player[0].deepestMineLevel[0]) >= 120
        ? 120
        : parseInt(data.SaveGame.player[0].deepestMineLevel[0]),
    skullCavernLevel:
      parseInt(data.SaveGame.player[0].deepestMineLevel[0]) > 120
        ? parseInt(data.SaveGame.player[0].deepestMineLevel[0]) - 120
        : 0,
  };
}

function buildCooking(data) {
  let recipeList = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    recipe.found = data.SaveGame.player[0].cookingRecipes[0].item.find(
      (e) => e.key[0].string[0] === recipe.name
    )
      ? true
      : false;
    recipe.cooked = data.SaveGame.player[0].recipesCooked[0].item.find(
      (e) => e.key[0].int[0] === recipe.id
    )
      ? true
      : false;

    recipeList.push(recipe);
  }
  return {
    cooked: recipeList.filter((e) => e.cooked === true).length,
    uncooked: recipeList.filter((e) => e.cooked === false).length,
    found: recipeList.filter((e) => e.found === true).length,
    unfound: recipeList.filter((e) => e.found === false).length,
    fullList: recipeList,
    foundList: recipeList.filter((e) => e.found === true),
    unfoundList: recipeList.filter((e) => e.found === false),
  };
}

function buildCrafting(data) {
  let craftList = [];

  for (let i = 0; i < crafts.length; i++) {
    const craft = crafts[i];
    const item = data.SaveGame.player[0].craftingRecipes[0].item.find(
      (e) => e.key[0].string[0] === craft.name
    );

    craft.found = item ? true : false;
    craft.crafted = item && parseInt(item.value[0].int[0]) > 0 ? true : false;
    craft.craftCount = item ? parseInt(item.value[0].int[0]) : 0;

    craftList.push(craft);
  }

  return {
    crafted: craftList.filter((e) => e.crafted === true).length,
    uncrafted: craftList.filter((e) => e.crafted === false).length,
    found: craftList.filter((e) => e.found === true).length,
    unfound: craftList.filter((e) => e.found === false).length,
    fullList: craftList,
    foundList: craftList.filter((e) => e.found === true),
    unfoundList: craftList.filter((e) => e.found === false),
  };
}

function buildCrops(data) {
  let cropList = [];

  for (let i = 0; i < crops.length; i++) {
    const crop = crops[i];
    const item = data.SaveGame.player[0].basicShipped[0].item.find(
      (e) => e.key[0].int[0] === String(crop.id)
    );

    crop.count = item ? parseInt(item.value[0].int[0]) : 0;
    crop.shipped = crop.shipping ? (crop.count > 0 ? true : false) : "n/a";
    crop.polycultured = crop.polyculture ? (crop.count > 15 ? true : false) : "n/a";
    crop.monocultured = crop.monoculture ? (crop.count > 300 ? true : false) : "n/a";

    cropList.push(crop);
  }

  return {
    shipped: cropList.filter((e) => e.shipped === true).length,
    unshipped: cropList.filter((e) => e.shipped === false).length,
    polyculture: cropList.filter((e) => e.polycultured === true).length,
    unpolyculture: cropList.filter((e) => e.polycultured === false).length,
    monoculture: cropList.filter((e) => e.monocultured === true).length,
    unmonoculture: cropList.filter((e) => e.monocultured === false).length,
    fullList: cropList,
    shippedList: cropList.filter((e) => e.shipped === true),
    unshippedList: cropList.filter((e) => e.shipped === false),
    polycultureList: cropList.filter((e) => e.polycultured === true),
    unpolycultureList: cropList.filter((e) => e.polycultured === false),
    monocultureList: cropList.filter((e) => e.monocultured === true),
    unmonocultureList: cropList.filter((e) => e.monocultured === false),
  };
}

function buildForage(data) {
  let forageList = [];

  for (let i = 0; i < foraging.length; i++) {
    const forage = foraging[i];
    const item = data.SaveGame.player[0].basicShipped[0].item.find(
      (e) => e.key[0].int[0] === String(forage.id)
    );

    forage.count = item ? parseInt(item.value[0].int[0]) : 0;
    forage.shipped = forage.shipping ? (forage.count > 0 ? true : false) : "n/a";

    forageList.push(forage);
  }

  return {
    shipped: forageList.filter((e) => e.shipped === true).length,
    unshipped: forageList.filter((e) => e.shipped === false).length,
    fullList: forageList,
    shippedList: forageList.filter((e) => e.shipped === true),
    unshippedList: forageList.filter((e) => e.shipped === false),
  };
}

function buildArtisanGoods(data) {
  let artisanGoodsList = [];

  for (let i = 0; i < artisanGoods.length; i++) {
    const artisanGood = artisanGoods[i];
    const item = data.SaveGame.player[0].basicShipped[0].item.find(
      (e) => e.key[0].int[0] === String(artisanGood.id)
    );

    artisanGood.count = item ? parseInt(item.value[0].int[0]) : 0;
    artisanGood.shipped = artisanGood.shipping ? (artisanGood.count > 0 ? true : false) : "n/a";

    artisanGoodsList.push(artisanGood);
  }

  return {
    shipped: artisanGoodsList.filter((e) => e.shipped === true).length,
    unshipped: artisanGoodsList.filter((e) => e.shipped === false).length,
    fullList: artisanGoodsList,
    shippedList: artisanGoodsList.filter((e) => e.shipped === true),
    unshippedList: artisanGoodsList.filter((e) => e.shipped === false),
  };
}

function buildTrees(data) {
  let treesList = [];

  for (let i = 0; i < trees.length; i++) {
    const tree = trees[i];
    const item = data.SaveGame.player[0].basicShipped[0].item.find(
      (e) => e.key[0].int[0] === String(tree.id)
    );

    tree.count = item ? parseInt(item.value[0].int[0]) : 0;
    tree.shipped = tree.shipping ? (tree.count > 0 ? true : false) : "n/a";

    treesList.push(tree);
  }

  return {
    shipped: treesList.filter((e) => e.shipped === true).length,
    unshipped: treesList.filter((e) => e.shipped === false).length,
    fullList: treesList,
    shippedList: treesList.filter((e) => e.shipped === true),
    unshippedList: treesList.filter((e) => e.shipped === false),
  };
}

function isLibraryMuseum(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "LibraryMuseum";
  } else {
    return false;
  }
}

function isDog(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "Dog";
  } else {
    return false;
  }
}

function isCat(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "Cat";
  } else {
    return false;
  }
}

function isChild(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "Child";
  } else {
    return false;
  }
}

function isFarmHouse(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "FarmHouse";
  } else {
    return false;
  }
}

function isFarm(element) {
  if (element["xsi:type"]) {
    return element["xsi:type"][0] === "Farm";
  } else {
    return false;
  }
}

function percentCalc(top, bottom) {
  return ((top / bottom) * 100).toFixed(2);
}
