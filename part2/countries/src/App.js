import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countries,search}) =>{
  const [showCountry,setShowCountry]=useState();
  const showDetail = (event) =>{
    console.log(event.target.value);
    const cont = countries.filter(country =>
      country.name.includes(event.target.value)
    );
    console.log("cont: ", cont);
    setShowCountry(cont[0]);
  }
if(countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length >=10)
return (
  <p>
    please give more specification
  </p>
);
  else if(showCountry!== undefined){
    console.log(showCountry);
    return(
      <Detail country={showCountry} />
    )
  }
  return(
  <div>{  countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
    .splice(0,10).map(c => (
      (<DisplayCountry c={c} showDetail={showDetail} />) 
      ))}</div> 
 
  ) ;
  }
  const DisplayCountry= ({c,showDetail}) =>{
    console.log(c);
   return(
    <div key={c.numericCode}>
<p>{c.name}</p><button value={c.name} onClick={showDetail}>show</button>
    </div>
  )
} 
  
const Detail = ({country}) => {
  const [weather,setWeather]=useState()
  
  const weatherhook =() => {
    console.log('effect')
    axios
      .get(process.env.REACT_APP_YOUR_ACESS_URL +country.name)
      .then(response => {
         setWeather(response.data)})
      console.log("weather");
      console.log(weather); 
  }
 useEffect(weatherhook,[])
  return(
<div>
  <h1>{country.name}</h1>
  <p>capital {country.capital}</p>
  <p>population {country.population}</p>
  <h2>Spoken Languages</h2>
  <ul>
  {country.languages.map(lang => <li>{lang.name}</li>)}
  </ul>
<img src = {country.flag} alt="loading ..." style={{width:"300px",height:"200px"}} />
  <h2>Weather in {country.name}</h2>
  <Weather weather={weather} />

</div>
  )
}
const Weather = ({weather}) => {
  if(weather!==undefined)
return (
  <div><p><b>temperature : </b>{weather.current.temperature} Celcius
  <img src={weather.current.weather_icons} style={{marginBottom:"30px"}} alt="loading..." />
  <br />
 <b>wind : </b> {weather.current.wind_speed} mph {weather.current.wind_diretcion}
  </p> </div>
)
else 
return (
  <div>Weather undefined</div>
)
}

const App = () =>{
    const [countries,setCountries]=useState([])
  const [search,setSearch]=useState('')
 
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
  
   <Countries countries={countries} search={search} />
  </div>

);
}
export default App
