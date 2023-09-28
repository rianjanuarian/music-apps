/**
 * @swagger
 * components:
 *   schemas:
 *     Artist:
 *       type: object
 *       required:
 *         - name
 *         - genre
 *         - image
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
 *       example:
 *         name: kid cudi
 *         genre: rap
 *         image: "https"
 *    
 */

/**
 * @swagger
 * tags:
 *   name: Artist
 *   description: Artist managing API
 * /artist:
 *  get:
 *     summary: the list of artist
 *     tags: [Artist]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Artist'
 
 */
/**
 * @swagger
 * tags:
 *   name: Artist
 *   description: Artist managing API
 * /artist/create:
 *   post:
 *     summary: Create a new artist
 *     tags: [Artist]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artist'
 *     responses:
 *       200:
 *         description: The created artist.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Artist'
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * tags:
 *   name: Artist
 *   description: Artist managing API
 * /artist/delete/{id}:
 *   get:
 *     summary: Remove the artist by id
 *     tags: [Artist]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The artist id
 * 
 *     responses:
 *       200:
 *         description: The artist was deleted
 *       404:
 *         description: The artist was not found
 */

/**
 * @swagger
 * tags:
 *   name: Artist
 *   description: Artist managing API
 * /artist/update/{id}:
 *  post:
 *    summary: Update the artist by the id
 *    tags: [Artist]
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
 *            $ref: '#/components/schemas/Artist'
 *    responses:
 *      200:
 *        description: The artist was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Artist'
 *      404:
 *        description: The artist was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * tags:
 *   name: Artist
 *   description: Artist managing API
 * /artist/{id}/song:
 *   get:
 *     summary: get the artist song by id
 *     tags: [Artist]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The artist id
 * 
 *     responses:
 *       200:
 *         description: The artist song was found
 *       404:
 *         description: The artist song was not found
 */
const artistRoutes = require("express").Router();
const ArtistControllers = require("../controllers/ArtistControllers");

artistRoutes.get("/", ArtistControllers.getData);
artistRoutes.get("/create", ArtistControllers.createPage);
artistRoutes.post("/create", ArtistControllers.create);
artistRoutes.get("/delete/:id", ArtistControllers.delete);
artistRoutes.post("/update/:id", ArtistControllers.update);
artistRoutes.get("/update/:id", ArtistControllers.updatePage);

artistRoutes.get("/:id/song", ArtistControllers.getArtistSong);

module.exports = artistRoutes;
