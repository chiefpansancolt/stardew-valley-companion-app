/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { fileData } from "@/scripts/character/new-character";
import { CloudUploadIcon } from "@heroicons/react/solid";
import { DocumentIcon } from "@heroicons/react/outline";
import { LockIcon } from "@iconicicons/react";
import { handleFileSelect } from "@/scripts/character/file-reader";

export default function AddNewCharacter({ open, setOpen }) {
  const [fileDetails, setFileDetails] = useState({
    name: "",
    size: 0,
    ext: "text/xml",
    complete: false
  });
  const [formComplete, setFromComplate] = useState(true);
  const cancelButtonRef = useRef(null);

  function handleFormChange(event) {
    setFileDetails(fileData(event.target.files[0]));
    setFromComplate(false);
  }

  function handleSubmit() {
    handleFileSelect(fileDetails.file);
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
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Create New Character
                  </Dialog.Title>
                  <div className="mt-2 text-sm">
                    <p className="text-gray-700">
                      Please use the full save file (e.g. Chief_132427894); do not use the SaveGameInfo
                      file as it does not contain all the necessary information.
                    </p>
                    <p className="text-gray-800 mt-2">Default save file locations are:</p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Windows: %AppData%\StardewValley\Saves\</li>
                      <li>Mac OSX & Linux: ~/.config/StardewValley/Saves/</li>
                    </ul>
                  </div>
                  <form id="new-character-form" className="mt-2" onChange={handleFormChange}>
                    <div className="w-full">
                      <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center">
                        <div className="absolute">
                          <div className="flex flex-col items-center ">
                            <CloudUploadIcon className="h-10 w-10 text-gray-200"/>
                            <span className="block text-gray-400 font-normal">Upload you file here</span>
                            <span className="block text-gray-400 font-normal">or</span>
                            <span className="block text-blue-400 font-normal">Browse files</span>
                          </div>
                        </div>
                        <input type="file" className="h-full w-full opacity-0 cursor-pointer"/>
                      </div>
                      <div className="flex justify-between items-center text-gray-400">
                        <span>Accepted file type: .xml</span>
                        <span className="flex items-center ">
                          <LockIcon className="mr-1"/> secure
                        </span>
                      </div>
                    </div>
                    {fileDetails.complete && (
                      <div className="mt-2 flex text-gray-700">
                        <DocumentIcon className="h-6 w-6"/>
                        <span>{fileDetails.name}</span>
                        &nbsp;-
                        (<span>{fileDetails.size}</span>)
                      </div>
                    )}
                  </form>
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
