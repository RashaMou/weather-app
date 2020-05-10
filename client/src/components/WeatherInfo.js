import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";
import { convertTimestamp } from "../helpers/convertTimestamp";
import WeatherIcon from "./WeatherIcon";

const WeatherInfo = () => {
  const { city, forecast } = useContext(LocationContext);
  const date = convertTimestamp(forecast.time);

  return (
    <div className="weather-info">
      <p className="city">{city}</p>
      {date.includes("Invalid Date") ? null : <p>{date}</p>}
      <p>{forecast.summary}</p>
      <WeatherIcon icon={forecast.icon} />
      <p>{forecast.temperature}</p>
    </div>
  );
};

export default WeatherInfo;
