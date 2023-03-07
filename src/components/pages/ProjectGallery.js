import React from "react";
import Project from "../Project";
import projectsData from "./projects-data.json";

// Add sidebar here to allow for user selection

function ProjectDropdownMenu() {
  return (
    <select name="projects" id="project-selector">
      {projectsData.map((project) => (
        <option id={project.id} value={project.title}>
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
