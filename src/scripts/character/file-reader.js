import xml2js from "xml2js";
import farmTypes from "@/data/game-constants/farmTypes";
import { skillLevelNumbers, skillTitle } from "@/data/game-constants/skills";

export function handleFileSelect(file) {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  var reader = new FileReader();
  reader.onload = function (e) {
    var gameData = {},
        saveInfo = {};

    xml2js.parseString(e.target.result, { mergeAttrs: true }, (err, result) => {
      if(result) {
        gameData = result;
      } else if (err) {
        console.log(err);
      }
    });

    saveInfo.character = buildCharacterInfo(file.name, gameData);
    console.log(file.name);
    console.log(saveInfo);
    // localStorage.setItem('GameData', JSON.stringify(gameData));
  }
  reader.readAsText(file);
}

function buildCharacterInfo(fileName, data) {
  const player = data.SaveGame.player[0];
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
      full: "Day " + data.SaveGame.dayOfMonth[0] + " of " + data.SaveGame.currentSeason[0].capitalize() + ", Year " + data.SaveGame.year[0]
    },
    timePlayed: {
      hours: Math.floor(parseInt(player.millisecondsPlayed[0]) / 36e5),
      mins: Math.floor((parseInt(player.millisecondsPlayed[0]) % 36e5) / 6e4),
      full: "Played for " + Math.floor(parseInt(player.millisecondsPlayed[0]) / 36e5) + " hr " + Math.floor((parseInt(player.millisecondsPlayed[0]) % 36e5) / 6e4) + " min"
    },
    spouse: player.spouse,
    money: Intl.NumberFormat().format(parseInt(player.money)) + "g",
    skills: {
      title: skillTitle(Math.floor((parseInt(player.farmingLevel[0]) + parseInt(player.fishingLevel[0]) +
					parseInt(player.foragingLevel[0]) + parseInt(player.miningLevel[0]) +
					parseInt(player.combatLevel[0]) + parseInt(player.luckLevel[0]))/2), JSON.parse(player.isMale)),
      farming: {
        level: parseInt(player.farmingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[0]),
        nextLevelExp: player.farmingLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.farmingLevel[0])] - parseInt(player.experiencePoints[0].int[0]) : "N/A",
      },
      fishing: {
        level: parseInt(player.fishingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[1]),
        nextLevelExp: player.fishingLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.fishingLevel[0])] - parseInt(player.experiencePoints[0].int[1]) : "N/A",
      },
      foraging: {
        level: parseInt(player.foragingLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[2]),
        nextLevelExp: player.foragingLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.foragingLevel[0])] - parseInt(player.experiencePoints[0].int[2]) : "N/A",
      },
      mining: {
        level: parseInt(player.miningLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[3]),
        nextLevelExp: player.miningLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.miningLevel[0])] - parseInt(player.experiencePoints[0].int[3]) : "N/A",
      },
      combat: {
        level: parseInt(player.combatLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[4]),
        nextLevelExp: player.combatLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.combatLevel[0])] - parseInt(player.experiencePoints[0].int[4]) : "N/A",
      },
      luck: {
        level: parseInt(player.luckLevel[0]),
        exp: parseInt(player.experiencePoints[0].int[5]),
        nextLevelExp: player.luckLevel[0] !== "10" ? skillLevelNumbers[parseInt(player.luckLevel[0])] - parseInt(player.experiencePoints[0].int[5]) : "N/A",
      }
    }
  }
}
