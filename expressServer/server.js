import express from 'express';
const app = express();
const port = 8080;
import cors from 'cors'


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome page")
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    
    res.json({msg:"data recieved in backend"});
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}  http://localhost:${port}`)
})



