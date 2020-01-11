import React, { useEffect, useContext } from "react";
import axios from "axios";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import LocationContext from "../contexts/LocationContext";

const BackgroundMap = () => {
  const { setCoordinates, setForecast, coordinates } = useContext(
    LocationContext
  );

  let lat = coordinates.lat;
  let lng = coordinates.lng;

  let getInitialUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setCoordinates(pos);
      axios
        .post("http://localhost:5000/api/reversegeocode", pos)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    });
  };

  useEffect(() => {
    getInitialUserLocation();
    axios
      .post("http://localhost:5000/api/weather", { lat, lng })
      .then(res => {
        setForecast(res.data.currently);
      })
      .catch(err => console.log(err));
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
