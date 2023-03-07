import React from "react";
import Project from "../Project";
import projectsData from "./projects-data.json";

// Add sidebar here to allow for user selection

function returnSelectedProject(event) {
  let selectedProjectIndex = event.target.selectedIndex;
  return selectedProjectIndex;
}

function ProjectDropdownMenu() {
  return (
    <select name="projects" id="project-selector" onChange={returnSelectedProject}>
      <option value="">--Choose a project from the list--</option>
      {projectsData.map((project) => (
        <option value={project.title}>
          {project.title}
        </option>
      ))}
    </select>
  );
}

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      <ProjectDropdownMenu />
      <Project key={projectsData[0].id} {...projectsData[0]} />
    </div>
  );
}

export default ProjectGallery;
