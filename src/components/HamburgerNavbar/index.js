import React from "react";
import "./styles.css";
import { slide as Menu } from 'react-burger-menu';
// https://github.com/negomi/react-burger-menu

const HamburgerNavbar = () => {

  return (
    // NOTE: replace a tags with Link tags (import from react-router-dom)
    // after wrapping App in Router.
    // track open state with isOpen prop
    
    <Menu slide width={ '400px' }>
      <a id="about" className="menu-item" href="/">
        About
      </a>
      <a id="portfolio" className="menu-item" href="/about">
        Portfolio
      </a>
      <a id="blog" className="menu-item" href="/contact">
        Blog
      </a>
      <a className="menu-item--small" href="">
        Contact
      </a>
    </Menu>
  );
};

export default HamburgerNavbar;
