import React from "react";
import logo from "./airbnb-logo.png";
export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="nav--logo" />
    </nav>
  );
}
