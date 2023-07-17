import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5003/api/students").then((response) => {
            setStudents(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h3 className="text-center align-middle m-5">List of Students</h3>
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
                                <th className=" align-middle" scope="row">
                                    {student._id}
                                </th>
                                <td className="align-middle">{student.name}</td>
                                <td className="align-middle">{student.age}</td>
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
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ margin: ".2rem" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
