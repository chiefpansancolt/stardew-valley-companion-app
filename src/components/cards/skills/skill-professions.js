import SkillProfession from "@/components/cards/skills/skill-profession";

export default function SkillProfessions({ skillHeight, skillName, items, character }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-gray-600">
      {items.map((item, index) => (
        <div key={"profession" + index} className={skillHeight}>
          <SkillProfession skillName={skillName} item={item} character={character} />
        </div>
      ))}
    </div>
  );
}
