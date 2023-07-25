import { projectsManager } from "..";
import Project from "./Project";
import displayProjects from "../ui/displayProjects.js";

let newProject = document.getElementById("add-new-project-input");

export default function addNewProject() {
    projectsManager.addNewProject(new Project(newProject.value));
    displayProjects(projectsManager.getProjects())
}

document
    .getElementById("add-project-btn")
    .addEventListener("click", addNewProject);
