import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

<div className="overview">
            <h1 className="text-white">{weatherData.city}</h1>
            <ul>
              <li className="text-white">Last updated: 
              <FormattedDate date={props.data.date}/> </li>
              <li className="text-white">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong className="text-white">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units text-white">
                    <a href="/" className="text-white">
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="/" className="text-white">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 weather-details">
              <ul>
                <li className="text-warning">
                  precipitation: {weatherData.precipitation}%
                </li>
                <li className="text-warning">
                  Humidity: {weatherData.humidity}%
                </li>
                <li className="text-warning">Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
    
    );
}