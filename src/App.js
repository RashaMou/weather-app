import React from "react";
import "./App.css";
import Map from "./components/Map";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
      <WeatherCard />
    </div>
  );
}

export default App;
