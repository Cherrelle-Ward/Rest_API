//  SHORT CUT TO CREATE 3 touch models/{Genre,Movies,songs}.js
const { DataTypes, INTEGER } = require("sequelize");
const connection = require("../connection");
const Genre = require("./genre");

const Movie = connection.define(
  "Movie",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rating: { type: INTEGER },
    releaseYear: { type: INTEGER },
    actor: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    indexes: [{ unique: true, fields: ["name"] }],
  }
);

// Movie.hasOne(Genre);
module.exports = Movie;
