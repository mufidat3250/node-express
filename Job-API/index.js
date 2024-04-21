require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/connection')
const logger = require('./utils/logger')

const start = async() => {
    const PORT = process.env.PORT || 3000
    try {
            await connectDB(process.env.MONGODB_URL)
        app.listen(PORT, ()=> {
            logger.info(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()