import React, { useState } from 'react'
import Person from './Person'
const Persons = (props) => {
  return (
      <ul>
          {props.persons.filter(person => person.name.toUpperCase().includes(props.newSearch.toUpperCase())).map(person => (
          <Person key={person.id} name={person.name} number={person.number}  /> ))}
      </ul> 
  ) 
}
export default Persons