const http = require('http')
const fs = require('fs')
const queryString = require('querystring')



http.createServer((req, resp) => {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { 'content-type': 'text/plain' })
            resp.write("internal server error")
            resp.end();
            return;
        }

        if (req.url == '/') {
            resp.writeHead(200, { 'content-type': 'text/html' })
            resp.write(data);
            resp.end();
            return;
        }
        else if (req.url == '/submit') {
            
            let dataBody = [];
            req.on('data',(chunk)=> {
                dataBody.push(chunk);
            })
            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData)
                console.log(readableData);
                resp.write("ok")
            })
            resp.writeHead(200, { 'content-type': 'text/html' })
           
            resp.end(`Data Submitted Successfully`);
        }
        else {
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
