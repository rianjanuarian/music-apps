const { artist, song, songArtist } = require("../models");
class ArtistControllers {
  static async getData(req, res) {
    try {
      let result = await artist.findAll({
        order: [["id", "asc"]],
      });
      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.render(`artist/artist.ejs`, { artists: result });
      } else {
        res.json(result);
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, genre, image } = req.body;
      artist.beforeDestroy((user, options) => {
        console.log("Deleteing artist name :", user.name);
      });
      artist.afterDestroy((user, options) => {
        console.log("Delete successfully created with ID :", user.id);
      });
      let resArtist = await artist.create({
        name,
        genre,
        image,
      });
      let resSong = await song.create({
        artistId: resArtist.id,
      });

      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.redirect("/artist");
      } else {
        res.json(resArtist);
      }
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      artist.beforeCreate((user, options) => {
        console.log("Creating artist name :", user.name);
      });
      artist.afterCreate((user, options) => {
        console.log("Artist successfully created with ID :", user.id);
      });
      let resArtist = await artist.destroy({
        where: { id },
      });
      let resJunct = await songArtist.destroy({
        where: { artistId: id },
      });

      let resSong = await song.destroy({
        where: { artistId: id },
      });
      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.redirect("/artist");
      } else {
        resArtist === 1
        ? res.json(`${id} successfully deleted`)
        : res.json(`${id} error delete`);
        
      }
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
      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.redirect("/artist");
      } else {
             resArtist[0] === 1
        ? res.json(`${id} has been updated`)
        : res.json(`${id} has not been updated`);
   
      }
    } catch (error) {
      res.json(error);
    }
  }
  static async getArtistSong(req, res) {
    try {
      const id = +req.params.id;
      let result = await songArtist.findAll({
        where: {
          artistId: id,
        },
        include: [song, artist],
      });
      let songs = result.map((e) => {
        return e.song.dataValues;
      });
      let resSongArtist = {
        ...result[0].artist.dataValues,
        songs,
      };

      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.render(`artist/findartist.ejs`, { resSongArtist });
      } else {
        res.json(resSongArtist);
      }
      // res.json(resSongArtist);
    } catch (error) {
      res.json(error);
    }
  }

  static createPage(req, res) {
    res.render("../views/artist/addArtist.ejs");
  }

  static async updatePage(req, res) {
    try {
      const id = +req.params.id;
      let result = await artist.findAll({
        where: { id },
      });
      res.render("../views/artist/editartist.ejs", { artists: result });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ArtistControllers;
