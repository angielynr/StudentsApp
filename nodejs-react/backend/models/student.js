const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter student name"],
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: false,
        },
        dateOfBirth: {
            type: Date, //YYYY-MM-DD
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: [true, "Please enter address"],
        },
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
