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
                    <NavLink activeClassName="active" style={navLinks} to="/ComputerAccessories">
                      ComputerAccessories
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink activeClassName="active" style={navLinks} to="/PhonesAndTablets">
                      PhonesAndTablets
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink activeClassName="active" style={navLinks} to="/Fashion">
                      Fashion
                    </NavLink>
                  </div>
                  <div className="items">
                    {" "}
                    <NavLink activeClassName="active" style={navLinks} to="/Games">
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
                    <NavLink activeClassName="active" style={navLinks} to="/Health">
                      Health
                    </NavLink>
                  </div>
                  <div className="item">
                    {" "}
                    <NavLink activeClassName="active" style={navLinks} to="/Sporting">
                      Sporting
                    </NavLink>
                  </div>
                </div>
                <Carousel className="carousel" />
                <div className="itemsDesc">
                  <div className="itemDiv">
                    <h3>Computer Accessories</h3>
                  </div>
                  <p className="images">
                    <img src="mouse/cc.jpg" />
                    <img src="mouse/j.jpg" />
                    <img src="mouse/u.jpg" />
                    <img src="mouse/k.jpg" />
                    <img src="mouse/m.jpg" />
                    <img src="mouse/e.jpg" />
                    <img src="mouse/v.jpg" />
                    <img src="mouse/h.jpg" />
                  </p>
                  <div className="itemDiv">
                    <h3>Home Appliances</h3>
                  </div>
                  <p className="images">
                    <img src="home/1.jpg" alt="" />
                    <img src="home/2.jpg" alt="" />
                    <img src="home/3.jpg" alt="" />
                    <img src="home/4.jpg" alt="" />
                    <img src="home/5.jpg" alt="" />
                    <img src="home/6.jpg" alt="" />
                    <img src="home/7.jpg" alt="" />
                    <img src="home/8.jpg" alt="" />
                  </p>
                  <div className="itemDiv">
                    <h3>Phones and Tablets</h3>
                  </div>
                  <p className="images">
                    <img src="phone/1.jpg" alt=""/>
                    <img src="phone/2.jpg" alt=""/>
                    <img src="phone/3.jpg" alt=""/>
                    <img src="phone/4.jpg" alt=""/>
                    <img src="phone/5.jpg" alt=""/>
                    <img src="phone/6.jpg" alt=""/>
                    <img src="phone/7.jpg" alt=""/>
                    <img src="phone/8.jpg" alt=""/>
                  </p>
                  <div className="itemDiv">
                    <h3>Fashion</h3>
                  </div>
                  <p className="images">
                    <img src="Fashion/1.jpg" alt=""/>
                    <img src="Fashion/2.jpg" alt=""/>
                    <img src="Fashion/3.jpg" alt=""/>
                    <img src="Fashion/4.jpg" alt=""/>
                    <img src="Fashion/5.jpg" alt=""/>
                    <img src="Fashion/6.jpg" alt=""/>
                    <img src="Fashion/7.jpg" alt=""/>
                    <img src="Fashion/8.jpg" alt=""/>
                  </p>
                  <div className="itemDiv">
                    <h3>Games</h3>
                  </div>
                  <p className="images">
                    <img src="Games/1.jpg" alt=""/>
                    <img src="Games/2.jpg" alt=""/>
                    <img src="Games/3.jpg" alt=""/>
                    <img src="Games/4.jpg" alt=""/>
                    <img src="Games/5.jpg" alt=""/>
                    <img src="Games/6.jpg" alt=""/>
                    <img src="Games/7.jpg" alt=""/>
                    <img src="Games/8.jpg" alt=""/>
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
          <Route  path="/Fashion" component={Fashion} />
          <Route  path="/Register" component={Register} />
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
