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
      hooks:{
        beforeCreate: function(user,option){
          user.image = "https://media.discordapp.net/attachments/1076057192945434624/1156221296691126344/avatars-000312484264-af28qp-t500x500.png?ex=65142e7e&is=6512dcfe&hm=f5edb803863a04793255a0ce3e6a451207d8984cca18f76716d0f887d18fe567&="
        }
      },
      sequelize,
      modelName: "song",
    }
  );
  return song;
};
