// import { MongoClient } from "mongodb";

// const uri =
//   "mongodb+srv://pk851474_db_user:3XWvIQ6X7Ss2z9Mc@cluster0.vuoxasf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// async function main() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log("✅ Connected!");

//     const db = client.db("school1");
//     console.log(await db.admin().ping());
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// main();



















import {MongoClient} from 'mongodb';

const url = "mongodb+srv://pk851474_db_user:3XWvIQ6X7Ss2z9Mc@cluster0.vuoxasf.mongodb.net/school1?retryWrites=true&w=majority";
// const url = "mongodb+srv://pk851474_db_user:3XWvIQ6X7Ss2z9Mc@cluster0.vuoxasf.mongodb.net/?appName=Cluster0"
const database = 'school1';
const collection = 'student';
const client = new MongoClient(url);
client.connect().then(()=>{
    console.log("...........connect.........");    
})
function dbConnection(){
const db = client.db(database)
const collectionResult = db.collection(collection);
const result = collectionResult.find().toArray();
console.log(result);

}

dbConnection()