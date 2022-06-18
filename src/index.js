import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <p className="banner text-white text-uppercase text-right">
        {" "}
        Weather | <span className="font-weight-bold"> Forecast </span>{" "}
      </p>
      <Weather defaultCity="Lagos"/>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);