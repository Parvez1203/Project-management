import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CreateNewProject from "./components/CreateNewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  function handleSaveNewProject(newProject) {
    const newId = projectList.length + 1;
    const projectWithNewId = { ...newProject, id: newId, tasks: [] };
    setProjectList([...projectList, projectWithNewId]);
    setSelectedProject(newId);
  }

  function handleSelectProject(projectId) {
    setSelectedProject(projectId);
  }
  function handleClearTask(projectId, taskIndex) {
    setProjectList((prevProjectList) => {
      return prevProjectList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((_, index) => index !== taskIndex),
          };
        }

        return project;
      });
    });
  }

  function addTask(projectId, newTask) {
    setProjectList((prevProjectList) => {
      return prevProjectList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, newTask],
          };
        }

        return project;
      });
    });
  }

  function deleteProject(projectId) {
    setProjectList((previousProjectList) => {
      return previousProjectList.filter((project) => project.id !== projectId);
    });
    setSelectedProject(null);
  }

  return (
    <div className="flex flex-row">
      <Sidebar
        projectList={projectList}
        onProjectSelect={handleSelectProject}
        projectId={selectedProject}
      />
      {selectedProject == "new project" ? (
        <CreateNewProject
          onSave={handleSaveNewProject}
          onCancel={handleSelectProject}
        />
      ) : selectedProject == null ? (
        <NoProjectSelected onProjectSelect={handleSelectProject} />
      ) : (
        <ProjectDetails
          project={projectList.find(
            (project) => project.id === selectedProject
          )}
          clearTask={handleClearTask}
          addTask={addTask}
          deleteProject={deleteProject}
        />
      )}
    </div>
  );
}

export default App;
