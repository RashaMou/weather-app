import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import LocationContext from "../contexts/LocationContext";

const WeatherInfo = () => {
  const { lat, lng, location } = useContext(LocationContext);
  const [forecast, setForecast] = useState({
    summary: "",
    icon: "",
    temperature: ""
  });

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
