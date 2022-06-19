import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius")
function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {
    return (
        <div className="WeatherTemparature">
       <span><strong className="temperature text-white">
        {Math.round(props.celsius)}
      </strong> </span> 
      <span className="units text-white">
        °C  | {" "} 
        <a href="/" onClick={showFahrenheit}>
        °F
        </a>
      </span>
      </div>
    );
} else {
    
    return (
    <div className="WeatherTemparature">
    <span><strong className="temperature text-white">
     {Math.round(props.celsius)}
   </strong> </span> 
   <span className="units text-white">
   <a href="/" onClick={showCelsius}>
     °C  
     </a> {" "}
     | °F
   </span>
   </div>
    );
}
}