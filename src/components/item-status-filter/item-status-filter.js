import React from 'react'
import './item-status-filter.css'

const ItemStatusFilter = (props) => {
    const {buttons, onChangeFilter} = props
    return(
        <div className="btn-group" data-testid="main-div-itemstatusfilter">
            {
                buttons.map(({name, label, clazz}) => {
                    return (
                        <button
                            type="button"
                            className={clazz}
                            id={name}
                            key={name}
                            onClick={onChangeFilter}>
                            {label}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default ItemStatusFilter