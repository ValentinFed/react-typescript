import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper red darken-3 px1">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Task list</NavLink>
        </li>
        <li>
          <NavLink to="/about">Information</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
