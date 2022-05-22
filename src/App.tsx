import React, {useContext, useEffect} from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";
import {DarkModeContext} from "./components/context/Context";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import DarkButton from "./components/darkButton/DarkButton";
import Video from "./components/video/Video";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./components/signin/Signin";


const GlobalStyleDark = styled.div`
  background-color: #000;
  color: white;
  margin: 0;
  padding: 0;
`

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/video"} element={<Video/>}/>
                <Route path={"/signin"} element={<Signin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

