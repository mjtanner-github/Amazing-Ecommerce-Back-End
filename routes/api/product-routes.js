const router = require('express').Router();
const { Product } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all products
router.get('/', async (req, res) => {
  try {
      const allProducts = await Product.findAll();
      res.status(200).json(allProducts);
    } catch (err) {
      res.status(500).json(err);
    }

});

// Get one product by id.
router.get('/:id', async (req, res) => {
  try {
      const oneProductById = await Product.findByPk(req.params.id);
      res.status(200).json(oneProductById);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Post one product.
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Update one product.
router.put('/:id', async (req, res) => {
  try {
    const productToUpdate = await Product.update(
      req.body,
      { where: { id: req.params.id }});
    res.status(200).json(productToUpdate);
  }
  catch (err) {
    res.status(500).json(err);
  }
});


// Delete one product by id.
router.delete('/:id', async (req, res) => {
  try {
    const productToDelete = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productToDelete) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
