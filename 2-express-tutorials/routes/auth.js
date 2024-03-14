const express = require('express')
const router = express.Router()

router.post('/', (req, res)=> {
    const {name} = req.body
    if(!name){
        res.status(401).json({success:false, message:'name must be provided'})
    }else {
        res.status(200).json({success:true, message:`Welcome ${name.toUpperCase()}`})
    }

})

module.exports = router