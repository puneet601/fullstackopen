import React, { useState } from "react";
import NewPerson from "./components/AddPerson";
import FilterPerson from "./components/FilterPerson";
import Persons from "./components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456',id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
  ])
  const [newSearch , setnewSearch]=useState('')
  // const [personsToShow,setpersonsToShow] = useState([])
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
      
     
        <FilterPerson newSearch={newSearch} handleSearchChange={handleSearchChange} />
        <NewPerson newName={newName} setName={setName} number={number} setnewNumber={setnewNumber} addName={addName} />
        <h2>Numbers</h2>
      <Persons persons={persons}
        newSearch={newSearch} />
    </div>
  )
}

export default App
