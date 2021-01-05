const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../../app')
const helper=require('./list_helper')
const api = supertest(app)
const Blog = require('../../models/blog')
const bcrypt = require('bcrypt')
const User = require('../../models/user')
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
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbWV0aGluIiwiaWQiOiI1ZmYyYzE3MGVjOTEyMDM0ZTg5N2Q5NTEiLCJpYXQiOjE2MDk3NDcxMDV9.w-KeEXs_Q3DABckNsx2aZsosTMucWfi-MaFNYQimdkw"
describe('addition of a new blog', () => {
  test('succeeds with valid data', async () => {
    const newBlog = {
      "title": "Don't fakee it",
      "author": "georgee cloony",
      "url": "www.google.com"
    }
    await api.post('/api/blogs').set({ "Authorization": `Bearer ${token}` }).send(newBlog).expect(200)
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

describe('when there is initially one user in db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
  
        const passwordHash = await bcrypt.hash('sekret', 10)
        const user = new User({ username: 'root', passwordHash })
  
        await user.save()
    })
  
    test('creation succeeds with a fresh username', async () => {
      const usersAtStart = await helper.usersInDb()
     
    
      const newUser = {
        username: 'puneet',
        name: 'Puneet Jattana',
        password: 'BlackSwan'
      }
  
      await api
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/)
  
      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
  
      const usernames = usersAtEnd.map(u => u.username)
      expect(usernames).toContain(newUser.username)
    })
    test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
          username: 'root',
          name: 'Superuser',
          password: 'salainen'
        }
    
        const result = await api
          .post('/api/users')
          .send(newUser)
          .expect(400)
          .expect('Content-Type', /application\/json/)
    
        expect(result.body.error).toContain('`username` to be unique')
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
      })
  })
afterAll(() => {
  mongoose.connection.close()
})