import React from "react";
import "./App.css";
import CarouselGlide from "./components/Carousel";
import CarouselGlide2 from "./components/Carousel2";
import CarouselFlickety from "./components/CarouselFlickety";
import CarouselFlicketyParallax from "./components/CarouselFlicketyParallax";

function App() {
  return (
    <div className="App">
      {/* <CarouselGlide /> */}
      {/* <CarouselGlide2 /> */}
      <CarouselFlickety />
      {/* <CarouselFlicketyParallax /> */}
    </div>
  );
}

export default App;
