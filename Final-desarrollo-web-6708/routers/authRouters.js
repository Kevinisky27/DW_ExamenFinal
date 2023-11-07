const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controllers')

router.post('/productos', products);

module.exports = router;