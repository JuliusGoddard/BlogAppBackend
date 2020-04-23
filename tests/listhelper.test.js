const listHelper = require("../utils/list_helper");
const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "323 deaths",
    author: "Kimmel Montreal",
    url: "www.efefwfefe.com",
    likes: 1
  },
  {
    title: "432432 JIGE",
    author: "NIGE NIGE",
    url: "www.efefwfeefe.com",
    likes: 5
  }
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

describe("total likes", () => {
  const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url:
        "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url:
        "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url:
        "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }
  ];

  test("sum of all likes in all blog posts", () => {
    const likes = blogs.map(blog => blog.likes);

    const result = listHelper.totalLikes(likes);

    expect(result).toBe(36);
  });

  test("dummy returns one", () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });

  test.only("which blog has most likes", () => {
    const likes = blogs.map(blog => blog.likes);

    const result = listHelper.favouriteBlog(likes);

    expect(result).toEqual(likes[0]);
  });
});

module.exports = {
  initialBlogs,
  blogsInDb
};
