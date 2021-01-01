const blogRouter= require('express').Router()
const { request } = require('express')
const { response } = require('../app')
const app = require('../app')
const blog = require('../models/blog')
const Blog=require('../models/blog')

blogRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})
blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  response.json(blog)
  })
  
  blogRouter.post('/', async(request, response) => {
    const body = request.body
   const newBlog = new Blog({
      "title": body.title,
      "author": body.author,
      "url": body.url,
      "likes": body.likes || 0
    })
      const savedBlog = await newBlog.save()
      response.json(savedBlog)
    
    
  })
blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  console.log("deleted")
  response.status(204).end
  })
blogRouter.put('/:id', async (request, response) => {
  const body = request.body
  const newblog = {
    "title" :body.title,
    "author": body.author,
    "url": body.url,
    "likes": body.likes + 1 
  }
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, newblog,{new:true})
  response.json(updatedBlog)
})
  module.exports=blogRouter