import React, {useContext, useEffect} from "react";
import "./App.scss";
import Video from "./components/video/Video";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./components/signin/Signin";
import styled from "styled-components";
import Home from "./components/home/Home";
import DarkButton from "./components/darkButton/DarkButton";


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
            <DarkButton/>
        </BrowserRouter>
    );
}

export default App;

