import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function ShowFahrenheit(event) {
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
      <span className="unit text-white">
        °C  | {" "} 
        <a href="/" onClick={ShowFahrenheit}>
        °F
        </a>
      </span>
      </div>
    );
} else {
    let fahrenheit = (props.celsius * 9) /5 + 32;
    return (
    <div className="WeatherTemparature">
    <span><strong className="temperature text-white">
     {Math.round(fahrenheit)}
   </strong> </span> 
   <span className="unit text-white">
   <a href="/" onClick={showCelsius}>
     °C  
     </a> {" "}
     | °F
   </span>
   </div>
    );
}
}