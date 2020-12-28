import React from 'react'
const FilterPerson = (props) => {
    
    return (
        <form>
            Sort :
             
            <input
                placeholder="Enter an alphabet"
            value={props.newSearch}
            onChange={props.handleSearchChange} />
            <br />
        </form> 
    ); 
}

export default FilterPerson