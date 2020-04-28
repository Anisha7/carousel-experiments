import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    // options on main-carousel can be set using:
    // data-flickity='{ "cellAlign": "left", "contain": true }'
    <div className="navbar">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
