import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "@/scripts/class-names";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { setCharacterContext } from "@/scripts/setCharacterContext";

export default function Profile({ character, characters, setNewCharOpen }) {
  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
              <img className="h-8 w-8 rounded-full" src="/img/The_Player_Icon.png" alt="" />
              <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                <span className="sr-only">Open user menu for </span>
                {character && (character.character.name)}
              </span>
              <ChevronDownIcon
                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {characters.map((char) => (
                <Menu.Item key={char.label}>
                  {({ active }) => (
                    <a
                      name={char.value}
                      onClick={setCharacterContext}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                      )}
                    >
                      {char.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => {
                      setNewCharOpen(true);
                    }}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Add New Character
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
