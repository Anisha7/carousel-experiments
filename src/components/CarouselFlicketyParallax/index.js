import React from "react";
import Flickity from "flickity";
import "./styles.css";

class CarouselFlicketyParallax extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        alt="orange tree"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
        alt="One World Trade"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
        alt="drizzle"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
        alt="cat nose"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
        alt="contrail"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
        alt="golden hour"
      />,
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        alt="flight formation"
      />,
    ];
  }
  componentDidMount() {
    this.flickity = new Flickity(".carousel", {
      imagesLoaded: true,
      percentPosition: false,
    });
    
    // get transform property
    // let docStyle = document.documentElement.style;
    // let transformProp =
    //   typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
    // // get Flickity instance
    let flkty = Flickity.data("flickity");

    this.flickity.addEventListener("scroll.flickity", function () {
      flkty.slides.forEach(function (slide, i) {
        var img = this.images[i];
        var x = ((slide.target + flkty.x) * -1) / 3;
        img.style["transform"] = "translateX(" + x + "px)";
      });
    });
  }

  render() {
    return (
      // options on main-carousel can be set using:
      // data-flickity='{ "cellAlign": "left", "contain": true }'
      <div class="carousel">
        {this.images.map((e) => (
          <div class="carousel-cell">{e}</div>
        ))}
      </div>
    );
  }
}

export default CarouselFlicketyParallax;
