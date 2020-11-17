import React from 'react'
const FilterPerson = (props) => {
    
    return (
        <form>
       show with
        <input
            value={props.newSearch}
            onChange={props.handleSearchChange} />
            <br />
        </form> 
    ); 
}

export default FilterPerson