const router = require('express').Router();
const { where } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

 //connect to which DB here?


router.get('/:id', (req, res) => {

  Category.findOne({
    include: {
      model:Product,
      String: ['id','product_name','price', 'stock', 'category_id']
    }
  // find one category by its `id` value... how do I do this and what is the importance. Is putting it in the string the same?
  // be sure to include its associated Products
})
.then(data => res.json(data))
.catch(err => res.json(err))
});
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
 
  // update a category by its `id` value
  Category.update(req.body,{
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

module.exports = router;
