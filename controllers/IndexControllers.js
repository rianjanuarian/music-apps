const { artist, song, songArtist } = require("../models");
class IndexControllers {
  static async getData(req, res) {
    try {
      let result = await songArtist.findAll({
        include: [artist, song],
        order: [["id", "asc"]],
      });

      let artistsWithSongs = {};
      result.map((songArtist) => {
        const artistName = songArtist.artist.name;
        const artistGenre = songArtist.artist.genre;
        const artistImage = songArtist.artist.image;
        const artistIds = songArtist.artistId;
        const songData = songArtist.song.dataValues;
        if (!artistsWithSongs[artistName]) {
          artistsWithSongs[artistName] = {
            name: artistName,
            genre: artistGenre,
            image: artistImage,
            artistId: artistIds,
            songs: [songData],
          };
        } else {
          artistsWithSongs[artistName].songs.push(songData);
        }
      });
      const resSong = Object.values(artistsWithSongs);

      const accept = req.get("Accept");
      if (accept && accept.includes("text/html")) {
        res.render("index.ejs", { resSong });
      } else {
        res.json(resSong);
      }
    
      // res.render("index.ejs", { resSong });
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {}
}

module.exports = IndexControllers;
