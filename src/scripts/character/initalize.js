import characters from "@/data/storage-defaults/characters";
import settings from "@/data/storage-defaults/settings";
import { CHARACTERS, SETTINGS } from "@/scripts/constants";

export function initialize(storage) {
  if (!storage.getItem(SETTINGS)) {
    storage.setItem(SETTINGS, JSON.stringify(settings));
    storage.setItem(CHARACTERS, JSON.stringify(characters));
  }
}
