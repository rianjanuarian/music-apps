require("dotenv").config();


const routes = require("./routes");
const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();
const port = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Music API Documentation",
      version: "0.1.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
