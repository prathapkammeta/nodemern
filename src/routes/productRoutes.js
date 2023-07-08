const express = require('express');
const router = express.Router();
const ProductController=require('../controllers/ProductController')
// Create a new product
router.post('/', ProductController.createProduct);

// Get all products
router.get('/', ProductController.getProducts);

// Get a specific product by ID
router.get('/:productId', ProductController.getProductById);

// Update a product by ID
router.put('/:productId', ProductController.updateProductById);

// Delete a product by ID
router.delete('/:productId', ProductController.deleteProductById);

module.exports = router;
