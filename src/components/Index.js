import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import ReactDom from "react-dom";
import About from "./About";
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
                    <NavLink style={navLinks} to="/ComputerAccessories">
                      ComputerAccessories
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink style={navLinks} to="/PhonesAndTablets">
                      PhonesAndTablets
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink style={navLinks} to="/Fashion">
                      Fashion
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink style={navLinks} to="/Games">
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
                    <NavLink style={navLinks} to="/Health">
                      Health
                    </NavLink>
                  </div>
                  <div className="item">
                    {" "}
                    <NavLink style={navLinks} to="/Sporting">
                      Sporting
                    </NavLink>
                  </div>
                </div>
                <Carousel className="carousel" />
                <div className="itemsDesc">
                  <div className="itemDiv">
                    <ComputerAccessories />
                  </div>
                  <p className="images">
                    <img src="mouse/cc.jpg" />
                    <img src="mouse/j.jpg" />
                    <img src="mouse/a.jpg" />
                    <img src="mouse/k.jpg" />
                    <img src="mouse/1.jpg" />
                    <img src="mouse/e.jpg" />
                    <img src="mouse/b.jpg" />
                    <img src="mouse/i.jpg" />
                  </p>
                  <div className="itemDiv">
                    <HomeAppliances />
                  </div>
                  <p className="images">
                    <img src="home/1.jpg" />
                    <img src="home/2.jpg" />
                    <img src="home/3.jpg" />
                    <img src="home/4.jpg" />
                    <img src="home/5.jpg" />
                    <img src="home/6.jpg" />
                    <img src="home/7.jpg" />
                    <img src="home/8.jpg" />
                  </p>
                  <div className="itemDiv">
                    <PhonesAndTablets />
                  </div>
                  <p className="images">
                    <img src="phone/1.jpg" />
                    <img src="phone/2.jpg" />
                    <img src="phone/3.jpg" />
                    <img src="phone/4.jpg" />
                    <img src="phone/5.jpg" />
                    <img src="phone/6.jpg" />
                    <img src="phone/7.jpg" />
                    <img src="phone/8.jpg" />
                  </p>
                  <div className="itemDiv">
                    <Fashion />
                  </div>
                  <p className="images">
                    <img src="fashion/1.jpg" />
                    <img src="fashion/2.jpg" />
                    <img src="fashion/3.jpg" />
                    <img src="fashion/4.jpg" />
                    <img src="fashion/5.jpg" />
                    <img src="fashion/6.jpg" />
                    <img src="fashion/7.jpg" />
                    <img src="fashion/8.jpg" />
                  </p>
                  <div className="itemDiv">
                    <Games />
                  </div>
                  <p className="images">
                    <img src="gaming/1.jpg" />
                    <img src="gaming/2.jpg" />
                    <img src="gaming/3.jpg" />
                    <img src="gaming/4.jpg" />
                    <img src="gaming/5.jpg" />
                    <img src="gaming/6.jpg" />
                    <img src="gaming/7.jpg" />
                    <img src="gaming/8.jpg" />
                  </p>
                </div>
              </React.Fragment>
            )}
          />
          <Route  path="/Login" component={Login} />
          <Route  path="/ComputerAccessories" component={ComputerAccessories} />
          <Route  path="/Sporting" component={Sporting} />
          <Route  path="/Games" component={Games} />
          <Route  path="/HomeAppliances" component={HomeAppliances} />
          <Route  path="/PhonesAndTablets" component={PhonesAndTablets} />
          <Route  path="Fashion/" component={Fashion} />
          <Route  path="/Electronics" component={Electronics} />
          <Route  path="/Health" component={Health} />
        </div> 
        <Footer />
      </Router>
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

export default Index;
