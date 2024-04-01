import React, { useRef, useState } from "react";

export default function CreateNewProject({ onSave, onCancel }) {
  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectDate = useRef();
  const [showWarning, setshowWarning] = useState(false);

  function handleSaveClick() {
    if (!projectTitle.current.value) {
      setshowWarning(true);
      setTimeout(() => {
        setshowWarning(false);
      }, 2000);
      projectTitle.current.focus();
      return false;
    }
    onSave({
      title: projectTitle.current.value,
      Description: projectDesc.current.value,
      Deadline: projectDate.current.value,
    });
  }

  return (
    <>
      <div className="w-[74%] relative top-10 flex flex-col px-6 max-w-[1000px]">
        <div className="flex justify-end items-center">
          <span
            className="cursor-pointer hover:text-stone-600 mr-3"
            onClick={() => onCancel(null)}
          >
            Cancel
          </span>
          <button
            className=" px-4 py-1 text-xs md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-100 cursor-pointer"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
        <div className="relative">
          <label htmlFor="text-input" className="text-sm text-gray-600">
            Title
          </label>
          <input
            id="text-input"
            type="text"
            className="w-full px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter text"
            ref={projectTitle}
          />
        </div>
        <div className="relative">
          <label htmlFor="textarea-input" className="text-sm text-gray-600">
            Description
          </label>
          <textarea
            id="textarea-input"
            className="w-full px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter text"
            rows="4"
            ref={projectDesc}
          />
        </div>
        <div className="relative">
          <label htmlFor="date-input" className="text-sm text-gray-600">
            Deadline
          </label>
          <input
            id="date-input"
            type="date"
            className="w-full px-3 py-2 border-b-2 focus:outline-none focus:border-blue-500"
            ref={projectDate}
          />
        </div>

        {showWarning && (
          <div
            className="bg-red-100 border mt-3 border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Please add project title!</strong>
          </div>
        )}
      </div>
    </>
  );
}
