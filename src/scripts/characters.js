import { CHARACTERS } from "@/scripts/constants";
import currentCharacter from "@/scripts/current-character";

export default function characters() {
  const myCharacters = JSON.parse(window.localStorage.getItem(CHARACTERS));

  for (let index = 0; index < myCharacters.length; index++) {
    const char = myCharacters[index];
    if(char.value === currentCharacter) {
      myCharacters.splice(index, 1);
      break;
    }
  }

  return myCharacters;
}
