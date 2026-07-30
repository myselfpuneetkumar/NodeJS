import express from "express";
import session from 'express-session'
const app = express();
app.use(express.urlencoded({extended:true}))
app.set("view engine",'ejs')
app.use(session({
    secret:'apple',
    resave:false,
}))



app.get('/login',(req,resp)=>{
    resp.render('login')
})

app.post('/profile',(req,resp)=>{
    req.session.data=req.body;
    console.log( req.session.data);
    
    resp.render('profile')
})
app.get('/',(req,resp)=>{
    const data = req.session.data;
    console.log(data);
    
    resp.render('Home',{data})
})

app.listen(5500)