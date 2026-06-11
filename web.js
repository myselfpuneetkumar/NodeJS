const http = require('http')
const fs = require('fs')


http.createServer((req,resp)=>{
    
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(400,{"content-type":"text/html"})
            resp.write("<h1>no data</h1>");
            resp.end();
            return
        }
        else{
            resp.writeHead(200,{"content-type":"text/html"})
            resp.write(data);
            resp.end();
        }
    })
}).listen(5700)