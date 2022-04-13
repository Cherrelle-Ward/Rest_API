const router = require("express").Router();
const { Show, Movie, Genre } = require("../models/");

// ! GET GENRE
// get all
router.get("/genres", async (req, res) => {
  res.status(200).json(await Genre.findAll({}));
});
//  get one genre
router.get("/genre/:name", async (req, res) => {
  res
    .status(200)
    .json(await Show.findOne({ where: { name: req.params.name } }));
});

// ! ADD genre
router.post("/genre", async (req, res) => {
  const genre = await Genre.create(req.body);
  res.status(201).json({ msg: `Created ${genre.name}`, genre });
});
module.exports = router;
