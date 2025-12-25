import express from 'express';
const app = express();
const port = 8080;
import {userCollection} from './config/db.js'   //{userCOllection:function}
import userRoutes from './routes/userRoutes.js';



app.use(express.json())//parse
app.get('/',(req,res)=>{
    res.send("welcome page")
})



app.use('/api/users' ,userRoutes)



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})