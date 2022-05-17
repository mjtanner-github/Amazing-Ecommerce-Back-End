const router = require('express').Router();
const { Tag } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get all tags
router.get('/', async (req, res) => {
  try {
      const allTags = await Tag.findAll();
      res.status(200).json(allTags);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Post one tag.
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Update one tag.
router.put('/:id', async (req, res) => {
  try {
    const tagToUpdate = await Tag.update(
      req.body,
      { where: { id: req.params.id }});
    res.status(200).json(tagToUpdate);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag by id.
router.get('/:id', async (req, res) => {
  try {
      const oneTagById = await Tag.findByPk(req.params.id);
      res.status(200).json(oneTagById);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Delete one tag by id.
router.delete('/:id', async (req, res) => {
  try {
    const tagToDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagToDelete) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
