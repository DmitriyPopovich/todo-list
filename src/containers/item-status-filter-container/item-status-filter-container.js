import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFilterValue} from '../../store/reducers/todo-reducer/selectors'
import {setFilter} from '../../store/reducers/todo-reducer'
import ItemStatusFilter from "../../components/item-status-filter";

const ItemStatusFilterContainer = () => {
    const buttons_data = [
        {'name':'all', label:'All'},
        {'name':'active', label:'Active'},
        {'name':'done', label:'Done'},
    ]
    const filter = useSelector(getFilterValue)
    const dispatch = useDispatch()
    const onChangeFilter = (e) => {
        dispatch(setFilter(e.target.id))
    }
    const addFilterDataHelper = (data, filter) => {
        //прямое изменение данных
        for(let i=0; i<data.length; i++){
            if(data[i].name === filter) data[i].clazz = 'btn btn-info'
            else data[i].clazz = 'btn btn-outline-secondary'
        }
    }
    addFilterDataHelper(buttons_data, filter)
    return(
        <ItemStatusFilter buttons={buttons_data} onChangeFilter={onChangeFilter}/>
    )
}
export default ItemStatusFilterContainer