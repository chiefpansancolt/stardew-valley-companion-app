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
  const achieve = [];

  for (let i = 0; i < achievements.length; i++) {
    const el = achievements[i];
    if (player.achievements[0].int.find((e) => parseInt(e) === el.key)) {
      el.value.completed = true;
    } else {
      el.value.completed = false;
    }
    achieve.push(el.value);
  }

  return {
    fileName: fileName,
    version: data.SaveGame.gameVersion[0],
    name: player.name[0],
    farmName: player.farmName[0],
    farmType: farmTypes[parseInt(data.SaveGame.whichFarm[0])],
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
    money: {
      number: parseInt(player.money),
      full: Intl.NumberFormat().format(parseInt(player.money)) + CURRENCY,
    },
    totalMoneyEarned: {
      number: parseInt(player.totalMoneyEarned),
      full: Intl.NumberFormat().format(parseInt(player.totalMoneyEarned)) + CURRENCY,
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
    achievements: achieve,
  };
}
