const router = require("express").Router();
const Show = require("../models/shows");
const Movie = require("../models/movies");

// ! GET MOVIES & SHOWS
router.get("/stream", async (req, res) => {
  res.status(200).json({ msg: "hello stream" });
});

module.exports = router;
