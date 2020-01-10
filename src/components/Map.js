import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const BackgroundMap = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 39.952583, lng: -75.165222 }}
      defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: "satellite"
      }}
    ></GoogleMap>
  );
};

const Map = withScriptjs(withGoogleMap(BackgroundMap));

export default Map;
