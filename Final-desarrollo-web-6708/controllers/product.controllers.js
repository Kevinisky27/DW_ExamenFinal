const express = require("express");
const userSchema = require("../models/product.models");
const router = express.Router();


//Obtener productos  -- GET
router.get('/productos', (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((err) => res.json({message: err}));
});

//Obtener producto por id -- GET
router.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  userSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((err) => res.json({message: err}));
});

//Crear producto  -- POST
router.post('/productos', async (req, res) => {
  const product = userSchema(req.body);
  
  product
  .save()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => res.json({message: err}));
});

// Actualizar producto -- PUT
router.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { Nombre, Precio, Existencia } = req.body;

  userSchema
  .updateOne({ _id: id }, { $set: {Nombre, Precio, Existencia }})
  .then((data) => res.json(data))
  .catch((err) => res.json({message: err}));
});

// Eliminar un producto por id  -- DELETE
router.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  userSchema
  .deleteOne({ _id: id })
  .then((data) => res.json(data))
  .catch((err) => res.json({message: err}));
});

module.exports = router;