const mongoose = require('mongoose');
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
const password = process.argv[2]

const url =
`mongodb+srv://admin-Puneet:${password}@cluster0.jtfpp.mongodb.net/phonebook?retryWrites=true`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
const PhonebookSchema=new mongoose.Schema({
    name:String,
    number:String,
    id:Number
})
const Phonebook=mongoose.model('Phonebook',PhonebookSchema);
if (process.argv.length > 3) {
    const newName=process.argv[3]
    const newNumber=process.argv[4]
    const phonebook=new Phonebook({
        name: newName, 
        number: newNumber,
        id: Math.floor(Math.random() * 101)
    })
    phonebook.save().then(result => {
        console.log(`Added ${newName} number ${newNumber} to phonebook.`)
        mongoose.connection.close()
      })
     
    }

else if(process.argv.length === 3){
    
    Phonebook.find({}).then(result => {
        console.log("phonebook:");
      result.forEach(record => {
          console.log(record.name +" " + record.number);
      },
      mongoose.connection.close())
      
    });
}
