import { useState, useEffect, ChangeEvent, useContext } from "react";
import Dropdown from "react-dropdown";
import { Outlet } from "react-router-dom";
import "react-dropdown/style.css";
import { getSubjects } from "../../data";
import "./navbar.style.css";
import { SubjectContext } from "../../contexts/subject_context";

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
      <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
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
          {/* <button type="button" className="btn btn-light">
            FR/EN
          </button> */}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
