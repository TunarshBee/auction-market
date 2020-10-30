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
              <NavLink activeClassName="active" style={navLinks} exact to="/">
                Home
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink activeClassName="active" style={navLinks} to="/Login">
                Login
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink activeClassName="active" style={navLinks} to="/Register">
                Register
              </NavLink>
            </li>
            <li className="list-item">
              {" "}
              <NavLink activeClassName="active" style={navLinks} to="/About">
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
const navLinks = {
  textDecoration: "none",
  fontSize: "17px",
  listStyle: "none",
  color: "#fff",
};
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

export default Nav;
