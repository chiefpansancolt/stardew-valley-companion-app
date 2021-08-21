import classNames from "@/scripts/class-names";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function Tabs({ tabs, collection, children }) {
  for (let i = 0; i < tabs.length; i++) {
    if (
      tabs[i].name.includes("All") &&
      !tabs[i].name.includes("Monster") &&
      !tabs[i].name.includes("Minerals")
    ) {
      tabs[i].count = collection.fullList.length;
    } else if (tabs[i].name === "All Minerals") {
      tabs[i].count = collection.fullList.filter((e) => e.type !== "Geode").length;
    } else if (tabs[i].name === "Found") {
      tabs[i].count = collection.found;
    } else if (tabs[i].name === "Donated") {
      tabs[i].count = collection.donated;
    } else if (tabs[i].name === "To-Do") {
      tabs[i].count = collection.unfound;
    } else if (tabs[i].name === "Caught") {
      tabs[i].count = collection.caught;
    } else if (tabs[i].name === "Eradication Goals") {
      tabs[i].count = collection.monsterTypes.filter((e) => e.percent < 100).length;
    } else if (tabs[i].name === "Cooked") {
      tabs[i].count = collection.cooked;
    } else if (tabs[i].name === "Crafted") {
      tabs[i].count = collection.crafted;
    } else if (tabs[i].name === "Shipped") {
      tabs[i].count = collection.shipped;
    } else if (tabs[i].name === "Polycultured") {
      tabs[i].count = collection.polyculture;
    } else if (tabs[i].name.includes("To-Be")) {
      if (tabs[i].name.includes("Craft")) {
        tabs[i].count = collection.uncrafted;
      } else if (tabs[i].name.includes("Found")) {
        tabs[i].count = collection.unfound;
      } else if (tabs[i].name.includes("Cook")) {
        tabs[i].count = collection.uncooked;
      } else if (tabs[i].name.includes("Donated")) {
        tabs[i].count = collection.undonated;
      } else if (tabs[i].name.includes("Polyculture")) {
        tabs[i].count = collection.unpolyculture;
      } else if (tabs[i].name.includes("Shipped")) {
        tabs[i].count = collection.unshipped;
      }
    }
  }

  return (
    <Tab.Group defaultIndex={0}>
      <div className="border-b border-gray-200">
        <div className="px-5">
          <Tab.List className="-mb-px flex space-x-8 justify-center">
            {tabs.map((tab) => (
              <Tab key={tab.name} as={Fragment}>
                {({ selected }) => (
                  <a
                    className={classNames(
                      selected
                        ? "border-cyan-500 text-cyan-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                      "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
                    )}
                    aria-current={selected ? "page" : undefined}
                  >
                    {tab.icon && (
                      <FontAwesomeIcon
                        icon={tab.icon}
                        className={classNames(
                          selected ? "text-cyan-500" : "text-gray-400 group-hover:text-gray-500",
                          "-ml-0.5 mr-2 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {!tab.icon && (
                      <img src={tab.img} className="-ml-0.5 mr-2 h-5 w-5" alt="All Img" />
                    )}
                    {tab.name}
                    {tab.count ? (
                      <span
                        className={classNames(
                          selected ? "bg-cyan-100 text-cyan-600" : "bg-gray-100 text-gray-900",
                          "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                        )}
                      >
                        {tab.count}
                      </span>
                    ) : null}
                  </a>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>
      <Tab.Panels>{children}</Tab.Panels>
    </Tab.Group>
  );
}
