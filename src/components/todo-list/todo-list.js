import React from 'react'
import TodoListItemContainer from '../../containers/todo-list-item-container/'
import './todo-list.css'

const TodoList = (props) => {
    const {items} = props
    return(
        <ul className="list-group todo-list" id="todo-list-records">
            {items.map(
                (item) => {
                    return (<TodoListItemContainer key={item.id} {...item}/>)
                }
            )}
        </ul>
    )
}
export default TodoList