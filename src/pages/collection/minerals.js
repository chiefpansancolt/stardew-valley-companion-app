import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import TableView from "@/components/tables/table-view";
import { mineralTabs, mineralShippingTabs } from "@/data/collection-tabs";
import AchievementStat from "@/components/cards/achievement-stat";

export default function Minerals() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  const { secondaryTab } = router.query;

  return (
    <>
      <Base title="Minerals" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/collection/artifacts")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
                ))}
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/shipping")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
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
                  tabs={mineralTabs}
                  currentTab={currentTab}
                  current="/collection/minerals"
                  collection={character.minerals}
                >
                  {(!currentTab || currentTab === "All Minerals") && (
                    <TableView
                      collection={character.minerals.fullList.filter((e) => e.type !== "Geode")}
                      type="minerals"
                    />
                  )}
                  {currentTab === "Found" && (
                    <TableView collection={character.minerals.foundList} type="minerals" />
                  )}
                  {currentTab === "Donated" && (
                    <TableView
                      collection={character.minerals.foundList.filter((e) => e.donated === true)}
                      type="minerals"
                    />
                  )}
                  {currentTab === "To-Be Donated" && (
                    <TableView
                      collection={character.minerals.fullList.filter(
                        (e) => e.type !== "Geode" && e.donated === false
                      )}
                      type="minerals"
                    />
                  )}
                  {currentTab === "To-Be Found" && (
                    <TableView collection={character.minerals.unfoundList} type="minerals" />
                  )}
                </Tabs>
              )}
            </div>
          </div>

          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Geode Items</h3>
              <p className="mt-1 text-sm text-gray-500">
                Geodes are mineral deposits that contain other minerals. They can be found primarily
                by breaking rocks in The Mines.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.minerals && (
                <TableView
                  collection={character.minerals.fullList.filter((e) => e.type === "Geode")}
                  type="geodes"
                />
              )}
            </div>
          </div>

          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Mineral Droppings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Items dropped by harvesting Rocks or Geodes.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.minerals && (
                <Tabs
                  tabs={mineralShippingTabs}
                  currentTab={secondaryTab}
                  current="/collection/minerals"
                  collection={character.minerals.shipping}
                  subTab={true}
                >
                  {(!secondaryTab || secondaryTab === "All Mineral Droppings") && (
                    <TableView collection={character.minerals.shipping.fullList} type="shipping" />
                  )}
                  {secondaryTab === "Shipped" && (
                    <TableView
                      collection={character.minerals.shipping.shippedList}
                      type="shipping"
                    />
                  )}
                  {secondaryTab === "To-Be Shipped" && (
                    <TableView
                      collection={character.minerals.shipping.unshippedList}
                      type="shipping"
                    />
                  )}
                </Tabs>
              )}
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  );
}
