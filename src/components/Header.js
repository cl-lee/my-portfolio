import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import myPicture from "../assets/my-picture.JPG";

function Header() {
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

export default Header;
