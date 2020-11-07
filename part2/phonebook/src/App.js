import React, { useState } from 'react'
const Persons = (props) => {
  return (
      <ul>
          {props.persons.filter(person => person.name.toUpperCase().includes(props.newSearch.toUpperCase())).map(person => (
          <Person key={person.id} name={person.name} number={person.number}  /> ))}
      </ul> 
  ) 
}
const Person = (props) => {
  return (
    <li>{props.name}  {props.number} </li>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456',id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
  ])
  const [newSearch , setnewSearch]=useState('')
  const [personsToShow,setpersonsToShow] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')
 
  const setName = (event) =>setNewName(event.target.value);
  const setnewNumber = (event) => setNumber(event.target.value);
  const checkduplicates = (person) => person.name === newName;
  const addName = (event) => {
    event.preventDefault();
    if(persons.findIndex(checkduplicates)!==-1)
    { console.log("no");
      window.alert(`${newName}  is already added to phonebook`);
    }
    else{
      const personObject ={
        name:newName,
        number:number,
      id: Math.floor(Math.random() * 101)
      }
      setPersons([...persons, personObject])
      setNewName('');
        }
    
  }
  const handleSearchChange = (event)  =>{
    setnewSearch(event.target.value);
  }
  
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form><div>
        fliter shown with  <input
            value={newSearch}
            onChange={handleSearchChange} />
            <br />   </div>
        <div>
          name: <input value={newName} onChange={setName} />
        </div>
        <div>number: <input value={number} type="number"  onChange={setnewNumber} /></div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}
        newSearch={newSearch} />
    </div>
  )
}

export default App
