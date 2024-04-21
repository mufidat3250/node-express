const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { BadRequest, UnAuthenticationError } = require("../errors");
const bcrypt = require("bcryptjs");
const JWT = require('jsonwebtoken')

const register = async (request, response) => {
  console.log({request})
  const { name, email, password } = request.body;
  if (!name || !email || !password) {
    throw new BadRequest("name, email and password must be provided");
  }
  const user = await User.create({ name, email, password });
  const token = JWT.sign({userId:user._id, name:user.name}, process.env.JWTSecret, { expiresIn: "30m" })
  response
    .status(StatusCodes.CREATED)
    .json({ name: user.name, email: user.email, token });
};

const login = async(request, response) => {
  console.log({ request })
    const {email, password} = request.body
    if(!email || !password) {
    throw new BadRequest('email and password must be provided')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnAuthenticationError('Invalid Credentials')
    }
    const isPasswordCorrect = user.comparePassword(password)

    if(!isPasswordCorrect){
        throw new UnAuthenticationError('Invalid credentials')
    }
    const token = JWT.sign({userId:user._id, name:user.name}, process.env.JWTSecret, { expiresIn: "30m" })
    response.status(StatusCodes.OK).json({name:user.name, email:user.email, token})

}


module.exports = { login, register };
