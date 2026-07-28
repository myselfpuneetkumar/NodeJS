import express from "express";
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/',(req,resp)=>{
    resp.send({
        "name":"dogesh",
        "class":"5",
        "details":"Cors is used to allow the new port to access this port"
        })
})
app.listen(5500)