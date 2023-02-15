import React from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <nav className="nav__body">
        <div className="nav__menu">
          <div className="nav__decor">
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
          <NavLink to="/about">bio</NavLink>
          <NavLink to="/">
            <Logo height="35px" fill="white" className="logo" />
          </NavLink>
          <NavLink to="/porto">porto</NavLink>
          <div className="nav__decor">
            <span className="line2"></span>
            <span className="line1"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
