const fs = require('fs')
const http = require('http');
http.createServer((req,resp)=>{
// let headerData;
//  fs.readFile("header.html",'utf-8',(err,Collectdata)=>{
//         if(err){
//             resp.writeHead(500,{"content-type":"text/html"})
//             resp.end("internal server error")
//             return false
//         }

//         headerData = Collectdata;
        
//         // resp.write(data)
//         // resp.end();
//     })

let headerData = fs.readFileSync('files/header.html','utf-8')
let footerData = fs.readFileSync('files/footer.html','utf-8')



let file = "/home"
if(req.url!='/'){
    file = req.url;
}
console.log(file+".html")

    if(req.url != '/style.css'){
    fs.readFile("files"+file+".html",'utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/html"})
            resp.end("internal server error")
            return false
        }
               console.log(headerData)

        resp.write(headerData+""+data+""+footerData)
        resp.end();
    })
}else if(req.url == '/style.css'){

    fs.readFile("files/style.css",'utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/html"})
            resp.end("css not found")
            return false
        }
        resp.writeHead(200,{"content-type":"text/css"})
        
        resp.end(data);
    })
}

 
    
}).listen(5500)