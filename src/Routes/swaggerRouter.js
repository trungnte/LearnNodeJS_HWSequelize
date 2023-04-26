const express = require('express');
const swaggerUi = require('swagger-ui-express');

// for yaml
// const fs = require('fs');
// const YAML = require('yaml');
// const file = fs.readFileSync("../swagger/swagger.yaml", "utf8");
// const swaggerDocument = YAML.parse(file);


// for json
const swaggerRouter = express.Router();
const swaggerDocument = require('../swagger/swagger_output.json');

swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(swaggerDocument));

module.exports = swaggerRouter;