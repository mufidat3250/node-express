const express = require('express')
const morgan = require('morgan')
const {products} = require('./data.js')
const generateID = require('../utils.js')
const app = express()

app.use(morgan('tiny'))
app.use(express.static('./public-static'))
app.use(express.json())



generateID(products)

app.get('/api/products',(req, res)=> {
    res.json(products)
})
app.get('/api/products/search', (req, res)=> {
    const {name, limit} = req.query
    let sortedProduct = [...products]
    if(name){
        sortedProduct = sortedProduct.filter((product)=> product.name.startsWith(name))
        return res.status(200).json({success: true, data: sortedProduct})
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit)-1)
        return res.status(200).json(sortedProduct)
    }
    res.status(200).json(sortedProduct)
})
app.get('/api/products/:id', (req, res)=> {
    const id = Number(req.params.id)
    const singleProduct = products.find((product)=> product.id === id)
    if(singleProduct){
        res.json(singleProduct)
    }else{
        res.status(404).send('No found')
    }
})
app.post('/api/products',(req,res)=>{
    const body = req.body
    console.log(body)
    const createdProduct = {...body, id: generateID(products)}
    res.json(products.concat(createdProduct))
})

app.delete('/api/products/:id', (req, res)=>{   

})

app.all('*',(req, res)=> {
    res.status(400).send(`<h1>Opps We cant find this page</h1>`)
})

const PORT = 5000
app.listen(5000, ()=> {
    console.log('Server running on port 5000')
})