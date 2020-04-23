const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const helper = require("./listhelper.test.js");
const Blog = require("../models/blog");

beforeEach(async () => {
  await Blog.deleteMany({});

  let blogObject = new Blog(helper.initialBlogs[0]);
  await blogObject.save();

  blogObject = new Blog(helper.initialBlogs[1]);
  await blogObject.save();
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("a valid blogpost can be added ", async () => {
  const newBlog = {
    title: "New fish found",
    author: "gewrge",
    url: "www.rgergrger.com",
    likes: 2
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1);

  const contents = blogsAtEnd.map(b => b.title);
  expect(contents).toContain("New fish found");
});

test("checking delete request for single id", async () => {
  const blogsAtStart = await helper.blogsInDb();
  const blogToDelete = blogsAtStart[0];

  await api.delete(`/api/blogs/${blogToDelete._id}`).expect(204);

  const blogsAtEnd = await helper.blogsInDb();

  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length - 1);
});

test.only("succeeds with a valid id", async () => {
  const blogsAtStart = await helper.blogsInDb();

  const blogToView = blogsAtStart[0];

  const resultBlog = await api
    .get(`/api/blogs/${blogToView._id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(resultBlog.text).toEqual(blogToView);
});

afterAll(() => {
  mongoose.connection.close();
});
