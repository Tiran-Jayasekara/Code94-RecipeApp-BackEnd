require("dotenv").config();
const mongoose = require("mongoose");

//Create Connection With MongoDB Atlas
const database = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = database;
