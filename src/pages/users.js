import React from "react";
import AppHeader from "../components/app-header";
import ErrorBoundary from "../components/error-boundry";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import UsersListContainer from "../containers/users-list-container";
import PropTypes from "prop-types";
import UsersTableContainer from "../containers/users-table-container";

const UsersPage = ({ status, error }) => {
  return (
    <>
      <AppHeader />
      <div className="todo-app">
        <ErrorBoundary>
          {status === "loading" && <Spinner />}
          {error && <ErrorIndicator />}
          <UsersListContainer />
          <UsersTableContainer />
        </ErrorBoundary>
      </div>
    </>
  );
};
UsersPage.propTypes = {
  status: PropTypes.any.isRequired,
  error: PropTypes.any.isRequired
};

export default UsersPage;
