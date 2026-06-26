import express from "express";
const app = express();

app.get('/',(req,resp)=>{
    resp.send("home")
})
app.get('/users',(req,resp)=>{
    resp.send("users")
})
app.get('/errors',(req,resp,next)=>{
    const error = new Error('')
    error.status = 404
    next(error)
    resp.send("Errors")

})

// function errorHandling(error,req,resp,next){
//     resp.status(error.status || 500).send("Try agian after some time")
// }
app.use((error,req,resp,next)=>{
    resp.status(error.status || 500).send("Try agian after some time")
})
app.listen(5500);