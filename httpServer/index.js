import http from 'http';
const port = 8080;
import fs from 'fs'


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('this is welcome page')
        res.end()
    }
    else if(req.url==='/about'){
        res.write('<h1>THis is About page.....</h1>')
        res.end()
    }
    else if(req.url==='/abc'){
        let file = fs.readFileSync('./pages/home.html', 'utf-8');
        res.write(file);
        res.end()
    }
    else if(req.url==='/efg'){
        let file = fs.readFileSync('./pages/About.html', 'utf-8');
        res.write(file);
        res.end()
    }
    else if(req.url==="/products"){
        let arr = [
            {name:"iphone", price:50000, rating:4.2},
            {name:"samsung", price:40000, rating:4},
            {name:"realme", price:30000, rating:3},
            {name:"nokia", price:20000, rating:2},
        ]

        res.write(JSON.stringify(arr));
        res.end();
    }
//     else if(req.url==='/abc'){
//         res.write(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>THis is welcome home page</h1>
//     <img src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" alt="">
// </body>
// </html>`)
// res.end()
//     }
    else{
        res.write('<h1>Page not found</h1>');
        res.end()
    }
})

server.listen(port, ()=>{
    console.log(`server is running on port ${port} http://localhost:${port}`)
})