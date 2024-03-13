const express = require('express')
const app = express()

app.use(express.static('./public'))



app.all('*', (req, res)=> {
    res.status(404).send(`<h1>Page not found</h1>`)
})

const PORT = 5000
app.listen(5000, ()=> {
    console.log(`Server running on port ${5000}`)
})