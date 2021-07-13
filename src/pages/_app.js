import "@/styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Static from "@/components/navigation/static";
import Mobile from "@/components/navigation/mobile";
import Topbar from "@/components/topbar/topbar";
import AddNewCharacter from "@/components/modals/add-new-character";
import { currentCharacter, hasCurrentCharacter } from "@/scripts/character/current-character";
import { characters } from "@/scripts/character/characters";
import Loading from "@/components/loading";
import CharacterContext from "@/components/characterContext";
import { initialize } from "@/scripts/character/initalize";

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newCharOpen, setNewCharOpen] = useState(false);
  const [character, setCharacter] = useState(null);
  const [characterList, setCharacterList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialize(localStorage);
    setCharacter(currentCharacter(localStorage));
    setCharacterList(characters(localStorage));
    setNewCharOpen(hasCurrentCharacter(localStorage));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Stardew Valley Companion App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Site Description Here" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {isLoading && <Loading />}
      {!isLoading && (
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
                <CharacterContext.Provider value={{ character: character }}>
                  <Component {...pageProps} />
                </CharacterContext.Provider>
              </main>
            </div>
          </div>

          {newCharOpen && (
            <AddNewCharacter open={newCharOpen} setOpen={setNewCharOpen} />
          )}
        </div>
      )}
    </>
  );
}

export default MyApp;
