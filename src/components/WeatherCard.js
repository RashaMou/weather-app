import React from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

const WeatherCard = () => {
  return (
    <div className="weathercard container box">
      <Search />
      <WeatherInfo />
    </div>
  );
};

export default WeatherCard;
