const router = require("express").Router();

const movieRouter = require("./movies");
const showRouter = require("./shows");
const streamRouter = require("./stream");
const genreRouter = require("./genre");
// const userRouter = require("./user");

//! error connection

module.exports = {
  movieRouter,
  showRouter,
  streamRouter,
  genreRouter,
};
