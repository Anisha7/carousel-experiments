import React from "react";
// import { Flickity } from "flickety";
import "./flickety.css";

const CarouselFlickety = () => {
  return (
    // options on main-carousel can be set using:
    // data-flickity='{ "cellAlign": "left", "contain": true }'
    <div
      className="carousel"
      data-flickity='{ "wrapAround": true, "autoPlay": 2500, "pauseAutoPlayOnHover": false }'
    >
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
    </div>
  );
};

export default CarouselFlickety;
