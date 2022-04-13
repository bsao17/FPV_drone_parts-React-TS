import React, {useContext, useEffect} from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";
import {ThemeContext} from "./components/context/Context";


function App() {
    const context = useContext(ThemeContext)
    //@ts-ignore
    console.log(context.theme)

    return (
    <>
      <Home />
      <Views3D />
    </>

  );
}

export default App;

