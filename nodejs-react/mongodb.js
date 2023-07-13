const mongoose = require("mongoose");

// database connection
const connectDB = () =>
    mongoose
        .connect(process.env.DB_CONNECTION_STR)
        .then(() => {
            console.log("Connected to MongoDb");
        })
        .catch((err) => {
            console.log(err);
        });

module.exports = connectDB;
