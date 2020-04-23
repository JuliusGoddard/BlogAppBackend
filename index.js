require("dotenv").config();
const app = require("./app"); // the actual Express app
const http = require("http");
const config = require("./utils/config");
const Blog = require("./models/blog");
const regeneratorRuntime = require("regenerator-runtime");
const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
