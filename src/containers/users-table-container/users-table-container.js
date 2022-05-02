import React from "react";
import UsersTable from "../../components/users-table";
import {useDispatch, useSelector} from "react-redux";

const UsersTableContainer = () => {
    const dispatch = useDispatch()
    // const cartUsers = useSelector()

    return (
        <UsersTable />
    );
};


export default UsersTableContainer;
