"use strict";

var express = require("express");

var userSchema = require("../models/product.models");

var router = express.Router(); //Obtener productos  -- GET

router.get('/productos', function (req, res) {
  userSchema.find().then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    return res.json({
      message: err
    });
  });
}); //Obtener producto por id -- GET

router.get('/productos/:id', function (req, res) {
  var id = req.params.id;
  userSchema.findById(id).then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    return res.json({
      message: err
    });
  });
}); //Crear producto  -- POST

router.post('/productos', function _callee(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          product = userSchema(req.body);
          product.save().then(function (data) {
            res.json(data);
          })["catch"](function (err) {
            return res.json({
              message: err
            });
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Actualizar producto -- PUT

router.put('/productos/:id', function (req, res) {
  var id = req.params.id;
  var _req$body = req.body,
      Nombre = _req$body.Nombre,
      Precio = _req$body.Precio,
      Existencia = _req$body.Existencia;
  userSchema.updateOne({
    _id: id
  }, {
    $set: {
      Nombre: Nombre,
      Precio: Precio,
      Existencia: Existencia
    }
  }).then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    return res.json({
      message: err
    });
  });
}); // Eliminar un producto por id  -- DELETE

router["delete"]('/productos/:id', function (req, res) {
  var id = req.params.id;
  userSchema.deleteOne({
    _id: id
  }).then(function (data) {
    return res.json(data);
  })["catch"](function (err) {
    return res.json({
      message: err
    });
  });
});
module.exports = router;