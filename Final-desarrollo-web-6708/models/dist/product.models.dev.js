"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../database/mssql.config'); // Model attributes are defined here


var Product = sequelize.define('Producto', {
  Codigo: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING,
    autoIncrement: false,
    allowNull: false,
    primaryKey: false
  },
  Precio: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: false
  },
  Existencia: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: false
  }
});
module.exports = Product;