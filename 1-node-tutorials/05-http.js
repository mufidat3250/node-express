const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
    return
  }
  if(req.url == "/about"){
    res.end('Welcome to about page');
  }else {
    res.end(`
        <h1>Opps</h1>
        We can't seams to find this page you are looking for
    `);
  }
});
server.listen(5000);
