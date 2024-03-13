const {people} = require('./data') 
const express = require('express')
const app = express()

app.use(express.json())

const generateID = (data)=> {
    console.log(data)
    const ids = data.map((data)=> data.id)
    console.log(ids)
    const max = Math.max(...ids)
    console.log({max})
    return max + 1
}
app.get('/api/people',(req, res)=> {
    res.json(people)
})

/// seach for people of some categories

app.get('/api/people/search', (req, res)=> {
    const {name, id} = req.query
    let sortedPeople = [...people]
    if(name){
       sortedPeople = sortedPeople.filter((people)=> people.name.startsWith(name))
       return res.status(200).json(sortedPeople)
    }
    if(id){
        sortedPeople = sortedPeople.filter((people)=> people.id === Number(id))
        return res.status(200).json(sortedPeople)
    }

    res.json(sortedPeople)
})

app.get('/api/people/:id', (req, res)=> {
    const id = Number( req.params.id)
    const person = people.find((people)=> people.id === id)
    if(!person){
        return res.status(404).json({success:false, message:`Id ${id} not available`})
    }else {
        res.status(200).json([person])
}
})

app.post('/api/people', (req, res)=> {
    const body = req.body

    if(!body){
        return res.status(400).json({success:false, meessage:'Name can not be missing'})
    }
    const newPerson = {
        name: body.name, 
        id: generateID(people)
    }
    res.status(200).json.concat(people.concat(newPerson))
})
app.put('/api/people/:id', (req, res)=>{
    const id = Number(req.params.id)
    const body = req.body
    const personToUpdate = people.find((person)=> person.id === id)
    if(!personToUpdate){
        return res.status(400).json({success:false, message:'id is not found'})
    }else if (!body){
        return res.status(400).json({success:false, message:'Provide the information to be updated'})
     }else {
        const upddatedPeople = people.map((person)=> person.id === id ? {...person, name:body.name}: person)
        res.json({success:true, data:upddatedPeople})
     }
})

app.delete('/api/people/:id', (req, res)=>{
    const id = Number(req.params.id)
    if(!id){
       return res.status.apply(400).json({success:false, message:'id must be provided'})
    }
    const data = people.filter((person)=> person.id !== id)
    res.status(201).json({success: true, data:data})
})


const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})