import React from "react";
import { NavLink } from "react-router-dom";
import "./Styling/Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      {/* Left-aligned links */}
      <div className="navbar-nav">
        <NavLink
          key="about"
          className="nav-link"
          to="/"
          activeclassname="active-link"
        >
          About Me
        </NavLink>
        <NavLink
          key="portfolio"
          className="nav-link"
          to="/Portfolio"
          activeclassname="active-link"
        >
          Portfolio
        </NavLink>
        <NavLink
          key="contact"
          className="nav-link"
          to="/Contact"
          activeclassname="active-link"
        >
          Contact
        </NavLink>
        <NavLink
          key="resume"
          className="nav-link"
          to="/Resume"
          activeclassname="active-link"
        >
          Resume
        </NavLink>
      </div>

      {/* Right-aligned brand text */}
      <div className="navbar-brand">Max Heath</div>
    </nav>
  );
}
