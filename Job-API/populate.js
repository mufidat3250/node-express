require('dotenv').config()
const User = require('./models/User')
const Job = require('./models/Job')
const logger = require('./utils/logger')

const connectDB = require('./db/connection')

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await User.deleteMany()
        await Job.deleteMany()
        logger.info('Successfully deleted all item in the database')
    } catch (error) {
        logger.error(error.message)
    }
}
start()