import ReactDOM from "react-dom/client";
import App from "./App";
import DarkContext from "./components/context/darkContext";
import reportWebVitals from "./reportWebVitals";
import DraggableContext from "./components/context/DraggableContext";
import ContextNavigationLogo from "./components/context/ContexNavigationLogo";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(
    <DarkContext>
        <ContextNavigationLogo>
            <DraggableContext>
                <App/>
            </DraggableContext>
        </ContextNavigationLogo>
    </DarkContext>
);

reportWebVitals();
