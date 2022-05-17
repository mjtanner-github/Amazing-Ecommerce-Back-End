const router = require('express').Router();
const { Category } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all categories.
router.get('/', async (req, res) => {
  try {
      const allCategories = await Category.findAll();
      res.status(200).json(allCategories);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get one category by id.
router.get('/:id', async (req, res) => {
  try {
    const oneCategoryById = await Category.findByPk(req.params.id);
    res.status(200).json(oneCategoryById);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

// Post one category.
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Update one category.
router.put('/:id', async (req, res) => {
  try {
    const categoryToUpdate = await Category.update(
      req.body,
      { where: { id: req.params.id }});
    res.status(200).json(categoryToUpdate);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Delete one category by id.
router.delete('/:id', async (req, res) => {
  try {
    const categoryToDelete = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryToDelete) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
