const axios = require("axios");
const router = require("express").Router();

router.post("/weather", (req, res) => {
  let requestBody = req.body;
  console.log(requestBody);
  axios
    .get(
      `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${requestBody.lat},${requestBody.lng}`
    )
    .then(data => {
      res.status(200).json(data.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
