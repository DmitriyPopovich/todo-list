import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import UsersPageContainer from "../../containers/users-page-container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TodoPage from "../../pages/todo-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<TodoPage />} />
      <Route path="/users" element={<UsersPageContainer />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  );
};
export default App;
