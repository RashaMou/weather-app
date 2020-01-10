import React, { useContext } from "react";
import LocationContext from "../contexts/LocationContext";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const BackgroundMap = () => {
  const { coordinates } = useContext(LocationContext);
  let lat = coordinates.lat;
  let lng = coordinates.lng;
  console.log(coordinates);
  return (
    <GoogleMap
      defaultZoom={10}
      center={{ lat, lng }}
      defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: "satellite"
      }}
    ></GoogleMap>
  );
};

const Map = withScriptjs(withGoogleMap(BackgroundMap));

export default Map;
