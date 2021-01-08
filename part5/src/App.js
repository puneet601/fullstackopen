import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import Footer from './components/Footer'
import './App.css';
import Notification from './components/Notification'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState('')
   const [newTitle ,setNewTitle]=  useState('')
  const [newUrl,setNewUrl] =  useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [status,setStatus]=useState(true)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const addBlog = async (event) => {
    event.preventDefault();
    try{ const newBlog = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: 0,
      id: Math.floor(Math.random() * 101)
    }
    const savedBlog = await blogService.create(newBlog)
      setBlogs(blogs.concat(savedBlog))
      setStatus(true)
    setErrorMessage(`A new Blog ${newTitle} by ${newAuthor} was added.`)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)

    }
    catch(exception){
           setErrorMessage(`${exception}`);
      console.log(exception);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } 
  setNewAuthor('')
  setNewTitle('')
    setNewUrl('')
  }
//   const handleBlogChange = () => {
    
//   }
  const handleLogOut = async (event) => {
    event.preventDefault()
    try {
      window.localStorage.clear()
setUser(null)
    }
    catch (exception) {
      setStatus(false)
      setErrorMessage("User doesn't exist or has already logged out")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
      if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      </div>
    )
      }
      else {
        return (
          <div>
            <Notification message={errorMessage} status={status} />
            <h1>Blogs</h1>
            <p>{user.username} logged in</p>
          <button type="button" onClick={handleLogOut}>Logout</button>
                       <h1>Create new Blog</h1>
            <form>
              title:<input type="text" value={newTitle} onChange={({ target }) => setNewTitle(target.value)} />
              author:<input type="text" value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} />
              url:<input type="text" value={newUrl} onChange={({ target }) => setNewUrl(target.value)} />
              <button type="submit" onClick={addBlog}>Add</button>
            </form>
            {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
            )}
          </div>
          
        )
  }

}

export default App