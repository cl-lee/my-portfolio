import React from "react";
import Project from "../Project";
import projectsData from "../projects-data.json";
import { NavLink, Route, Routes } from "react-router-dom";

// Renders project based on user selection
function ProjectGallery() {

  // Renders projects selection list
  function ProjectDropdownMenu() {
    return (
      <ul>
        <p>Please select a project below!</p>
        {projectsData.map((project) => (
          <li id={project.id}>
            <NavLink key={project.id} to={project.id.toString()}>
              {project.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Project Gallery</h1>
      <ProjectDropdownMenu />
      <Routes>
        {projectsData.map((project) => (
          <Route
            path={project.id.toString()}
            element={<Project key={project.id} {...project} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default ProjectGallery;
