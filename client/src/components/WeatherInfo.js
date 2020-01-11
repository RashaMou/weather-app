import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";

const WeatherInfo = () => {
  const { location, forecast } = useContext(LocationContext);
  return (
    <div>
      <p>{location}</p>
      <p>{forecast.summary}</p>
      <p>{forecast.icon}</p>
      <p>{forecast.temperature}</p>
    </div>
  );
};

export default WeatherInfo;
