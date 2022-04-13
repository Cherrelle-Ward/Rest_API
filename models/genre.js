const { DataTypes } = require("sequelize");
const connection = require("../connection");
const { Movie, Show, User } = require("./index");

const Genre = connection.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
  },
  {
    // indexes: [{ unique: false, fields: ["category"] }],
  }
);

module.exports = Genre;
