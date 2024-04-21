const express = require('express')
const jobRouter = require('./routes/job')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const {userExtractor, tokenExtractor} = require('./middleware/authentication')
const app = express()

app.use(express.json())
app.use(tokenExtractor)

app.use('/api/v1/auth', authRouter)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/jobs', userExtractor, jobRouter)

module.exports  = app