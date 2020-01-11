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

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/59d2450ec0f8001ebc983a55a5db82d9/${lat},${lng}`
      )
      .then(res => {
        console.log(res);
        setForecast({
          summary: res.data.currently.summary,
          icon: res.data.currently.icon,
          temperature: res.data.currently.temperature
        });
      })
      .catch(error => console.log(error));
  }, []);

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
