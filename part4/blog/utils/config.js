require('dotenv').config()
const PORT = 3000
let URL = process.env.URL
if (process.env.NODE_ENV === 'test') {
  URL = process.env.TEST_MONGODB_URI
  console.log("testing")
  }
module.exports={
    PORT,URL
}
