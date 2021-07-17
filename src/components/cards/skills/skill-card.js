import SkillBody from "@/components/cards/skills/skill-body";
import SkillHeader from "@/components/cards/skills/skill-header";

export default function SkillCard({ skill, character }) {
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg mt-6">
      <div className="px-4 py-5 flex">
        <img src={skill.img} alt="Skill Icon" className="h-10 w-10" />
        <div className="pl-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{skill.name}</h3>
          <p className="mt-1 max-w-full text-sm text-gray-500">{skill.description}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-6">
          {skill.levels.map((level) => (
            <div
              key={level.name}
              className={
                level.name === "Level 5" || level.name === "Level 10"
                  ? "sm:col-span-2"
                  : "sm:col-span-1"
              }
            >
              <SkillHeader
                skillName={skill.name.toLowerCase()}
                level={level}
                character={character}
              />
              <SkillBody
                skillName={skill.name.toLowerCase()}
                skillHeight={skill.height}
                level={level}
                character={character}
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
