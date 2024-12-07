const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); // Use backticks here
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold); // Use backticks here
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
