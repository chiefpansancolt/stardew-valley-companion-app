import { SETTINGS } from "@/scripts/constants";

export function setCharacterContext(event) {
  const storage = window.localStorage;
  const fileName = event.target.name;
  const settings = JSON.parse(storage.getItem(SETTINGS));
  const selected = JSON.parse(storage.getItem(fileName));
  settings.currentCharacter.label = selected.character.name;
  settings.currentCharacter.value = selected.character.fileName;
  storage.setItem(SETTINGS, JSON.stringify(settings));
  window.location.reload();
}
