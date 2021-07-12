import { useEffect, useState } from "react";
import Static from "@/components/navigation/static";
import Mobile from "@/components/navigation/mobile";
import Topbar from "@/components/topbar/topbar";
import PageHeader from "@/components/dashboard/dashboard-page-header";
import AddNewCharacter from "@/components/modals/add-new-character";
import { currentCharacter } from "@/scripts/character/current-character";
import { characters } from "@/scripts/character/characters";
import Loading from "@/components/loading";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newCharOpen, setNewCharOpen] = useState(false);
  const [character, setCharacter] = useState(null);
  const [characterList, setCharacterList] = useState(null);

  useEffect(() => {
    setCharacter(currentCharacter(localStorage));
    setCharacterList(characters(localStorage));
  }, []);

  if (!character && !characterList) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="h-screen flex overflow-hidden bg-gray-100">
          <Mobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Static />

          <div className="flex-1 overflow-auto focus:outline-none">
            <Topbar
              character={character}
              characters={characterList}
              setSidebarOpen={setSidebarOpen}
              setNewCharOpen={setNewCharOpen}
            />
            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
              <PageHeader character={character} />
            </main>
          </div>
        </div>

        {(!character || newCharOpen) && (
          <AddNewCharacter open={newCharOpen} setOpen={setNewCharOpen} />
        )}
      </div>
    );
  }
}
