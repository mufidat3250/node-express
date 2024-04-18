const express = require('express')
require('express-async-errors')
const notFoundMiddleWare = require('./middleWare/notFound')
const errorHandlerMiddleWare = require('./middleWare/errorHandlerMiddleWare')
const productRouter = require('./routes/productsRoute')

const app = express()
app.use(express.json())

app.use('/api/v1/products', productRouter)


app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)


module.exports = app