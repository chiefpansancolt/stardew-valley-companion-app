import { SETTINGS, CHARACTERS, NONE, ZERO } from "@/scripts/constants";

export function characterAnalysis(data) {
  return data.characterName && data.farmName && data.map !== NONE && data.currentMoney &&
    data.currentMoney >= ZERO && data.farming && data.farming >= ZERO && data.mining &&
    data.mining >= ZERO && data.foraging && data.foraging >= ZERO && data.fishing &&
    data.fishing >= ZERO && data.combat && data.combat >= ZERO && data.season !== NONE &&
    data.day !== NONE && data.year !== NONE
}

export function characterData() {
  return {
    characterName: document.getElementById("character-name").value,
    farmName: document.getElementById("farm-name").value,
    map: document.getElementById("map").value,
    currentMoney: document.getElementById("current-money").value,
    farming: document.getElementById("farming").value,
    mining: document.getElementById("mining").value,
    foraging: document.getElementById("foraging").value,
    fishing: document.getElementById("fishing").value,
    combat: document.getElementById("combat").value,
    season: document.getElementById("seasons").value,
    day: document.getElementById("days").value,
    year: document.getElementById("years").value
  }
}

export function createCharacterData(data) {
  const character = {
    label: data.characterName,
    farmName: data.farmName,
    map: data.map,
    money: data.currentMoney,
    farming: data.farming,
    mining: data.mining,
    foraging: data.foraging,
    fishing: data.fishing,
    combat: data.combat,
    season: data.season,
    day: data.day,
    year: data.year
  }

  window.localStorage.setItem(data.characterName, JSON.stringify(character));
}

export function addCharactersList(characterName) {
  const characters = window.localStorage.getItem(CHARACTERS);
  const list = characters ? JSON.parse(characters) : [];
  const newChar = {
    label: characterName,
    value: characterName
  }

  list.push(newChar);
  window.localStorage.setItem(CHARACTERS, JSON.stringify(list));
}

export function setCurrentCharacterSetting(characterName) {
  const settings = JSON.parse(window.localStorage.getItem(SETTINGS));
  settings.currentCharacter.label = characterName;
  settings.currentCharacter.value = characterName;
  window.localStorage.setItem(SETTINGS, JSON.stringify(settings));
}