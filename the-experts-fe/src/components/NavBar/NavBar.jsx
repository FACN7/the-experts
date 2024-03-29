import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-items">
          <NavLink exact className="inactive" activeClassName="active" to="/">
            The Experts
          </NavLink>
          {Object.keys(user).length <= 0 && (
            <React.Fragment>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                exact
                className="inactive"
                activeClassName="active"
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}

          {Object.keys(user).length > 0 && (
            <React.Fragment>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/user-profile"
              >
                {user.first_name}
              </NavLink>

              <NavLink
                exact
                className="inactive"
                activeClassName="active"
                to="/logout"
              >
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
