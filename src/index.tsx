// import ReactDOM from "react-dom/client";
import  ReactDOM  from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from '@testing-library/react';

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container as HTMLElement);
// root.render(<App />);

ReactDOM.render(<App/>, document.getElementById("root"))

reportWebVitals(console.log);
