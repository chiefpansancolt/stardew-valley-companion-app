import Base from "@/components/page-headings/base";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import PersonCard from "@/components/cards/town-people/person-card";
import AchievementStat from "@/components/cards/achievement-stat";

export default function TownPeople() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Town People" showButtons={true} />
      <LayoutContainer>
        {character.character && (
          <>
            <LayoutMain isAlone={true}>
              <div className="mx-auto">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Achievements</h2>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {character.character.achievements.achievements
                    .filter((e) => e.detailLink === "/town-people")
                    .map((achievement) => (
                      <AchievementStat achievement={achievement} />
                    ))}
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden sm:rounded-md mt-4">
                <ul className="divide-y divide-gray-200">
                  {character.townPeople.map((person) => (
                    <PersonCard key={person.name} person={person} />
                  ))}
                </ul>
              </div>
            </LayoutMain>
          </>
        )}
      </LayoutContainer>
    </>
  );
}
