import "./App.modules.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateStudent from "./components/CreateStudent";
import UpdateStudent from "./components/UpdateStudent";
import StudentList from "./components/StudentList";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/students" Component={StudentList} />
                <Route path="/students/create" Component={CreateStudent} />
                <Route path="/students/update" Component={UpdateStudent} />
            </Routes>
        </Router>
    );
}

export default App;
