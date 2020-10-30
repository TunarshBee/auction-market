import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import asset1 from "./image/asset1.jpg";
import asset6 from "./image/asset6.jpg";
import asset7 from "./image/asset7.png";
import asset8 from "./image/asset8.jpg";
import asset5 from "./image/asset5.jpg";

class Slider extends Component {
  state = {
    items: [
      { id: 1, image: asset1 },
      { id: 2, image: asset6 },
      { id: 3, image: asset7 },
      { id: 4, image: asset8 },
      { id: 5, image: asset5 },
    ],
  };

  render() {
    const { items } = this.state;
    // console.log(items[0].image)
    return (
      <Carousel  style={caro}>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.image} style={imgStyle} className="caroImg" alt="caro" />{" "}
            </div>
          ))}
      </Carousel>
    );
  }
}

const imgStyle = {
  margin: "0%",
  padding: "0%",
  marginTop: "5%",
  height:"170px",
  width: "100%",
};
const caro = {
  margin: "0%",
    float:"right",
  padding: "0%",
  width: "50%",
};

export default Slider;
