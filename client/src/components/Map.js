import React, { useEffect, useState } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const BackgroundMap = () => {
  const [currentLoc, getCurrentLoc] = useState({
    lat: "",
    lng: ""
  });

  let lat = currentLoc.lat;
  let lng = currentLoc.lng;

  let getInitialUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      getCurrentLoc(pos);
    });
  };

  useEffect(() => {
    getInitialUserLocation();
  }, []);

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
