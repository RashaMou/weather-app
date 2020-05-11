import React, { useContext, useState } from "react";
import axios from "axios";
import LocationContext from "../contexts/LocationContext";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Search = (props) => {
  const { setCity, setCoordinates, setForecast } = useContext(LocationContext);

  const [location, setLocation] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
    setLocation("");
    setCity(value);
    axios
      .post("http://localhost:5000/api/weather", latLng)
      .then((res) => {
        setForecast(res.data.currently);
      })
      .catch((err) => console.log(err));
  };

  const searchOptions = {
    types: ["(cities)"],
  };

  return (
    <PlacesAutocomplete
      value={location}
      onChange={setLocation}
      onSelect={handleSelect}
      searchOptions={searchOptions}
      highlightFirstSuggestion={true}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search-container">
          <input
            {...getInputProps({
              placeholder: "Search...",
              className: "location-search-input",
            })}
          />{" "}
          {location.length > 0 && (
            <div className="autocomplete-dropdown-container">
              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#36D7B7", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    {/* <Marker /> */}
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default Search;
