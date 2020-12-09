require('dotenv/types').config()
const PORT=process.env.PORT || 3000
const URL=process.env.URL
module.exports={
    PORT,URL
}
