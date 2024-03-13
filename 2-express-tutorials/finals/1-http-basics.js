const http = require('http')
const  {readFileSync} = require('fs')



const style = readFileSync('./navbar-app/styles.css')
const homePage = readFileSync('./navbar-app/index.html')
const logo = readFileSync('./navbar-app/logo.svg')
const browserApp = readFileSync('./navbar-app/browser-app.js') 

const server = http.createServer((req, res)=> {
    const url = req.url
    if(url === "/"){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(homePage)
        res.end()
    }else if (url === "/styles.css"){
        res.writeHead(200, {"content-type": "text/css"})
        res.write(style)
        res.end()
    }else if (url === "/logo.svg"){
        res.writeHead(200, {"content-type":"image/svg+xml"})
        res.write(logo)
        res.end()
    }else if (url === "/browser-app.js"){
        res.writeHead(200, {"content-type": 'application/json'})
        res.write(browserApp)
        res.end()
    }
})

const PORT = '5000'
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})  