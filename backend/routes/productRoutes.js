const express = require('express');
const {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProduct,
} = require('../controllers/productControllers');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProductById)
  .delete(protect, admin, deleteProductById);

module.exports = router;
