require("dotenv").config();
const express = require("express");
const app = express();

// ! Connections
const connection = require("./connection");

// !Routes
const movieRouter = require("./routes/movies");
const showRouter = require("./routes/shows");
const streamRouter = require("./routes/stream");

// telling server we will accept data as json.
app.use(express.json());

// !routes are mounted under
app.use("/", movieRouter);
app.use("/", showRouter);
app.use("/", streamRouter);

app.listen(parseInt(process.env.HTTP_PORT), () => {
  console.log("Server Online");
  connection.authenticate();
  // to sync models
  connection.sync({ alter: true });
});
