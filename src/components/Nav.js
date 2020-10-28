import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="list" style={thisStyle}>
            <li className="list-item">
              {" "}
              <NavLink style={navLinks} to="/">
                Home
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink style={navLinks} to="/Login">
                Login
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink style={navLinks} to="/About">
                About
              </NavLink>
            </li>
          </ul>
          <form style={formStyle}>
            <input type="search" placeholder="Search Your Favorite" />
            <input type="submit" value="Search " />
          </form>
        </nav>
      </div>
    );
  }
}
const thisStyle = {
  display: "flex",
  float: "right",
  //   width:"100%",
  marginRight: "7%",
};
const formStyle = {
  margin: "auto",
  // clear:"both",
  marginTop: "1%",
};
const navLinks = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "18px",
  listStyle: "none",
};

export default Nav;
