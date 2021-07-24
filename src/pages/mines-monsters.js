import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import LayoutAside from "@/components/layouts/layout-aside";
import FullStat from "@/components/cards/full-stat";

export default function MinesMonsters() {
  const { character } = useContext(CharacterContext);
  const theMines = {
    label: "The Mines",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/84/The_Mines_Icon.png"
  };

  const skullCavern = {
    label: "Skull Cavern",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/4d/Iridium_Node.png"
  };

  const skullKey = {
    label: "Skull Key",
    img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Skull_Key.png"
  }
  return (
    <>
      <Base title="Mines & Monsters" showButtons={true} />
      <LayoutContainer>
        <LayoutMain isAlone={false}>
          
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
                      <span>
                        {character.minesMonsters.mineLevel} / 120
                      </span>
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
                      <span>
                        {character.minesMonsters.skullCavernLevel} / &infin;
                      </span>
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
  )
}
