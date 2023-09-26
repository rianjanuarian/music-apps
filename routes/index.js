const route = require("express").Router();

route.get("/", (req, res) => {
  
  res.render("index.ejs");
});

const artistRoutes = require("./artist");
const songRoutes = require("./song");
const songArtistRoutes = require("./songArtist");


route.use("/artist", artistRoutes);
route.use("/song", songRoutes);
route.use("/songArtist", songArtistRoutes);


module.exports = route;
