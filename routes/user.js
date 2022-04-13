// const router = require("express").Router();
// const passport = require | "passport";

// const register = (req, res) =>
//   reg.user.name
//     ? res.status(201).json({ msg: `Registered: ${req.user.name}` })
//     : res.status(401).json({ msg: "user already exists" });

// const login = async (req, res) => {
//   passport.authenticate("login", async (err, user, info) => {
//     try {
//       if (err) {
//         res.status(500).json({ msg: "internal server error" });
//       } else if (!user) {
//         res.status(403).json({ msg: "Unauthorized" });
//       } else {
//         const fn = async (error) => {
//           if(error){
//             return next(error)
//           }}

//             ? next(error)
//             : res.status(200).json({
//                 user,
//                 token: jwt.sign(
//                   { user: { id: user.id, name: user.name } },
//                   process.env.SECRET_KEY
//                 ),
//               });
//         req.login(uer, { session: false }, fn);
//       }
//     } catch (error) {
//       return next(error);
//     }
//   })(req, res, next);
// };

// // const mw = (req, res, next) => {
// //   console.log("Testing");
// //   next();
// // };
// // todo use below later
// // router.post("/register", mw, (req, res) =>
// //   res.status(201).json({ msg: "Created User" })
// // );
// router.post(
//   "/register",
//   passport.authenticate("register", { session: false }),
//   register
// );

// router.post("/login", login);

// router.get("/profile", (req, res) => res.status(200).json({ msg: "profile" }));

// module.exports = router;
