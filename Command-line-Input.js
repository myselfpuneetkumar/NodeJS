const http = require('http')
const arg = process.argv;
const port = arg[2];
http.createServer((req,resp)=>{
resp.write("<h1>Server runs on port "+port+"</h1>")
resp.end();
}).listen(arg[2])
console.log(arg[2]);