const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDB = require('./config/db');
const Product = require('./models/productModel');
const User = require('./models/userModel');
const Order = require('./models/orderModel');
const products = require('./data/products');
const users = require('./data/users');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // await User.deleteMany();
    // await Product.deleteMany();
    // await Order.deleteMany();

    // const createdUsers = await User.insertMany(users);

    // const adminUser = createdUsers[0]._id;

    // const sampleProducts = products.map((p) => ({ ...p, user: adminUser }));

    await Product.insertMany(products);

    console.log(`Data imported!`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(`Data destroyed!`.yellow.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
