import React from "react";
import "./app-header.css";
import PropTypes from "prop-types";

const AppHeader = ({ more, done }) => {
  return (
    <div className="app-header d-flex" data-testid="main-div-header">
      <h2>Todo List</h2>
      <h3 className="list-done">
        <span data-testid="span-header-more">{more}</span> more to do, {done}{" "}
        done
      </h3>
    </div>
  );
};
AppHeader.propTypes = {
  more: PropTypes.number,
  done: PropTypes.number
};
export default AppHeader;
