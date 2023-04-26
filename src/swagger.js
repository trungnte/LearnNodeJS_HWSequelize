const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./Routes/rootRouter.js']

swaggerAutogen(outputFile, endpointsFiles)