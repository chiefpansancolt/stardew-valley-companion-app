import { SETTINGS } from "@/scripts/constants";

export function currentCharacter(storage) {
  const current = JSON.parse(storage.getItem(SETTINGS));
  return current ? JSON.parse(storage.getItem(current.currentCharacter.value)) : undefined;
}
