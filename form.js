const http = require('http')
const fs = require('fs')



http.createServer((req,resp)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
        
        if(err){
            resp.writeHead(500,{'content-type':'text/plain'})
            resp.write("internal server error")
            resp.end();
            return;
        }

        if(req.url=='/'){
            resp.writeHead(200,{'content-type':'text/html'})
            resp.write(data);
            resp.end();
            return;
        }
        else if(req.url == '/submit'){
            resp.write("Data Submitted")
            resp.end();
        }
        else{
            resp.end();
        }
    })
}).listen(3000)


// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'text/html'})
//     console.log(req.url)
//     if(req.url == "/"){
// resp.write(`
//     <form action="/submit" method="post">
//     <input type="text" placeholder="Enter Name" />
//     <input type="text" placeholder="Enter Email" />
//     <button>Submit</button>
//     </form>
//     `)

// }
// else if(req.url == '/submit'){
//     resp.write("Data Submitted")
// }
// resp.end();

// }).listen(3000)