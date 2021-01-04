const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Blog=require('../models/blog')
usersRouter.get('/', async(request,response) => {
  const users = await User.find({}).populate('blogs')
  console.log("here")
  response.json(users)
})
usersRouter.post('/', async(request, response) => {
  const body = request.body
  if (body.username.length() < 3 || body.password.length() < 3)
  response.status(404).json("Username and Password should be atleast 3 character long.")
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter