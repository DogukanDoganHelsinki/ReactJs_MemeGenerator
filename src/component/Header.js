import React from "react";
import logo from "../images/troll.png";

function Header() {
  return (
    <header className="header">
      <img className="header--image" src={logo} alt="trollface" />
      <h2 className="header--title">Create a meme</h2>
      <h4 className="header--project">Dogukan Dogan</h4>
    </header>
  );
}

export default Header;
