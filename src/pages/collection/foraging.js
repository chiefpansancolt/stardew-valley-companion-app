import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import TableView from "@/components/tables/table-view";
import { forageTabs } from "@/data/collection-tabs";
import AchievementStat from "@/components/cards/achievement-stat";
import { Tab } from "@headlessui/react";

export default function Foraging() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Foraging" showButtons={true} />
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
              <h3 className="text-lg leading-6 font-medium text-gray-900">Foraging</h3>
              <p className="mt-1 text-sm text-gray-500">
                Foraging is the skill associated with gathering wild resources found on the ground
                throughout Stardew Valley, and with chopping down Trees. Foraging skill also
                increases by harvesting crops grown from Wild Seeds.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.foraging && (
                <Tabs tabs={forageTabs} collection={character.foraging}>
                  <Tab.Panel>
                    <TableView collection={character.foraging.fullList} type="foraging" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.foraging.shippedList} type="foraging" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.foraging.unshippedList} type="foraging" />
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
