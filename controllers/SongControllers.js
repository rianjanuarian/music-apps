const { artist, song, songArtist } = require("../models");
class SongControllers {
  static async getData(req, res) {
    try {
      let result = await song.findAll({
        order: [["id", "asc"]],
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      const { name, duration, album, image } = req.body;
      let resSong = await song.create({
        name,
        duration,
        album,
        image,
      });
      res.json(resSong);
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
      result === 1
      ? res.json(`${id} successfully deleted`)
      : res.json(`${id} error delete`);
    } catch (error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
        const id = +req.params.id;
        const { name, duration, album, image } = req.body;
        let result = await song.update({
            name ,duration,album,image
        },{
            where:{
                id
            }
        })
        result[0] === 1
        ? res.json(`${id} has been updated`)
        : res.json(`${id} has not been updated`);
    } catch (error) {
        res.json(error)
    }
  }

  static createPage(req, res) {}
  static updatePage(req, res) {}
}

module.exports = SongControllers;
