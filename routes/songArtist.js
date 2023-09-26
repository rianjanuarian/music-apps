const songArtistRoutes = require("express").Router();
const SongArtistControllers = require("../controllers/SongArtistControllers");

songArtistRoutes.get("/", SongArtistControllers.getData);

songArtistRoutes.post("/create", SongArtistControllers.create);

module.exports = songArtistRoutes;
