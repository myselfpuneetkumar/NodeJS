const http = require('http')
http.createServer((req,resp)=>{


    if(req.url == '/login'){
resp.write(`<h1>This is Login Page...</h1>`)
}
else{
        resp.write(`<h1>This is Home Page...</h1>`)

    }
console.log(req.headers.host)
resp.end();
}).listen(5500)