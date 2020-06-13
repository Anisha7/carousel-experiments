import React from "react";
import "./App.css";
// import CarouselGlide from "./components/Carousel";
// import CarouselGlide2 from "./components/Carousel2";
// import CarouselFlickety from "./components/CarouselFlickety";
import CarouselFlicketyParallax from "./components/CarouselFlicketyParallax";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import TypedReactDemo from "./components/TypedReactDemo";
import Popup from "./components/Popup";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div>
        <div className="App">
          <ResponsiveNavbar />
          <CarouselFlicketyParallax />
          <TypedReactDemo
            strings={[
              "Some <i>strings</i> are slanted",
              "Some <strong>strings</strong> are bold",
              "HTML characters &times; &copy;",
            ]}
          />
          <Popup />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
