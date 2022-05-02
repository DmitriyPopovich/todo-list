import React from "react";
import UsersTable from "../../components/users-table";
import { useSelector } from "react-redux";
import { getCartData } from "../../store/reducers/fakeapi-users-reducer/selectors";

const UsersTableContainer = () => {
  const cartUsers = useSelector(getCartData);

  return cartUsers.length ? (
    <UsersTable items={cartUsers} />
  ) : (
    <h3>No data in cart</h3>
  );
};
export default UsersTableContainer;
