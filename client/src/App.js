import React from "react";
import Map from "./components/Map";
import WeatherCard from "./components/WeatherCard";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="background">
        <Map
          className="map"
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
        <WeatherCard />
      </div>
    </GlobalState>
  );
}

export default App;
