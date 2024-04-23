const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res._write("Welcome to home page")
    }
    if(req.url==='/about'){
        res.end("About")
    }
})
server.listen(7000)