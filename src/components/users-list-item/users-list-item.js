import React from "react";
import "./users-list-item.css";
import PropTypes from "prop-types";

const UsersListItem = ({ id, name, email, phone, onRemove }) => {
  return (
    <li>
      <div className="users-list-item">
        <div className="user-ldetails">
          <span className="user-ltitle">{name}</span>
          <div className="user-lauthor">{email}</div>
          <div className="user-lprice">{phone}</div>
          <button onClick={() => {}} className="btn btn-info add-to-cart">
            Add to Table
          </button>
          <button
            onClick={() => onRemove(id)}
            className="btn btn-warning rm-rom-list"
          >
            Remove from list
          </button>
        </div>
      </div>
    </li>
  );
};
UsersListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  onRemove: PropTypes.func
};
export default UsersListItem;
