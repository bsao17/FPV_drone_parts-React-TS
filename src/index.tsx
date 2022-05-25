import ReactDOM from "react-dom/client";
import App from "./App";
import DarkContext from "./components/context/darkContext";
import reportWebVitals from "./reportWebVitals";
import DraggableContext from "./components/context/DraggableContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
    <DarkContext>
        <DraggableContext>
            <App/>
        </DraggableContext>
    </DarkContext>
);

reportWebVitals();
