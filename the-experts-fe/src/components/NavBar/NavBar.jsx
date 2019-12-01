import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({ firstParm, secondParam }) {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <NavLink exact className="inactive" activeClassName="active" to="/">
            The Experts
          </NavLink>
          <NavLink
            className="inactive"
            exact
            activeClassName="active"
            to="/login"
          >
            {firstParm}
          </NavLink>

          <NavLink
            exact
            className="inactive"
            activeClassName="active"
            to="/register"
          >
            {secondParam}
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
