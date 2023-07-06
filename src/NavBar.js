import React from "react";

import { Link } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/chips">Chips</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/cabbage">Cabbage</Link>
    </nav>
  );
}

export default NavBar;
