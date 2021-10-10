const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("connected to the database");
  } catch (error) {
    console.log("Error connecting to the database");
  }
};
