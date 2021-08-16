import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import ForagingTableView from "@/components/tables/foraging-table-view";
import { forageTabs } from "@/data/collection-tabs";

export default function Foraging() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Foraging" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Foraging</h3>
              <p className="mt-1 text-sm text-gray-500">
                Foraging is the skill associated with gathering wild resources found on the
                ground throughout Stardew Valley, and with chopping down Trees. Foraging skill
                also increases by harvesting crops grown from Wild Seeds.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.foraging && (
                <Tabs
                  tabs={forageTabs}
                  currentTab={currentTab}
                  current="/collection/foraging"
                  collection={character.foraging}
                >
                  {(!currentTab || currentTab === "All Foraging") && (
                    <ForagingTableView collection={character.foraging.fullList} />
                  )}
                  {currentTab === "Shipped" && (
                    <ForagingTableView collection={character.foraging.shippedList} />
                  )}
                  {currentTab === "To-Be Shipped" && (
                    <ForagingTableView collection={character.foraging.unshippedList} />
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
