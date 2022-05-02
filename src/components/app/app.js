import React from "react";
import { Routes, Route } from "react-router-dom";
import { TodoPage } from "../../pages";
import "./app.css";
import UsersPageContainer from "../../containers/users-page-container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'font-awesome/css/font-awesome.min.css'

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
