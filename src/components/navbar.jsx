import { useState, useEffect, ChangeEvent, useContext } from "react";
import Dropdown from "react-dropdown";
import { Link, Outlet } from "react-router-dom";
import "react-dropdown/style.css";
import "../styles/navbar.style.css";
import { getSubjects } from "../data";
import { SubjectContext } from "../contexts/subject";

const Navbar = () => {
  const [subjects, setSubjects] = useState([""]);
  const { setCurrentSubject } = useContext(SubjectContext);

  const onChange = (event) => {
    setCurrentSubject(event.value);
  };

  useEffect(() => {
    return setSubjects(getSubjects());
  }, []);

  return (
    <div>
      <header className="container d-flex flex-wrap justify-content-md-between py-3 mb-4 border-bottom">
        <div className="">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <h1>Nimbyngo</h1>
          </a>
        </div>
        {/* <Dropdown
          options={subjects}
          value={subjects[0]}
          placeholder="Select an option"
          onChange={onChange}
        /> */}

        <div className="col-md-3 text-end">
          <Link className="btn btn-outline-dark" to="admin">
            Login{" "}
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
