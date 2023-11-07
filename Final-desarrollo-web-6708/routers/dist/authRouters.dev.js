"use strict";

var express = require('express');

var router = express.Router();

var products = require('../controllers/product.controllers');

router.post('/productos', products);
module.exports = router;