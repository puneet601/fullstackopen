import React, { useState } from 'react'
const Stats = (props) => {
  if(props.total > 0)
      return (
        <div>
        {props.text} {props.value}
        </div>
    );
    
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
        const all=good+bad+neutral;
    const avg=(good-bad)/(good+bad+neutral);
    const positive=(good * 100 /all)+"%";
  const handleGood = () =>{
     const val=good+1;
      setGood(val);
      // setAll(all+1);
     
  }
  const handleNeutral = () =>{
    const val=neutral+1;
    setNeutral(val);
    // setAll(all+1);
   
  }
const handleBad = () =>{
    const val=bad+1;
    setBad(val); 
    // setAll(all+1);
   
}


    return (
      <div>
       <h1>Give Feedback</h1>
       <button type="button" onClick={handleGood}>Good</button> <button type="button" onClick={handleNeutral} >Neutral</button> <button type="button" onClick={handleBad} >Bad</button>
      <h2>Statistics</h2>
     <Stats value={good} total={all} text="good"/>
     <Stats value={neutral} total={all} text="neutral" />
    <Stats value={bad} total={all} text="bad" /> <Stats value={all} text="All" />
    <Stats value={avg} total={all} text="Average" />
    <Stats value={positive} total={all} text="Positive" />
      </div>
    )
  }
  export default App;