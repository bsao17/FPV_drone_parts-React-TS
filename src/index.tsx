import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/context/Context";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
    <Context>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Context>
);

reportWebVitals(console.log);
