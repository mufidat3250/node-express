const Task = require('../models/taskModel')

module.exports =  generateID = (data)=> {
    console.log(data)
    const ids = data.map((data)=> data.id)
    console.log(ids)
    const max = Math.max(...ids)
    console.log({max})
    return max + 1
}

const tasks = [
    {
        name:'Wash cloth',
        status: 'Completed',
        id:1

    },
    {
        name:'Clean the house',
        status: 'Incomplete',
        id:2
    },
    {
        name:'Cook',
        status: 'Completed',
        id:3
    }
]


const getTasks = (req, res)=>{
    Task.find({}).then((tasks)=> {
        res.status(200).json(tasks)
    })
}
const getTask = (req, res)=>{
    const id = Number(req.params.id)
    const singleTask = tasks.find((task)=> task.id === id)
    if(!singleTask){
        return res.status(404).json({success:false, message:`The id you provided is not available`})
    }else{
        Task.findById(req.params.id).then((task)=> {
         res.status(200).json(task)
        })
    }
}
const createTask = (req, res)=>{
    const body = req.body
    const newtask = {
        name: body.name,
        status: body.status,
        id: generateID(tasks)
    }
    if(!body){
        res.status(400).json({success:false, message:`Bad request provide the necessary data`})
    }else {
        const newTask = new Task({
            name: body.name,
            status:body.status
        })
        newTask.save().then((savedNote)=> {
            res.status(200).json(savedNote)
        })
    }
}

const updateTask = (req, res)=>{
    const body = req.body
    const id = Number(req.params.id)
    if(!body){
       return res.status(400).json({success:false, message:'Provide the taks to update'})
    }
    Task.findByIdAndUpdate(res.params.id).then((updatedTask)=>{
        res.status(200).json({success:true, data: updatedTask})
    })
}

const deleteTask = (req, res)=>{
    const id = Number(req.params.id)
    const taskToDelete = tasks.find((task)=> task.id === id)
    if(!taskToDelete){
        res.status(400).json({success:false, message:`Opps! seams the data you provided is not available`})
    }else {
        const remainingTask = tasks.filter((task)=> task.id !== id)
        res.status(200).json({success:true, data:remainingTask})
        Task.findByIdAndDelete().then(()=>{
            res.status(204).end()
        })
    }
}

module.exports = {
    getTask, getTasks, createTask, updateTask, deleteTask
}