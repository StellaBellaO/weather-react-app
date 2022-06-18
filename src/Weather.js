import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    city: response.data.name,
    icon: response.data.weather[0].icon,
    description: response.data.weather[0].description
  });
}

function search() {
  const apiKey = "57a16d31a99c50513998174551722349";
  let apiUrl = `http;/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`;
  axios.get(apiUrl).then(handleResponse);
}

function handlesubmit(event) {
  event.preventdefault();
  search();
}

function handleCityChange(event) {
 setCity(event.target.value);
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
          <form className="mb-3" onSubmit={handlesubmit}>
            <div className="row no-gutters">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
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
          <WeatherInfo info={weatherData}/>
        </div>
        </div>
    );
} else {
  search();
  return "Loading...";
}
}

   
  
