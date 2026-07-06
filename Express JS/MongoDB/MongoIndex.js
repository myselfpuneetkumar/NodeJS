import express from 'express'

import {MongoClient} from 'mongodb'

const dbName = "School"
const url = "mongodb://localhost:27017/new"
const client = new MongoClient(url);
async function dbConnection(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('classes')
    const result = await collection.find().toArray()
    console.log(result);
    
}

dbConnection();

const app = express();
app.listen(3000)
    