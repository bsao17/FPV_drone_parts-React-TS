import React, {useContext} from "react";
import "./App.scss";
import Video from "./components/video/Video";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./components/signin/Signin";
import Home from "./components/home/Home";
import DarkButton from "./components/darkButton/DarkButton";
import {ThemeContext} from "styled-components";

function App() {
    const context = useContext(ThemeContext)
    return (
        <div style={context.theme ? {backgroundColor: "#ADADAD"} : {backgroundColor: "#000000"}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/video"} element={<Video/>}/>
                    <Route path={"/signin"} element={<Signin/>}/>
                </Routes>
                <DarkButton/>
            </BrowserRouter>
        </div>
    );
}

export default App;

