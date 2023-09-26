"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class songArtist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      songArtist.belongsTo(models.artist, {
        foreignKey: "artistId",
      });
      songArtist.belongsTo(models.song, {
        foreignKey : "songId"
      });
    }
  }
  songArtist.init(
    {
      artistId: DataTypes.INTEGER,
      songId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "songArtist",
    }
  );
  return songArtist;
};
