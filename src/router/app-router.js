import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersPageContainer from "../containers/users-page-container";
import TodoPage from "../pages/todo-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<TodoPage />} />
      <Route path="/users" element={<UsersPageContainer />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  );
};
export default AppRouter;
