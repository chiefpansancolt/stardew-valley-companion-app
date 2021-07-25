import { useContext } from "react";
import { useRouter } from "next/router";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import LayoutAside from "@/components/layouts/layout-aside";
import FullStat from "@/components/cards/full-stat";
import Tabs from "@/components/tabs";
import { monsterTabs } from "@/data/collection-tabs";
import MinesMonstersTableView from "@/components/tables/mines-monsters-table-view";

export default function MinesMonsters() {
  const { character } = useContext(CharacterContext);
  const router = useRouter();
  const { currentTab } = router.query;
  const theMines = {
    label: "The Mines",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/84/The_Mines_Icon.png",
  };

  const skullCavern = {
    label: "Skull Cavern",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4d/Iridium_Node.png",
  };

  const skullKey = {
    label: "Skull Key",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Skull_Key.png",
  };
  return (
    <>
      <Base title="Mines & Monsters" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={false}>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Monsters</h3>
              <p className="mt-1 text-sm text-gray-500">
                Monsters are found in the Mines, the Skull Cavern, the Quarry Mine, the Mutant Bug
                Lair, and the Volcano Dungeon. When killed, Monsters have a chance to drop Monster
                Loot and a variety of items.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {character.minesMonsters && (
                <Tabs
                  tabs={monsterTabs}
                  currentTab={currentTab}
                  current="/mines-monsters"
                  collection={character.minesMonsters}
                >
                  {(!currentTab || currentTab === "All Monsters") && (
                    <MinesMonstersTableView collection={character.minesMonsters.monsterList} />
                  )}
                  {currentTab === "Eradication Goals" && (
                    <>
                      {character.minesMonsters.monsterTypes
                        .filter((e) => e.goal !== "None")
                        .map((type) => (
                          <div key={type.category} className="mt-4">
                            <h2 className="px-4 pb-4 text-lg leading-6 font-medium text-gray-900 flex justify-between">
                              <span>{type.category}</span>
                              {type.percent >= 100 && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Complete
                                </span>
                              )}
                              {type.percent < 100 && (
                                <span className="text-sm">
                                  {type.trackableSum} / {type.goal}
                                  {" - (" + type.percent + "%)"}
                                </span>
                              )}
                            </h2>
                            <MinesMonstersTableView
                              collection={type.monsters.filter((e) => e.trackable === true)}
                            />
                          </div>
                        ))}
                    </>
                  )}
                  {currentTab === "No Eradication Goals" && (
                    <>
                      {character.minesMonsters.monsterTypes.map((type) => (
                        <>
                          {type.monsters.filter((e) => e.trackable === false).length > 0 && (
                            <div key={type.category} className="mt-4">
                              <h2 className="px-4 pb-4 text-lg leading-6 font-medium text-gray-900 flex justify-between">
                                {type.category}
                              </h2>
                              <MinesMonstersTableView
                                collection={type.monsters.filter((e) => e.trackable === false)}
                              />
                            </div>
                          )}
                        </>
                      ))}
                    </>
                  )}
                </Tabs>
              )}
            </div>
          </div>
        </LayoutMain>
        <LayoutAside>
          <div className="mx-auto">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Mine Details</h2>
            <div className="mt-2 grid grid-cols-1 gap-4">
              <FullStat
                item={theMines}
                hasButton={false}
                details={
                  <div className="flex justify-between">
                    <span>How far have you gone: </span>
                    {character.minesMonsters.mineLevel < 120 && (
                      <span>{character.minesMonsters.mineLevel} / 120</span>
                    )}
                    {character.minesMonsters.mineLevel >= 120 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        The Bottom
                      </span>
                    )}
                  </div>
                }
              />

              <FullStat
                item={skullCavern}
                hasButton={false}
                details={
                  <div className="flex justify-between">
                    <span>How far have you gone: </span>
                    {character.minesMonsters.skullCavernLevel > 0 && (
                      <span>{character.minesMonsters.skullCavernLevel} / &infin;</span>
                    )}
                    {character.minesMonsters.skullCavernLevel === 0 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Has not Explored
                      </span>
                    )}
                  </div>
                }
              />

              <FullStat
                item={skullKey}
                hasButton={false}
                details={
                  <div className="flex justify-between">
                    <span>Obtained on Floor 120</span>
                    {!character.minesMonsters.hasSkullKey && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Not Obtained
                      </span>
                    )}
                    {character.minesMonsters.hasSkullKey && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Obtained
                      </span>
                    )}
                  </div>
                }
              />
            </div>
          </div>
        </LayoutAside>
      </LayoutContainer>
    </>
  );
}
