import React from 'react'
const AddPerson = (props) => {
return(<form  onSubmit={props.addPerson}>
 <input placeholder="Enter the name of contact" value={props.newName} onChange={props.setName} required />
 <input placeholder="Enter the number of contact" value={props.newNumber} type="number"  onChange={props.setNumber} required />
<button type="submit" onClick={props.addName}>Add</button>
       
      </form>);
      }
      
export default AddPerson