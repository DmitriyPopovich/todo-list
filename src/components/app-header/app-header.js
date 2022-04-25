import React from 'react'
import './app-header.css'

const AppHeader = (props) => {
    const {more, done} = props
    return(
        <div className="app-header d-flex" data-testid="main-div-header">
            <h2>Todo List</h2>
            <h3 className="list-done"><span data-testid="span-header-more">{more}</span> more to do, {done} done</h3>
        </div>
    )
}
export default AppHeader