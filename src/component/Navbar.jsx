import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="nav">
      <nav className="nav__body">
        <div className="nav__menu" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <div className="nav__decor">
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
          {active ? <NavLink to="/about">bioda</NavLink> : null}
          <NavLink to="/">
            <Logo height="35px" fill="white" className="logo" />
          </NavLink>
          {active ? <NavLink to="/porto">porto</NavLink> : null}
          <div className="nav__decor">
            <span className="line2"></span>
            <span className="line1"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
