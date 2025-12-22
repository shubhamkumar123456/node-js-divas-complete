import express from 'express';
const app = express();
const port = 8090;
import {userCollection}  from './config/db.js'  //  {userCollection}
import { ObjectId } from 'mongodb';


app.use(express.json())  //parse
app.get('/',(req,res)=>{
    res.send('welcome page')
})


app.post('/register',async(req,res)=>{
    // console.log(req.body)
    let collection = await userCollection()  // give you users collection
    let data = await collection.insertOne(req.body);
    res.json({msg:"user registered successfully"})
})

// app.put('/update/:id/:name',async(req,res)=>{
//     console.log(req.params)  //{ id: 'hello' }
//     console.log(req.params.id)  //{ id: 'hello' }
//     res.send("all good")
// })
app.put('/update/:id',async(req,res)=>{
    console.log(req.params)  //{ id: 'hello' }
    console.log(req.params.id)  //{ id: 'hello' }
    console.log(req.body)  //{name:'jack}

    let collection = await userCollection()  // users collection
    let data = await collection.updateOne({_id:new ObjectId(req.params.id)}, {$set:req.body})
    res.json({msg:"user updated successfully"})
    // res.send("all good")
})




app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})