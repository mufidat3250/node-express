
const errorHandler = (error, request, response, next) => {
    console.log({error:error.name, message:error.message})
    // console.log(error)
    if(error.name === "CastError"){
        response.status(401).send({error:'malformed id'})
    }else if(error.name === "ValidationError"){
       return  response.status(400).send({
            error:error.message
        })
    }else if(error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')){
        return response.status(400).send('Expect username email and name to be unique')
    }else if (error.name === 'JsonWebTokenError'){
       return response.status(400).send('Jwt must be provided')
    }else if(error.name === 'SyntaxError'){
        return response.status(400).send({message:'Syntax Error', error: error.message})
    }else if (error.name === 'TokenExpiredError'){
        return response.status(400).send({
            error: 'token expired'
        })
    }else if (error.name === 'TokenExpiredError'){
        return response.status(400).send('jwt expired')
    }
    else if (error.name === 'JsonWebTokenError'){
        return response.status(400).send('jwt malformed')
    }
    next()
}

module.exports = errorHandler