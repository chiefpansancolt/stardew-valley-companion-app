import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import MineralsTableView from "@/components/tables/minerals-table-view";
import FullStat from "@/components/cards/full-stat";
import { mineralsTab } from "@/data/collection-tabs";
import { StarIcon } from "@heroicons/react/outline";

function DetailsView({ achievement, artifacts, minerals }) {
  const total =
    achievement.count === "Calculated"
      ? artifacts.fullList.length + minerals.fullList.filter((e) => e.type !== "Geode").length
      : achievement.count;
  const current = artifacts.donated + minerals.donated;
  return (
    <div className="flex justify-between">
      <span>{achievement.description}</span>
      {current < total && (
        <span>
          {current} / {total}
        </span>
      )}
      {current >= total && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Completed
        </span>
      )}
    </div>
  );
}

export default function Minerals() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;

  return (
    <>
      <Base title="Minerals" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements
                .filter((e) => e.detailLink === "/collection/artifacts")
                .map((achievement) => (
                  <FullStat
                    key={achievement.name}
                    item={achievement}
                    hasButton={false}
                    details={
                      <DetailsView
                        achievement={achievement}
                        artifacts={character.artifacts}
                        minerals={character.minerals}
                      />
                    }
                    Icon={StarIcon}
                    iconColor="text-yellow-400"
                  />
                ))}
            </div>
          </div>

          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Mineral Items</h3>
              <p className="mt-1 text-sm text-gray-500">
                Minerals are items that can be found in The Mines and the Skull Cavern. Most
                minerals are acquired from geodes after having Clint process them. Some are found on
                the ground and some can be mined from nodes, which are also found in the Quarry.
                They can also sometimes be acquired as Monster Drops, as gifts from Villagers, or
                from the Statue of Endless Fortune. Minerals (other than geode minerals) are also
                possible items found in Fishing Treasure Chests.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.minerals && (
                <Tabs
                  tabs={mineralsTab}
                  currentTab={currentTab}
                  current="/collection/minerals"
                  collection={character.minerals}
                >
                  {(!currentTab || currentTab === "All") && (
                    <MineralsTableView
                      isGeode={false}
                      collection={character.minerals.fullList.filter((e) => e.type !== "Geode")}
                    />
                  )}
                  {currentTab === "Found" && (
                    <MineralsTableView isGeode={false} collection={character.minerals.foundList} />
                  )}
                  {currentTab === "Donated" && (
                    <MineralsTableView
                      isGeode={false}
                      collection={character.minerals.foundList.filter((e) => e.donated === true)}
                    />
                  )}
                  {currentTab === "To-Do" && (
                    <MineralsTableView
                      isGeode={false}
                      collection={character.minerals.unfoundList}
                    />
                  )}
                </Tabs>
              )}
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-5">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Geode Items</h3>
              <p className="mt-1 text-sm text-gray-500">
                Geodes are mineral deposits that contain other minerals. They can be found primarily
                by breaking rocks in The Mines.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.minerals && (
                <MineralsTableView
                  isGeode={true}
                  collection={character.minerals.fullList.filter((e) => e.type === "Geode")}
                />
              )}
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  );
}
