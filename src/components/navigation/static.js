import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navigation from "@/navigation/navigation";
import secondaryNavigation from "@/navigation/secondary-navigation";
import classNames from "@/scripts/class-names";

export default function Static() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto" src="/img/SDV_logo_3x.png" alt="Easywire logo" />
          </div>
          <nav
            className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="px-2 space-y-1">
              {navigation.map((item) =>
                !item.children ? (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-white"
                          : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                        "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      {item.standardIcon ? (
                        <item.icon
                          className={classNames(
                            item.current ? "text-cyan-500" : "text-cyan-200",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={item.icon}
                          size="lg"
                          className={classNames(
                            item.current ? "text-cyan-500" : "text-cyan-200",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                        />
                      )}
                      {item.name}
                    </a>
                  </div>
                ) : (
                  <Disclosure as="div" key={item.name} className="space-y-1">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.current
                              ? "bg-cyan-800 text-white"
                              : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                            "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          )}
                        >
                          {item.standardIcon ? (
                            <item.icon
                              className={classNames(
                                item.current ? "text-cyan-500" : "text-cyan-200",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={item.icon}
                              size="lg"
                              className={classNames(
                                item.current ? "text-cyan-500" : "text-cyan-200",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                            />
                          )}
                          <span className="flex-1">{item.name}</span>
                          <svg
                            className={classNames(
                              open ? "rotate-90" : "",
                              "ml-3 flex-shrink-0 h-5 w-5 transform transition-colors ease-in-out duration-150 text-cyan-200"
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-cyan-100 hover:text-white hover:bg-cyan-600 rounded-md"
                            >
                              {subItem.standardIcon ? (
                                <subItem.icon
                                  className={classNames(
                                    subItem.current ? "text-cyan-500" : "text-cyan-200",
                                    "mr-3 flex-shrink-0 h-6 w-6"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={subItem.icon}
                                  size="lg"
                                  className={classNames(
                                    subItem.current ? "text-cyan-500" : "text-cyan-200",
                                    "mr-3 flex-shrink-0 h-6 w-6"
                                  )}
                                />
                              )}
                              {subItem.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </div>
            <div className="mt-6 pt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
