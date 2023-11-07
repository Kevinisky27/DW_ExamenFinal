"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var dotenv = require('dotenv');

dotenv.config();
var sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: false // Opciones adicionales de Sequelize

  }
});
sequelize.sync().then(function () {
  console.log('Base de datos y tablas creadas correctamente.');
});
module.exports = sequelize;