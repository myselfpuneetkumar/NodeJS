import express from 'express'
import path from 'path'
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.get('/',(req,resp)=>{

    const filePath = path.resolve("view/home.html")
    console.log(filePath)
    resp.sendFile(filePath)
})
app.get('/login',(req,resp)=>{
    resp.send(`
        <form action="/submit" method="post">
        <input type="text" placeholder="Enter your name" name="name">
        <input type="text" placeholder="Enter your Email" name="email">
        <input type="text" placeholder="Enter your password" name="password">
        <button>Login</button>
        </form>
        `)
})

app.post('/submit',(req,resp)=>{
    resp.send("Successfully submitted")
    console.log(req.body);
    
})

app.listen(3000)