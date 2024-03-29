import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import CharacterDetails from "@/components/cards/character-details";
import SkillCard from "@/components/cards/skills/skill-card";
import AchievementsCard from "@/components/cards/achievements/achievements-card";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import LayoutAside from "@/components/layouts/layout-aside";
import StardropCard from "@/components/cards/stardrops/stardrop-card";
import { skills } from "@/data/game-constants/skills";

export default function Character() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <Base title="Character" showButtons={true} />
      <LayoutContainer>
        {character.character && (
          <>
            <LayoutMain isAlone={false}>
              <CharacterDetails character={character.character} />
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} character={character.character} />
              ))}
            </LayoutMain>
            <LayoutAside>
              <StardropCard character={character.character} />
              <AchievementsCard character={character.character} />
            </LayoutAside>
          </>
        )}
      </LayoutContainer>
    </>
  );
}
