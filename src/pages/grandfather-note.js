import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCandleHolder } from "@fortawesome/pro-duotone-svg-icons";
import FullStat from "@/components/cards/full-stat";
import SingleValue from "@/components/tables/data-table/single-value";
import Badge from "@/components/badges/badge";

function Candle({ active, first }) {
  if (active) {
    return (
      <FontAwesomeIcon
        icon={faCandleHolder}
        size="4x"
        style={{ "--fa-secondary-color": "darkorange", "--fa-secondary-opacity": 1 }}
        swapOpacity
        className={first ? "" : "ml-4"}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faCandleHolder}
        size="4x"
        style={{ "--fa-secondary-opacity": 1 }}
        swapOpacity
        className={first ? "" : "ml-4"}
      />
    );
  }
}

export default function GrandfatherNote() {
  const { character } = useContext(CharacterContext);
  const item = {
    name: "Points Earned",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png",
  };

  return (
    <>
      <Base title="GrandFather Note" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <div className="grid grid-cols-4 gap-4">
              <FullStat item={item} details={character.grandpa.count + " pts"} hasButton={false} />
              <div className="mt-3">
                <Candle active={character.grandpa.candles.one.completed} first={true} />
                <Candle active={character.grandpa.candles.two.completed} first={false} />
                <Candle active={character.grandpa.candles.three.completed} first={false} />
                <Candle active={character.grandpa.candles.four.completed} first={false} />
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                List of Granfathers Notes
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Grandpa's evaluation is directly related to the number of candles that light up
                around Grandpa's Shrine (there are 4 candles) at the beginning of year three. This
                is determined by a point system based on various milestones that were reached in the
                first two years. There are a total of 21 available points.
                <br />
                <br />
                The player can be re-evaluated at any time by placing a Diamond into Grandpa's
                Shrine (Grandpa will show up on the following day, after a game load or the first
                day of the following season in some cases). This means that the opportunity to
                obtain all four candles is extended beyond the initial two year evaluation.
              </p>
            </div>
            <div className="border-t border-gray-200">
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
                              Requirement
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Points Available
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
                          {character.grandpa.fullList.map((item) => (
                            <tr key={item.name}>
                              <SingleValue value={item.name} />
                              <SingleValue value={item.points} />
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.completed ? (
                                  <Badge label="Completed" isSuccess={true} />
                                ) : (
                                  <span>
                                    {item.current + " / " + item.requirement.count}
                                    {" - (" + item.percent + "%)"}
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
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  );
}
