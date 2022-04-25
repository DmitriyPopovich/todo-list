import React from 'react'
import './search-input.css'

const SearchInput = (props) => {
    const {term, onChange} = props
    return(
        <input
            data-testid="input-search"
            value={term}
            onChange={onChange}
            placeholder="search"
        />
    )
}
export default SearchInput