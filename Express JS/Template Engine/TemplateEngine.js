import express from "express";
const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.get('/',(req,resp)=>{
    // resp.send("Home Page");
    resp.render('home.ejs',{name:'puneet Kuamar',ytchannel:'techadii'})


    app.get('/add-user',(req,resp)=>{
resp.render('adduser')
    })
    app.post('/submit-user',(req,resp)=>{
resp.render('submituser',(req.body))
console.log(req.body)
    })
}).listen(5500)