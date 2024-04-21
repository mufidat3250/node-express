const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./customAPI') 

class UnAuthenticationError extends CustomAPIError {
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthenticationError