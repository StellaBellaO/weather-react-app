import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lagos",
    temperature: 19,
    date: "Tuesday 10.00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    precipitation: 20,
    humidity: 80,
    wind: 10
  };

  return (
    <div className="container-fluid">
      <div className="Weather shadow">
        <img
          src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/bell_1f514.png"
          alt="bell ringing"
          className="bell"
        />
        <h1 className="text-warning text-center mb-4"> Reminder </h1>
        <h2 className="quote text-white">
          {" "}
          "Just like the weather, people change"
        </h2>
        <form className="mb-3">
          <div className="row no-gutters">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-600"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1 className="text-white">{weatherData.city}</h1>
          <ul>
            <li className="text-white">Last updated: {weatherData.date}</li>
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
                  {weatherData.temperature}
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
    </div>
  );
}
