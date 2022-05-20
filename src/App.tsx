import React, {useContext, useEffect} from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";
import {ThemeContext} from "./components/context/Context";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import DarkButton from "./components/darkButton/DarkButton";

const GlobalStyleLight = styled.body`
  background-color: #B2B2B2;
  margin: 0;
  padding: 0;
`
const GlobalStyleDark = styled.body`
  background-color: #000;
  color: white;
  margin: 0;
  padding: 0;
`

function App() {
    const context = useContext(ThemeContext)

    useEffect(()=>{}, [context.theme])

    return (
        context.theme ? (
            <GlobalStyleLight>
                <Home myTitle={"Home"}/>
                <Navigation/>
                <Views3D/>
                <DarkButton/>
            </GlobalStyleLight>) : (
            <GlobalStyleDark>
                <Home myTitle={"Home"}/>
                <Navigation/>
                <Views3D/>
                <DarkButton/>
            </GlobalStyleDark>
        )
    );
}

export default App;

