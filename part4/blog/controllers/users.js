const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Blog=require('../models/blog')
const express = require('express')
usersRouter.get('/', async(request,response) => {
  const users = await User.find({}).populate('blogs')
  response.json(users)
})
usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
  response.json(user.blogs)
})

usersRouter.post('/', async (request, response,next) => {
  try {
    console.log("here")
    const body = request.body
  
    if (body.password.length <= 3) {
      return response.status(400).json({ error: 'Validation error' })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()
    response.json(savedUser)
  }
  catch(exception) {
    next(exception)
  }
})

module.exports = usersRouter