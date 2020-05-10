import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";
import { convertTimestamp } from "../helpers/convertTimestamp";

const WeatherInfo = () => {
  const { city, forecast } = useContext(LocationContext);
  const date = convertTimestamp(forecast.time);
  return (
    <div className="weather-info">
      <p className="city">{city}</p>
      <p>{date}</p>
      <p>{forecast.summary}</p>
      <p>{forecast.icon}</p>
      <p>{forecast.temperature}</p>
    </div>
  );
};

export default WeatherInfo;
