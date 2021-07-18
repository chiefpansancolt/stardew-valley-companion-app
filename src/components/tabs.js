import classNames from "@/scripts/class-names";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Tabs({ tabs, current, children }) {
  const router = useRouter()
  const { currentTab } = router.query
  
  return (
    <div>
      <div className="block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link href={{ pathname: current, query: { currentTab: tab.name } }}>
                <a
                  key={tab.name}
                  className={classNames(
                    currentTab === tab.name
                      ? "border-cyan-500 text-cyan-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                    "whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
                  )}
                  aria-current={currentTab === tab.name ? "page" : undefined}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        currentTab === tab.name ? "bg-cyan-100 text-cyan-600" : "bg-gray-100 text-gray-900",
                        "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}