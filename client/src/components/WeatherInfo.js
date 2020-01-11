import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";

const WeatherInfo = () => {
  const { city, forecast } = useContext(LocationContext);
  return (
    <div>
      <p>{city}</p>
      <p>{forecast.summary}</p>
      <p>{forecast.icon}</p>
      <p>{forecast.temperature}</p>
    </div>
  );
};

export default WeatherInfo;
