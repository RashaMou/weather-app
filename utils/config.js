module.exports = {
  baseUrl: {
    protocol: "https",
    hostname: "api.darksky.net",
    path: "/forecast"
  },

  query: {
    name: "q",
    id: "id",
    coordinates: {
      latitude: "lat",
      longitude: "lon"
    },
    zipcode: "zip"
  },

  APIkey: "<Your-API-key>"
};
