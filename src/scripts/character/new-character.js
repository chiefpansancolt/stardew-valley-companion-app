import { SETTINGS, CHARACTERS, MB, KB, BYTE } from "@/scripts/constants";

export function fileData(file) {
  const fileSize = file.size > 1024 ? file.size > 1048576 ?
    Math.round(file.size / 1048576) + MB : Math.round(file.size / 1024) + KB : file.size + BYTE;
  return {
    name: file.name,
    size: fileSize,
    ext: file.type,
    file: file,
    complete: true
  };
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
