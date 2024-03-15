const Task = require('../models/taskModel')

module.exports =  generateID = (data)=> {
    console.log(data)
    const ids = data.map((data)=> data.id)
    console.log(ids)
    const max = Math.max(...ids)
    console.log({max})
    return max + 1
}

const getTasks = (req, res)=>{
    Task.find({}).then((tasks)=> {
        res.status(200).json(tasks)
    })
}
const getTask = (req, res)=>{
    Task.findById(req.params.id).then((task)=> {
        res.status(200).json(task)
       }).catch((err)=> {
        res.status(400).json({success:false, message:`No id match ${req.params.id}`})
       })
}
const createTask = (req, res)=>{
    const body = req.body
    if(body.name === "undefind"){
        console.log('name is undefined')
        return res.status(400).json({success:false, message:`Bad request provide the necessary data`})
    }
        const newTask = new Task({
            name: body.name,
            completed:body.completed
        })
        newTask.save().then((savedTask)=> {
            res.status(201).json(savedTask)
        })
}

const updateTask = (req, res)=>{
    const body = req.body
    if(!body.name){
       return res.status(400).json({success:false, message:'Provide the tasks to update'})
    }
    console.log(req.params.id, req.body)
    Task.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}).then((updatedTask)=>{
        res.status(200).json(updatedTask)
    })
}

const deleteTask = (req, res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id).then(()=>{
        res.status(204).end()
    })
}

module.exports = {
    getTask, getTasks, createTask, updateTask, deleteTask
}