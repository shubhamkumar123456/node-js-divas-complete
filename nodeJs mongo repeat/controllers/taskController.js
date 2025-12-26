import {taskCollection} from '../config/db.js'

const createTask = async(req,res)=>{
    const {taskName , status , date }  = req.body;
    const {userId} = req.params

    try {
        let collection = await taskCollection();
    let data = await collection.insertOne({
        taskName,
        status,
        date,
        userId
    })
    res.json({msg:"task created successfully"})
    } catch (error) {
        res.json({msg:"error in creating task",error:error.message})
    }
}

const getAllTask = async(req,res)=>{
    //  res.json({msg:"get task is running"})
    const {userId} = req.params;
    let collection = await taskCollection();
    let data = await collection.find({userId:userId}).toArray()  //[{}, {}]  //collection all data with matched userId
    res.json({msg:"fetched successfully", data})

}

const updateTask = async(req,res)=>{
     res.json({msg:"update task is running"})
}

const deleteTask = async(req,res)=>{
     res.json({msg:"delete task is running"})
}

export {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
}
