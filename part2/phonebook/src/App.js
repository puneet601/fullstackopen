import React, { useEffect, useState} from "react";
import NewPerson from "./components/AddPerson";
import FilterPerson from "./components/FilterPerson";
import './index.css';
import Persons from "./components/Persons";
import personDB from "./services/personDB";
import Notification from "./components/Notification";

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [status,setStatus]=useState(false);
  const setName = (event) =>setNewName(event.target.value);
  const setNumber = (event) => setNewNumber(event.target.value);
  const checkNames = (person) => (person.name === newName);
  const checkNumbers = (person) => (person.number === newNumber);
  useEffect(() => {
    console.log('effect')
    personDB.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
}, [])
 const handleDeletePerson = (name, id) => {
  
    return () => {
      if (window.confirm(`Do you wante to Delete ${name} ?`)) {
        personDB
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id))
            setStatus(true)
            setErrorMessage(`Deleted ${name}`)             
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
            setNewName("");
            setNewNumber("");
          }).catch(error => {
            setStatus(false)
            setErrorMessage(
         
              `'${name}' cannot be Deleted.`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          }}}
  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 101)
    };
    if(persons.findIndex(checkNames)!==-1) 
    {if(persons.findIndex(checkNumbers) === persons.findIndex(checkNames))
      { setStatus(true)
        setErrorMessage(`${newName}  is already added to phonebook`);
       setTimeout(() => {
         setErrorMessage(null);
       }, 5000);}
       else if(persons.findIndex(checkNumbers) !== persons.findIndex(checkNames))
     { const x=persons.find(checkNames)
      const changednumId=persons.find(q => q.id === x.id) 
     const id=changednumId.id
          const changedNumber={...changednumId,number:newNumber}
        personDB
        .update(id, changedNumber)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response.data))
        }).catch(error => {
          setStatus(false)
          setErrorMessage(         
            `${x.name}  is already added to phonebook`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }
      }
      else {
        personDB
          .create(personObject)
          .then(newPerson => {
            setPersons(persons.concat(newPerson));
            setErrorMessage(`Added ${personObject.name}`);
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            setStatus("true");
            setErrorMessage(`${error.response.data.error}`);
            console.log(error.response.data);
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
  
   

 const handleSearchChange = (event)  =>{
   setNewSearch(event.target.value);
  }
  
  

  return (
    <div>
      <Notification message={errorMessage} status={status} />
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
