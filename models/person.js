require('dotenv').config();
const mongoose = require('mongoose');
const url =process.env.URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(res => console.log("Connected to mongo."))
.catch(error => {
  console.log(error.message);
}
  )
const personSchema=new mongoose.Schema({
    name:String,
    number:String
    })
 
personSchema.set('toJSON',{
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  module.exports=mongoose.model('Person',personSchema)