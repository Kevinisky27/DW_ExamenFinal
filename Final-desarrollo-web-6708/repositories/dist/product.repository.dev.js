"use strict";

var Products = require('../models/product.models');

var findAll = function findAll() {
  var product;
  return regeneratorRuntime.async(function findAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Products.findAll());

        case 2:
          product = _context.sent;
          return _context.abrupt("return", product);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var findByEmail = function findByEmail(email) {
  return regeneratorRuntime.async(function findByEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Product.findByEmail(email));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var create = function create(user) {
  var createdUser;
  return regeneratorRuntime.async(function create$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Product.create(user));

        case 2:
          createdUser = _context3.sent;
          return _context3.abrupt("return", createdUser);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  findAll: findAll,
  findByEmail: findByEmail,
  create: create
};