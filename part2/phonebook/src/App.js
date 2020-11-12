import React, { useState,useEffect} from "react";
import axios from 'axios';
import NewPerson from "./components/AddPerson";
import FilterPerson from "./components/FilterPerson";
import Person from "./components/Person"
import Persons from "./components/Persons";
import personDB from "./services/personDB";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456',id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:4 }
  ])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

 
  const setName = (event) =>setNewName(event.target.value);
  const setNumber = (event) => setNewNumber(event.target.value);
  const checkduplicates = (person) => person.name === newName;
  

  const handleDeletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Do you wante to Delete ${name} ?`)) {
        personDB
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id));
            setErrorMessage(`Cannot Delete ${name}`);
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            setPersons(persons.filter(n => n.name !== name));
            setErrorMessage(`The user ${name} has already been removed from the server.`);
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
  };

  
 
  const addName = (event) => {
    event.preventDefault();
    if(persons.findIndex(checkduplicates)!==-1)
    { console.log("no");
      window.alert(`${newName}  is already added to phonebook`);
    }
    else{
      const personObject ={
        name:newName,
        number:newNumber,
      id: Math.floor(Math.random() * 101)
      }
      
      personDB
      .create(personObject)
      .then(response => {
        setPersons([...persons, personObject])
      setNewName('')
      setNewName('')
      })
        }
  
  }
 const handleSearchChange = (event)  =>{
    setNewSearch(event.target.value);
  }
  
 

  return (
    <div>
      <h2>Phonebook</h2>   
     <FilterPerson newSearch={newSearch} handleSearchChange={handleSearchChange} />
        <NewPerson newName={newName} setName={setName} number={newNumber} setNumber={setNumber} addName={addName}  handleDeletePerson={handleDeletePerson} />
        <h2>Numbers</h2>

              <Persons
        persons={persons}
        newSearch={newSearch}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App
