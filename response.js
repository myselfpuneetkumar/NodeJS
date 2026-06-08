const http = require('http')
let date = Date();
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.write(
        
        `
        <title>dresponse.js</title>
        <h2>this is the server response  </h2> `+date+` ok`
    )
    console.log("server started",date)
    resp.end()
    // process.abort()
}).listen(3000) 