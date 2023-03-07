import React from "react";
import Project from "../Project";
import projectsData from "../projects-data.json";
import { NavLink, Route, Routes } from "react-router-dom";

// Renders drop down menu for selecting project
function ProjectDropdownMenu() {
  return (
    <select name="projects" id="project-selector">
      <option value="">--Choose a project from the list--</option>
      {projectsData.map((project) => (
        <option value={project.title}>
          <NavLink to={project.id}>{project.title}</NavLink>
        </option>
      ))}
    </select>
  );
}

// Renders project based on user selection
class ProjectGallery extends React.Component {
  state = {
    project: "",
  };

  returnSelectedProject(event) {
    let projectIndex = event.target.selectedIndex - 1;
    this.setState({ project: projectsData[projectIndex] });
  }

  render() {
    return (
      <div>
        <h1>Project Gallery</h1>
        <ProjectDropdownMenu onChange={this.returnSelectedProject} />
        <Routes>
          <Route
            path=":id"
            element={
              <Project key={this.state.project.id} {...this.state.project} />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default ProjectGallery;
