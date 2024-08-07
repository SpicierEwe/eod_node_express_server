const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EOD API",
      version: "1.0.0",
      description: "API documentation for the EOD management system",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["../routes/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
