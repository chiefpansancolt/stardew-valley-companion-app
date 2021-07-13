import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import classNames from "@/scripts/class-names";
import NavItemIcon from "@/components/navigation/nav-item-icon";
import NavItem from "@/components/navigation/nav-item";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function NavItemCollapsable({ item }) {
  const router = useRouter();
  const active = router.pathname === item.href;

  return (
    <Disclosure as="div" key={item.name} className="space-y-1">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              active
                ? "bg-cyan-800 text-white"
                : "text-cyan-100 hover:text-white hover:bg-cyan-600",
              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            )}
          >
            <NavItemIcon active={active} Icon={item.icon} fa={!item.standardIcon} />
            <span className="flex-1">{item.name}</span>
            <ChevronRightIcon
              className={classNames(
                open ? "rotate-90" : "",
                "ml-3 flex-shrink-0 h-5 w-5 transform transition-colors ease-in-out duration-150 text-cyan-200"
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {item.children.map((subItem) => (
              <NavItem item={subItem} sub={true} key={subItem.name} />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
