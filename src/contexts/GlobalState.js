import React, { useState } from "react";
import LocationContext from "./LocationContext";

const GlobalState = props => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 39.952583,
    lng: -75.165222
  });

  return (
    <LocationContext.Provider
      value={{ location, setLocation, coordinates, setCoordinates }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
