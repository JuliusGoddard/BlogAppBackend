const blogRouter = require("express").Router();
const Blog = require("../models/blog");
const regeneratorRuntime = require("regenerator-runtime");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Comment = require("../models/comment");

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({})
    .populate("user", {
      username: 1,
      name: 1
    })
    .populate("comments", { comment: 1 });

  response.json(blogs.map(blog => blog.toJSON()));
});

blogRouter.get("/:id", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id);
    if (blog) {
      response.json(blog.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

blogRouter.delete("/:id", async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

blogRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(request);

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
    comment: body.comment
  });
  try {
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();

    response.json(savedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }
});

blogRouter.post("/:id/comments", async (request, response, next) => {
  const body = request.body;
  console.log("body:", body);
  try {
    const blog = await Blog.findById(request.params.id);
    const comment = new Comment({
      comment: body.comment,
      blog: blog._id
    });
    console.log("body:", body);
    const savedComment = await comment.save();
    blog.comments.push(savedComment);
    await blog.save();
    response.status(201).json(savedComment);
  } catch (exception) {
    next(exception);
  }
});

blogRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  };

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog.toJSON());
    })
    .catch(error => next(error));
});

module.exports = blogRouter;
