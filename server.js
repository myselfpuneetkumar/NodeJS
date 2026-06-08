const http = require('http');

http.createServer((req,res)=>{
    res.end("<h1>hello world.....</h1>")
}).listen(4800)