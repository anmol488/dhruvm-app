import { Dialog, Transition } from "@headlessui/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { Fragment, useState } from "react";
import { db } from "../lib/firebase";
import { Announcement } from "./announcements";

function CreatePostModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [loading, setLoading] = useState(false);
  const [textInputs, setTextInputs] = useState({
    title: "",
    desc: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCreateAnnouncement = async () => {
    const newAnnouncement: Announcement = {
      title: textInputs.title,
      description: textInputs.desc,
      createdAt: serverTimestamp() as Timestamp,
    };

    setLoading(true);
    try {
      const announcementDocRef = await addDoc(
        collection(db, "announcements"),
        newAnnouncement
      );
    } catch (error: any) {
      console.log("handleCreateAnnouncement error", error.message);
    }
    setLoading(false);
    textInputs.title = "";
    textInputs.desc = "";
    closeModal();
    location.reload();
  };

  return (
    <>
      <div className="justify-center inset-0 flex items-center md:justify-start">
        <button
          type="button"
          onClick={openModal}
          className="rounded bg-[#E50914] p-3 font-semibold"
        >
          Create Announcement
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <input
                      required
                      name="title"
                      type="text"
                      value={textInputs.title}
                      placeholder="Title"
                      className="block p-3 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      onChange={onChange}
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      required
                      name="desc"
                      type="textarea"
                      value={textInputs.desc}
                      placeholder="Description"
                      className="block p-3 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      onChange={onChange}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleCreateAnnouncement}
                    >
                      Send
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CreatePostModal;
