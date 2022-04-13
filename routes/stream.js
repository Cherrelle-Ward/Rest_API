const router = require("express").Router();
const { Show, Movie } = require("../models/");
const {
  handleInternalServerError,
  handleNotFoundError,
} = require("../middleware/error");

const allMovies = async (req, res) =>
  res.status(200).json(await Movie.findAll({}));

const allShows = async (req, res) =>
  res.status(200).json(await Show.findAll({}));

router.get("/movies", allMovies);

// ! GET MOVIES & SHOWS

router.use(handleNotFoundError);
router.use(handleInternalServerError);
module.exports = router;
