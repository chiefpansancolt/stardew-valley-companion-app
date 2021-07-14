import { CHARACTERS } from "@/scripts/constants";
import { currentCharacter } from "@/scripts/character/current-character";

export function characters(storage) {
  const character = currentCharacter(storage);
  const myCharacters = JSON.parse(storage.getItem(CHARACTERS));

  for (let index = 0; index < myCharacters.length; index++) {
    const char = myCharacters[index];
    if (char.label === character.label) {
      myCharacters.splice(index, 1);
      break;
    }
  }

  return myCharacters;
}
