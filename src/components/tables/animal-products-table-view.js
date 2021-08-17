import Badge from "@/components/badges/badge";
import classNames from "@/scripts/class-names";
import { StarIcon } from "@heroicons/react/solid";

export default function AnimalProductsTableView({ collection, profession }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                    Shipping Count
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source(s)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sell Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Shipped
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {collection.map((item) => (
                  <tr key={item.id}>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <ul>
                        {item.sources.map((source) => (
                          <li key={source}>{source}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.price ? (
                        <>{item.price}</>
                      ) : (
                        <ul>
                          {(profession === "" || profession !== "Rancher") &&
                            item.prices.standard.map((price) => (
                              <li key={price.cost} className="flex items-center">
                                <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                                {price.cost}
                              </li>
                            ))}
                          {profession === "Rancher" &&
                            item.prices.rancher.map((price) => (
                              <li key={price.cost} className="flex items-center">
                                <StarIcon className={classNames(price.color, "h-4 w-4 mr-1")} />
                                {price.cost}
                              </li>
                            ))}
                        </ul>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {!item.shipping.usage ? (
                        <Badge label="n/a" isSuccess={false} isWarning={true} />
                      ) : (
                        <Badge
                          label={item.shipped ? "Shipped" : "Not Shipped"}
                          isSuccess={item.shipped}
                        />
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
