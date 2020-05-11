import React, { useContext } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import LocationContext from "../contexts/LocationContext";
import { getUserLocation } from "../helpers/getUserLocation";

import { ReactComponent as MyLocation } from "../assets/icons/ui/my_location.svg";

const WeatherCard = (props) => {
  const override = css`
    display: flex;
    justify-content: center;
    margin: 3rem 0 3rem 0;
  `;

  const { setCoordinates, setCity, setForecast } = useContext(LocationContext);

  const handleLocationClick = () => {
    getUserLocation(setForecast, setCoordinates, props.loading, setCity);
  };

  return (
    <div className="weathercard container box">
      <div className="position-div">
        <div className="inner-flex">
          <Search />
          {/* <div className="icons">
            <div className="search-button-box">
              <SearchIcon />
            </div>
            <div className="location-button-box">
              <MyLocation />
            </div>
          </div> */}
        </div>
        {props.loading ? (
          <BeatLoader css={override} size={20} color={"#32a290"} />
        ) : (
          <WeatherInfo />
        )}
      </div>
      <div className="icons">
        <div className="location-button-box">
          <MyLocation onClick={handleLocationClick} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
