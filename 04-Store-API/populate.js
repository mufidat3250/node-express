require('dotenv').config()
const logger =require('./utils/logger')

const connectDB = require('./db/connectDB')

const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        logger.info('Success!!!')
    } catch (error) {
        logger.error(error.message)
    }
}

start()