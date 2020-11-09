import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Countries = ({countries,search,showC,setShowC}) =>{
if(countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length >=10)
return (
  <p>
    please give more specification
  </p>
);
  return(
  <div>{  countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).splice(0,10).map(c => (<p key={c.numericCode}>{c.name}</p>))}</div> 
 
  ) ;
  }
const App = () =>{
    const [countries,setCountries]=useState([])
  const [search,setSearch]=useState('')
  const[showC,setShowC]=useState([])
    const hook =() => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
           
          })
          
      }
     useEffect(hook,[])
const setNewSearch = (event) => {
  setSearch(event.target.value);
}
return(
  <div>
    <form>
      find countries <input value={search} onChange={setNewSearch} />
    </form>
   {console.log('render', countries.length, 'countries') }
   <Countries countries={countries} search={search} showC={showC} setShowC={setShowC} />
  </div>

);
}
export default App
