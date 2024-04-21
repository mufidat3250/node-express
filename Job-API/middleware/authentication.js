const JWT = require('jsonwebtoken')
const User = require('../models/User')
const { UnAuthenticationError } = require('../errors')



// I will come back to understand this method
const auth = async(request, response, next) => {
    const authorizationHeader = request.headers.authorization
    if(!authorizationHeader || !authorizationHeader.startsWith('Bearer')){
        throw new UnAuthenticationError('Authentication is invalid')
    }
    const token = authorizationHeader.split(' ')[1]

    try {
        // const payload = JWT.verify(token, process.env.JWTSecret)
        // console.log({ payload }, 'from authorization')
        // request.user = {userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
        throw new UnAuthenticationError('Authentication is invalid')
    }
    // next()
}

module.exports = auth

const tokenExtractor = (request, response, next) => {
    const authorization = request.headers.authorization
    if(authorization && authorization.startsWith('Bearer ')){
        request["token"] = authorization.substr(7)
    }
    next()
}


// i love this approach downwards
const userExtractor = async(request, response, next) => {
    if(request.token){
        const decodedToken = JWT.verify(request.token, process.env.JWTSecret)
        const user = await User.findById(decodedToken.userId)
        request["user"] = {userId:user._id, name:user.name, email:user.email}
    }else{
        return response.status(401).send({error:'Token must be provided'})
    }
    next()
}

module.exports = {
    tokenExtractor , userExtractor
}