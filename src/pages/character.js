import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import { skills } from "@/data/game-constants/skills";
import CharacterDetails from "@/components/cards/character-details";
import SkillCard from "@/components/cards/skills/skill-card";
import AchievementsCard from "@/components/cards/achievements/achievements-card";

export default function Character() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Character" showButtons={true} />
      <div className="min-h-screen flex overflow-hidden">
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 xl:flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              <div className="relative inset-0 pt-6 pb-3 px-5 xl:py-6 xl:pl-6 xl:pr-3">
                <CharacterDetails character={character.character} />
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} character={character.character} />
                ))}
              </div>
            </main>
            <aside className="relative xl:flex xl:flex-col flex-shrink-0 xl:w-1/3">
              <div className="relative inset-0 pb-6 pt-3 px-5 xl:py-6 xl:pl-3 xl:pr-6">
                <AchievementsCard character={character.character} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
