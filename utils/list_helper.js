const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  return blogs.reduce((a, b) => a + b);
};

const favouriteBlog = blogs => {
  return blogs.sort((a, b) => a - b).reverse()[0];
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
};
