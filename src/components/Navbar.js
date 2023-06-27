import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const location = useLocation();
  const path = location.pathname;

  const NavItem = (props) => {
    return path === props.route ? (
      <div
        className="nav-item-selected"
        onClick={closeMobileMenu}
      >
        {props.name}
      </div>
    ) : (
      <div
        className="nav-item-default"
        onClick={closeMobileMenu}
      >
        {props.name}
      </div>
    );
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          McKAYLA<span style={{ opacity: 0 }}>_</span>LANKAU
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/projects">
            <NavItem name="projects" route="/projects" />
          </Link>
          <Link to="/gallery">
            <NavItem name="gallery" route="/gallery" />
          </Link>
          <Link to="/contact">
            <NavItem name="contact" route="/contact" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
