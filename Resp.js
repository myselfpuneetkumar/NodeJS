const http =require('http')
const userData = [
    {
        name:"puneet",
        age:15
        
    },
    {
        name:"Daksh",
        age:15
        
    },
    {
        name:"puneet",
        age:3
        
    },
    {
        name:"Buggu",
        age:6        
    }
]

http.createServer((req,resp)=>{
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(4000)