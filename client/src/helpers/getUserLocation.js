import axios from "axios";

export const getUserLocation = (
  setForecast,
  setCoordinates,
  setIsLoading,
  setCity
) => {
  navigator.geolocation.getCurrentPosition(success, error);

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function success(position) {
    const pos = position.coords;
    axios
      .post("https://rasha-weather-app.herokuapp.com/api/weather", {
        lat: pos.latitude,
        lng: pos.longitude,
      })
      .then((res) => {
        console.log("res", res.data);
        setForecast({
          ...res.data.currently,
          scale: "farenheit",
        });
        setCoordinates({ lat: res.data.latitude, lng: res.data.longitude });
      })
      .catch((err) => console.log(err));

    axios
      .post("https://rasha-weather-app.herokuapp.com/api/reversegeocode", {
        lat: pos.latitude,
        lng: pos.longitude,
      })
      .then((res) => {
        setCity(res.data[0].formatted_address);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }
};
