import React, { useState } from "react";
import LocationContext from "./LocationContext";

const GlobalState = props => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({});

  return (
    <LocationContext.Provider
      value={{ location, setLocation, coordinates, setCoordinates }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default GlobalState;
