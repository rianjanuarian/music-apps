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
      name: DataTypes.STRING,
      artistId: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      album: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "song",
    }
  );
  return song;
};
