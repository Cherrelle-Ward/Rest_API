const router = require("express").Router();
const { Show } = require("../models/");

// ! GET SHOW
// get all shows
router.get("/shows", async (req, res) => {
  res.status(200).json(await Show.findAll({}));
});
//  get one
router.get("/shows/:name", async (req, res) => {
  res
    .status(200)
    .json(await Show.findOne({ where: { name: req.params.name } }));
});

// ! ADD SHOW
router.post("/shows", async (req, res) => {
  const show = await Show.create(req.body);
  res.status(201).json({ msg: `Created ${show.name}`, show });
});

// ! DELETE SHOW
// delete all show
router.delete("/shows", async (req, res) => {
  const result = await Show.destroy({ where: {} });
  res.status(200).json({ msg: "Deleted all shows", result });
});

// delete by id
router.delete("/shows/:name", async (req, res) => {
  const result = await Show.destroy({ where: { name: req.params.name } });
  res.status(200).json({ msg: `Deleted ${req.params.name}`, result });
});

// ! UPDATE SHOW
// update one show by name
// todo - ("/show/:nameORid?query=name || query=id)?"
router.put("/shows/:name", async (req, res) => {
  const result = await Show.findOne({ where: { name: req.params.name } });
  if (req.body.name) {
    result.name = req.body.name;
  }
  if (req.body.rating) {
    result.rating = req.body.rating;
  }
  if (req.body.episodes) {
    result.episodes = req.body.episodes;
  }
  if (req.body.seasons) {
    result.seasons = req.body.seasons;
  }
  if (req.body.actor) {
    result.actor = req.body.actor;
  }

  await result.save();
  res.status(200).json({ msg: `Updated ${req.params.name}`, result });
});

module.exports = router;
