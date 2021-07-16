import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "@/scripts/class-names";
import NavItemIcon from "./nav-item-icon";

export default function NavItem({ item, sub }) {
  const router = useRouter();
  const active = router.pathname === item.href;

  return (
    <Link key={item.name} href={item.href}>
      <a
        className={classNames(
          active ? "bg-cyan-800 text-white" : "text-cyan-100 hover:text-white hover:bg-cyan-600",
          sub ? "pl-6" : "pl-2",
          "group w-full flex items-center py-2 text-sm font-medium rounded-md"
        )}
      >
        <NavItemIcon active={active} Icon={item.icon} fa={!item.standardIcon} />
        {item.name}
      </a>
    </Link>
  );
}
