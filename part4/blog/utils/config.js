require('dotenv').config()
const PORT = process.env.PORT || 3001
let URL = process.env.URL
if (process.env.NODE_ENV === 'test') {
  URL = process.env.TEST_MONGODB_URI
  }
module.exports={
    PORT,URL
}
