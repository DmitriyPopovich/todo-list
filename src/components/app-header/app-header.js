import React from "react";
import "./app-header.css";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to="/">App</NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/" activeclassname={"active"}>
            Todo
          </NavLink>
        </li>
      </ul>
      <ul className="d-flex">
        <li>
          <NavLink to="/users" activeclassname={"active"}>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppHeader;
