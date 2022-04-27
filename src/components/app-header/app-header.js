import React from "react";
import "./app-header.css";
import PropTypes from "prop-types";

const AppHeader = (props) => {
  const { more, done } = props;
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
  more: PropTypes.string.isRequired,
  done: PropTypes.string.isRequired
};
export default AppHeader;
