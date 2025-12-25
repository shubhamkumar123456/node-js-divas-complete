
import { ObjectId } from "mongodb";
import { userCollection } from "../config/db.js";
import bcrypt from "bcryptjs";

const createUser = async(req,res)=>{
    try {
        const {name, email, password}  = req.body;  //object  
    if(!name){
        return res.json({msg:"name is required"})
    }
    if(!email){
        return res.json({msg:"email is required"})
    }
    if(!password){
        return res.json({msg:"password is required"})
    }
    let collection =await userCollection()  //

    let checkUser = await collection.findOne({email:email}) //  {_id, email, password, name}  or  null

    if(checkUser){
        return res.json({msg:"user already registerd"})
    }
    else{
        let salt  = bcrypt.genSaltSync(10);
        let hashPassword =  bcrypt.hashSync(password, salt)
        let data = await collection.insertOne({
            name,
            email,
            password:hashPassword
        })
        res.json({msg:"user registered successfully"})
    }
    } catch (error) {
            res.json({msg:"error in creating user "})
    }
    
}

const loginUser =async (req,res)=>{
    try {
        const {email ,password} = req.body  //{one@gmail.com,123fg}
     if(!email){
        return res.json({msg:"email is required"})
    }
    if(!password){
        return res.json({msg:"password is required"})
    }

    let collection = await userCollection();
    let userExist = await collection.findOne({email});  //{_id, email, name,password} or null
    if(!userExist){
        return res.json({msg:"user not found please sign up"})
    }
    else{
        let comparePassword = bcrypt.compareSync(password , userExist.password);//tur or false
        if(comparePassword){
            res.json({msg:"user log in successfully",user:userExist})
        }
        else{
            res.json({msg:"wrong password"})
        }

    }
    } catch (error) {
        res.json({msg:"error in creating user "})
    }
}

// Data send in api -->
// 1)req.body
// 2)req.params
// 2)req.query

const updateUser = async(req,res)=>{
    // // res.send("update function is running")
    try {
        const {id} = req.params
    const {name , password} = req.body;  //{name:xyz}
    let collection = await userCollection();

    if(name){
        let user = await collection.updateOne({_id:new ObjectId(id)}, {$set:{name:name}})

        res.json({msg:"user name is updated"})
    }
    if(password){
        console.log(password)
        let salt  =await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hashSync(password , salt);
        console.log(hashPassword)

        let user = await collection.updateOne({_id:new ObjectId(id)} , {$set:{password:hashPassword}});

        res.json({msg:"user password is updated"})
    }
    } catch (error) {
            res.json({msg:"error in updating user", error:error.message})
    }
    
}

const deleteUser = (req,res)=>{
    res.send("delete function is running")
}



export {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}

