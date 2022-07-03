import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

<div className="overview">
            <h1 className="location text-white">{props.data.city}</h1>
            <ul>
              <li className="text-white">Last updated: 
              <FormattedDate date={props.data.date}/> </li>
              <li className="text-white text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                  <div className="float-left">
                  <WeatherIcon code={props.data.icon} size={52}/>
                  </div>
                <div className="weather-temp float-left">
                 <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>
            <div className="col-6 weather-details">
              <ul>
                
                <li className="text-warning">
                  Humidity: {props.data.humidity}%
                </li>
                <li className="text-warning">Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
    );
}