import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faList } from "@fortawesome/free-solid-svg-icons";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';
import currentCharacter from "@/scripts/current-character"

export default function PageHeader() {
  return(
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="flex-1 min-w-0">
            <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{currentCharacter.label}</h2>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {currentCharacter.map}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {currentCharacter.apply.money}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                {currentCharacter.season} - {currentCharacter.day} - {currentCharacter.year}
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FontAwesomeIcon icon={faTasks} className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Needed Items
              </button>
            </span>

            <span className="hidden sm:block ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FontAwesomeIcon icon={faList} className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Collection List
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
