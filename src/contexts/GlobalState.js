import React, { useState } from "react";
import LocationContext from "./LocationContext";

const GlobalState = props => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 39.952583,
    lng: -75.165222
  });

  const lat = coordinates.lat;
  const lng = coordinates.lng;

  return (
    <LocationContext.Provider
      value={{ location, setLocation, lat, lng, setCoordinates }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
