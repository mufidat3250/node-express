const {statusCodes} = require('http-status-codes')
const CustomAPIError = require('./customAPI')

class NotFoundError extends CustomAPIError {
    constructor(message){
    super(message)
    this.message = statusCodes.NOTFOUND
    }
}

module.exports = NotFoundError