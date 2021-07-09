import { SETTINGS } from "@/scripts/constants";

export default function currentCharacter() {
  const current = JSON.parse(window.localStorage.getItem(SETTINGS).currentCharacter);

  return current ? JSON.parse(window.localStorage.getItem(current.value)) : "";
}
