import React from "react";
import Project from "../Project";
import projectsData from "../projects-data.json";
import { NavLink, Route, Routes } from "react-router-dom";
import "./styles/ProjectGallery.css"

// Renders project based on user selection
function ProjectGallery() {

  // Renders projects selection list
  function ProjectDropdownMenu() {
    return (
      <div>
      <p>Please click on a project below to see it!</p>
      <ul className="project-nav d-flex flex-wrap justify-content-between p-1">      
        {projectsData.map((project) => (
          <li className="p-2" id={project.id}>
            <NavLink key={project.id} to={project.id.toString()}>
              {project.title}
            </NavLink>
          </li>
        ))}
      </ul>
      </div>
    );
  }

  return (
    <div className="p-4">
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
