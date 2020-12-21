require('dotenv').config()
const PORT = process.env.PORT || 3000
let URL = process.env.URL
if (process.env.NODE_ENV === 'test') {
  console.log("HERERERRE")
    URL = process.env.TEST_MONGODB_URI
  }
module.exports={
    PORT,URL
}
