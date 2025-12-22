import express from 'express';
const app = express();
const port = 8090;
import cors from 'cors'
import {userCollection} from './config/db.js'   //{}
import bcrypt from 'bcryptjs'
import userRoutes from './routes/userRoutes.js'

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("welcome page")
})


//app.post(api, cb function)
// app.post('/api/signup',async(req,res)=>{
//     const {name,email,password} = req.body;
//     let collection = await userCollection();

//     let existingUser = await collection.findOne({email:email});
//     if(existingUser){
//         return res.json({msg:"user already registered"})
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);  //"Dawdawjodyw6q33908"
//     let data = await collection.insertOne({
//         name,
//         email,
//         password:hash
//     })
//     res.json({msg:"user registered successfully"})

// })

app.use('/users',userRoutes)



app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})