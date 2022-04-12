const router = require("express").Router();
const Movie = require("../models/movies");

// ! GET MOVIE
// get all movies
router.get("/movies", async (req, res) => {
  res.status(200).json(await Movie.findAll({}));
});
//  get one
router.get("/movies/:name", async (req, res) => {
  res
    .status(200)
    .json(await Movie.findOne({ where: { name: req.params.name } }));
});

// ! ADD MOVIE
router.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({ msg: `Created ${movie.name}`, movie });
});

module.exports = router;
