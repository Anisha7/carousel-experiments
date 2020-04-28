import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    // NOTE: replace a tags with Link tags (import from react-router-dom)
    // after wrapping App in Router.
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
