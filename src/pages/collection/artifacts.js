import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import TableView from "@/components/tables/table-view";
import { artifactsTabs, artifactShippingTabs } from "@/data/collection-tabs";
import AchievementStat from "@/components/cards/achievement-stat";
import { Tab } from "@headlessui/react";

export default function Artifacts() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Artifacts" showButtons={true} />
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
              <h3 className="text-lg leading-6 font-medium text-gray-900">Archeological Items</h3>
              <p className="mt-1 text-sm text-gray-500">
                Artifacts are items that can be donated to the Museum or sold for a small profit.
                Donating to the Museum will yield rewards when donation milestones are reached, or
                when specific artifacts are donated. Multiple copies of any artifact can be found,
                but each artifact may only be donated once.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.artifacts && (
                <Tabs tabs={artifactsTabs} collection={character.artifacts}>
                  <Tab.Panel>
                    <TableView collection={character.artifacts.fullList} type="artifacts" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.artifacts.foundList} type="artifacts" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.artifacts.foundList.filter((e) => e.donated === true)}
                      type="artifacts"
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.artifacts.fullList.filter((e) => e.donated === false)}
                      type="artifacts"
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView collection={character.artifacts.unfoundList} type="artifacts" />
                  </Tab.Panel>
                </Tabs>
              )}
            </div>
          </div>

          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Artifact Droppings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Items dropped by harvesting Rocks or Geodes.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.artifacts && (
                <Tabs tabs={artifactShippingTabs} collection={character.artifacts.shipping}>
                  <Tab.Panel>
                    <TableView collection={character.artifacts.shipping.fullList} type="shipping" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.artifacts.shipping.shippedList}
                      type="shipping"
                    />
                  </Tab.Panel>
                  <Tab.Panel>
                    <TableView
                      collection={character.artifacts.shipping.unshippedList}
                      type="shipping"
                    />
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
