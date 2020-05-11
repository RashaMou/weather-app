import React, { useEffect, useContext, useState } from "react";
import Map from "./components/Map";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import LocationContext from "./contexts/LocationContext";
import { getUserLocation } from "./helpers/getUserLocation";

function App() {
  const { setCoordinates, setCity, setForecast } = useContext(LocationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserLocation(setForecast, setCoordinates, setIsLoading, setCity);
  }, []);

  return (
    <div className="background">
      <Map
        className="map"
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_-p0IIpC7cQPaLg2pb4qi-biT3yCGvlA"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={
          <div style={{ height: "100%", filter: "grayscale(100%)" }} />
        }
        mapElement={<div style={{ height: "100%" }} />}
      />
      <div className="flex-container">
        <WeatherCard loading={isLoading} />
      </div>
    </div>
  );
}

export default App;
