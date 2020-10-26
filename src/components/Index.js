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
import HomeAppliances from "./HomeAppliances";
import Games from "./Games";
import Carousel from "./Carousel";
import Filter from "./Filter";

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
              <HomeAppliances />
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
        </div>
        <Filter/>
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
