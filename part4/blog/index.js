const app=require('./app')
const http=require('http')
const config=require('./utils/config')
const logger=require('./utils/logger')
const server=http.createServer(app)
const PORT=process.env.PORT || 3000
server.listen(PORT,() => {
    logger.info(`Server has started at ${PORT}`)
})