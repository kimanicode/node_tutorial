const http = require('http')

const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        res.end('welcome to jua properties')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>Error 404</h1> 
        <a href='/'>Home</a>`)
})

server.listen(5000)