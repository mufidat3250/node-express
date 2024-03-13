const {products} = require('./data.js')
const app = require('express')()

app.get('/', (req, res)=> {
    res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>")
})

app.get('/api/products', (req, res)=> {
    res.json(products)
})
app.get('/api/products/:id', (req, res)=>{
    const id = Number(req.params.id)
    const product = products.find((product)=> product.id === id)
    if(!product){
        return res.status(404).send(`<p>Product not found</p>`).end()
    }
     res.json(findProduct).end()
})

app.get('/api/v1/search', (req, res)=> {
    const {name, limit} = req.query
    let queriedProducts = [...products] 
    if(name){
       queriedProducts = queriedProducts.filter((product)=> {
            if(product.name.startsWith(name)){
                return product
            }
        })
     return res.json(queriedProducts)
    }
    if(limit){
       queriedProducts = products.slice(0, Number(limit))
    return res.json(queriedProducts)
    }
    if(queriedProducts.length >= 0 ){
        return res.status(200).json({success:true, data:[]})
    }
     res.json(queriedProducts)
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1>URL not found</h1>')
})

const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})