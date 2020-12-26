const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../../app')

const api = supertest(app)
const Blog = require('../../models/blog');
const initialBlogs = [
  { title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 },
{  title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra",
  url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0
  }];
  beforeEach(async () => { 
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[1])
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
   expect(response.body).toHaveLength(initialBlogs.length)
    
})
test('id is stored as id not _id', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})
test('post a blog', async () => {
  const newBlog = {
    "title": "Don't fakee it",
    "author": "georgee cloony",
    "url": "www.google.com",
    "likes": 69
}
await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)
const response = await api.get('/api/blogs')
const contents = response.body.map(r => r.title)
expect(response.body).toHaveLength(initialBlogs.length + 1)
expect(contents).toContain(
    "Don't fakee it"
)
})
afterAll(() => {
  mongoose.connection.close()
})