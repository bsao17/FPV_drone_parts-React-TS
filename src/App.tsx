import React, {useContext} from "react";
import "./App.scss";
import Video from "./components/video/Video";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./components/admin/Admin";
import STLParts from "./components/stlParts/STLParts";
import DarkButton from "./components/darkButton/DarkButton";
import {DarkModeContext} from "./components/context/darkContext";

// High Order Component
const WrappedHOC = (Component) => () => (<Component/>)


function App() {
    const context = useContext(DarkModeContext)
    return (
        <div style={context.theme ? {backgroundColor: "#ADADAD"} : {backgroundColor: "#000000"}}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<STLParts/>}/>
                    <Route path={"/video"} element={<Video/>}/>
                    <Route path={"/admin"} element={<Admin/>}/>
                </Routes>
                <DarkButton/>
            </BrowserRouter>
        </div>
    );
}

export default WrappedHOC(App);

