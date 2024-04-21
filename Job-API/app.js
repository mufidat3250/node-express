const express = require('express')
const jobRouter = require('./routes/job')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const {userExtractor, tokenExtractor, errorHandler} = require('./middleware')
const app = express()
const cors = require('cors')
const xss = require('xss-clean')
const expressLimit = require('express-rate-limit')
const helmet = require('helmet') 


app.use(cors())
app.use(helmet());
app.use(xss())
app.use(express.json())
app.use(tokenExtractor)

app.use('/api/v1/auth', authRouter)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/jobs', userExtractor, jobRouter)

app.use(errorHandler)

module.exports  = app