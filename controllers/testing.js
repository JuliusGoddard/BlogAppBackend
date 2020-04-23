const testingRouter = require("express").Router();
const Blog = require("../models/blog");
const regeneratorRuntime = require("regenerator-runtime");
const User = require("../models/user");

testingRouter.post("/", async (request, response) => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  response.status(204).end();
});

module.exports = testingRouter;
