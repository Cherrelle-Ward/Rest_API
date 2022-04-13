const router = require("express").Router();
const { Show, Movie, Genre } = require("../models/");
const {
  handleInternalServerError,
  handleNotFoundError,
} = require("../middleware/error");

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

// const add = async (res, req) => {
//     const foundGenre = await Genre.findOne({
//       where: { name: req.params.name },
//     });
//   if (!foundGenre) {
//     try {
//       const genre = await Genre.create(req.body);
//       const movie = await Movie.create(req.body);
//       const show = await Show.create(req.body);

//       console.log("Movie Added");
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (foundGenre) {
//     const movie = await Movie.create(req.body);
//     const show = await Show.create(req.body);

//     console.log("Movie Added");
//   }
//   add();
// };
// router.post("/genre", add);

router.use(handleNotFoundError);
router.use(handleInternalServerError);

module.exports = router;
