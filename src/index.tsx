import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/context/Context";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
    <Context>
        <App/>
    </Context>
);

reportWebVitals();
