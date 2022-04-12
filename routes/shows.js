const router = require("express").Router();
const Show = require("../models/shows");

// ! GET SHOW
router.get("/shows", async (req, res) => {
  res.status(200).json({ msg: "hello shows" });
});

module.exports = router;
