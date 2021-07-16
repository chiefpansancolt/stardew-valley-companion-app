import { CalendarIcon, CurrencyDollarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import { ClockIcon, CodeIcon } from "@heroicons/react/outline";

export default function Dashboard() {
  const { character } = useContext(CharacterContext);

  return (
    <Base title={character && (character.character.name)} showButtons={true}>
      <div className="mt-1 flex flex-col md:flex-row md:flex-wrap md:mt-0 md:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <LocationMarkerIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.character.farmType.name)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.character.money.full)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.character.date.full)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <ClockIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.character.timePlayed.full)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CodeIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.character.version)}
        </div>
      </div>
    </Base>
  );
}
