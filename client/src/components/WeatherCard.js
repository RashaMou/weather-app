import React from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import { ReactComponent as SearchIcon } from "../assets/icons/ui/search.svg";
import { ReactComponent as MyLocation } from "../assets/icons/ui/my_location.svg";

const WeatherCard = () => {
  return (
    <div className="weathercard container box">
      <Search />
      <div className="icons">
        <div className="search-button-box">
          <SearchIcon />
        </div>
        <div className="location-button-box">
          <MyLocation />
        </div>
      </div>
      <WeatherInfo />
    </div>
  );
};

export default WeatherCard;
