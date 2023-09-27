const route = require("express").Router();

const IndexControllers = require("../controllers/IndexControllers");
// route.get("/", (req, res) => {
  
//   res.render("index.ejs");
// });

const artistRoutes = require("./artist");
const songRoutes = require("./song");
const songArtistRoutes = require("./songArtist");


route.use("/artist", artistRoutes);
route.use("/song", songRoutes);
route.use("/songArtist", songArtistRoutes);
route.use("/", IndexControllers.getData);



module.exports = route;
