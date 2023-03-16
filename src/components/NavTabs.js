import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavTabs.css";
import myPicture from "../assets/my-picture.JPG"

// Renders navigation tabs on top of the page
function NavTabs() {
  return (
    <ul className="nav nav-tabs p-2">
      <img
        id="my-pic"
        src={myPicture}
        width="30"
        height="30"
        alt="Me on a pier in sunset"
      />
      <li className="nav-item col-3 col-lg-2 p-2">
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
      <li className="nav-item col-3 col-md-2 p-2">
        <NavLink
          to="project-gallery"
          className={({ isActive }) =>
            isActive ? "nav-link active rounded-2 h-100" : "nav-link rounded-1"
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="nav-item col-3 col-md-2 p-2">
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
