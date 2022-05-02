import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../store/reducers/fakeapi-users-reducer/selectors";
import {
  deleteUser,
  fetchUsers
} from "../../store/reducers/fakeapi-users-reducer/fakeapi-reducer";
import UsersRow from "../../components/users-row";
import UsersLoadButton from "../../components/users-load-button";

const UsersListContainer = () => {
  const users = useSelector(getUsersData);
  const dispatch = useDispatch();
  const buttonFetchUsers = () => dispatch(fetchUsers());
  const buttonRemoveUser = (id) => dispatch(deleteUser(id));
  return users.length ? (
    <UsersRow users={users} onRemove={buttonRemoveUser} />
  ) : (
    <UsersLoadButton fetchFunc={buttonFetchUsers} />
  );
};
export default UsersListContainer;
