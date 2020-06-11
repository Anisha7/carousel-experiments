import React from "react";
import "./styles.css";
import { slide as Menu } from 'react-burger-menu'

const HamburgerNavbar = () => {

  return (
    // NOTE: replace a tags with Link tags (import from react-router-dom)
    // after wrapping App in Router.
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default HamburgerNavbar;
