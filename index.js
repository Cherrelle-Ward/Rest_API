require("dotenv").config();
const express = require("express");
const app = express();
//! middleware
// const passport = require("passport");
// const { registerStrategy, loginStrategy } = require("./middleware/auth");

// ! Connections
const connection = require("./connection");
// ! Model connection
const { Movie, Show, Genre, User } = require("./models/");

// !Routes
const {
  movieRouter,
  showRouter,
  streamRouter,
  genreRouter,
  userRouter,
} = require("./routes/");

// telling server we will accept data as json.
app.use(express.json());

// !routes are mounted under
app.use("/", movieRouter);
app.use("/", showRouter);
app.use("/", genreRouter);
app.use("/stream", streamRouter);
// app.use("/user", userRouter);
// !user
// passport.use("register", registerStrategy);
// passport.use("login", loginStrategy);

app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  // to sync models
  connection.sync({ alter: true });
});
