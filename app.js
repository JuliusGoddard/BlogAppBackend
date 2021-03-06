const config = require("./utils/config");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const blogRouter = require("./controllers/blog");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const regeneratorRuntime = require("regenerator-runtime");
const usersRouter = require("./controllers/user");
const loginRouter = require("./controllers/login");
const testingRouter = require("./controllers/testing");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch(error => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogRouter);

app.use("/api/users", usersRouter);

app.use("/api/login", loginRouter);

app.use("/api/testing", testingRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
