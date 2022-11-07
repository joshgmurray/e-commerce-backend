const router = require('express').Router();
const { Category, Product } = require('../../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categories = await Category.findAll();
  res.status(200).json(categories)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findAll({
    where: {
      id: {
        [Op.eq]: req.params.id
      }
    }
  })
  res.status(200).json(category)
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create(req.body);
  res.status(200).json(category)
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(category)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id
    },
    // truncate: true
  });
  res.status(200).json(category)
});

module.exports = router;
