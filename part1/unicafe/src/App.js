import React, { useState } from 'react'
const Stats = (props) => {

      return (
        <div>
         {props.value}
        </div>
    );
    
}
const Statistics = (props) => {
  if(props.all>0)
  return (
    <table>
     <tr><td>good</td> <td><Stats value={props.good} total={props.all} text="good"/></td></tr>
     <tr><td>neutral</td><td><Stats value={props.neutral} total={props.all} text="neutral" /></td></tr>
   <tr><td>bad</td><td> <Stats value={props.bad} total={props.all} text="bad" /></td></tr> 
   <tr><td>all</td><td><Stats value={props.all} text="All" /></td></tr>
    <tr><td>Average</td><td><Stats value={props.avg} total={props.all} text="Average" /></td></tr>
    <tr><td>positive</td><td> <Stats value={props.positive} total={props.all} text="Positive" /></td></tr>
   
    </table>
  );
  else
  return (
<p>No feedbacks given.</p>
  );
  }
const Button = (props) => {
return (
  <button type="button" onClick={props.handler}>{props.name}</button>
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
       <Button handler={handleGood} name="good" />
       <Button handler={handleNeutral} name="neutral" />
       <Button handler={handleBad} name="bad" />
        <h2>Statistics</h2>
     <Statistics all={all} good={good} bad={bad} neutral={neutral} all={all} avg={avg} positive={positive}/>
      </div>
    )
  }
  export default App;