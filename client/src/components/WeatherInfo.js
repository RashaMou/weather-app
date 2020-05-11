import React, { useContext, useEffect } from "react";
import LocationContext from "../contexts/LocationContext";
import { convertTimestamp } from "../helpers/convertTimestamp";
import WeatherIcon from "./WeatherIcon";
import convertTemp from "../helpers/convertTemp";

const WeatherInfo = () => {
  const { city, forecast } = useContext(LocationContext);
  const date = convertTimestamp(forecast.time);
  const temp = Math.ceil(forecast.temperature);

  return (
    <div className="weather-container">
      <div className="weather-info">
        <p className="city">{city}</p>
        {date.includes("Invalid Date") ? null : <p>{date}</p>}
        <p>{forecast.summary}</p>
      </div>
      <div className="icon-temp">
        <WeatherIcon icon={forecast.icon} />
        {forecast.summary ? <p className="temp">{temp}</p> : null}
        <div className="degrees">
          <span>&deg;F</span>
          <span>|</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
