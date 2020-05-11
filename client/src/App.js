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
    city,
    setForecast,
    forecast,
  } = useContext(LocationContext);

  useEffect(() => {
    getInitialUserLocation(setCoordinates);
    axios
      .post("http://localhost:5000/api/weather", coordinates)
      .then((res) => {
        console.log("res", res.data);
        setForecast({
          summary: res.data.data.currently.summary,
          icon: res.data.data.currently.icon,
          temperature: res.data.data.currently.temperature,
          scale: "farenheit",
        });
        setCoordinates({ lat: res.data.latitude, lng: res.data.longitude });
      })
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:5000/api/reversegeocode", { lat, lng })
      .then((res) => {
        // console.log("res.data", res.data);
        // setCity(res.data[0].formatted_address);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="background">
      <Map
        className="map"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      <div className="flex-container">
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
