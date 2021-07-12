import { Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navigation from "@/navigation/navigation";
import secondaryNavigation from "@/navigation/secondary-navigation";
import classNames from "@/scripts/class-names";
import { XIcon } from "@heroicons/react/outline";

export default function Mobile({ sidebarOpen, setSidebarOpen }) {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 flex z-40 lg:hidden"
        open={sidebarOpen}
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="w-auto" src="/img/SDV_logo_3x.png" alt="Easywire logo" />
            </div>
            <nav
              className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {navigation.map((item) =>
                  !item.children ? (
                    <Link key={item.name} href={item.href}>
                      <a
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
                    </Link>
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
                              <Link key={subItem.name} href={subItem.href}>
                                <a className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-cyan-100 hover:text-white hover:bg-cyan-600 rounded-md">
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
                              </Link>
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
                    <Link key={item.name} href={item.href}>
                      <a className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                        <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
}
