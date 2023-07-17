import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        Axios.get("http://localhost:5003/api/students")
            .then((response) => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
            });
    };

    const handleDelete = (studentId) => {
        Axios.delete(`http://localhost:5003/api/students/${studentId}`)
            .then((response) => {
                // Filter out the deleted student from the state
                setStudents((prevStudents) =>
                    prevStudents.filter((student) => student._id !== studentId)
                );
                console.log("Student deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
            });
    };

    const handleUpdate = (student) => {
        setSelectedStudent(student);
        setModalShow(true);
    };

    const handleModalClose = () => {
        setSelectedStudent(null);
        setModalShow(false);
    };

    const handleModalSubmit = (updatedStudent) => {
        if (updatedStudent._id) {
            // Update existing student
            Axios.put(
                `http://localhost:5003/api/students/${updatedStudent._id}`,
                updatedStudent
            )
                .then((response) => {
                    alert("Student successfully updated");
                    setModalShow(false);
                    fetchStudents(); // Fetch updated students after successful update
                })
                .catch((error) => {
                    console.error("Error updating student:", error);
                });
        } else {
            // Add new student
            Axios.post("http://localhost:5003/api/students", updatedStudent)
                .then((response) => {
                    alert("Student successfully added");
                    setModalShow(false);
                    fetchStudents(); // Fetch updated students after successful addition
                })
                .catch((error) => {
                    console.error("Error adding student:", error);
                });
        }
    };

    return (
        <div className="container">
            <div className="mt-5 mb-3 d-flex justify-content-between">
                <h2>List of Students</h2>
                <Button
                    onClick={() => setModalShow(true)}
                    type="button"
                    className="btn btn-danger"
                    style={{ margin: ".2rem" }}
                >
                    Add Student
                </Button>
            </div>
            {students.length === 0 ? (
                <h4 className="text-center">No students on file.</h4>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Address</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <th className="align-middle" scope="row">
                                        {student._id}
                                    </th>
                                    <td className="align-middle">
                                        {student.name}
                                    </td>
                                    <td className="align-middle">
                                        {student.age}
                                    </td>
                                    <td className="align-middle">
                                        {student.gender}
                                    </td>
                                    <td className="align-middle">
                                        {student.dateOfBirth}
                                    </td>
                                    <td className="align-middle">
                                        {student.address}
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            style={{ margin: ".2rem" }}
                                            onClick={() =>
                                                handleUpdate(student)
                                            }
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            style={{ margin: ".2rem" }}
                                            onClick={() =>
                                                handleDelete(student._id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={handleModalClose}
                student={selectedStudent}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

function MyVerticallyCenteredModal({ show, onHide, student, onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (student) {
            // Populate the form fields if editing an existing student
            setName(student.name);
            setAge(student.age);
            setGender(student.gender);
            setBirthday(student.dateOfBirth);
            setAddress(student.address);
        } else {
            // Clear the form fields if adding a new student
            setName("");
            setAge("");
            setGender("");
            setBirthday("");
            setAddress("");
        }
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStudent = {
            _id: student ? student._id : undefined,
            name,
            age,
            gender,
            dateOfBirth: birthday,
            address,
        };
        onSubmit(updatedStudent);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {student ? "Update Student" : "Add New Student"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row" onSubmit={handleSubmit}>
                    <div className="mb-3 col-md-12">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Birthday</label>
                        <input
                            type="date"
                            className="form-control"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary m-2">
                            {student ? "Update" : "Submit"}
                        </button>
                        <button className="btn btn-danger" onClick={onHide}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default StudentList;
