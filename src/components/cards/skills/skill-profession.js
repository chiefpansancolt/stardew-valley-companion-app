import { CheckCircleIcon } from "@heroicons/react/solid";

export default function SkillProfession({ item, skillName, character }) {
  return (
    <div className="flex flex-col divide-y divide-gray-600">
      {item.map((detail) => (
        <div key={detail.name} className="p-2">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={detail.img} className="h-6 w-6" alt="Icon Name" />
              <div className="ml-2 text-sm font-bold flex">
                {detail.name}
                {(detail.name === character.skills[skillName].profession1 ||
                  detail.name === character.skills[skillName].profession2) && (
                  <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                )}
              </div>
            </div>
            <span className="text-xs">{detail.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
