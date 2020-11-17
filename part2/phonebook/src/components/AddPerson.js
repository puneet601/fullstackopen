import React from 'react'
const AddPerson = (props) => {
return(<form onSubmit={props.addPerson}>
<div>
          Name: <input value={props.newName} onChange={props.setName} required />
        </div>
        <div>Number: <input value={props.newNumber} type="number"  onChange={props.setNumber} required /></div>
       
        <button type="submit" onClick={props.addName}>Add</button>
       
      </form>);
      }
      
export default AddPerson