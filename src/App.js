import React from "react";
import "./App.css";
// import CarouselGlide from "./components/Carousel";
// import CarouselGlide2 from "./components/Carousel2";
// import CarouselFlickety from "./components/CarouselFlickety";
import CarouselFlicketyParallax from "./components/CarouselFlicketyParallax";
import Navbar from "./components/Navbar";
import TypedReactDemo from "./components/TypedReactDemo";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CarouselGlide /> */}
      {/* <CarouselGlide2 /> */}
      {/* <CarouselFlickety /> */}
      <CarouselFlicketyParallax />
      <TypedReactDemo
        strings={[
          "Some <i>strings</i> are slanted",
          "Some <strong>strings</strong> are bold",
          "HTML characters &times; &copy;",
        ]}
      />
    </div>
  );
}

export default App;
