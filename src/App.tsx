import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";
import banner from "assets/images/Mountains_Banner.jpg"

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


function App() {
  return (
    <>
      <Home />
      <Views3D />
    </>

  );
}

export default App;

