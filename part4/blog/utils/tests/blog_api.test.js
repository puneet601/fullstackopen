const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../../app')

const api = supertest(app)
const Blog = require('../../models/blog');
const initialBlogs = [{ title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 },
{
  title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra",
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

afterAll(() => {
  mongoose.connection.close()
})