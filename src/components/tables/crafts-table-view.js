import Badge from "@/components/badges/badge";

export default function CraftsTableView({ collection }) {
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
                    Ingredient(s)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Source
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Craft Count
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Found
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Crafted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {collection.map((item) => (
                  <tr key={item.name}>
                    <td className="px-6 py-4 whitespace-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10">
                          <img className="w-10" src={item.img} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.generatedCount
                              ? item.name + " (" + item.generatedCount + ")"
                              : item.name}
                          </div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <ul>
                        {item.ingredients.map((ingredient) => (
                          <li key={ingredient.name}>
                            {ingredient.name}
                            {ingredient.count > 1 && <span>{" (" + ingredient.count + ")"}</span>}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.source}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.craftCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge label={item.found ? "Found" : "Not Found"} isSuccess={item.found} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        label={item.crafted ? "Crafted" : "Not Crafted"}
                        isSuccess={item.crafted}
                      />
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
