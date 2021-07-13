import { CHARACTERS, SETTINGS } from "@/scripts/constants";

const defaultSettings = {
  darkMode: false,
  hasAccounts: false,
  currentCharacter: {
    label: "",
    value: ""
  }
}

const defaultCharacters = [];

export function initialize(storage) {
  if(!storage.getItem(SETTINGS)) {
    storage.setItem(SETTINGS, JSON.stringify(defaultSettings));
    storage.setItem(CHARACTERS, JSON.stringify(defaultCharacters));
  }
}
