import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavTabs.css"

// Renders navigation tabs on top of the page
function NavTabs() {
  return (
    <ul className="nav nav-tabs p-2">
      <li className="nav-item col-4 col-md-2 p-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active rounded-2 h-100" : "nav-link rounded-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item col-4 col-md-2 p-2">
        <NavLink
          to="project-gallery"
          className={({ isActive }) =>
            isActive ? "nav-link active rounded-2 h-100" : "nav-link rounded-1"
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item col-4 col-md-2 p-2">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "nav-link active rounded-2 h-100" : "nav-link rounded-1"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
