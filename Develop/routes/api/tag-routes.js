const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model:Product,
      attributes: ['product_name','price','stock','category_id']
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

  
    
//what comes after?

router.get('/:id', (req, res) => {
  Tag.findOne({
    attributes: ['id','product_name','price','stock'],
    include: {
      model: Product,
    }
  })  

    //
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data



router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

//need to connect to seeds DB I think.

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

// .then((dbTagdata)) => {
//   return dbTagdata.findAll({ where: { product_id: req.params.id } });
//     })
//     const productTagIds = productTags.map(({ tag_id }) => tag_id);

// }
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

module.exports = router;
