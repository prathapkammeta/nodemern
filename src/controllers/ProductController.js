const Product = require('../models/ProductModel');

// Create a new product
const createProduct = async (req, res) => {
    try {
      const { name, description } = req.body;
      let imageUrl;
  
      if (req.file) {
        // If an image file is uploaded from the computer
        imageUrl = req.file.path;
      } else if (req.body.imageUrl) {
        // If an image URL is provided
        imageUrl = req.body.imageUrl;
      }
  
      // Create a new product document
      const product = new Product({
        name,
        description,
        imageUrl,
      });
  
      // Save the product to MongoDB
      await product.save();
  
      return res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  

// Get all products
const getProducts = async (req, res) => {
  try {
    // Fetch all products from MongoDB
    const products = await Product.find();
    
    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific product by ID
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    
    // Find the product by ID in MongoDB
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    return res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, imageUrl } = req.body;
    
    // Find the product by ID in MongoDB and update its fields
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, imageUrl },
      { new: true } // Return the updated product instead of the old one
    );
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    return res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a product by ID
const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    
    // Find the product by ID in MongoDB and remove it
    const product = await Product.findByIdAndRemove(productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
