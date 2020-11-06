import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',id:1}
  ])
  const [ newName, setNewName ] = useState('')
  const setName = (event) => {setNewName(event.target.value)}
  const addName = (event) => {
    event.preventDefault();
    const personObject ={
      name:newName,
    id: Math.floor(Math.random() * 101)
    }
    setPersons([...persons, personObject])
    console.log(persons);
  }
  const Persons = () => {
    return(
    <div>{persons.map(person => <p id={person.id}>{person.name}</p>)} </div>
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={setName} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons />
  
    </div>
  )
}

export default App
