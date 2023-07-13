const Student = require("../models/student");

const home = (req, res) => {
    res.status(200).json({ message: "Hello from StudentApp!" });
};

const getAllStudents = async (req, res) => {
    try {
        const student = await Student.find(res.body);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
};

const getStudent = async (req, res) => {
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
};

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateStudent = async (req, res) => {
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
};

const deleteStudent = async (req, res) => {
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
};

const deleteStudentById = async (req, res) => {
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
};

const getDetails = async (req, res) => {
    res.status(200).json({
        port: `${process.env.HTTP_PORT}`,
    });
};

module.exports = {
    home,
    getAllStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    deleteStudentById,
    getDetails,
};
