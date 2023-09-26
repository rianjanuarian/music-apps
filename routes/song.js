const songRoutes = require("express").Router();
const SongControllers = require("../controllers/SongControllers");

songRoutes.get("/", SongControllers.getData);
songRoutes.get("/create", SongControllers.createPage);
songRoutes.post("/create", SongControllers.create);
songRoutes.post("/create/:id", SongControllers.createArtist);
songRoutes.get("/delete/:id", SongControllers.delete);
songRoutes.post("/update/:id", SongControllers.update);
songRoutes.get("/update/:id", SongControllers.updatePage);

module.exports = songRoutes;