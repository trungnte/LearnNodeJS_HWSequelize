const { Sequelize} = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.db_database, config.db_user, config.db_pass, {
    host: config.db_host,
    port: config.db_port,
    dialect: config.db_dialect
});

// try {
//     sequelize.authenticate();
//     console.log("Connect DB OK");
// } catch (error) {
//     console.log("Failed to connect DB");
// }

module.exports = sequelize;