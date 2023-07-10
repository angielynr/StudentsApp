const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = {
    http: 5003,
    https: 5004,
};

app.use(bodyParser.json());

const router = express.Router();

// router.route("/api/students").get((req, res) => {
//     console.log("test get method");
//     res.status(200).json({
//         data: "test get",
//         message: "get method success",
//     });
// });

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from my-express-app!" });
});

// database connection
mongoose
    .connect("mongodb://127.0.0.1:27017/studentDb")
    .then(() => {
        console.log("Connected to MongoDb");
        app.listen(port.http, (err) => {
            console.log(`Server started at http://localhost:${port.http}`);
            if (err) console.log("Error" + err);
        });
    })
    .catch((err) => {
        console.log(err);
    });
