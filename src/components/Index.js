import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ReactDom from "react-dom";
import About from "./About";
import Home from "./Home";
import Items from "./Items";
import Pick from "./Pick";
import ComputerAssessories from "./ComputerAccessories";
import Services from "./Services";
import Fashion from "./Fashion";
import PhonesAndTablets from "./PhonesAndTablets";
import Games from "./Games";
import Carousel from "./Carousel";

export class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <ul className="list" style={thisStyle}>
              <li className="list-item">
                {" "}
                <Home />{" "}
              </li>
              <li className="list-item">
                {" "}
                <Items />{" "}
              </li>
              <li className="list-item">
                {" "}
                <Services />{" "}
              </li>
              <li className="list-item">
                {" "}
                <About />
              </li>
              <li className="list-item">
                {" "}
                <Pick />
              </li>
            </ul>
            <form style={formStyle}>
              <input type="search" placeholder="Search Your Favorite" />
              <input type="submit" placeholder="Search " />
            </form>
          </nav>
          <div className="itemStyle">
            <div className="items">
              {" "}
              <ComputerAssessories />
            </div>
            <div className="items">
              {" "}
              <PhonesAndTablets />
            </div>
            <div className="items">
              {" "}
              <Fashion />
            </div>
            <div className="items">
              {" "}
              <Games />
            </div>
            <div className="items">
              {" "}
              <ComputerAssessories />
            </div>
            <div className="items">
              {" "}
              <PhonesAndTablets />
            </div>
            <div className="items">
              {" "}
              <Fashion />
            </div>
            <div className="items">
              {" "}
              <Games />
            </div>
          </div>
          <Carousel className="carousel" />
          <div className="itemsDesc">
            <div className="itemDiv">
              <ComputerAssessories />
              
            </div>
            <p className="images">
                <img src="mouse/1.jpg" />
                <img src="mouse/2.jpg" />
                <img src="mouse/3.jpg" />
                <img src="mouse/4.jpg" />
                <img src="mouse/5.jpg" />
                <img src="mouse/6.jpg" />
                <img src="mouse/7.jpg" />
                <img src="mouse/8.jpg" />
            </p>
            <div className="itemDiv">
              <PhonesAndTablets />
            </div>
            <div className="itemDiv">
              <Fashion />
            </div>
            <div className="itemDiv">
              <Games />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
const thisStyle = {
  display: "flex",
  float: "right",
  marginRight: "15%",
};
const formStyle = {
  margin: "auto",
  // clear:"both",
  marginTop: "1%",
};

export default Index;
