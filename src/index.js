import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container-fluid mx-auto d-block">
      <p className="banner text-white text-uppercase text-right">
        {" "}
        Weather | <span className="font-weight-bold"> Forecast </span>{" "}
      </p>
      <Weather defaultCity="Lagos"/>
      <footer className="open-sourced text-center mt-5"> 🗄️ This Project was coded by < a href="https://gleeful-bubblegum-ab91e6.netlify.app/index.html" target="_blank" rel="noopener noreferrer"> Stella-Maris Ojideh </a> {" "} and is {" "} <a href="https://github.com/StellaBellaO/weather-react-app" target="_blank" rel="noopener noreferrer" class="github">open-sourced on GitHub </a> {" "} and <a href="https://chimerical-manatee-089194.netlify.app/" target="_blank" rel="noopener noreferrer"> hosted on Netlify 🗄️ </a></footer>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);