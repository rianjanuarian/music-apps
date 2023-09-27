"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      song.belongsToMany(models.artist, {
        through: models.songArtist,
      });
    }
  }
  song.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "name cannot be empty",
          },
        },
      },
      artistId: DataTypes.INTEGER,
      duration: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "duration cannot be empty" },
          isInt: { msg: "duration must be an number" },
        },
      },
      album: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "duration cannot be empty" },
        },
      },
      image: DataTypes.STRING,
    },
    {
      
      sequelize,
      modelName: "song",
    }
  );
  return song;
};
