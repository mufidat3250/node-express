const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.end('Home page')
})

const PORT = 5000
app.listen(5000, ()=> {
    console.log(`Server running on port ${5000}`)
})