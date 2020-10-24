import React, { Component } from "react";
import ReactDom from "react-dom";
import About from "./About";
import Home from "./Home";
import Items from "./Items";
import Pick from "./Pick";
import ComputerAssessories from "./ComputerAssessories";
import Services from "./Services";
import Fashion from "./Fashion";
import PhonesAndTablets from "./PhonesAndTablets";
import Games from "./Games";
import Carousel from "./Carousel";

export class Index extends Component {
  render() {
    return (
      <React.Fragment>
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
          <ComputerAssessories className="style" />
          <PhonesAndTablets className="style" />
          <Fashion className="style" />
          <Games className="style" />
          {/* <ComputerAssessories className="style" />
          <PhonesAndTablets className="style" /> */}
          <Fashion className="style" />
          <Games className="style" />
        </div>
        <Carousel className="carousel" />
        <div style={style1Frag}>
            <ComputerAssessories className="style1" />
            <PhonesAndTablets className="style1" />
            <Fashion className="style1" />
            <Games className="style1" />
        </div>
      </React.Fragment>
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
const style1Frag={
    color:"#fff",
}

export default Index;
