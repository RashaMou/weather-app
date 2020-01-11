require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const Location = require("./routes/location-route");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api", Location);

server.get("/", (req, res) => {
  res.send("Hello from the api");
});

module.exports = server;
