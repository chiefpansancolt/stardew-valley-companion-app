import classNames from "@/scripts/class-names";
import SkillItems from "@/components/cards/skills/skill-items";
import SkillProfessions from "@/components/cards/skills/skill-professions";

export default function SkillBody({ level, character, skillHeight, skillName }) {
  return (
    <dd
      className={classNames(
        level.name === "Level 5" || level.name === "Level 10" ? "border-r" : "p-2",
        level.name === "Level 3" || level.name === "Level 8" ? "border-r md:border-r-0" : "",
        level.name !== "Level 3" &&
          level.name !== "Level 5" &&
          level.name !== "Level 8" &&
          level.name !== "Level 10"
          ? "border-r sm:border-r-0"
          : "",
        level.name === "Level 4" || level.name === "Level 7"
          ? "border-r-0 md:border-r lg:border-r-0 xl:border-r 2xl:border-r-0"
          : "",
        level.name === "Level 5" ? "md:border-r-0 lg:border-r xl:border-r-0 2xl:border-r" : "",
        skillHeight,
        "text-sm text-gray-900 border-t border-l border-b border-gray-600"
      )}
    >
      {level.name !== "Level 5" && level.name !== "Level 10" && <SkillItems items={level.items} />}
      {(level.name === "Level 5" || level.name === "Level 10") && (
        <SkillProfessions
          skillName={skillName}
          skillHeight={skillHeight}
          items={level.items}
          character={character}
        />
      )}
    </dd>
  );
}
