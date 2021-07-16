import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Base from "@/components/page-headings/base";
import { StarIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { skills } from "@/data/game-constants/skills";
import classNames from "@/scripts/class-names";
import { CheckCircleIcon } from "@heroicons/react/solid";

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
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Character Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Additional Details about your character.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Name</dt>
                        <dd className="mt-1 text-sm text-gray-900">{character.character.name}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Farm Type</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.farmName}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Spouse</dt>
                        <dd className="mt-1 text-sm text-gray-900">{character.character.spouse}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Day</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.date.full}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Money</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.money.full}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Total Earned</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.totalMoneyEarned.full}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Time Played</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.timePlayed.full}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Version</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {character.character.version}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {skills.map((skill) => (
                  <div key={skill.name} className="bg-white shadow overflow-hidden rounded-lg mt-6">
                    <div className="px-4 py-5 flex">
                      <img src={skill.img} alt="Skill Icon" className="h-10 w-10" />
                      <div className="pl-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {skill.name}
                        </h3>
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
                            <dt
                              className={classNames(
                                level.name === "Level 5" || level.name === "Level 10"
                                  ? "border-r"
                                  : "",
                                level.name === "Level 3" || level.name === "Level 8"
                                  ? "border-r md:border-r-0"
                                  : "",
                                level.name !== "Level 3" &&
                                  level.name !== "Level 5" &&
                                  level.name !== "Level 8" &&
                                  level.name !== "Level 10"
                                  ? "border-r sm:border-r-0"
                                  : "",
                                level.name === "Level 4" || level.name === "Level 7"
                                  ? "border-r-0 md:border-r lg:border-r-0 xl:border-r 2xl:border-r-0"
                                  : "",
                                level.name === "Level 5"
                                  ? "md:border-r-0 lg:border-r xl:border-r-0 2xl:border-r"
                                  : "",
                                "text-sm font-medium text-gray-500 border-t border-l border-gray-600 flex justify-center"
                              )}
                            >
                              {level.name}
                              {level.num <=
                                character.character.skills[skill.name.toLowerCase()].level && (
                                <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                              )}
                            </dt>
                            <dd
                              className={classNames(
                                level.name === "Level 5" || level.name === "Level 10"
                                  ? "border-r"
                                  : "p-2",
                                level.name === "Level 3" || level.name === "Level 8"
                                  ? "border-r md:border-r-0"
                                  : "",
                                level.name !== "Level 3" &&
                                  level.name !== "Level 5" &&
                                  level.name !== "Level 8" &&
                                  level.name !== "Level 10"
                                  ? "border-r sm:border-r-0"
                                  : "",
                                level.name === "Level 4" || level.name === "Level 7"
                                  ? "border-r-0 md:border-r lg:border-r-0 xl:border-r 2xl:border-r-0"
                                  : "",
                                level.name === "Level 5"
                                  ? "md:border-r-0 lg:border-r xl:border-r-0 2xl:border-r"
                                  : "",
                                skill.height,
                                "text-sm text-gray-900 border-t border-l border-b border-gray-600 relative group"
                              )}
                            >
                              {level.name !== "Level 5" && level.name !== "Level 10" && (
                                <ul>
                                  {level.items.map((item) => (
                                    <li className="flex items-center pt-2" key={item.name}>
                                      <img src={item.img} className="w-6" alt="Icon Name" />
                                      <Link href={item.link}>
                                        <a className="cursor-pointer text-xs pl-2 text-cyan-500">
                                          {item.name}
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {(level.name === "Level 5" || level.name === "Level 10") && (
                                <div className="grid grid-cols-2 divide-x divide-gray-600">
                                  {level.items.map((item, index) => (
                                    <div className={skill.height} key={item.name}>
                                      {index === 0 && (
                                        <div className="flex flex-col divide-y divide-gray-600">
                                          {item.map((detail) => (
                                            <div key={detail.name} className="p-2">
                                              <div className="flex flex-col">
                                                <div className="flex items-center">
                                                  <img
                                                    src={detail.img}
                                                    className="h-6 w-6"
                                                    alt="Icon Name"
                                                  />
                                                  <div className="ml-2 text-sm font-bold flex">
                                                    {detail.name}
                                                    {(detail.name ===
                                                      character.character.skills[
                                                        skill.name.toLowerCase()
                                                      ].profession1 ||
                                                      detail.name ===
                                                        character.character.skills[
                                                          skill.name.toLowerCase()
                                                        ].profession2) && (
                                                      <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                                                    )}
                                                  </div>
                                                </div>
                                                <span className="text-xs">
                                                  {detail.description}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                      {index === 1 && (
                                        <div className="flex flex-col justify-items-center divide-y divide-gray-600">
                                          {item.map((detail) => (
                                            <div key={detail.name} className="p-2">
                                              <div className="flex flex-col">
                                                <div className="flex items-center">
                                                  <img
                                                    src={detail.img}
                                                    className="h-6 w-6"
                                                    alt="Icon Name"
                                                  />
                                                  <div className="ml-2 text-sm font-bold flex">
                                                    {detail.name}
                                                    {(detail.name ===
                                                      character.character.skills[
                                                        skill.name.toLowerCase()
                                                      ].profession1 ||
                                                      detail.name ===
                                                        character.character.skills[
                                                          skill.name.toLowerCase()
                                                        ].profession2) && (
                                                      <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                                                    )}
                                                  </div>
                                                </div>
                                                <span className="text-xs">
                                                  {detail.description}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                ))}
              </div>
            </main>
            <aside className="relative xl:flex xl:flex-col flex-shrink-0 xl:w-1/3">
              <div className="relative inset-0 pb-6 pt-3 px-5 xl:py-6 xl:pl-3 xl:pr-6">
                <div className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Achievements</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      You have completed{" "}
                      <strong>
                        {
                          character.character.achievements.filter((e) => e.completed === true)
                            .length
                        }
                      </strong>{" "}
                      / 30
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <ul className="divide-y divide-gray-200">
                      {character.character.achievements.map((achievement) => (
                        <li key={achievement.name} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <StarIcon className="ml-3 h-10 w-10 rounded-full text-yellow-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {achievement.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {achievement.description}
                              </p>
                            </div>
                            <div className="pr-4">
                              {achievement.completed && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-gray-800">
                                  Completed
                                </span>
                              )}
                              {!achievement.completed && achievement.linkType === "Link" && (
                                <Link href={achievement.detailLink}>
                                  <a className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                                    View Details
                                  </a>
                                </Link>
                              )}
                              {!achievement.completed && achievement.linkType === "Money" && (
                                <span className="text-xs">
                                  {character.character.totalMoneyEarned.full} /{" "}
                                  {Intl.NumberFormat().format(achievement.amount)}g -{" "}
                                  {(
                                    (character.character.totalMoneyEarned.number /
                                      achievement.amount) *
                                    100
                                  ).toFixed(2)}
                                  %
                                </span>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
