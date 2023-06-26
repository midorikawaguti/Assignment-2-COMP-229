
const express = require('express');
const productController = require('./../controllers/product.controller.js');
const router = express.Router();

// router.param('id', tourController.checkID);

router
.route('/')
.get(productController.getAllProducts)
.post( productController.createProduct)
.delete(productController.deleteAllProducts);

router
.route('/:id')
.get(productController.getProduct)
.patch(productController.updateProduct)
.delete(productController.deleteProduct);


router.get('/search', productController.searchProductByName);


module.exports = router;