import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import AchievementStat from "@/components/cards/achievement-stat";
import TableView from "@/components/tables/table-view";
import { cropTabs } from "@/data/collection-tabs";
import { Tab } from "@headlessui/react";

export default function Crops() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Crops" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/collection/crops")
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
              <h3 className="text-lg leading-6 font-medium text-gray-900">Crops</h3>
              <p className="mt-1 text-sm text-gray-500">
                Crops are plants that are grown from seeds to be harvested for the purpose of
                profit, food, or gifting. Generally, each crop is seasonal. It can be planted only
                during its designated season, and when seasons change (after the 28th day), the crop
                will wither and die. Multi-season crops (i.e., Ancient Fruit, Coffee Bean, Corn,
                Sunflower, and Wheat), however, will continue to grow during all specified seasons.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.crops && (
                <Tabs tabs={cropTabs} collection={character.crops}>
                  <Tab.Panel>
                    <TableView collection={character.crops.fullList} type="crops" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crops.shippedList} type="crops" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crops.polycultureList} type="crops" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crops.unpolycultureList} type="crops" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.crops.unshippedList} type="crops" />
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
