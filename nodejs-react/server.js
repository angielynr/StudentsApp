require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentController = require("./controllers/studentsController");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.route("/").get(studentController.home);

router
    .route("/api/students")
    .get(studentController.getAllStudents)
    .post(studentController.createStudent);

router
    .route("/api/students/:id")
    .get(studentController.getStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

// database connection
mongoose
    .connect(process.env.DB_CONNECTION_STR)
    .then(() => {
        console.log("Connected to MongoDb");
        app.listen(process.env.HTTP_PORT, (err) => {
            console.log(
                `Server started at http://localhost:${process.env.HTTP_PORT}`
            );
            if (err) console.log("Error" + err);
        });
    })
    .catch((err) => {
        console.log(err);
    });
