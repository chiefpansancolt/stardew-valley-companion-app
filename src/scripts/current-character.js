import { SETTINGS } from "@/scripts/constants";

export default function currentCharacter() {
  return JSON.parse(window.localStorage.getItem(SETTINGS).currentCharacter);
}
