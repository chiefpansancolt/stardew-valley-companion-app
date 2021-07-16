import Head from "next/head";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Dashboard from "@/components/page-headings/dashboard";
import { skills } from "@/data/cards";
import { StarIcon } from "@heroicons/react/outline";

export default function Home() {
  const { character } = useContext(CharacterContext);

  return (
    <div>
      <Head>
        <title>Stardew Valley Companion App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Site Description Here" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <Dashboard />
        <div className="min-h-screen flex overflow-hidden">
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="flex-1 relative z-0 xl:flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div className="relative inset-0 py-6 px-5 xl:pl-6 xl:pr-3">
                  <div className="mx-auto">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Skills</h2>
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-white overflow-hidden shadow rounded-lg"
                        >
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="w-0 flex-1">
                                <dl>
                                  <dt className="text-sm font-medium text-gray-500 truncate">
                                    {skill.label}
                                  </dt>
                                  <dd>
                                    <div className="text-lg font-medium text-gray-900">
                                      {character.character.skills[skill.name].level}
                                      {character.character.skills[skill.name].nextLevelExp !==
                                        "N/A" && (
                                        <span>
                                          {" "}
                                          - {character.character.skills[skill.name].nextLevelExp}xp
                                        </span>
                                      )}
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          {character.character.skills[skill.name].profession1 && (
                            <div className="bg-gray-50 px-5 py-3">
                              <div className="text-sm xl:text-center flex xl:flex-col justify-center 2xl:flex-row">
                                <span className="font-bold pr-1">
                                  {character.character.skills[skill.name].profession1}
                                </span>
                                <span className="font-bold pl-1 border-l xl:border-t xl:border-l-0 2xl:border-l 2xl:border-t-0 border-gray-800">
                                  {character.character.skills[skill.name].profession2}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mx-auto mt-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Other</h2>
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <StarIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  Achievements
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {
                                      character.character.achievements.filter(
                                        (e) => e.completed === true
                                      ).length
                                    }{" "}
                                    / 30
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                          <div className="text-sm text-center">
                            <a href="#">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <aside className="relative xl:flex xl:flex-col flex-shrink-0 xl:w-1/3">
                <div className="relative inset-0 pb-6 pt-3 px-5 xl:py-6 xl:pl-3 xl:pr-6">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <img src={character.character.farmType.map} alt="Map" className="w-full" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
