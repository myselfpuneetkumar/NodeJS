
import express from "express";
const app = express();

app.get('/',(req,res)=>{
    const users = ['ram','shyam','dev','pk']
    let data = '<ul>';
    for(let i=0;i<users.length; i++){
        data+=`<li>This is user name <a href="/user/${users[i]}">${users[i]}</a></li>`
        // console.log(users[i]);
        
    }
    data+= `</ul>`
    res.send(data)
})


app.get('/user/:name',(req,resp)=>{
   
    const userName = req.params.name;
    const uppername = userName.charAt(0).toUpperCase()+userName.slice(1);
    resp.send("this is user name "+uppername)
    
})

app.listen(5500)