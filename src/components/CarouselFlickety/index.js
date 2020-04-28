import React from "react";
// import { Flickity } from "flickety";
import "./flickety.css";

const CarouselFlickety = () => {
  return (
    // options on main-carousel can be set using:
    // data-flickity='{ "cellAlign": "left", "contain": true }'
    <div
      class="carousel"
      data-flickity='{ "wrapAround": true, "autoPlay": 1500, "pauseAutoPlayOnHover": false }'
    >
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
    </div>
  );
};

export default CarouselFlickety;
