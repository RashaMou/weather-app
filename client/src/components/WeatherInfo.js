import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";
import { convertTimestamp } from "../helpers/convertTimestamp";
import { ReactComponent as ClearDay } from "../assets/icons/weather/clear_day.svg";
import { ReactComponent as ClearNight } from "../assets/icons/weather/clear_night.svg";
import { ReactComponent as Cloudy } from "../assets/icons/weather/cloudy.svg";
import { ReactComponent as PartlyCloudyDay } from "../assets/icons/weather/partly_cloudy_day.svg";
import { ReactComponent as PartlyCloudyNight } from "../assets/icons/weather/partly_cloudy_night.svg";
import { ReactComponent as Rain } from "../assets/icons/weather/rain.svg";
import { ReactComponent as Sleet } from "../assets/icons/weather/sleet.svg";
import { ReactComponent as Snow } from "../assets/icons/weather/snow.svg";
import { ReactComponent as Wind } from "../assets/icons/weather/wind.svg";

const WeatherInfo = () => {
  const { city, forecast } = useContext(LocationContext);
  const date = convertTimestamp(forecast.time);
  const displayWeatherIcon = (icon_name) => {
    switch (icon_name) {
      case "clear-night":
        return <ClearNight height="auto" width="60px" />;
      case "clear-day":
        return <ClearDay height="auto" width="60px" />;
      case "rain":
        return <Rain height="auto" width="60px" />;
      case "sleet":
        return <Sleet height="auto" width="60px" />;
      case "snow":
        return <Snow height="auto" width="60px" />;
      case "wind":
        return <Wind height="auto" width="60px" />;
      case "cloudy":
        return <Cloudy height="auto" width="60px" />;
      case "partly-cloudy-day":
        return <PartlyCloudyDay height="auto" width="60px" />;
      case "partly-cloudy-night":
        return <PartlyCloudyNight height="auto" width="60px" />;
      default:
        return null;
    }
  };

  return (
    <div className="weather-info">
      <p className="city">{city}</p>
      <p>{date}</p>
      <p>{forecast.summary}</p>
      {displayWeatherIcon(forecast.icon)}
      <p>{forecast.temperature}</p>
    </div>
  );
};

export default WeatherInfo;
