require('dotenv').config
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const config=require('./utils/config')
const logger = require('./utils/logger')
const middleware=require('./utils/middleware')
const mongoose = require('mongoose')
const mongoUrl = config.URL
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => logger.info("Connected to Mongoose"))
const Blog = require('./models/blog')
const User=require('./models/user')
const usersRouter = require('./controllers/users')
const blogRouter = require('./controllers/blogs')
const loginRouter = require('./controllers/login')
app.use(middleware.tokenExtractor)
app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.use(middleware.requestLogger)
app.use(express.static('build'))
app.use('/api/users', usersRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/login', loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports=app