const { artist, song, songArtist } = require("../models");
class songArtistControllers {
  static async getData(req, res) {
    try {
      let result = await songArtist.findAll({
        include: [artist, song],
        order: [["id", "asc"]],
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {}
}

module.exports = songArtistControllers;
