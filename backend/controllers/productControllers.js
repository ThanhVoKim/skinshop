const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc Fetch all products
// @route Get /api/products
// @access public

const getProducts = asyncHandler(async (req, res) => {
  // const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 4;
  // const page = req.query.pageNumber ? Number(req.query.pageNumber) : 1;
  // const keyword = req.query.keyword
  //   ? {
  //       name: {
  //         $regex: req.query.keyword,
  //         $options: 'i',
  //       },
  //     }
  //   : {};
  // const count = await Product.countDocuments(keyword);
  // const products = await Product.find(keyword)
  //   .limit(pageSize)
  //   .skip(pageSize * (page - 1));
  // res.json({
  //   products,
  //   page,
  //   pages: Math.ceil(count / pageSize),
  // });
  let { limit: limitSize, pageNumber } = req.query;
  const keyword = req.query.keyword
    ? req.query.keyword
    : { $exists: true, $ne: null };
  if (limitSize) {
    const products = await Product.find({ category: keyword })
      .sort({ createdAt: -1 })
      .limit(Number(limitSize));
    res.json(products);
  } else {
    const products = await Product.find({ category: keyword });
    res.json(products);
  }
});

// @desc Create product
// @route post /api/products/:id
// @access private/admin
const createProduct = asyncHandler(async (req, res) => {
  let product = await Product.create({
    name: 'Sample Name',
    price: 99.99,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample Category',
    countInStock: 9,
    numReviews: 9,
    description: 'Sample desc',
  });

  if (product) {
    res.status(201).json({ product });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Fetch single product
// @route Get /api/products/:id
// @access public

const getProductById = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Update user by id
// @route update /api/products/:id
// @access private/admin

const updateProductById = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;

    const updatedProduct = await product.save();

    res.json({ updatedProduct });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Delete user by id
// @route delete /api/products/:id
// @access private/admin

const deleteProductById = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({
      message: 'Delete product',
    });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
