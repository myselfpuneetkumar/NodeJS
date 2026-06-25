import express from 'express'
import path from 'path'
const app = express();
const absPath = path.resolve('view/')
const publicPath = path.resolve('public')
console.log(publicPath);
app.use(express.static(publicPath));

app.get('/',(req,resp)=>{
    // console.log(absPath)
    resp.sendFile(absPath+'/home.html')
})
app.get('/login',(req,resp)=>{
    // const absPath = path.resolve('view/login.html')
    // console.log(absPath)
    resp.sendFile(absPath+'/login.html')
})
app.get('/about',(req,resp)=>{
    // const absPath = path.resolve('view/about.html')
    // console.log(absPath)
    resp.sendFile(absPath+'/about.html')
})

app.use((req,resp)=>{
    // it is used when no page is found or middleware page
    // const absPath = path.resolve('view/404.html')
    resp.status(404).sendFile(absPath+'/404.html')
})

app.listen(5500)