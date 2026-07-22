import mongoose from 'mongoose'
import express from 'express';
import Schema from './studentSchema/studentSchema.js';
import studentModel from './Model/Model.js';


const app = express();
await  mongoose.connect("mongodb://localhost:27017/college").then(()=>{
   console.log("-------------Connected-----------");
   
})
app.use(express.json)

app.get('/',async(req,response)=>{
   console.log("route is / ");
   
   // const studentModels = await studentModel.find();
   // response.send(studentModels)
   // console.log(studentModels);
   


})


// app.post("/save", (req,resp)=>{
//    // let data = req.body
//    resp.send({
//       message:"done",
//       success:true,
      
//    })
//    // console.log(data);
   
// })

app.listen(4500);





// async function dbConnection (){
//    await  mongoose.connect("mongodb://localhost:27017/college")
//    const schema = Schema

//    const models = studentModel
//    console.log(models);
   
//    const result = await models.find();
//    console.log(result);
   
// }

// dbConnection();