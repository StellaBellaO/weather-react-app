import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    city: response.data.name,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: response.data.weather[0].description
  });
}

  if (weatherData.ready) {
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
              <li className="text-white">Last updated: 
              <FormattedDate date={weatherData.date}/> </li>
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
        </div>
    );
} else {
  const apiKey = "57a16d31a99c50513998174551722349";
  let apiUrl = `http;/api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
  
}
}

   
  
