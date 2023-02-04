const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});
  Tag.findAll({
    include: {
      model:Product,
      String: ['product_name','price','stock','category_id']
    }
  })
  
    
//what comes after?

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});
Tag.findOne({
  String: ['id','product_name','price','stock'],
  model: Product,
  models:['Product']
  //
})

router.post('/', (req, res) => {
  // create a new tag
});
Tag.create({
  tag_name: req.body.tag_name
})
//need to connect to seeds DB I think.

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});
Tag.update(req.body, {
  where: {
    id: req.params.id,
  },
})
// .then((dbTagdata)) => {
//   return dbTagdata.findAll({ where: { product_id: req.params.id } });
//     })
//     const productTagIds = productTags.map(({ tag_id }) => tag_id);

// }
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
