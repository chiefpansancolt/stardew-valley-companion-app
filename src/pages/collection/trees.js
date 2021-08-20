import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import TableView from "@/components/tables/table-view";
import { treesTabs } from "@/data/collection-tabs";
import AchievementStat from "@/components/cards/achievement-stat";

export default function Trees() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Trees" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/shipping")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
                ))}
            </div>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Trees</h3>
              <p className="mt-1 text-sm text-gray-500">
                Trees that do not yield fruit are of two types: common and special. Common trees
                (Maple, Oak, Pine, and Mahogany) are valuable natural resources, being the primary
                source of multiple products: Wood for construction and crafting, Sap, Maple Syrup,
                Oak Resin, and Pine Tar. Special trees have their own unique characteristics.
                <br />
                <br />
                Fruit Trees require 28 days to mature, after which they produce one fruit per day
                when in season. Fruit can be allowed to accumulate up to three days before
                harvesting. Fruit trees do not need to be watered, and will not die in the winter.
                Fruit saplings will grow during any season, allowing players to plant and prepare
                for upcoming season to bear fruit.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.trees && (
                <Tabs
                  tabs={treesTabs}
                  currentTab={currentTab}
                  current="/collection/trees"
                  collection={character.trees}
                >
                  {(!currentTab || currentTab === "All Trees") && (
                    <TableView collection={character.trees.fullList} type="trees" />
                  )}
                  {currentTab === "Shipped" && (
                    <TableView collection={character.trees.shippedList} type="trees" />
                  )}
                  {currentTab === "To-Be Shipped" && (
                    <TableView collection={character.trees.unshippedList} type="trees" />
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
