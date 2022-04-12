const { DataTypes } = require("sequelize");
const connection = require("../connection");
const Movie = require("./movies");
const Show = require("./shows");

const Genre = connection.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // indexes: [{ unique: false, fields: ["category"] }],
  }
);

// Genre.hasMany(Show);
module.exports = Genre;
