import React, { useState } from "react";
import LocationContext from "./LocationContext";

const GlobalState = (props) => {
  const [city, setCity] = useState("");

  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const lat = coordinates.lat;
  const lng = coordinates.lng;

  const [forecast, setForecast] = useState({});

  return (
    <LocationContext.Provider
      value={{
        city,
        setCity,
        lat,
        lng,
        setCoordinates,
        coordinates,
        forecast,
        setForecast,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
