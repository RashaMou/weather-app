import React, { useState, useContext } from "react";
import LocationContext from "../contexts/LocationContext";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const Search = props => {
  // location is the human readable name, LatLng is the latitude and longitude
  const { setLocation, location, setCoordinates } = useContext(LocationContext);

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates(latLng);
  };

  const handleChange = value => {
    setLocation(value);
  };

  const searchOptions = {
    types: ["(cities)"]
  };

  return (
    <>
      <PlacesAutocomplete
        value={location}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
        highlightFirstSuggestion={true}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default Search;
