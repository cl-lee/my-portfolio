import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavTabs.css";

// Renders navigation tabs on top of the page
function NavTabs() {
  return (
    <ul className="nav p-2 d-flex justify-content-start">
      <li className="nav-item p-2">
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink to="project-gallery">Project Gallery</NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink to="contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;

// show hamburger menu for smaller screen, just nav for bigger screens.
// 1) hamburger menu:
//    - <button>, svg file for hamburger image (saved to public/assets)</button>
//    - show on default (small screens)
//    - put on the right side (float?)
//    - set state for hamburger menu, on click, display/hide navigation
//    - when navigation items on display: flexbox? flex-direction: column
//    - display below hamburger image
// 
// 2)  navigation items:
//    - hide on default (small screens) (display: none)
//    - media query on larger screens: @media (min-width: tbc) : display: flex, flex direction: row