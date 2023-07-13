const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");

router.route("/").get(studentController.home);

router
    .route("/students")
    .get(studentController.getAllStudents)
    .post(studentController.createStudent);

router
    .route("/students/:id")
    .get(studentController.getStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

router.route("/deletestudent/:id").post(studentController.deleteStudentById);

router.route("/details").get(studentController.getDetails);

module.exports = router;
