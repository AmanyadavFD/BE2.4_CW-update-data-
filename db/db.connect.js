const mongoose = require("mongoose");
require("dotenv").config();
// const mongoosUrl =
// "mongodb+srv://revison-db:3Q5nFhEcVNzFoN2T@redux-data.8oxbf.mongodb.net/?retryWrites=true&w=majority&appName=redux-data";

const mongoosUrl = process.env.MONGODB;
// revison-db
// 3Q5nFhEcVNzFoN2T

const initalizeDataBase = async () => {
  await mongoose
    .connect(mongoosUrl)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = initalizeDataBase;
