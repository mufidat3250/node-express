require('dotenv').config()
const logger = require('./utils/logger')
const app = require('./app')

const start = () => {
    try {
        connectDB()
        app.listen()
    } catch (error) {
        console.log(error)
    }

}