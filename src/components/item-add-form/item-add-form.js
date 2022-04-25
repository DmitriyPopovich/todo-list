import React from 'react'
import './item-add-form.css'

const ItemAddForm = (props) => {
    const {text, updateTextHandler, addTodoHandler} = props
    return (
        <form className="item-add-form d-flex" data-testid="main-div-addform">
            <input
                data-testid="input-addform"
                id="input-addform"
                value={text}
                onChange={(e)=>updateTextHandler(e.target.value)}
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
    )
}
export default ItemAddForm
