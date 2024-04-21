const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
company:{
    type:String,
    required:[true, 'Please provide company name'],
    maxLength:30
},
position:{
    type:String,
    required: [true, 'Please provide position'],
    maxLength: 100,
},
status:{
    type:String,
    enum:['interview', 'declined', 'pending'],
    default:'pending'
},
createdBy:{
    type: mongoose.Types.ObjectId,
    ref:'User',
    required:[, 'Please provide user']
},
jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'remote', 'internship'],
    default: 'full-time',
  },
  jobLocation: {
    type: String,
    default: 'my city',
    required: true,
  },


}, { timestamps: true})

JobSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Job', JobSchema)