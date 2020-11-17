import React, { Component } from "react";
import { NavLink } from "react-router-dom";

let obj = require("../Data.json");

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: obj,
      term: "",
      searcher: null,
    };
    this.searchHandler = this.searchHandler.bind(this);
    //this.itemFilter = this.itemFilter.bind(this);
  }

  searchHandler(event) {
    this.setState({
      searcher:[...this.state.datas.items.computer
      .filter((x) => {
        const exs = x.cart.toLowerCase();
        return exs.indexOf(this.state.term.toLowerCase()) !== -1 || !this.state.term;
      }).map((comp) => {
        return (
          <p className="images" key={comp.id}>
            <img alt={comp.url} src={comp.url} />
        {/* <p>{comp.cart}</p> */}
          </p>
        );
      }),...this.state.datas.items.electronic
      .filter((x) => {
        const exs = x.cart.toLowerCase();
        return exs.indexOf(this.state.term.toLowerCase()) !== -1 || !this.state.term;
      }).map((comp) => {
        return (
          <p className="images" key={comp.id}>
            <img alt={comp.url} src={comp.url} />
        {/* <p>{comp.cart}</p> */}
          </p>
        );
      })]
      ,term: event.target.value 
      });
    console.log(event.target.value);
  }

  render() {
    const { term } = this.state;

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
          <form style={formStyle} className="navSearch">
            <input
              type="text"
              placeholder="Search Your Favorite"
              value={term}
              onChange={this.searchHandler}
            />
            <button type="submit">search</button>
          </form>
        </nav>
        <div>
          {this.state.searcher}
        </div>
      </div>
    );
  }
}
// const itemFilter = this.state.datas.items.computer.filter((x) => {
//   const exs = x.cart.toLowerCase();
//   return exs.includes(this.state.term.toLowerCase());
// });

const navLinks = {
  textDecoration: "none",
  fontSize: "17px",
  listStyle: "none",
  color: "#fff",
};
const thisStyle = {
  display: "flex",
  marginTop: "1%",
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
