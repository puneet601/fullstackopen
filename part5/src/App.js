import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import LoginForm from './components/LoginForm'
import NewBlogForm from './components/NewBlog'
import SigninForm from './components/SignUp'
import Profile from './components/Profile'
import userService from './services/users'
import './App.css'
import Notification from './components/Notification'
const App = () => {

  const padding = {
    padding: 5
  }
  const [loginVisible, setLoginVisible] = useState(false)
  const [signinVisible,setSigninVisible]=useState(false)
   const [newBlogVisible, setNewBlogVisible] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [status, setStatus] = useState(true)
  const [update,setUpdate]=useState(null)
  const [showUserProfile, setShowUserProfile] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
     setBlogs(blogs)
    )
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [update])
  
  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }
    const hideSignIn = { display: signinVisible ? 'none' : '' }
    const showSignIn = { display: signinVisible ? '' : 'none' }
    return (
      <div className="container">    
                 <div style={hideWhenVisible}>
          <button onClick={() => {
            setLoginVisible(true)
          setSigninVisible(false)}}>log in</button></div><div style={hideSignIn}>
          <button onClick={() => {
            setSigninVisible(true)
          setLoginVisible(false)}}>Sign in</button>
        </div>
        <div style={showSignIn}>
          <SigninForm
            setStatus={setStatus}
            setErrorMessage={setErrorMessage}
           /></div>
        <div style={showWhenVisible}>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
          <Notification status={status} message={errorMessage} />
        </div>
      </div>
    )
  }
  const showProfile = () => {   
    return (<div class="container">
      <Profile showUserProfile={showUserProfile} getUserBlogs={getUsersBlogs} setShowUserProfile={setShowUserProfile} />
    </div>)
  }
  const blogForm = () => {
    const hideWhenVisible = { display: newBlogVisible ? 'none' : '' }
    const showWhenVisible = { display: newBlogVisible ? '' : 'none' }

    return (
      <div className="container">
      
        <Notification status={status} message={errorMessage} />
        
        <h1>Blogs</h1>
        <p>{user.username} logged in</p>
        <div style={hideWhenVisible}>
          <button onClick={() => setNewBlogVisible(true)}>New Blog</button>
        </div>
        <div style={showWhenVisible}>
          <NewBlogForm showWhenVisible={showWhenVisible} setNewBlogVisible={setNewBlogVisible}
            newTitle={newTitle} setNewTitle={setNewTitle}
            newAuthor={newAuthor} setNewAuthor={setNewAuthor}
            newUrl={newUrl} setNewUrl={setNewUrl} addBlog={addBlog} />
        </div>
        <button type="button" onClick={handleLogOut}>Logout</button>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} user={user} setShowUserProfile={setShowUserProfile} setUpdate={setUpdate} blogs={blogs} setBlogs={setBlogs} setStatus={setStatus} setErrorMessage={setErrorMessage} />
        )}
      </div>
       
    )
  }
  const getUsersBlogs = async (showUserProfile) => {
    // event.preventDefault()
    const userData = await userService.getBlogs(showUserProfile.id)
    console.log(userData)
    return userData
  }
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
      setStatus(false)
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const addBlog = async (event) => {
    event.preventDefault();
    try {
      const newBlog = {
        user: user,
        title: newTitle,
        author: newAuthor,
        url: newUrl,
        likes: 0,
        id: Math.floor(Math.random() * 101)
      }
      const auth = user.token
      const savedBlog = await blogService.create(newBlog,auth)
      setBlogs(blogs.concat(savedBlog))
      setStatus(true)
      setErrorMessage(`A new Blog ${newTitle} by ${newAuthor} was added.`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    }
    catch (exception) {
      setErrorMessage(`${exception}`);
      console.log(exception);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
    setNewAuthor('')
    setNewTitle('')
    setNewUrl('')
    setNewBlogVisible(false)
  }
 
  const handleLogOut = async (event) => {
    event.preventDefault()
    try { 
      window.localStorage.removeItem(user)
      setUser(null)
      
      window.localStorage.clear()

    }
    catch (exception) {
      setStatus(false)
      setErrorMessage("User doesn't exist or has already logged out")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  } 
  if (showUserProfile !== '') {
    return (<div>
     <div>{showProfile()}</div>
   </div>)   
}
      else
    return (
      <div>
        {user === null ? loginForm() : blogForm() }
        </div>
)
}

export default App