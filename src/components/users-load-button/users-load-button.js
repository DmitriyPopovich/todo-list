import React from "react";
import PropTypes from "prop-types";

const UsersLoadButton = ({ fetchFunc }) => {
  return (
    <button onClick={fetchFunc} className="btn btn-danger add-to-cart">
      Load Users
    </button>
  );
};
UsersLoadButton.propTypes = {
  fetchFunc: PropTypes.func
};
export default UsersLoadButton;
