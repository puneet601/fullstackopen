import React,{useState} from 'react'
import Togglable from './Toggleable'
import blogService from '../services/blogs'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

const Blog = ({ blog, setUpdate, blogs, setBlogs,setShowUserProfile }) => {
   const blogStyle = {
    // paddingTop: 10,
    // paddingLeft: 2,
    // borderWidth: 1,
    //  marginBottom: 5
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
      {await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !==blog.id))}
  }
 
  let blogUser=blog.user
   return( 
      <div style={blogStyle} className="blog" > 
       <h2>{blog.title}</h2>
       <span onClick={() => setShowUserProfile(blogUser)}>{blog.author}</span>
        <Togglable buttonLabel='view'>
         <div>
            {blog.title} <br /> {blog.url} <br /> {blog.author} <br /> likes: {blog.likes} <br /> 
           
            <button type="submit" onClick={like}><FavoriteTwoToneIcon /></button>
            <button type="submit" onClick={remove} ><DeleteOutlineTwoToneIcon /></button>
        </div>
</Togglable>
   
  </div>
    )
  
}

export default Blog
