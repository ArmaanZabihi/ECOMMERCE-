const router = require('express').Router();
const { where } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});
Category.findAll({
  include: {
    model: Product,
  
  }
})
 //connect to which DB here?


router.get('/:id', (req, res) => {
  // find one category by its `id` value... how do I do this and what is the importance. Is putting it in the string the same?
  // be sure to include its associated Products
});
Category.findOne({
  include: {
    model:Product,
    String: ['id','product_name','price', 'stock', 'category_id']
  }
})
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name
  })
});

router.put('/:id', (req, res) => {
 
  // update a category by its `id` value
  Category.update(req.body,{
    where: {
      id: req.params.id
    }
  })
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where:{
      id: req.params.id
    }
  })
});

module.exports = router;
