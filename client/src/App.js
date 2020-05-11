import React, { useEffect, useContext } from "react";
import Map from "./components/Map";
import axios from "axios";

import WeatherCard from "./components/WeatherCard";
import LocationContext from "./contexts/LocationContext";
import getInitialUserLocation from "./helpers/getInitialUserLocation";

function App() {
  const apiKey = "AIzaSyBcv2QVgQ6oRSdKqZDOKxAGAicxoEBZTBo";
  const {
    setCoordinates,
    coordinates,
    lat,
    lng,
    setCity,
    city,
    setForecast,
    forecast,
  } = useContext(LocationContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function success(position) {
      const pos = position.coords;
      console.log("position", position.coords);
      axios
        .post("http://localhost:5000/api/weather", {
          lat: pos.latitude,
          lng: pos.longitude,
        })
        .then((res) => {
          setForecast({
            ...res.data.currently,
            scale: "farenheit",
          });
          setCoordinates({ lat: res.data.latitude, lng: res.data.longitude });
        })
        .catch((err) => console.log(err));

      axios
        .post("http://localhost:5000/api/reversegeocode", {
          lat: pos.latitude,
          lng: pos.longitude,
        })
        .then((res) => {
          console.log("res from reverse geocode", res.data);
          setCity(res.data[0].formatted_address);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="background">
      <Map
        className="map"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={
          <div style={{ height: "100%", filter: "grayscale(100%)" }} />
        }
        mapElement={<div style={{ height: "100%" }} />}
      />
      <div className="flex-container">
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
