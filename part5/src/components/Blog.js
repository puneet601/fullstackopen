import React from 'react'
import Togglable from './Toggleable'
import blogService from '../services/blogs'
const Blog = ({ blog, setUpdate,user, blogs, setBlogs,setErrorMessage,setStatus }) => {
   const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const like = async (event) => {
    let id=blog.id
    event.preventDefault()
    const likes = blog.likes + 1
    const newBlog = { ...blog, likes }
    await blogService.update(blog.id, newBlog)
    setBlogs(blogs.map(b => b.id !== id ? b : newBlog ))
    setUpdate(Math.floor(Math.random() * 100))
  }
  const remove = async (event) => {
    event.preventDefault()
    if (window.confirm(`Do you wante to Delete ${blog.title} ?`)) 
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !==blog.id))
     }
    return(
      <div style={blogStyle}>
         {blog.title} {blog.author}
        <Togglable buttonLabel='view'>
         <div>
            {blog.title} <br /> {blog.url} <br /> {blog.author} <br /> likes: {blog.likes} <br /> 
           { console.log(blog.user)}
            <button type="submit" onClick={like}>Like</button>
            <button type="submit" onClick={remove} >Remove</button>
        </div>
</Togglable>
   
  </div>
)}

export default Blog
