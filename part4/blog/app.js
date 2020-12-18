require('dotenv').config
const express = require('express')
const app = express()
const cors = require('cors')
const config=require('./utils/config')
const logger=require('./utils/logger')
const mongoose = require('mongoose')
const mongoUrl = config.URL
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => logger.info("Connected to Mongoose"))
const Blog=require('./models/blog')
const blogRouter=require('./controllers/blogs')
app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogRouter)
module.exports=app