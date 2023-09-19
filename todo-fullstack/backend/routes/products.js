const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const faker = require('faker');


router.get('/seed', async (req, res) => {
  for(let i=0; i<10; i++) {
    let product = new Product({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      price: faker.commerce.price()
    });
    await product.save();
  }
  res.send("Seeded products!");
});

router.get('/', async (req, res) => {
  let products = await Product.find();
  res.json(products);
});


module.exports = router;
