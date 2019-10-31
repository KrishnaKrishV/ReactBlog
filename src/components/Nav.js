import React, { Component } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    const navStyle = {
      color: "white"
    };
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <NavLink
            style={navStyle}
            activeStyle={{ color: "green" }}
            exact
            to=""
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            style={navStyle}
            activeStyle={{ color: "green" }}
            to="./register"
          >
            <li>Register</li>
          </NavLink>
          <NavLink
            style={navStyle}
            activeStyle={{ color: "green" }}
            to="./login"
          >
            <li>Login</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
