import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import CharacterContext from "@/components/characterContext";
import Dashboard from "@/components/page-headings/dashboard";
import LayoutContainer from "@/components/layouts/layout-container";
import LayoutMain from "@/components/layouts/layout-main";
import LayoutAside from "@/components/layouts/layout-aside";
import { skills, museum, other } from "@/data/cards";
import FullStat from "@/components/cards/full-stat";
import classNames from "@/scripts/class-names";

function SkillDetails({ skill }) {
  return (
    <>
      {skill.level}
      {skill.nextLevelExp !== "N/A" && (
        <span>
          {" - "}
          {Intl.NumberFormat().format(skill.nextLevelExp)}
          {"xp"}
        </span>
      )}
    </>
  );
}

function SkillButtonDetails({ skill }) {
  return (
    <>
      <span className="font-bold pr-1">{skill.profession1}</span>
      <span className="font-bold pl-1 border-l xl:border-t xl:border-l-0 2xl:border-l 2xl:border-t-0 border-gray-800">
        {skill.profession2}
      </span>
    </>
  );
}

function CardGroup({ title, hasPadding, children }) {
  return (
    <div className={classNames(hasPadding ? "mt-6" : "", "mx-auto")}>
      <h2 className="text-lg leading-6 font-medium text-gray-900">{title}</h2>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </div>
  );
}

function MuseumDetails({ name, character }) {
  if (name === "Museum Donations") {
    return (
      <>
        {character.artifacts.foundList.filter((e) => e.donated === true).length +
          character.minerals.foundList.filter((e) => e.donated === true).length}
        {" / "}
        {character.artifacts.fullList.length +
          character.minerals.fullList.filter((e) => e.type !== "Geode").length}
      </>
    );
  } else if (name === "Artifacts Donated") {
    return (
      <>
        {character.artifacts.foundList.filter((e) => e.donated === true).length}
        {" / "}
        {character.artifacts.fullList.length}
      </>
    );
  } else if (name === "Minerals Donated") {
    return (
      <>
        {character.minerals.foundList.filter((e) => e.donated === true).length}
        {" / "}
        {character.minerals.fullList.filter((e) => e.type !== "Geode").length}
      </>
    );
  }
}

function OtherDetails({ name, character }) {
  if (name === "Achievements") {
    return (
      <>
        {character.character.achievements.filter((e) => e.completed === true).length}
        {" / "}
        {character.character.achievements.length}
      </>
    );
  }
}

function ButtonLink({ link }) {
  return (
    <Link href={link}>
      <a className="font-medium text-cyan-700 hover:text-cyan-900">View Details</a>
    </Link>
  );
}

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
      <Dashboard />
      {character && (
        <LayoutContainer>
          <LayoutMain>
            <CardGroup hasPadding={false} title="Skills">
              {skills.map((skill) => (
                <FullStat
                  key={skill.name}
                  item={skill}
                  details={<SkillDetails skill={character.character.skills[skill.name]} />}
                  hasButton={character.character.skills[skill.name].profession1}
                  buttonDetails={
                    <SkillButtonDetails skill={character.character.skills[skill.name]} />
                  }
                />
              ))}
            </CardGroup>

            <CardGroup hasPadding={true} title="Museum">
              {museum.map((item) => (
                <FullStat
                  key={item.name}
                  item={item}
                  details={<MuseumDetails name={item.label} character={character} />}
                  hasButton={item.link}
                  buttonDetails={<ButtonLink link={item.link} />}
                />
              ))}
            </CardGroup>

            <CardGroup hasPadding={true} title="Other">
              {other.map((item) => (
                <FullStat
                  item={item}
                  details={<OtherDetails name={item.label} character={character} />}
                  hasButton={item.link}
                  buttonDetails={<ButtonLink link={item.link} />}
                />
              ))}
            </CardGroup>
          </LayoutMain>
          <LayoutAside>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <img src={character.character.farmType.map} alt="Map" className="w-full" />
            </div>
          </LayoutAside>
        </LayoutContainer>
      )}
    </div>
  );
}
