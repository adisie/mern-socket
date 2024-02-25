const jwt = require('jsonwebtoken')

// models
// users model
const User = require('../models/usersModel')

// privateRoutes
const privateRoutes = async (req,res,next) => {
    try{
        const token = req.cookies.token 
        if(!token){
            return res.status(401).json({
                message: 'token not exist',
                error: 'unathorized',
            })
        }
        // decode token
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET) 
        if(!decodedToken?._id){
            return res.status(401).json({
                message: 'token expired',
                error: 'unathorized',
            })
        }
        const user = await User.findById(decodedToken._id) 
        if(!user){
            return res.status(401).json({
                message: 'user of token not exist',
                error: 'unathorized',
            })
        }
        req.user = {
            _id: user._id,
            username: user.username,
        }
        next()
    }catch(err){
        res.status(401).json({
            message: 'token not exist',
            error: 'unathorized',
        })
    }
}

// exports
module.exports = {
    privateRoutes,
}