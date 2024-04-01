import React from "react";
import no_project_img from "../assets/no-projects.png";

export default function NoProjectSelected({ onProjectSelect }) {
  return (
    <div className="w-[74%] relative top-10 flex flex-col items-center">
      <img
        src={no_project_img}
        alt="no_project icon"
        className="w-16 h-16 mt-[4rem] mb-6"
      />
      <h2 className="font-semibold text-stone-800 text-xl">
        No Project Selected
      </h2>
      <p className="text-sm text-stone-400 my-2">
        Select a project or get started with new one.
      </p>
      <button
        className=" px-4 py-2 mt-7 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={() => onProjectSelect("new project")}
      >
        Create New Project
      </button>
    </div>
  );
}
