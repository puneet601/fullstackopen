import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points,setPoints]=useState([0,0,0,0,0,0])
  const [max,setMax]=useState(0)
  const displayAnecdote = () =>{
    
    let x=Math.random();
 
    let l=(props.anecdotes).length;
    x=Math.floor(x*( l-1));
    setSelected(x);
  }
  const vote = () => {
    const copy=[...points]
    copy[selected]+=1;
    setPoints(copy);
    setMax(points.indexOf(Math.max(...points)));
  }
  return (
    <div>
    <p><h1>Anecdote of the Day </h1>
    {props.anecdotes[selected]} <br />has  {points[selected]} votes</p> 
      <button type="button" onClick={vote}>Vote</button>
      <button type="button" onClick={displayAnecdote}>Next Anecdote</button>
      <p>
        <h1>Anecdote with Most Votes</h1>
        {props.anecdotes[max]} <br />has  {points[max]} votes</p> 
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)