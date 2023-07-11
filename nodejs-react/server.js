require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from StudentApp!" });
});

router.get("/api/students", async (req, res) => {
    try {
        const student = await Student.find(res.body);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
});

router.post("/api/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
});

router.put("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if (!student) {
            return res.status(404).json({
                message: `cannot find student with ID: ${id}`,
            });
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
});

router.delete("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({
                message: `cannot find student with ID: ${id}`,
            });
        }
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
});

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
