import React from "react";
import PropTypes from "prop-types";

const UsersTableRow = (item) => {
  const { title, count, total } = item;
  return (
    <tr>
      <td>{title}</td>
      <td>{count}</td>
      <td>{total}</td>
      <td>
        <button
          onClick={() => {}}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          onClick={() => {}}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          onClick={() => {}}
          className="btn btn-outline-warning btn-sm float-right"
        >
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
  );
};
UsersTableRow.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number,
  total: PropTypes.number
};

export default UsersTableRow;
