import React, { useContext, useEffect } from "react";
import LocationContext from "../contexts/LocationContext";
import { convertTimestamp } from "../helpers/convertTimestamp";
import WeatherIcon from "./WeatherIcon";

const WeatherInfo = () => {
  const { city, forecast, setForecast } = useContext(LocationContext);
  const date = convertTimestamp(forecast.time);
  const temp = Math.ceil(forecast.temperature);

  useEffect(() => {
    // console.log("scale", forecast.scale);
    console.log("forecast", forecast);
  });

  const convertTemp = (temp) => {
    if (forecast.scale === "farenheit") {
      setForecast({
        ...forecast,
        temperature: (5 / 9) * (temp - 32),
        scale: "celcius",
      });
    } else {
      setForecast({
        ...forecast,
        temperature: (temp * 9) / 5 + 32,
        scale: "farenheit",
      });
    }
  };

  return (
    <div className="weather-flex-container">
      <div className="weather-container">
        <div className="weather-info">
          <p className="city">{city}</p>
          <p className="forecast">{date}</p>
          <p className="forecast">{forecast.summary}</p>
        </div>
        <div className="icon-temp">
          <WeatherIcon icon={forecast.icon} />
          <p className="temp">{temp}</p>
          <div className="degrees">
            <span
              onClick={() => convertTemp(temp)}
              style={{
                fontWeight: forecast.scale === "farenheit" ? "bold" : "normal",
              }}
            >
              &deg;F
            </span>
            <span>|</span>
            <span
              onClick={() => convertTemp(temp)}
              style={{
                fontWeight: forecast.scale === "celcius" ? "bold" : "normal",
              }}
            >
              &deg;C
            </span>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="col col-1">
          <p>
            Humidity: <span>{forecast.humidity * 100}%</span>
          </p>
          <p>
            Precipation: <span>{forecast.precipIntensity}%</span>
          </p>
          <p>
            Wind: <span>{forecast.windSpeed} mph</span>
          </p>
        </div>
        <div className="col">
          <p>
            Dew Point: <span>{forecast.dewPoint} &deg;F</span>
          </p>
          <p>
            Cloud Coverage: <span>{forecast.cloudCover * 100}%</span>
          </p>
          <p>
            Visibility: <span>{forecast.visibility} miles</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
