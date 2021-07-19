import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import { artifactsTabs } from "@/data/collection-tabs";
import ArtifactsTableView from "@/components/tables/artifacts-table-view";

export default function Artifacts() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  return (
    <>
      <Base title="Artifacts" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
                <Tabs
                  tabs={artifactsTabs}
                  currentTab={currentTab}
                  current="/collection/artifacts"
                  collection={character.artifacts}
                >
                  {(!currentTab || currentTab === "All") && (
                    <ArtifactsTableView collection={character.artifacts.fullList} />
                  )}
                  {currentTab === "Found" && (
                    <ArtifactsTableView collection={character.artifacts.foundList} />
                  )}
                  {currentTab === "Donated" && (
                    <ArtifactsTableView
                      collection={character.artifacts.foundList.filter((e) => e.donated === true)}
                    />
                  )}
                  {currentTab === "To-Do" && (
                    <ArtifactsTableView collection={character.artifacts.unfoundList} />
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
