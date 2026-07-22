import express from 'express'

import {MongoClient, ObjectId} from 'mongodb'

const dbName = "school"
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url);
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine','ejs')
client.connect().then((connection)=>{
    const db =  connection.db(dbName)

    app.get('/api',async(req,res)=>{
        const collection = db.collection('classes')
        const result = await collection.find().toArray();
        res.send(result);
    })
    app.get('/ui',async(req,res)=>{
        const collection = db.collection('classes')
        const result = await collection.find().toArray();
        res.render('students',{result:result})
    })

    app.get('/add',(req,res)=>{
        
        res.render('add-student')
    })
    app.post('/add-data',async(req,res)=>{
              const collection = db.collection('classes');
              const result = await collection.insertOne(req.body)

            console.log(result);
        res.send("data sends");
    })
    app.post("/add-student-api",async(req,res)=>{
        const collection = db.collection('classes')
        const result = await collection.insertOne(req.body)

        const {name,email,logo} = req.body
        if(!name || !email || !logo){
            res.send({message:"sending unsuccessfull",success:"false"});
            return false;
        }
        
        res.send({message:"data stored successfully",success:"true",result:result})
        console.log(req.body);
        
    
    })
    app.delete("/delete/:id",(req,resp)=>{
        console.log(req.params.id);
        const collection = db.collection('classes')
        const result = collection.deleteOne({_id: new ObjectId(req.params.id)})

        if(result){
            resp.send({
                message:"data deleted",
                success:"true"
            })
        }
    
    })
    app.get("/ui/delete/:id",(req,resp)=>{
        console.log(req.params.id);
        const collection = db.collection('classes')
        const result = collection.deleteOne({_id: new ObjectId(req.params.id)})

        if(result){
            resp.send("Student record deleted")
        }else{
            resp.send("Student record not deleted")
            
        }
    
    })

    app.get("/ui/student/:id",async (req,resp)=>{
        const id = req.params.id
        const collection = db.collection('classes')
        const result = await collection.findOne({_id:new ObjectId(id)})
        console.log(id);
        
        resp.render('update-student',{result:result})
    })
    app.get("/student/:id",async (req,resp)=>{
        const id = req.params.id
        const collection = db.collection('classes')
        const result = await collection.findOne({_id:new ObjectId(id)})
        console.log(id);
        
        resp.send({
            message:"Update successfully",
            success:'true',
            result:result
        })
    })
})


app.listen(3000)



// app.get('/',async(req,resp)=>{
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('classes')
//     const result = await collection.find().toArray()
//     console.log(result);
//     resp.render('students',{result})
// })