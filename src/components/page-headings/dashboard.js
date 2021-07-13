import { CalendarIcon, CurrencyDollarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";

export default function Dashboard() {
  const { character } = useContext(CharacterContext);

  return (
    <Base title={character && (character.label)}>
      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <LocationMarkerIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.map)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.money)}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          {character && (character.season)} - {character && (character.day)} - {character && (character.year)}
        </div>
      </div>
    </Base>
  );
}
