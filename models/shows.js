//  SHORT CUT TO CREATE 3 touch models/{Genre,Movies,songs}.js
const { DataTypes, INTEGER } = require("sequelize");
const connection = require("../connection");
const Genre = require("./genre");

const Show = connection.define(
  "Show",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rating: { type: INTEGER },
    seasons: { type: INTEGER },
    episodes: { type: INTEGER },

    actor: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    indexes: [{ unique: true, fields: ["name"] }],
  }
);

// Show.hasOne(Genre);
module.exports = Show;
