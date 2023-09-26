const { artist, song, songArtist } = require("../models");
class ArtistControllers {
  static async getData(req, res) {
    try {
      let result = await artist.findAll({
        order: [["id", "asc"]],
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, genre, image } = req.body;
      let resArtist = await artist.create({
        name,
        genre,
        image,
      });
      let resSong = await song.create({
        songId : resArtist.id
      })
      let resSongArtist = await songArtist.create({
        artistId : resArtist.id,
        songId : resSong.id
      })
      res.json(resArtist);
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let resArtist = await artist.destroy({
        where: { id },
      });
      resArtist === 1
        ? res.json({ message: `${id} has been deleted` })
        : res.json({ message: `${id} has not been deleted` });
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, genre, image } = req.body;
      let resArtist = await artist.update(
        {
          name,
          genre,
          image,
        },
        {
          where: { id },
        }
      );
      resArtist[0] === 1
        ? res.json({ message: `${id} has been updateds` })
        : res.json({ message: `${id} has not updated` });
    } catch (error) {
      res.json(error);
    }
  }

  static createPage(req, res) {}
  static updatePage(req, res) {}
}

module.exports = ArtistControllers;
