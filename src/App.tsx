import React, {useContext} from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";
import {ThemeContext} from "./components/context/Context";
import styled from "styled-components";

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
    return (
        context.theme ? (
            <GlobalStyleLight>
                <Home/>
                <Views3D/>
            </GlobalStyleLight>) : (
            <GlobalStyleDark>
                <Home/>
                <Views3D/>
            </GlobalStyleDark>
        )
    );
}

export default App;

