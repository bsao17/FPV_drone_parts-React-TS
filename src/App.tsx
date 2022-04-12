import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";

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

const MyContext = React.createContext(themes.light);

function App() {
  return (
    <MyContext.Provider value={themes.light}>
      <Home />
      <Views3D />
    </MyContext.Provider>
  );
}

export default App;
