const artistRoutes = require("express").Router();
const ArtistControllers = require("../controllers/ArtistControllers");

artistRoutes.get("/", ArtistControllers.getData);
artistRoutes.get("/create", ArtistControllers.createPage);
artistRoutes.post("/create", ArtistControllers.create);
artistRoutes.get("/delete/:id", ArtistControllers.delete);
artistRoutes.post("/update/:id", ArtistControllers.update);
artistRoutes.get("/update/:id", ArtistControllers.updatePage);

module.exports = artistRoutes;
