const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
name:{
    type: String,
    required:[true, 'Please provide a name'],
    maxLength : 50,
    minLength:3
},
email:{
    type:String,
    required:[true, 'Pleasee provide name'],
    maxLength: 50,
    minLength: 3,
    match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid mail'
    ],
    unique:true
},
password:{
    type:String,
    required:[true, 'Please provide password'],
    minLength:6
}
})
userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function() {
    return JWT.sign({userId:this.id, name:this.name}, process.env.JWTSecret, {expiresIn: '60'})
}

userSchema.methods.comparePassword = async function (candidatePassword){
   return await bcrypt.compare(candidatePassword, this.password)
}



userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('User', userSchema)