const http = require('http')
const fs = require('fs')
const queryString = require('querystring')
const { log } = require('console')



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
                let dataString = "my name is "+readableData.name+" my email is "+readableData.email;
                console.log(dataString);

                //sync method
                // fs.writeFileSync("text/"+readableData.name+".txt",dataString)
                // console.log("Successfully created");

                fs.writeFile("text/"+readableData.name+".txt",dataString,'utf-8',(err,data)=>{
                if(err){
                    resp.end("internal server error");
                    return false;
                }
                else{
                    console.log("Successfully created");
                }
                })
                
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
