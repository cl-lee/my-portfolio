import React from "react";
import NavTabs from "./NavTabs";
import myPicture from "../assets/my-picture.JPG"
import "./styles/Header.css";

function Header() {
  return (
    <div id="app-header" className="d-flex">
      <img id="my-pic" className="w-25" src={myPicture} alt="Me on a pier in sunset"/>
      <NavTabs/>
    </div>
  );
}

export default Header;
