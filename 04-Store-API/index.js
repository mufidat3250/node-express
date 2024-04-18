require('dotenv').config()
const logger = require('./utils/logger')
const app = require('./app')
const  connectDB = require('./db/connectDB')

const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 3000

const start = async() => {
    try {
       await connectDB(MONGODB_URL)
        app.listen(PORT, ()=> {
            logger.info(`Server is listening on port ${PORT}`)
        })
    } catch (error) {
        logger.error(error.message)
    }

}
start()