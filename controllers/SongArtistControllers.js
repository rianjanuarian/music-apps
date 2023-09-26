const { artist, song, songArtist } = require("../models");
class songArtistControllers {
  static async getData(req, res) {
    try {
      let result = await songArtist.findAll({
        include: [artist, song],
        order: [["id", "asc"]],
      });
      
      let artistsWithSongs = {};
      result.map(songArtist => {
        const artistName = songArtist.artist.name; 
        const artistGenre = songArtist.artist.genre
        const artistImage = songArtist.artist.image
        const songData = songArtist.song.dataValues;
        if (!artistsWithSongs[artistName]) {
          artistsWithSongs[artistName] = {
            name: artistName,
            genre : artistGenre,
            image : artistImage,
            songs: [songData],
          };
        } else {
          artistsWithSongs[artistName].songs.push(songData);
        }
      })
      const resSong = Object.values(artistsWithSongs)

      res.json(resSong);
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {}
}

module.exports = songArtistControllers;
