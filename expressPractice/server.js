import express from 'express';
const app = express();
const port = 8090;
import cors from 'cors';


app.use(cors())  //middleware
app.use(express.json());  //middleware

app.use((req,res,next)=>{
        console.log("hello")
        // res.send("hii")
        next()
})


app.get('/',(req,res)=>{
    res.send("welcome home")
})


app.post('/register',(req,res)=>{
    console.log(req.body)
    res.json({msg:"data recieved in backend"})
})

app.get('/products',(req,res)=>{
    let arr = [
        {id:1, name:"iphone",price:50000,rating:5},
        {id:2, name:"Samsung",price:40000,rating:3.5},
        {id:3, name:"MI",price:30000,rating:2},
        {id:4, name:"Realme",price:20000,rating:3},
        {id:5, name:"Oppo",price:10000,rating:4},
    ]

    res.json({arr:arr})
})


app.listen(port,()=>{
    console.log(`server is running on port ${port} http://localhost:${port}`)
})