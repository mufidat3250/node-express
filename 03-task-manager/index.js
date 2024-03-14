const express = require('express')
const tasks = require('./routes/tasks.js')
const app = express()
app.use(express.json())

app.use('/api/tasks', tasks)

const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})