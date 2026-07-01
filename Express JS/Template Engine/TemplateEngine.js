import express from "express";
const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.get('/',(req,resp)=>{
    // resp.send("Home Page");
    resp.render('home.ejs',{name:'puneet Kuamar',ytchannel:'techadii'})

})
app.listen(5500)

    app.get('/add-user',(req,resp)=>{
resp.render('adduser')
    })
    app.post('/submit-user',(req,resp)=>{
resp.render('submituser',(req.body))
console.log(req.body)
    })

    app.get('/user',(req,resp)=>{
        const users = ['puneet','daksh','nisha','buggu'];
        resp.render('users',{users:users,isLogin:false})
    })