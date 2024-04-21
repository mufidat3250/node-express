const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const getAllUser = async(request, response) => {
    const users = await User.find({})
    response.status(StatusCodes.OK).json({users})
}

module.exports = {getAllUser}