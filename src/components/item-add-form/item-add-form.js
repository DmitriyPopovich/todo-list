import React from "react";
import "./item-add-form.css";
import PropTypes from "prop-types";

const ItemAddForm = ({ text, updateTextHandler, addTodoHandler }) => {
  return (
    <form className="item-add-form d-flex" data-testid="main-div-addform">
      <input
        data-testid="input-addform"
        id="input-addform"
        value={text}
        onChange={(e) => updateTextHandler(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Enter Task"
      />
      <button
        data-testid="btn-addform"
        id="btn-addform"
        onClick={addTodoHandler}
        type="button"
        className="btn btn-outline-secondary"
      >
        Add Item
      </button>
    </form>
  );
};
ItemAddForm.propTypes = {
  text: PropTypes.string.isRequired,
  updateTextHandler: PropTypes.func.isRequired,
  addTodoHandler: PropTypes.func.isRequired
};
export default ItemAddForm;
