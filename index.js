const express=require('express')
const morgan = require('morgan')
const app = express()
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[header] - :response-time ms :data'))
morgan.token('data', function getId (req) {
  return JSON.stringify({"name": req.body.name || '-',"number":req.body.number || '-'})
})  
  
let persons=[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
 

  
  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  app.get('/api/info',(request,response) => {
    const dateObject=new Date()
      const info="Phonebook has 4 people\\n" + dateObject
      response.json(info)
  })
  app.get('/api/persons/:id',(req,res) => {
      uid=Number(req.params.id);
     const person= persons.find(person => person.id === uid)
     res.json(person)
  })
  app.delete('/api/persons/:id',(req,res) => {
   const uid=Number(req.params.id)
  persons= persons.filter(person => person.id !== uid)
   res.status(204).end()
})
app.post('/api/persons', (request, response) => {
  const body=request.body
  const name=body.name
  
  if(!body.name){
    return response.status(404).json({
      error:'Please fill name'
    })
  }
  let isUnique = persons.findIndex(person => person.name === name)
  if(isUnique !== -1)
  { 
    return response.status(400).json({ 
      error: 'name must be unique' 
    })

  }
   const id = persons.length > 0
    ? Math.max(...persons.map(n => n.id)) 
    : 0
    const perObject={
      name:body.name,
      number:body.number,
      id:id+1
    }
    console.log(perObject)
    persons=persons.concat(perObject)
   response.json(persons)
  })
const PORT = process.env.PORT ||  3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)