//
import express from "express";
const app = express();
app.use(express.urlencoded({extended:true}))
app.set("view engine",'ejs')
app.get('/login',(req,resp)=>{
    resp.render('login')
})
app.post('/profile',(req,resp)=>{
    resp.setHeader('Set-Cookie',"login=true")
    resp.setHeader('Set-Cookie',"name="+req.body.name)
    resp.render('profile')
})
app.get('/',(req,resp)=>{
    let cookiesData = req.get('cookie');
    cookiesData = cookiesData.split(";")
    cookiesData = cookiesData[1].split("=")
    console.log(cookiesData[1]);
    let cname = cookiesData[1]
    if(!cookiesData){
        cname = ''
        return false;
    }
    
    resp.render('home',{name:cname})
})

app.listen(5500);