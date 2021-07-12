/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XIcon,
  MapIcon,
  UserIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import maps from "@/data/character/farm-maps";
import { seasons, days, years } from "@/data/character/calendar";
import Picklist from "@/components/forms/picklist";
import Input from "../forms/input";
import {
  characterAnalysis,
  characterData,
  setCurrentCharacterSetting,
  createCharacterData,
  addCharactersList,
} from "@/scripts/character/new-character";
import { NONE, NEWCHARACTER } from "@/scripts/constants";

export default function AddNewCharacter({ open, setOpen }) {
  const [characterNameError, setCharacterNameError] = useState(false);
  const [farmNameError, setFarmNameError] = useState(false);
  const [farmMapError, setFarmMapError] = useState(false);
  const [moneyError, setMoneyError] = useState(false);
  const [farmingError, setFarmingError] = useState(false);
  const [farmingMinMaxError, setFarmingMinMaxError] = useState(false);
  const [miningError, setMiningError] = useState(false);
  const [miningMinMaxError, setMiningMinMaxError] = useState(false);
  const [foragingError, setForagingError] = useState(false);
  const [foragingMinMaxError, setForagingMinMaxError] = useState(false);
  const [fishingError, setFishingError] = useState(false);
  const [fishingMinMaxError, setFishingMinMaxError] = useState(false);
  const [combatError, setCombatError] = useState(false);
  const [combatMinMaxError, setCombatMinMaxError] = useState(false);
  const [seasonsError, setSeasonsError] = useState(false);
  const [daysError, setDaysError] = useState(false);
  const [yearsError, setYearsError] = useState(false);
  const [formComplete, setFromComplate] = useState(true);
  const cancelButtonRef = useRef(null);

  function handleFormChange(event) {
    switch (event.target.id) {
      case NEWCHARACTER.CHARACTERNAME:
        event.target.value ? setCharacterNameError(false) : setCharacterNameError(true);
        break;
      case NEWCHARACTER.FARMNAME:
        event.target.value ? setFarmNameError(false) : setFarmNameError(true);
        break;
      case NEWCHARACTER.MAP:
        event.target.value !== NONE ? setFarmMapError(false) : setFarmMapError(true);
        break;
      case NEWCHARACTER.CURRENTMONEY:
        event.target.value ? setMoneyError(false) : setMoneyError(true);
        break;
      case NEWCHARACTER.FARMING:
        event.target.value ? setFarmingError(false) : setFarmingError(true);
        event.target.value >= 0 && event.target.value <= 10
          ? setFarmingMinMaxError(false)
          : setFarmingMinMaxError(true);
        break;
      case NEWCHARACTER.MINING:
        event.target.value ? setMiningError(false) : setMiningError(true);
        event.target.value >= 0 && event.target.value <= 10
          ? setMiningMinMaxError(false)
          : setMiningMinMaxError(true);
        break;
      case NEWCHARACTER.FORAGING:
        event.target.value ? setForagingError(false) : setForagingError(true);
        event.target.value >= 0 && event.target.value <= 10
          ? setForagingMinMaxError(false)
          : setForagingMinMaxError(true);
        break;
      case NEWCHARACTER.FISHING:
        event.target.value ? setFishingError(false) : setFishingError(true);
        event.target.value >= 0 && event.target.value <= 10
          ? setFishingMinMaxError(false)
          : setFishingMinMaxError(true);
        break;
      case NEWCHARACTER.COMBAT:
        event.target.value ? setCombatError(false) : setCombatError(true);
        event.target.value >= 0 && event.target.value <= 10
          ? setCombatMinMaxError(false)
          : setCombatMinMaxError(true);
        break;
      case NEWCHARACTER.SEASONS:
        event.target.value !== NONE ? setSeasonsError(false) : setSeasonsError(true);
        break;
      case NEWCHARACTER.DAYS:
        event.target.value !== NONE ? setDaysError(false) : setDaysError(true);
        break;
      case NEWCHARACTER.YEARS:
        event.target.value !== NONE ? setYearsError(false) : setYearsError(true);
        break;
      default:
        console.log("Default Never Set");
    }

    characterAnalysis(characterData()) ? setFromComplate(false) : setFromComplate(true);
  }

  function handleSubmit() {
    const data = characterData();

    setCurrentCharacterSetting(data.characterName);
    createCharacterData(data);
    addCharactersList(data.characterName);
    window.location.reload();
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Create New Character
                    </Dialog.Title>
                    <form id="new-character-form" className="mt-2" onChange={handleFormChange}>
                      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-10">
                        <Input
                          id={NEWCHARACTER.CHARACTERNAME}
                          span="5"
                          required={true}
                          label="Character Name"
                          type="text"
                          hasIcon={true}
                          Icon={UserIcon}
                          hasError={characterNameError}
                        />
                        <Input
                          id={NEWCHARACTER.FARMNAME}
                          span="5"
                          required={true}
                          label="Farm Name"
                          type="text"
                          hasIcon={false}
                          hasError={farmNameError}
                        />
                        <Picklist
                          id={NEWCHARACTER.MAP}
                          span="5"
                          required={true}
                          label="Farm Map"
                          hasIcon={true}
                          Icon={MapIcon}
                          hasError={farmMapError}
                          options={maps}
                        />
                        <Input
                          id={NEWCHARACTER.CURRENTMONEY}
                          span="5"
                          required={true}
                          label="Current Money"
                          type="number"
                          hasIcon={true}
                          Icon={CurrencyDollarIcon}
                          hasError={moneyError}
                        />
                        <Picklist
                          id={NEWCHARACTER.SEASONS}
                          span="3"
                          required={true}
                          label="Season"
                          hasIcon={true}
                          Icon={CalendarIcon}
                          hasError={seasonsError}
                          options={seasons}
                        />
                        <Picklist
                          id={NEWCHARACTER.DAYS}
                          span="3"
                          required={true}
                          label="Day"
                          hasIcon={true}
                          fa={true}
                          Icon={faCalendarDay}
                          hasError={daysError}
                          options={days}
                        />
                        <Picklist
                          id={NEWCHARACTER.YEARS}
                          span="4"
                          required={true}
                          label="Year"
                          hasIcon={true}
                          fa={true}
                          Icon={faCalendarWeek}
                          hasError={yearsError}
                          options={years}
                        />
                        <Input
                          id={NEWCHARACTER.FARMING}
                          span="2"
                          required={true}
                          label="Farming"
                          value={0}
                          max={10}
                          type="number"
                          hasIcon={false}
                          hasError={farmingError}
                          harMinMaxError={farmingMinMaxError}
                        />
                        <Input
                          id={NEWCHARACTER.MINING}
                          span="2"
                          required={true}
                          label="Mining"
                          value={0}
                          max={10}
                          type="number"
                          hasIcon={false}
                          hasError={miningError}
                          harMinMaxError={miningMinMaxError}
                        />
                        <Input
                          id={NEWCHARACTER.FORAGING}
                          span="2"
                          required={true}
                          label="Foraging"
                          value={0}
                          max={10}
                          type="number"
                          hasIcon={false}
                          hasError={foragingError}
                          harMinMaxError={foragingMinMaxError}
                        />
                        <Input
                          id={NEWCHARACTER.FISHING}
                          span="2"
                          required={true}
                          label="Fishing"
                          value={0}
                          max={10}
                          type="number"
                          hasIcon={false}
                          hasError={fishingError}
                          harMinMaxError={fishingMinMaxError}
                        />
                        <Input
                          id={NEWCHARACTER.COMBAT}
                          span="2"
                          required={true}
                          label="Combat"
                          value={0}
                          max={10}
                          type="number"
                          hasIcon={false}
                          hasError={combatError}
                          harMinMaxError={combatMinMaxError}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="disabled:opacity-50 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                    handleSubmit();
                  }}
                  disabled={formComplete}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                  }}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
