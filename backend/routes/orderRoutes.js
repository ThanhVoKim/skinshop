const express = require('express');
const {
  addOrderItems,
  getMyOrders,
} = require('../controllers/orderControllers');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
module.exports = router;
