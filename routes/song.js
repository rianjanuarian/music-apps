/**
 * @swagger
 * components:
 *   schemas:
 *     Song:
 *       type: object
 *       required:
 *         - name
 *         - duration
 *         - album
 *         - image
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the song
 *         name:
 *           type: string
 *           description: The title of the song
 *         artistId:
 *           type: integer
 *           description: The artist id of the song
 *         duration:
 *           type: string
 *           description: The duration of the song
 *         album:
 *           type: string
 *           description: The album of the song
 *         image:
 *           type: string
 *           description: The image of the song
 *       example:
 *         name: "color violet"
 *         artistId: 2
 *         duration: 2
 *         album: "sings"
 *         image: "https"
 *    
 */

/**
 * @swagger
 * tags:
 *   name: Song
 *   description: Song managing API
 * /song:
 *  get:
 *     summary: the list of song
 *     tags: [Song]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Song'
 
 */
/**
 * @swagger
 * tags:
 *   name: Song
 *   description: Song managing API
 * /song/create/{id}:
 *  post:
 *    summary: Update the song by the artist id
 *    tags: [Song]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The artist id 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Song'
 *    responses:
 *      200:
 *        description: The song was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Song'
 *      404:
 *        description: The song was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * tags:
 *   name: Song
 *   description: Song managing API
 * /song/delete/{id}:
 *   get:
 *     summary: Remove the song by id
 *     tags: [Song]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The song id
 * 
 *     responses:
 *       200:
 *         description: The song was deleted
 *       404:
 *         description: The song was not found
 */

/**
 * @swagger
 * tags:
 *   name: Song
 *   description: Song managing API
 * /song/update/{id}:
 *  post:
 *    summary: Update the song by the id
 *    tags: [Song]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The song id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Song'
 *    responses:
 *      200:
 *        description: The song was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Song'
 *      404:
 *        description: The song was not found
 *      500:
 *        description: Some error happened
 */

const songRoutes = require("express").Router();
const SongControllers = require("../controllers/SongControllers");

songRoutes.get("/", SongControllers.getData);
songRoutes.get("/create/:id", SongControllers.createPage);
songRoutes.post("/create/:id", SongControllers.createArtist);
songRoutes.get("/delete/:id", SongControllers.delete);
songRoutes.get("/deletepage/:id", SongControllers.deletePage);
songRoutes.post("/update/:id", SongControllers.update);
songRoutes.get("/update/:id", SongControllers.updatePage);


module.exports = songRoutes;