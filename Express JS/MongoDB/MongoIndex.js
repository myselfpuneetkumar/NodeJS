import express from 'express'

import {MongoClient} from 'mongodb'

const dbName = "School"
const url = "mongodb://localhost:27017/new"
const client = new MongoClient(url);
const app = express();

app.use(express.urlencoded({extended:true}))
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
})

// app.get('/',async(req,resp)=>{
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('classes')
//     const result = await collection.find().toArray()
//     console.log(result);
//     resp.render('students',{result})
// })
app.listen(3000)


    