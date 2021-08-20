import tableHeadings from "@/data/table/headings";
import Name from "@/components/tables/data-table/name";
import SingleValue from "@/components/tables/data-table/single-value";
import SimpleList from "@/components/tables/data-table/simple-list";
import Status from "@/components/tables/data-table/status";
import Prices from "@/components/tables/data-table/prices";
import ComplexList from "@/components/tables/data-table/complex-list";
import Harvest from "./data-table/harvet";

export default function TableView({ collection, type, profession }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeadings[type].map((heading) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      key={heading}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {collection.length === 0 && (
                  <tr key="zero-table">
                    <td className="px-6 py-4 text-center" colSpan={tableHeadings[type].length}>
                      No Items Available
                    </td>
                  </tr>
                )}
                {collection.map((item) => (
                  <tr key={item.name}>
                    {tableHeadings[type].includes("Name") && (
                      <Name
                        name={item.name}
                        label={item.label}
                        img={item.img}
                        description={item.description}
                        count={item.nameCount}
                      />
                    )}
                    {tableHeadings[type].includes("Type") && <SingleValue value={item.type} />}
                    {tableHeadings[type].includes("Harvest / Regrowth") && (
                      <Harvest growth={item.harvest} regrowth={item.regrowth} />
                    )}
                    {tableHeadings[type].includes("Location(s)") && (
                      <SimpleList single={item.location} list={item.locations} />
                    )}
                    {tableHeadings[type].includes("Time") && <SingleValue value={item.time} />}
                    {(tableHeadings[type].includes("Shipping Count") ||
                      tableHeadings[type].includes("Craft Count") ||
                      tableHeadings[type].includes("Kill Count")) && (
                      <SingleValue value={item.count} />
                    )}
                    {tableHeadings[type].includes("Season(s)") && (
                      <SimpleList single={item.season} list={item.seasons} />
                    )}
                    {tableHeadings[type].includes("Weather") && (
                      <SimpleList single={item.weather} list={item.weathers} />
                    )}
                    {tableHeadings[type].includes("Ingredient(s)") && (
                      <ComplexList list={item.ingredients} />
                    )}
                    {tableHeadings[type].includes("Source(s)") && (
                      <SimpleList single={item.source} list={item.sources} />
                    )}
                    {tableHeadings[type].includes("Sell Price") && (
                      <Prices single={item.price} list={item.prices} profession={profession} />
                    )}
                    {tableHeadings[type].includes("Gemologist Price") && (
                      <SingleValue value={item.gemologistPrice} />
                    )}
                    {tableHeadings[type].includes("Found") && (
                      <Status
                        valid={true}
                        value={item.found}
                        activeLabel="Found"
                        inactiveLabel="Not Found"
                      />
                    )}
                    {tableHeadings[type].includes("Donated") && (
                      <Status
                        valid={true}
                        value={item.donated}
                        activeLabel="Donated"
                        inactiveLabel="Not Donated"
                      />
                    )}
                    {tableHeadings[type].includes("Status") && (
                      <Status
                        valid={true}
                        value={item.caught}
                        activeLabel="Caught"
                        inactiveLabel="Not Caught"
                      />
                    )}
                    {tableHeadings[type].includes("Crafted") && (
                      <Status
                        valid={true}
                        value={item.crafted}
                        activeLabel="Crafted"
                        inactiveLabel="Not Crafted"
                      />
                    )}
                    {tableHeadings[type].includes("Cooked") && (
                      <Status
                        valid={true}
                        value={item.cooked}
                        activeLabel="Cooked"
                        inactiveLabel="Not Cooked"
                      />
                    )}
                    {tableHeadings[type].includes("Shipped") && (
                      <Status
                        valid={item.shipping.usage}
                        value={item.shipped}
                        activeLabel="Shipped"
                        inactiveLabel="Not Shipped"
                      />
                    )}
                    {tableHeadings[type].includes("Polyculture") && (
                      <Status
                        valid={item.polyculture}
                        value={item.polycultured}
                        activeLabel="Completed"
                        inactiveLabel={item.count + " / 15"}
                      />
                    )}
                    {tableHeadings[type].includes("Monoculture") && (
                      <Status
                        valid={item.monoculture}
                        value={item.monocultured}
                        activeLabel="Completed"
                        inactiveLabel={item.count + " / 300"}
                      />
                    )}
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
