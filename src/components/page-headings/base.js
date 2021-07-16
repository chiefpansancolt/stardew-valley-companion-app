import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faList } from "@fortawesome/free-solid-svg-icons";

export default function Base({ children, title, showButtons }) {
  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="flex-1 min-w-0">
            <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {title}
            </h2>
            <div className="mt-1 flex flex-col md:flex-row md:flex-wrap md:mt-0 md:space-x-6">
              {children}
            </div>
          </div>
          {showButtons && (
            <div className="mt-5 flex lg:mt-0 lg:ml-4 justify-center">
              <span className="block">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-cyan-500 rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <FontAwesomeIcon
                    icon={faList}
                    className="-ml-1 mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Collection List
                </button>
              </span>
              <span className="block ml-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <FontAwesomeIcon
                    icon={faTasks}
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  Needed Items
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
