import React, { useContext } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import LocationContext from "../contexts/LocationContext";

const WeatherCard = () => {
  return (
    <div className="weathercard container box">
      <WeatherInfo />
      <Search />
    </div>
  );
};

export default WeatherCard;
