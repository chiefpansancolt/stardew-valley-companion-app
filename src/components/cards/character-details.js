import { useState } from "react";
import Map from "@/components/modals/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "@/scripts/class-names";

export default function CharacterDetails({ character }) {
  const [openMap, setOpenMap] = useState(false);
  return (
    <>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Character Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Additional Details about your character.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Farm Type</dt>
              <dd className="mt-1 text-sm text-blue-500">
                <span className="cursor-pointer" onClick={() => setOpenMap(true)}>
                  {character.farmName}
                </span>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Spouse</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.spouse}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Day</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.date.full}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Money</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.money.full}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Total Earned</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.totalMoneyEarned.full}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Farm House Level</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.farmHouseLevel} / 3</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Health</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.health} / 205</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Stamina</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.stamina} / 508</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Backpack Item Storage</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.items} / 36</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Today's Luck</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.dailyLuck}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Rain Chance Tomorrow</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.rainChance}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Tomorrow's Weather</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <span className="sr-only">{character.weatherTomorrow.name}</span>
                <FontAwesomeIcon
                  icon={character.weatherTomorrow.icon}
                  className={classNames(character.weatherTomorrow.color, "h-6 w-6")}
                />
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Time Played</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.timePlayed.full}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Version</dt>
              <dd className="mt-1 text-sm text-gray-900">{character.version}</dd>
            </div>
          </dl>
        </div>
      </div>
      <Map image={character.farmType.map} open={openMap} setOpen={setOpenMap} />
    </>
  );
}
