import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="project-gallery"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
