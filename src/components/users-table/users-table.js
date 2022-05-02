import React from "react";
import "./users-table.css";
import PropTypes from "prop-types";
import UsersTableRowContainer from "../../containers/users-table-row-container";

const UsersTable = ({ items }) => {
  return (
    <div className="shopping-cart-table">
      <h2>User Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Count orers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <UsersTableRowContainer key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="total">Total Orders: 0</div>
    </div>
  );
};
UsersTable.propTypes = {
  items: PropTypes.array
};

export default UsersTable;
