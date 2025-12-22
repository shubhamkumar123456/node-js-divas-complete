
import { userCollection } from "../config/db.js";
import bcrypt from "bcryptjs";

const registerUser = async(req,res)=>{
        const {name,email,password} = req.body;
    let collection = await userCollection();

    let existingUser = await collection.findOne({email:email});
    if(existingUser){
        return res.json({msg:"user already registered"})
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);  //"Dawdawjodyw6q33908"
    let data = await collection.insertOne({
        name,
        email,
        password:hash
    })
    res.json({msg:"user registered successfully"})
}


const loginUser = async(req, res)=>{
    const {email, password} = req.body;  //shubham@gmail.com
    let collection = await userCollection();
    let existingUser = await collection.findOne({email});  // {_id,email,password}  or null
    if(!existingUser){
        return res.json({msg:"user not found please signup"})
    }

    // let comparePassword = bcrypt.compareSync("B4c0/\/", hash);
    let comparePassword = bcrypt.compareSync(password, existingUser.password);
    console.log(comparePassword)
    if(comparePassword){
        res.json({msg:"user log in successfully", user:existingUser})
    }
    else{
       res.json({msg:"wrong password"}) 
    }

    // userPassword  --> 123456
}





export {
    registerUser,
    loginUser
}