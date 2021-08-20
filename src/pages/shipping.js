import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import AchievementStat from "@/components/cards/achievement-stat";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function Shipping() {
  const { character } = useContext(CharacterContext);

  return (
    <>
      <Base title="Shipping" showButtons={true} />
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
              <h3 className="text-lg leading-6 font-medium text-gray-900">Shipment Details</h3>
              <p className="mt-1 text-sm text-gray-500">
                
              </p>
            </div>
            <div className="border-t border-gray-200 p-6">
              <ul className="grid grid-cols-16 gap-8">
                {character.shipping.fullList.map((ship) => (
                  <li key={ship.id} className="inline-block relative cursor-pointer">
                    <div className="group block w-full aspect-w-10 aspect-h-10 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-cyan-500 overflow-hidden">
                      <Tippy content={ship.name + " - (" + ship.count + ")"}>
                          <img src={ship.img} alt="" className="group-hover:opacity-75" />
                      </Tippy>
                    </div>
                    <span className="absolute bottom-1 right-1 transform translate-y-1/2 translate-x-1/2 rounded-full">
                    { ship.shipped ? (
                      <CheckCircleIcon className="block h-8 w-8 rounded-full text-green-600 bg-white" />
                    ) : (
                      <XCircleIcon className="block h-8 w-8 rounded-full text-red-600 bg-white" />
                    )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </LayoutMain>
      </LayoutContainer>
    </>
  )
}