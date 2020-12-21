const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// @desc Create order
// @route post /api/orders/:id
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
    isPaid,
    paidAt,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      shippingPrice,
      taxPrice,
      totalPrice,
      isPaid,
      paidAt,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

// @desc Get order details
// @route get /api/orders/:id
// @access private
const getOrderItems = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    '_id name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Get my orders list
// @route put /api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  if (orders.length > 0) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Orders not found');
  }
});

module.exports = {
  addOrderItems,
  getOrderItems,
  getMyOrders,
};
