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
describe('when there is initially some blogs saved', () => {
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
})



describe('addition of a new blog', () => {
  test('succeeds with valid data', async () => {
    const newBlog = {
      "title": "Don't fakee it",
      "author": "georgee cloony",
      "url": "www.google.com"
    }
    await api.post('/api/blogs').send(newBlog).expect(200)
      .expect('Content-Type', /application\/json/)
    const blogsAtEnd = await helper.blogsInDb()
    const titles = blogsAtEnd.map(r => r.title)
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
    expect(titles).toContain(
      "Don't fakee it"
    )
  })
  test('fails with status code 400 if data invaild', async () => {
    const newBlog = {
      "author": "xc"
    }
    await api.post('/api/blogs').send(newBlog).expect(400)
    const blogAtEnd = await helper.blogsInDb()
    expect(blogAtEnd).toHaveLength(helper.initialBlogs.length)
  
  })
  test('id is stored as id not _id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })
  test('check likes property in new created blogs', async () => {
    const newBlog = {
      "title": "Don't fakee it",
      "author": "georgee cloony",
      "url": "www.google.com"
    }
    await api.post('/api/blogs').send(newBlog).expect(200)
    const blogsAtEnd = await helper.blogsInDb()
    let lastAddedBlog = blogsAtEnd[blogsAtEnd.length - 1]
    if (!lastAddedBlog.likes) {
      lastAddedBlog["likes"] = 0;
    }

    expect(lastAddedBlog.likes).toBeDefined()
  })
})
describe('deletion', () => {
  test('deletes if id is valid and return 204', async () => {
    let blogsAtStart = await helper.blogsInDb()
    let blogToBeDeleted = blogsAtStart[0]
    await api.delete(`/api/blogs/${blogToBeDeleted.id}`).expect(204)
    const blogAtEnd = await helper.blogsInDb()
    expect(blogAtEnd).toHaveLength(helper.initialBlogs.length - 1)
    const url = blogAtEnd.map(b => b.url);
    expect(url).not.toContain(blogToBeDeleted.url)
  
  })
})

afterAll(() => {
  mongoose.connection.close()
})