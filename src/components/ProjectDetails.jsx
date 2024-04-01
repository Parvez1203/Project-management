import React, { useRef } from "react";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export default function ProjectDetails({
  project,
  clearTask,
  addTask,
  deleteProject,
}) {
  const task = useRef();

  return (
    <>
      <div className="w-[74%] relative top-10 flex flex-col px-6 max-w-[1000px] pt-14">
        <div className="max-w-[700px] border-b-2 border-stone-300 mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
            <p
              className="cursor-pointer  mr-3 hover:text-red-600"
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </p>
          </div>
          <p className="text-gray-400 mb-6">{formatDate(project.Deadline)}</p>
          <p className="text-gray-700 mb-4">{project.Description}</p>
        </div>

        <div className="max-w-[700px]">
          <h1 className="text-2xl font-bold mb-2">Tasks</h1>
          <div className="mb-10">
            <input
              id="text-input"
              type="text"
              className="w-[300px] px-2 py-1 bg-stone-200 mr-3 focus:outline-none"
              ref={task}
            />
            <button
              className="text-stone-500 hover:text-stone-900 px-2 py-1"
              onClick={() => addTask(project.id, task.current.value)}
            >
              Add Task
            </button>
          </div>

          {project.tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-stone-200 py-4 px-3 my-3 rounded"
              >
                <p>{task}</p>
                <span
                  className="cursor-pointer  mr-3 hover:text-red-600"
                  onClick={() => clearTask(project.id, index)}
                >
                  Clear
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
