require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/person')
const express=require('express')
const morgan = require('morgan')
const app = express()
const cors=require('cors');
const person = require('./models/person');



app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(morgan(':method :url :status :res[header] - :response-time ms :data'))
morgan.token('data', function getId (req) {
  return JSON.stringify({"name": req.body.name || '-',"number":req.body.number || '-'})
})  

// const password = process.argv[2]


  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })
  app.get('/api/info',(request,response) => {
    var dateObject=new Date()
    Person.count({}, function(err, count){
      var info="Phonebook has " + count +" people" + dateObject;
      response.json(info)
      })  
        
  })
  app.get('/api/persons/:id',(req,res) => {
    
     Person.findById( req.params.id).then(person => {res.json(person)})
     
  })
  app.delete('/api/persons/:id',(req,res) => {
   
  Person.findByIdAndRemove(req.params.id)
   res.status(204).end()
})
app.post('/api/persons', (request, response) => {
  const body=request.body
  const name=body.name
  const number=body.number
    if(!body.name){   console.log("Please fill name")
    return response.status(404).json({
    error:'Please fill name'
    })
  }
  let isUnique;
   Person.find({"name":name,"number":number},function (err, person) {
    if(person)
    isUnique=0;
    else
    isUnique=1;
  })
  if(isUnique ==0)
  {   console.log("name must be unique");
    return response.status(400).json({ 
     
      error: 'name must be unique' 
    })

  }
   
    const person=new Person({
      name: name, 
      number: number,
      id: Math.floor(Math.random() * 101)
      
  })
    // console.log(perObject)
    // persons=persons.concat(perObject)
    person.save().then(result => {
      response.json(result);
      // mongoose.connection.close()
    })
  //  response.json(persons)
  })
const PORT = process.env.PORT ||  3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)