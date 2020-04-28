import React from "react";
import { Glide } from "react-glide";
import "react-glide/lib/reactGlide.css";

const CarouselGlide = () => {

   return (
    <Glide 
    height={400}
    width={400}
    autoPlay={true}
    autoPlaySpeed={2000}
    dots={true}
    infinite={true}
    onSlideChange={() => console.log("slide changed")}
    perView={3}
    >
    <img alt="" src="http://placekitten.com/400/400" />
    <img alt="" src="http://placekitten.com/400/395" />
    <img alt="" src="http://placekitten.com/300/390" />
    <img alt="" src="http://placekitten.com/400/405" />
    <img alt="" src="http://placekitten.com/400/410" />
  </Glide>
  )
}

export default CarouselGlide;