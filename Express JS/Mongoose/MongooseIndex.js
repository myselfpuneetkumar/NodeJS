import mongoose from 'mongoose'
import express from 'express';
import Schema from './studentSchema/studentSchema.js';
import studentModel from './Model/Model.js';


const app = express();
await  mongoose.connect("mongodb://localhost:27017/college").then(()=>{
   console.log("-------------Connected-----------");
   
})
app.use(express.json());

app.get('/',async(req,respo)=>{
   console.log("route is / ");

   const studentModels = await studentModel.find();
   console.log(studentModels);
   respo.send(studentModels)
   
   
   
})

app.post("/save", async (req,resp)=>{
   // let data = req.body
   const {name,email,age} = req.body;
   if(!req.body || !name || !email || !age){
      resp.send({
      message:"not submitted",
      success:false,
      
   })
   return false;
   }

   let studentData = await studentModel.create(req.body);
   resp.send({
      message:"done",
      success:true,
      
   })
 
   
})


app.put('/update/:id',async (req,resp)=>{
   const id = req.params.id;
console.log(id,req.body);

let update = await studentModel.findByIdAndUpdate(id,{
   ...req.body
})

   resp.send({
      message:"updated successfully",
      success:true,
      info:update
      
   })
})

app.delete('/delete/:id',async (req,resp)=>{
   const id = req.params.id;
console.log(id,req.body);

const deleteStudent = await studentModel.findByIdAndDelete(id,{
   ...req.body
})

   resp.send({
      message:"updated successfully",
      success:true,
      info:deleteStudent
      
   })
})
app.listen(5500);





// async function dbConnection (){
//    await  mongoose.connect("mongodb://localhost:27017/college")
//    const schema = Schema

//    const models = studentModel
//    console.log(models);
   
//    const result = await models.find();
//    console.log(result);
   
// }

// dbConnection();