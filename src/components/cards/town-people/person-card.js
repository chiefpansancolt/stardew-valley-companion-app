import { ChevronRightIcon, CakeIcon } from "@heroicons/react/solid";
import Heart from "@/components/cards/town-people/heart";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Badge from "@/components/badges/badge";
import BadgeOther from "@/components/badges/badge-other";

export default function PersonCard({ person }) {
  const heartCount = person.points / 250;
  const percent = (heartCount % 2) * 100;

  return (
    <li>
      <Link href={person.link}>
        <a className="block hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-12" src={person.img} alt="" />
              </div>
              <div className="min-w-0 flex-1 px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm flex font-medium text-cyan-600 truncate">
                    {person.name}
                    {person.isDatable && (
                      <img
                        title=""
                        src="https://stardewvalleywiki.com/mediawiki/images/8/83/Bouquet.png"
                        className="ml-2 h-5 w-5"
                        alt="Indicated Datable"
                      />
                    )}
                    {person.isMarried && (
                      <img
                        src="https://stardewvalleywiki.com/mediawiki/images/e/e0/Mermaid%27s_Pendant.png"
                        className="ml-2 h-5 w-5"
                        alt="Indicated Married To"
                      />
                    )}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Heart
                      isFilled={heartCount >= 1}
                      isPartial={heartCount + 1 === 1}
                      isFirst={true}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 2}
                      isPartial={heartCount + 1 === 2}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 3}
                      isPartial={heartCount + 1 === 3}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 4}
                      isPartial={heartCount + 1 === 4}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 5}
                      isPartial={heartCount + 1 === 5}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 6}
                      isPartial={heartCount + 1 === 6}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 7}
                      isPartial={heartCount + 1 === 7}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 8}
                      isPartial={heartCount + 1 === 8}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 9}
                      isPartial={heartCount + 1 === 9}
                      isFirst={false}
                      percent={percent}
                    />
                    <Heart
                      isFilled={heartCount >= 10}
                      isPartial={heartCount + 1 === 10}
                      isFirst={false}
                      percent={percent}
                    />
                    {person.isMarried && (
                      <>
                        <Heart
                          isFilled={heartCount >= 11}
                          isPartial={heartCount + 1 === 11}
                          isFirst={false}
                          percent={percent}
                        />
                        <Heart
                          isFilled={heartCount >= 12}
                          isPartial={heartCount + 1 === 12}
                          isFirst={false}
                          percent={percent}
                        />
                        <Heart
                          isFilled={heartCount >= 13}
                          isPartial={heartCount + 1 === 13}
                          isFirst={false}
                          percent={percent}
                        />
                        <Heart
                          isFilled={heartCount >= 14}
                          isPartial={heartCount + 1 === 14}
                          isFirst={false}
                          percent={percent}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="">
                  <div>
                    <p className="text-sm flex text-gray-900">
                      <CakeIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {person.birthday.season}, {person.birthday.day}
                    </p>
                    <p className="mt-2 flex items-center flex-wrap text-sm text-gray-500">
                      {person.events.map((event) => (
                        <span key={event.id} className="flex items-center ml-1">
                          <span className="font-bold">[</span>
                          {event.heart}
                          {event.completed && <CheckIcon className="h-4 w-4 text-green-500" />}
                          {!event.completed && <XIcon className="h-4 w-4 text-red-500" />}
                          <span className="font-bold">]</span>
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <p className="text-sm text-gray-900">
                  {person.status === "Married" && <Badge label={person.status} isSuccess={true} />}
                  {person.status !== "Married" && (
                    <BadgeOther label={person.status ? person.status : "TBD"} type="blue" />
                  )}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {person.points ? Intl.NumberFormat().format(person.points) : 0}
                </p>
              </div>
            </div>
            <div className="ml-5 flex-shrink-0">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
