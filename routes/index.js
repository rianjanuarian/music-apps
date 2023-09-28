/**
 * @swagger
 * components:
 *   schemas:
 *     Index:
 *       type: object
 *       required:
 *         - name
 *         - genre
 *         - image
 *         - songs
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the artist
 *         name:
 *           type: string
 *           description: The name of the artist
 *         genre:
 *           type: string
 *           description: The genre of the artist
 *         image:
 *           type: string
 *           description: The image of the artist
 *         songs:
 *           type: array
 *           description: The list of songs
 *       example:
 *         id: 3
 *         name: kid cudi
 *         genre: rap
 *         image: "https"
 *         songs: []
 *    
 */

/**
 * @swagger
 * tags:
 *   name: Index
 *   description: Index managing API
 * :
 *  get:
 *     summary: the list of index
 *     tags: [Index]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Index'
 
 */

const route = require("express").Router();

const IndexControllers = require("../controllers/IndexControllers");

const artistRoutes = require("./artist");
const songRoutes = require("./song");
const songArtistRoutes = require("./songArtist");

route.use("/artist", artistRoutes);
route.use("/song", songRoutes);
route.use("/songArtist", songArtistRoutes);
route.use("/", IndexControllers.getData);

module.exports = route;
