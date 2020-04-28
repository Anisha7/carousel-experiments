import React, { useRef } from "react";
import Glide, { Slide } from "react-glidejs";

import "react-glidejs/dist/index.css";
import "./transitions.css";

const CarouselGlide2 = () => {
  const gliderRef = useRef(null);
  return (
    <div
      className="App"
      style={{
        background: "#1B262C",
      }}
    >
      <Glide
        ref={gliderRef}
        type="carousel"
        adjustArrowYPosition="42%"
        customSlideAnimation={{
          timeout: 500,
          classNames: "fade",
        }}
        peek={{
          before: 500,
          after: 500,
        }}
        perView={3}
        startAt={1}
        focusAt="center"
      >
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
        <Slide className="glide__slide slider__frame">
          <img alt="" src="http://placekitten.com/400/400" />
        </Slide>
      </Glide>
    </div>
  );
};

export default CarouselGlide2;
