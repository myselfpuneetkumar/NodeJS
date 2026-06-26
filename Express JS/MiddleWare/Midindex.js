import express from 'express'
const app = express();

// function checkRoute(req,resp,next){
//    console.log("user is accessing "+req.url+" page");
//    next();
   
// // }
// app.use((req,resp,next)=>{
//    console.log("user is accessing "+req.url+" page");
//    next();
   
// })

// function ageCheck(req,resp,next){
//     if(!req.query.age || req.query.age<18){
//         resp.send("You cannot access this page....")
//     }
//     else{
//     next();
//     }

// }


function checkMiddlewareAge(req,resp,next){
    if (!req.query.age||req.query.age<18){
        resp.send("You are not allowed")

    }
    else{
        next();
    }
}
function checkMiddlewarURL(req,resp,next){
    console.log(req.url);
    
        next();
}
// function ipCheck(req,resp,next){

//     const ip = req.socket.remoteAddress
//     console.log(ip)
//     if(ip.includes('192.168.69.30')){
//         resp.send("You cannot access this page....")
//     }
//     else{
//     next();
//     }

// }

// app.use(ipCheck)
// app.use(checkMiddlewareAge)

app.get('/',(req,resp)=>{
    resp.send("home")
})
app.get('/login',checkMiddlewarURL,(req,resp)=>{
    resp.send("Login")
})
app.get('/admin',checkMiddlewareAge,(req,resp)=>{
    resp.send("Admin")
})
app.get('/users',(req,resp)=>{
    resp.send("user page")
})
app.get('/products',checkMiddlewareAge,checkMiddlewarURL,(req,resp)=>{
    resp.send("products page")
})

app.listen(5500)