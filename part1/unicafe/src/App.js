import React, { useState } from 'react'
const Stats = (props) => {
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
    const [avg,setAvg]=useState(0)
    const [all,setAll]=useState(0)
  const handleGood = () =>{
     const val=good + 1;
      setGood(val);
      calOther();
  }
  const handleNeutral = () =>{
    const val=neutral+1;
    setNeutral(val);
 calOther();
}
const handleBad = () =>{
    const val=bad+1;
    setBad(val);
    calOther();    
}
const calOther = () => {
    const newall=good+bad+neutral;
    setAll(newall);
    const newAvg = (good - bad) /all;
    setAvg(newAvg);
}


    return (
      <div>
       <h1>Give Feedback</h1>
       <button type="button" onClick={handleGood}>Good</button> <button type="button" onClick={handleNeutral} >Neutral</button> <button type="button" onClick={handleBad} >Bad</button>
      <h2>Statistics</h2>
     <Stats value={good} text="good"/>
     <Stats value={neutral} text="neutral" />
    <Stats value={bad} text="bad" />
    <Stats value={avg} text="Average" />
      </div>
    )
  }
  export default App;