import Base from "@/components/page-headings/base";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import PersonCard from "@/components/cards/town-people/person-card";
import FullStat from "@/components/cards/full-stat";
import { StarIcon } from "@heroicons/react/outline";

function analyzeTownPeople(townPeople) {
  let count5 = 0;
  let count10 = 0;
  for (let i = 0; i < townPeople.length; i++) {
    const hearts = townPeople[i].points/250;
    count5 += hearts >= 5 ? 1 : 0;
    count10 += hearts >= 10 ? 1 : 0;
  }

  return { count5, count10 };
}

function DetailsView({ achievement, townPeople }) {
  const { count5, count10 } = analyzeTownPeople(townPeople);
  const usage = achievement.heartLevel === 5 ? count5 : count10;
  const calc = usage / achievement.count;
  return (
    <div className="flex justify-between">
      <span>{achievement.description}</span>
      {calc < 1 && (
        <span>
          {usage} / {achievement.count}
        </span>
      )}
      {calc >= 1 && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Completed
        </span>
      )}
    </div>
  )
}

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
                  {character.character.achievements.filter((e) => e.detailLink === "/town-people").map((achievement) => (
                    <FullStat
                      key={achievement.name}
                      item={achievement}
                      hasButton={false}
                      details={<DetailsView achievement={achievement} townPeople={character.townPeople}/>}
                      Icon={StarIcon}
                      iconColor="text-yellow-400"
                    />
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
