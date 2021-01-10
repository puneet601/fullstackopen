const blogRouter= require('express').Router()
const Blog=require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { request } = require('express')
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})
blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id).populate('user', { username: 1, name: 1 })
  response.json(blog)
})
  
  
blogRouter.post('/', async (request, response) => {
  const body = request.body
  const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    if (body.title === undefined || body.url === undefined || body.author === undefined)
    response.status(400).end()
   const newBlog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
     likes: body.likes || 0,
     user: user._id
   })
   
  const savedBlog = await newBlog.save()
  user.blogs = user.blogs.concat(newBlog._id)
   await user.save()
  console.log(newBlog.user)
      response.json(savedBlog)
  })
  
blogRouter.delete('/:id', async (request, response,next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({
      error: 'token missing or invalid'
    })
  }
  try {
    const blog = await Blog.findById(request.params.id)

    if (blog.user.toString() === decodedToken.id.toString()) {
      await blog.remove()
      response.status(204).end()
    } else {
      response.status(401).end()
    }
  } catch (exception) {
    next(exception)
  }
})
 
blogRouter.put('/:id', async (request, response) => {
  const { author, title, url, likes } = request.body;
  const blog = {
    author,
    title,
    url,
    likes
  };

  console.log(blog);
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true
  });

  console.log("updatedBlog: ", updatedBlog);

  response.json(updatedBlog.toJSON());
});
blogRouter.delete('/:id', async (request, response) => {
  const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
  const user = await User.findById(decodedToken.id)
  const blog = await Blog.findById(request.params.id)
  if(blog.user === user.id)
    {await Blog.findByIdAndDelete(request.params.id)
    response.status(204)}
  else
    response.json("You are not authorized to delete this Blog.")
  
  })
  module.exports=blogRouter