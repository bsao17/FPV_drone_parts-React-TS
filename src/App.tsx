import React from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Views3D from "./components/viewParts/Views3D";

const myContext = React.createContext(false);

function App() {
  return (
    <div className="App">
      <Home />
      <Views3D />
    </div>
  );
}

export default App;
