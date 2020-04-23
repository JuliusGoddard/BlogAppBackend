const http = require("http");
const express = require("express");
const app = require("./app");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./utils/config");
const Blog = require("./models/blog");

const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
