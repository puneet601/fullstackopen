import React from 'react'
const FilterPerson = (props) => {
    
    return (
        <form >
            <h2>Sort :</h2> <input
                placeholder="Enter an alphabet"
            value={props.newSearch}
            onChange={props.handleSearchChange} />
            <br />
        </form> 
    ); 
}

export default FilterPerson