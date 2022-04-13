const router = require("express").Router();
const { Movie } = require("../models/");
const {
  handleInternalServerError,
  handleNotFoundError,
} = require("../middleware/error");

// ! GET MOVIE
// get all movies
router.get("/movies", async (req, res) => {
  res.status(200).json(await Movie.findAll({}));
});
//  get one
router.get("/movies/:name", async (req, res, next) => {
  try {
    const movie = await Movie.findOne({ where: { name: req.params.name } });
    if (movie) {
      res.status(200).json(movie);
    } else {
      req.errType = 400;
      throw new Error("no such movie kiddo");
    }
  } catch (error) {
    next(error);
  }
});

// ! ADD MOVIE
router.post("/movies", async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(201).json({ msg: `Created ${movie.name}`, movie });
});

// ! DELETE MOVIE
// delete all movies
router.delete("/movies", async (req, res) => {
  const result = await Movie.destroy({ where: {} });
  res.status(200).json({ msg: "Deleted all movies", result });
});

// delete by id
router.delete("/movies/:name", async (req, res) => {
  const result = await Movie.destroy({ where: { name: req.params.name } });
  res.status(200).json({ msg: `Deleted ${req.params.name}`, result });
});

// ! UPDATE MOVIE
// update one movie by name
// todo - ("/movies/:nameORid?query=name || query=id)?"
router.put("/movies/:name", async (req, res) => {
  const result = await Movie.findOne({ where: { name: req.params.name } });
  if (req.body.name) {
    result.name = req.body.name;
  }
  if (req.body.rating) {
    result.rating = req.body.rating;
  }
  if (req.body.releaseYear) {
    result.releaseYear = req.body.releaseYear;
  }
  if (req.body.actor) {
    result.actor = req.body.actor;
  }

  await result.save();
  res.status(200).json({ msg: `Updated ${req.params.name}`, result });
});

router.use(handleNotFoundError);
router.use(handleInternalServerError);
module.exports = router;
