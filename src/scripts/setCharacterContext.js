import { SETTINGS } from "@/scripts/constants";

export function setCharacterContext(event) {
  const storage = window.localStorage;
  const element = event.target.innerText;
  const settings = JSON.parse(storage.getItem(SETTINGS));
  const selected = JSON.parse(storage.getItem(element));
  settings.currentCharacter.label = selected.label;
  settings.currentCharacter.value = selected.label;
  storage.setItem(SETTINGS, JSON.stringify(settings));
  window.location.reload();
}