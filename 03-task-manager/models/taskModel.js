require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

mongoose.set('strictQuery', true)
mongoose.connect(url).then((res)=> {
    console.log('Monngo connected to mongoDB')
}).catch((error)=>{
    console.log('Data not connected to mongo DB', error.message)
})

 const taskSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Provide the name prop'],
        maxLength:20
    },
    completed: {
        type:Boolean,
        required:[true, 'Status must be provided']
    },
 })
 taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports = mongoose.model('Task', taskSchema)
