import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark"
            data-bs-theme="dark"
        >
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">
                    Student App
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link
                                class="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/students">
                                Students
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/students/create">
                                Create
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/students/update">
                                Update
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
