import React, { Component } from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import Login from "./Login";
import ComputerAccessories from "./ComputerAccessories";
import Fashion from "./Fashion";
import PhonesAndTablets from "./PhonesAndTablets";
import HomeAppliances from "./HomeAppliances";
import Games from "./Games";
import Sporting from "./Sporting";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Health from "./Health";
import Electronics from "./Electronics";
import Nav from "./Nav";
import Register from "./Register";

export class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <div className="itemStyle">
                  <div className="items">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/ComputerAccessories"
                    >
                      ComputerAccessories
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/PhonesAndTablets"
                    >
                      PhonesAndTablets
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/Fashion"
                    >
                      Fashion
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/Games"
                    >
                      Games
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink style={navLinks} to="/HomeAppliances">
                      HomeAppliances
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink style={navLinks} to="/Electronics">
                      Electronics
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/Health"
                    >
                      Health
                    </NavLink>
                  </div>
                  <div className="item">
                    {" "}
                    <NavLink
                      activeClassName="active"
                      style={navLinks}
                      to="/Sporting"
                    >
                      Sporting
                    </NavLink>
                  </div>
                </div>
                <Carousel className="carousel" />
                <div className="itemsDesc">
                  <div className="itemDiv">
                    <h3>Computer Accessories</h3>
                  </div>

                  {datas.items.computer.map((x) => (
                    <p className="images">
                      <img key={x.id} alt={x.url} src={x.url} />
                    </p>
                  ))}
                  <div className="itemDiv">
                    <h3>Home Appliances</h3>
                  </div>
                  {datas.items.home.map((x) => (
                    <p className="images">
                      <img key={x.id} alt={x.url} src={x.url} />
                    </p>
                  ))}
                  <div className="itemDiv">
                    <h3>Phones and Tablets</h3>
                  </div>
                  {datas.items.phone.map((x) => (
                    <p className="images">
                      <img key={x.id} alt={x.url} src={x.url} />
                    </p>
                  ))}
                  <div className="itemDiv">
                    <h3>Fashion</h3>
                  </div>
                  {datas.items.fashion.map((x) => (
                    <p className="images">
                      <img key={x.id} alt={x.url} src={x.url} />
                    </p>
                  ))}
                  <div className="itemDiv">
                    <h3>Games</h3>
                  </div>
                  {datas.items.games.map((x) => (
                    <p className="images">
                      <img key={x.id} alt={x.url} src={x.url} />
                    </p>
                  ))}
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/Login" component={Login} />
          <Route path="/ComputerAccessories" component={ComputerAccessories} />
          <Route path="/Sporting" component={Sporting} />
          <Route path="/Games" component={Games} />
          <Route path="/HomeAppliances" component={HomeAppliances} />
          <Route path="/PhonesAndTablets" component={PhonesAndTablets} />
          <Route path="/Fashion" component={Fashion} />
          <Route path="/Register" component={Register} />
          <Route path="/Electronics" component={Electronics} />
          <Route path="/Health" component={Health} />
        </div>
        <Footer />
      </Router>
    );
  }
}
let datas = require("../Data.json");
const navLinks = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "18px",
  listStyle: "none",
};

export default Index;
