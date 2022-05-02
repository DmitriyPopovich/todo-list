import React from "react";
import UsersListItem from "../users-list-item";
import PropTypes from "prop-types";

const UsersRow = ({ users, onRemove }) => {
  return (
    <ul className="users-list">
      {users?.map((user) => (
        <UsersListItem key={user.id} {...user} onRemove={onRemove} />
      ))}
    </ul>
  );
};
UsersRow.propTypes = {
  users: PropTypes.object,
  onRemove: PropTypes.func
};
export default UsersRow;
