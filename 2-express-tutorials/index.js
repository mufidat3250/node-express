
const express = require('express')
const people = require('./routes/people')
const login = require('./routes/auth')
const app = express()

app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)

const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})