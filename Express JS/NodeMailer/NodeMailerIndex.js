import express from "express";
import nodemailer from 'nodemailer'
const app = express();

const transportermail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'pk851474@gmail.com',
        pass:'bcfn yymv hakq oawi'
    }
})
// app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')
app.get('/mail',(req,res)=>{
    res.render('mail')
})
app.post('/submit-email',(req,res)=>{
    console.log(req.body);
    
    res.send('submit mail')


const mailoptions = {
    from:"pk851474@gmail.com",
    to:"myselfpunitkumar@gmail.com",
    subject:req.body.subject,
    text:req.body.mail
}

transportermail.sendMail(mailoptions,(error,info)=>{
    if(error){
        req.send("error failed")
    }
    else{
        res.send('successfully submitted')
    }
})

})

// bcfn yymv hakq oawi

app.listen(5500)