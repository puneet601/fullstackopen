import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link,useParams,useRouteMatch
} from "react-router-dom"
import CreateNew from './components/create'
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])
  
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
    return (
    <Router>
      <div>
        <Link to="/anecdotes" style={padding}>anecdotes</Link>
        <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdotes={anecdotes} />
        </Route>
        <Route path="/anecdotes">
            <AnecdoteList anecdotes={anecdotes} />            
          </Route>
        </Switch>
      <Link to="/create">Create</Link>
        <Switch>
          <Route path="/create">
            <CreateNew addNew={addNew} />
          </Route>
        </Switch>
        <Link to="/about" style={padding}>about</Link>
        <Switch>
          <Route path="/about">
            <About />              
          </Route>
        </Switch>
      </div>
      </Router>
  )
}
const Anecdote = ({ anecdotes }) => {
  const id = useParams().id
  const a =anecdotes.find(n => Number(n.id) === Number(id)) 
  return (
    <div>
      {a.content}
    </div>
  )
}
const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id} >
          <Link to={`/anecdotes/${anecdote.id}`}>
            {anecdote.content})
            </Link>
        </li>
      )}
    </ul>
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)


const App = () => {
    return (   
    <div>
      <h1>Software anecdotes</h1>
      <Menu />       
      <Footer />
      </div>
  )
}

export default App;
