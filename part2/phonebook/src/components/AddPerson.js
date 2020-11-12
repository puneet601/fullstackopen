import React, { useState } from 'react'
const AddPerson = (props) => {
return(<form onSubmit={props.addPerson}>
<div>
          name: <input value={props.newName} onChange={props.setName} />
        </div>
        <div>number: <input value={props.number} type="number"  onChange={props.setNumber} /></div>
       
        <button type="submit" onClick={props.addName}>add</button>
       
      </form>);
      }
      
export default AddPerson