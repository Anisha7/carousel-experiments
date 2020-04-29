import React from "react";
import Flickity from "flickity";
import "./styles.css";

class CarouselFlicketyParallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
    };
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
    this.setState({ mount: true });
  }

  render() {
    if (this.state.mount === true) {
      var carousel = document.querySelector(".carousel");
      console.log(carousel);
      var flkty = new Flickity(carousel, {
        imagesLoaded: true,
        percentPosition: false,
      });

      var imgs = carousel.querySelectorAll(".carousel-cell img");
      // get transform property
      var docStyle = document.documentElement.style;
      var transformProp =
        typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

      flkty.on("scroll", function () {
        flkty.slides.forEach(function (slide, i) {
          var img = imgs[i];
          var x = ((slide.target + flkty.x) * -1) / 3;
          img.style[transformProp] = "translateX(" + x + "px)";
        });
      });
    }
    return (
      <div className="carousel">
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
            alt="orange tree"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
            alt="One World Trade"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
            alt="drizzle"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
            alt="cat nose"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
            alt="contrail"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
            alt="golden hour"
          />
        </div>
        <div className="carousel-cell">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
            alt="flight formation"
          />
        </div>
      </div>
    );
  }
}

export default CarouselFlicketyParallax;
