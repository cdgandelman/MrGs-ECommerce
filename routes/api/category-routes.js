const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  }).then((categoryData) => {
    res.json(categoryData);
  });
    // be sure to include its associated Products
  });
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  }).then((categoryData) => {
    res.json(categoryData);
  });
});
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    res.json(err);
  });
});
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    res.json(err);
  });
});
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    res.json(err);
  });
});


module.exports = router;
