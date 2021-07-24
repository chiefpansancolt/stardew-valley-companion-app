import classNames from "@/scripts/class-names";
import { StarIcon } from "@heroicons/react/solid";

export default function FishTableView({ collection, profession }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Season
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Weather
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price {profession !== "" && " " + profession}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {collection.length === 0 && (
                  <tr key="zero-table">
                    <td className="px-6 py-4 text-center" colSpan="7">
                      No Items Available for this Category
                    </td>
                  </tr>
                )}
                {collection.map((item) => (
                  <tr key={item.name}>
                    <td className="px-6 py-4 whitespace-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10" src={item.img} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-wrap text-sm text-gray-900">
                      <ul>
                        {item.locations.map((location) => (
                          <li key={location}>{location}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.time}
                    </td>
                    <td className="px-6 py-4 whitespace-wrap text-sm text-gray-900">
                      <ul>
                        {item.seasons.map((season) => (
                          <li key={season}>{season}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <ul>
                        {item.weathers.map((weather) => (
                          <li key={weather}>{weather}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <ul>
                        {profession === "" &&
                          item.prices.standard.map((price) => (
                            <li key={price.cost} className="flex items-center">
                              <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                              {price.cost}
                            </li>
                          ))}
                        {profession === "Fisher" &&
                          item.prices.fisher.map((price) => (
                            <li key={price.cost} className="flex items-center">
                              <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                              {price.cost}
                            </li>
                          ))}
                        {profession === "Angler" &&
                          item.prices.angler.map((price) => (
                            <li key={price.cost} className="flex items-center">
                              <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                              {price.cost}
                            </li>
                          ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.caught ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Caught
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Caught
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
