import React from "react";
import NavTabs from "./NavTabs";
import myPicture from "../assets/my-picture.JPG"

function Header() {
  return (
    <div>
      <img id="my-pic" src={myPicture} alt="Me on a pier in sunset"/>
      <NavTabs/>
    </div>
  );
}

export default Header;
