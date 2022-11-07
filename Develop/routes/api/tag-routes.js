const router = require('express').Router();
const { Op } = require('sequelize');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll();
  res.status(200).json(tags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findOne({
    where: {
      id: {
        [Op.eq]: req.params.id
      }
    }
  });
  return res.status(200).json(tag);
});

router.post('/', async (req, res) => {
  // create a new tag
  const tag = Tag.create(req.body);
  res.status(200).json(tag);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tag = Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(tag);
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  ProductTag.destroy({
    where: {
      tag_id: req.params.id
    }
  }).then((tagId) => {
    console.log('delete tagid from product_tag table', tagId);
    return Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => {
      res.json(data)
    }).catch((err) => {
      res.json(err)
    })
  });
});

module.exports = router;
