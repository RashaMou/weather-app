import React, { useContext } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import LocationContext from "../contexts/LocationContext";

const BackgroundMap = () => {
  const { coordinates } = useContext(LocationContext);

  let lat = coordinates.lat;
  let lng = coordinates.lng;

  return (
    <GoogleMap
      defaultZoom={10}
      defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: "satellite",
      }}
      center={{ lat, lng }}
    ></GoogleMap>
  );
};

const Map = withScriptjs(withGoogleMap(BackgroundMap));

export default Map;
