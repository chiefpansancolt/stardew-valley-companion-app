import navigation from "@/navigation/navigation";
import secondaryNavigation from "@/navigation/secondary-navigation";
import NavItem from "@/components/navigation/nav-item";
import NavItemCollapsable from "@/components/navigation/nav-item-collapsable";

export default function Static() {
  return (
    <div className="hidden xl:flex xl:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto" src="/img/SDV_logo_3x.png" alt="Easywire logo" />
          </div>
          <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto">
            <div className="px-2 space-y-1">
              {navigation.map((item) =>
                !item.children ? (
                  <NavItem item={item} sub={false} key={item.name} />
                ) : (
                  <NavItemCollapsable item={item} key={item.name} />
                )
              )}
            </div>
            <div className="mt-6 pt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigation.map((item) => (
                  <NavItem item={item} sub={false} key={item.name} />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
