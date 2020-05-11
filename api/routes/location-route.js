const axios = require("axios");
const router = require("express").Router();

router.post("/weather", (req, res) => {
  let requestBody = req.body;
  console.log("W requestBody", requestBody);
  axios
    .get(
      `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${requestBody.lat},${requestBody.lng}`
    )
    .then((data) => {
      res.status(200).json(data.data);
    })
    .catch((err) => {
      res.status(500).json({ message: "something went wrong" });
    });
});

router.post("/reversegeocode", (req, res) => {
  let requestBody = req.body;
  console.log("RG requestBody", requestBody);
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${requestBody.lat},${requestBody.lng}&location_type=APPROXIMATE&result_type=locality&key=${process.env.GOOGLE_MAPS_KEY}`
    )
    .then((data) => {
      console.log("RG", data.data);
      res.status(200).json(data.data.results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
