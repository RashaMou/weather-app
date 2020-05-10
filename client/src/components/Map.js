import React, { useContext } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import LocationContext from "../contexts/LocationContext";

const BackgroundMap = () => {
  const { coordinates } = useContext(LocationContext);

  let lat = coordinates.lat;
  let lng = coordinates.lng;

  // useEffect(() => {
  //   getInitialUserLocation(setCoordinates);
  //   axios
  //     .post("http://localhost:5000/api/weather", { lat, lng })
  //     .then(res => {
  //       console.log("res.data weather", res.data);
  //       setForecast(res.data.currently);
  //       setCoordinates({ lat: res.data.latitude, lng: res.data.longitude });
  //     })
  //     .catch(err => console.log(err));

  //   axios
  //     .post("http://localhost:5000/api/reversegeocode", { lat, lng })
  //     .then(res => {
  //       console.log("res.data", res.data);
  //       // setCity(res.data[0].formatted_address);
  //     })
  //     .catch(err => console.log(err));

  //   console.log("city from map useeffect", city);
  // }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: "satellite",
      }}
      center={{ lat, lng }}
    ></GoogleMap>
  );
};

const Map = withScriptjs(withGoogleMap(BackgroundMap));

export default Map;
