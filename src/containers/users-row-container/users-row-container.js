import React from "react";
import UsersListItem from "../../components/users-list-item";
import PropTypes from "prop-types";
import { deleteUser } from "../../store/reducers/fakeapi-users-reducer/fakeapi-reducer";
import { useDispatch } from "react-redux";

const UsersRowContainer = ({ users }) => {
  const dispatch = useDispatch();
  const buttonRemoveUser = (id) => dispatch(deleteUser(id));
  const buttonAddUserToCart = (id) => console.log("add_to_cart_" + id);

  return (
    <ul className="users-list">
      {users?.map((user) => (
        <UsersListItem
          key={user.id}
          {...user}
          onRemove={buttonRemoveUser}
          onAdd={buttonAddUserToCart}
        />
      ))}
    </ul>
  );
};
UsersRowContainer.propTypes = {
  users: PropTypes.array,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
};
export default UsersRowContainer;
