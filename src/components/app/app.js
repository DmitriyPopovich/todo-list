import React from "react";
import ItemAddFormContainer from "../../containers/item-add-form-container";
import TodoListContainer from "../../containers/todo-list-container";
import AppHeaderContainer from "../../containers/app-header-container";
import SearchBox from "../search-box";
import "./app.css";

const App = () => {
  return (
    <div className="todo-app" data-testid="main-div-app">
      <AppHeaderContainer />
      <SearchBox />
      <TodoListContainer />
      <ItemAddFormContainer />
    </div>
  );
};
export default App;
