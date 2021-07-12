import Profile from "@/components/topbar/profile";
import Search from "@/components/topbar/search";
import { MenuAlt1Icon } from "@heroicons/react/outline";

export default function Topbar({ character, characters, setSidebarOpen, setNewCharOpen }) {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
      <button
        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:mx-auto lg:px-8">
        <div className="flex-1 flex">
          <Search />
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {character && (
            <Profile
              character={character}
              characters={characters}
              setNewCharOpen={setNewCharOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}
