import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import AchievementStat from "@/components/cards/achievement-stat";
import TableView from "@/components/tables/table-view";
import { craftingTabs } from "@/data/collection-tabs";
import { Tab } from "@headlessui/react";

export default function Crafting() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Crafting" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/collection/crafting")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
                ))}
            </div>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Crafting</h3>
              <p className="mt-1 text-sm text-gray-500">
                Crafting is the activity of creating a new item as specified by a crafting recipe.
                Similar to but separate from Cooking, each recipe lists a set of ingredient items
                that are consumed in each crafting action. The player knows eight crafting recipes
                at the start of the game, and must learn all others by gaining skills, developing
                friendships with townsfolk, and purchasing the rest from shops. Unlike cooked items,
                most (not all) crafted items are inedible.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.crafting && (
                <Tabs tabs={craftingTabs} collection={character.crafting}>
                  <Tab.Panel>
                    <TableView collection={character.crafting.fullList} type="crafts" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crafting.foundList} type="crafts" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.crafting.foundList.filter((e) => e.crafted === true)}
                      type="crafts"
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.crafting.foundList.filter((e) => e.crafted === false)}
                      type="crafts"
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crafting.unfoundList} type="crafts" />
                  </Tab.Panel>
                </Tabs>
              )}
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  );
}
