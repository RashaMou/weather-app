const getInitialUserLocation = callback => {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    callback(pos);
  });
};

export default getInitialUserLocation;
