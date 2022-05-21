import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/context/Context";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Video from "./components/video/Video";
import Signin from "./components/signin/Signin";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
    <Context>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/video"} element={<Video/>}/>
                <Route path={"/signin"} element={<Signin/>}/>
            </Routes>
        </BrowserRouter>
    </Context>
);

reportWebVitals(console.log);
