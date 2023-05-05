import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavTabs.css";
import myPicture from "../assets/my-picture.JPG";

// Renders navigation tabs on top of the page
function NavTabs() {
  return (
    <ul
      id="nav-tab"
      className="d-flex justify-content-start align-items-center m-0"
    >
      <li className="no-bullets p-2">
        <img id="my-pic" src={myPicture} alt="Me on a pier in sunset" />
      </li>
      <li className="no-bullets p-2">
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li className="no-bullets p-2">
        <NavLink to="project-gallery">Project Gallery</NavLink>
      </li>
      <li className="no-bullets p-2">
        <NavLink to="contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
