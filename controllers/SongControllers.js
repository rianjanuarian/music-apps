const { artist, song, songArtist } = require("../models");
class SongControllers {
  static async getData(req, res) {
    try {
      let result = await artist.findAll({
        include: [song],
        order: [["id", "asc"]],
      });

      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.render("song/song.ejs", { songs: result });
      } else {
        res.json(result);
      }
      // res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  // static async create(req, res) {
  //   try {
  //     const { name, artistId, duration, album, image } = req.body;
  //     let resSong = await song.create({
  //       name,
  //       artistId,
  //       duration,
  //       album,
  //       image,
  //     });
  //     res.json(resSong);
  //   } catch (error) {
  //     res.json(error);
  //   }
  // }

  static async deletePage(req, res) {
    try {
      const id = +req.params.id;
      let result = await artist.findAll({
       where : {id},
        include: [song],

        order: [["id", "asc"]],
      });

      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.render("song/deleteSongs.ejs", { result });
      } else {
        res.json(result);
      }
      // res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await song.destroy({
        where: {
          id,
        },
      });
      res.redirect("/song");
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { name, duration, album, image } = req.body;
      let result = await song.update(
        {
          name,

          duration,
          album,
          image,
        },
        {
          where: {
            id,
          },
        }
      );
      result[0] === 1
        ? res.json(`${id} has been updated`)
        : res.json(`${id} has not been updated`);
    } catch (error) {
      res.json(error);
    }
  }
  static async createArtist(req, res) {
    try {
      const id = +req.params.id;
      const { name, duration, album, image } = req.body;
      let resSong = await song.create({
        name,
        artistId: id,
        duration,
        album,
        image,
      });
      let resSongArtist = await songArtist.create({
        artistId: id,
        songId: resSong.id,
      });
      let deleteId = await song.destroy({
        where: { id },
      });
      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.redirect("/song");
      } else {
        res.json(resSong);
      }
      // res.json(resSong);
    } catch (error) {
      res.json(error);
    }
  }

  static async createPage(req, res) {
    try {
      const id = +req.params.id;

      let result = await song.findAll({
        where: { id },
      });
      res.render("../views/song/addSongs.ejs", { songs: result });
    } catch (error) {
      res.json(error);
    }

    // res.render("../views/song/addSongs.ejs");
  }

  static updatePage(req, res) {}
}

module.exports = SongControllers;
