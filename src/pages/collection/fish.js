import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import Base from "@/components/page-headings/base";
import Tabs from "@/components/tabs";
import FishTableView from "@/components/tables/fish-table-view";
import { fishTabs } from "@/data/collection-tabs";
import AchievementStat from "@/components/cards/achievement-stat";

export default function Fish() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  const fishingSkill = character.character.skills.fishing;
  const currentProfession =
    fishingSkill.profession1 !== "Fisher" || fishingSkill.profession2 !== "Angler"
      ? ""
      : fishingSkill.profession2 === "Angler"
      ? fishingSkill.profession2
      : fishingSkill.profession1;
  return (
    <>
      <Base title="Fish" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={true}>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {character.character.achievements.achievements
                .filter((e) => e.detailLink === "/collection/fish")
                .map((achievement) => (
                  <AchievementStat key={achievement.name} achievement={achievement} />
                ))}
            </div>
          </div>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Fish</h3>
              <p className="mt-1 text-sm text-gray-500">
                Fish can be found in the ocean, lakes, rivers, and in certain levels of the mines.
                Most fish can be caught with a fishing pole (see fishing) but some require crab pots
                to catch them. Some fish only spawn at certain times of the day while others only
                appear when it rains. Upon catching them, the name of the fish and its length are
                displayed. Players can keep track of how many fish they've caught and their record
                lengths in their Collections menu. Fish can be used as ingredients in cooking and
                are required to restore the Fish Tank in the Community Center.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.fishing && (
                <Tabs
                  tabs={fishTabs}
                  currentTab={currentTab}
                  current="/collection/fish"
                  collection={character.fishing}
                >
                  {(!currentTab || currentTab === "All") && (
                    <>
                      <FishTableView
                        collection={character.fishing.fullList.filter((e) => e.type === "Fish")}
                        profession={currentProfession}
                      />
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Legendary Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.fullList.filter(
                            (e) => e.type === "Legendary Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Crab Pot Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.fullList.filter(
                            (e) => e.type === "Crab Pot Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Other
                        </h2>
                        <FishTableView
                          collection={character.fishing.fullList.filter((e) => e.type === "Other")}
                          profession={currentProfession}
                        />
                      </div>
                    </>
                  )}
                  {currentTab === "Caught" && (
                    <>
                      <FishTableView
                        collection={character.fishing.foundList.filter((e) => e.type === "Fish")}
                        profession={currentProfession}
                      />
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Legendary Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.foundList.filter(
                            (e) => e.type === "Legendary Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Crab Pot Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.foundList.filter(
                            (e) => e.type === "Crab Pot Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Other
                        </h2>
                        <FishTableView
                          collection={character.fishing.foundList.filter((e) => e.type === "Other")}
                          profession={currentProfession}
                        />
                      </div>
                    </>
                  )}
                  {currentTab === "To-Do" && (
                    <>
                      <FishTableView
                        collection={character.fishing.unfoundList.filter((e) => e.type === "Fish")}
                        profession={currentProfession}
                      />
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Legendary Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.unfoundList.filter(
                            (e) => e.type === "Legendary Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Crab Pot Fish
                        </h2>
                        <FishTableView
                          collection={character.fishing.unfoundList.filter(
                            (e) => e.type === "Crab Pot Fish"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                      <div className="mt-4">
                        <h2 className="pl-4 pb-4 text-lg leading-6 font-medium text-gray-900">
                          Other
                        </h2>
                        <FishTableView
                          collection={character.fishing.unfoundList.filter(
                            (e) => e.type === "Other"
                          )}
                          profession={currentProfession}
                        />
                      </div>
                    </>
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
