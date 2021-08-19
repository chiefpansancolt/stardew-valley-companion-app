import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import AchievementStat from "@/components/cards/achievement-stat";
import TableView from "@/components/tables/table-view";
import { foodTabs } from "@/data/collection-tabs";

export default function Food() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Food" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/collection/food")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
                ))}
            </div>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Cooking Recipes</h3>
              <p className="mt-1 text-sm text-gray-500">
                Cooking is a game mechanic that becomes available after upgrading the farmhouse for
                the first time. The house upgrade adds a kitchen, which includes a stove and a
                refrigerator. The stove is the cooking interface, while the refrigerator provides 36
                slots of storage space, similar to a chest. The refrigerator is unique in that it is
                directly linked with the cooking interface, as if it were an extension of the
                player's inventory. Only ingredients in the player's inventory, refrigerator or
                Mini-Fridge are seen as usable items for a recipe.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.recipes && (
                <Tabs
                  tabs={foodTabs}
                  currentTab={currentTab}
                  current="/collection/food"
                  collection={character.recipes}
                >
                  {(!currentTab || currentTab === "All Recipes") && (
                    <TableView collection={character.recipes.fullList} type="food" />
                  )}
                  {currentTab === "Found" && (
                    <TableView collection={character.recipes.foundList} type="food" />
                  )}
                  {currentTab === "Cooked" && (
                    <TableView
                      collection={character.recipes.foundList.filter((e) => e.cooked === true)}
                      type="food"
                    />
                  )}
                  {currentTab === "To-Be Cooked" && (
                    <TableView
                      collection={character.recipes.fullList.filter((e) => e.cooked === false)}
                      type="food"
                    />
                  )}
                  {currentTab === "To-Be Found" && (
                    <TableView collection={character.recipes.unfoundList} type="food" />
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
