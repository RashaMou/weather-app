import React from "react";
import "./App.css";
import Map from "./components/Map";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App">
      <Map />
      <WeatherCard />
    </div>
  );
}

export default App;
