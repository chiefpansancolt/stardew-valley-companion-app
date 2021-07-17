import classNames from "@/scripts/class-names";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function SkillHeader({ skillName, level, character }) {
  return (
    <dt
      className={classNames(
        level.name === "Level 5" || level.name === "Level 10" ? "border-r" : "",
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
        "text-sm font-medium text-gray-500 border-t border-l border-gray-600 flex justify-center"
      )}
    >
      {level.name}
      {level.num <= character.skills[skillName].level && (
        <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
      )}
    </dt>
  );
}
