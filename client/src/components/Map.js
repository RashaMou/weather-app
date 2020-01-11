import React, { useEffect, useContext } from "react";
import axios from "axios";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import LocationContext from "../contexts/LocationContext";
import getInitialUserLocation from "../helpers/getInitialUserLocation";

const BackgroundMap = () => {
  const { setCoordinates, setForecast, coordinates, setCity } = useContext(
    LocationContext
  );

  let lat = coordinates.lat;
  let lng = coordinates.lng;

  useEffect(() => {
    getInitialUserLocation(setCoordinates);

    axios
      .post("http://localhost:5000/api/weather", { lat, lng })
      .then(res => {
        setForecast(res.data.currently);
      })
      .catch(err => console.log(err));

    axios
      .post("http://localhost:5000/api/reversegeocode", { lat, lng })
      .then(res => {
        console.log("reverse geocode res", res.data[0].formatted_address);
        setCity(res.data[0].formatted_address);
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
