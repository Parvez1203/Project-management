import React from "react";

export default function Sidebar({ projectList, onProjectSelect, projectId }) {
  return (
    <div className="bg-stone-800 h-[100vh] relative w-[26%] top-10 left-0 overflow-y-auto rounded-tr-lg px-7 py-14 max-w-[300px]">
      <h2 className="text-white text-lg font-semibold mb-4 text-xl">
        YOUR PROJECTS
      </h2>
      <button
        className=" px-4 py-2 mb-7 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={() => onProjectSelect("new project")}
      >
        + Add Project
      </button>
      <ul className="mt-4">
        {projectList.map((item) => {
          return (
            <li
              key={item.id}
              className={`hover:text-stone-100 cursor-pointer my-3 ${
                projectId == item.id ? "text-stone-100" : "text-stone-400"
              }`}
              onClick={() => onProjectSelect(item.id)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
