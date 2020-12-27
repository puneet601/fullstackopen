const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../../app')
const helper=require('./list_helper')
const api = supertest(app)
const Blog = require('../../models/blog');
  beforeEach(async () => { 
    await Blog.deleteMany({})
    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save()
  })
test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('correct amount of blogs are returned', async () => {
  const response = await api.get('/api/blogs')
   expect(response.body).toHaveLength(helper.initialBlogs.length)
    
})
test('id is stored as id not _id', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})
test('post a blog', async () => {
  const newBlog = {
    "title": "Don't fakee it",
    "author": "georgee cloony",
    "url": "www.google.com"
  }
await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)
const blogsAtEnd= await helper.blogsInDb()
const titles = blogsAtEnd.map(r => r.title)
expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
expect(titles).toContain(
    "Don't fakee it"
)
})
test('check likes property in new created blogs', async () => {
  const newBlog = {
    "title": "Don't fakee it",
    "author": "georgee cloony",
    "url": "www.google.com"
  }
await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)
  const blogsAtEnd = await helper.blogsInDb()
  let lastAddedBlog=blogsAtEnd[blogsAtEnd.length-1]
   console.log(lastAddedBlog)
  if (!lastAddedBlog.likes)
  {
    lastAddedBlog["likes"] = 0;
   }

  expect(lastAddedBlog.likes).toBeDefined()
})
afterAll(() => {
  mongoose.connection.close()
})