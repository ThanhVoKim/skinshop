const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    })

    console.log(`MongoDB connected: ${connect.connection.name}`.cyan.underline)
  } catch (error) {
    console.error("Error connect DB" + error);
    process.exit(1)
  }
}

module.exports = connectDB;