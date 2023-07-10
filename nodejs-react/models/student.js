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
